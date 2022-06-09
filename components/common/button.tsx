type Variant = 'primary' | 'secondary' | 'accent' | 'info' | 'success';

type ButtonProps = {
  variant?: Variant;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  children: JSX.Element | JSX.Element[] | string;
  className?: string;
  [x: string]: unknown;
};

export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  className = 'mx-1',
  ...rest
}: ButtonProps) {
  return (
    <button className={`btn btn-${variant} btn-${size} rounded ` + className} {...rest}>
      {children}
    </button>
  );
}
