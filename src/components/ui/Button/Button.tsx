import type { ElementType } from "react";

import type { ButtonProps } from "./Button.types";
import styles from "./Button.module.css";

export default function Button<T extends ElementType = "button">({
  as,
  children,
  className,
  isLoading = false,
  variant = "primary",
  ...props
}: ButtonProps<T>) {
  const Component = as ?? "button";
  const buttonClassName = [
    styles.button,
    styles[`button--${variant}`],
    isLoading ? styles["button--loading"] : undefined,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Component
      className={buttonClassName}
      aria-busy={isLoading ? "true" : undefined}
      {...props}
    >
      {children}
    </Component>
  );
}
