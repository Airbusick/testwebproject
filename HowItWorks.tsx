import { BookOpen, ShoppingBag, Sprout, UserPlus, Users } from "lucide-react";
import { steps } from "@/data/siteData";
import { Leaves } from "./Leaves";
import styles from "./HowItWorks.module.css";

const icons = [UserPlus, ShoppingBag, Sprout, Users, BookOpen];

export function HowItWorks() {
  return (
    <section id="how" className="section section--white" aria-labelledby="how-title">
      <div className="container">
        <h2 id="how-title" className="section-title">
          Как это работает?
        </h2>
        <p className="section-sub">Просто и понятно</p>
        <ol className={styles.track}>
          {steps.map((step, i) => {
            const Icon = icons[i];
            return (
              <li key={step.n} className={styles.step}>
                <span className={styles.num}>{step.n}</span>
                <span className={styles.icon}>
                  <Icon size={22} aria-hidden />
                </span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </li>
            );
          })}
        </ol>
        <Leaves className={styles.leaves} />
      </div>
    </section>
  );
}
