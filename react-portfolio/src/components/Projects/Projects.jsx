import React from "react";
import Slider from "react-slick";
import styles from "./Projects.module.css";

import projects from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Projects = () => {
  const sliderSettings = {
    dots: true, // Add navigation dots
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Show 3 project cards at a time
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // Medium screens
        settings: {
          slidesToShow: 2, // Show 2 cards
        },
      },
      {
        breakpoint: 600, // Small screens
        settings: {
          slidesToShow: 1, // Show 1 card
        },
      },
    ],
  };

  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>

      <Slider {...sliderSettings}>
        {projects.map((project, id) => (
          <div key={id} className={styles.projectItem}>
            <ProjectCard project={project} />
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Projects;
