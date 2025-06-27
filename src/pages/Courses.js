import React from 'react';
import CourseCard from '../components/CourseCard';

const sampleCourses = [
  {
    id: 1,
    title: 'React for Beginners',
    description: 'Learn the basics of React, JSX, components, and hooks in a hands-on way.',
    imageUrl: 'https://lh7-us.googleusercontent.com/D6BrXu23nOJepuMbM-ZSNza1nfl8qLh1PtaGzyYUebo6llBebhDTSKODso4N6JZsFMXuwxSRga2pIqidn6rPkjHJTNd7opp-5HYY87OOFXqiC0nGCcHHenuytpXoG5u4jHzD4MVPdfgW0QvUijKh5q8',
    instructor: 'John Doe',
    rating: 4.5,
  },
  {
    id: 2,
    title: 'Advanced JavaScript',
    description: 'Master closures, async/await, ES6+ features, and performance tips.',
    imageUrl: 'https://miro.medium.com/v2/resize:fit:836/1*dbggYEdKfBg-4SqRqrkFow.png',
    instructor: 'Jane Smith',
    rating: 4.7,
  },
  {
    id: 3,
    title: 'UI/UX Design Basics',
    description: 'Understand color theory, layout design, wireframing and prototyping.',
    imageUrl: 'https://www.creative-tim.com/blog/content/images/2022/07/UX-design-courses.jpg',
    instructor: 'Alex Ray',
    rating: 4.3,
  },
];

const Courses = () => {
  return (
    <section className="courses">
      <h1>Our Courses</h1>
      <p>Explore high-quality learning materials to enhance your skills and career growth.</p>

      <div className="course-list">
        {sampleCourses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </section>
  );
};

export default Courses;

