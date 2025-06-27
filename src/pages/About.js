const About = () => {
  return (
    <div className="about">
      <h2>About E-Learn</h2>
      <p>
        E-Learn is a digital learning platform built to deliver education to everyone, everywhere. We believe in democratizing quality education.
      </p>
      <img src="https://images.unsplash.com/photo-1573497491208-6b1acb260507" alt="Our Mission" className="about-img" />

      <div className="about-stats">
        <div>
          <h3>100K+</h3>
          <p>Learners Worldwide</p>
        </div>
        <div>
          <h3>500+</h3>
          <p>Expert Tutors</p>
        </div>
        <div>
          <h3>1,200+</h3>
          <p>Courses Available</p>
        </div>
      </div>

      <div className="about-vision">
        <h3>Our Vision</h3>
        <p>
          We aim to make education affordable, accessible, and effective through innovative and community-driven online experiences.
        </p>
      </div>
    </div>
  );
};

export default About;