// src/data/blog.js

const blog = {
  name: "Preshi's Tech Blog",

  image:
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085",

  about:
    "Welcome to my personal tech blog where I share coding tips, React projects, and web development ideas.",

  posts: [
    {
      id: 1,
      title: "Getting Started with React",
      date: "May 10, 2026",
      preview:
        "React makes it painless to create interactive UIs for your web applications.",
    },

    {
      id: 2,
      title: "Why Components Matter",
      date: "May 11, 2026",
      preview:
        "Components help break your UI into reusable and manageable pieces.",
    },

    {
      id: 3,
      title: "Understanding Props",
      date: "May 12, 2026",
      preview:
        "Props allow data to flow between React components efficiently.",
    },
  ],
};

export default blog;