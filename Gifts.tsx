import { gifts, giftsNote } from "@/data/siteData";
import { Leaves } from "./Leaves";
import styles from "./Gifts.module.css";

export function Gifts() {
  return (
    <section id="gifts" className="section section--white" aria-labelledby="gifts-title">
      <div className="container">
        <h2 id="gifts-title" className="section-title">
          Подарки и бонусы
        </h2>
        <p className="section-sub">Дополнительные возможности на каждом этапе</p>
        <div className={styles.row}>
          {gifts.map((gift) => (
            <article key={gift.title} className={styles.card}>
              <h3>{gift.title}</h3>
              <p>{gift.text}</p>
            </article>
          ))}
          <Leaves className={styles.leaves} />
        </div>
        <p className={styles.note}>{giftsNote}</p>
      </div>
    </section>
  );
}
