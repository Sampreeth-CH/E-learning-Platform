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
    imageUrl: "https://uploads.teachablecdn.com/attachments/PG7zkdkrT9aByLHBe6sv_Teachable+Thumbnails+%281%29.png",
    instructor: "Mark Wilson",
    rating: 4.6,
  },
  {
    id: 5,
    title: "Python for Data Science",
    description: "Explore data analysis, visualization and machine learning with Python.",
    imageUrl: "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20230318230239/Python-Data-Science-Tutorial.jpg",
    instructor: "Emily Zhang",
    rating: 4.8,
  },
  {
    id: 6,
    title: "Full Stack MERN Developer",
    description: "Build real-world applications using MongoDB, Express, React, and Node.js.",
    imageUrl: "https://media.licdn.com/dms/image/v2/D4D12AQGp_UCp3W82YA/article-cover_image-shrink_720_1280/B4DZXxf.sMHsAI-/0/1743513448088?e=2147483647&v=beta&t=nsToxH_KNK36f6j_xfNqeqM67oQL05VmQHQKZT7ozwQ",
    instructor: "Sophie Kim",
    rating: 4.9,
  },
  {
    id: 7,
    title: "UI/UX Design Principles",
    description: "Learn design thinking, prototyping and Figma tools.",
    imageUrl: "https://lh7-us.googleusercontent.com/TPlo8EH6SlEoIC0hthDUNPsmeHsvur4yw28PZooxTNZ-_N5Bats8SZ-jT8L4ewCy3kHOAHFinxF503NINUMkTbrcCo7pchsLi-zFNc3tQHFd8tNA1vQOkGramTlFwxjbUV1NSs8kwA0tOGPV6mDl2ZdeIF9NTRbC7C1M7P6O4nGLgrwRSpFvxwmFe6kZhg",
    instructor: "Brian Collins",
    rating: 4.4,
  },
  {
    id: 8,
    title: "Cybersecurity Fundamentals",
    description: "Understand ethical hacking, malware, and network security.",
    imageUrl: "https://s3.ap-south-1.amazonaws.com/webasha-blog/uploads/images/202502/image_750x_67a48971bba9d.webp",
    instructor: "Sarah Lee",
    rating: 4.6,
  },
  {
    id: 9,
    title: "Android App Development",
    description: "Develop and deploy native Android applications using Kotlin.",
    imageUrl: "https://www.appschopper.com/blog/wp-content/uploads/2021/01/Android-App-Development.png",
    instructor: "James Foster",
    rating: 4.5,
  },
  {
    id: 10,
    title: "iOS App Development with Swift",
    description: "Create interactive apps for iPhones and iPads with Swift and Xcode.",
    imageUrl: "https://cdn-server-blog.hiddenbrains.com/blog/wp-content/uploads/2020/04/Swift-Development-for-iOS-1.jpg",
    instructor: "Laura Green",
    rating: 4.7,
  },
  {
    id: 11,
    title: "Cloud Computing with AWS",
    description: "Learn EC2, S3, Lambda, and deploy scalable cloud solutions.",
    imageUrl: "https://tech-gyan.in/wp-content/uploads/2021/05/Cloud-Computing-With-AWS-1.jpg",
    instructor: "Michael Brown",
    rating: 4.6,
  },
  {
    id: 12,
    title: "DevOps with Docker & Kubernetes",
    description: "Automate CI/CD workflows and container orchestration.",
    imageUrl: "https://uploads.keitaro.com/uploads/2021/03/Docker_Kubernetes-Blog.png",
    instructor: "Natalie Jones",
    rating: 4.8,
  },
  {
  id: 13,
  title: "Artificial Intelligence Mastery",
  description: "Delve into neural networks, NLP, and computer vision.",
  imageUrl: "https://www.pantechsolutions.net/wp-content/uploads/2021/12/AI-1.png",
  instructor: "Dr. Angela Wright",
  rating: 4.9
},
{
  id: 14,
  title: "Blockchain and Web3 Development",
  description: "Learn smart contracts, Ethereum, and decentralized app development.",
  imageUrl: "https://wpfrank.com/wp-content/uploads/2023/05/Future-Of-Web-Development-Web3-And-Blockchain.jpg",
  instructor: "Ethan Reed",
  rating: 4.6
},
{
  id: 15,
  title: "Game Development with Unity",
  description: "Design and build 2D/3D games using Unity engine and C#.",
  imageUrl: "https://miro.medium.com/v2/resize:fit:1400/1*_JpaGhRE3iBOPAh_N5ycCw.png",
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
