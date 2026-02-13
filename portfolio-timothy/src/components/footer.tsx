type FooterProps = {
  onOpen: () => void;
};

export default function Footer({ onOpen }: FooterProps) {
  return (
    <footer className="border-t border-slate-800/50 bg-slate-900/70 backdrop-blur-md py-6 text-center fixed bottom-0 left-0 w-full z-50">
      <p className="text-sm text-slate-500">
        © 2026 Timothy Aldrenovti Situmeang All Rights Reserved
      </p>
    </footer>
  );
}