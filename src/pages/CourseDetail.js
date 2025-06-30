import React from 'react';
import { useParams } from 'react-router-dom';

const courseData = {
  1: {
    title: 'React for Beginners',
    instructor: 'John Doe',
    imageUrl: 'https://lh7-us.googleusercontent.com/D6BrXu23nOJepuMbM-ZSNza1nfl8qLh1PtaGzyYUebo6llBebhDTSKODso4N6JZsFMXuwxSRga2pIqidn6rPkjHJTNd7opp-5HYY87OOFXqiC0nGCcHHenuytpXoG5u4jHzD4MVPdfgW0QvUijKh5q8',
    videoUrl: 'https://www.youtube.com/embed/SqcY0GlETPk?si=TFGt16-Eu8QnqDvo',
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
  3: {
  title: 'UI/UX Design Basics',
  instructor: 'Alex Ray',
  imageUrl: 'https://www.creative-tim.com/blog/content/images/2022/07/UX-design-courses.jpg',
  videoUrl: 'https://www.youtube.com/embed/MGlKO2JrvxE?si=Tey1d4iJYdxDBZ83',
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
    imageUrl: "https://uploads.teachablecdn.com/attachments/PG7zkdkrT9aByLHBe6sv_Teachable+Thumbnails+%281%29.png",
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
    imageUrl: "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20230318230239/Python-Data-Science-Tutorial.jpg",
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
    imageUrl: "https://media.licdn.com/dms/image/v2/D4D12AQGp_UCp3W82YA/article-cover_image-shrink_720_1280/B4DZXxf.sMHsAI-/0/1743513448088?e=2147483647&v=beta&t=nsToxH_KNK36f6j_xfNqeqM67oQL05VmQHQKZT7ozwQ",
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
    imageUrl: "https://lh7-us.googleusercontent.com/TPlo8EH6SlEoIC0hthDUNPsmeHsvur4yw28PZooxTNZ-_N5Bats8SZ-jT8L4ewCy3kHOAHFinxF503NINUMkTbrcCo7pchsLi-zFNc3tQHFd8tNA1vQOkGramTlFwxjbUV1NSs8kwA0tOGPV6mDl2ZdeIF9NTRbC7C1M7P6O4nGLgrwRSpFvxwmFe6kZhg",
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
    imageUrl: "https://s3.ap-south-1.amazonaws.com/webasha-blog/uploads/images/202502/image_750x_67a48971bba9d.webp",
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
    imageUrl: "https://www.appschopper.com/blog/wp-content/uploads/2021/01/Android-App-Development.png",
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
    imageUrl: "https://cdn-server-blog.hiddenbrains.com/blog/wp-content/uploads/2020/04/Swift-Development-for-iOS-1.jpg",
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
    imageUrl: "https://tech-gyan.in/wp-content/uploads/2021/05/Cloud-Computing-With-AWS-1.jpg",
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
    imageUrl: "https://uploads.keitaro.com/uploads/2021/03/Docker_Kubernetes-Blog.png",
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
    imageUrl: "https://www.pantechsolutions.net/wp-content/uploads/2021/12/AI-1.png",
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
    imageUrl: "https://wpfrank.com/wp-content/uploads/2023/05/Future-Of-Web-Development-Web3-And-Blockchain.jpg",
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
    imageUrl: "https://miro.medium.com/v2/resize:fit:1400/1*_JpaGhRE3iBOPAh_N5ycCw.png",
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
