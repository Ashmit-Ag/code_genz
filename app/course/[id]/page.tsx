import Link from "next/link";
import { courses } from "../../../data/courses";
import styles from "./courseDetail.module.css";
import Image from "next/image";


const CourseDetail = ({ params }:{params: {id:number}}) => {
  const course = courses[params.id-1];

  if (!course) return <div className={styles.container}>No Course found</div>;
  return (
    <>
      <div className={styles.container}> 
      <Image
        src={course.image[1]}
        alt={course.title}
        className="w-full h-48   object-cover mt-20"
        width={300}
        height={200}
      />
      <div className="p-10 gap-6 flex flex-col">
      <h1 className="text-4xl">{course.title}</h1>
       <p className="text-lg ">{course.longDescription[0]}</p>
       <p className="text-lg ">{course.longDescription[1]}</p>
       <h2 className="text-2xl">Who Should Enroll?</h2>
       <p className="text-lg ">{course.longDescription[2]}</p>
       <p className="text-lg ">{course.longDescription[3]}</p>
       
      </div>
       
        <div className="p-4">
          <Link href={`/course/${course.id}/enroll`} passHref>
              <span className="bg-green-500 text-white py-2 px-7  rounded hover:bg-green-600 transition duration-300">
                Enroll
              </span>
            </Link>
        </div>
      </div>
    </>
  );
};

export default CourseDetail;
