// components/LoginComponent.tsx
'use client';
// pages/login.tsx
import React, { useState } from 'react';
import Head from 'next/head';
import styles from './login.module.css'; // Make sure to create the corresponding CSS module.

const Login: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleEmailSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Implement your login logic here
    console.log('Email entered:', email);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Login - Porichoy.gov.bd</title>
      </Head>

      <header className={styles.header}>
        <img src="/logo.png" alt="Logo" className={styles.logo} />
        <h1>Porichoy.gov.bd</h1>
      </header>

      <main className={styles.main}>
        <div className={styles.loginCard}>
          <h2>Create an account</h2>
          <p>Get access to our expert-led guides, podcasts, and videos to boost your financial life today!</p>
          
          <form onSubmit={handleEmailSubmit} className={styles.form}>
            <label htmlFor="email">Your email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="e.g. hello@reallygreatsite.com"
              value={email}
              onChange={handleEmailChange}
              required
            />
            <button type="submit" className={styles.buttonEmail}>Continue with email</button>
          </form>

          <div className={styles.divider}>or</div>
          
          <button className={styles.buttonMobile}>Continue with mobile</button>

          <div className={styles.loginFooter}>
            Already have an account? <a href="/signin">Log in</a>
          </div>
        </div>

        <div className={styles.graphicSide}>
           
        </div>
      </main>
      <div className={styles.graphicSide}>
        <img src="/logo2.png" alt="Logo" className={styles.logo} />
      </div>
    </div> 
  );
};

export default Login;