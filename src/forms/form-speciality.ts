export const form_speciality: FormType = {
  name: "form-speciality",
  title: "Course Application",
  content:
    "After Submitting you will have access to one of our exclusive courses",
  successMessage: "Thank you for submitting our form ",
  submitButtonText: "Submit Now",
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
    {
      name: "speciality",
      label: "Specialty",
      type: "select", // Use only text, number, email, password, date, select, checkbox
      options: [
        { label: "Doctor", value: "Doctor" },
        { label: "Dentist", value: "Dentist" },
        { label: "Pharmacist", value: "Pharmacist" },
        { label: "Nurse", value: "Nurse" },
        { label: "Technician", value: "Technician" },
        { label: "Science", value: "Science" },
        { label: "Others", value: "Others" },
      ],
      inputProps: { placeholder: "Select Your specialty" },
      required: true,
    },
    // {
    //   name: "isApplied",
    //   label: "did you applied before",
    //   type: "checkbox", // Use only text, number, email, password, date, select, checkbox
    // },
    // {
    //   name: "program",
    //   label: "Enter Your Specialty",
    //   type: "select", // Use only text, number, email, password, date, select, checkbox
    //   options: [
    //     { label: "doctors", value: "doctors" },
    //     { label: "dentist", value: "dentists" },
    //     { label: "nurses", value: "nurses" },
    //   ],
    //   inputProps: { placeholder: "Your specialty" },
    //   required: true,
    // },
  ],
};
