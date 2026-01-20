
import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Carla Silva',
      role: 'Artesã e Microempreendedora',
      content: 'Eu odiava burocracia, agora emito notas rindo! É tão fácil que parece mágica.',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150',
    },
    {
      name: 'João Pedro',
      role: 'Dono de Ecommerce',
      content: 'O suporte deles pelo WhatsApp salvou minha Black Friday. Eficiência que gera lucro!',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150',
    },
    {
      name: 'Amanda Oliveira',
      role: 'Contadora Consultiva',
      content: 'Meus clientes nunca mais tiveram problemas com o fisco. Integração perfeita!',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150',
    },
  ];

  return (
    <section className="py-24 bg-blue-900 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-vivid-green/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <h2 className="text-4xl md:text-5xl font-black text-white text-center mb-20 leading-tight">
          Quem usa, <span className="text-vivid-green underline decoration-wavy underline-offset-8">ama</span> a facilidade
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white/5 backdrop-blur-lg border border-white/10 p-10 rounded-[3rem] hover:bg-white/10 transition-colors group">
              <Quote className="w-12 h-12 text-vivid-green mb-6 opacity-50 group-hover:opacity-100 transition-opacity" />
              <p className="text-white text-lg font-medium italic mb-10 leading-relaxed">"{t.content}"</p>
              <div className="flex items-center gap-5">
                <img src={t.avatar} alt={t.name} className="w-14 h-14 rounded-full border-4 border-vivid-green shadow-lg" />
                <div>
                  <p className="font-black text-white text-lg">{t.name}</p>
                  <p className="text-sm text-blue-200 font-bold">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
