import { Link } from 'react-router-dom';
import { FaChalkboardTeacher, FaLaptopCode, FaCertificate } from 'react-icons/fa';

const Home = ({ isLoggedIn }) => {
  return (
    <div className="home">
      <section className="hero">
        <h2>Empower Your Learning Journey</h2>
        <p>Master new skills from the comfort of your home with industry-leading experts.</p>
        <img
  className="hero-img"
  src="https://media.istockphoto.com/id/1398308108/photo/3d-render-of-online-learning-concept-on-dark-blue-background.jpg?s=612x612&w=0&k=20&c=ttS_qf-MzlErX1A6KgsOGok2rxIhaSIU-sqP8iXVZdI="
  alt="Learning Banner"
/>
        <Link to="/courses" className="btn-primary">Explore Courses</Link>
      </section>

      <section className="features">
        <div className="feature-card">
          <img
  src="https://tse1.mm.bing.net/th/id/OIP.LHF5F8ICwz9qDxJ6B8PysgHaEK?cb=12&pid=ImgDet&w=200&h=111&c=7&dpr=1.3&o=7&rm=3"
  alt="Live Classes"
/>
          <h3><FaChalkboardTeacher /> Live Sessions</h3>
          <p>Join live, interactive sessions with professional mentors and instructors.</p>
        </div>

        <div className="feature-card">
          <img
  src="https://i0.wp.com/www.admecindia.co.in/wp-content/uploads/2023/08/HANDS-ON-PROJECT-IN-GRAPHIC-DESIGN-1.jpg?fit=2000%2C1112&ssl=1"
  alt="Hands-on Projects"
/>

          <h3><FaLaptopCode /> Hands-On Projects</h3>
          <p>Work on real-world projects to apply your skills and build your portfolio.</p>
        </div>

        <div className="feature-card">
          <img
            src="https://www.cio.com/wp-content/uploads/2023/05/certificate_gold_seal_certification_by_dny59_gettyimages-942721178_2400x1600-100788472-orig-1.jpg?quality=50&strip=all"
            alt="Certificate"
          />
          <h3><FaCertificate /> Certifications</h3>
          <p>Receive certificates upon course completion and showcase your achievements.</p>
        </div>
      </section>

      <section className="cta">
        <h2>Ready to Start Learning?</h2>
        <p>Join thousands of learners and gain the skills that matter.</p>
        <div className="home-buttons">
        {isLoggedIn ? (
          <Link to="/courses" className="btn-primary">Go to Courses</Link>
        ) : (
          <Link to="/signup" className="btn-primary">Get Started</Link>
        )}
      </div>
      </section>
    </div>
  );
};

export default Home;
