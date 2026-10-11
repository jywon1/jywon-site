export default function FirstPostPage() {
  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "50px 20px" }}>
      <p style={{ fontSize: "14px", color: "#888", marginBottom: "10px" }}>
        March 18, 2026
      </p>

      <h1 style={{ fontSize: "40px", marginBottom: "20px" }}>
        My First Post on jywon.com
      </h1>

      <p style={{ fontSize: "18px", color: "#555", lineHeight: 1.9 }}>
        Welcome to my first post on jywon.com.
      </p>

      <p style={{ fontSize: "18px", color: "#555", lineHeight: 1.9 }}>
        I am building this website as a personal space to write about AI,
        technology, investing, business, books, movies, food, and life.
      </p>

      <p style={{ fontSize: "18px", color: "#555", lineHeight: 1.9 }}>
        Over time, this website will grow into a long-term archive of my
        thoughts, projects, reviews, documents, and personal records.
      </p>

      <p style={{ fontSize: "18px", color: "#555", lineHeight: 1.9 }}>
        This first post is a small start, but it marks the beginning of building
        something under my own domain.
      </p>

      <div style={{ marginTop: "32px" }}>
        <a
          href="/writing"
          style={{
            textDecoration: "none",
            color: "#111",
            border: "1px solid #ccc",
            padding: "10px 14px",
            borderRadius: "8px",
          }}
        >
          ← Back to Writing
        </a>
      </div>
    </div>
  );
}