
import Image from "next/image";
const About = () => {
  return (
    <div className="w-full h-full">
      <section className="relative flex flex-col w-full  min-h-screen pt-[100px]  pb-20  md:">
      <div className="w-full h-[30px] text-5xl  flex justify-center items-center color-black-400"> ABOUT US</div>
      <div className=" absolute  gap-24  flex items-center justify-center pt-10 mx-auto  md:flex-row ">
      <div className="">
          <Image 
              src="/images/grilabout2.png" 
              alt="Illustration of people working" 
              width={460} height={550}
              className="rounded-lg"
            />
        </div>
        <div className="w-6/12  h-5/6  ">
            <h2 className="text-4xl   font-bold mb-6">INTERNSHIP OPPORTUNITY JOB</h2>
            <div className="flex flex-col gap-3 text-lg text-wrap ">
              <p>At Bharat Intern, we are passionate about empowering innovations that shape a better future for businesses and individuals alike.</p>
            <p>Connects students with internships: Bharat Intern connects students with internships in a variety of fields. This gives students the opportunity to gain experience, skills, and a network</p>
            <p>Gives students experience, skills, and a network: Internships can give students valuable experience in their field. They can also help students develop new skills and build a network of contacts.</p>
            <p>Is a great way to start your career: Internships can be a great way to start your career. They can help you gain experience, skills, and a network that can help you land your first job</p>
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