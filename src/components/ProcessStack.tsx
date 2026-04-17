const steps = [
  {
    title: "Casual Conversation",
    body: "Chat for 30 minutes. No prep. No homework.",
  },
  {
    title: "Insight-Development",
    body: "Conversation draws out opinions and positions.",
  },
  {
    title: "Data-Structuring",
    body: "We turn raw thinking into a structured narrative foundation.",
  },
  {
    title: "Narrative-Building",
    body: "Editorial intervention sharpens ideas and makes them a story.",
  },
  {
    title: "Packaging",
    body: "High-impact, ready-to-publish content.",
  },
];

export default function ProcessStack() {
  return (
    <section className="px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-6xl">
        <p className="eyebrow text-center text-xs md:text-base">
          A Best-of-Both-Worlds Editorial System
        </p>
        <h2 className="mt-6 text-center text-3xl leading-tight md:text-[44px]">
          Introducing Expert-in-the-Loop Content Development
        </h2>

        <ol className="mx-auto mt-16 max-w-3xl space-y-4 md:mt-24">
          {steps.map((step, idx) => (
            <li
              key={step.title}
              className="flex flex-col gap-2 rounded-3xl bg-sage/40 p-7 md:flex-row md:items-start md:gap-8 md:p-10"
            >
              <span className="font-serif text-2xl text-ink/60 md:text-3xl md:min-w-[3ch]">
                0{idx + 1}
              </span>
              <div>
                <h3 className="font-serif text-2xl leading-tight md:text-[36px]">
                  {step.title}
                </h3>
                <p className="mt-3 font-sans text-lg leading-snug text-ink/80 md:text-xl">
                  {step.body}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
