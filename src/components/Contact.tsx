import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";
import { FadeInUp, SlideIn } from "@/components/animations";

export const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactInfo = [
    {
      title: "Email",
      value: "natanpedrodasilva@gmail.com",
      href: "mailto:natanpedrodasilva@gmail.com",
    },
    {
      title: "LinkedIn",
      value: "/in/natapedro",
      href: "https://linkedin.com/in/natapedro",
    },
    {
      title: "GitHub",
      value: "/DevPedro10",
      href: "https://github.com/DevPedro10",
    },
  ];

  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto sm:max-w-6xl px-4 sm:px-6">
        <FadeInUp duration={0.7}>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-inter font-light mb-6">
              {t.contact.title}{" "}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {t.contact.subtitle}
            </p>
          </div>
        </FadeInUp>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Form */}
          <FadeInUp duration={0.7} delay={0.1}>
            <div className="bg-card/50 border border-border/20 p-6 md:p-8 rounded-lg">
              <h3 className="text-lg md:text-xl font-inter font-medium mb-6">
                {t.contact.sendMessage}
              </h3>
              <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      {t.contact.name}
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={t.contact.placeholders.name}
                      required
                      className="bg-background/50 border-border/20"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
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
                      className="bg-background/50 border-border/20"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    {t.contact.subject}
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder={t.contact.placeholders.subject}
                    required
                    className="bg-background/50 border-border/20"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    {t.contact.message}
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={t.contact.placeholders.message}
                    rows={5}
                    required
                    className="bg-background/50 border-border/20 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  variant="outline"
                  className="w-full border-primary/20 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300"
                >
                  {t.contact.send}
                </Button>
              </form>
            </div>
          </FadeInUp>

          <FadeInUp duration={0.7} delay={0.2}>
            <div className="bg-card/50 border border-border/20 p-6 md:p-8 rounded-lg">
              <div>
                <h3 className="text-lg md:text-xl font-inter font-medium mb-6">
                  {t.contact.otherWays}
                </h3>
                <div className="grid gap-4">
                  {contactInfo.map((info, index) => (
                    <div
                      key={index}
                      className="bg-card/50 border border-border/20 p-4 rounded-lg hover:bg-card/70 transition-colors duration-300"
                    >
                      <a href={info.href} className="block">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                          <span className="font-medium text-sm md:text-base">
                            {info.title}
                          </span>
                          <span className="text-muted-foreground text-xs md:text-sm break-all">
                            {info.value}
                          </span>
                        </div>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeInUp>
        </div>
      </div>
    </section>
  );
};
