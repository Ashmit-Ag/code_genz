import { courses } from "../../../data/courses";
import styles from "./courseDetail.module.css";
import Image from "next/image";

interface CourseDetailProps {
  id: string;
}

const CourseDetail: React.FC<CourseDetailProps> = ({ id }) => {
  const course = courses[+id-1]
  console.log(course)

  if (!course) return <div className={styles.container}>No Course found</div>;
  return (
    <>
      <div className={styles.container}>
        <h1>{course.title}</h1>
        {/* <Image src={`images/${course.image}`} alt={course.title} /> */}
        <p>{course.longDescription}</p>
        <div>
          <button className={styles.button}>Back to Courses</button>
        </div>
      </div>
    </>
  );
};

export default CourseDetail;
