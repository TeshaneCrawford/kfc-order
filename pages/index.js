import axios from "axios";
import Head from 'next/head'
import Image from 'next/image'
import { useState } from "react";
import styles from '../styles/Home.module.css'
import Add from "../components/Add";
import AddButton from "../components/AddButton";
import Featured from "../components/Featured";
import KfcList from "../components/KfcList";

export default function Home({ kfcList }) {
  const [close, setClose] = useState(true);
  return (
    <div className={styles.container}>
      <Head>
        <title>KFC Order</title>
        <meta name="description" content="KFC delivery app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
      {<AddButton setClose={setClose} />}
      <KfcList kfcList={kfcList} />
      {!close && <Add setClose={setClose} />}

      
    </div>
  )
}

export const getServerSideProps = async () => {

  const res = await axios.get("http://localhost:3000/api/product");
  return {
    props: {
      KfcList: res.data,
    },
  };
};