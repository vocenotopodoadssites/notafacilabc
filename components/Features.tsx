
import React from 'react';
import { Headset, Coffee, CheckCircle, Clock, ShieldCheck, Heart } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      title: 'Suporte VIP via WhatsApp',
      description: 'Nada de robôs. Você fala com pessoas que entendem de impostos e notas fiscais.',
      icon: <Headset />,
    },
    {
      title: 'Tempo é Dinheiro',
      description: 'Enquanto você foca em vender ou tomar um café, nós cuidamos da burocracia governamental.',
      icon: <Coffee />,
    },
    {
      title: 'Erros Zero',
      description: 'Nossa equipe revisa os dados para garantir que sua nota saia 100% correta, sem multas.',
      icon: <CheckCircle />,
    },
    {
      title: 'Agilidade Incrível',
      description: 'Emissão rápida para que seu cliente receba a nota no momento da entrega do serviço.',
      icon: <Clock />,
    },
    {
      title: 'Conformidade Total',
      description: 'Fique em dia com o fisco sem precisar entender de códigos CFOP ou alíquotas de ISS.',
      icon: <ShieldCheck />,
    },
    {
      title: 'Atendimento com Carinho',
      description: 'Tratamos seu negócio como se fosse nosso. Resolvemos problemas de verdade.',
      icon: <Heart />,
    },
  ];

  return (
    <section id="funcionalidades" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-vivid-green font-black uppercase tracking-widest text-sm mb-4 block">Por que nos escolher?</span>
          <h2 className="text-4xl md:text-5xl font-black text-blue-900 mb-6">
            Liberdade para você <br /><span className="text-vivid-green">crescer sem amarras</span>
          </h2>
          <p className="text-lg text-slate-500 font-medium">
            O serviço de emissão que todo microempreendedor sempre sonhou.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-10 rounded-[40px] border border-slate-100 shadow-sm hover:shadow-xl transition-all hover:-translate-y-2 group"
            >
              <div className="w-16 h-16 bg-blue-50 text-blue-900 rounded-2xl flex items-center justify-center mb-8 shadow-inner group-hover:bg-vivid-green group-hover:text-blue-900 transition-colors">
                {/* Fix: Added <any> to React.ReactElement to allow passing className prop in cloneElement */}
                {React.cloneElement(feature.icon as React.ReactElement<any>, { className: 'w-8 h-8' })}
              </div>
              <h3 className="text-2xl font-black text-blue-900 mb-4">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed font-medium">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
