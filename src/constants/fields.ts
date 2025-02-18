export const formFields: FieldConfig[] = [
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
      { label: "Doctors", value: "Doctors" },
      { label: "Dentists", value: "Dentists" },
      { label: "Pharmacists", value: "Pharmacists" },
      { label: "Nurses", value: "Nurses" },
      { label: "Technicians", value: "Technicians" },
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
];
