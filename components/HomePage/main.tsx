import React from "react";

const main = () => {
  return (
    <main className="flex flex-col items-center p-2">
      <div className="mt-6 lg:mt-28 w-[90vw] sm:w-[80vw] bg-gradient-to-r from-purple-500 via-pink-600 to-red-500 pt-16 p-10 rounded-lg text-center text-white shadow-lg z-0">
        <h2 className="text-3xl font-bold mb-6">Why Join the Course?</h2>
        <p className="mb-6">
          Our course offers a unique blend of hands-on experience and
          theoretical knowledge. You'll gain the skills needed to excel in the
          tech industry.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          <div className="bg-white text-black p-6 rounded-lg shadow-lg w-64 hover:scale-105 duration-500 ">
            <h3 className="text-xl font-semibold mb-2  hover:scale-105 duration-500 ">
              Expert Instructors
            </h3>
            <p className="  hover:scale-105 duration-500 ">
              Learn from industry experts with years of experience.
            </p>
          </div>
          <div className="bg-white text-black p-6 rounded-lg shadow-lg w-64 hover:scale-105 duration-500">
            <h3 className="text-xl font-semibold mb-2 hover:scale-105 duration-500">
              Hands-On Projects
            </h3>
            <p className="  hover:scale-105 duration-500 ">
              Work on real-world projects to build your portfolio.
            </p>
          </div>
          <div className="bg-white text-black p-6 rounded-lg shadow-lg w-64 hover:scale-105 duration-500">
            <h3 className="text-xl font-semibold mb-2 hover:scale-105 duration-500">
              Career Support
            </h3>
            <p className="  hover:scale-105 duration-500 ">
              Get help with job placements and career advice.
            </p>
          </div>
        </div>
      </div>
      {/* Curved Image */}
      {/* Floating Designs */}
      {/* <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-400 rounded-full animate-float z-0" /> */}
      {/* <div className="absolute bottom-10 right-10 w-20 h-20 bg-green-400 rounded-full animate-float z-0" /> */}
      {/* Dynamic Boxes */}
      <div className="mt-20 justify-center flex items-center flex-col w-full">
        <div className="justify-center flex items-center flex-col gap-5">
          <h2 className="text-3xl xsm:text-4xl font-semibold text-center">
            Our Flourishing Online Community
          </h2>
          <h5 className="w-7/12 font-thin-400 text-wrap text-center mt-5">
            Join a network of like-minded individuals, unlock new possibilities,
            and experience growth on your journey to success.
          </h5>
        </div>
        <div className="mt-20 w-full flex flex-wrap justify-center gap-6">
          {[
            { label: "REGISTRATIONS", value: "129.1K", color: "bg-green-100" },
            { label: "PARTICIPANTS", value: "117.4K", color: "bg-pink-100" },
            {
              label: "SATISFACTION RATE",
              value: "99.96%",
              color: "bg-purple-100",
            },
            { label: "COUNTRIES", value: "16+", color: "bg-yellow-100" },
          ].map((box, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg shadow-lg w-64 text-center ${box.color} animate-fade-in`}
            >
              <p className="text-4xl font-bold mb-2">{box.value}</p>
              <p className="text-lg font-medium">{box.label}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default main;
