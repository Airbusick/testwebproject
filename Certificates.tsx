"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { certificates } from "@/data/siteData";
import styles from "./Certificates.module.css";

export function Certificates() {
  const [open, setOpen] = useState<(typeof certificates.items)[number] | null>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <section id="certificates" className="section section--white" aria-labelledby="certificates-title">
      <div className="container">
        <h2 id="certificates-title" className="section-title">
          {certificates.title}
        </h2>
        <p className="section-sub">{certificates.subtitle}</p>
        <ul className={styles.grid}>
          {certificates.items.map((item) => (
            <li key={item.src}>
              <button
                type="button"
                className={styles.card}
                onClick={() => setOpen(item)}
                aria-label={`Открыть документ: ${item.title}`}
              >
                <span className={styles.preview}>
                  <Image
                    src={item.src}
                    alt=""
                    fill
                    sizes="(max-width: 560px) 100vw, (max-width: 1024px) 50vw, 240px"
                    className={styles.photo}
                  />
                </span>
                <span className={styles.caption}>{item.title}</span>
              </button>
            </li>
          ))}
        </ul>
        <p className={styles.note}>{certificates.note}</p>
      </div>

      {open ? (
        <div className={styles.lightbox} role="dialog" aria-modal="true" aria-label={open.title}>
          <button type="button" className={styles.backdrop} onClick={() => setOpen(null)} aria-label="Закрыть" />
          <div className={styles.frame}>
            <button type="button" className={styles.close} onClick={() => setOpen(null)} aria-label="Закрыть документ">
              <X size={20} />
            </button>
            <Image src={open.src} alt={open.title} width={900} height={1270} className={styles.full} />
            <p>{open.title}</p>
          </div>
        </div>
      ) : null}
    </section>
  );
}
