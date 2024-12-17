// Assets
import Logo from "/img/logodark.png";

function Footer() {
  return (
    <footer className="bg-footerbg text-white text-center p-4">
      <div>
        <img src={Logo} alt="Logo" className="w-48 mx-auto" />
        <p className="mt-4">© 2021 Dou²IT</p>
      </div>
    </footer>
  );
}

// Exports
export default Footer;
