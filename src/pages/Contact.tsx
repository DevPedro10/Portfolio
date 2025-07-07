import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Mensagem enviada!",
      description: "Obrigado pelo contato. Retornarei em breve!",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      title: "Email",
      value: "natapedro.dev@email.com",
      href: "mailto:natapedro.dev@email.com"
    },
    {
      title: "LinkedIn",
      value: "/in/natapedro",
      href: "https://linkedin.com/in/natapedro"
    },
    {
      title: "GitHub",
      value: "/natapedro",
      href: "https://github.com/natapedro"
    }
  ];

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-20">
          <h1 className="section-title mb-8">
            {t.contact.title} <span className="text-gradient">{t.contact.titleHighlight}</span>
          </h1>
          <p className="section-subtitle">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="imposing-card p-10 rounded-xl">
            <h2 className="text-2xl font-space font-bold mb-8">{t.contact.sendMessage}</h2>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <label htmlFor="name" className="text-sm font-semibold uppercase tracking-wide">
                    {t.contact.name}
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={t.contact.placeholders.name}
                    required
                    className="imposing-card"
                  />
                </div>
                <div className="space-y-3">
                  <label htmlFor="email" className="text-sm font-semibold uppercase tracking-wide">
                    {t.contact.email}
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t.contact.placeholders.email}
                    required
                    className="imposing-card"
                  />
                </div>
              </div>
              
              <div className="space-y-3">
                <label htmlFor="subject" className="text-sm font-semibold uppercase tracking-wide">
                  {t.contact.subject}
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder={t.contact.placeholders.subject}
                  required
                  className="imposing-card"
                />
              </div>
              
              <div className="space-y-3">
                <label htmlFor="message" className="text-sm font-semibold uppercase tracking-wide">
                  {t.contact.message}
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t.contact.placeholders.message}
                  rows={6}
                  required
                  className="imposing-card resize-none"
                />
              </div>

              <Button type="submit" size="lg" className="w-full imposing-button bg-imposing py-4 text-base">
                {t.contact.send}
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-space font-bold mb-8">{t.contact.otherWays}</h2>
              <div className="grid gap-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="imposing-card p-6 rounded-xl">
                    <a href={info.href} className="block">
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-lg">{info.title}</span>
                        <span className="text-soft">{info.value}</span>
                      </div>
                    </a>
                  </div>
                ))}
              </div>
            </div>

            <div className="imposing-card p-8 rounded-xl">
              <h3 className="text-xl font-space font-bold mb-4">{t.contact.location}</h3>
              <p className="text-soft text-lg">
                📍 São Paulo, SP - Brasil
              </p>
              <p className="text-sm text-soft mt-2">
                Disponível para trabalho remoto e presencial
              </p>
            </div>

            <div className="imposing-card p-8 rounded-xl">
              <h3 className="text-xl font-space font-bold mb-4">{t.contact.status}</h3>
              <div className="flex items-center space-x-4">
                <div className="w-4 h-4 bg-primary rounded-full animate-pulse shadow-strong"></div>
                <span className="font-medium">{t.contact.available}</span>
              </div>
              <p className="text-sm text-soft mt-3">
                {t.contact.response}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};