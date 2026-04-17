export default function Footer() {
  return (
    <footer className="bg-ink px-6 py-16 text-cream/80 md:px-10">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <p className="font-sans text-sm">
          Copyright &copy; {new Date().getFullYear()} Known For
        </p>
        <p className="font-sans text-sm">All rights reserved.</p>
      </div>
    </footer>
  );
}
