import dotenv from "dotenv";
// load .env.local where our RESEND_API_KEY is defined
 dotenv.config({ path: ".env.local" });

import { Resend } from "resend";
import { waitlistEmailHTML } from "../src/components/emails/waitlist-email-html.ts";

async function main() {
  const resend = new Resend(process.env.RESEND_API_KEY || "");
  try {
    const res = await resend.emails.send({
      from: "Shopa <noreply@shopa.ng>",
      to: "test@example.com",
      subject: "Manual test",
      html: waitlistEmailHTML("Test User", "hello"),
    });
    console.log("send response", res);
  } catch (e) {
    console.error("send error", e);
  }
}

main().catch(console.error);
