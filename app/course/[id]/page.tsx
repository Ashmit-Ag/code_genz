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
        <h1>{course.title}</h1>
        {/* <Image src={`images/${course.image}`} alt={course.title} /> */}
        <p>{course.longDescription}</p>
        <div>
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
