export function waitlistEmailHTML(name: string, message?: string) {
  const safeName = String(name ?? "").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  const safeMessage = message ? String(message).replace(/</g, "&lt;").replace(/>/g, "&gt;") : "";

  // Shopa logo SVG embedded as a data URI for email reliability
  const logoSvg = `data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYyIiBoZWlnaHQ9IjQ0IiB2aWV3Qm94PSIwIDAgMTYyIDQ0IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0yMS44NzcyIDIzLjgyMTRMMTAuODY2NyAyMS44NTY3Qy01LjYwMDI3IDE4LjU2NiAtMS44NDg5MiAwIDEyLjA4NDcgMEgzMC4xNTk0VjguOTg4MjhIMTIuMDg0N0M4LjUyODIxIDguOTg4MjggNy42MDI1NSAxMS44MzcgMTIuODY0MiAxMi43NzAyTDIzLjkyMzQgMTQuNzg0QzQwLjM5MDQgMTguMDI1NyAzNi41OTAzIDM2LjgzNzIgMjIuNjU2NyAzNi44MzcySDIuMzg5NjNWMjcuNTU0MkgyMi42NTY3QzI2LjI2MTkgMjcuNTU0MiAyNy4xODc2IDI0Ljc1NDYgMjEuODc3MiAyMy44MjE0WiIgZmlsbD0iIzJFN0QzMiIvPjxwYXRoIGQ9Ik0zNC41OTAyIDAuMDQ5MTE4Nkg0My43MDA2VjcuODU4NkM1My41NDE4IDMuMjkwNzkgNjcuOTYyNiA4LjIwMjQyIDY3Ljk2MjYgMjIuNDQ2MVYzNi44MzcySDU4Ljg1MjJWMjIuNDQ2MUM1OC44NTIyIDEyLjgxOTMgNDMuNzk4IDEyLjgxOTMgNDMuNzk4IDIyLjQ0NjFWMzYuODM3Mkg0NC41OTAyVjAuMDQ5MTE4NloiIGZpbGw9IiMyRTdEMzIiLz48cGF0aCBkPSJNODQuNDc0NSA1Ljc0NjYxQzg3LjAwNzkgNS43NDY2MSA4OS4zOTUxIDYuMjg2ODggOTEuNDkgNy4zMTgzM1YyMC4zMzQxQzkwLjgwOCAxNi45NDUxIDg3LjY5IDE0Ljk4MDUgODQuNDc0NSAxNC45ODA1QzgwLjc3MTkgMTQuOTgwNSA3Ny40MTAzIDE3Ljc4MDEgNzcuNDEwMyAyMS40NjM4Qzc3LjQxMDMgMjkuNzY0NSA5MS41ODc1IDMwLjA1OTIgOTEuNTg3NSAyMS40NjM4Qzk0LjU4NzUgMjEuMTIgOTEuNTM4OCAyMC41MzA2IDkxLjQ5IDIwLjUzMDZMOTcuODIzNSAxMi41NzM4Qzk5LjYyNjEgMTUuMDI5NiAxMDAuNzQ3IDE4LjEyMzkgMTAwLjc0NyAyMS40NjM4QzEwMC43NDcgMzAuNDUyMSA5Mi43NTY3IDM3LjE4MSA4NC40NzQ1IDM3LjE4MUM3NS43MDUxIDM3LjE4MSA2OC4yNTExIDMwLjAxIDY4LjI1MTEgMjEuNDYzOEM2OC4yNTExIDEyLjQyNjQgNzYuMTkyMyA1Ljc0NjYxIDg0LjQ3NDUgNS43NDY2MVoiIGZpbGw9IiMyRTdEMzIiLz48cGF0aCBkPSJNMTEwLjE3OCAzNC44NzI2VjQzLjE3MzJIMTAxLjAxOEMxMDEuMDE4IDM1LjYwOTMgMTAwLjk3IDI4LjA0NTQgMTAwLjk3IDIwLjUzMDZDMTAwLjk3IDE2LjUwMzEgMTAyLjU3NyAxMi45NjY3IDEwNS4xNTkgMTAuMzYzNUMxMTMuNzM0IDEuNjIwODQgMTMxLjA3OCA3LjAyMzYzIDEzMS4wNzggMjAuNTMwNkMxMzEuMDc4IDI4LjM4OTIgMTI0Ljc0NCAzNC44NzI2IDExNi45MDEgMzQuODcyNkgxMTAuMTc4Wk0xMTAuMTc4IDI1LjU0MDVIMTE2LjkwMUMxMTkuNjc4IDI1LjU0MDUgMTIxLjk2OCAyMy4yODExIDEyMS45NjggMjAuNTMwNkMxMjEuOTY4IDE5LjA1NzEgMTIxLjM4MyAxNy43ODAxIDEyMC40NTcgMTYuOTQ1MUMxMTcuMTkzIDEzLjg1MDggMTEwLjE3OCAxNS4zMjQzIDExMC4xNzggMjAuNTMwNlYyNS41NDA1WiIgZmlsbD0iIzJFN0QzMiIvPjxwYXRoIGQ9Ik0xNjIgMTcuOTc2NkMxNjIgMjEuMTIgMTYyIDI0LjI2MzQgMTYyIDI3LjQ1NkMxNjIgMzAuMDEgMTYwLjg3OSAzMi4zNjc2IDE1OS4xNzQgMzQuMDg2N0MxNTcuNDIgMzUuODA1OCAxNTUuMDgyIDM2LjgzNzIgMTUyLjMwNSAzNi44MzcyQzE0NC42NTYgMzYuODM3MiAxNDUuNjc5IDM2LjgzNzIgMTM5Ljg4MiAzNi44MzcyQzEzNy4yMDIgMzYuODM3MiAxMzQuODE1IDM1LjgwNTggMTMzLjAxMiAzNC4wODY3QzEyOS4zMSAzMC40MDMgMTI5LjMxIDIzLjk2ODcgMTMzLjAxMiAyMC4yMzU5QzEzNC44MTUgMTguNTY2IDEzNy4yMDIgMTcuNTM0NSAxMzkuODgyIDE3LjUzNDVDMTQ3LjA5MiAxNy41MzQ1IDE0NS4zMzggMTcuNTM0NSAxNTIuNjk1IDE3LjUzNDVDMTUyLjM1NCAxNi4wNjEgMTUwLjk5IDE0LjkzMTMgMTQ5LjM4MiAxNC45MzEzSDEzNC45MTJWNi4yMzc3N0gxNDkuMzgyQzE1Ni4wNTYgNi4yMzc3NyAxNjEuNjEgMTEuNDQ0MSAxNjIgMTcuOTc2NlpNMTQwLjU2NCAyOC45Nzg2QzE0Ni4wNjkgMjguOTc4NiAxNDMuNDM4IDI4Ljk3ODYgMTUwLjg0MyAyOC45Nzg2QzE1Mi4wNjEgMjguOTc4NiAxNTMuMDg0IDI4LjA0NTQgMTUzLjA4NCAyNi43Njg0VjI0LjU1ODFDMTQ2LjU1NiAyNC41NTgxIDE0Ni40NTkgMjQuNTU4MSAxNDAuNTY0IDI0LjU1ODFDMTM3LjU5MiAyNC41NTgxIDEzNy41OTIgMjguOTc4NiAxNDAuNTY0IDI4Ljk3ODZaIiBmaWxsPSIjMkU3RDMyIi8+PHBhdGggZD0iTTE0MS4yMTQgNDEuNDQxOUMxNDEuMjE0IDQyLjg1NDcgMTQwLjA3OCA0NCAxMzguNjc3IDQ0QzEzNy4yNzUgNDQgMTM2LjEzOSA0Mi44NTQ3IDEzNi4xMzkgNDEuNDQxOUMxMzYuMTM5IDQwLjAyOSAxMzcuMjc1IDM4Ljg4MzcgMTM4LjY3NyAzOC44ODM3QzE0MC4wNzggMzguODgzNyAxNDEuMjE0IDQwLjAyOSAxNDEuMjE0IDQxLjQ0MTlaIiBmaWxsPSIjMkU3RDMyIi8+PHBhdGggZD0iTTE1Ni45NDYgNDEuNDQxOUMxNTYuOTQ2IDQyLjg1NDcgMTU1LjgxIDQ0IDE1NC40MDkgNDRDMTUzLjAwNyA0NCAxNTEuODcxIDQyLjg1NDcgMTUxLjg3MSA0MS40NDE5QzE1MS44NzEgNDAuMDI5IDE1My4wMDcgMzguODgzNyAxNTQuNDA5IDM4Ljg4MzdDMTU1LjgxIDM4Ljg4MzcgMTU2Ljk0NiA0MC4wMjkgMTU2Ljk0NiA0MS40NDE5WiIgZmlsbD0iIzJFN0QzMiIvPjwvc3ZnPg==`;

  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Welcome to Shopa</title>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');
    </style>
  </head>
  <body style="margin:0;padding:0;background:#FDC500;font-family:'Plus Jakarta Sans',-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;color:#000;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
      <tr>
        <td align="center" style="padding:20px;">
          <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="border-radius:24px;overflow:hidden;background:#FDC500;">
            <tr>
              <td style="background:#FDC500;padding:48px 40px 40px 40px;">
                <div style="text-align:center;margin-bottom:32px;">
                  <img src="${logoSvg}" alt="Shopa" style="height:44px;width:auto;display:inline-block;" />
                </div>
                <h1 style="font-size:32px;font-weight:700;margin:0 0 24px 0;line-height:1.3;color:#000;text-align:center;">Thank you for joining the Shopa waitlist!</h1>

                <p style="font-size:16px;line-height:1.6;margin:20px 0;color:#000;">Hi ${safeName},</p>

                <p style="font-size:16px;line-height:1.6;margin:20px 0;color:#000;">This means you'll be amongst <strong>the first to get major updates</strong> about Shopa, get the opportunity to <strong>participate</strong> in our usability testing before official launch, see special offers and promotions and <strong>stand a chance</strong> to win amazing prizes from Shopa!</p>

                <p style="font-size:16px;line-height:1.6;margin:20px 0;color:#000;"><strong>Please ensure to follow us</strong> across all social media platforms <strong>@shopanigeria</strong> to be a part of our growing community and also share to your friends!</p>

                <p style="font-size:16px;line-height:1.6;margin:20px 0;color:#000;">We can't wait to have you on board with the wonderful project we're building that could potentially change the fortunes of student e-commerce.</p>

                ${safeMessage ? `<div style="background:rgba(46,125,50,0.1);padding:16px;border-radius:12px;margin:24px 0;font-size:15px;line-height:1.6;color:#000;border-left:4px solid #2E7D32;">${safeMessage}</div>` : ""}

                <p style="font-size:16px;font-weight:600;margin:32px 0 0 0;color:#000;">Courtesy,<br/>Shopa.</p>

                <div style="margin-top:40px;padding-top:20px;border-top:1px solid rgba(0,0,0,0.1);font-size:12px;text-align:center;color:rgba(0,0,0,0.6);">
                  <p style="margin:8px 0;">© 2026 Shopa. All rights reserved.<br/><span style="font-weight:600;color:#000;">Buy, Sell, Connect</span></p>
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
