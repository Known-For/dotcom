export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden px-6 pt-10 pb-24 md:px-10 md:pt-20 md:pb-40"
    >
      <div className="mx-auto max-w-6xl">
        <h1 className="font-serif text-[15vw] leading-[0.9] tracking-tight text-ink md:text-[110px]">
          Get{" "}
          <span className="relative inline-block">
            <span className="relative z-10 px-3">Known For</span>
            <span
              aria-hidden
              className="absolute inset-0 -z-0 translate-y-2 rounded-full bg-neon"
            />
          </span>
          <br />
          what you do best
        </h1>

        <p className="mt-10 max-w-2xl font-sans text-2xl leading-tight text-ink md:text-[32px]">
          Activate your network. Own your expertise.
        </p>

        <div className="mt-12">
          <a href="#contact" className="btn-pill btn-neon">
            Let&rsquo;s Talk
          </a>
        </div>
      </div>
    </section>
  );
}
