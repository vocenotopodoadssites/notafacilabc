
import React from 'react';
import { MessageSquare } from 'lucide-react';

const ContactCTA: React.FC = () => {
  const whatsappUrl = "https://wa.me/5521968996088?text=Olá! Gostaria de simplificar minha vida fiscal com o NotaFacil.";
  
  return (
    <section id="contato" className="py-24 relative overflow-hidden bg-blue-900">
      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        <h2 className="text-3xl md:text-5xl font-black text-white mb-8">Pronto para simplificar sua vida fiscal?</h2>
        <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto font-medium">
          Junte-se a milhares de empreendedores que não perdem mais tempo com burocracia. Nossa equipe emite suas notas para você.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-[#00E676] text-blue-900 px-10 py-5 rounded-full font-black text-xl hover:bg-green-400 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
          >
            <MessageSquare className="w-6 h-6 fill-current" />
            Falar com um Especialista (WhatsApp)
          </a>
          <a 
            href={whatsappUrl}
            className="text-white font-black text-lg hover:underline underline-offset-4"
          >
            Solicitar demonstração grátis
          </a>
        </div>

        <div className="mt-16 flex justify-center items-center gap-12 opacity-70">
           <span className="text-white text-sm font-bold uppercase tracking-widest">SSL SEGURO</span>
           <span className="text-white text-sm font-bold uppercase tracking-widest">LGPD COMPLIANCE</span>
           <span className="text-white text-sm font-bold uppercase tracking-widest">NUVEM AWS</span>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
