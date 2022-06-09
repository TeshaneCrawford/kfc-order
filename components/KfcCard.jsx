import Image from "next/image";
import styles from "../styles/KfcCard.module.css";
import Link from "next/link";

const KfcCard = ({ kfc }) => {
  return (
    <div className={styles.container}>
      <Link href={`/product/${kfc._id}`} passHref>
        <Image src={kfc.img} alt="" width="500" height="500" />
      </Link>
      <h1 className={styles.title}>{kfc.title}</h1>
      <span className={styles.price}>${kfc.prices[0]}</span>
      <p className={styles.desc}>
        {kfc.desc}
      </p>
    </div>
  );
};

export default KfcCard;
