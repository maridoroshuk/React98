export interface IButtonProps {
  onClick: () => void;
  type?: 'submit' | 'reset';
  disabled?: boolean;
  children?: string;
}
