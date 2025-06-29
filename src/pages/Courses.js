import React from 'react';
import { Link } from 'react-router-dom';
import CourseCard from '../components/CourseCard';
import { FaArrowRight } from 'react-icons/fa';

export const sampleCourses = [
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
  {
    id: 4,
    title: "Web Development Bootcamp",
    description: "Master HTML, CSS, JavaScript and modern frameworks.",
    imageUrl: "https://images.unsplash.com/photo-1581090700227-1e8e043c14b4",
    instructor: "Mark Wilson",
    rating: 4.6,
  },
  {
    id: 5,
    title: "Python for Data Science",
    description: "Explore data analysis, visualization and machine learning with Python.",
    imageUrl: "https://images.unsplash.com/photo-1555949963-aa79dcee981d",
    instructor: "Emily Zhang",
    rating: 4.8,
  },
  {
    id: 6,
    title: "Full Stack MERN Developer",
    description: "Build real-world applications using MongoDB, Express, React, and Node.js.",
    imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
    instructor: "Sophie Kim",
    rating: 4.9,
  },
  {
    id: 7,
    title: "UI/UX Design Principles",
    description: "Learn design thinking, prototyping and Figma tools.",
    imageUrl: "https://images.unsplash.com/photo-1612832021146-96e2f9a7369d",
    instructor: "Brian Collins",
    rating: 4.4,
  },
  {
    id: 8,
    title: "Cybersecurity Fundamentals",
    description: "Understand ethical hacking, malware, and network security.",
    imageUrl: "https://images.unsplash.com/photo-1633356128957-a1e74a01e1be",
    instructor: "Sarah Lee",
    rating: 4.6,
  },
  {
    id: 9,
    title: "Android App Development",
    description: "Develop and deploy native Android applications using Kotlin.",
    imageUrl: "https://images.unsplash.com/photo-1551817958-20204fd2c40b",
    instructor: "James Foster",
    rating: 4.5,
  },
  {
    id: 10,
    title: "iOS App Development with Swift",
    description: "Create interactive apps for iPhones and iPads with Swift and Xcode.",
    imageUrl: "https://images.unsplash.com/photo-1523966211575-eb4a01e7ddf6",
    instructor: "Laura Green",
    rating: 4.7,
  },
  {
    id: 11,
    title: "Cloud Computing with AWS",
    description: "Learn EC2, S3, Lambda, and deploy scalable cloud solutions.",
    imageUrl: "https://images.unsplash.com/photo-1581091215367-21f35f3d5c7b",
    instructor: "Michael Brown",
    rating: 4.6,
  },
  {
    id: 12,
    title: "DevOps with Docker & Kubernetes",
    description: "Automate CI/CD workflows and container orchestration.",
    imageUrl: "https://images.unsplash.com/photo-1645297602589-82d1582edc09",
    instructor: "Natalie Jones",
    rating: 4.8,
  },
  {
  id: 13,
  title: "Artificial Intelligence Mastery",
  description: "Delve into neural networks, NLP, and computer vision.",
  imageUrl: "https://images.unsplash.com/photo-1627398242454-82ddba2c14b6",
  instructor: "Dr. Angela Wright",
  rating: 4.9
},
{
  id: 14,
  title: "Blockchain and Web3 Development",
  description: "Learn smart contracts, Ethereum, and decentralized app development.",
  imageUrl: "https://images.unsplash.com/photo-1623050626484-bc23e1c5cb8e",
  instructor: "Ethan Reed",
  rating: 4.6
},
{
  id: 15,
  title: "Game Development with Unity",
  description: "Design and build 2D/3D games using Unity engine and C#.",
  imageUrl: "https://images.unsplash.com/photo-1601132359863-3e2c9621f00c",
  instructor: "Ava Thompson",
  rating: 4.7
}

];


const Courses = () => {
  const limitedCourses = sampleCourses.slice(0, 6);

  return (
    <div className="courses">
      <h1>Our Popular Courses</h1>
      <p>Explore our top picks to kickstart your learning journey.</p>

      <div className="course-list">
        {limitedCourses.map(course => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>

      <div style={{ marginTop: '2rem' }}>
        <Link
          to="/all-courses"
          className="btn-primary"
          style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
        >
          See More Courses <FaArrowRight />
        </Link>
      </div>
    </div>
  );
};

export default Courses;
