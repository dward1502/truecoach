import Link from "next/link";
import styles from "./nav.module.css";

const Nav = () => {
  return (
    <nav className={styles.navbar}>
      <Link href="/" className={styles.navbar_brand}>
        True Seeker Coach
      </Link>
      <ul className={styles.navbar_links}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/workshops">Workshops</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
