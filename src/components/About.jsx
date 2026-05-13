import React from "react";

// src/components/About.jsx

// About component
// Displays blog image and description
// Connected to: App.jsx

function About({ image, about }) {
  return (
    <aside>
       <img
        src={image || "https://via.placeholder.com/215"}
        alt="blog logo"
      />
      <p>{about}</p>
    </aside>
  );
}

export default About;