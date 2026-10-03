import { Flower2, Heart, Home, Sparkles, Users } from "lucide-react";
import { categories } from "@/data/siteData";
import styles from "./CategoryNav.module.css";

const icons = {
  sparkles: Sparkles,
  home: Home,
  heart: Heart,
  flower: Flower2,
  users: Users,
};

export function CategoryNav() {
  return (
    <section className={styles.wrap} aria-label="Категории">
      <div className={`container ${styles.row}`}>
        {categories.map((cat) => {
          const Icon = icons[cat.icon as keyof typeof icons];
          return (
            <a key={cat.id} className={styles.card} href="#products">
              <span className={styles.icon}>
                <Icon size={22} aria-hidden />
              </span>
              <p className={styles.title}>
                {cat.title}
                {cat.subtitle ? <small>{cat.subtitle}</small> : null}
              </p>
              <p>{cat.description}</p>
            </a>
          );
        })}
      </div>
    </section>
  );
}
