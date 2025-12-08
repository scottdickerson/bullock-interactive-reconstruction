import { type ComponentProps, type ReactNode } from 'react';

type ButtonPropsBase = {
  children: ReactNode;
  className?: string;
};

type ButtonProps<T extends 'button' | 'a' = 'button'> = ButtonPropsBase &
  (T extends 'a'
    ? ComponentProps<'a'> & { as: T; href: string }
    : ComponentProps<'button'> & { as?: T });

const Button = <T extends 'button' | 'a' = 'button'>({
  children,
  className = '',
  as = 'button' as T,
  ...props
}: ButtonProps<T>) => {
  const baseStyles =
    'font-bold text-2xl z-40 rounded-lg leading-none transition-all duration-300 bg-black bg-opacity-40 backdrop-blur-sm border-4 border-yellow text-button py-3 px-6 hover:bg-opacity-60';

  const combinedClassName = `${baseStyles} ${className}`;

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
