// Imports
import { Link } from "react-router-dom";

function Wrapper() {
  const items = [
    {
      title: "Mes services",
      description: "Découvrez tous les services disponibles.",
      href: "/services",
      img: "/img/services.webp",
    },
    {
      title: "Intervention à domicile",
      description:
        "Je me déplace chez vous pour résoudre vos problèmes informatiques.",
      href: "/intervention-a-domicile",
      img: "/img/repairdomicile.jpg",
    },
    {
      title: "Contact",
      description: "Vous avez une question, un problème ? Contactez-moi !",
      href: "/contact",
      img: "/img/contact.webp",
    },
  ];

  return (
    <div className="flex flex-col items-center py-2">
      {/* Border bottom non à 100% */}
      <div className="pt-7 w-[50%] border-b-2 border-[#3B82F6]" />

      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 p-4 sm:p-8 w-full max-w-screen-lg">
        {items.map((item) => (
          <li key={item.href}>
            <Link
              to={item.href}
              className="group relative block h-64 sm:h-80 lg:h-96"
              aria-label={item.title}
            >
              {/* Désactiver les interactions hover sur mobile */}
              <div
                className="relative flex h-full items-end border-2 border-black bg-cover bg-center transition-transform duration-300 sm:pointer-events-auto sm:group-hover:-translate-x-2 sm:group-hover:-translate-y-2"
                style={{
                  backgroundImage: `url(${item.img})`,
                }}
              >
                {/* Effet de flou et assombrissement uniquement au hover */}
                <div className="absolute inset-0 transition-all duration-300 sm:group-hover:backdrop-blur-md sm:group-hover:bg-black sm:group-hover:bg-opacity-40"></div>

                {/* Texte principal */}
                <div className="flex items-center space-x-2 p-4 w-full bg-[#3B82F6] bg-opacity-65 transition-opacity sm:group-hover:opacity-0 relative z-10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-12 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#FFF"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <h2 className="text-white text-lg font-medium">
                    {item.title}
                  </h2>
                </div>

                {/* Texte détaillé visible au hover */}
                <div className="absolute p-4 text-white opacity-0 transition-opacity sm:group-hover:opacity-100 sm:p-6 lg:p-8 z-10">
                  <h3 className="mt-4 text-xl font-medium sm:text-2xl">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm sm:text-base">
                    {item.description}
                  </p>
                  <p className="mt-8 font-bold">En savoir plus</p>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>

      <div className="pb-7 w-[50%] border-t-2 border-[#3B82F6]" />
    </div>
  );
}

// Exports
export default Wrapper;
