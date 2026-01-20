
import React from 'react';
import { FileText, DollarSign, Store, ShieldCheck, MessageSquare, ChevronRight, Zap, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  setView?: (view: 'home' | 'blog' | 'contadores' | 'billing' | 'mei' | 'tax') => void;
}

const Hero: React.FC<HeroProps> = ({ setView }) => {
  const whatsappUrl = "https://wa.me/5521968996088?text=Olá! Quero que vocês emitam minhas notas fiscais. Como funciona?";

  return (
    <div className="flex flex-col">
      {/* Product Switcher Bar */}
      <div className="bg-white border-b border-slate-100 py-3 hidden md:block">
        <div className="container mx-auto px-4 flex justify-center gap-12">
          <button 
            onClick={() => setView?.('home')}
            className="flex items-center gap-2 text-blue-900 font-bold border-b-2 border-blue-900 pb-1"
          >
            <FileText className="w-5 h-5 text-green-500" /> Emissão Especializada
          </button>
          <button 
            onClick={() => setView?.('billing')}
            className="flex items-center gap-2 text-slate-500 font-medium hover:text-blue-900 transition-colors"
          >
            <div className="relative">
               <DollarSign className="w-5 h-5" />
               <span className="absolute -top-3 -right-2 bg-yellow-400 text-[8px] px-1 rounded font-black text-blue-900">NOVO</span>
            </div>
            Gestão de Cobranças
          </button>
          <button 
            onClick={() => setView?.('mei')}
            className="flex items-center gap-2 text-slate-500 font-medium hover:text-blue-900 transition-colors"
          >
            <Store className="w-5 h-5" /> Foco em MEI
          </button>
          <button 
            onClick={() => setView?.('tax')}
            className="flex items-center gap-2 text-slate-500 font-medium hover:text-blue-900 transition-colors"
          >
            <ShieldCheck className="w-5 h-5" /> Consultoria Fiscal
          </button>
        </div>
      </div>

      <section className="hero-wave-bg pt-20 pb-24 md:pt-32 md:pb-40 flex items-center relative overflow-hidden">
        <div className="wave-shape opacity-20 animate-pulse"></div>
        <div className="wave-shape-2 opacity-10"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            
            <div className="inline-flex items-center gap-2 bg-blue-800/50 backdrop-blur-sm text-[#00E676] px-5 py-2 rounded-full text-sm font-bold mb-8 border border-white/10 shadow-lg">
              <Zap className="w-4 h-4 fill-current" />
              <span>VOCÊ VENDE, NÓS EMITIMOS A NOTA PARA VOCÊ</span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1.05] tracking-tight mb-8">
              Pare de brigar com <br />
              <span className="text-[#00E676] drop-shadow-[0_0_20px_rgba(0,230,118,0.3)]">Sistemas Chatos</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-50 font-medium mb-12 max-w-2xl mx-auto leading-relaxed opacity-90">
              Mande os dados da venda pelo WhatsApp e nossa equipe de contadores emite sua nota na hora. Com software, sem treinamento, sem estresse.
            </p>

            <div className="flex flex-col items-center gap-6">
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center justify-center gap-4 bg-[#00E676] text-[#0046ad] px-10 py-6 md:px-14 md:py-8 rounded-full font-black text-xl md:text-2xl hover:bg-[#00c864] transition-all shadow-[0_20px_50px_rgba(0,230,118,0.4)] hover:shadow-[0_25px_60px_rgba(0,230,118,0.5)] transform hover:-translate-y-2"
              >
                <MessageSquare className="w-8 h-8 fill-current" />
                SOLICITAR MINHA NOTA AGORA
                <ChevronRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </a>

              <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4">
                <div className="flex items-center gap-2 text-white/80 text-sm font-semibold">
                  <CheckCircle2 className="w-5 h-5 text-[#00E676]" />
                  Emissão em tempo real
                </div>
                <div className="flex items-center gap-2 text-white/80 text-sm font-semibold">
                  <CheckCircle2 className="w-5 h-5 text-[#00E676]" />
                  Contadores de verdade
                </div>
                <div className="flex items-center gap-2 text-white/80 text-sm font-semibold">
                  <CheckCircle2 className="w-5 h-5 text-[#00E676]" />
                  Tudo pelo WhatsApp
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating abstract UI elements */}
        <div className="absolute top-1/2 -right-20 transform -translate-y-1/2 hidden xl:block opacity-20">
           <div className="w-[400px] h-[300px] bg-white/10 rounded-3xl border border-white/20 backdrop-blur-md shadow-2xl rotate-12"></div>
        </div>
        <div className="absolute top-1/3 -left-20 transform -translate-y-1/2 hidden xl:block opacity-20">
           <div className="w-[300px] h-[200px] bg-green-500/10 rounded-3xl border border-green-500/20 backdrop-blur-md shadow-2xl -rotate-12"></div>
        </div>
      </section>

      {/* Bottom Info Bar */}
      <div className="grid md:grid-cols-3">
         <div className="bg-[#1c1c1c] p-10 flex flex-col items-center text-center text-white gap-4 border-r border-white/5">
            <MessageSquare className="w-10 h-10 text-slate-400" />
            <p className="font-bold max-w-[200px]">Atendimento humano e imediato pelo WhatsApp</p>
         </div>
         <div className="bg-[#00E676] p-10 flex flex-col items-center text-center text-blue-900 gap-4">
            <div className="w-12 h-12 flex items-center justify-center border-2 border-blue-900/20 rounded-lg">
               <FileText className="w-8 h-8" />
            </div>
            <p className="font-black max-w-[200px]">Você manda os dados, nós cuidamos da nota</p>
         </div>
         <div className="bg-[#D4FF00] p-10 flex flex-col items-center text-center text-blue-900 gap-4">
            <ShieldCheck className="w-10 h-10" />
            <p className="font-black max-w-[200px]">Conformidade fiscal garantida por especialistas</p>
         </div>
      </div>
    </div>
  );
};

export default Hero;
