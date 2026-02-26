export function waitlistEmailHTML(name: string, message?: string) {
  const safeName = String(name ?? "").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  const safeMessage = message ? String(message).replace(/</g, "&lt;").replace(/>/g, "&gt;") : "";

  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Welcome to Shopa</title>
  </head>
  <body style="margin:0;padding:0;background:#FCD34D;font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;color:#000;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
      <tr>
        <td align="center">
          <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="margin:24px auto;border-radius:24px;overflow:hidden;">
            <tr>
              <td style="background:#FCD34D;padding:40px;">
                <div style="text-align:center;margin-bottom:30px;">
                  <h2 style="color:#15803D;font-size:36px;margin:0;font-weight:700;">Shopa</h2>
                </div>
                <h1 style="font-size:32px;font-weight:700;margin:0 0 20px 0;line-height:1.3;">Thank you for joining the <span style="color:#15803D;">Shopa</span> waitlist!</h1>

                <p style="font-size:16px;line-height:1.6;margin:20px 0;">Hi ${safeName},</p>

                <p style="font-size:16px;line-height:1.6;margin:20px 0;">This means you'll be amongst <strong>the first to get major updates</strong> about Shopa, get the opportunity to <strong>participate</strong> in our usability testing before official launch, see special offers and promotions and <strong>stand a chance</strong> to win amazing prizes from Shopa!</p>

                <p style="font-size:16px;line-height:1.6;margin:20px 0;"><strong>Please ensure to follow us</strong> across all social media platforms <strong>@shopanigeria</strong> to be a part of our growing community and also share to your friends!</p>

                <p style="font-size:16px;line-height:1.6;margin:20px 0;">We can't wait to have you on board with the wonderful project we're building that could potentially change the fortunes of student e-commerce.</p>

                ${safeMessage ? `<div style="background:rgba(255,255,255,0.5);padding:15px;border-radius:8px;margin:20px 0;font-size:15px;line-height:1.5;font-style:italic;color:#000;">${safeMessage}</div>` : ""}

                <p style="font-size:16px;font-weight:700;margin:30px 0 0 0;">Courtesy,<br/>Shopa.</p>

                <div style="margin-top:40px;padding-top:20px;border-top:2px solid rgba(0,0,0,0.08);font-size:12px;text-align:center;color:rgba(0,0,0,0.6);">
                  <p style="margin:0;">© 2026 Shopa. All rights reserved.<br/>Buy, Sell, Connect</p>
                </div>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}
