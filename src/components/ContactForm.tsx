"use client";

import { useForm, ValidationError } from "@formspree/react";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xreraqbb");

  return (
    <section id="contact" className="px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-serif text-4xl leading-tight md:text-[64px]">
          Ready to get known for what you do best?
        </h2>

        {state.succeeded ? (
          <div className="mt-12 rounded-3xl bg-sage/40 px-8 py-12">
            <p className="font-serif text-2xl leading-snug md:text-3xl">
              Thanks — we&rsquo;ll be in touch shortly.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mt-12 space-y-5 text-left"
            noValidate
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
              <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
                className="mt-2 block px-4 text-sm text-red-700"
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
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
                className="mt-2 block px-4 text-sm text-red-700"
              />
            </div>

            <div>
              <label htmlFor="message" className="sr-only">
                When did you last publish something you were proud of?
              </label>
              <textarea
                id="message"
                name="message"
                rows={3}
                placeholder="When did you last publish something you were proud of?"
                className="w-full rounded-3xl border border-ink/15 bg-white px-6 py-4 text-lg text-ink placeholder:text-ink/50 focus:border-ink focus:outline-none"
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
                className="mt-2 block px-4 text-sm text-red-700"
              />
            </div>

            <ValidationError
              errors={state.errors}
              className="block px-4 text-sm text-red-700"
            />

            <div className="pt-4 text-center">
              <button
                type="submit"
                disabled={state.submitting}
                className="btn-pill btn-neon text-base disabled:cursor-not-allowed disabled:opacity-60"
              >
                {state.submitting ? "Sending…" : "Send"}
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
