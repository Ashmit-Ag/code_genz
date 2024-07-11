// app/course/[id]/page.tsx
import { useRouter } from 'next/router';
import React from 'react';
import { courses } from '../../data/courses';
import styles from './courseDetail.module.css';
import Navbar from '../../components/Navbar';

const CourseDetail: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  const course = courses.find(course => course.id.toString() === id);

  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <h1>{course.title}</h1>
        <img src={`/images/${course.image}`} alt={course.title} className={styles.image} />
        <p>{course.description}</p>
        <p>{course.details}</p> {/* Additional course details if any */}
        <div>
          <button className={styles.button} onClick={() => router.push('/course')}>Back to Courses</button>
        </div>
      </div>
    </>
  );
};

export default CourseDetail;
