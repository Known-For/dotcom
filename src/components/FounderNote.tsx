import Image from "next/image";

export default function FounderNote() {
  return (
    <section className="bg-neon px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[260px_1fr] md:items-start md:gap-16">
        <div className="mx-auto aspect-square w-48 overflow-hidden rounded-full bg-ink/10 md:mx-0 md:w-64">
          <Image
            src="/images/adam-rich.jpg"
            alt="Adam Rich"
            width={1024}
            height={1024}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="space-y-6 font-sans text-lg leading-relaxed md:text-xl">
          <p>
            Adam Rich founded Thrillist and scaled it to a monthly audience of
            300 million before exiting.
          </p>
          <p>
            As with Thrillist, he built Known For because he couldn&rsquo;t find
            anything like it for himself. It&rsquo;s a system that protects his
            time, captures his authentic thinking, and produces content he is
            proud of.
          </p>
          <p>
            Known For works because solving the executive content problem
            requires someone who understands both editorial quality and the
            professional landscape it needs to move the needle in.
          </p>
        </div>
      </div>
    </section>
  );
}
