// app/course/page.tsx
import React from "react";
import { courses } from "../../data/courses";
import CourseCard from "@/components/CourseCard";
import styles from "./page.module.css";

const Courses: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1>Our Courses</h1>
      <div className={styles.grid}>
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default Courses;
