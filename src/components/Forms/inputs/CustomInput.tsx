import React, { forwardRef } from "react";
import { Info } from "lucide-react";

const CustomInput = forwardRef<
  HTMLInputElement | HTMLTextAreaElement,
  CustomInputProps
>(
  (
    {
      label,
      error,
      helperText,
      className,
      multiline = false,
      rows = 3,
      ...props
    },
    ref,
  ) => {
    const inputStyles = `w-full  rounded-lg border px-3 py-2 hover:border-orange-primary focus:outline-none focus:ring-1 focus:ring-orange-primary ${
      error
        ? "border-red-500 text-red-900 focus:ring-red-500 pr-8"
        : "border-gray-200 focus:border-orange-primary focus:ring-orange-primary"
    } ${className || ""} ${multiline ? "resize-none scroll-bar-minimal" : "h-[38px]"}`;

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={props.id}
            className="mb-1 block text-sm font-medium text-gray-700"
          >
            {label}
          </label>
        )}
        <div className="relative">
          {multiline ? (
            <textarea
              ref={ref as React.Ref<HTMLTextAreaElement>}
              className={inputStyles}
              rows={rows}
              {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
            />
          ) : (
            <input
              ref={ref as React.Ref<HTMLInputElement>}
              className={inputStyles}
              {...(props as React.InputHTMLAttributes<HTMLInputElement>)}
            />
          )}
          {error && (
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
              <Info className="h-5 w-5 text-red-500" />
            </div>
          )}
        </div>
        {(helperText || error) && (
          <p
            className={`mt-1 text-xs ${
              error ? "text-red-600" : "text-gray-500"
            }`}
          >
            {helperText}
          </p>
        )}
      </div>
    );
  },
);

CustomInput.displayName = "CustomInput";

export default CustomInput;
