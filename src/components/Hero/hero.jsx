import styles from './hero.module.css';
import Image from 'next/image';

const img = require("../../assets/baseball_stadium.jpg")

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.hero_text}>
        <h1 className={styles.headline}>Win From Within</h1>
        <p className={styles.subheadline}>Change yourself and you change others.</p>
        <a href="#" className={styles.cta_button}>Join Our Free Seminar</a>
      </div>
      <div className={styles.hero_image}>
        <Image
          src={img}
          alt="Hero Image"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
    </div>
  );
};

export default Hero;