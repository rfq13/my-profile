
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

    // Simulasi submit API
    await new Promise((resolve) => setTimeout(resolve, 1600));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ email: "", message: "" });

    setTimeout(() => setIsSubmitted(false), 2600);
  };

  return (
    <section
      id="contact"
      className="py-20 flex items-center justify-center bg-gradient-to-tr from-neon-blue/10 via-neon-purple/10 to-transparent"
    >
      <div className="w-full max-w-lg mx-auto glass-effect-dark rounded-2xl shadow-lg px-7 py-10 animate-fade-in-up">
        <h2 className="text-3xl font-bold text-center mb-2 gradient-text">Get In Touch</h2>
        <p className="text-white/80 text-center mb-8 text-base">
          Tertarik berdiskusi atau bekerja sama? Kirim email & pesan singkatmu!
        </p>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <Input
            type="email"
            name="email"
            placeholder="Email aktif kamu"
            autoComplete="email"
            value={formData.email}
            onChange={handleChange}
            disabled={isSubmitting}
            required
            className="bg-background/80 border border-white/20 placeholder:text-white/50"
          />
          <Textarea
            name="message"
            placeholder="Tulis pesan singkat..."
            value={formData.message}
            onChange={handleChange}
            maxLength={350}
            required
            rows={4}
            disabled={isSubmitting}
            className="bg-background/80 border border-white/20 placeholder:text-white/50 resize-none"
          />
          <Button
            type="submit"
            className="w-full mt-2 flex items-center justify-center gap-2 bg-gradient-to-r from-neon-blue to-neon-purple font-semibold py-3 rounded-lg text-lg hover:scale-105 hover:shadow-lg transition-transform duration-300"
            disabled={isSubmitting}
          >
            {isSubmitting && (
              <span className="animate-spin">
                <Send size={18} />
              </span>
            )}
            {!isSubmitting && isSubmitted && (
              <>
                <CheckCircle size={21} className="text-green-400" /> Pesan Terkirim!
              </>
            )}
            {!isSubmitting && !isSubmitted && (
              <>
                <Send size={18} /> Kirim Pesan
              </>
            )}
          </Button>
        </form>
        <div className="mt-6 text-xs text-center text-white/40">Respons cepat & privasi terjamin.</div>
      </div>
    </section>
  );
};

export default Contact;
