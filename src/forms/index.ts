import { form_speciality } from "./form-speciality";
import { form_basic } from "./formbasic";

const formsData: FormType[] = [form_speciality, form_basic] as const;

export default formsData;
