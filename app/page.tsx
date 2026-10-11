export default function Home() {
  return (
    <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "50px 20px" }}>
      
      {/* HERO */}
      <section style={{ marginBottom: "60px" }}>
        <h1 style={{ fontSize: "60px", marginBottom: "10px" }}>JY WON</h1>

        <p style={{ fontSize: "22px", color: "#444", marginBottom: "20px" }}>
          Ideas in Higher Resolution
        </p>

        <p style={{ fontSize: "18px", maxWidth: "700px", lineHeight: "1.6", color: "#555" }}>
          Writing about AI, technology, investing, business, books, movies, food, and life.
          This is my personal space to think, learn, review, and archive ideas over time.
        </p>

        <div style={{ marginTop: "25px", display: "flex", gap: "12px" }}>
          <a
            href="/writing"
            style={{
              background: "#111",
              color: "#fff",
              padding: "12px 18px",
              borderRadius: "8px",
              textDecoration: "none",
            }}
          >
            Read Writing
          </a>

          <a
            href="/reviews"
            style={{
              border: "1px solid #ccc",
              padding: "12px 18px",
              borderRadius: "8px",
              textDecoration: "none",
              color: "#111",
            }}
          >
            Explore Reviews
          </a>
        </div>
      </section>

      {/* FEATURED SECTIONS */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
          gap: "20px",
        }}
      >
        <div style={{ background: "#fff", padding: "24px", borderRadius: "12px", border: "1px solid #eee" }}>
          <h2>Writing</h2>
          <p>Notes on AI, technology, investing, economics, and life.</p>
        </div>

        <div style={{ background: "#fff", padding: "24px", borderRadius: "12px", border: "1px solid #eee" }}>
          <h2>Reviews</h2>
          <p>Thoughts on books, movies, business videos, and food.</p>
        </div>

        <div style={{ background: "#fff", padding: "24px", borderRadius: "12px", border: "1px solid #eee" }}>
          <h2>Projects</h2>
          <p>Selected works, experiments, and personal projects.</p>
        </div>

        <div style={{ background: "#fff", padding: "24px", borderRadius: "12px", border: "1px solid #eee" }}>
          <h2>Archive</h2>
          <p>Documents, galleries, and long-term records.</p>
        </div>
      </section>

      {/* ABOUT SITE */}
      <section style={{ marginTop: "60px" }}>
        <h2>About This Site</h2>
        <p style={{ maxWidth: "700px", lineHeight: "1.7", color: "#555" }}>
          This website is my personal archive under my own domain.
          Over time it will grow into a place for writing, reviews,
          projects, and long-term records of ideas and experiences.
        </p>
      </section>

    </div>
  );
}