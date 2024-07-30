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
        <h1 className="text-3xl p-8">{course.title}</h1>
       
        <p className="text-xl ">{course.longDescription}</p>
        <div className="mt-8">
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
