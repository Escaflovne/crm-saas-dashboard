import { forwardRef } from "react";

import type { InputProps } from "./Input.types";
import styles from "./Input.module.css";

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error, id, label, rightSlot, ...props }, ref) => {
    const errorId = error ? `${id}-error` : undefined;

    return (
      <div className={styles.input}>
        <label className={styles.input__label} htmlFor={id}>
          {label}
        </label>
        <div className={styles.input__wrapper}>
          <input
            ref={ref}
            className={styles.input__field}
            id={id}
            aria-describedby={errorId}
            aria-invalid={error ? "true" : undefined}
            {...props}
          />
          {rightSlot ? (
            <span className={styles.input__rightSlot}>{rightSlot}</span>
          ) : null}
        </div>
        {error ? (
          <p className={styles.input__error} id={errorId}>
            {error}
          </p>
        ) : null}
      </div>
    );
  },
);

Input.displayName = "Input";

export default Input;
