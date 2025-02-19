export const form_basic: FormType = {
  name: "form-basic",
  title: "Course Application 2",
  content:
    "After Submitting you will have access to one of our exclusive courses-2",
  successMessage: "Thank you for submitting our form ",
  submitButtonText: "Submit Now -2",
  fields: [
    {
      name: "name",
      label: "Name",
      type: "text", // Use only text, number, email, password, date, select, checkbox
      inputProps: { placeholder: "Your Name" },
      required: true,
    },
    {
      name: "email",
      label: "Email Address",
      type: "email", // Use only text, number, email, password, date, select, checkbox
      inputProps: { placeholder: "Your Email Address" },
      required: true,
    },
   
    {
      name: "phone",
      label: "Phone Number",
      type: "phone", // Use only text, number, email, password, date, select, checkbox
      inputProps: { placeholder: "Your Phone Number" },
      required: true,
    },
  ],
};
