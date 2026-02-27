import { useState } from "react";

export default function Navbar() {

  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">

      <div className="nav-brand">
        <img src="/logo.png" className="nav-logo" />
        <h2>Andromeda</h2>
      </div>

      {/* Desktop Menu */}
      <nav className="nav-links">
        <a href="#home">Home</a>
        <a href="#services">Services</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>

      {/* Mobile Button */}
      <div className="menu-btn" onClick={() => setOpen(!open)}>
        ☰
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="mobile-menu">
          <a href="#home" onClick={()=>setOpen(false)}>Home</a>
          <a href="#services" onClick={()=>setOpen(false)}>Services</a>
          <a href="#about" onClick={()=>setOpen(false)}>About</a>
          <a href="#contact" onClick={()=>setOpen(false)}>Contact</a>
        </div>
      )}

    </header>
  );
}