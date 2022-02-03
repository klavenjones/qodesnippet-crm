export const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen border col-span-full">
      <div className="relative w-16 h-16 mx-auto my-16 ">
        <div className="absolute top-0 left-0 w-full h-full bg-green-300 rounded-full animate-ping opacity-60"></div>
        <div className="absolute top-0 left-0 w-full h-full duration-100 bg-green-300 rounded-full animate-ping animation-delay-150 opacity-60"></div>
      </div>
    </div>
  );
};
