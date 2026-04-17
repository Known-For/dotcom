import Logo from "./Logo";

export default function Nav() {
  return (
    <nav className="sticky top-0 z-40 w-full bg-cream/85 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
        <a href="#top" className="flex items-center" aria-label="Known For">
          <Logo className="h-7 w-auto" />
        </a>
        <a href="#contact" className="btn-pill text-sm md:text-base">
          Let&rsquo;s Talk
        </a>
      </div>
    </nav>
  );
}
