"use client";

import { useForm, Controller } from "react-hook-form";
import { Mail } from "lucide-react";
import { sendDataToMailerLite } from "@/lib/mailerlite/mailer_lite";
import { Suspense, useState } from "react";
import { useNotification } from "./UI/NotificationComponent";
import { subscribeData } from "@/constants/subscrib";
import Button from "./Forms/buttons/Button";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { createUrl } from "@/lib/util/general";

const SubscribeForm: React.FC = () => {
  const searchParams = useSearchParams();
  const isSubscribed = searchParams.get("sub") === "true" ? true : false;
  const router = useRouter();
  const pathname = usePathname();

  const [submitting, setIsSubmitting] = useState(false);
  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: "", // Default value for the search input
    },
  });
  const { showNotification } = useNotification();

  const onSubmit = async (data: { email: string }) => {
    setIsSubmitting(true);
    try {
      const response = await sendDataToMailerLite(data, subscribeData.groupId);
      if (response.success) {
        showNotification("success", "your data submitted successfully ");
        const newParams = new URLSearchParams(searchParams.toString());
        newParams.set("sub", "true");
        router.push(createUrl(pathname, newParams), { scroll: false });
      } else {
        showNotification("error", "sending data");
      }
    } catch {
      showNotification("error", "sending data");
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetSub = () => {
    const newParams = new URLSearchParams(searchParams.toString());
    newParams.delete("sub");
    router.push(createUrl(pathname, newParams), { scroll: false });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex items-center w-[300px] lg:w-[400px] bg-gray-100 rounded-2xl shadow-md p-1.5 transition-all duration-150 ease-in-out hover:scale-105 hover:shadow-lg">
        <div className="pl-2.5 flex items-center pointer-events-none">
          <Mail className="text-orange-primary mx-2" size={16} />
        </div>
        <Controller
          name="email"
          control={control}
          rules={{
            required: "Email is required",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Invalid email address",
            },
          }}
          render={({ field, fieldState: { error } }) => (
            <>
              <input
                {...field}
                onChange={(e) => {
                  resetSub();
                  field.onChange(e);
                }}
                type="email"
                className={`w-full py-3 text-base text-gray-700 bg-transparent rounded-lg focus:outline-none ${
                  error ? "border-red-500" : ""
                }`}
                placeholder="Email Address"
              />
            </>
          )}
        />
        <Button
          variant="contained"
          color={isSubscribed ? "success" : "primary"}
          disabled={isSubscribed}
          className="rounded-xl py-3"
          type="submit"
        >
          {isSubscribed
            ? "Success"
            : submitting
            ? "Subscribing..."
            : "Subscribe"}
        </Button>
      </div>
    </form>
  );
};

const SearchFild: React.FC = () => {
  return (
    <Suspense>
      <SubscribeForm />
    </Suspense>
  );
};

export default SearchFild;
