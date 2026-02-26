"use server";

import prisma from "@/lib/prisma";
import { Resend } from "resend";
import { WaitlistEmail } from "@/components/emails/waitlist-email";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendWaitlistEmails(options: {
  subject: string;
  message?: string;
  recipientEmails?: string[]; // If provided, only send to these emails
}) {
  try {
    const { subject, message, recipientEmails } = options;

    // Fetch waitlist members
    let waitlistMembers = await prisma.waitlist.findMany({
      select: {
        id: true,
        email: true,
        name: true,
      },
    });

    // Filter if specific emails provided
    if (recipientEmails && recipientEmails.length > 0) {
      waitlistMembers = waitlistMembers.filter((member) =>
        recipientEmails.includes(member.email)
      );
    }

    if (waitlistMembers.length === 0) {
      return {
        success: false,
        error: "No waitlist members found",
        sent: 0,
      };
    }

    // Send emails
    const results = await Promise.allSettled(
      waitlistMembers.map((member) =>
        resend.emails.send({
          from: "Shopa <noreply@shopa.ng>",
          to: member.email,
          subject: subject,
          react: WaitlistEmail({
            name: member.name,
            message: message,
          }) as React.ReactElement,
        })
      )
    );

    // Count successful sends
    const successful = results.filter(
      (r) => r.status === "fulfilled" && "data" in r.value && r.value.data
    ).length;
    const failed = results.length - successful;

    return {
      success: true,
      sent: successful,
      failed: failed,
      total: waitlistMembers.length,
      message: `Successfully sent ${successful} emails. ${failed > 0 ? `${failed} failed.` : ""}`,
    };
  } catch (error) {
    console.error("Error sending emails:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to send emails",
      sent: 0,
    };
  }
}
