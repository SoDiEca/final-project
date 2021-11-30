import { Typography } from '@material-ui/core';
import React from 'react';
import styles from '../styles/Home.module.css';

export default function HeroPage() {
  return (
    <section className={styles.HeroSection}>
      <div className={styles.HeroPageStyle}>
        <Typography>
          <h1 className={styles.HeroTextStyle}>
            Make a difference for your Future
          </h1>
          <p className={styles.TextStyle}>
            and plant trees to neutralize CO2 emissions
          </p>
        </Typography>
      </div>
    </section>
  );
}
