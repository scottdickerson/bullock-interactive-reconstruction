import { type ComponentProps, type ReactNode } from 'react';

type ButtonPropsBase = {
  variant?: 'primary' | 'secondary';
  children: ReactNode;
  className?: string;
};

type ButtonProps<T extends 'button' | 'a' = 'button'> = ButtonPropsBase &
  (T extends 'a'
    ? ComponentProps<'a'> & { as: T; href: string }
    : ComponentProps<'button'> & { as?: T });

const Button = <T extends 'button' | 'a' = 'button'>({
  variant = 'primary',
  children,
  className = '',
  as = 'button' as T,
  ...props
}: ButtonProps<T>) => {
  const baseStyles =
    'font-metropolis font-bold text-xl py-4 px-8 rounded-lg transition-all duration-300 shadow-lg';

  const variantStyles = {
    primary:
      'bg-yellow-400 hover:bg-yellow-500 text-black transform hover:scale-105',
    secondary:
      'bg-black bg-opacity-40 backdrop-blur-sm border-4 border-yellow-400 text-yellow-100 hover:bg-opacity-60',
  };

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if (as === 'a') {
    return (
      <a className={combinedClassName} {...(props as ComponentProps<'a'>)}>
        {children}
      </a>
    );
  }

  return (
    <button
      className={combinedClassName}
      {...(props as ComponentProps<'button'>)}
    >
      {children}
    </button>
  );
};

export default Button;
