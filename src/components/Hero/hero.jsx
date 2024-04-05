import styles from "./hero.module.css";
import Image from "next/image";

const img = require("../../assets/IMG_4116.jpeg");

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.hero_text}>
        <h1 className={styles.headline}>True Seeker Coach</h1>
        <p className={styles.subheadline}>&quot;Win From Within&quot;</p>
        <a href="#" className={styles.cta_button}>
          Join Our Free Seminar
        </a>
      </div>
      <div className={styles.hero_image}>
        <Image src={img} alt="Hero Image" fill style={{ objectFit: "contain" }} quality={100} />
      </div>
    </div>
  );
};

export default Hero;
