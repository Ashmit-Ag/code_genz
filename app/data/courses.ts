// data/courses.ts
interface Course {
    id: number;
    title: string;
    description: string;
    duration: string;
    image: string;
  }

export const courses: Course[] = [
  {
    id: 1,
    title: 'Introduction to Programming',
    description: 'Learn the basics of programming using Python.',
    duration: '6 weeks',
    image: '/images/webdev.avif',
  },
  {
    id: 2,
    title: 'Web Development Bootcamp',
    description: 'Become a full-stack web developer using HTML, CSS, and JavaScript.',
    duration: '12 weeks',
    image: '/images/webdev.avif',
  },
  {
    id: 3,
    title: 'Data Science with Python',
    description: 'Master data analysis and visualization using Python.',
    duration: '8 weeks',
    image: '/images/webdev.avif',
  },
  {
    id: 4,
    title: 'Java Development Internship',
    description: 'Master data analysis and visualization using Python.',
    duration: '8 weeks',
    image: '/images/webdev.avif',
  },
];
