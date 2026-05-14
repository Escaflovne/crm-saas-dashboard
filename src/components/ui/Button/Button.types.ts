import type { ComponentPropsWithoutRef, ElementType } from "react";

export type ButtonVariant = "primary" | "outline";

type ButtonOwnProps<T extends ElementType = "button"> = {
  as?: T;
  isLoading?: boolean;
  variant?: ButtonVariant;
};

export type ButtonProps<T extends ElementType = "button"> = ButtonOwnProps<T> &
  Omit<ComponentPropsWithoutRef<T>, keyof ButtonOwnProps<T>>;
