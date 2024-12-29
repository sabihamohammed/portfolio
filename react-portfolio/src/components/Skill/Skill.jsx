import React from "react";
import styles from "./Skill.module.css";
import skills from "../../data/skills.json";
import { getImageUrl } from "../../utils";

export const Skill = () => {
    return (
      <section className={styles.container} id="skills">
        <h2 className={styles.title}>Skills</h2>
        
        {/* Loop through each category */}
        <div className={styles.content}>
          {skills.map((category, categoryId) => (
            <div key={categoryId} className={styles.categorySection}>
              <h3 className={styles.categoryTitle}></h3>
              
              <div className={styles.skills}>
                {category.skills.map((skill, skillId) => (
                  <div key={skillId} className={styles.skill}>
                    <div className={styles.skillImageContainer}>
                      <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                    </div>
                    <p>{skill.title}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    );
};
