import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import "../styles.css";

const navLinks = [
  { href: "#advantages", label: "Преимущества" },
  { href: "#stages", label: "Этапы" },
  { href: "#tile-types", label: "Виды плитки" },
  { href: "#calculator", label: "Цены" },
  { href: "#faq", label: "Вопросы" },
  { href: "#contacts", label: "Контакты" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container navbar-inner">
        <a href="#" className="navbar-logo">
          Укладка тротуарной <span>плитки</span>
        </a>
        <div className="navbar-links">
          {navLinks.map(l => (
            <a key={l.href} href={l.href} className="navbar-link">{l.label}</a>
          ))}
        </div>
        <a href="tel:+375291234567" className="navbar-cta">
          <Phone size={16} />
          Позвонить
        </a>
        <button onClick={() => setOpen(!open)} className="navbar-burger">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <div className="navbar-mobile">
          {navLinks.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="navbar-mobile-link">
              {l.label}
            </a>
          ))}
          <a href="tel:+375291234567" className="navbar-mobile-cta">
            <Phone size={16} />
            Позвонить
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
