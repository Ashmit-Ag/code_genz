import Image from "next/image";
import React from "react";

const end = () => {
  return (
    <section className="flex flex-col items-center p-2 sm:p-10">
      <div className="mt-20 justify-center flex items-center flex-col w-full gap-12">
        <div className="justify-center flex items-center flex-col gap-5">
          <h1 className="text-3xl xsm:text-4xl font-semibold text-center">
            Our Features
          </h1>
          <h5 className="w-7/12 mt-5 font-thin-400 text-wrap text-center">
            These are just some of the our features. By providing these
            features, We can make a valuable resource for students looking for
            internships.
          </h5>
        </div>
        {/* flex-wrap */}

        <div className="flex flex-wrap justify-center gap-12">
          <div className="bg-white text-black p-6 rounded-lg shadow-lg gap-5 flex w-[80%] sm:w-96 h-32 hover:scale-110 ease-in-out duration-700 ">
            <div className=" flex justify-center items-center mb-4 ">
              <Image src="/images/mail.png" alt="gfg" width={100} height={0} />
            </div>
            <div className="gap-2 flex flex-col">
              <h2 className="text-lg cursor-pointer w-[180px] hover:text-green-400 duration-500">
                Email Notifications
              </h2>
              <h5 className="text-xs">
                The email notifications about important events, such as upcoming
                deadlines, new assignments, and changes to your schedule.
              </h5>
            </div>
          </div>

          <div className="bg-white text-black p-6 rounded-lg shadow-lg  flex gap-5 w-[80%] sm:w-96 lg:w-65 h-32  hover:scale-110 ease-in-out duration-700 ">
            <div className=" flex justify-center items-center mb-4 ">
              <Image
                src="/images/interface.png"
                alt="gfg"
                width={80}
                height={0}
                />
            </div>
            <div className="gap-2 flex flex-col">
              <h2 className="text-lg cursor-pointer w-[180px] hover:text-green-400 duration-500">
                Simple Interface
              </h2>
              <h5 className="text-xs ">
                The simplicity of the text-lgnterface makes it easy to use and
                navigate. The information is presented in a clear and concise
                way.
              </h5>
            </div>
          </div>

          <div className="bg-white text-black p-6 rounded-lg shadow-lg   gap-5 flex  w-[80%] sm:w-96  h-32 hover:scale-110 ease-in-out duration-700 ">
            <div className=" flex justify-center items-center mb-4 ">
              <Image src="/images/box3.png" alt="gfg" width={70} height={40} />
            </div>
            <div className="gap-2 flex flex-col">
              <h2 className="text-lg cursor-pointer w-[180px] hover:text-green-400 duration-500 ">
                Large Community
              </h2>
              <h5 className="text-xs">
                We believe in networking to connect with other interns who are
                interested in the same things.
              </h5>
            </div>
          </div>

          <div className="bg-white text-black p-6 rounded-lg  gap-5 flex   shadow-xl w-[80%] sm:w-96  h-32  hover:scale-110 ease-in-out duration-700 ">
            <div className=" flex justify-center items-center mb-4 ">
              <Image src="/images/box4.png" alt="gfg" width={100} height={0} />
            </div>
            <div className="gap-2 flex flex-col">
              <h2 className="text-lg cursor-pointer w-[180px] hover:text-green-400 duration-500">
                Deadline Reminders
              </h2>
              <h5 className="text-xs">
                The reminders are sent to you in advance in our telegram channel
                and your email, so you have plenty of time to get your tasks
                done.
              </h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default end;
