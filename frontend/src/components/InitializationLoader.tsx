import loadingIcon from "../assets/images/loading-icon.png";

const InitializationLoader = () => {
  return (
    <div className="flex flex-col items-center">
      <img className="animate-spin w-2/5" src={loadingIcon} />
      <p className="mt-20 text-white text-2xl">Initializing universe...</p>
    </div>
  );
};

export default InitializationLoader;
