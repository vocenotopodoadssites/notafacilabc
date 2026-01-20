
import React, { useState } from 'react';
import { Menu, X, Rocket, ChevronDown, MessageCircle } from 'lucide-react';

interface HeaderProps {
  setView: (view: 'home' | 'blog' | 'contadores' | 'billing' | 'mei' | 'tax') => void;
  currentView: string;
}

const Header: React.FC<HeaderProps> = ({ setView, currentView }) => {
  const [isOpen, setIsOpen] = useState(false);
  const whatsappUrl = "https://wa.me/5521968996088?text=Olá! Gostaria de falar com um contador do NotaFacil.";

  const navLinks = [
    { name: 'O NotaFacil', view: 'home', hasDropdown: false },
    { name: 'Planos', view: 'home', href: '#planos', hasDropdown: false },
    { name: 'Blog', view: 'blog', hasDropdown: false },
    { name: 'Para Contadores', view: 'contadores', hasDropdown: false },
  ];

  const handleNavClick = (view: any, href?: string) => {
    setView(view);
    setIsOpen(false);
    if (href) {
      setTimeout(() => {
        const element = document.querySelector(href);
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <header className="w-full bg-[#0046ad] text-white sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-16 items-center justify-between">
          <div 
            className="flex items-center gap-2 cursor-pointer" 
            onClick={() => handleNavClick('home')}
          >
            <Rocket className="w-8 h-8 text-white fill-white" />
            <span className="text-2xl font-black text-white tracking-tight">notafacil</span>
          </div>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.view as any, link.href)}
                className={`flex items-center gap-1 text-sm font-semibold transition-colors ${
                  currentView === link.view && !link.href ? 'text-[#00E676]' : 'hover:text-green-300'
                }`}
              >
                {link.name}
                {link.hasDropdown && <ChevronDown className="w-4 h-4" />}
              </button>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a 
              href={whatsappUrl} 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#00E676] text-[#0046ad] px-6 py-2 rounded-full text-sm font-bold hover:bg-green-400 transition-all flex items-center gap-2 shadow-lg"
            >
              Falar com contador <MessageCircle className="w-4 h-4" />
            </a>
          </div>

          <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-16 left-0 w-full bg-[#0046ad] p-6 shadow-2xl z-50 border-t border-blue-800 flex flex-col gap-4">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.view as any, link.href)}
                className="text-left text-lg font-bold p-3 border-b border-blue-800/50 hover:bg-blue-800 rounded-lg transition-colors"
              >
                {link.name}
              </button>
            ))}
          </nav>
          <div className="flex flex-col gap-4 mt-2">
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#00E676] text-blue-900 text-center py-4 rounded-full font-black shadow-lg flex items-center justify-center gap-2"
            >
              Falar com contador <MessageCircle className="w-5 h-5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
