import Head from 'next/head'
import styles from '../styles/Home.module.css'
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Mystify made this</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <div className={styles.grid}>
          <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className={styles.card}>
            <h3>Click Me! &rarr;</h3>
            <p>You know the rules and so do I...</p>
          </a>
          <div className={styles.grid}>
          <a href="no" className={styles.card}>
            <h3>You wanna see a picture of my ugly face? &rarr;</h3>
            <p>That was me in 6th grade!</p>
          </a>
          <div className={styles.grid}>
          <a href="https://www.nhc.noaa.gov/" className={styles.card}>
            <h3>Latest hurricane information!&rarr;</h3>
          </a>
          <div className={styles.grid}>
          <a href="https://api.proxyscrape.com/?request=getproxies&proxytype=socks5&timeout=10000&country=all" className={styles.card}>
            <h3>Need some SOCKS5 proxies?&rarr;</h3>
            <p>Click to download.</p>
          </a>
          <div className={styles.grid}>
          <a href="https://discord.gg/r7DHHfY" className={styles.card}>
            <h3>Want to join an awesome Discord server? &rarr;</h3>
            <p>Then click this!</p>
          </a>
          <div className={styles.grid}>
          <a href="LinuxSystem.zip" className={styles.card} download='porn'>
            <h3>Want some porn? &rarr;</h3>
            <p>Then click this!</p>
          </a>
          <div className={styles.grid}>
          <a href="https://www.youtube.com/user/PewDiePie?sub_confirmation=1" className={styles.card}>
            <h3>Sub to PewDiePie &rarr;</h3>
            <p>Click here to sub.</p>
          </a>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div> 
        </div>
  )
}
