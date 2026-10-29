export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 text-sm text-lilac-200/50 sm:flex-row">
        <p>© {new Date().getFullYear()} Timothy Aldrenovti Situmeang. All rights reserved.</p>
        <a
          href="https://github.com/Timoth18"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors hover:text-white"
        >
          GitHub ↗
        </a>
      </div>
    </footer>
  );
}
