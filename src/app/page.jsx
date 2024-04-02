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
          <p>We’ve looked. You will not find any program this effective on or off the internet. Why? Because our tools and processes have been practiced for years with positive results. Created by a seasoned therapist and experienced coach … the best of psychology and of good sportsmanship.</p>
          <p>We go beyond positive thinking and visualization. We show you how to go to your subconscious core beliefs that stop you from success and peace of mind and turn responsible, and more loving you. </p>
        </section>
      </main>
    </>
  );
}
