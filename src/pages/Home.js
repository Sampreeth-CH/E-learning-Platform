import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaChalkboardTeacher, FaLaptopCode, FaCertificate } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <h2>Welcome to E-Learn</h2>
        <p>Empower your future with expert-led courses.</p>
        <img src="https://images.unsplash.com/photo-1584697964154-9437e03e7c7b" alt="Learning" className="hero-img" />
      </section>

      <section className="features">
        <div className="feature-card">
          <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d" alt="Interactive" />
          <h3>Interactive Lessons</h3>
          <p>Engage with quizzes, examples, and practical tasks.</p>
        </div>
        <div className="feature-card">
          <img src="https://images.unsplash.com/photo-1607746882042-944635dfe10e" alt="Experts" />
          <h3>Expert Instructors</h3>
          <p>Courses taught by real-world professionals.</p>
        </div>
        <div className="feature-card">
          <img src="https://images.unsplash.com/photo-1588072432836-e10032774350" alt="Certificate" />
          <h3>Certified Programs</h3>
          <p>Earn certificates to showcase your knowledge.</p>
        </div>
      </section>

      <section className="cta">
        <h2>Start Your Learning Journey</h2>
        <p>Join thousands of learners today.</p>
        <Link to="/signup" className="btn-primary">Join Now</Link>
      </section>
    </div>
  );
};

export default Home;