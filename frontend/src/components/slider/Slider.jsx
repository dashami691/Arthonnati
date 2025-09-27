import React, { useEffect, useRef, useState } from "react";
import "./slider.css";
import img1 from './1.png';
import img2 from './2.png';
import img3 from './3.png';
import img4 from './4.png';
import img5 from './5.png';
import img6 from './6.png';

const posts = [
  {
    title: "Your True Partner for Wealth Creation",
    imageSrc: img1,
  },
  {
    title: "Your True Partner for Wealth Creation",
    imageSrc: img2,
  },
  {
    title: "Your True Partner for Wealth Creation",
    imageSrc: img3,
  },
  {
    title: "Your True Partner for Wealth Creation",
    imageSrc: img4,
  },
  {
    title: "Your True Partner for Wealth Creation",
    imageSrc: img5,
  },
  {
    title: "Your True Partner for Wealth Creation",
    imageSrc: img6,
  }
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
            {/* <h1>
              <a href={post.url} style={{ color: "black", textDecoration: "none" }} target="_blank" rel="noopener noreferrer">
                {post.title}
              </a>
            </h1> */}
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