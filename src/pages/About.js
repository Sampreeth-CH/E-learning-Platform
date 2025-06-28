import { FaGlobe, FaLaptopCode, FaChalkboardTeacher, FaUsers, FaAward, FaBullseye } from 'react-icons/fa';

const About = () => {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="overlay">
          <h1>Empowering Learners Worldwide</h1>
          <p>Your gateway to the future of digital education</p>
        </div>
      </section>

      <section className="about-overview">
        <h2>Who We Are</h2>
        <p>
          At <strong>E-Learn</strong>, we believe education should be accessible, engaging, and effective for everyone.
          Our mission is to deliver top-notch learning experiences that help learners acquire in-demand skills and achieve
          their career goals.
        </p>
        <div className="stats">
          <div><FaUsers /> <span>50K+</span> Students</div>
          <div><FaChalkboardTeacher /> <span>500+</span> Instructors</div>
          <div><FaLaptopCode /> <span>1000+</span> Courses</div>
          <div><FaGlobe /> <span>120+</span> Countries</div>
        </div>
      </section>

      <section className="about-values">
        <h2>Our Core Values</h2>
        <div className="values-grid">
          <div className="value-card">
            <FaAward className="icon" />
            <h3>Quality Education</h3>
            <p>Courses designed by industry experts with a focus on real-world applications and innovation.</p>
          </div>
          <div className="value-card">
            <FaUsers className="icon" />
            <h3>Community Driven</h3>
            <p>We foster a thriving community where learners collaborate, support, and grow together.</p>
          </div>
          <div className="value-card">
            <FaBullseye className="icon" />
            <h3>Goal Oriented</h3>
            <p>Whether it’s landing a job or launching a startup, our platform helps you reach your goals.</p>
          </div>
        </div>
      </section>

      <section className="about-cta">
        <h2>Join Our Mission</h2>
        <p>Start your journey with E-Learn and be part of a global movement shaping the future of education.</p>
        <a href="/signup" className="btn-primary">Get Started</a>
      </section>
    </div>
  );
};

export default About;
