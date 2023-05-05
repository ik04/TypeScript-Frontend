import ReactTyped from "react-typed";

export const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-green-500 font-bold p-2">
          GROWING WITH DATA ANALYTICS
        </p>
        <h1 className="md:text-7xl sm:text-4xl font-bold md:py-6">
          Grow with data.
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
            Fast, flexible financing for{" "}
          </p>

          <ReactTyped
            className="md:text-5xl sm:text-4xl text-xl md:pl-4 pl-2"
            strings={["BTB", "BTC", "SASS"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-500">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat,
          error ex cumque ducimus fuga temporibus?
        </p>
        <button className="bg-green-500 rounded-md font-medium my-6 mx-auto py-3 text-black w-[200px]">
          Get started
        </button>
      </div>
    </div>
  );
};
