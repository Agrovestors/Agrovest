// src/app/mission.tsx
import React from "react";
import Navbar from "../src/components/Navbar"; // Ensure the path is correct
import Footer from "../src/components/Footer"; // Adjust the path based on your project structure
import "../src/app/style/mission.css"; // Ensure this CSS file is correctly linked
import "../src/app/style/globals.css"; // Ensure this CSS file is correctly linked

const Mission: React.FC = () => {
  return (
    <div className="mission-page">
      {/* Render Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="mission-content">
        <h1>Our Mission</h1>
        <p>
          At Agrovestors, we are committed to revolutionizing agriculture in Africa by providing innovative solutions that empower farmers, enhance productivity, and ensure food security. Through technology and community engagement, we aim to create sustainable farming practices for a better future.
        </p>
        <p>
          We believe in the power of collaboration, education, and technology to transform the agricultural landscape. Our mission is not only to increase yields and profitability for farmers but also to ensure that agricultural practices are environmentally sustainable and socially responsible.
        </p>
        <p>
          Join us in our journey as we strive to make a significant impact on food security and the agricultural economy, paving the way for a sustainable future for generations to come.
        </p>

        {/* YouTube Videos Section */}
        <div className="youtube-videos">
          <h2>Watch Our Videos</h2>
          <div className="video-grid">
            {/* Add YouTube videos using iframe */}
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="YouTube video 1"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>

            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/YOUR_VIDEO_ID_2"
              title="YouTube video 2"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>

            {/* Add more videos as needed */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Mission;
