import React from 'react';
import { useParams } from 'react-router-dom';

const courseData = {
  1: {
    title: 'React for Beginners',
    instructor: 'John Doe',
    imageUrl: 'https://lh7-us.googleusercontent.com/D6BrXu23nOJepuMbM-ZSNza1nfl8qLh1PtaGzyYUebo6llBebhDTSKODso4N6JZsFMXuwxSRga2pIqidn6rPkjHJTNd7opp-5HYY87OOFXqiC0nGCcHHenuytpXoG5u4jHzD4MVPdfgW0QvUijKh5q8',
    videoUrl: 'https://www.youtube.com/embed/dGcsHMXbSOA',
    description: `This beginner-friendly course covers the fundamentals of React.js including JSX, components, props, state, hooks, and more. By the end of this course, you'll be able to build dynamic single-page web applications.`,
    modules: [
      'Introduction to React',
      'JSX and Component Basics',
      'Props and State',
      'Hooks (useState, useEffect)',
      'React Router Basics',
      'Project: Build a Todo App',
    ],
  },
  2: {
    title: 'Advanced JavaScript',
    instructor: 'Jane Smith',
    imageUrl: 'https://miro.medium.com/v2/resize:fit:836/1*dbggYEdKfBg-4SqRqrkFow.png',
    videoUrl: 'https://www.youtube.com/embed/Bv_5Zv5c-Ts',
    description: `Deep dive into JavaScript concepts such as closures, scope, hoisting, asynchronous programming, ES6+ features, and performance optimization.`,
    modules: [
      'Execution Context & Closures',
      'Asynchronous JS (Callbacks, Promises, Async/Await)',
      'ES6+ Features',
      'JavaScript Design Patterns',
      'Working with APIs',
      'Final Project: Weather App',
    ],
  },
  // Add more courses as needed
  3: {
  title: 'UI/UX Design Basics',
  instructor: 'Alex Ray',
  imageUrl: 'https://www.creative-tim.com/blog/content/images/2022/07/UX-design-courses.jpg',
  videoUrl: 'https://www.youtube.com/embed/3gNmTQfKNa8',
  description: `This course introduces you to the foundational principles of UI and UX design. You'll learn how to create visually pleasing and user-friendly digital experiences using design systems, wireframes, and tools like Figma.`,
  modules: [
    'What is UI vs UX?',
    'Color Theory & Typography',
    'Wireframing & Prototyping',
    'Design Systems & Components',
    'Accessibility in Design',
    'Tool Introduction: Figma',
  ],
},

};

const CourseDetail = () => {
  const { id } = useParams();
  const course = courseData[id];

  if (!course) {
    return <p style={{ textAlign: 'center', paddingTop: '2rem' }}>Course not found.</p>;
  }

  return (
    <div className="course-detail">
      <img src={course.imageUrl} alt={course.title} className="course-banner" />

      <div className="course-content">
        <h1>{course.title}</h1>
        <p className="instructor">Instructor: {course.instructor}</p>

        <p className="description">{course.description}</p>

        <h3>Course Modules</h3>
        <ul className="modules">
          {course.modules.map((module, index) => (
            <li key={index}>{module}</li>
          ))}
        </ul>

        <div className="video-wrapper">
          <iframe
            src={course.videoUrl}
            title={course.title}
            allowFullScreen
            frameBorder="0"
          ></iframe>
        </div>

        <button className="enroll-btn">Enroll Now</button>
      </div>
    </div>
  );
};

export default CourseDetail;
