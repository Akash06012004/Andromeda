import { useState, useEffect, useRef } from "react";

export default function Navbar() {

  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  /* CLOSE ON SCROLL */
  useEffect(() => {
    const handleScroll = () => setOpen(false);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* CLOSE ON OUTSIDE CLICK */
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <header className="navbar">

      <div className="nav-left">
        <img src="/logo.png" className="logo" />
        <h2>Andromeda</h2>
      </div>

      {/* DESKTOP */}
      <nav className="nav-links">
        <a href="#home">Home</a>
        <a href="#services">Services</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>

      {/* MENU BUTTON */}
      <div className="menu-btn" onClick={() => setOpen(!open)}>
        ☰
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="mobile-menu" ref={menuRef}>
          <a href="#home" onClick={() => setOpen(false)}>Home</a>
          <a href="#services" onClick={() => setOpen(false)}>Services</a>
          <a href="#about" onClick={() => setOpen(false)}>About</a>
          <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
        </div>
      )}

    </header>
  );
}