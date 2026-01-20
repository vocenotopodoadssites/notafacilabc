
import React from 'react';
import { ShieldCheck, Scale, Search, PieChart, ChevronRight, MessageSquare } from 'lucide-react';

const TaxConsulting: React.FC = () => {
  const whatsappUrl = "https://wa.me/5521968996088?text=Olá! Gostaria de solicitar um diagnóstico de Consultoria Fiscal com o NotaFacil.";

  return (
    <div className="bg-white min-h-screen">
      <section className="bg-slate-900 py-24 text-white relative">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-16">
          <div className="flex-grow">
             <div className="inline-block bg-blue-600 px-4 py-1 rounded-full text-xs font-black uppercase mb-6">Especialistas Senior</div>
             <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">Sua empresa <br /> Blindada e <br /><span className="text-blue-500">Econômica</span></h1>
             <p className="text-xl opacity-70 mb-10 max-w-xl font-medium">Consultoria completa para pagar o mínimo de imposto dentro da lei e garantir 100% de conformidade fiscal.</p>
             <a 
               href={whatsappUrl} 
               target="_blank"
               rel="noopener noreferrer"
               className="bg-white text-slate-900 px-10 py-5 rounded-full font-black text-xl hover:bg-[#00E676] transition-all inline-flex items-center gap-3"
             >
               Solicitar Diagnóstico Grátis <ChevronRight />
             </a>
          </div>
          <div className="flex-shrink-0 w-full md:w-1/3">
             <div className="bg-blue-600 p-12 rounded-[4rem] text-center shadow-[0_30px_60px_rgba(37,99,235,0.3)]">
                <ShieldCheck className="w-20 h-20 mx-auto mb-6 text-white" />
                <h3 className="text-2xl font-black mb-4">Risco Zero</h3>
                <p className="font-medium opacity-80">Monitoramento constante das leis que mudam todo dia no Brasil.</p>
             </div>
          </div>
        </div>
      </section>

      <section className="py-24 container mx-auto px-4">
         <div className="text-center mb-20">
            <h2 className="text-4xl font-black text-slate-900 mb-4">Nossa Metodologia</h2>
            <p className="text-xl text-slate-500 font-medium">Como transformamos sua contabilidade em lucro.</p>
         </div>

         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="group">
               <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <Search className="w-8 h-8" />
               </div>
               <h3 className="text-2xl font-black text-slate-900 mb-4">Auditoria Reversa</h3>
               <p className="text-slate-500 font-medium">Analisamos os últimos 5 anos da sua empresa em busca de impostos pagos a mais que podem ser recuperados.</p>
            </div>
            <div className="group">
               <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <PieChart className="w-8 h-8" />
               </div>
               <h3 className="text-2xl font-black text-slate-900 mb-4">Planejamento 360º</h3>
               <p className="text-slate-500 font-medium">Simulação entre Simples Nacional, Lucro Presumido e Lucro Real para achar a menor carga tributária.</p>
            </div>
            <div className="group">
               <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <Scale className="w-8 h-8" />
               </div>
               <h3 className="text-2xl font-black text-slate-900 mb-4">Blindagem Jurídica</h3>
               <p className="text-slate-500 font-medium">Proteção do patrimônio dos sócios e adequação às normas da LGPD e contábeis vigentes.</p>
            </div>
         </div>
      </section>

      <section className="bg-slate-50 py-24">
         <div className="container mx-auto px-4">
            <div className="bg-white rounded-[4rem] p-12 md:p-20 shadow-xl border border-slate-100 flex flex-col md:flex-row items-center gap-16">
               <div className="md:w-1/2">
                  <h2 className="text-4xl font-black text-slate-900 mb-8">Precisa de um parecer técnico?</h2>
                  <p className="text-lg text-slate-500 mb-8 font-medium">Nossa equipe está pronta para responder dúvidas complexas sobre exportação, bitributação e regimes especiais.</p>
                  <a 
                    href={whatsappUrl} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-blue-600 font-black text-lg hover:gap-5 transition-all"
                  >
                     CHAMAR NO WHATSAPP <MessageSquare className="w-6 h-6" />
                  </a>
               </div>
               <div className="md:w-1/2 grid grid-cols-2 gap-4">
                  <div className="bg-slate-100 p-8 rounded-3xl text-center">
                     <span className="block text-4xl font-black text-slate-900 mb-2">98%</span>
                     <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Satisfação</span>
                  </div>
                  <div className="bg-slate-100 p-8 rounded-3xl text-center">
                     <span className="block text-4xl font-black text-slate-900 mb-2">+R$ 5M</span>
                     <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Recuperados</span>
                  </div>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
};

export default TaxConsulting;
