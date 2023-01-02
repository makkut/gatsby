import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import styles from "./Slider.module.scss";
import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Slider(): JSX.Element {
  return (
    <div className={styles.container}>
      <h2 className={styles.h2}>Наши работы</h2>
      <Swiper
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className={styles.wrap}>
          <StaticImage
            className={styles.img}
            src="../../images/1.jpg"
            alt="logo"
          />
        </SwiperSlide>
        <SwiperSlide className={styles.wrap}>
          <StaticImage
            className={styles.img}
            src="../../images/2.jpg"
            alt="logo"
          />
        </SwiperSlide>
        <SwiperSlide className={styles.wrap}>
          <StaticImage
            className={styles.img}
            src="../../images/3.jpg"
            alt="logo"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
