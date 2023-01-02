import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { forwardRef } from "react";
import styles from "./Banner.module.scss";

const Banner = forwardRef((props, ref: any) => {
  return (
    <div className={styles.container}>
      {/* <div className={styles.wrap}> */}
      <StaticImage
        style={{ position: "absolute" }}
        // width={3880}
        // height={1500}
        src="../../images/banner_okna.png"
        alt="banner"
        className={styles.wrap}
        // layout="responsive"
      />
      <div ref={ref} className={styles.mouseParallaxBg}>
        <StaticImage
          // width={3880}
          // height={1500}
          src="../../images/banner.jpg"
          alt="banner"
          // layout="responsive"
        />
      </div>
      {/* <div ref={ref} className={styles.mouseParallaxBg4K}>
          <Image src={Band4K} alt='Banner4K' layout='fill' objectFit='cover' />
        </div> */}
      <h1 className={styles.title}>Производство и монтаж пластиковых окон</h1>
      {/* </div> */}
    </div>
  );
});

Banner.displayName = "Banner";

export default Banner;
