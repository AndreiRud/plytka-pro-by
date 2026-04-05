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

const TileLogo = () => (
  <svg
    width="36"
    height="36"
    viewBox="0 0 36 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="2" y="2" width="14" height="10" rx="1.5" fill="#e69b00" stroke="#c2601a" strokeWidth="1" />
    <rect x="18" y="2" width="16" height="10" rx="1.5" fill="#c2601a" stroke="#a04e10" strokeWidth="1" />
    <rect x="2" y="14" width="10" height="10" rx="1.5" fill="#c2601a" stroke="#a04e10" strokeWidth="1" />
    <rect x="14" y="14" width="20" height="10" rx="1.5" fill="#e69b00" stroke="#c2601a" strokeWidth="1" />
    <rect x="2" y="26" width="18" height="8" rx="1.5" fill="#d4782a" stroke="#c2601a" strokeWidth="1" />
    <rect x="22" y="26" width="12" height="8" rx="1.5" fill="#c2601a" stroke="#a04e10" strokeWidth="1" />
  </svg>
);

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container navbar-inner">

        <a href="#" className="navbar-logo">
          <TileLogo />
          <span className="navbar-logo-text">
            Укладка тротуарной <span>плитки</span>
          </span>
        </a>

        <div className="navbar-links">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="navbar-link">
              {l.label}
            </a>
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
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="navbar-mobile-link"
            >
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
