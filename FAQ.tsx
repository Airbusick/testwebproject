"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faq } from "@/data/siteData";
import styles from "./FAQ.module.css";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="section section--white" aria-labelledby="faq-title">
      <div className="container">
        <h2 id="faq-title" className="section-title">
          Частые вопросы
        </h2>
        <p className="section-sub">Ответы на самые популярные вопросы</p>
        <div className={styles.list}>
          {faq.map((item, i) => {
            const expanded = open === i;
            return (
              <div key={item.q} className={styles.item}>
                <h3>
                  <button
                    type="button"
                    aria-expanded={expanded}
                    aria-controls={`faq-panel-${i}`}
                    id={`faq-btn-${i}`}
                    onClick={() => setOpen(expanded ? null : i)}
                  >
                    {item.q}
                    <ChevronDown size={18} aria-hidden className={expanded ? styles.open : ""} />
                  </button>
                </h3>
                <div
                  id={`faq-panel-${i}`}
                  role="region"
                  aria-labelledby={`faq-btn-${i}`}
                  hidden={!expanded}
                  className={styles.panel}
                >
                  <p>{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
