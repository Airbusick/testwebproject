import Image from "next/image";
import { Button } from "./Button";
import { Leaves } from "./Leaves";
import { hero, site } from "@/data/siteData";
import styles from "./Hero.module.css";

const benefitIcons: Record<string, string> = {
  leaf: "🌿",
  heart: "♡",
  diamond: "◇",
  home: "⌂",
  spark: "✦",
};

export function Hero() {
  return (
    <section id="top" className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.sky} aria-hidden />
      <Leaves className={styles.leavesLeft} />
      <Leaves className={styles.leavesRight} />

      <div className={`container ${styles.grid}`}>
        <div className={styles.portraitWrap}>
          <div className={styles.ring}>
            <Image
              src="/logo/hero-mark-soft.png"
              alt="Юлия и Евгений Чунц с продукцией Ersağ"
              fill
              priority
              sizes="(max-width: 768px) 280px, 420px"
              className={styles.logoImg}
            />
          </div>
        </div>

        <div className={`${styles.copy} fade-up`}>
          <p className="eyebrow">{hero.greeting.kicker}</p>
          <div className={styles.greeting}>
            {hero.greeting.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}
          </div>
          <h1 id="hero-title" className={styles.title}>
            {hero.greeting.closing}
          </h1>
          <p className={styles.slogan}>{hero.greeting.slogan}</p>
          <p className={styles.sub}>
            Здоровье, красота и чистый дом
            <br />
            для тебя и твоих близких
          </p>
          <ul className={styles.benefits}>
            {hero.benefits.map((item) => (
              <li key={item.label}>
                <span aria-hidden>{benefitIcons[item.icon]}</span>
                {item.label}
              </li>
            ))}
          </ul>
          <div className={styles.actions}>
            <Button href={hero.primary.href}>{hero.primary.label} →</Button>
            <Button variant="secondary" href={hero.secondary.href}>
              {hero.secondary.label} →
            </Button>
          </div>
        </div>
      </div>

      <p className={`script ${styles.harmony}`}>{site.harmony}</p>
    </section>
  );
}
