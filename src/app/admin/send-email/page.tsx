"use client";

import { useState } from "react";
import { sendWaitlistEmails } from "@/actions/send-emails";
import { toast } from "sonner";

export default function SendEmailPage() {
  const [subject, setSubject] = useState(
    "Exciting News: Shopa is Coming Soon!"
  );
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async () => {
    if (!subject.trim()) {
      toast.error("Please enter a subject");
      return;
    }

    setIsLoading(true);
    try {
      const result = await sendWaitlistEmails({
        subject,
        message: message || undefined,
      });

      if (result.success) {
        toast.success(result.message);
        setMessage("");
        if (result.failures && result.failures.length > 0) {
          console.error("Email failures:", result.failures);
          toast.error(`Some emails failed (${result.failures.length}). Check console.`);
        }
      } else {
        toast.error(result.error || "Failed to send emails");
        if ((result as any).failures) {
          console.error("Email failures:", (result as any).failures);
        }
      }
    } catch (error) {
      toast.error("Something went wrong");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-amber-50 p-6">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Send Email to Waitlist
            </h1>
            <p className="text-gray-600">
              Compose and send personalized emails to all waitlist members
            </p>
          </div>

          {/* Form */}
          <div className="space-y-6">
            {/* Subject */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Subject
              </label>
              <input
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition"
                placeholder="Enter email subject"
              />
            </div>

            {/* Custom Message */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Custom Message (Optional)
              </label>
              <p className="text-xs text-gray-500 mb-2">
                This will be added to the email template in an italicized box
              </p>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={6}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition resize-none"
                placeholder="Enter any additional message you'd like to include..."
              />
            </div>

            {/* Preview Info */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-sm text-blue-800">
                <strong>Note:</strong> Each email will be personalized with the
                recipient's name from the waitlist. The template will include
                your custom message if provided.
              </p>
            </div>

            {/* Send Button */}
            <button
              onClick={handleSend}
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-green-600 to-amber-500 hover:from-green-700 hover:to-amber-600 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-lg transition duration-200"
            >
              {isLoading ? "Sending Emails..." : "Send to All Waitlist Members"}
            </button>
          </div>

          {/* Info Section */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              About This Tool
            </h2>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>✓ Emails are sent to all waitlist members</li>
              <li>✓ Each email is personalized with the recipient's name</li>
              <li>✓ The Shopa branded email template is automatically applied</li>
              <li>✓ Custom messages are optional and highlighted in the email</li>
              <li>✓ Sent through Resend for reliable delivery</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
