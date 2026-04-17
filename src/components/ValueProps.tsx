const props = [
  {
    title: "Low Commitment",
    body: "A casual conversation becomes polished, structured, publish-ready thought leadership.",
  },
  {
    title: "Your Voice",
    body: "100% your voice. 100% your thoughts.",
  },
  {
    title: "Premium Results",
    body: "AI is an averaging machine. Great content comes from editorial expertise.",
  },
];

export default function ValueProps() {
  return (
    <section className="bg-ink px-6 py-24 text-cream md:px-10 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-3">
        {props.map((p) => (
          <div key={p.title} className="space-y-5">
            <h3 className="font-serif text-3xl md:text-4xl">{p.title}</h3>
            <p className="font-sans text-lg leading-snug text-cream/85 md:text-xl">
              {p.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
