"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "./Button";
import { nav, site, telegramUrl } from "@/data/siteData";
import styles from "./Header.module.css";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <a href="#top" className={styles.logo} aria-label={`${site.name} — наверх`}>
          <Image
            src="/logo/header-mark.png"
            alt=""
            width={40}
            height={40}
            className={styles.mark}
            priority
          />
          <span>{site.name}</span>
        </a>

        <nav className={styles.desktop} aria-label="Основное меню">
          {nav.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className={styles.actions}>
          <span className={styles.cta}>
            <Button variant="header" href={telegramUrl}>
              Связаться со мной
            </Button>
          </span>
          <button
            className={styles.burger}
            type="button"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Закрыть меню" : "Открыть меню"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open ? (
        <nav id="mobile-menu" className={styles.mobile} aria-label="Мобильное меню">
          {nav.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
          <Button variant="primary" href={telegramUrl}>
            Связаться со мной
          </Button>
        </nav>
      ) : null}
    </header>
  );
}
