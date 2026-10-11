export default function HomePage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-24">
      <section>
        <h1 className="text-7xl font-bold tracking-tight">JY WON</h1>

        <p className="mt-6 text-3xl text-gray-800">
          Ideas in Higher Resolution
        </p>

        <p className="mt-8 max-w-3xl text-xl leading-9 text-gray-700">
          Writing about AI, technology, investing, business, books, movies,
          food, travel, and life. This is my personal space to think, learn,
          review, and archive ideas over time.
        </p>
      </section>

      <section className="mt-16 grid gap-6 md:grid-cols-4">
        <a href="/writing" className="rounded-2xl border border-gray-200 bg-white p-8">
          <h2 className="text-3xl font-bold">Writing</h2>
          <p className="mt-6 text-lg">
            Notes on AI, technology, investing, economics, and life.
          </p>
        </a>

        <a href="/reviews" className="rounded-2xl border border-gray-200 bg-white p-8">
          <h2 className="text-3xl font-bold">Reviews</h2>
          <p className="mt-6 text-lg">
            Thoughts on books, movies, business videos, and food.
          </p>
        </a>

        <a href="/projects" className="rounded-2xl border border-gray-200 bg-white p-8">
          <h2 className="text-3xl font-bold">Projects</h2>
          <p className="mt-6 text-lg">
            Selected works, experiments, and personal projects.
          </p>
        </a>

        <a href="/archive" className="rounded-2xl border border-gray-200 bg-white p-8">
          <h2 className="text-3xl font-bold">Archive</h2>
          <p className="mt-6 text-lg">
            Documents, galleries, and long-term records.
          </p>
        </a>
      </section>
    </main>
  );
}