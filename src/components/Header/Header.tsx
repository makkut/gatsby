import styles from "./Header.module.scss";
import { Twirl as Hamburger } from "hamburger-react";
import { useState } from "react";
import { Link } from "gatsby";
import React from "react";
import { StaticImage } from "gatsby-plugin-image";

export default function Header(): JSX.Element {
  const [isOpen, setOpen] = useState(false);
  const closedMenu = () => setOpen(!isOpen);
  return (
    <>
      <div className={styles.sticky}>
        <div className={styles.container4K}>
          <div className={styles.wrap}>
            <div className={styles.logo}>
              <div className={styles.logoLink}>
                <Link to="/">
                  <StaticImage
                    width={441}
                    height={80}
                    src="../../images/logo_kv.jpg"
                    alt="logo"
                  />
                </Link>
              </div>
            </div>
            <ul className={styles.navMenu}>
              <li className={styles.li}>
                <Link className={styles.a} to="/#appEntwicklung">
                  <p>О нас</p>
                </Link>
              </li>
              <li className={styles.li}>
                <Link className={styles.a} to="/#portfolio">
                  <p>Наши работы</p>
                </Link>
              </li>
              <li className={styles.li}>
                <Link className={styles.a} to="/#contact">
                  <p>Контакты</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.container}>
          <div className={styles.wrap}>
            <div className={styles.logo}>
              <div className={styles.logoLink}>
                <Link to="/">
                  <StaticImage
                    placeholder="blurred"
                    width={96}
                    height={60}
                    formats={["auto", "webp", "avif"]}
                    src="../../images/logo_kv.jpg"
                    alt="logo"
                  />
                </Link>
              </div>
            </div>
            <ul className={styles.navMenu}>
              <li className={styles.li}>
                <Link className={styles.a} to="/#info">
                  <p>О нас</p>
                </Link>
              </li>
              <li className={styles.li}>
                <Link className={styles.a} to="/#portfolio">
                  <p>Наши работы</p>
                </Link>
              </li>
              <li className={styles.li}>
                <Link className={styles.a} to="/#contact">
                  <p>Контакты</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.containerMobile}>
          <div className={styles.wrap}>
            <div className={styles.logo}>
              <div className={styles.logoLink}>
                <Link to="/">
                  <StaticImage
                    width={53}
                    height={33}
                    formats={["auto", "webp", "avif"]}
                    src="../../images/logo_kv.jpg"
                    alt="logo"
                  />
                </Link>
              </div>
            </div>
            <div className={styles.hamburger}>
              <Hamburger
                // distance="lg"
                toggled={isOpen}
                toggle={setOpen}
                color="#338fbf"
              />
            </div>
          </div>
        </div>
        {isOpen && (
          <div className={styles.menuMobile}>
            <ul className={styles.ulMobile}>
              <li className={styles.liMobile}>
                <Link
                  className={styles.aMobile}
                  to="/#info"
                  onClick={closedMenu}
                >
                  <p>О нас</p>
                </Link>
              </li>
              <li className={styles.liMobile}>
                <Link
                  className={styles.aMobile}
                  onClick={closedMenu}
                  to="/#portfolio"
                >
                  <p>Наши работы</p>
                </Link>
              </li>
              <li className={styles.liMobile}>
                <Link
                  className={styles.aMobile}
                  onClick={closedMenu}
                  to="/#contact"
                >
                  <p>Контакты</p>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
}
