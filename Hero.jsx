// import React, { useRef, useState, useEffect } from "react";
// import "../css/Hero.css";

// function Hero() {
//   const scrollRef = useRef(null);
//   const testimonialsRef = useRef(null); // Reference for the testimonials title
//   const [showBoxes, setShowBoxes] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setShowBoxes(true);
//         }
//       },
//       {
//         threshold: 0.5,
//       }
//     );

//     if (scrollRef.current) {
//       observer.observe(scrollRef.current);
//     }

//     return () => {
//       if (scrollRef.current) {
//         observer.unobserve(scrollRef.current);
//       }
//     };
//   }, []);

//   const handleScroll = () => {
//     if (testimonialsRef.current) {
//       testimonialsRef.current.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   // Scroll to top function
//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth", // This ensures smooth scrolling to the top
//     });
//   };

//   return (
//     <div>
//       <section className="hero">
//         <video autoPlay loop muted>
//           <source
//             src="public/WhatsApp Video 2025-05-14 at 3.13.02 PM.mp4"
//             type="video/mp4"
//           />
//           Your browser does not support the video tag.
//         </video>
//         <div className="hero-content">
//           <h1>Prepare for Govt. Job</h1>
//           <p>
//             Which pays <span className="cut-number"><span className="cut">10</span></span>,
//             <span className="cut-number"><span className="cut">15</span></span>, 25LPA+ 🤑
//           </p>
//           <div className="hero-buttons">
//             <button className="hero-btn" onClick={handleScroll}>
//               Get Started
//             </button>
//             <button className="hero-btn secondary">Learn More</button>
//           </div>
//         </div>
//       </section>

//       <div ref={testimonialsRef} className="testimonials-title">
//         <h2>TESTIMONIALS</h2>
//       </div>

//       <div
//         ref={scrollRef}
//         className={`four-boxes ${showBoxes ? "fade-in" : "hidden"}`} // Corrected this line
//       >
//         <div className="box">
//           <img
//             src="public/WhatsApp Image 2025-05-14 at 2.48.21 PM.jpeg"
//             alt="Box 1"
//             className="box-image"
//           />
//           <h3>RBI GRADE B, AIR-91</h3>
//           <p>Marks: 90/100</p>
//         </div>
//         <div className="box">
//           <img
//             src="public/WhatsApp Image 2025-05-14 at 2.48.22 PM (1).jpeg"
//             alt="Box 2"
//             className="box-image"
//           />
//           <h3>IRDAI Assistant Manager</h3>
//           <p>Marks: 85/100</p>
//         </div>
//         <div className="box">
//           <img
//             src="public/WhatsApp Image 2025-05-14 at 2.48.22 PM.jpeg"
//             alt="Box 3"
//             className="box-image"
//           />
//           <h3>SEBI IT Officer</h3>
//           <p>Marks: 92/100</p>
//         </div>
//         <div className="box">
//           <img
//             src="public/WhatsApp Image 2025-05-14 at 2.56.21 PM.jpeg"
//             alt="Box 4"
//             className="box-image"
//           />
//           <h3>NHB Assistant Manager</h3>
//           <p>Marks: 88/100</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Hero;

import React, { useRef, useState, useEffect } from "react";
import "../css/Hero.css";

function Hero() {
  const scrollRef = useRef(null);
  const testimonialsRef = useRef(null); // Reference for the testimonials title
  const [showBoxes, setShowBoxes] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowBoxes(true);
        }
      },
      {
        threshold: 0.5,
      }
    );

    if (scrollRef.current) {
      observer.observe(scrollRef.current);
    }

    return () => {
      if (scrollRef.current) {
        observer.unobserve(scrollRef.current);
      }
    };
  }, []);

  const handleScroll = () => {
    if (testimonialsRef.current) {
      testimonialsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // This ensures smooth scrolling to the top
    });
  };

  return (
    <div>
      {/* Make the logo clickable to scroll to top */}
      <header onClick={scrollToTop} className="logo">
        <img src="your-logo-path.png" alt="Logo" />
      </header>

      <section className="hero">
        <video autoPlay loop muted>
          <source
            src="public/WhatsApp Video 2025-05-14 at 3.13.02 PM.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className="hero-content">
          <h1>Prepare for Govt. Job</h1>
          <p>
            Which pays <span className="cut-number"><span className="cut">10</span></span>,
            <span className="cut-number"><span className="cut">15</span></span>, 25LPA+ 🤑
          </p>
          <div className="hero-buttons">
            <button className="hero-btn" onClick={handleScroll}>
              Get Started
            </button>
            <button className="hero-btn secondary">Learn More</button>
          </div>
        </div>
      </section>

      <div ref={testimonialsRef} className="testimonials-title">
        <h2>TESTIMONIALS</h2>
      </div>

      <div
        ref={scrollRef}
        className={`four-boxes ${showBoxes ? "fade-in" : "hidden"}`}
      >
        <div className="box">
          <img
            src="public/WhatsApp Image 2025-05-14 at 2.48.21 PM.jpeg"
            alt="Box 1"
            className="box-image"
          />
          <h3>RBI GRADE B, AIR-91</h3>
          <p>Marks: 90/100</p>
        </div>
        <div className="box">
          <img
            src="public/WhatsApp Image 2025-05-14 at 2.48.22 PM (1).jpeg"
            alt="Box 2"
            className="box-image"
          />
          <h3>IRDAI Assistant Manager</h3>
          <p>Marks: 85/100</p>
        </div>
        <div className="box">
          <img
            src="public/WhatsApp Image 2025-05-14 at 2.48.22 PM.jpeg"
            alt="Box 3"
            className="box-image"
          />
          <h3>SEBI IT Officer</h3>
          <p>Marks: 92/100</p>
        </div>
        <div className="box">
          <img
            src="public/WhatsApp Image 2025-05-14 at 2.56.21 PM.jpeg"
            alt="Box 4"
            className="box-image"
          />
          <h3>NHB Assistant Manager</h3>
          <p>Marks: 88/100</p>
        </div>
      </div>
    </div>
  );
}

export default Hero;

