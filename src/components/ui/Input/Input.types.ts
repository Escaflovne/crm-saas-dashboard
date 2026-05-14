import type { InputHTMLAttributes, ReactNode } from "react";

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "id"> {
  error?: string;
  id: string;
  label: string;
  rightSlot?: ReactNode;
}
