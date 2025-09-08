import React, { useEffect, useRef, useState } from "react";
import "./slider.css";

const posts = [
  {
    title: "Your True Partner for Wealth Creation",
    imageSrc: "https://www.sherweb.com/blog/wp-content/uploads/5-ways-to-grow-your-MSP-business-1200x480-1.jpg", // Place main.jpeg in public/
  },
  {
    title: "Your True Partner for Wealth Creation",
    imageSrc: "https://mir-s3-cdn-cf.behance.net/projects/max_808/1a19d834759223.Y3JvcCw4NTgsNjcxLDAsODQ.jpg", // Place main.jpeg in public/
  },
  {
    title: "Your True Partner for Wealth Creation",
    imageSrc: "https://www.sherweb.com/blog/wp-content/uploads/5-ways-Sherweb-empowers-MSP-growth-1200x480-1.jpg", // Place main.jpeg in public/
  },
  // {
  //   title: "Alumni Spotlight: AI in Healthcare",
  //   excerpt:
  //     "Meet the graduate who's revolutionizing patient care with AI-powered diagnostics",
  //   imageSrc: "https://picsum.photos/id/1024/1200/800",
  //   author: "Alumni Association",
  //   date: "June 08, 2023",
  //   readTime: "9 min",
  //   url: "#"
  // },
  // {
  //   title: "Student Mental Health Resources",
  //   excerpt:
  //     "Comprehensive guide to mental health services available to all students",
  //   imageSrc: "https://picsum.photos/id/1040/1200/800",
  //   author: "Wellness Center",
  //   date: "July 12, 2023",
  //   readTime: "5 min",
  //   url: "#"
  // }
];

const Slider = () => {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef(null);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % posts.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + posts.length) % posts.length);

  useEffect(() => {
    timeoutRef.current = setTimeout(nextSlide, 6000);
    return () => clearTimeout(timeoutRef.current);
  }, [current]);

  return (
    <div className="carousel">
      {posts.map((post, idx) => (
        <div
          key={idx}
          className={`slide${idx === current ? " active" : ""}`}
          style={{ backgroundImage: `url(${post.imageSrc})` }}
        >
          <div className="overlay"></div>
          <div className="slide-content">
            <h1>
              <a href={post.url} style={{ color: "white", textDecoration: "none" }} target="_blank" rel="noopener noreferrer">
                {post.title}
              </a>
            </h1>
            <p>{post.excerpt}</p>
            <div className="author">
              {post.author} • {post.date} • {post.readTime}
            </div>
          </div>
        </div>
      ))}
      <div className="controls">
        <div className="dots">
          {posts.map((_, idx) => (
            <div
              key={idx}
              className={`dot${idx === current ? " active" : ""}`}
              onClick={() => setCurrent(idx)}
            />
          ))}
        </div>
        <div className="arrows">
          <button className="arrow-btn" onClick={prevSlide}>&lt;</button>
          <button className="arrow-btn" onClick={nextSlide}>&gt;</button>
        </div>
      </div>
    </div>
  );
};

export default Slider;