import { courses } from "@/data/courses"
import Image from "next/image";

const page = ({params}:{params:{id:number}}) => {

  const course = courses[params.id]

  return (
    <div className="flex flex-col h-screen justify-center items-center">
     
      <h1 className="text-4xl">{course.title}</h1>
      <p className="mt-10">You are enrolled to the {course.title}</p>
    </div>
  )
}

export default page
