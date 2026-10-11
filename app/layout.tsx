export const metadata = {
  title: "JY WON",
  description: "Writing, reviews, projects, and archives by JY WON",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "Arial, sans-serif", background: "#f8f8f8" }}>
        
        {/* HEADER */}
        <header style={{ background: "#fff", borderBottom: "1px solid #ddd" }}>
          <div
            style={{
              maxWidth: "1100px",
              margin: "0 auto",
              padding: "20px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <a href="/" style={{ fontSize: "22px", fontWeight: "bold", textDecoration: "none", color: "#111" }}>
              JY WON
            </a>

            <nav style={{ display: "flex", gap: "18px", fontSize: "15px" }}>
              <a href="/about">About</a>
              <a href="/writing">Writing</a>
              <a href="/reviews">Reviews</a>
              <a href="/projects">Projects</a>
              <a href="/archive">Archive</a>
              <a href="/contact">Contact</a>
            </nav>
          </div>
        </header>

        {/* MAIN */}
        <main>{children}</main>

        {/* FOOTER */}
        <footer style={{ background: "#fff", borderTop: "1px solid #ddd", marginTop: "60px" }}>
          <div
            style={{
              maxWidth: "1100px",
              margin: "0 auto",
              padding: "24px",
              fontSize: "14px",
              color: "#666",
            }}
          >
            © 2026 JY WON · Ideas in Higher Resolution
          </div>
        </footer>

      </body>
    </html>
  );
}