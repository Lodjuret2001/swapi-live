import fetchLoaderImage from "../assets/images/fetch-loader-image.png";

const FetchLoader = () => {
  return (
    <div className="flex justify-center items-center w-full mb-3">
      <img className="animate-spin mr-2 w-[40px] md:w-[80px] h-[40px] md:h-[80px]" src={fetchLoaderImage} />
      <p className= "text-white text-sm sm:text-2xl md:text-3xl">
        Searching the Galaxy...
      </p>
    </div>
  );
};

export default FetchLoader;
