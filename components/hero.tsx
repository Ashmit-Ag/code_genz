import Image from "next/image";
import Link from "next/link";
// import favicon from '@/app/girlabout.png';
 // Add your curved image here

const Hero = () => {
  return (
    <section className="relative flex flex-col items-center justify-center p-20 min-h-screen pt-40  pb-20  md:">
      <div className="flex flex-col pl-16 pr-16 md:flex-row items-center justify-between w-full h-[70vh]">
        <div className="text-center md:text-left">
          <h1 className="text-4xl font-bold sm:text-6xl md:text-5xl mb-14">
            Welcome to <br /> coding samurai
          </h1>
          <p className="text-balance mb-8">
          Our goal is to empower the next generation of tech leaders. Our internship program offers hands-on experience in different fields.</p>
        <Link href="/course">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition">
            Get Started
          </button>
        </Link>
        </div>
        <div className="mt-10 md:mt-0 mt-">
          <Image src="/images/firsrting.png" alt="Favicon" className="hidden md:block" width={650} height={700} />
        </div>
      </div>
      {/* <div className="absolute mt-96 left-0 w-full overflow-hidden z-10 md: none">
        <Image src="/images/laptop.png" alt="Curved Design" width={200} height={300} />
      </div> */}
      {/* Why Join Section */}
      {/* bg-gradient-to-r from-purple-600 via-pink-600 to-red-500 */}
      <div className="mt-20 w-[80vw]  bg-gradient-to-r from-purple-600 via-pink-600 to-red-500  p-20 rounded-lg text-center text-white shadow-lg z-0">
        <h2 className="text-3xl font-bold mb-6">Why Join the Course?</h2>
        <p className="mb-6">
          Our course offers a unique blend of hands-on experience and theoretical knowledge. You'll gain the skills needed to excel in the tech industry.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          <div className="bg-white text-black p-6 rounded-lg shadow-lg w-64 hover:scale-105 duration-500 ">
            <h3 className="text-xl font-semibold mb-2  hover:scale-105 duration-500 ">Expert Instructors</h3>
            <p className="  hover:scale-105 duration-500 ">Learn from industry experts with years of experience.</p>
          </div>
          <div className="bg-white text-black p-6 rounded-lg shadow-lg w-64 hover:scale-105 duration-500">
            <h3 className="text-xl font-semibold mb-2 hover:scale-105 duration-500">Hands-On Projects</h3>
            <p  className="  hover:scale-105 duration-500 ">Work on real-world projects to build your portfolio.</p>
          </div>
          <div className="bg-white text-black p-6 rounded-lg shadow-lg w-64 hover:scale-105 duration-500">
            <h3 className="text-xl font-semibold mb-2 hover:scale-105 duration-500">Career Support</h3>
            <p  className="  hover:scale-105 duration-500 ">Get help with job placements and career advice.</p>
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
          <h1 className="text-2xl font-semibold  ">Our Flourishing Online Community</h1>
          <h5 className="w-7/12 font-thin-400 text-wrap text-center ">Join a network of like-minded individuals, unlock new possibilities, and experience growth on your journey to success.</h5>
        </div>
        <div className="mt-20 w-full flex flex-wrap justify-center gap-6">
        {[
          { label: "REGISTRATIONS", value: "129.1K", color: "bg-green-100" },
          { label: "PARTICIPANTS", value: "117.4K", color: "bg-pink-100" },
          { label: "SATISFACTION RATE", value: "99.96%", color: "bg-purple-100" },
          { label: "COUNTRIES", value: "16+", color: "bg-yellow-100" }
        ].map((box, index) => (
          <div key={index} className={`p-6 rounded-lg shadow-lg w-64 text-center ${box.color} animate-fade-in`}>
            <p className="text-4xl font-bold mb-2">{box.value}</p>
            <p className="text-lg font-medium">{box.label}</p>
          </div>
        ))}
      </div>
      </div>

      <div className="mt-20 justify-center flex items-center flex-col w-full gap-12">
  <div className="justify-center flex items-center flex-col gap-5">
    <h1 className="text-2xl font-semibold text-wrap text-center">Our Features</h1>
    <h5 className="w-7/12 font-thin-400 text-wrap text-center">These are just some of the our features. By providing these features, We can make a valuable resource for students looking for internships.</h5>
  </div>
{/* flex-wrap */}

  <div className="flex flex-wrap justify-center gap-12"> 
    <div className="bg-white text-black p-6 rounded-lg shadow-lg gap-5 flex   w-96 h-32 hover:scale-110 ease-in-out duration-700 ">
    <div className=" flex justify-center items-center mb-4 ">
        <Image src="/images/mail.png" alt="gfg" width={100} height={0}/>
    </div>
      <div className="gap-2 flex flex-col">
      <h2 className="text-lg cursor-pointer w-[180px] hover:text-green-400 duration-500">Email Notifications</h2>
      <h5 className="text-xs">The email notifications about important events, such as upcoming deadlines, new assignments, and changes to your schedule.</h5>
      </div>
    </div>

    <div className="bg-white text-black p-6 rounded-lg shadow-lg  flex gap-5 w-96  h-32  hover:scale-110 ease-in-out duration-700 ">
    <div className=" flex justify-center items-center mb-4 ">
        <Image src="/images/interface.png" alt="gfg" width={80} height={0}/>
      </div>
      <div className="gap-2 flex flex-col">
      <h2 className="text-lg cursor-pointer w-[180px] hover:text-green-400 duration-500">Simple Interface</h2>
      <h5 className="text-xs ">The simplicity of the text-lgnterface makes it easy to use and navigate. The information is presented in a clear and concise way.</h5>
    
      </div>
      </div>

    <div className="bg-white text-black p-6 rounded-lg shadow-lg   gap-5 flex  w-96  h-32 hover:scale-110 ease-in-out duration-700 ">
       <div className=" flex justify-center items-center mb-4 ">
        <Image src="/images/box3.png" alt="gfg" width={70} height={40}/>
      </div>
      <div className="gap-2 flex flex-col">
      <h2 className="text-lg cursor-pointer w-[180px] hover:text-green-400 duration-500 ">Large Community</h2>
      <h5 className="text-xs">We believe in networking to connect with other interns who are interested in the same things.</h5>
    </div>
      </div>

    <div className="bg-white text-black p-6 rounded-lg  gap-5 flex   shadow-xl w-96  h-32  hover:scale-110 ease-in-out duration-700 ">
    <div className=" flex justify-center items-center mb-4 ">
        <Image src="/images/box4.png" alt="gfg" width={100} height={0}/>
      </div>
     <div className="gap-2 flex flex-col">
     <h2 className="text-lg cursor-pointer w-[180px] hover:text-green-400 duration-500" >Deadline Reminders</h2>
      <h5 className="text-xs">The reminders are sent to you in advance in our telegram channel and your email, so you have plenty of time to get your tasks done.</h5>
    </div>
      </div>
  </div>
</div>

  
    </section>
  );
};

export default Hero;

// Add this to your CSS or Tailwind config

