import Link from "next/link";
import Course from "../interface/Course";
import Image from "next/image";

interface CourseCardProps {
  course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  return (
    <div className="bg-white self-start shadow-lg rounded-lg overflow-hidden w-[400px] min-h-[350px] text-left">
      <Image
        src={course.image}
        alt={course.title}
        className="w-full h-48 object-cover"
        width={300}
        height={200}
      />
      <div className="p-4 min-h-[192px] flex flex-col justify-between">
        <div>
          <h3 className="text-lg text-center font-bold mb-2">
            {course.title}
          </h3>
          <p className="text-gray-700 text-sm mb-4">{course.description}</p>
        </div>
        <div>
          <p className="text-gray-800 mb-4">
            <strong>Duration:</strong> {course.duration}
          </p>
          <div className="flex xsm:flex-row flex-col items-center xsm:justify-between mb-0 gap-5">
            <Link href={`/course/${course.id}`} passHref>
              <span className="bg-white text-black py-2 px-4  rounded border-black border-2 hover:bg-black hover:text-white transition duration-300">
                Learn More
              </span>
            </Link>
            <Link href={`/course/${course.id}/enroll`} passHref>
              <span className="bg-black text-white py-2 px-7  rounded border-black border-2 hover:bg-gray-800 transition duration-300">
                Enroll
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
