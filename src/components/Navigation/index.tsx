import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

// Assets
import Logo from "/img/logosimpledark.png";

// Data for the navigation links
const links = [
  {
    href: "/services",
    text: "Mes services",
  },
  {
    href: "/intervention-a-domicile",
    text: "Intervention à domicile",
  },
  {
    href: "/contact",
    text: "Contact",
  },
];

function MobileNavigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null); // Référence pour le menu avec typage correct

  const handleMenuButton = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    // Vérifie si le clic est en dehors du menu
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    // Cleanup lorsque le composant est démonté
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <div className="relative">
      <nav className="flex justify-between items-center p-4 text-black shadow-md z-10">
        <Link to="/" className="w-1/3">
          <span className="flex items-center">
            <img src={Logo} alt="Logo" className="w-32" />
          </span>
        </Link>
        <button
          className="text-3xl text-black"
          onClick={handleMenuButton}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
      </nav>

      <div
        ref={menuRef}
        className={`absolute right-4 mt-2 w-[60%] bg-white border border-gray-300 rounded-lg shadow-lg transform transition-transform duration-300 ease-in-out z-[9999] ${
          isMenuOpen
            ? "scale-100 opacity-100"
            : "scale-95 opacity-0 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col p-2 space-y-2">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                to={link.href}
                className="block px-4 py-2 text-sm text-black hover:bg-gray-100 rounded-lg transition-colors"
                onClick={handleMenuButton}
              >
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function DesktopNavigation() {
  return (
    <nav className="sticky top-0 flex justify-between items-center p-4 w-full text-black shadow-md">
      <Link to="/" className="w-1/3">
        <span>
          <img src={Logo} alt="Logo" className="w-32" />
        </span>
      </Link>
      <ul className="flex justify-center items-center space-x-5 w-1/2">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              to={link.href}
              className="hover:text-[#3B82F6] transition-colors duration-300"
            >
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
      <div className="w-1/3 flex justify-end items-center">
        <ul className="flex justify-center items-center space-x-4">
          <button className="py-2 px-4 text-sm text-black border-[1px] rounded-full border-black bg-transparent transition-colors duration-200 ease-in-out hover:text-white hover:bg-mainBlue hover:border-transparent">
            <Link to="/login">Compte</Link>
          </button>
          <button className="py-2 px-4 text-sm text-black border-[1px] rounded-full border-black bg-transparent transition-colors duration-200 ease-in-out hover:text-white hover:bg-mainBlue hover:border-transparent">
            <span>0,00 €</span>
          </button>
        </ul>
      </div>
    </nav>
  );
}

function Navigation() {
  return (
    <div>
      {window.innerWidth < 768 ? <MobileNavigation /> : <DesktopNavigation />}
    </div>
  );
}

export default Navigation;
