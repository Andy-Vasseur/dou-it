// Assets
import Service from "/img/repair.png";

function Services() {
  return (
    <div className="flex flex-col h-44 md:h-96">
      {/* HEADER */}
      <div className="relative flex-1 flex items-center justify-center">
        <div className="absolute top-0 left-0 w-full h-full">
          <img
            src={Service}
            alt="Service"
            className="w-full h-full object-cover blur-[2px]"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-55" />
        </div>
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-white p-4">
          <h1 className="text-4xl md:text-8xl font-bold mb-2">Mes Services</h1>
          {/* separator */}
          <span className="mb-4 w-24 h-1 bg-mainBlue" />
          <p className="text-md md:text-xl text-center max-w-2xl">
            Découvrez une large gamme de services adaptés à vos besoins.
          </p>
        </div>
      </div>
      {/* CONTENT */}
    </div>
  );
}

// Exports
export default Services;
