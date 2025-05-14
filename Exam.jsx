import React from 'react';
import "../css/Exam.css";

function Exam() {
  return (
    <section className="exam-cards">
      <div className="card">
        <img src="https://via.placeholder.com/150" alt="Exam 1" className="card-img" />
        <h3>Exam 1: Engineering</h3>
        <p className="card-syllabus">Syllabus: Mathematics, Physics, Chemistry, and Engineering Mechanics.</p>
      </div>

      <div className="card">
        <img src="https://via.placeholder.com/150" alt="Exam 2" className="card-img" />
        <h3>Exam 2: Medical</h3>
        <p className="card-syllabus">Syllabus: Biology, Physics, Chemistry, and Anatomy.</p>
      </div>

      <div className="card">
        <img src="https://via.placeholder.com/150" alt="Exam 3" className="card-img" />
        <h3>Exam 3: Law</h3>
        <p className="card-syllabus">Syllabus: Constitutional Law, Criminal Law, and Legal Ethics.</p>
      </div>

      <div className="card">
        <img src="https://via.placeholder.com/150" alt="Exam 4" className="card-img" />
        <h3>Exam 4: Business</h3>
        <p className="card-syllabus">Syllabus: Business Management, Economics, Marketing, and Accounting.</p>
      </div>

      <div className="card">
        <img src="https://via.placeholder.com/150" alt="Exam 5" className="card-img" />
        <h3>Exam 5: Computer Science</h3>
        <p className="card-syllabus">Syllabus: Algorithms, Data Structures, OS, and Programming.</p>
      </div>

      <div className="card">
        <img src="https://via.placeholder.com/150" alt="Exam 6" className="card-img" />
        <h3>Exam 6: Civil Engineering</h3>
        <p className="card-syllabus">Syllabus: Structural Engineering, Fluid Mechanics, and Geotechnical Engineering.</p>
      </div>
    </section>
  );
}

export default Exam;
