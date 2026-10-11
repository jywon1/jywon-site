export default function WritingPage() {
  return (
    <div style={{ maxWidth: "900px", margin: "0 auto", padding: "50px 20px" }}>
      <h1 style={{ marginBottom: "12px" }}>Writing</h1>
      <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "32px" }}>
        Notes and essays on AI, technology, investing, business, economics, and life.
      </p>

      <div
        style={{
          background: "#fff",
          border: "1px solid #eee",
          borderRadius: "12px",
          padding: "24px",
        }}
      >
        <p style={{ fontSize: "14px", color: "#888", marginBottom: "8px" }}>
          March 18, 2026
        </p>

        <h2 style={{ marginTop: 0, marginBottom: "12px" }}>
          <a
            href="/writing/first-post"
            style={{ textDecoration: "none", color: "#111" }}
          >
            My First Post on jywon.com
          </a>
        </h2>

        <p style={{ color: "#555", lineHeight: 1.7, marginBottom: 0 }}>
          This is the first post on my personal website. I am building this space
          to write, review, archive, and think in higher resolution.
        </p>
      </div>
    </div>
  );
}