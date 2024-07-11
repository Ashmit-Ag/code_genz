
import React from 'react';
import { courses } from '../../data/courses';
import styles from './courseDetail.module.css';
import Image from 'next/image';


const CourseDetail = ({id}:{id:number}) => {
const course = courses[id];

  return (
    <>
    
      <div className={styles.container}>
        <h1>{course.title}</h1>
        <Image src={`images/${course.image}`} alt={course.title} />
        <p>{course.description}</p>
        <div>
          <button className={styles.button}>Back to Courses</button>
        </div>
      </div>
    </>
  );
};

export default CourseDetail;
