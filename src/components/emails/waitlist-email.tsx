import React from "react";

interface WaitlistEmailProps {
  name: string;
  message?: string;
}

export const WaitlistEmail = ({ name, message }: WaitlistEmailProps) => {
  return (
    <div
      style={{
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        maxWidth: "600px",
        margin: "0 auto",
        backgroundColor: "#FCD34D",
        borderRadius: "24px",
        padding: "40px",
        color: "#000",
      }}
    >
      {/* Logo */}
      <div style={{ textAlign: "center", marginBottom: "30px" }}>
        <h2
          style={{
            color: "#15803D",
            fontSize: "36px",
            fontWeight: "bold",
            margin: "0",
            letterSpacing: "-1px",
          }}
        >
          Shopa
        </h2>
      </div>

      {/* Main Heading */}
      <h1
        style={{
          fontSize: "32px",
          fontWeight: "bold",
          margin: "0 0 20px 0",
          lineHeight: "1.3",
        }}
      >
        Thank you for joining the{" "}
        <span style={{ color: "#15803D" }}>Shopa</span> waitlist!
      </h1>

      {/* Body Text */}
      <p
        style={{
          fontSize: "16px",
          lineHeight: "1.6",
          margin: "20px 0",
          color: "#000",
        }}
      >
        Hi {name},
      </p>

      <p
        style={{
          fontSize: "16px",
          lineHeight: "1.6",
          margin: "20px 0",
          color: "#000",
        }}
      >
        This means you'll be amongst{" "}
        <strong>the first to get major updates</strong> about Shopa, get the
        opportunity to <strong>participate</strong> in our usability testing
        before official launch, see special offers and promotions and{" "}
        <strong>stand a chance</strong> to win amazing prizes from Shopa!
      </p>

      <p
        style={{
          fontSize: "16px",
          lineHeight: "1.6",
          margin: "20px 0",
          color: "#000",
        }}
      >
        <strong>Please ensure to follow us</strong> across all social media
        platforms <strong>@shopanigeria</strong> to be a part of our growing
        community and also share to your friends!
      </p>

      <p
        style={{
          fontSize: "16px",
          lineHeight: "1.6",
          margin: "20px 0",
          color: "#000",
        }}
      >
        We can't wait to have you on board with the wonderful project we're
        building that could potentially change the fortunes of student
        e-commerce.
      </p>

      {/* Custom Message */}
      {message && (
        <div
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.5)",
            padding: "15px",
            borderRadius: "8px",
            margin: "20px 0",
            fontSize: "15px",
            lineHeight: "1.5",
            color: "#000",
            fontStyle: "italic",
          }}
        >
          {message}
        </div>
      )}

      {/* Closing */}
      <p
        style={{
          fontSize: "16px",
          fontWeight: "bold",
          margin: "30px 0 0 0",
          color: "#000",
        }}
      >
        Courtesy,
        <br />
        Shopa.
      </p>

      {/* Footer */}
      <div
        style={{
          marginTop: "40px",
          paddingTop: "20px",
          borderTop: "2px solid rgba(0, 0, 0, 0.1)",
          fontSize: "12px",
          textAlign: "center",
          color: "rgba(0, 0, 0, 0.6)",
        }}
      >
        <p style={{ margin: "0" }}>
          © 2026 Shopa. All rights reserved.
          <br />
          Buy, Sell, Connect
        </p>
      </div>
    </div>
  );
};
