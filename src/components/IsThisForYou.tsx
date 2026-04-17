const personas = [
  {
    title: "The Visionary Leader",
    body: [
      "You've spent decades doing work that matters. Your network is real, your track record is real, your opinions are worth hearing.",
      "But you're not publishing — not because you have nothing to say, but because you've never had the time or the right infrastructure to say it consistently.",
      "Known For changes that. One 30-minute conversation, twice a month. We handle the rest. When the content starts flowing, your network wakes up. Old contacts reach back out. New conversations start. It happens fast.",
    ],
  },
  {
    title: "The Strategic Message Leverager",
    body: [
      "You already have an audience and a point of view. The gap is execution. You have more to say than you have time to say it, and you're not going to put your name on something that isn't good.",
      "Known For matches your pace and your standard. Sessions go deep. Drafts come back fast. Your voice stays yours.",
    ],
  },
  {
    title: "The Marketer with Untapped Leadership",
    body: [
      "Your organization has leaders worth hearing from — people who have earned real credibility and hold real opinions. Getting content out of them has always been the hard part. Known For removes that friction.",
      "They show up and talk. We produce. The executives who do it tend to want to keep doing it, which changes the whole dynamic for your team.",
    ],
  },
];

export default function IsThisForYou() {
  return (
    <section className="px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-serif text-5xl leading-[0.95] md:text-[96px]">
          Is this
          <br />
          for you?
        </h2>

        <div className="mt-16 grid gap-10 md:mt-24 md:grid-cols-3 md:gap-8">
          {personas.map((p) => (
            <article
              key={p.title}
              className="flex flex-col rounded-3xl bg-sage/30 p-8 md:p-10"
            >
              <h3 className="font-serif text-[28px] leading-tight md:text-[32px]">
                {p.title}
              </h3>
              <div className="mt-5 space-y-4 font-sans text-base leading-relaxed text-ink/85 md:text-lg">
                {p.body.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
