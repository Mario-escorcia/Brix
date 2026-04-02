import { cn } from "@/lib/utils";

type ButtonProps = {
  label: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  icon?: React.ReactNode;
};
export const ButtonComponet = ({
  label = "",
  onClick,
  className,
  icon,
}: ButtonProps) => {
  return (
    <button
      className={cn(
        "w-full  rounded-(--button-radius) border  p-(--button-padding) cursor-pointer flex items-center min-h-6 min-w-6 h-(--button-height) justify-center gap-(--gap)",
        className,
      )}
      style={{ fontSize: "var(--p-size)", border: "var(--border-color)" }}
      onClick={(e) => {
        onClick(e);
      }}
    >
      {icon && icon}
      {label}
    </button>
  );
};
