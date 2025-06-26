import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaChalkboardTeacher, FaLaptopCode, FaCertificate } from 'react-icons/fa';

const Home = () => {
  return (
    <motion.div 
      className="home"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2>Welcome to E-Learn</h2>
      <p>Explore a wide range of online courses taught by experts and build your future today.</p>

      {/* 🔥 Feature Section */}
      <section className="features" style={{ marginTop: "3rem", display: "flex", gap: "2rem", justifyContent: "center", flexWrap: "wrap" }}>
        <motion.div whileHover={{ scale: 1.05 }} className="feature-card">
          <FaChalkboardTeacher size={40} color="#007bff" />
          <h3>Expert Instructors</h3>
          <p>Learn from industry professionals with real-world experience.</p>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} className="feature-card">
          <FaLaptopCode size={40} color="#007bff" />
          <h3>Hands-On Projects</h3>
          <p>Apply your skills with real coding challenges and assignments.</p>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} className="feature-card">
          <FaCertificate size={40} color="#007bff" />
          <h3>Certifications</h3>
          <p>Get certified to boost your resume and career opportunities.</p>
        </motion.div>
      </section>

      {/* CTA */}
      <motion.div 
        className="cta" 
        style={{ marginTop: "4rem" }} 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <Link to="/courses">
          <button style={{
            padding: "1rem 2rem",
            background: "#007bff",
            color: "white",
            borderRadius: "10px",
            fontSize: "1rem",
            cursor: "pointer",
            border: "none"
          }}>
            Start Learning Now
          </button>
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default Home;
