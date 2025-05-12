import { ButtonHTMLAttributes } from "react";
import classNames from "classnames";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "danger";
}

const Button = ({ variant = "primary", className, ...props }: ButtonProps) => {
  const base =
    "px-6 py-2 rounded text-sm font-semibold transition focus:outline-none";

  const variants = {
    primary: "bg-red-600 hover:bg-red-700 text-white",
    secondary: "bg-white hover:bg-gray-100 text-black",
    danger: "bg-red-800 hover:bg-red-900 text-white",
  };

  return (
    <button
      {...props}
      className={classNames(base, variants[variant], className)}
    />
  );
};

export default Button;
