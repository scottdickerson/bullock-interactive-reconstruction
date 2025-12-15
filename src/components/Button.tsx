import { type ComponentProps, type ReactNode } from 'react';

/**
 * Base props for the Button component
 */
type ButtonPropsBase = {
  /** The content to display inside the button */
  children: ReactNode;
  /** Additional CSS classes to apply to the button */
  className?: string;
};

/**
 * Props for the Button component
 * @template T - Either 'button' or 'a' to determine the rendered element type
 */
type ButtonProps<T extends 'button' | 'a' = 'button'> = ButtonPropsBase &
  (T extends 'a'
    ? ComponentProps<'a'> & { as: T; href: string }
    : ComponentProps<'button'> & { as?: T });

/**
 * A versatile button component that can render as either a button or anchor element.
 * Features a consistent yellow border style with backdrop blur effect.
 *
 * @template T - The element type ('button' or 'a')
 * @param props - Button component props
 * @returns A button or anchor element with consistent styling
 */
const Button = <T extends 'button' | 'a' = 'button'>({
  children,
  className = '',
  as = 'button' as T,
  ...props
}: ButtonProps<T>) => {
  const baseStyles =
    'font-bold text-2xl z-40 rounded-lg leading-none transition-all duration-300 bg-[rgb(0,0,0,0.4)] backdrop-blur-sm border-4 border-yellow text-button py-3 px-6 hover:bg-opacity-60 outline-none';

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
