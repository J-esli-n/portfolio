import { useState, useEffect } from "react";

function Navbar() {
  const [show, setShow] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScroll) {
        setShow(false); // scrolling down → hide
      } else {
        setShow(true); // scrolling up → show
      }
      setLastScroll(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  return (
    <nav className={`navbar ${show ? "show" : "hide"}`}>
      <h2>Jeslin Philip</h2>

      <div>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;