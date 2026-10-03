import { Instagram, Send } from "lucide-react";
import { instagramUrl, nav, site, telegramUrl, whatsappUrl } from "@/data/siteData";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer id="contacts" className={styles.footer}>
      <div className={`container ${styles.top}`}>
        <div>
          <p className={styles.logo}>{site.name}</p>
          <p className={styles.slogan}>{site.slogan}</p>
        </div>
        <nav aria-label="Меню в подвале">
          {nav.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className={styles.socials}>
          <a href={telegramUrl} aria-label="Telegram" target="_blank" rel="noreferrer">
            <Send size={18} />
          </a>
          {whatsappUrl ? (
            <a href={whatsappUrl} aria-label="WhatsApp" target="_blank" rel="noreferrer">
              WA
            </a>
          ) : (
            <span className={styles.todo} title="TODO: добавить ссылку WhatsApp">
              WA
            </span>
          )}
          {instagramUrl ? (
            <a href={instagramUrl} aria-label="Instagram" target="_blank" rel="noreferrer">
              <Instagram size={18} />
            </a>
          ) : null}
        </div>
      </div>
      <p className={`script ${styles.harmony}`}>{site.harmony}</p>
      <p className={styles.copy}>
        Информация о маркетинге приведена как ознакомительная и может изменяться. Перед
        регистрацией уточняйте актуальные условия в вашей стране.
      </p>
    </footer>
  );
}
