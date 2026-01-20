
import React from 'react';
import { MessageSquare, FileCheck, Send } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      title: 'Mande um WhatsApp',
      description: 'Envie os dados básicos da sua venda ou serviço pelo WhatsApp.',
      icon: <MessageSquare className="w-8 h-8" />,
    },
    {
      title: 'Nós Emitimos',
      description: 'Nossa equipe de especialistas gera a nota no sistema da prefeitura/estado.',
      icon: <FileCheck className="w-8 h-8" />,
    },
    {
      title: 'Receba na Hora',
      description: 'Enviamos o arquivo pronto para você e para o seu cliente em minutos.',
      icon: <Send className="w-8 h-8" />,
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-black uppercase tracking-widest text-sm mb-4 block">Simples Assim</span>
          <h2 className="text-4xl md:text-5xl font-black text-blue-900 mb-4">Como funciona o NotaFacil?</h2>
          <p className="text-xl text-slate-600 font-medium">Esqueça os manuais. Fale conosco e resolva.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 relative">
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-blue-100 -translate-y-1/2 z-0"></div>
          
          {steps.map((step, index) => (
            <div key={index} className="relative z-10 flex flex-col items-center text-center group">
              <div className="w-24 h-24 rounded-full bg-white border-4 border-blue-900 flex items-center justify-center text-blue-900 mb-8 group-hover:bg-[#00E676] group-hover:border-[#00E676] group-hover:text-blue-900 transition-all shadow-xl scale-110">
                {step.icon}
              </div>
              <h3 className="text-2xl font-black text-blue-900 mb-4">{step.title}</h3>
              <p className="text-slate-600 font-medium max-w-[250px] leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
