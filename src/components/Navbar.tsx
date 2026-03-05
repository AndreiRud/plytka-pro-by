import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { href: "#advantages", label: "Преимущества" },
  { href: "#stages", label: "Этапы" },
  { href: "#tile-types", label: "Виды плитки" },
  { href: "#calculator", label: "Цены" },
  { href: "#examples", label: "Примеры" },
  { href: "#faq", label: "Вопросы" },
  { href: "#contacts", label: "Контакты" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-secondary/95 backdrop-blur-md border-b border-secondary-foreground/10">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <a href="#" className="font-heading font-black text-lg text-secondary-foreground">
          ИП Якутчик <span className="text-accent">А.С.</span>
        </a>
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map(l => (
            <a key={l.href} href={l.href} className="text-secondary-foreground/80 hover:text-accent text-sm font-heading font-medium transition-colors">
              {l.label}
            </a>
          ))}
        </div>
        <div className="hidden lg:flex items-center gap-3">
          <a href="tel:+375291234567" className="inline-flex items-center gap-2 bg-gradient-warm text-primary-foreground font-heading font-bold px-4 py-2 rounded-lg text-sm hover:opacity-90 transition-opacity">
            <Phone className="w-4 h-4" />
            Позвонить
          </a>
        </div>
        <button onClick={() => setOpen(!open)} className="lg:hidden text-secondary-foreground">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden bg-secondary border-t border-secondary-foreground/10 px-4 pb-4">
          {navLinks.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block py-3 text-secondary-foreground/80 hover:text-accent font-heading font-medium text-sm border-b border-secondary-foreground/5">
              {l.label}
            </a>
          ))}
          <a href="tel:+375291234567" className="mt-4 w-full inline-flex items-center justify-center gap-2 bg-gradient-warm text-primary-foreground font-heading font-bold px-4 py-3 rounded-lg text-sm">
            <Phone className="w-4 h-4" />
            Позвонить
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
