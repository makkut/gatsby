import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import { BsWhatsapp, BsInstagram, BsTelegram } from 'react-icons/bs';
import { FaTelegramPlane } from 'react-icons/fa';

import styles from "./Footer.module.scss"

export default function Footer(): JSX.Element {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerLogo}>
          <a href="#" className={styles.logoLink}>
            <StaticImage
              placeholder="blurred"
              src="../../images/logo_krais.png"
              alt="logo"
              width={80}
              height={80}
              formats={["auto", "webp", "avif"]}
              className={styles.logoImg}
            />
          </a>
        </div>

        <div className={styles.footerBox}>
          <div className={styles.footerInfo}>
            <p className={styles.footerBoxTitle}>ЮАР пластиковые окна</p>
            <p className={styles.footerCopy}>© 2023. Все права защищены</p>
            <p className={styles.footerLink}>
              <a href="#">Datenschutzbestimmungen</a>
            </p>
          </div>
          <div className={styles.footerAdress}>
            <p className={styles.footerBoxTitle}>Адрес:</p>

            <p className={styles.footerAdressText}>
              Grabbepl. 4, 40213 Düsseldorf
            </p>
          </div>
          <div className={styles.footerContact}>
            <p className={styles.footerBoxTitle}>
              Buchungen und Reservierungen von Touren:
            </p>
            <a className={styles.footerPhone} href="tel:08333333000">
              Tel. 0833 33 33000
            </a>
            <a className={styles.footerMail} href="mailto:safari@touristik.de">
              Email. safari@touristik.de
            </a>
          </div>
        </div>
        <div className={styles.footerSocialmedia}>
          <a href="#" className={styles.socialItem}>
            <BsWhatsapp color="#ff0103" />
          </a>
          <a href="#" className={styles.socialItem}>
            <BsInstagram color="#ff0103" />
          </a>
          <a href="#" className={styles.socialItem}>
            <FaTelegramPlane color="#ff0103" />
          </a>
        </div>
      </div>
    </div>
  );
}
