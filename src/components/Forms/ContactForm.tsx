"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import CustomInput from "./inputs/CustomInput";
import PhoneNumberInput from "./inputs/phoneNumberInput";
import Button from "./buttons/Button";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const [submitted, setSubmitted] = useState(false);

  const onSubmit = async (data: FormData) => {
    console.log(data);
    setSubmitted(true);
  };

  return (
    <div className="p-6">
      <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4">
        <div className="flex gap-4">
          <CustomInput
            type="text"
            {...register("firstName", {
              required: "First name is required",
            })}
            label="First Name"
            error={errors.firstName?.message}
            helperText={errors.firstName?.message}
            placeholder="First Name"
          />
          <CustomInput
            type="text"
            {...register("lastName", { required: "Last name is required" })}
            label="Last Name"
            error={errors.lastName?.message}
            helperText={errors.lastName?.message}
            placeholder="Last Name"
          />
        </div>
        <div>
          <CustomInput
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email address",
              },
            })}
            label="Email"
            error={errors.email?.message}
            helperText={errors.email?.message}
            placeholder="You@Company.com"
          />
        </div>
        <div>
          <PhoneNumberInput
            {...register("phone", {
              required: "Phone number is required",
            })}
            type="tel"
            label="Phone Number"
            error={errors.phone?.message}
            helperText={errors.phone?.message}
            placeholder="123456789"
          />
        </div>
        <div>
          <CustomInput
            type="text"
            multiline
            rows={4}
            {...register("message", { required: "Message is required" })}
            label="Message"
            error={errors.message?.message}
            helperText={errors.message?.message}
            placeholder="Leave us a message..."
          />
        </div>
        <Button
          loading={isSubmitting}
          type="submit"
          className="w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>
      </form>
    </div>
  );
}
