import React from "react";
import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source },
}) => {
  const handleDemoClick = (e) => {
    if (demo.startsWith("#")) {
      // Prevent default link behavior for scrolling
      e.preventDefault();
      const targetSection = document.querySelector(demo);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div className={styles.container}>
      <img
        src={getImageUrl(imageSrc)}
        alt={`Image of ${title}`}
        className={styles.image}
      />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
        {skills.map((skill, id) => (
          <li key={id} className={styles.skill}>
            {skill}
          </li>
        ))}
      </ul>
      <div className={styles.links}>
        {demo && (
          <a
            href={demo}
            className={styles.link}
            target={demo.startsWith("#") ? "_self" : "_blank"} // Open new tab only for external links
            rel="noopener noreferrer"
            onClick={handleDemoClick} // Scroll to section if demo is a hash link
          >
            Demo
          </a>
        )}
        {source && (
          <a
            href={source}
            className={styles.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            Source
          </a>
        )}
      </div>
    </div>
  );
};
