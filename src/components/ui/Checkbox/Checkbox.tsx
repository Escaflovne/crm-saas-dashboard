import { forwardRef } from 'react';
import type { CheckboxProps } from './Checkbox.types';
import styles from './Checkbox.module.css';

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, variant = 'default', className, id, ...props }, ref) => {
    const wrapperClass = [
      styles.checkbox,
      styles[`checkbox--${variant}`],
      props.disabled ? styles['checkbox--disabled'] : undefined,
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <label className={wrapperClass} htmlFor={id}>
        <input
          ref={ref}
          type="checkbox"
          id={id}
          className={styles.checkbox__input}
          {...props}
        />
        <span className={styles.checkbox__box} aria-hidden="true" />
        <span className={styles.checkbox__label}>{label}</span>
      </label>
    );
  },
);

Checkbox.displayName = 'Checkbox';
export default Checkbox;
