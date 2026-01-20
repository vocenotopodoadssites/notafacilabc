
import React from 'react';
import { Users, FileText, Star, Award } from 'lucide-react';

const Stats: React.FC = () => {
  const stats = [
    { label: 'Clientes Ativos', value: '15.000+', icon: <Users /> },
    { label: 'Notas Emitidas', value: '2 Milhões+', icon: <FileText /> },
    { label: 'Nota dos Usuários', value: '4.9/5', icon: <Star /> },
    { label: 'Anos de Mercado', value: '8 Anos', icon: <Award /> },
  ];

  return (
    <section className="py-12 bg-blue-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center text-center gap-2">
              <div className="text-blue-200 mb-2">
                {/* Fix: Added <any> to React.ReactElement to allow passing className prop in cloneElement */}
                {React.cloneElement(stat.icon as React.ReactElement<any>, { className: 'w-8 h-8' })}
              </div>
              <p className="text-3xl md:text-4xl font-bold text-white">{stat.value}</p>
              <p className="text-blue-200 text-sm font-medium uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;