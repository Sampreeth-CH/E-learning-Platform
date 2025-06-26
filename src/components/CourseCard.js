<<<<<<< HEAD
import { Link } from 'react-router-dom';

const CourseCard = ({ course }) => (
  <div className="course-card">
    <h3>{course.title}</h3>
    <p>{course.description}</p>
    <Link to={`/courses/${course.id}`}>View Course</Link>
  </div>
);

export default CourseCard;
=======
import { Link } from 'react-router-dom';

const CourseCard = ({ course }) => (
  <div className="course-card">
    <h3>{course.title}</h3>
    <p>{course.description}</p>
    <Link to={`/courses/${course.id}`}>View Course</Link>
  </div>
);

export default CourseCard;
>>>>>>> 9bcb51952a5168676318fdb5ee41b24878bf7829
