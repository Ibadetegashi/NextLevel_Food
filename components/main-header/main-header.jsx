import Link from "next/link";
import Image from "next/image";

import logo from "@/public/images/logo.png";
import classes from "./main-header.module.css";
import MainHeaderBackground from "./main-header-background";
import NavLink from "./nav-link";

export default function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link href="/" className={classes.logo}>
          <Image src={logo} alt="Logo" priority />
          NextLevel Food
        </Link>

        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink path="/meals" name="Meals" />
            </li>
            <li>
              <NavLink path="/community" name="Foodies Community" />
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
