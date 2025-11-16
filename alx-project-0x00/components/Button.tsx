import { ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({ 
  title, 
  size,
  shape,
  styles = '',
  className = '' 
}) => {

  const sizeClasses = {
    small: 'px-3 py-1 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-6 py-3 text-lg'
  };

  const baseClasses = 'bg-blue-500 text-white font-medium hover:bg-blue-600 transition-colors';
  
  return (
    <button className={`${baseClasses} ${sizeClasses[size]} ${shape} ${styles} ${className}`}>
      {title}
    </button>
  )
}

export default Button;
