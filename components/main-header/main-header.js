import Image from "next/image";

import Link from "next/link";
import MainHeaderBackground from "@/components/main-header/main-header-background";
import NavLink from "./nav-link";

import LogoImg from "@/assets/logo.png";
import styles from "./main-header.module.css";

const MainHeader = () => {
  return (
    <>
      <MainHeaderBackground />

      <header className={styles.header}>
        <Link href="/" className={styles.logo}>
          <Image src={LogoImg} alt="A plate with food" priority />
          Next level food
        </Link>

        <nav className={styles.nav}>
          <ul>
            <li>
              <NavLink href="/meals">Browse Meals</NavLink>
            </li>
            <li>
              <NavLink href="/community">Foodies Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default MainHeader;
