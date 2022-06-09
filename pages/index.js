import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Featured from "../components/Featured";
import KfcList from "../components/KfcList";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>KFC Order</title>
        <meta name="description" content="KFC delivery app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
      <KfcList />

      
    </div>
  )
}
