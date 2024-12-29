import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About  Me </h2>
      <div className={styles.content}>
        {/* <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        /> */}
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            
            <div className={styles.aboutItemIntro}>
              <p>
              I'm a passionate Full Stack Developer and Machine Learning Engineer. I thrive at the intersection of creativity and technology, building seamless user experiences, designing intelligent systems, and transforming data into actionable insights.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/dev.png")} alt="Server icon" className={styles.smallImage} />
            <div className={styles.aboutItemText}>
              <h3>Full Stack Developer</h3>
              <p>
              Crafting responsive and dynamic web applications with a keen eye for detail and user experience. I love turning ideas into reality using the latest technologies and best practices in web development.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/ml.png")} alt="UI icon" className={styles.smallImage} />
            <div className={styles.aboutItemText}>
              <h3>Machine Learning Engineer</h3>
              <p>
               Pushing the boundaries of what's possible with data. I design and implement cutting-edge machine learning models that solve complex problems and drive innovation.
              </p>
            </div>
          </li>

          <li className={styles.aboutItem}>
            
            <div className={styles.aboutItemIntro}>
              <h3>Why choose me?</h3>
              <p>
               Because I blend the art of code, the science of data, and the vision of design to create solutions that not only work but inspire.
              </p>
            </div>
          </li>
          
        </ul>
      </div>
    </section>
  );
};
