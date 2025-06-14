
import React, { useState } from "react";
import { Send, CheckCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ email: "", message: "" });

    setTimeout(() => setIsSubmitted(false), 2200);
  };

  return (
    <section
      id="contact"
      className="py-20 flex items-center justify-center bg-white/0"
    >
      {/* Card utama dengan white glass effect, border dan shadow mirip Hero img */}
      <div className="w-full max-w-md mx-auto rounded-2xl border-2 border-blue-400/40 shadow-xl bg-white/70 backdrop-blur-md px-6 py-10 animate-fade-in-up">
        <h2 className="text-3xl font-bold text-center mb-2 bg-gradient-to-r from-blue-500 via-purple-500 to-purple-400 bg-clip-text text-transparent drop-shadow">
          Get In Touch
        </h2>
        <p className="text-gray-700/90 text-center mb-7 text-base font-medium">
          Kirim pesan singkat & emailmu.<br />Aku akan balas dalam waktu singkat!
        </p>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <Input
            type="email"
            name="email"
            placeholder="Email aktif"
            autoComplete="email"
            value={formData.email}
            onChange={handleChange}
            disabled={isSubmitting}
            required
            className="bg-white/80 border-2 border-blue-200/60 placeholder:text-blue-400/60 text-gray-800 font-semibold focus:border-blue-400 focus:ring-2 focus:ring-blue-200 shadow-none"
          />
          <Textarea
            name="message"
            placeholder="Tulis pesan singkat..."
            value={formData.message}
            onChange={handleChange}
            maxLength={320}
            required
            rows={4}
            disabled={isSubmitting}
            className="bg-white/80 border-2 border-purple-200/60 placeholder:text-purple-400/50 text-gray-800 font-semibold focus:border-purple-400 focus:ring-2 focus:ring-purple-200 shadow-none resize-none"
          />
          <Button
            type="submit"
            className="w-full mt-2 flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 via-blue-400 to-purple-500 font-bold py-3 rounded-xl text-lg text-white hover:scale-105 hover:shadow-xl transition-all duration-300"
            disabled={isSubmitting}
          >
            {isSubmitting && (
              <span className="animate-spin">
                <Send size={18} />
              </span>
            )}
            {!isSubmitting && isSubmitted && (
              <>
                <CheckCircle size={22} className="text-green-400" /> Terkirim!
              </>
            )}
            {!isSubmitting && !isSubmitted && (
              <>
                <Send size={18} /> Kirim Pesan
              </>
            )}
          </Button>
        </form>
        <div className="mt-7 text-xs text-center text-blue-400/70 font-medium">
          Kamu tidak akan menerima spam. <br /> Chat dibalas dalam 1x24 jam.
        </div>
      </div>
    </section>
  );
};

export default Contact;
