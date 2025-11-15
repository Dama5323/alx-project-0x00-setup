export interface PillProps {
  title: string
}

export interface ButtonProps {
  title: string;
  styles: string; // Remove the ? to make it required
  size?: 'small' | 'medium' | 'large';
  shape?: 'rounded-sm' | 'rounded-md' | 'rounded-full';
  className?: string;
}