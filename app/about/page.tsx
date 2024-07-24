
import Image from "next/image";
const About = () => {
  return (
    <div>
      <section className="relative flex flex-col items-center justify-center p-20 min-h-screen pt-40  pb-20  md:">
      <div className="container absolute w-full gap-48   my-40 mx-auto flex  md:flex-row items-center">
      <div>
          <Image 
              src="/images/grilabout2.png" 
              alt="Illustration of people working" 
              width={460} height={550}
              className="rounded-lg"
            />
          </div>
          <div className=" ml-4 md:w-5/12  ">
            <h2 className="text-4xl   font-bold mb-6">INTERNSHIP OPPORTUNITY JOB</h2>
            <div className="n">
              
            </div>
            {/* <p className="text-lg mb-6"> */}

            {/* At Coding samurai, we are dedicated to nurturing the next generation of tech talent. Our internship programs are designed to provide hands-on experience, real-world challenges, and mentorship from industry professionals. Whether you are a budding developer, designer, or project manager, we have opportunities that will help you grow and excel in your career.</p> */}
            {/* <a href="#" className="text-blue-600 font-bold">READMORE ...</a> */}
          </div>
          
        </div>
      </section>
      </div>
  );
};

export default About;