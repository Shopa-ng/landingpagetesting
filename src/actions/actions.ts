"use server";

import { revalidatePath } from "next/cache";
import React from "react";
import prisma from "@/lib/prisma";
import { Resend } from "resend";
import { waitlistEmailHTML } from "@/components/emails/waitlist-email-html";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function joinWaitlist(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const university = formData.get("university") as string;
  const message = formData.get("message") as string;

  if (!name || !email || !university) {
    return { error: "Please fill in all required fields." };
  }

  try {
    const existingUser = await prisma.waitlist.findUnique({
      where: { email },
    });

    if (existingUser) {
      return {
        error: `You're already on the waitlist! We'll notify you at ${email} when we launch.`,
      };
    }

    await prisma.waitlist.create({
      data: {
        name,
        email,
        university,
        message,
      },
    });

    // Send welcome email automatically
    let emailErrorMsg: string | null = null;
    try {
      await resend.emails.send({
        from: "Shopa <noreply@contact.shopshopa.com.ng>",
        to: email,
        subject: "Welcome to the Shopa Waitlist! 🎉",
        html: waitlistEmailHTML(name, undefined),
      });
    } catch (emailError) {
      console.error("Error sending welcome email:", emailError);
      emailErrorMsg =
        emailError instanceof Error ? emailError.message : String(emailError);
      // Don't fail the waitlist join if email fails
    }

    revalidatePath("/");
    return {
      success: "You have successfully joined the waitlist!",
      emailError: emailErrorMsg,
    };
  } catch (error) {
    console.error("Error joining waitlist:", error);
    return { error: "Something went wrong. Please try again." };
  }
}
