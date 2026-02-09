import React, { useState, useEffect, useRef } from "react";
import { SlCalender } from "react-icons/sl";
import { FaProjectDiagram, FaHandshake, FaUsers } from "react-icons/fa";

const Counter = ({ end, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const duration = 2000;
          const increment = end / (duration / 16);

          const timer = setInterval(() => {
            start += increment;
            if (start < end) {
              setCount(Math.floor(start));
            } else {
              setCount(end);
              clearInterval(timer);
            }
          }, 16);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [end, hasAnimated]);

  return (
    <span className="stat-number" ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

const Stats = () => {
  const stats = [
    {
      icon: SlCalender,
      number: 8,
      suffix: "+",
      text: "Years of Excellence",
    },
    {
      icon: FaProjectDiagram,
      number: 100,
      suffix: "+",
      text: "Projects Delivered",
    },
    {
      icon: FaHandshake,
      number: 50,
      suffix: "+",
      text: "Satisfied Clients",
    },
    {
      icon: FaUsers,
      number: 15,
      suffix: "+",
      text: "Strategic Partners",
    },
  ];

  return (
    <section className="stats" id="about">
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div className="stat-card animate-on-scroll" key={index}>
              <div className="stat-icon">
                <stat.icon size={32} />
              </div>
              <Counter end={stat.number} suffix={stat.suffix} />
              <span className="stat-text">{stat.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
