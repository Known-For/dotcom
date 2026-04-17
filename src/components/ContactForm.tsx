export default function ContactForm() {
  return (
    <section id="contact" className="px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-serif text-4xl leading-tight md:text-[64px]">
          Ready to get known for what you do best?
        </h2>

        <form
          className="mt-12 space-y-5 text-left"
          action="https://formspree.io/f/your-id"
          method="POST"
        >
          <div>
            <label htmlFor="name" className="sr-only">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder="Name"
              className="w-full rounded-full border border-ink/15 bg-white px-6 py-4 text-lg text-ink placeholder:text-ink/50 focus:border-ink focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="email" className="sr-only">
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="Email Address"
              className="w-full rounded-full border border-ink/15 bg-white px-6 py-4 text-lg text-ink placeholder:text-ink/50 focus:border-ink focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="published" className="sr-only">
              When did you last publish something you were proud of?
            </label>
            <textarea
              id="published"
              name="published"
              rows={3}
              placeholder="When did you last publish something you were proud of?"
              className="w-full rounded-3xl border border-ink/15 bg-white px-6 py-4 text-lg text-ink placeholder:text-ink/50 focus:border-ink focus:outline-none"
            />
          </div>

          <div className="pt-4 text-center">
            <button type="submit" className="btn-pill btn-neon text-base">
              Send
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
