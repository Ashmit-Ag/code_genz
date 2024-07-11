
import Link from 'next/link';

interface Course {
  id: number;
  title: string;
  description: string;
  duration: string;
  image: string;
}

import styles from './CourseCard.module.css';
import Image from 'next/image';

interface CourseCardProps {
  course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
 

  return (
    <>
      <div className={styles.card}>
        <Image src={course.image} alt={course.title} className={styles.image} width={300} height={200} />
        <div className={styles.content}>
          <h2>{course.title}</h2>
          <p>{course.description}</p>
          <p><strong>Duration:</strong> {course.duration}</p>
          <div className={styles.buttons}>
            {/* <button className={styles.button} onClick={() => router.push(`/course/${course.id}`)}>Learn More</button> */}
            <button  className={styles.button} >
            <Link href={`/course/${course.id}`}>
          Learn More
        </Link>
            </button>
            <button className={styles.button}>Enroll Now</button>
          </div>
        </div>
      </div>
    
    </>
  );
};

export default CourseCard;
