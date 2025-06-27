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
      className="py-20 flex items-center justify-center bg-neutral-50 dark:bg-neutral-900 transition-colors duration-300"
    >
      <div className="w-full max-w-md mx-auto rounded-2xl border border-neutral-200 dark:border-neutral-700 shadow-xl glass-card-light px-6 py-10 animate-fade-in">
        <h2 className="text-3xl font-bold text-center mb-2 gradient-text">
          Get In Touch
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-center mb-7 text-base font-medium">
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
            className="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 placeholder:text-neutral-400 text-neutral-900 dark:text-neutral-50 font-semibold focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-800 shadow-none transition-colors duration-300"
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
            className="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 placeholder:text-neutral-400 text-neutral-900 dark:text-neutral-50 font-semibold focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-800 shadow-none resize-none transition-colors duration-300"
          />
          <Button
            type="submit"
            className="w-full mt-2 flex items-center justify-center gap-2 gradient-primary font-bold py-3 rounded-xl text-lg text-white hover:scale-105 hover:shadow-xl transition-all duration-300"
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
        <div className="mt-7 text-xs text-center text-neutral-500 dark:text-neutral-400 font-medium">
          Kamu tidak akan menerima spam. <br /> Chat dibalas dalam 1x24 jam.
        </div>
      </div>
    </section>
  );
};

export default Contact;