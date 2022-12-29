import styles from "./Info.module.scss";
import React from "react";

export default function Info(): JSX.Element {
  return (
    <div className={styles.container}>
      <h2 className={styles.h2}>О нас</h2>
      <div style={{ position: "relative", overflow: "hidden" }}>
        <a
          href="https://yandex.ru/maps/11009/kizlyar/?utm_medium=mapframe&utm_source=maps"
          style={{
            color: "#eee",
            fontSize: "12px",
            position: "absolute",
            top: "0px",
          }}
        >
          Кизляр
        </a>
        <a
          href="https://yandex.ru/maps/11009/kizlyar/house/ogorodny_pereulok_28/YE8YcQdjQEQCQFppfXR1c31hYg==/?ll=46.705930%2C43.841625&utm_medium=mapframe&utm_source=maps&z=18"
          style={{
            color: "#eee",
            fontSize: "12px",
            position: "absolute",
            top: "14px",
          }}
        >
          Огородный переулок, 28 — Яндекс Карты
        </a>
        <iframe
          src="https://yandex.ru/map-widget/v1/-/CCUNF2hrLB"
          width="300"
          height="300"
          frameBorder="0"
          allowFullScreen
          style={{ position: "relative" }}
        ></iframe>
      </div>
    </div>
  );
}
