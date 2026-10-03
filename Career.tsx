import { careerLevels, careerNote } from "@/data/siteData";
import styles from "./Career.module.css";

export function Career() {
  return (
    <section id="career" className="section" aria-labelledby="career-title">
      <div className="container">
        <h2 id="career-title" className="section-title">
          Карьера и статусы
        </h2>
        <p className="section-sub">Ваш путь — это новые возможности</p>

        <ol className={styles.levels}>
          {careerLevels.map((level, i) => (
            <li key={level.name} className={styles.item} data-tone={level.tone}>
              <div className={styles.plant} aria-hidden>
                <span className={styles.pot} />
                <span className={styles.stem} style={{ height: `${28 + i * 14}px` }} />
                <span className={styles.leafL} />
                <span className={styles.leafR} />
              </div>
              <p className={styles.range}>{level.range}</p>
              <h3>{level.name}</h3>
              <p className={styles.hint}>карьерный уровень</p>
            </li>
          ))}
        </ol>

        <p className={styles.note}>{careerNote}</p>
      </div>
    </section>
  );
}
