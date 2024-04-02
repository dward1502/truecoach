import React from "react";
import styles from "./about.module.css";
import Hero from "@/components/Hero/hero";
import Image from "next/image";

const Tony = require("../../assets/IMG_4116.jpeg");
const Wendy = require("../../assets/cropped-headshot-2.png");

const page = () => {
  return (
    <div className={styles.main}>
      <Hero />
      <h1 className={styles.title}>About</h1>
      <section className={styles.about}>
        <div className={styles.about_img}>
          <Image src={Tony} alt="Image of Tony Dress" layout="fill" objectFit="cover" quality={100} />
        </div>
        <div className={styles.about_text}>
          <h3>About Tony</h3>
          <p>
            Tony has dedicated more than 30 years of his life to coaching baseball. He began his coaching journey with Major League Baseball International, AAA Wichita
            Wranglers, College teams in the bay area and has had the privilege of coaching in various countries.{" "}
          </p>
          <p>
            Throughout his career, Tony has achieved remarkable success at different levels and currently serves as the Assistant Baseball Coach at Diablo Valley College
            in the vibrant San Fransisco Bay Area.
          </p>
          <p>
            In his quest for personal development and self-discovery, Tony had the valuable opportunity to collaborate with Dr. Wendy Hill. This partnership has opened
            doors for Tony, allowing him to embrace a fresh perspective on life. Proudly joining forces with Dr. Hill, Tony is excited to be part of the transformative
            Win From Within Workshop.
          </p>
        </div>
      </section>
      <section className={styles.about}>
        <div className={styles.about_img}>
          <Image src={Wendy} alt="Image of Tony Dress" layout="fill" objectFit="cover" quality={100} />
        </div>
        <div className={styles.about_text}>
          <h3>About Dr. Wendy Hill PH. D</h3>
          <p>
            Dr. Wendy has been in practice as a therapist in Southern California for over 40 years. She has created processes that automatically open the door for
            healthy, happy, adult experience. She has worked with Navy Seals, sky divers, coaches, competitors, physicians, teachers, CEO’s, adventurers… all kinds of
            people. And her positive work is and has been filtering down to new generations.
          </p>
        </div>
      </section>
    </div>
  );
};

export default page;
