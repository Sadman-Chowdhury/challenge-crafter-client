import banner from "../../../assets/Images/banner.jpg";

const Banner = () => {
  return (
    <div className="relative bg-cover bg-center h-80 md:h-96 lg:h-screen flex items-center justify-center">
      <img
        className="absolute w-full h-full object-cover object-center opacity-90"
        src={banner}
        alt="Banner"
      />

      <div className="absolute bg-slate-900 bg-opacity-60 w-full h-full rounded-md flex flex-col items-center justify-center">
        <div className="text-center lg:px-44">
          <h2 className="text-2xl lg:text-5xl mt-12 font-bold mb-4 text-white">
            Welcome to Challenge Crafter
          </h2>
          <p className="text-base sm:text-lg px-2 md:text-xl lg:text-xl text-white">
            The ultimate platform where innovation meets recognition!
          </p>
        </div>
        <div className="mt-6">
          <input
            type="text"
            placeholder="Search your contest tag"
            className="lg:w-[320px] h-8 rounded-sm px-1 lg:px-2"
          />
          <span className="border-2 rounded-sm px-4 py-1 bg-white font-bold hover:bg-slate-400 hover:text-white">
            <button>Search</button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
