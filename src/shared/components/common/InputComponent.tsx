import { Input } from "../ui/input";
import * as React from "react";
import { cn } from "@/lib/utils";

type InputComponentProps = {
  label?: string;
  className?: string;
  error?: boolean;
  labelBackground?: string;
};

export const InputComponent = React.forwardRef<
  HTMLInputElement,
  InputComponentProps & React.ComponentProps<"input">
>(
  (
    { label, className, onFocus, onBlur, onChange, value, defaultValue , labelBackground = "#FFF", ...props },
    ref
  ) => {
    const [isFocused, setIsFocused] = React.useState(false);
    const [hasValue, setHasValue] = React.useState(() => {
      if (value !== undefined && value !== null) return String(value).length > 0;
      if (defaultValue !== undefined && defaultValue !== null) return String(defaultValue).length > 0;
      return false;
    });

    React.useEffect(() => {
      if (value !== undefined && value !== null) {
        setHasValue(String(value).length > 0);
      }
    }, [value]);

    const handleFocus: React.FocusEventHandler<HTMLInputElement> = (e) => {
      setIsFocused(true);
      onFocus?.(e);
    };

    const handleBlur: React.FocusEventHandler<HTMLInputElement> = (e) => {
      setIsFocused(false);
      onBlur?.(e);
    };

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
      // if uncontrolled, keep track of whether there's a value
      if (value === undefined) {
        setHasValue(e.target.value.length > 0);
      }
      onChange?.(e);
    };

    const mergedClassName = cn("h-full w-full relative", className);

    const labelFloating = isFocused || hasValue;

    return (
      <div className={mergedClassName}>
        <Input
          {...(props as any)}
          ref={ref}
          value={value}
          defaultValue={defaultValue}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
          className={cn("", (props as any).className)}
        />

        {label && (
          <label
            aria-hidden
            className={cn(
              "absolute left-2 transition-all duration-150 pointer-events-none",
              labelFloating ? "-top-[.45rem] left-3" : "top-2.5",
               
            )}
            style={{ fontSize: labelFloating ? 'var(--info-size)' : 'var(--p-size)' , backgroundColor: labelFloating ? labelBackground : 'transparent', padding: labelFloating ? '0 0.25rem' : '0' }}
          >
            {label}
          </label>
        )}
      </div>
    );
  }
);

InputComponent.displayName = "InputComponent";
