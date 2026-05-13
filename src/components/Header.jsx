import React from "react";

// src/components/Header.jsx

// Header component
// Displays the title of the blog
// Connected to: App.jsx

function Header({ name }) {
  return (
    <header>
      <h1>{name}</h1>
    </header>
  );
}

export default Header;