import Spinner from "@/components/loading/Spinner";
import { cn } from "@/lib/util/cn";

type IconButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  icon?: React.ElementType; // Make icon optional to support children
  selected?: boolean;
  size?: "xs" | "sm" | "md" | "lg" | "xl"; // Added more sizes
  variant?: "default" | "primary" | "secondary" | "ghost" | "danger"; // Added more variants
  className?: string;
  disabled?: boolean;
  loading?: boolean; // Added loading state
  children?: React.ReactNode; // Added support for children
};

const sizeClasses = {
  xs: "p-1 text-xs", // Extra small
  sm: "p-1.5 text-sm", // Small
  md: "p-2 text-base", // Medium
  lg: "p-3 text-lg", // Large
  xl: "p-4 text-xl", // Extra large
};

const variantClasses = {
  default: "hover:bg-gray-200",
  primary: "hover:bg-primary hover:text-orange-primary",
  secondary: "hover:bg-secondary hover:text-white",
  ghost: "hover:bg-transparent hover:text-gray-700", // Ghost variant
  danger: "hover:bg-red-100 hover:text-red-500 ", // Danger variant
};

const IconButton: React.FC<IconButtonProps> = ({
  icon: Icon,
  onClick,
  selected = false,
  size = "md",
  variant = "default",
  className = "",
  disabled = false,
  loading = false,
  children,
  ...props // Take all the button props
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled || loading} // Disable button when loading or explicitly disabled
      className={cn(
        "flex items-center justify-center rounded-full transition-colors", // Flex for centering
        sizeClasses[size],
        variantClasses[variant],
        selected ? "bg-primary text-orange-primary" : "",
        disabled || loading ? "cursor-not-allowed opacity-50" : "", // Disabled state styles
        className
      )}
      {...props} // Pass all the button props
    >
      {loading ? (
        <Spinner size={size} className="h-4 w-4" /> // Show spinner when loading
      ) : (
        <>
          {Icon && <Icon className={cn("h-4 w-4", children ? "mr-2" : "")} />}{" "}
          {/* Render icon if provided */}
          {children} {/* Render children if provided */}
        </>
      )}
    </button>
  );
};

export default IconButton;
