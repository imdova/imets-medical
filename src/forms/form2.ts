export const unique_name_2: FormType = {
  name: "Unique_Name-2",
  title: "Course Application 2",
  content:
    "After Submitting you will have access to one of our exclusive courses-2",
  successMessage: "Thank you for submitting our form ",
  submitButtonText: "Submit Now -2",
  fields: [
    {
      name: "email",
      label: "Email Address",
      type: "email", // Use only text, number, email, password, date, select, checkbox
      inputProps: { placeholder: "Your Email Address" },
      required: true,
    },
    {
      name: "name",
      label: "Name",
      type: "text", // Use only text, number, email, password, date, select, checkbox
      inputProps: { placeholder: "Your Name" },
      required: true,
    },
    {
      name: "isApplied",
      label: "did you applied before",
      type: "checkbox", // Use only text, number, email, password, date, select, checkbox
    },
  ],
};
