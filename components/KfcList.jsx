import styles from "../styles/KfcList.module.css";
import KfcCard from "./KfcCard"

const KfcList = ({ KfcList }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>THE BEST MEAL IN TOWN</h1>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit arcu
        in pretium molestie. Interdum et malesuada fames acme. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit.
      </p>
      <div className={styles.wrapper}>
          {KfcList?.map((kfc) => (
            <KfcCard key={kfc._id} kfc={kfc} />
          ))}
      </div>
    </div>
  );
};

export default KfcList;
