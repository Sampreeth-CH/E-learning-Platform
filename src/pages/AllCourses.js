import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CourseCard from '../components/CourseCard';
import { sampleCourses } from './Courses';
import { FaArrowLeft } from 'react-icons/fa';

const AllCourses = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCourses = sampleCourses.filter(course =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

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

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for a course..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="course-list">
        {filteredCourses.length > 0 ? (
          filteredCourses.map(course => (
            <CourseCard key={course.id} course={course} />
          ))
        ) : (
          <p style={{ marginTop: '2rem', color: '#888' }}>No courses found.</p>
        )}
      </div>


      <div style={{ marginTop: '2rem' }}>
        <Link
          to="/courses"
          className="btn-primary"
          style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
        >
          <FaArrowLeft /> Back to Popular Courses
        </Link>
      </div>
    </div>
  );
};

export default AllCourses;
