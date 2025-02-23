import React, { useEffect, useMemo } from "react";
import { Controller, useForm, useWatch } from "react-hook-form";

import {
  renderCheckboxField,
  renderInputField,
  renderMultiTextInputField,
  renderPhoneField,
  renderSelectField,
} from "./renderFields";
import Button from "./buttons/Button";
import { getDefaultValues } from "@/lib/util/form";

const DynamicForm = ({
  onClose,
  onSubmit,
  fields,
  title,
  description,
  initialValues = {},
  children,
  loading,
  error,
  submitButtonText = "Submit",
  submitButtonTextColor = "primary",
  disableCancel,
}: DynamicModalProps) => {
  const { control, handleSubmit, reset, getValues } = useForm({
    defaultValues: getDefaultValues(fields, initialValues),
  });

  // Effect to update form values when initialValues changes
  useEffect(() => {
    if (initialValues.id !== getValues("id")) {
      reset(getDefaultValues(fields, initialValues));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialValues, fields, reset]);

  // Watch all checkbox fields that have hideFieldNames
  const watchFields = useMemo(() => {
    return fields
      .filter((field) => field.type === "checkbox" && field.hideFieldNames)
      .map((field) => field.name);
  }, [fields]);

  const watchedValues = useWatch({
    control,
    name: watchFields,
  });

  // Determine which fields should be hidden
  const hiddenFields = useMemo(() => {
    const hidden = new Set<string>();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    fields.forEach((field, _) => {
      if (field.type === "checkbox" && field.hideFieldNames) {
        const isChecked = watchedValues[watchFields.indexOf(field.name)];
        if (isChecked) {
          field.hideFieldNames.forEach((name) => hidden.add(name));
        }
      }
    });
    return hidden;
  }, [fields, watchedValues, watchFields]);

  const renderField = (field: FieldConfig) => {
    // Skip rendering if field should be hidden
    if (hiddenFields.has(field.name)) {
      return null;
    }

    return (
      <Controller
        key={String(field.name)}
        name={field.name}
        control={control}
        rules={{
          required: field.required
            ? `${field.label || String(field.name)} is required`
            : false,
          ...field.validation,
        }}
        render={({ field: controllerField, fieldState: { error } }) => {
          switch (field.type) {
            case "checkbox":
              return renderCheckboxField(field, controllerField, error);
            case "select":
              return renderSelectField(field, controllerField, error);
            case "phone":
              return renderPhoneField(field, controllerField, error);
            case "multiInput":
              return renderMultiTextInputField(field, controllerField, error);
            default:
              return renderInputField(field, controllerField, error);
          }
        }}
      />
    );
  };
  // col-span-1 col-span-2 col-span-3 col-span-4 col-span-5 col-span-6 col-span-7 col-span-8 col-span-9 col-span-10 col-span-11 col-span-12
  // @sm:col-span-1 @sm:col-span-2 @sm:col-span-3 @sm:col-span-4 @sm:col-span-5 @sm:col-span-6 @sm:col-span-7 @sm:col-span-8 @sm:col-span-9 @sm:col-span-10 @sm:col-span-11 @sm:col-span-12 @md:col-span-1 @md:col-span-2 @md:col-span-3 @md:col-span-4 @md:col-span-5 @md:col-span-6 @md:col-span-7 @md:col-span-8 @md:col-span-9 @md:col-span-10 @md:col-span-11 @md:col-span-12 @lg:col-span-1 @lg:col-span-2 @lg:col-span-3 @lg:col-span-4 @lg:col-span-5 @lg:col-span-6 @lg:col-span-7 @lg:col-span-8 @lg:col-span-9 @lg:col-span-10 @lg:col-span-11 @lg:col-span-12
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      dir="ltr"
      className="font-geistSans w-full space-y-4 text-left"
      noValidate
    >
      <div>
        {title && (
          <h2 className="mb-1 text-2xl font-bold leading-none text-black">
            {title}
          </h2>
        )}
        {description && (
          <p className="text-sm text-neutral-500">{description}</p>
        )}
      </div>

      <div className="mt-1 grid grid-cols-12 gap-4">
        {fields.map((field) => {
          const gridProps = field.gridProps ?? {};
          const xs = gridProps.xs ?? 12;
          const sm = gridProps.sm ?? xs;
          const md = gridProps.md ?? sm;
          const classNames = [
            `col-span-${xs}`,
            sm !== xs ? `@sm:col-span-${sm}` : "",
            md !== sm ? `@md:col-span-${md}` : "",
          ]
            .filter(Boolean)
            .join(" ");
          return (
            <div key={String(field.name)} className={classNames}>
              {renderField(field)}
            </div>
          );
        })}
      </div>

      {children}

      {error && <p className="text-sm text-red-500">{error}</p>}

      <div className="flex items-center justify-end space-x-4">
        {!disableCancel && (
          <Button
            type="button"
            color="primary"
            variant="outlined"
            onClick={onClose}
          >
            Cancel
          </Button>
        )}
        <Button
          loading={loading}
          color={submitButtonTextColor}
          type="submit"
          variant="contained"
        >
          {submitButtonText}
        </Button>
      </div>
    </form>
  );
};

export default DynamicForm;
