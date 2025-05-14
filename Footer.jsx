// import { useState } from "react";
// import "../css/Footer.css";

// function Footer() {
  

//   return (
//     <footer className="footer">
//       <div className="footer-left">
//         <div className="social-links">
//           <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
//           <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
//           <a href="https://discord.com" target="_blank" rel="noopener noreferrer">Discord</a>
//           <a href="https://www.twitch.tv" target="_blank" rel="noopener noreferrer">Twitch</a>
//           <a href="https://www.twitch.tv" target="_blank" rel="noopener noreferrer">Twitch</a>
//           <a href="https://www.twitch.tv" target="_blank" rel="noopener noreferrer">Twitch</a>
//           <a href="https://www.twitch.tv" target="_blank" rel="noopener noreferrer">Twitch</a>
//           <a href="https://www.twitch.tv" target="_blank" rel="noopener noreferrer">Twitch</a>
//         </div>
//       </div>

//       <div className="footer-right">
//         <p>&copy; {new Date().getFullYear()} Thriver. All rights reserved.</p>
//       </div>
//     </footer>
//   );
// }

// export default Footer;

import { useState } from "react";
import "../css/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">
        <div className="social-links">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://discord.com" target="_blank" rel="noopener noreferrer">Discord</a>
          <a href="https://www.twitch.tv" target="_blank" rel="noopener noreferrer">Twitch</a>
        </div>
      </div>

      <div className="footer-right">
        <p>&copy; {new Date().getFullYear()} Thriver. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;

