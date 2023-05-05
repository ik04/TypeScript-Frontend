export const Newsletter = () => {
  return (
    <div className="w-full py-16 text-white bg-black">
      <div className="max-w-[1240px] mx-auto lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Want tips to get good?
          </h1>
          <p className="">Sign Up for our Newsletter today!</p>
        </div>
        <div className="my-4">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full">
            <input
              type="email"
              className="p-3 flex w-full  rounded-md test-black "
              placeholder="Enter Your Email"
            />
            <button className="bg-green-500 rounded-md font-medium my-6 mx-auto py-3 text-black w-[200px] ml-4 px-6">
              Notify me
            </button>
          </div>
          <p>
            we care about your (not really), read our{" "}
            <span className="text-green-500">Privacy Policy.</span>
          </p>
        </div>
      </div>
    </div>
  );
};
