import js from "@eslint/js";
import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "React Developer",
      icon: web,
    },
    {
      title: "Js Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Tech Enthusiast",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
   
    {
      name: "React JS",
      icon: reactjs,
    },
   
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    
    
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name:"Node js",
      icon:nodejs
    },
    {
      name:"MongoDB",
      icon:mongodb,
    },
    {
      name:"Backend",
      icon:backend,
    }
    
    
  ];
  
  const experiences = [
    {
      title: "Movie-Mania",
      iconBg: "#383E56",
      points: [
        "React.js & CSS: Built with React.js for a dynamic UI and styled using responsive CSS.",
        "Movie API Integration: Fetches real-time movie data from a public API for search and detailed view." ,
        "Watch Later with LocalStorage: Allows users to save movies to a 'Watch Later' list using browser's LocalStorage."
        "Link : aditya-sharma183portfolio.netlify.app"
      ],
        
    },
    {
      title: "Video-tube",
      iconBg: "#E6DEDD",
      points: [
         "Tech Stack: Built with Node.js, Express.js, MongoDB, and Mongoose for scalable backend services.",
         "Core Features: Provides APIs for user auth (JWT & Bcrypt), video upload (Multer & Cloudinary), comments, likes, playlists, and subscriptions.",
         "Configuration: Utilizes dotenv for environment variables and secure configuration."
         "Link: https://github.com/adityasharma183/Video_Tube"
      ],
    },
    {
      title: "AI Chat-Bot",
      iconBg:"#E6DEDD",
      points: [
        "Frontend Technologies: The chatbot interface is built using HTML, CSS, and JavaScript, ensuring a responsive and interactive user experience.",
        "AI Integration: Powered by Google Gemini API, the chatbot processes natural language input and provides intelligent, conversational responses.",
        "User Interaction: Designed for real-time communication, the chatbot can handle various queries, offering dynamic and context-aware assistance.",
        " Link : aixchatbot.netlify.app"
      ],
    },
    {
      title: "World-info",
      iconBg:"#E6DEDD",
      points: [
        "This project aims to create a comprehensive web application providing detailed information about every country in the world, built using React, CSS, JavaScript, and the Axios API.",
        "Link :world-adi.netlify.app"
      ],
    },
    {
      title: "Portfolio",
      iconBg:"#E6DEDD",
      points: [
        "Modern Tech Stack: Built using React.js, React Three Fiber, Three.js, and Framer Motion for an interactive and visually rich experience. ",
        "Responsive Design: Ensures a smooth, adaptive layout across all devices with dynamic animations and 3D elements.",
        "Component-Driven: Utilizes React.js for efficient state management and modular, maintainable code structure.",
        "Link : aditya-sharma183portfolio.netlify.app"
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };