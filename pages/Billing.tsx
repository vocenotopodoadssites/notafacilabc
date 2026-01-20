
import React from 'react';
import { DollarSign, Bell, CreditCard, TrendingUp, MessageCircle, ChevronRight, CheckCircle } from 'lucide-react';

const Billing: React.FC = () => {
  const whatsappUrl = "https://wa.me/5521968996088?text=Olá! Gostaria de saber mais sobre a Gestão de Cobranças do NotaFacil.";

  return (
    <div className="bg-white min-h-screen">
      <section className="bg-blue-900 py-24 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-400/10 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-black mb-8">Gestão de <span className="text-[#00E676]">Cobranças</span></h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto font-medium leading-relaxed">
            Nós cobramos por você. Reduza a inadimplência com lembretes automáticos e faturamento profissional via WhatsApp.
          </p>
          <div className="mt-12">
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#00E676] text-blue-900 px-10 py-5 rounded-full font-black text-xl shadow-2xl hover:scale-105 transition-all inline-flex items-center gap-3"
            >
              Falar com Especialista <ChevronRight />
            </a>
          </div>
        </div>
      </section>

      <section className="py-24 container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          <div>
            <h2 className="text-4xl font-black text-blue-900 mb-8 leading-tight">Chega de "esquecer" de cobrar seus clientes</h2>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-900 flex-shrink-0">
                  <Bell className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-blue-900 mb-2">Lembretes Inteligentes</h3>
                  <p className="text-slate-600 font-medium">Enviamos notificações amigáveis antes e depois do vencimento.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-900 flex-shrink-0">
                  <CreditCard className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-blue-900 mb-2">Links de Pagamento</h3>
                  <p className="text-slate-600 font-medium">Pix, Cartão ou Boleto. Seu cliente paga em um clique.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-900 flex-shrink-0">
                  <TrendingUp className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-blue-900 mb-2">Dashboard de Fluxo</h3>
                  <p className="text-slate-600 font-medium">Saiba exatamente quanto tem para receber na semana.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-slate-50 p-12 rounded-[4rem] border border-slate-100 shadow-inner relative">
             <div className="absolute -top-6 -right-6 bg-[#00E676] text-blue-900 font-black p-6 rounded-3xl shadow-lg animate-bounce z-10">
                -35% de Atrasos
             </div>
             <img 
               src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800" 
               className="rounded-3xl shadow-2xl w-full h-auto object-cover relative z-0" 
               alt="Gerenciamento de faturamento e cobranças" 
             />
          </div>
        </div>
      </section>

      <section className="bg-slate-900 py-24 text-white">
         <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-5xl font-black mb-12">Como a gestão funciona:</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
               <div className="p-8 border border-white/10 rounded-3xl">
                  <div className="text-[#00E676] text-4xl font-black mb-4">01</div>
                  <h4 className="text-xl font-bold mb-2">Cadastro Simples</h4>
                  <p className="opacity-70">Você nos envia os dados da venda via WhatsApp.</p>
               </div>
               <div className="p-8 border border-white/10 rounded-3xl">
                  <div className="text-[#00E676] text-4xl font-black mb-4">02</div>
                  <h4 className="text-xl font-bold mb-2">Nós Emitimos</h4>
                  <p className="opacity-70">Geramos a cobrança e o lembrete profissional.</p>
               </div>
               <div className="p-8 border border-white/10 rounded-3xl">
                  <div className="text-[#00E676] text-4xl font-black mb-4">03</div>
                  <h4 className="text-xl font-bold mb-2">Dinheiro na Conta</h4>
                  <p className="opacity-70">Acompanhamos o status até o recebimento.</p>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
};

export default Billing;
