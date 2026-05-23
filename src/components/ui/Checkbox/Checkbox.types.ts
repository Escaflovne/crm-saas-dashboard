import type { InputHTMLAttributes } from 'react';

export type CheckboxVariant = 'default' | 'error' | 'success';

export interface CheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label: string;
  variant?: CheckboxVariant;
}
