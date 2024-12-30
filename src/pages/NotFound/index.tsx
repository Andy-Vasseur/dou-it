import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center">
      <span className="mt-12 block">
        <img src="/img/notfound.png" alt="Not Found" className="mx-auto w-96" />
      </span>
      <h1 className="my-4 text-4xl text-gray-800 font-bold">404</h1>
      <p className="mb-4 text-lg text-gray-600">
        La page que vous cherchez n'existe pas.
      </p>
      <Link to="/" className="text-[#3b82f6] hover:underline">
        Retour à l'accueil
      </Link>
    </div>
  );
}

// Exports
export default NotFound;
