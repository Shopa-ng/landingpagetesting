export function waitlistEmailHTML(name: string, message?: string) {
  const safeName = String(name ?? "").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  const safeMessage = message ? String(message).replace(/</g, "&lt;").replace(/>/g, "&gt;") : "";

  // Use text-based logo (Gmail strips or blocks some embedded images and large data URIs). Text logo is more reliable across clients.

  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="color-scheme" content="light" />
  <meta name="supported-color-schemes" content="light" />
    <title>Welcome to Shopa</title>
    <style>
      /* Avoid webfont imports — most webmail clients (Gmail) won't load external fonts in emails. Use system fallbacks. */
    </style>
  </head>
  <body bgcolor="#FDC500" style="margin:0;padding:0;background-color:#FDC500;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" bgcolor="#FDC500" style="border-collapse:collapse;width:100%;background-color:#FDC500;margin:0;padding:0;">
      <tbody>
        <tr>
          <td align="center" valign="top" style="padding:20px;margin:0;">
            <table role="presentation" width="600" cellpadding="0" cellspacing="0" bgcolor="#FDC500" style="background-color:#FDC500;border-collapse:collapse;margin:0;padding:0;">
              <tbody>
                <tr>
                  <td bgcolor="#FDC500" style="background-color:#FDC500;padding:48px 40px 40px 40px;margin:0;color:#151515 !important;-webkit-text-fill-color:#151515 !important;font-family:'Plus Jakarta Sans',Arial,sans-serif;"><font color="#151515" style="color:#151515 !important;-webkit-text-fill-color:#151515 !important;font-family:'Plus Jakarta Sans',Arial,sans-serif;">
                    <div style="text-align:center;margin:0 0 24px 0;padding:0;font-family:'Plus Jakarta Sans',Arial,sans-serif;">
                      <span style="display:inline-block;font-size:36px;font-weight:700;color:#2E7D32;line-height:1;">Shopa</span>
                    </div>
                    <h1 style="font-size:32px;font-weight:700;margin:0 0 24px 0;line-height:1.3;color:#151515 !important;-webkit-text-fill-color:#151515 !important;text-align:center;font-family:'Plus Jakarta Sans',Arial,sans-serif;"><font color="#151515">Thank you for joining the <span style="color:#2E7D32 !important;font-family:'Plus Jakarta Sans',Arial,sans-serif;">Shopa</span> waitlist!</font></h1>

                    <p style="font-size:16px;line-height:1.6;margin:20px 0;color:#151515 !important;-webkit-text-fill-color:#151515 !important;font-family:'Plus Jakarta Sans',Arial,sans-serif;">Hi ${safeName},</p>

                    <p style="font-size:16px;line-height:1.6;margin:20px 0;color:#151515 !important;-webkit-text-fill-color:#151515 !important;font-family:'Plus Jakarta Sans',Arial,sans-serif;">This means you'll be amongst <strong style="color:#151515 !important;-webkit-text-fill-color:#151515 !important;font-family:'Plus Jakarta Sans',Arial,sans-serif;">the first to get major updates</strong> about Shopa, get the opportunity to <strong style="color:#151515 !important;-webkit-text-fill-color:#151515 !important;font-family:'Plus Jakarta Sans',Arial,sans-serif;">participate</strong> in our usability testing before official launch, see special offers and promotions and <strong style="color:#151515 !important;-webkit-text-fill-color:#151515 !important;font-family:'Plus Jakarta Sans',Arial,sans-serif;">stand a chance</strong> to win amazing prizes from Shopa!</p>

                    <p style="font-size:16px;line-height:1.6;margin:20px 0;color:#151515 !important;-webkit-text-fill-color:#151515 !important;font-family:'Plus Jakarta Sans',Arial,sans-serif;"><strong style="color:#151515 !important;-webkit-text-fill-color:#151515 !important;font-family:'Plus Jakarta Sans',Arial,sans-serif;">Please ensure to follow us</strong> across all social media platforms <strong style="color:#151515 !important;-webkit-text-fill-color:#151515 !important;font-family:'Plus Jakarta Sans',Arial,sans-serif;">@shopanigeria</strong> to be a part of our growing community and also share to your friends!</p>

                    <p style="font-size:16px;line-height:1.6;margin:20px 0;color:#151515 !important;-webkit-text-fill-color:#151515 !important;font-family:'Plus Jakarta Sans',Arial,sans-serif;">We can't wait to have you on board with the wonderful project we're building that could potentially change the fortunes of student e-commerce.</p>

                    ${safeMessage ? `<div style="background-color:#f0f8f0;padding:16px;margin:24px 0;font-size:15px;line-height:1.6;color:#151515 !important;-webkit-text-fill-color:#151515 !important;border-left:4px solid #2E7D32 !important;font-family:'Plus Jakarta Sans',Arial,sans-serif;">${safeMessage}</div>` : ""}

                    <p style="font-size:16px;font-weight:600;margin:32px 0 0 0;color:#151515 !important;-webkit-text-fill-color:#151515 !important;font-family:'Plus Jakarta Sans',Arial,sans-serif;">Courtesy,<br/>Shopa.</p>

                    <div style="margin-top:40px;padding-top:20px;border-top:1px solid #ddd;font-size:12px;text-align:center;color:#151515 !important;-webkit-text-fill-color:#151515 !important;font-family:'Plus Jakarta Sans',Arial,sans-serif;">
                      <p style="margin:8px 0;color:#151515 !important;-webkit-text-fill-color:#151515 !important;font-family:'Plus Jakarta Sans',Arial,sans-serif;">© 2026 Shopa. All rights reserved.<br/><span style="font-weight:600;color:#151515 !important;-webkit-text-fill-color:#151515 !important;font-family:'Plus Jakarta Sans',Arial,sans-serif;">Buy, Sell, Connect</span></p>
                    </div>
                    </font>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  </body>
</html>`;
}
