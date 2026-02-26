"use server";

import React from "react";
import prisma from "@/lib/prisma";
import { Resend } from "resend";
import { waitlistEmailHTML } from "@/components/emails/waitlist-email-html";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendWaitlistEmails(options: {
  subject: string;
  message?: string;
  recipientEmails?: string[]; // If provided, only send to these emails
}) {
  try {
    if (!process.env.RESEND_API_KEY) {
      console.error("Missing RESEND_API_KEY environment variable");
      return {
        success: false,
        error: "Missing RESEND_API_KEY environment variable",
        sent: 0,
      };
    }
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
          from: "Shopa <noreply@contact.shopshopa.com.ng>",
          to: member.email,
          subject: subject,
          html: waitlistEmailHTML(member.name || "", message),
        })
      )
    );

    // Collect results and failure details
    const successful = results.filter(
      (r) => r.status === "fulfilled" && "data" in (r as any).value && (r as any).value.data
    ).length;

    const failures: string[] = [];
    results.forEach((r, idx) => {
      if (r.status === "rejected") {
        failures.push(`${waitlistMembers[idx].email}: ${(r as PromiseRejectedResult).reason?.message || String((r as PromiseRejectedResult).reason)}`);
      } else {
        // fulfilled but missing data
        const v = (r as PromiseFulfilledResult<any>).value;
        if (!v || !("data" in v) || !v.data) {
          failures.push(`${waitlistMembers[idx].email}: no-data-or-error`);
        }
      }
    });

    const failed = failures.length;

    return {
      success: failed === 0,
      sent: successful,
      failed: failed,
      total: waitlistMembers.length,
      message: `Sent ${successful}/${waitlistMembers.length} emails. ${failed} failed.`,
      failures: failures,
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
