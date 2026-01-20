
import React from 'react';
import { Rocket, Instagram, Facebook, Linkedin, Twitter } from 'lucide-react';

interface FooterProps {
  setView: (view: 'home' | 'blog' | 'contadores' | 'billing' | 'mei' | 'tax') => void;
}

const Footer: React.FC<FooterProps> = ({ setView }) => {
  const whatsappUrl = "https://wa.me/5521968996088?text=Olá! Preciso de suporte com minhas notas fiscais.";

  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-10 border-t border-slate-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-16">
          <div className="col-span-2 lg:col-span-2 flex flex-col gap-6">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => setView('home')}>
              <div className="bg-blue-600 p-2 rounded-lg shadow-lg">
                <Rocket className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-black text-white tracking-tight">NotaFacil</span>
            </div>
            <p className="max-w-sm text-slate-400 font-medium">
              A revolução na emissão de notas fiscais para MEIs e PMEs do Brasil. Atendimento 100% humano via WhatsApp.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#00E676] hover:text-blue-900 transition-all"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#00E676] hover:text-blue-900 transition-all"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#00E676] hover:text-blue-900 transition-all"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#00E676] hover:text-blue-900 transition-all"><Twitter className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-black mb-6 uppercase text-xs tracking-widest">Navegação</h4>
            <ul className="flex flex-col gap-4 text-sm font-bold">
              <li><button onClick={() => setView('home')} className="hover:text-[#00E676] transition-colors text-left">Página Inicial</button></li>
              <li><button onClick={() => { setView('home'); setTimeout(() => document.querySelector('#planos')?.scrollIntoView({behavior: 'smooth'}), 100); }} className="hover:text-[#00E676] transition-colors text-left">Ver Planos</button></li>
              <li><button onClick={() => setView('blog')} className="hover:text-[#00E676] transition-colors text-left">Blog & Dicas</button></li>
              <li><button onClick={() => setView('contadores')} className="hover:text-[#00E676] transition-colors text-left">Para Contadores</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-black mb-6 uppercase text-xs tracking-widest">Serviços</h4>
            <ul className="flex flex-col gap-4 text-sm font-bold">
              <li><button onClick={() => setView('billing')} className="hover:text-[#00E676] transition-colors text-left">Gestão de Cobranças</button></li>
              <li><button onClick={() => setView('mei')} className="hover:text-[#00E676] transition-colors text-left">Foco em MEI</button></li>
              <li><button onClick={() => setView('tax')} className="hover:text-[#00E676] transition-colors text-left">Consultoria Fiscal</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-black mb-6 uppercase text-xs tracking-widest">Contato</h4>
            <ul className="flex flex-col gap-4 text-sm font-bold">
              <li><a href={whatsappUrl} className="flex items-center gap-2 hover:text-[#00E676] transition-colors">WhatsApp Suporte</a></li>
              <li><a href={whatsappUrl} className="hover:text-[#00E676] transition-colors">Central de Ajuda</a></li>
              <li><a href={whatsappUrl} className="hover:text-[#00E676] transition-colors">E-mail Comercial</a></li>
              <li><span className="text-slate-500 font-medium">Rio de Janeiro, RJ</span></li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500 font-bold uppercase tracking-widest">
          <p>© 2024 NotaFacil Tecnologias Fiscais. Todos os direitos reservados.</p>
          <div className="flex gap-6">
             <span>SSL SEGURO</span>
             <span>EM CONFORMIDADE COM LGPD</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
