export const Analytics = () => {
  return (
    <div className="w-full bg-white py-18 px-14">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img src="/laptop.jpg" alt="" className="w-[500px] mx-auto my-4" />

        <div className="flex flex-col justify-center">
          <p className="text-green-500 font-bold">DATA ANALYTICS DASHBOARD</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Manage Data Analytics Centrally
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
            asperiores harum exercitationem consectetur vel voluptate, natus
            provident cum quaerat quia a dolore quibusdam consequuntur
            cupiditate corrupti alias blanditiis rerum repellendus.
          </p>
          <button className="text-green-500 bg-black rounded-md font-medium my-6 mx-auto py-3 md:mx-0 w-[200px]">
            Get started
          </button>
        </div>
      </div>
    </div>
  );
};
