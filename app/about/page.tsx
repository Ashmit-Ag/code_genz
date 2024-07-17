import Head from 'next/head';
import Image from "next/image";
const About = () => {
  return (
    <div>
      <Head>
        <title>About Us - Code Beta</title>
        <meta name="description" content="About Us page for Code Beta" />
      </Head>
      <section className="relative h-full w-full ">
      <div className="container absolute w-full gap-8   my-40 mx-auto flex  md:flex-row items-center">
          <div className=" ml-24 md:w-6/12  ">
            <h2 className="text-4xl font-bold mb-6">INTERNSHIP OPPORTUNITY JOB</h2>
            <p className="text-lg mb-6">
            At Code samurai, we are dedicated to nurturing the next generation of tech talent. Our internship programs are designed to provide hands-on experience, real-world challenges, and mentorship from industry professionals. Whether you are a budding developer, designer, or project manager, we have opportunities that will help you grow and excel in your career.</p>
            <a href="#" className="text-blue-600 font-bold">READMORE ...</a>
          </div>
          <div>
          <Image 
              src="/images/grilabout2.png" 
              alt="Illustration of people working" 
              width={460} height={550}
              className="rounded-lg"
            />
          </div>
        </div>
      </section>
    
      </div>
  );
};

export default About;