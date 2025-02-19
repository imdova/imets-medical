interface CustomInputProps
  extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  label?: string;
  error?: string | boolean;
  helperText?: string;
  multiline?: boolean;
  rows?: number;
}

interface Option {
  value: string;
  label: string;
}
type StickyCTAType = {
  buttonText: string;
  buttonUrl?: string | null;
  formId?: string | null;
};
type FieldType =
  | "text"
  | "number"
  | "phone"
  | "email"
  | "password"
  | "date"
  | "select"
  | "checkbox"
  | "multiInput";

interface FieldConfig {
  name: string;
  type: FieldType;
  label?: string;
  required?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  validation?: Record<string, any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component?: React.ComponentType<any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  componentProps?: Record<string, any>;
  hideFieldNames?: string[];
  options?: Option[];
  inputProps?: CustomInputProps;
  gridProps?: {
    xs?: number;
    sm?: number;
    md?: number;
  };
}

interface DynamicModalProps {
  onClose?: () => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onSubmit: (data: any) => void;
  fields: FieldConfig[];
  title?: string;
  description?: string;
  initialValues?: Partial<T>;
  children?: React.ReactNode;
  loading?: boolean;
  error?: string;
  submitButtonText?: string;
  submitButtonTextColor?: ButtonColor;
  disableCancel?: boolean;
  hideButtons?: boolean;
}
interface FormType {
  name: string;
  title: string;
  content: string;
  successMessage: string;
  submitButtonText: string;
  fields: FieldConfig[]; // Use a more specific type if you know the structure of `fields`
}
