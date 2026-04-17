const items = [
  "LinkedIn Posts",
  "Newsletters",
  "Insights",
  "Announcements",
  "Any other writing that drives your business",
];

export default function WhatWeMake() {
  return (
    <section className="bg-ink px-6 py-24 text-cream md:px-10 md:py-32">
      <div className="mx-auto max-w-6xl">
        <p className="max-w-3xl font-sans text-2xl leading-snug md:text-[36px]">
          Effortlessly power the platforms that matter to you.
        </p>

        <ul className="mt-14 space-y-6 md:mt-20 md:space-y-8">
          {items.map((item) => (
            <li
              key={item}
              className="font-serif text-4xl leading-tight md:text-[56px]"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
