
import { useParams } from 'react-router-dom';

const CourseDetail = () => {
  const { id } = useParams();

  return (
    <div className="course-detail">
      <h2>Course ID: {id}</h2>
      <p>Course details will go here (e.g., video, PDFs, etc.)</p>
    </div>
  );
};

export default CourseDetail;
