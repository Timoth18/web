"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  open: boolean;
  onClose: () => void;
};

const inputClass =
  "w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-lilac-200/40 outline-none transition focus:border-accent/60 focus:bg-white/[0.07] focus:ring-2 focus:ring-accent/30";

export default function ContactModal({ open, onClose }: Props) {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const firstFieldRef = useRef<HTMLInputElement>(null);

  // ESC to close, lock page scroll, focus first field
  useEffect(() => {
    if (!open) return;
    const esc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", esc);
    document.body.style.overflow = "hidden";
    firstFieldRef.current?.focus();

    return () => {
      window.removeEventListener("keydown", esc);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  // Reset the success/error banner each time the modal opens
  useEffect(() => {
    if (open) setStatus("idle");
  }, [open]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus("idle");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error);

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-title"
            onClick={(e) => e.stopPropagation()}
            className="glass max-h-[calc(100svh-2rem)] w-full max-w-md overflow-y-auto rounded-3xl bg-ink/90 p-7"
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 26 }}
          >
            <div className="mb-6 flex items-start justify-between gap-4">
              <div>
                <h2 id="contact-title" className="text-2xl font-semibold">
                  Get in touch
                </h2>
                <p className="mt-1 text-sm text-lilac-200/60">
                  Have a role, project or question? I&apos;ll get back to you soon.
                </p>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close"
                className="rounded-full p-2 text-lilac-200/60 transition hover:bg-white/10 hover:text-white"
              >
                ✕
              </button>
            </div>

            {status === "success" ? (
              <div className="py-6 text-center">
                <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-full bg-accent/15 text-xl text-accent">
                  ✓
                </div>
                <p className="font-medium text-white">Message sent — thank you!</p>
                <p className="mt-1 text-sm text-lilac-200/60">I&apos;ll reply to the email you provided.</p>
                <button
                  onClick={onClose}
                  className="mt-6 rounded-full bg-white px-5 py-2 text-sm font-medium text-ink transition hover:bg-lilac-200"
                >
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <label className="block">
                  <span className="sr-only">Name</span>
                  <input
                    ref={firstFieldRef}
                    required
                    autoComplete="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={inputClass}
                    placeholder="Your name"
                  />
                </label>

                <label className="block">
                  <span className="sr-only">Email</span>
                  <input
                    type="email"
                    required
                    autoComplete="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={inputClass}
                    placeholder="you@example.com"
                  />
                </label>

                <label className="block">
                  <span className="sr-only">Message</span>
                  <textarea
                    rows={5}
                    required
                    maxLength={5000}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`${inputClass} resize-none`}
                    placeholder="What would you like to talk about?"
                  />
                </label>

                {status === "error" && (
                  <p role="alert" className="text-sm text-red-300">
                    Something went wrong sending your message. Please try again.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-xl bg-white py-3 font-medium text-ink transition hover:bg-lilac-200 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {loading ? "Sending…" : "Send message"}
                </button>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
