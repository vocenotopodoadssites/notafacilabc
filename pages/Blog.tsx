
import React from 'react';
import { Calendar, User, ArrowRight, Search } from 'lucide-react';

const Blog: React.FC = () => {
  const posts = [
    {
      title: "Como emitir nota fiscal sendo MEI em 2024?",
      excerpt: "Tudo o que você precisa saber sobre as novas regras de emissão nacional para microempreendedores.",
      category: "Manual MEI",
      date: "12 Mar, 2024",
      image: "https://images.unsplash.com/photo-1454165833767-131435bb4496?auto=format&fit=crop&q=80&w=400"
    },
    {
      title: "5 erros fatais na emissão de NF-e que podem multar sua empresa",
      excerpt: "Entenda os códigos CFOP e alíquotas para não ter problemas com a Receita Federal.",
      category: "Fiscal",
      date: "08 Mar, 2024",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=400"
    },
    {
      title: "Por que delegar a emissão de notas aumenta seu lucro?",
      excerpt: "Descubra como o tempo gasto com burocracia custa caro para o crescimento do seu negócio.",
      category: "Produtividade",
      date: "01 Mar, 2024",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=400"
    },
    {
      title: "Novas regras para Notas Fiscais de Serviço (NFS-e)",
      excerpt: "O que muda na integração com os sistemas municipais este ano.",
      category: "Atualizações",
      date: "25 Fev, 2024",
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=400"
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      <section className="bg-blue-900 text-white py-20 px-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#00E676]/10 rounded-full blur-3xl"></div>
        <div className="container mx-auto max-w-5xl relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-black mb-6">Blog <span className="text-[#00E676]">NotaFacil</span></h1>
          <p className="text-xl opacity-80 max-w-2xl mx-auto">Conteúdo especializado para simplificar sua vida financeira e fiscal.</p>
          
          <div className="mt-10 max-w-md mx-auto relative">
             <input 
               type="text" 
               placeholder="O que você quer aprender hoje?" 
               className="w-full py-4 px-6 rounded-full bg-white/10 border border-white/20 backdrop-blur-md outline-none focus:bg-white text-blue-900 transition-all font-medium placeholder:text-white/50"
             />
             <Search className="absolute right-6 top-1/2 -translate-y-1/2 text-white/50" />
          </div>
        </div>
      </section>

      <section className="py-20 container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {posts.map((post, i) => (
            <div key={i} className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-100 group flex flex-col h-full">
              <div className="h-64 overflow-hidden relative">
                <img src={post.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt={post.title} />
                <span className="absolute top-6 left-6 bg-[#00E676] text-blue-900 font-black text-xs px-4 py-1.5 rounded-full uppercase tracking-widest">{post.category}</span>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-slate-400 text-xs font-bold mb-4">
                  <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
                  <span className="flex items-center gap-1"><User className="w-3 h-3" /> Redação NotaFacil</span>
                </div>
                <h3 className="text-2xl font-black text-blue-900 mb-4 leading-tight group-hover:text-blue-600 transition-colors">{post.title}</h3>
                <p className="text-slate-500 font-medium mb-8 flex-grow">{post.excerpt}</p>
                <button className="flex items-center gap-2 text-blue-900 font-black hover:gap-4 transition-all uppercase text-sm tracking-widest">
                  Ler artigo completo <ArrowRight className="w-4 h-4 text-[#00E676]" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      <section className="bg-white py-20">
         <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-black text-blue-900 mb-8">Quer receber dicas no seu e-mail?</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
               <input type="email" placeholder="Seu melhor e-mail" className="px-6 py-4 rounded-full bg-slate-100 border-none outline-none focus:ring-2 ring-[#00E676] flex-grow font-medium" />
               <button className="bg-blue-900 text-white px-8 py-4 rounded-full font-black hover:bg-blue-800 transition-all">Assinar Newsletter</button>
            </div>
         </div>
      </section>
    </div>
  );
};

export default Blog;
