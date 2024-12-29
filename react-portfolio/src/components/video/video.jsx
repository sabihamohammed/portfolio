import React from "react";
import Slider from "react-slick";
import styles from "./video.module.css";
import videoData from "../../data/video.json";
import { getVideoUrl } from "../../utils";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Video = () => {
  const sliderSettings = {
    dots: true, // Add navigation dots
    infinite: true,
    speed: 500,
    slidesToShow: 2, // Show 2 videos at a time
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // Medium screens
        settings: {
          slidesToShow: 1, // Show 1 video
        },
      },
      {
        breakpoint: 600, // Small screens
        settings: {
          slidesToShow: 1, // Show 1 video
        },
      },
    ],
  };

  return (
    <section className={styles.videoSection} id="video">
      <h2 className={styles.title}>Videos</h2>
      <Slider {...sliderSettings}>
        {videoData.map((videoItem, index) => (
          <div key={index} className={styles.videoItem}>
            <video
              className={styles.videoPlayer}
              controls
              src={getVideoUrl(videoItem.video)} // Use getVideoUrl to resolve the video path
            >
              Your browser does not support the video tag.
            </video>
            <h3 className={styles.description}>{videoItem.description}</h3>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Video;
