import Image from "next/image";
import Link from "next/link";
// import favicon from '@/app/girlabout.png';
 // Add your curved image here

const Hero = () => {
  return (
    <section className="relative flex flex-col items-center justify-center lg:p-16 lg:pb-6 10 min-h-[8vh] pt-40">
      <div className="flex flex-col pl-16 pr-16 pt-12 md:flex-row items-center justify-between w-full h-[70vh]">
        <div className="text-center md:text-left">
          <h1 className="text-4xl xsm:5xl sm:text-6xl lg:text-7xl font-bold mb-14">
            Welcome to <br /> coding samurai
          </h1>
          <p className="text-balance mb-8">
          Our goal is to empower the next generation of tech leaders. Our internship program offers hands-on experience in different fields.</p>
        <Link href="/course">
          <button className="px-6 py-3 mt-5 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition">
            Get Started
          </button>
        </Link>
        </div>
        <div className="mt-10 md:mt-0">
          <Image src="/images/firsrting.png" alt="Favicon" className="hidden lg:block" width={650} height={700} />
        </div>
      </div>
      {/* <div className="absolute mt-96 left-0 w-full overflow-hidden z-10 md: none">
        <Image src="/images/laptop.png" alt="Curved Design" width={200} height={300} />
      </div> */}
      {/* Why Join Section */}
     

      

  
    </section>
  );
};

export default Hero;

// Add this to your CSS or Tailwind config

