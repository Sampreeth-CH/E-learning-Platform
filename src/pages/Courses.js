<<<<<<< HEAD
import CourseCard from '../components/CourseCard';

const dummyCourses = [
  { id: 1, title: "React Basics", description: "Learn fundamentals of React." },
  { id: 2, title: "HTML & CSS", description: "Master web layout and styles." },
  { id: 3, title: "Java Script", description: "Master Java Script." },
  { id: 4, title: "Python", description: "Master Python development." },
  { id: 5, title: "Java", description: "Master Java development." },
  { id: 6, title: "C programming", description: "Master in C programming." }
];

const Courses = () => (
  <div className="courses">
    <h2>Available Courses</h2>
    <div className="course-list">
      {dummyCourses.map(course => <CourseCard key={course.id} course={course} />)}
    </div>
  </div>
);

export default Courses;
=======
import CourseCard from '../components/CourseCard';

const dummyCourses = [
  { id: 1, title: "React Basics", description: "Learn fundamentals of React." },
  { id: 2, title: "HTML & CSS", description: "Master web layout and styles." },
  { id: 3, title: "Java Script", description: "Master Java Script." },
  { id: 4, title: "Python", description: "Master Python development." },
  { id: 5, title: "Java", description: "Master Java development." },
  { id: 6, title: "C programming", description: "Master in C programming." }
];

const Courses = () => (
  <div className="courses">
    <h2>Available Courses</h2>
    <div className="course-list">
      {dummyCourses.map(course => <CourseCard key={course.id} course={course} />)}
    </div>
  </div>
);

export default Courses;
>>>>>>> 9bcb51952a5168676318fdb5ee41b24878bf7829
