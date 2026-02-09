import React, { useEffect } from "react";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Services from "../components/Services";
import Values from "../components/Values";
import Projects from "../components/Projects";
import Partners from "../components/Partners";
import CTA from "../components/CTA";
import WhyChooseUs from "../components/WhyChooseUs";
import StrategicAlliances from "../components/StrategicAlliances";

const Home = () => {
  useEffect(() => {
    // Initialize animations on scroll
    const animateElements = document.querySelectorAll(".animate-on-scroll");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animated");
          }
        });
      },
      { threshold: 0.1 }
    );

    animateElements.forEach((element) => observer.observe(element));

    // Cleanup
    return () => {
      animateElements.forEach((element) => observer.unobserve(element));
    };
  }, []);
  return (
    <>
      <Hero />
      <Services />
      <Values />
      <Stats />
      <Projects />
      <Partners />
      <StrategicAlliances />

      <CTA />
    </>
  );
};

export default Home;
