import Image from "next/image";
import styles from "./page.module.css";
import Nav from "../components/Nav/Nav";
import Hero from "@/components/Hero/hero";

export default function Home() {
  return (
    <>
      <Nav />
      <main className={styles.main}>
        <Hero />
        <div className={styles.center}>
          <h1>&quot;Change yourself and you change others&quot;</h1>
          <h3 className={styles.center_2}>Are you the happiest and best coach you think you could ever be?</h3>
        </div>
        <div className={styles.grid}>
          <div className={styles.card}>
            <h3>Demolish stress</h3>
          </div>

          <div className={styles.card}>
            <h3>Balance work, family and money</h3>
          </div>

          <div className={styles.card}>
            <h3>Transform self-defeating habits into healthy action/relationships/attitudes.</h3>
          </div>

          <div className={styles.card}>
            <h3>Be the coach you aspire to be</h3>
          </div>
        </div>
        <section className={styles.text_section}>
          <p>
            We’ve looked. You will not find any program this effective on or off the internet. Why? Because our tools and processes have been practiced for years with
            positive results. Created by a seasoned therapist and experienced coach … the best of psychology and of good sportsmanship.
          </p>
          <p>
            We go beyond positive thinking and visualization. We show you how to go to your subconscious core beliefs that stop you from success and peace of mind and
            turn responsible, and more loving you.{" "}
          </p>
          <ul className={styles.bullet_list}>
            <li>Find the hidden reason for repeated frustrating hurdles.</li>
            <li>Learn how your early programming is controlling you now.</li>
            <li>Possess tools you can use for the rest of your personal and coaching life.</li>
            <li>Pass down your positive legacy to future generations.</li>
          </ul>
        </section>
        <section className={styles.workshops}>
          <h3>Join us at our FREE SEMINAR where we will tell all! Let us introduce you to our program of workshops.</h3>
          <div className={styles.flex}>
            <div className={styles.workshops_card}>
              <h3>Win from Within Workshop One</h3>
              <h5>Saturday and Sunday (live and/ or online)</h5>
              <h6>Focus on what you need and how to get it.</h6>
              <p>$1499</p>
              <button className={styles.btn}>Register Today</button>
              <div className={styles.btn2}></div>
            </div>
            <div className={styles.workshops_card}>
              <h3>Win from Within Workshop Two</h3>
              <h5>Wednesday through Sunday (live and/or online)</h5>
              <h6>Focus on transforming your core beliefs and being your True Self.</h6>
              <p>$4899</p>
              <button className={styles.btn}>Register Today</button>
              <div className={styles.btn2}></div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
