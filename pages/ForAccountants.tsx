
import React from 'react';
import { Handshake, TrendingUp, ShieldCheck, MessageSquare, ChevronRight, Zap } from 'lucide-react';

const ForAccountants: React.FC = () => {
  const whatsappUrl = "https://wa.me/5521968996088?text=Olá! Sou contador e gostaria de saber mais sobre a parceria com o NotaFacil.";

  return (
    <div className="bg-white min-h-screen">
      <section className="hero-wave-bg py-24 text-white relative overflow-hidden">
        <div className="wave-shape-2 opacity-5"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-blue-800/50 backdrop-blur-sm text-[#00E676] px-5 py-2 rounded-full text-sm font-bold mb-8 border border-white/10">
            <Handshake className="w-4 h-4" />
            <span>PROGRAMA DE PARCERIA 2024</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
            Contador, seja nosso <br />
            <span className="text-[#00E676]">Parceiro Estratégico</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto font-medium">
            Indique o NotaFacil para seus clientes e garanta que eles tenham emissão rápida, sem erros e que você receba todos os XMLs organizados todo mês.
          </p>
          <div className="mt-12">
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#00E676] text-blue-900 px-10 py-5 rounded-full font-black text-xl shadow-2xl hover:scale-105 transition-all inline-flex items-center gap-3"
            >
              Quero ser parceiro <ChevronRight />
            </a>
          </div>
        </div>
      </section>

      <section className="py-24 container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="p-10 bg-slate-50 rounded-[3rem] text-center hover:shadow-lg transition-all group">
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-blue-900 mx-auto mb-8 shadow-sm group-hover:bg-[#00E676]">
              <TrendingUp className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-black text-blue-900 mb-4">Mais Receita</h3>
            <p className="text-slate-600 font-medium">Ganhe comissionamento recorrente por cada cliente indicado que utilizar nosso serviço.</p>
          </div>
          <div className="p-10 bg-slate-50 rounded-[3rem] text-center hover:shadow-lg transition-all group">
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-blue-900 mx-auto mb-8 shadow-sm group-hover:bg-[#00E676]">
              <Zap className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-black text-blue-900 mb-4">Menos Retrabalho</h3>
            <p className="text-slate-600 font-medium">Nossa equipe emite as notas corretamente, evitando que você precise corrigir erros fiscais de clientes.</p>
          </div>
          <div className="p-10 bg-slate-50 rounded-[3rem] text-center hover:shadow-lg transition-all group">
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-blue-900 mx-auto mb-8 shadow-sm group-hover:bg-[#00E676]">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-black text-blue-900 mb-4">Segurança Fiscal</h3>
            <p className="text-slate-600 font-medium">Backup automático e organização total dos documentos para fechamento de balanço sem estresse.</p>
          </div>
        </div>
      </section>

      <section className="bg-blue-900 py-24 text-white">
        <div className="container mx-auto px-4">
          <div className="bg-white/5 backdrop-blur-md rounded-[4rem] p-12 md:p-20 border border-white/10 flex flex-col md:flex-row items-center gap-12">
            <div className="flex-grow text-center md:text-left">
              <h2 className="text-4xl md:text-5xl font-black mb-6">Integração Total com seu escritório</h2>
              <p className="text-xl opacity-80 mb-10 font-medium">
                Nós enviamos os pacotes de XML e relatórios direto para seu e-mail contábil no final de cada mês. Sem que você precise cobrar o cliente.
              </p>
              <ul className="flex flex-col gap-4 text-lg font-bold">
                 <li className="flex items-center gap-3"><Zap className="text-[#00E676]" /> Envio Mensal Automatizado</li>
                 <li className="flex items-center gap-3"><Zap className="text-[#00E676]" /> Dashboard de Parceiro</li>
                 <li className="flex items-center gap-3"><Zap className="text-[#00E676]" /> Selo de Escritório Parceiro</li>
              </ul>
            </div>
            <div className="flex-shrink-0">
               <div className="bg-[#00E676] p-12 rounded-[3rem] text-blue-900 text-center shadow-2xl">
                  <MessageSquare className="w-16 h-16 mx-auto mb-6" />
                  <p className="font-black text-2xl mb-8 leading-tight">Vamos tomar um café <br /> virtual?</p>
                  <a 
                    href={whatsappUrl} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-900 text-white px-8 py-4 rounded-full font-black block hover:bg-blue-800 transition-all text-center"
                  >
                    Agendar conversa
                  </a>
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ForAccountants;
