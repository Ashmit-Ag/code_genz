import Image from "next/image";
// import favicon from '@/app/girlabout.png';
 // Add your curved image here

const Hero = () => {
  return (
    <section className="relative flex flex-col items-center justify-center p-10 mx-20 min-h-screen pt-40 pb-20">
      <div className="flex flex-col md:flex-row items-center justify-between w-full">
        <div className="text-center md:text-left">
          <h1 className="text-4xl font-bold sm:text-6xl md:text-7xl mb-14">
            Welcome to <br /> coding samurai
          </h1>
          <p className="text-balance mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore doloremque eum ipsa vitae excepturi, quod eius itaque ullam fugiat sed rerum molestiae illum exercitationem veniam explicabo, praesentium officiis optio error.
          </p>
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition">
            Get Started
          </button>
        </div>
        <div className="mt-10 md:mt-0">
          <Image src="/images/girlabout.png" alt="Favicon" className="hidden md:block" width={1050} height={750} />
        </div>
      </div>
      
      {/* Why Join Section */}
      <div className="mt-20 w-full bg-gradient-to-r  from-purple-400 via-pink-500 to-red-500 p-10 rounded-lg text-center text-white shadow-lg z-0">
        <h2 className="text-3xl font-bold mb-6">Why Join the Course?</h2>
        <p className="mb-6">
          Our course offers a unique blend of hands-on experience and theoretical knowledge. You'll gain the skills needed to excel in the tech industry.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          <div className="bg-white text-black p-6 rounded-lg shadow-lg w-64">
            <h3 className="text-xl font-semibold mb-2">Expert Instructors</h3>
            <p>Learn from industry experts with years of experience.</p>
          </div>
          <div className="bg-white text-black p-6 rounded-lg shadow-lg w-64">
            <h3 className="text-xl font-semibold mb-2">Hands-On Projects</h3>
            <p>Work on real-world projects to build your portfolio.</p>
          </div>
          <div className="bg-white text-black p-6 rounded-lg shadow-lg w-64">
            <h3 className="text-xl font-semibold mb-2">Career Support</h3>
            <p>Get help with job placements and career advice.</p>
          </div>
        </div>
      </div>

      {/* Floating Designs */}
      {/* <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-400 rounded-full animate-float z-0" /> */}
      {/* <div className="absolute bottom-10 right-10 w-20 h-20 bg-green-400 rounded-full animate-float z-0" /> */}
      
      {/* Curved Image */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden z-0">
        <Image src="/images/laptop.png" alt="Curved Design" width={200} height={300} />
      </div>
    </section>
  );
};

export default Hero;

// Add this to your CSS or Tailwind config

