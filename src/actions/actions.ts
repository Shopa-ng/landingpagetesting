"use server";

import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";

const prisma = new PrismaClient();

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

    revalidatePath("/");
    return { success: "You have successfully joined the waitlist!" };
  } catch (error) {
    console.error("Error joining waitlist:", error);
    return { error: "Something went wrong. Please try again." };
  }
}
