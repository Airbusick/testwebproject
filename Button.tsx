import type { AnchorHTMLAttributes } from "react";
import styles from "./Button.module.css";

type Variant = "primary" | "secondary" | "header" | "ghost";

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: Variant;
};

export function Button({ variant = "primary", className = "", children, href, ...props }: Props) {
  const external = typeof href === "string" && /^https?:\/\//.test(href);
  return (
    <a
      className={`${styles.btn} ${styles[variant]} ${className}`.trim()}
      href={href}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      {...props}
    >
      {children}
    </a>
  );
}
