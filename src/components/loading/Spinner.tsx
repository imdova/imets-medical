import { cn } from "@/lib/util/cn";

type SpinnerProps = {
  className?: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl"; // Optional size prop
};

const Spinner: React.FC<SpinnerProps> = ({ className, size = "md" }) => {
  const sizeClasses = {
    xs: "h-3 w-3", // Extra small
    sm: "h-4 w-4", // Small
    md: "h-6 w-6", // Medium
    lg: "h-8 w-8", // Large
    xl: "h-10 w-10", // Extra large
  };

  return (
    <svg
      className={cn("animate-spin", sizeClasses[size], className)}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      ></circle>
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      ></path>
    </svg>
  );
};

export default Spinner;
