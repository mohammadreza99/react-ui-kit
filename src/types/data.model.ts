import {ReactNode} from "react";
import {Theme} from "@emotion/react";

type ButtonColor = 'primary' | 'secondary';
type ButtonSize = 'small' | 'medium' | 'large';
type ButtonType = 'button' | 'submit';
type ButtonVariant = 'text' | 'filled' | 'outlined' | 'elevated';

interface RippleTimeout {
  enter: number,
  exit: number
}

export interface ButtonProps {
  children?: ReactNode;
  className?: string;
  color?: ButtonColor;
  disabled?: boolean;
  endIcon?: ReactNode;
  startIcon?: ReactNode;
  fullWidth?: boolean;
  size?: ButtonSize;
  type?: ButtonType;
  variant?: ButtonVariant;
  theme?: Theme;
  onClick?: () => void;
}

export type RippleProps = {
  className?: string;
  rippleX: number;
  rippleY: number;
  rippleSize: number;
  timeout: RippleTimeout;
  color: string;
}

export type RippleWrapperProps = {
  className?: string;
  color?: string;
  center?: boolean;
  component?: string;
  children: ReactNode;
  timeout?: RippleTimeout
}
