import { useEffect } from 'react';

export default function Navbar() {
  useEffect(() => {
    // Close mobile menu when a link is clicked
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    
    const closeMenu = () => {
      if (navbarCollapse.classList.contains('show')) {
        navbarToggler.click();
      }
    };

    const navLinks = document.querySelectorAll('.navbar-nav a');
    navLinks.forEach(link => {
      link.addEventListener('click', closeMenu);
    });

    return () => {
      navLinks.forEach(link => {
        link.removeEventListener('click', closeMenu);
      });
    };
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div className="container-fluid">
        <a className="navbar-brand fw-bold fs-5" href="/">
          🏢 Royal Packaging
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#features">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#products">
                Products
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#services">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#process">
                How to Order
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
