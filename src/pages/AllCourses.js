import React from 'react';
import { Link } from 'react-router-dom';
import CourseCard from '../components/CourseCard';
import { sampleCourses } from './Courses';
import { FaArrowLeft } from 'react-icons/fa'; // ✅ Import left arrow icon

const AllCourses = () => {
  return (
    <div className="courses">
        <div style={{ marginBottom: '2rem', textAlign: 'left' }}>
        <Link
          to="/courses"
          className="btn-primary"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.5rem 1rem',
            borderRadius: '8px',
            fontWeight: 600,
            textDecoration: 'none'
          }}
        >
          <FaArrowLeft /> Back to Popular Courses
        </Link>
      </div>
      <h1>All Available Courses</h1>
      <p>Explore our full catalog of expert-led online courses.</p>

      <div className="course-list">
        {sampleCourses.map(course => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>

      <div style={{ marginTop: '2rem' }}>
        <Link to="/courses" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
          <FaArrowLeft /> Back to Popular Courses
        </Link>
      </div>
    </div>
  );
};

export default AllCourses;
