"use client";

import { useState, useEffect } from "react";
import { toast } from "sonner";

interface WaitlistMember {
  id: string;
  name: string;
  email: string;
  university: string;
  message: string | null;
  createdAt: string;
}

export default function WaitlistDashboard() {
  const [members, setMembers] = useState<WaitlistMember[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState<"name" | "email" | "date">("date");

  useEffect(() => {
    const fetchWaitlist = async () => {
      try {
        const response = await fetch("/api/waitlist");
        if (!response.ok) throw new Error("Failed to fetch waitlist");
        const data = await response.json();
        setMembers(data.members || []);
      } catch (error) {
        console.error("Error fetching waitlist:", error);
        toast.error("Failed to load waitlist");
      } finally {
        setIsLoading(false);
      }
    };

    fetchWaitlist();
  }, []);

  const filteredMembers = members.filter(
    (member) =>
      member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.university.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedMembers = [...filteredMembers].sort((a, b) => {
    if (sortBy === "name") return a.name.localeCompare(b.name);
    if (sortBy === "email") return a.email.localeCompare(b.email);
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
  });

  const exportCSV = () => {
    const headers = ["Name", "Email", "University", "Message", "Joined On"];
    const rows = sortedMembers.map((m) => [
      m.name,
      m.email,
      m.university,
      m.message || "",
      new Date(m.createdAt).toLocaleDateString(),
    ]);

    const csv = [
      headers.join(","),
      ...rows.map((row) =>
        row
          .map((cell) => `"${String(cell).replace(/"/g, '""')}"`)
          .join(",")
      ),
    ].join("\n");

    const blob = new Blob([csv], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `waitlist-${new Date().toISOString().split("T")[0]}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
    toast.success("Waitlist exported as CSV");
  };

  return (
    <div style={{ minHeight: "100vh", background: "#fff" }}>
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "40px 20px",
          fontFamily:
            "'Plus Jakarta Sans',-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif",
        }}
      >
        {/* Header */}
        <div style={{ marginBottom: "40px" }}>
          <h1
            style={{
              fontSize: "36px",
              fontWeight: "700",
              margin: "0 0 12px 0",
              color: "#151515",
            }}
          >
            Waitlist Dashboard
          </h1>
          <p style={{ fontSize: "16px", color: "#666", margin: "0" }}>
            Manage and view all waitlist members
          </p>
        </div>

        {/* Stats */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "20px",
            marginBottom: "40px",
          }}
        >
          <div
            style={{
              background: "#FDC500",
              padding: "20px",
              borderRadius: "12px",
              border: "1px solid rgba(0,0,0,0.1)",
            }}
          >
            <p style={{ fontSize: "14px", color: "#666", margin: "0 0 8px 0" }}>
              Total Members
            </p>
            <p
              style={{
                fontSize: "32px",
                fontWeight: "700",
                color: "#151515",
                margin: "0",
              }}
            >
              {members.length}
            </p>
          </div>

          <div
            style={{
              background: "#f0f0f0",
              padding: "20px",
              borderRadius: "12px",
              border: "1px solid rgba(0,0,0,0.1)",
            }}
          >
            <p style={{ fontSize: "14px", color: "#666", margin: "0 0 8px 0" }}>
              Universities
            </p>
            <p
              style={{
                fontSize: "32px",
                fontWeight: "700",
                color: "#151515",
                margin: "0",
              }}
            >
              {new Set(members.map((m) => m.university)).size}
            </p>
          </div>

          <div
            style={{
              background: "#f0f0f0",
              padding: "20px",
              borderRadius: "12px",
              border: "1px solid rgba(0,0,0,0.1)",
            }}
          >
            <p style={{ fontSize: "14px", color: "#666", margin: "0 0 8px 0" }}>
              With Message
            </p>
            <p
              style={{
                fontSize: "32px",
                fontWeight: "700",
                color: "#151515",
                margin: "0",
              }}
            >
              {members.filter((m) => m.message).length}
            </p>
          </div>
        </div>

        {/* Controls */}
        <div
          style={{
            display: "flex",
            gap: "16px",
            marginBottom: "24px",
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          <input
            type="text"
            placeholder="Search by name, email, or university..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              flex: "1",
              minWidth: "200px",
              padding: "10px 16px",
              fontSize: "14px",
              border: "1px solid #ddd",
              borderRadius: "8px",
              fontFamily: "inherit",
            }}
          />

          <select
            value={sortBy}
            onChange={(e) =>
              setSortBy(e.target.value as "name" | "email" | "date")
            }
            style={{
              padding: "10px 16px",
              fontSize: "14px",
              border: "1px solid #ddd",
              borderRadius: "8px",
              fontFamily: "inherit",
              background: "#fff",
              cursor: "pointer",
            }}
          >
            <option value="date">Sort by: Latest</option>
            <option value="name">Sort by: Name</option>
            <option value="email">Sort by: Email</option>
          </select>

          <button
            onClick={exportCSV}
            style={{
              padding: "10px 20px",
              fontSize: "14px",
              fontWeight: "600",
              background: "#2E7D32",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontFamily: "inherit",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLButtonElement).style.background = "#1e5a23";
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLButtonElement).style.background = "#2E7D32";
            }}
          >
            Export CSV
          </button>
        </div>

        {/* Table */}
        {isLoading ? (
          <div
            style={{
              textAlign: "center",
              padding: "40px",
              color: "#666",
            }}
          >
            <p>Loading waitlist members...</p>
          </div>
        ) : sortedMembers.length === 0 ? (
          <div
            style={{
              textAlign: "center",
              padding: "40px",
              color: "#666",
              background: "#f9f9f9",
              borderRadius: "8px",
            }}
          >
            <p>No members found</p>
          </div>
        ) : (
          <div
            style={{
              overflowX: "auto",
              border: "1px solid #ddd",
              borderRadius: "8px",
              background: "#fff",
            }}
          >
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                fontSize: "14px",
              }}
            >
              <thead>
                <tr style={{ background: "#f5f5f5", borderBottom: "2px solid #ddd" }}>
                  <th
                    style={{
                      padding: "16px",
                      textAlign: "left",
                      fontWeight: "600",
                      color: "#151515",
                    }}
                  >
                    Name
                  </th>
                  <th
                    style={{
                      padding: "16px",
                      textAlign: "left",
                      fontWeight: "600",
                      color: "#151515",
                    }}
                  >
                    Email
                  </th>
                  <th
                    style={{
                      padding: "16px",
                      textAlign: "left",
                      fontWeight: "600",
                      color: "#151515",
                    }}
                  >
                    University
                  </th>
                  <th
                    style={{
                      padding: "16px",
                      textAlign: "left",
                      fontWeight: "600",
                      color: "#151515",
                    }}
                  >
                    Message
                  </th>
                  <th
                    style={{
                      padding: "16px",
                      textAlign: "left",
                      fontWeight: "600",
                      color: "#151515",
                    }}
                  >
                    Joined
                  </th>
                </tr>
              </thead>
              <tbody>
                {sortedMembers.map((member, idx) => (
                  <tr
                    key={member.id}
                    style={{
                      borderBottom: "1px solid #eee",
                      background: idx % 2 === 0 ? "#fff" : "#fafafa",
                    }}
                  >
                    <td
                      style={{
                        padding: "16px",
                        color: "#151515",
                        fontWeight: "500",
                      }}
                    >
                      {member.name}
                    </td>
                    <td style={{ padding: "16px", color: "#666" }}>
                      <a
                        href={`mailto:${member.email}`}
                        style={{
                          color: "#2E7D32",
                          textDecoration: "none",
                        }}
                      >
                        {member.email}
                      </a>
                    </td>
                    <td style={{ padding: "16px", color: "#666" }}>
                      {member.university}
                    </td>
                    <td
                      style={{
                        padding: "16px",
                        color: "#666",
                        maxWidth: "300px",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                      title={member.message || ""}
                    >
                      {member.message || "—"}
                    </td>
                    <td style={{ padding: "16px", color: "#666" }}>
                      {new Date(member.createdAt).toLocaleDateString(undefined, {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Footer Info */}
        <div
          style={{
            marginTop: "24px",
            fontSize: "12px",
            color: "#999",
            textAlign: "center",
          }}
        >
          <p>
            Showing {sortedMembers.length} of {members.length} members
            {searchTerm && ` (filtered)`}
          </p>
        </div>
      </div>
    </div>
  );
}
