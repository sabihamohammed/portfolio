import React from 'react';
import Slider from 'react-slick';
import styles from "./Experience.module.css";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export const Experience = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show 3 cards at a time
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>

      <Slider {...sliderSettings}>
        {history.map((historyItem, id) => (
          <div key={id} className={styles.historyItem}>
            <div className={styles.historyItemDetails}>
              <img
                src={getImageUrl(historyItem.imageSrc)}
                alt={`${historyItem.organisation} Logo`}
              />
              <div>
                <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
              </div>
            </div>
            <ul>
              {historyItem.experiences.map((experience, index) => (
                <li key={index}>{experience}</li>
              ))}
            </ul>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Experience;
