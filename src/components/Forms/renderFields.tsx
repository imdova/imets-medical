/* eslint-disable @typescript-eslint/no-explicit-any */
import { FieldError } from "react-hook-form";
import CustomSelect from "./inputs/CustomSelect";
import PhoneNumberInput from "./inputs/phoneNumberInput";
import CustomInput from "./inputs/CustomInput";
import MultiTextInput from "./inputs/MultiTextInput";

export const renderCheckboxField = (
  field: FieldConfig,
  controllerField: any,
  error?: FieldError
) => (
  <div className="flex items-center">
    <input
      type="checkbox"
      {...controllerField}
      checked={!!controllerField.value}
      onChange={(e) => controllerField.onChange(e)}
      className="h-5 w-5 rounded border-gray-300 text-orange-primary focus:ring-orange-primary"
    />
    <label className="ml-2 block text-sm text-gray-900">
      {field.label || ""}
    </label>
    {error && <p className="mt-1 text-xs text-red-600">{error.message}</p>}
  </div>
);

export const renderSelectField = (
  field: FieldConfig,
  controllerField: any,
  error?: FieldError
) => (
  <div className="w-full">
    <CustomSelect
      {...controllerField}
      label={field.label}
      options={field.options || []}
      placeholder={field.inputProps?.placeholder || "Select"}
      error={error?.message}
      helperText={error?.message}
    />
  </div>
);

export const renderPhoneField = (
  field: FieldConfig,
  controllerField: any,
  error?: FieldError
) => (
  <div className="w-full">
    <PhoneNumberInput
      {...controllerField}
      {...field.inputProps}
      type="tel"
      label={field.label}
      error={error?.message}
      helperText={error?.message}
    />
  </div>
);

export const renderInputField = (
  field: FieldConfig,
  controllerField: any,
  error?: FieldError
) => (
  <div className="w-full">
    <CustomInput
      {...controllerField}
      {...field.inputProps}
      type={field.type}
      label={field.label}
      error={error?.message}
      helperText={error?.message}
    />
  </div>
);
export const renderMultiTextInputField = (
  field: FieldConfig,
  controllerField: any,
  error?: FieldError
) => (
  <div className="w-full">
    <MultiTextInput
      {...controllerField}
      {...field.inputProps}
      onChange={(items) => controllerField.onChange(items)}
    />
    {error && <p className="mt-1 text-xs text-red-600">{error.message}</p>}
  </div>
);
