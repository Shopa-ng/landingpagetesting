"use client";

import { useState, useEffect } from "react";
import { toast } from "sonner";
import styles from "./page.module.css";

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
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {/* Header */}
        <div className={styles.header}>
          <h1 className={styles.title}>Waitlist Dashboard</h1>
          <p className={styles.subtitle}>
            Manage and view all waitlist members
          </p>
        </div>

        {/* Stats */}
        <div className={styles.statsGrid}>
          <div className={`${styles.statCard} ${styles.statCardPrimary}`}>
            <p className={styles.statLabel}>Total Members</p>
            <p className={styles.statValue}>{members.length}</p>
          </div>

          <div className={`${styles.statCard} ${styles.statCardSecondary}`}>
            <p className={styles.statLabel}>Universities</p>
            <p className={styles.statValue}>
              {new Set(members.map((m) => m.university)).size}
            </p>
          </div>

          <div className={`${styles.statCard} ${styles.statCardSecondary}`}>
            <p className={styles.statLabel}>With Message</p>
            <p className={styles.statValue}>
              {members.filter((m) => m.message).length}
            </p>
          </div>
        </div>

        {/* Controls */}
        <div className={styles.controls}>
          <input
            type="text"
            placeholder="Search by name, email, or university..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={styles.searchInput}
          />

          <select
            value={sortBy}
            onChange={(e) =>
              setSortBy(e.target.value as "name" | "email" | "date")
            }
            className={styles.sortSelect}
            title="Sort by"
          >
            <option value="date">Sort by: Latest</option>
            <option value="name">Sort by: Name</option>
            <option value="email">Sort by: Email</option>
          </select>

          <button
            onClick={exportCSV}
            className={styles.exportButton}
          >
            Export CSV
          </button>
        </div>

        {/* Table */}
        {isLoading ? (
          <div className={styles.loadingContainer}>
            <p>Loading waitlist members...</p>
          </div>
        ) : sortedMembers.length === 0 ? (
          <div className={styles.emptyContainer}>
            <p>No members found</p>
          </div>
        ) : (
          <div className={styles.tableWrapper}>
            <table className={styles.table}>
              <thead className={styles.tableHeader}>
                <tr>
                  <th className={styles.tableHeaderCell}>Name</th>
                  <th className={styles.tableHeaderCell}>Email</th>
                  <th className={styles.tableHeaderCell}>University</th>
                  <th className={styles.tableHeaderCell}>Message</th>
                  <th className={styles.tableHeaderCell}>Joined</th>
                </tr>
              </thead>
              <tbody>
                {sortedMembers.map((member, idx) => (
                  <tr
                    key={member.id}
                    className={
                      idx % 2 === 0 ? styles.tableRowEven : styles.tableRowOdd
                    }
                  >
                    <td className={styles.tableCellName}>{member.name}</td>
                    <td className={styles.tableCellLight}>
                      <a
                        href={`mailto:${member.email}`}
                        className={styles.emailLink}
                      >
                        {member.email}
                      </a>
                    </td>
                    <td className={styles.tableCellLight}>
                      {member.university}
                    </td>
                    <td
                      className={`${styles.tableCellLight} ${styles.messageCell}`}
                      title={member.message || ""}
                    >
                      {member.message || "—"}
                    </td>
                    <td className={styles.tableCellLight}>
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
        <div className={styles.footer}>
          <p>
            Showing {sortedMembers.length} of {members.length} members
            {searchTerm && ` (filtered)`}
          </p>
        </div>
      </div>
    </div>
  );
}
