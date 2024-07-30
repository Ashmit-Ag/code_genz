// data/courses.ts
import Course  from '../interface/Course';

export const courses: Course[] = [
  {
    id: 1,
    title: 'Introduction to Programming',
    description: 'Learn the basics of programming using Python.',
    longDescription:[`This course, "Introduction to Programming" with Python, is designed to provide beginners with a comprehensive foundation in programming using one of the most popular and versatile programming languages, Python. Over the course of six weeks, you will delve into the fundamental concepts of programming, develop problem-solving skills, and gain hands-on experience through practical exercises and projects`,
      `Understand the basic concepts of programming and how they apply to Python.Write simple Python programs using fundamental programming constructs such as variables, loops, and conditionals. Develop problem-solving skills by breaking down complex problems into manageable steps. Learn to use Python libraries and tools to enhance your programming capabilities. Gain confidence in writing, debugging, and testing your own Python code.`,`Complete beginners with no prior programming experience. Students looking to add programming skills to their resume. Professionals seeking to enhance their technical skills for career advancement. Anyone with a curiosity about coding and a desire to learn Python`,
    `Join us on this exciting journey into the world of programming and start building your skills with Python today!`],
    
    duration: '6 weeks',
    image: ['/images/Python-Tutorial1.png','/images/Python-Tutorial1.png']
  },
  {
    id: 2,
    title: 'Web Development Bootcamp',
    description: 'Become a full-stack web developer using HTML, CSS, and JavaScript.',
    longDescription:[`The "Web Development Bootcamp" is an intensive 12-week program designed to transform beginners into full-stack web developers. This course covers everything you need to know to build dynamic, responsive, and user-friendly websites from scratch using HTML, CSS, and JavaScript. By the end of this bootcamp, you'll have the skills and confidence to create professional-quality web applications and start a career in web development.`,`Understand the fundamental concepts of web development and how the web works. Build and style web pages using HTML and CSS. Develop full-stack web applications using front-end and back-end technologies. Create responsive web designs that work on various devices. Gain hands-on experience through practical projects and real-world applications.`,`Complete beginners with no prior web development experience. Students looking to gain practical web development skills. 
      Professionals seeking to switch careers or enhance their technical skills. Anyone with a passion for web development and a desire to build web applications` , `Join us for the Web Development Bootcamp and embark on a transformative journey to become a skilled full-stack web developer!`],
    duration: '12 weeks',
    image: ['/images/webdev.avif','/images/webdev.avif'],
  },
  {
    id: 3,
    title: 'Data Science with Python',
    description: 'Master data analysis and visualization using Python.',
    longDescription:[`The "Data Science with Python" course is an 8-week intensive program designed to equip you with the skills and knowledge required to master data analysis and visualization using Python. This course covers essential topics such as data manipulation, statistical analysis, data visualization, and machine learning basics. By the end of this program, you will be able to analyze complex datasets, generate insightful visualizations, and apply basic machine learning techniques to solve real-world problems.`, `Understand the fundamental concepts of data science and the role of a data scientist.Perform data manipulation and analysis using Python libraries such as Pandas and NumPy.
      Develop practical skills through hands-on projects and exercises.`,`Complete beginners with no prior data science experience. Students looking to gain practical data analysis and visualization skills. Professionals seeking to switch careers or enhance their technical skills. Anyone with a passion for data science and a desire to learn Python for data analysis`,`Join us for the "Data Science with Python" course and start your journey to becoming a proficient data analyst and data scientist!`],
    duration: '8 weeks',
    image: ['/images/DataV.png','/images/DataV.png'],
  },
  {
    id: 4,
    title: 'Java Development Internship',
    description: 'Developing applications and software using the Java programming language.',
    longDescription:[`The "Java Development Internship" is an 8-week intensive program designed to provide hands-on experience in developing applications and software using the Java programming language. This internship is ideal for individuals looking to gain practical skills in Java development, including object-oriented programming, software design principles, and the use of various Java frameworks and tools. By the end of this program, you will have the knowledge and experience to develop robust and efficient Java applications.`,`Understand the core concepts of Java programming and object-oriented design. Work with Java collections, streams, and exception handling. Gain familiarity with Java development tools and environments. Gain experience in version control, debugging, and testing. Develop a final project that demonstrates your skills in Java development.` ,`Students and graduates seeking practical experience in Java development. Professionals looking to enhance their Java programming skills. Anyone with a basic understanding of programming and a desire to learn Java.`,`Join us for the "Java Development Internship" and start your journey to becoming a skilled Java developer!`],
    duration: '8 weeks',
    image: ['/images/Java.jpg','/images/Java.jpg'],
  },
  {
    id: 5,
    title: 'Data Science with Python',
    description: 'Master data analysis and visualization using Python.',
    longDescription: `This comprehensive 8-week course is tailored for individuals who wish to pursue a career in data science. Leveraging the power of Python, you will learn how to analyze and visualize data effectively. The course covers essential libraries such as NumPy, Pandas, Matplotlib, and Seaborn. You will learn how to manipulate data, perform statistical analysis, and create insightful visualizations. Additionally, the course introduces machine learning concepts and techniques using libraries like Scikit-learn. Real-world projects and datasets are used throughout the course to provide practical experience. By the end of the course, you will have a strong understanding of data science principles, be able to derive meaningful insights from data, and be prepared to tackle complex data science challenges in a professional setting.`,
    duration: '8 weeks',
    image: ['/images/webdev.avif'],
  },

];
