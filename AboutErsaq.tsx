import Image from "next/image";
import { Factory, Globe2, Leaf, ShieldCheck } from "lucide-react";
import { Button } from "./Button";
import { Leaves } from "./Leaves";
import { about } from "@/data/siteData";
import styles from "./AboutErsaq.module.css";

const icons = [Factory, Leaf, Globe2, ShieldCheck];

export function AboutErsaq() {
  return (
    <section id="about" className="section section--white" aria-labelledby="about-title">
      <div className={`container ${styles.grid}`}>
        <div>
          <h2 id="about-title" className="section-title">
            {about.title}
          </h2>
          <p className="section-sub">{about.subtitle}</p>
          <p className={styles.text}>{about.text}</p>
          <ul className={styles.cards}>
            {about.cards.map((card, i) => {
              const Icon = icons[i];
              return (
                <li key={card.title}>
                  <Icon size={18} aria-hidden />
                  <div>
                    <h3>{card.title}</h3>
                    <p>{card.text}</p>
                  </div>
                </li>
              );
            })}
          </ul>
          <Button variant="ghost" href="https://ersag.com.tr/" rel="noreferrer" target="_blank">
            Подробнее о компании →
          </Button>
        </div>

        <figure className={styles.photo}>
          <Leaves className={styles.deco} />
          <div className={styles.nature}>
            <Image
              src="/images/sections/nature.png"
              alt="Горное озеро и зелень"
              fill
              sizes="(max-width: 900px) 100vw, 520px"
              className={styles.natureImg}
            />
          </div>
          <figcaption className="script">{about.quote}</figcaption>
        </figure>
      </div>
    </section>
  );
}
