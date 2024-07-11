// app/course/[id]/page.tsx

import React from 'react';
import { courses } from '../../data/courses';
import styles from './courseDetail.module.css';


const CourseDetail = ({id}:{id:number}) => {
const course = courses[id];

  return (
    <>
    
      <div className={styles.container}>
        <h1>{course.title}</h1>
        {/* <img src={`/images/${course.image}`} alt={course.title} className={styles.image} /> */}
        <p>{course.description}</p>
        <p>{course. longDescription}</p> {/* Additional course details if any */}
        <div>
          <button className={styles.button}>Back to Courses</button>
        </div>
      </div>
    </>
  );
};

export default CourseDetail;
