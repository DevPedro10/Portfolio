import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
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
      value: "alex.silva@email.com",
      href: "mailto:alex.silva@email.com"
    },
    {
      title: "LinkedIn",
      value: "/in/alexsilva",
      href: "https://linkedin.com/in/alexsilva"
    },
    {
      title: "GitHub",
      value: "/alexsilva",
      href: "https://github.com/alexsilva"
    },
    {
      title: "Telefone",
      value: "+55 (11) 99999-9999",
      href: "tel:+5511999999999"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-secondary/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-space font-bold mb-6">
            Vamos <span className="text-gradient">Conversar</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Estou sempre aberto a novas oportunidades e projetos interessantes. 
            Entre em contato e vamos criar algo incrível juntos!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="glass p-8">
            <h3 className="text-2xl font-space font-semibold mb-6">Envie uma Mensagem</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">Nome</label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Seu nome"
                    required
                    className="glass"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Email</label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="seu@email.com"
                    required
                    className="glass"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">Assunto</label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Sobre o que você quer falar?"
                  required
                  className="glass"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">Mensagem</label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Conte-me mais sobre sua ideia ou projeto..."
                  rows={5}
                  required
                  className="glass resize-none"
                />
              </div>

              <Button type="submit" size="lg" className="w-full glass glow-primary font-medium">
                Enviar Mensagem
              </Button>
            </form>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-space font-semibold mb-6">Outras Formas de Contato</h3>
              <div className="grid gap-4">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="glass p-4 hover:glow-secondary transition-all duration-300">
                    <a href={info.href} className="block">
                      <div className="flex items-center justify-between">
                        <span className="font-medium">{info.title}</span>
                        <span className="text-muted-foreground">{info.value}</span>
                      </div>
                    </a>
                  </Card>
                ))}
              </div>
            </div>

            <Card className="glass p-6">
              <h4 className="text-lg font-space font-medium mb-4">Localização</h4>
              <p className="text-muted-foreground">
                📍 São Paulo, SP - Brasil
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Disponível para trabalho remoto e presencial na região metropolitana
              </p>
            </Card>

            <Card className="glass p-6">
              <h4 className="text-lg font-space font-medium mb-4">Status</h4>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm">Disponível para novos projetos</span>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                Responderei em até 24 horas
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};