import { ReactNode } from "react";
import classNames from "classnames";

interface CardProps {
  children: ReactNode;
  className?: string;
}

const Card = ({ children, className }: CardProps) => {
  return (
    <div
      className={classNames(
        "bg-neutral-900 border border-neutral-800 rounded-lg shadow-lg p-6",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Card;
