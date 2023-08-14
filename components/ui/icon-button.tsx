import { cn } from "@/lib/utils";
import { MouseEventHandler } from "react";

interface IconButtonProps {
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  icon: React.ReactElement;
  className?: string;
}

const IconButton: React.FC<IconButtonProps> = ({
  onClick,
  icon,
  className
}) => {
  return (
    <button onClick={onClick} className={cn(
      `flex items-center justify-center hover:scale-110 rounded-full bg-gray-100
      hover:bg-gray-200 p-2 transition duration-150 ease-in-out`, className
    )}>
      {icon}
    </button>
  );
}

export default IconButton;
