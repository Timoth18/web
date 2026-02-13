"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

type Props = {
  open: boolean;
  onClose: () => void;
};


export default function ContactModal({
  open,
  onClose,
}: Props) {
const [formData, setFormData] = useState({
  name: "",
  email: "",
  message: "",
});

const [loading, setLoading] = useState(false);
const [status, setStatus] = useState<"idle" | "success" | "error">("idle");


  // ESC key close
  useEffect(() => {
    const esc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", esc);
    return () => window.removeEventListener("keydown", esc);
  }, [onClose]);

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  setLoading(true);
  setStatus("idle");

  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
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
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
          onClick={onClose}

          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Modal Box */}
          <motion.div
            onClick={(e) => e.stopPropagation()}
            className="bg-slate-900 p-6 rounded-xl w-full max-w-md shadow-xl"

            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}

            transition={{
              type: "spring",
              stiffness: 300,
              damping: 25,
            }}
          >
            <h2 className="text-xl text-center font-bold mb-4">
              Contact Me
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">

              <input required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                className="w-full p-2 bg-slate-800 rounded outline-none focus:ring-2 focus:ring-cyan-400"
                placeholder="Name"
              />

              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full p-2 bg-slate-800 rounded outline-none focus:ring-2 focus:ring-cyan-400"
                placeholder="Email"
              />

              <textarea
                rows={4}
                required
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full p-2 bg-slate-800 rounded outline-none focus:ring-2 focus:ring-cyan-400"
                placeholder="Message"
              />

              <div className="flex justify-end gap-3">

                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 bg-slate-700 rounded hover:bg-slate-600 transition"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  disabled={loading}
                  className="px-4 py-2 bg-cyan-500 text-black rounded hover:bg-cyan-400 transition"
                >
                  {loading ? "Sending..." : "Send"}
               
                </button>

              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
