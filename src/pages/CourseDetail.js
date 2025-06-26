<<<<<<< HEAD
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
=======
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
>>>>>>> 9bcb51952a5168676318fdb5ee41b24878bf7829
