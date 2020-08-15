import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <div className={styles.grid}>
          <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className={styles.card}>
            <h3>Hehe &rarr;</h3>
            <p>Click for a surprise.</p>
          </a>
    )
}
