import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'store';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  icon,
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center font-bold rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary: "bg-brand-500 hover:bg-brand-600 text-white shadow-lg hover:shadow-xl shadow-brand-500/30 focus:ring-brand-500",
    secondary: "bg-gray-900 hover:bg-gray-800 text-white shadow-lg hover:shadow-xl focus:ring-gray-900",
    outline: "border-2 border-brand-500 text-brand-600 hover:bg-brand-50 focus:ring-brand-500",
    ghost: "text-gray-600 hover:text-brand-600 hover:bg-brand-50 focus:ring-brand-500",
    store: "bg-gray-900 text-white border border-gray-700 hover:border-gray-500 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-shine" />
      <span className="relative flex items-center gap-2">
        {children}
        {icon && <span className="mr-2 rtl:mr-0 rtl:ml-2">{icon}</span>}
      </span>
    </button>
  );
};

export default Button;