import { Button } from "./Button";
import { Leaves } from "./Leaves";
import { cta, telegramUrl } from "@/data/siteData";
import styles from "./CTA.module.css";

export function CTA() {
  return (
    <section className={styles.wrap} aria-labelledby="cta-title">
      <Leaves className={styles.left} />
      <Leaves className={styles.right} />
      <div className="container">
        <h2 id="cta-title">{cta.title}</h2>
        <p>{cta.text}</p>
        <div className={styles.actions}>
          <Button href={telegramUrl}>{cta.telegram} →</Button>
          <Button variant="secondary" href="#products">
            {cta.products} →
          </Button>
        </div>
      </div>
    </section>
  );
}
