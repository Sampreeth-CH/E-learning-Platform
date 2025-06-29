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
  4: {
    title: "Web Development Bootcamp",
    instructor: "Emily Johnson",
    imageUrl: "https://images.unsplash.com/photo-1581090700227-1e8e043c14b4",
    videoUrl: "https://www.youtube.com/embed/Q33KBiDriJY",
    description: `Become a full-stack web developer by learning HTML, CSS, JavaScript, and backend basics. Build responsive and dynamic websites from scratch.`,
    modules: [
      'HTML & Semantic Structure',
      'CSS Grid & Flexbox',
      'JavaScript Fundamentals',
      'Responsive Design',
      'Project: Personal Portfolio Website',
    ],
  },

  5: {
    title: "Python for Data Science",
    instructor: "Sophie Williams",
    imageUrl: "https://images.unsplash.com/photo-1555949963-aa79dcee981d",
    videoUrl: "https://www.youtube.com/embed/rfscVS0vtbw",
    description: `Master Python and its libraries like Pandas, NumPy, and Matplotlib for data analysis and visualization. Includes beginner machine learning. `,
    modules: [
      'Python Basics & Data Types',
      'Data Cleaning with Pandas',
      'Exploratory Data Analysis',
      'Data Visualization with Matplotlib',
      'Project: Analyze COVID-19 Data',
    ],
  },

  6: {
    title: "Full Stack MERN Developer",
    instructor: "Michael Brown",
    imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
    videoUrl: "https://www.youtube.com/embed/-0exw-9YJBo",
    description: `Build modern web applications using MongoDB, Express.js, React, and Node.js. Learn frontend and backend integration.`,
    modules: [
      'MongoDB Schemas & Collections',
      'Express Routing & APIs',
      'React Components & State',
      'Node.js & Middleware',
      'Project: Full Stack Blog App',
    ],
  },

  7: {
    title: "UI/UX Design Principles",
    instructor: "Nina Patel",
    imageUrl: "https://images.unsplash.com/photo-1612832021146-96e2f9a7369d",
    videoUrl: "https://www.youtube.com/embed/twsv5z2fBFY",
    description: `Discover the core principles of design thinking, usability, and user research. Explore Figma tools and interaction design.`,
    modules: [
      'Empathy & User Research',
      'Design Thinking Process',
      'Interactive Prototypes',
      'Figma Best Practices',
      'Capstone: Redesign a Mobile App',
    ],
  },

  8: {
    title: "Cybersecurity Fundamentals",
    instructor: "David Kim",
    imageUrl: "https://images.unsplash.com/photo-1633356128957-a1e74a01e1be",
    videoUrl: "https://www.youtube.com/embed/inWWhr5tnEA",
    description: `Understand the foundations of cybersecurity, including network security, encryption, and ethical hacking basics.`,
    modules: [
      'Cyber Threat Landscape',
      'Firewalls & IDS',
      'Cryptography Essentials',
      'Security Best Practices',
      'Hands-on: Simulated Attack & Defense',
    ],
  },

  9: {
    title: "Android App Development",
    instructor: "Kunal Sharma",
    imageUrl: "https://images.unsplash.com/photo-1551817958-20204fd2c40b",
    videoUrl: "https://www.youtube.com/embed/fis26HvvDII",
    description: `Learn how to build Android applications using Kotlin. Cover layouts, activities, and publishing your app.`,
    modules: [
      'Android Studio Setup',
      'Kotlin Basics',
      'UI Design with XML',
      'Fragments & Navigation',
      'Project: To-Do Android App',
    ],
  },

  10: {
    title: "iOS App Development with Swift",
    instructor: "Rachel Lee",
    imageUrl: "https://images.unsplash.com/photo-1523966211575-eb4a01e7ddf6",
    videoUrl: "https://www.youtube.com/embed/comQ1-x2a1Q",
    description: `Build modern iOS apps with Swift and Xcode. Learn views, navigation, and data persistence.`,
    modules: [
      'Swift Syntax & Xcode Setup',
      'Interface Builder',
      'Navigation & Tab Views',
      'Storing Data with CoreData',
      'Project: Recipe App for iOS',
    ],
  },

  11: {
    title: "Cloud Computing with AWS",
    instructor: "Thomas Nguyen",
    imageUrl: "https://images.unsplash.com/photo-1581091215367-21f35f3d5c7b",
    videoUrl: "https://www.youtube.com/embed/ulprqHHWlng",
    description: `Learn AWS services like EC2, S3, RDS and Lambda. Understand infrastructure as code and deploy cloud apps.`,
    modules: [
      'Introduction to Cloud Concepts',
      'AWS IAM & S3 Buckets',
      'Deploying EC2 Instances',
      'Serverless with Lambda',
      'Capstone: Deploy Node App to AWS',
    ],
  },

  12: {
    title: "DevOps with Docker & Kubernetes",
    instructor: "Priya Verma",
    imageUrl: "https://images.unsplash.com/photo-1645297602589-82d1582edc09",
    videoUrl: "https://www.youtube.com/embed/iqqDU2crIEQ",
    description: `Master continuous integration and deployment (CI/CD) workflows using Docker and Kubernetes.`,
    modules: [
      'DevOps Concepts & Pipeline',
      'Dockerfile & Containerization',
      'Docker Compose & Volumes',
      'Kubernetes Pods & Services',
      'Deploy Microservices on K8s',
    ],
  },

  13: {
    title: "Artificial Intelligence Mastery",
    instructor: "Sara Li",
    imageUrl: "https://images.unsplash.com/photo-1627398242454-82ddba2c14b6",
    videoUrl: "https://www.youtube.com/embed/aircAruvnKk",
    description: `Learn core AI concepts like neural networks, computer vision, and natural language processing.`,
    modules: [
      'What is AI & Machine Learning',
      'Supervised vs Unsupervised Learning',
      'Deep Learning & CNNs',
      'Intro to NLP & GPT Models',
      'Project: Image Classifier',
    ],
  },

  14: {
    title: "Blockchain and Web3 Development",
    instructor: "Rohit Kumar",
    imageUrl: "https://images.unsplash.com/photo-1623050626484-bc23e1c5cb8e",
    videoUrl: "https://www.youtube.com/embed/gyMwXuJrbJQ",
    description: `Learn the basics of blockchain, Ethereum, and how to create and deploy smart contracts with Solidity.`,
    modules: [
      'Blockchain Architecture',
      'Ethereum & Wallets',
      'Solidity Syntax',
      'Deploying Smart Contracts',
      'Project: DApp on Testnet',
    ],
  },

  15: {
    title: "Game Development with Unity",
    instructor: "Daniel Martinez",
    imageUrl: "https://images.unsplash.com/photo-1601132359863-3e2c9621f00c",
    videoUrl: "https://www.youtube.com/embed/gB1F9G0JXOo",
    description: `Build both 2D and 3D games using Unity. Learn C#, physics engines, animations, and publishing.`,
    modules: [
      'Unity Editor Overview',
      'C# Scripting Basics',
      'Game Physics & Animations',
      'UI & Scene Management',
      'Capstone: Build a 2D Platformer',
    ],
  }
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

        <button className="btn-enroll">Enroll for Free at ₹0</button>
      </div>
    </div>
  );
};

export default CourseDetail;
