# React Components & Props Blog Lab

## 📌 Project Description

This is a simple personal blog built using React.  
The goal of this project is to practice:

- Building reusable components
- Passing data using props
- Rendering lists dynamically
- Applying default props
- Testing components with Vitest

---

## 🧱 Component Structure


App
├── Header
├── About
└── ArticleList
└── Article


---

## 🧩 Components

### Header
Displays the blog title passed as a prop.

### About
Displays:
- Blog image (with fallback image support)
- Blog description text

### ArticleList
- Receives an array of posts
- Renders multiple `Article` components using `.map()`

### Article
Displays:
- Title (`h3`)
- Date (`small`) with default fallback: `January 1, 1970`
- Preview text (`p`)

---

## 📂 Data Source

All blog content is stored in:


src/data/blog.js


This file includes:
- Blog name
- Image
- About text
- Posts array

---

## ▶️ How to Run the Project

Install dependencies:

```bash
npm install

Start development server:

npm run dev

Then open:

http://localhost:5173
🧪 Running Tests

This project uses Vitest + Testing Library.

Run tests:

npm test

Expected result:

14 tests passed

📸 Features
Functional React components
Props-driven UI
Default props handling
Dynamic rendering of blog posts
Fully tested components

🚀 Git Workflow

After completing changes:

git add .
git commit -m "Completed React components and props lab"
git push origin main

✅ Status

✔ All tests passing
✔ Components working correctly
✔ Project completed successfully