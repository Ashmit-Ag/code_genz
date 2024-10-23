// app/course/page.tsx
import React from "react";
import { courses } from "../../data/courses";
import CourseCard from "@/components/CourseCard";

const Courses: React.FC = () => {
  return (
    <div className="mx-auto p-10 md:w-4/5 w-full">
      <h2 className="text-5xl font-bold text-center mb-10 mt-16">Pick a Internship of yourself</h2>
      <div className="flex flex-wrap justify-center items-center gap-14">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default Courses;