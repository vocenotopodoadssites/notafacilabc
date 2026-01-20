
import React from 'react';
import { Store, Calendar, FileText, Check, ChevronRight, Star } from 'lucide-react';

interface MeiFocusProps {
  setView: (view: 'home' | 'blog' | 'contadores' | 'billing' | 'mei' | 'tax') => void;
}

const MeiFocus: React.FC<MeiFocusProps> = ({ setView }) => {
  const whatsappUrl = "https://wa.me/5521968996088?text=Olá! Sou MEI e gostaria de saber mais sobre os benefícios do NotaFacil.";

  const handleGoToPlans = () => {
    setView('home');
    // Pequeno atraso para garantir que o componente Home foi renderizado antes de rolar
    setTimeout(() => {
      const element = document.querySelector('#planos');
      element?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      <section className="bg-[#00E676] py-24 text-blue-900">
        <div className="container mx-auto px-4 flex flex-col items-center text-center">
          <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center mb-8 shadow-xl">
            <Store className="w-10 h-10" />
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6">NotaFacil <br /> <span className="bg-blue-900 text-white px-4">para MEI</span></h1>
          <p className="text-xl md:text-2xl font-bold max-w-2xl leading-relaxed opacity-80">
            A solução definitiva para o microempreendedor individual que quer crescer sem medo da Receita Federal.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row gap-4">
             <button 
               onClick={handleGoToPlans}
               className="bg-blue-900 text-white px-10 py-5 rounded-full font-black text-xl hover:bg-blue-800 transition-all shadow-xl"
             >
               Assinar Agora
             </button>
             <a 
               href={whatsappUrl} 
               target="_blank" 
               rel="noopener noreferrer" 
               className="bg-white text-blue-900 px-10 py-5 rounded-full font-black text-xl border-2 border-blue-900/10 hover:border-blue-900 transition-all flex items-center justify-center"
             >
               Ver Benefícios
             </a>
          </div>
        </div>
      </section>

      <section className="py-24 container mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-10">
          <div className="bg-white p-12 rounded-[3rem] shadow-xl border border-blue-50">
            <Calendar className="w-12 h-12 text-blue-600 mb-6" />
            <h3 className="text-2xl font-black text-blue-900 mb-4">Guia DAS em dia</h3>
            <p className="text-slate-600 font-medium">Nós te avisamos e enviamos seu DAS mensal direto no WhatsApp para você nunca mais pagar multa por atraso.</p>
          </div>
          <div className="bg-white p-12 rounded-[3rem] shadow-xl border border-blue-50">
            <FileText className="w-12 h-12 text-blue-600 mb-6" />
            <h3 className="text-2xl font-black text-blue-900 mb-4">Declaração Anual</h3>
            <p className="text-slate-600 font-medium">Nossa equipe faz a sua DASN-SIMEI (Declaração Anual) de forma gratuita para clientes mensais.</p>
          </div>
          <div className="bg-white p-12 rounded-[3rem] shadow-xl border border-blue-50">
            <Star className="w-12 h-12 text-blue-600 mb-6" />
            <h3 className="text-2xl font-black text-blue-900 mb-4">Limite de 81k</h3>
            <p className="text-slate-600 font-medium">Monitoramos seu faturamento para você não ser desenquadrado do MEI sem planejamento.</p>
          </div>
        </div>
      </section>

      <section className="bg-blue-900 py-24 text-white">
         <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-16">
               <h2 className="text-4xl font-black mb-6">O que incluímos no plano MEI:</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
               {[
                 'Emissão ilimitada de notas de serviço',
                 'Suporte via WhatsApp em minutos',
                 'Consultoria para alteração de dados MEI',
                 'Parcelamento de débitos antigos',
                 'Acompanhamento de alvarás',
                 'Certificado Digital por preço de custo'
               ].map((item, i) => (
                 <div key={i} className="flex items-center gap-4 bg-white/5 p-6 rounded-2xl border border-white/10">
                    <Check className="text-[#00E676] w-6 h-6" />
                    <span className="font-bold">{item}</span>
                 </div>
               ))}
            </div>
         </div>
      </section>
    </div>
  );
};

export default MeiFocus;
