"use client";
import styles from "./page.module.css";
import Hero from "@/components/Hero/hero";
import { useState } from "react";
import EmailModal from "@/components/Modal/modal";
export default function Home() {
  const [open, setOpen] = useState(false);
  const [workshop, setWorkshop] = useState("");

  const onOpenModal = (workshopNum) => {
    setOpen(true);
    setWorkshop(workshopNum);
  };
  const onCloseModal = () => setOpen(false);

  return (
    <main className={styles.main}>
      <Hero />
      <div className={styles.center}>
        <h1>Our Guarantee:</h1>
        <h1 className={styles.header}>You will leave our free seminar with a major tool on how to be a better coach.</h1>
        {/* <h3 className={styles.center_2}>Our guarantee: you will leave our free seminare with a profound insight of yourself.</h3> */}
        <button className={styles.cta_button}>Join Free Seminar</button>
        <h1>We have a mission:</h1>
        <div className={styles.textDiv}>
          <h3 className={styles.subheader}>We will show you how to be your best self -</h3>
          <h3 className={styles.subheader}>Coach, mentor, friend, family man, and community contributor</h3>
          <h3 className={styles.subheader}> Lets make this a better world one person at a time starting with you.</h3>
        </div>
      </div>
      <div className={styles.grid}>
        <div className={styles.card}>
          <h3>Be the mentor. you were meant to be</h3>
        </div>

        <div className={styles.card}>
          <h3>Watch your team flourish</h3>
        </div>

        <div className={styles.card}>
          <h3>Transform self-defeating habits into healthy action/relationships/attitudes.</h3>
        </div>

        <div className={styles.card}>
          <h3>Remove Stress</h3>
        </div>
      </div>
      <section className={styles.text_section}>
        <p>We’ve looked. You will not find any program this effective on or off the internet. Why? Because our tools and processes have been practiced for years with positive results. Created by a seasoned therapist and experienced coach … the best of psychology and of good sportsmanship.</p>
        <p>We go beyond positive thinking and visualization. We show you how to go to your subconscious core beliefs that stop you from success and peace of mind and turn responsible, and more loving you. </p>
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
            <p style={{ marginBottom: 40 }}>$1499</p>
            <button className={styles.btn} onClick={() => onOpenModal(1)}>
              Register Now
            </button>
            <div className={styles.btn2}></div>
          </div>
          <div className={styles.workshops_card}>
            <h3>Win from Within Workshop Two</h3>
            <h5>Wednesday through Sunday (live and/or online)</h5>
            <h6>Focus on transforming your core beliefs and being your True Self.</h6>
            <p>$4899</p>
            <button className={styles.btn} onClick={() => onOpenModal(2)}>
              Register Now
            </button>
            <div className={styles.btn2}></div>
          </div>
        </div>
      </section>
      <EmailModal open={open} onCloseModal={onCloseModal} workshop={workshop} />
    </main>
  );
}
