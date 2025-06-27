import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';

const CourseCard = ({ course }) => (
  <div className="course-card">
    <img src={course.imageUrl} alt={course.title} className="course-thumbnail" />
    <div className="course-content">
      <h3>{course.title}</h3>
      <p className="course-description">{course.description}</p>
      <div className="course-meta">
        <span className="instructor">👨‍🏫 {course.instructor}</span>
        <span className="rating">
          <FaStar color="#facc15" /> {Number(course.rating || 0).toFixed(1)}
        </span>
      </div>
      <div className="course-footer">
        <Link className="btn-primary" to={`/courses/${course.id}`}>
          View Course
        </Link>
      </div>
    </div>
  </div>
);

export default CourseCard;
