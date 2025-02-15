"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  countryCode: string;
  phone: string;
  message: string;
}

const countryCodes = [
  { code: "+1", label: "USA/Canada" },
  { code: "+44", label: "UK" },
  { code: "+91", label: "India" },
  { code: "+61", label: "Australia" },
  { code: "+81", label: "Japan" },
  { code: "+49", label: "Germany" },
  { code: "+20", label: "Egypt" },
];

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
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="flex gap-4">
          <div className="w-full">
            <label className="block font-semibold text-sm text-primary mb-1">
              First Name
            </label>
            <input
              type="text"
              {...register("firstName", {
                required: "First name is required",
              })}
              className="w-full p-2 border rounded-lg outline-none "
              placeholder="First Name"
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm">{errors.firstName.message}</p>
            )}
          </div>
          <div className="w-full">
            <label className="block font-semibold text-sm text-primary mb-1">
              Last Name
            </label>
            <input
              type="text"
              {...register("lastName", { required: "Last name is required" })}
              className="w-full p-2 border rounded-lg outline-none"
              placeholder="Last Name"
            />
            {errors.lastName && (
              <p className="text-red-500 text-sm">{errors.lastName.message}</p>
            )}
          </div>
        </div>
        <div>
          <label className="block font-semibold text-sm text-primary mb-1">
            Email
          </label>
          <input
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email address",
              },
            })}
            className="w-full p-2 border rounded-lg outline-none"
            placeholder="You@Company.com"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>
        <div>
          <label className="block font-semibold text-sm text-primary mb-1">
            Phone Number
          </label>
          <div className="flex space-x-2">
            <select
              {...register("countryCode", {
                required: "Country code is required",
              })}
              className="p-2  border rounded-lg outline-none">
              {countryCodes.map((country) => (
                <option key={country.code} value={country.code}>
                  ({country.code})
                </option>
              ))}
            </select>
            <input
              type="tel"
              {...register("phone", {
                required: "Phone number is required",
                pattern: {
                  value: /^[0-9]{7,15}$/,
                  message: "Invalid phone number",
                },
              })}
              placeholder="123456789"
              className="w-full p-2 border rounded-lg"
            />
          </div>
          {errors.countryCode && (
            <p className="text-red-500 text-sm">{errors.countryCode.message}</p>
          )}
          {errors.phone && (
            <p className="text-red-500 text-sm">{errors.phone.message}</p>
          )}
        </div>
        <div>
          <label className="block font-semibold text-sm text-primary mb-1">
            Message
          </label>
          <textarea
            {...register("message", { required: "Message is required" })}
            className="w-full p-2 border rounded-lg outline-none resize-none min-h-[150px]"
            placeholder="Leave us a message..."></textarea>
          {errors.message && (
            <p className="text-red-500 text-sm">{errors.message.message}</p>
          )}
        </div>
        <button
          type="submit"
          className="w-full bg-orange-primary text-white p-2 rounded-lg hover:bg-black link-smooth disabled:opacity-50"
          disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>
      {submitted ? (
        <p className="text-orange-primary text-center mt-3">
          Thank you! Your message has been sent.
        </p>
      ) : (
        ""
      )}
    </div>
  );
}
