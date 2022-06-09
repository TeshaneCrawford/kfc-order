import Image from "next/image";
import styles from "../styles/KfcCard.module.css";

const KfcCard = () => {
  return (
    <div className={styles.container}>
      <Image src="/img/kfc.jpg" alt="" width="500" height="500" />
      <h1 className={styles.title}>Big DEAL</h1>
      <span className={styles.price}>$19.90</span>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
    </div>
  );
};

export default KfcCard;
