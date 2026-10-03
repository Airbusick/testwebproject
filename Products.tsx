import Image from "next/image";
import { Button } from "./Button";
import { products } from "@/data/siteData";
import styles from "./Products.module.css";

export function Products() {
  return (
    <section id="products" className="section" aria-labelledby="products-title">
      <div className="container">
        <h2 id="products-title" className="section-title">
          Продукция Ersağ
        </h2>
        <p className="section-sub">Решения для каждого дня</p>
        <div className={styles.grid}>
          {products.map((item) => (
            <article key={item.id} className={styles.card}>
              {item.image ? (
                <div className={`${styles.visual} ${styles.visualPhoto}`}>
                  <Image
                    src={item.image}
                    alt={`Продукция Ersağ: ${item.title}`}
                    fill
                    sizes="(max-width: 560px) 100vw, (max-width: 1024px) 50vw, 260px"
                    className={styles.photo}
                  />
                </div>
              ) : (
                <div className={styles.visual} aria-hidden>
                  <span className={styles.bottle} />
                  <span className={styles.cap} />
                </div>
              )}
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              {item.imageTodo ? (
                <p className={styles.todo}>TODO: добавить подтверждённое фото товара</p>
              ) : null}
              <Button variant="ghost" href={item.href}>
                Подробнее →
              </Button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
