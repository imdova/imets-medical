"use client";

import { useState } from "react";
import DynamicForm from "../Forms/dynamicForm";
import Modal from "../UI/Modal";
import { formFields } from "@/constants/fields";
import { useNotification } from "../UI/NotificationComponent";
import { sendDataToMailerLite } from "@/lib/mailerlite/mailer_lite";
import { useRouter } from "next/navigation";

type Form = {
  redirect: string;
  groupId: string;
};
const CourseApply: React.FC<Form> = ({ groupId, redirect }) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { showNotification } = useNotification();

  const open = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);

  const onSubmit = async (data: Record<string, unknown>) => {
    setLoading(true);
    setError("");
    try {
      const response = await sendDataToMailerLite(data, groupId);

      if (response.success) {
        showNotification("success", "your data submitted successfully ");
        // onClose();
        if (redirect) {
          router.push(redirect);
        }
      } else {
        setError("Failed to send your data ");
        showNotification("error", "sending data");
      }
    } catch {
      setError("Failed to send your data ");
      showNotification("error", "sending data");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {isOpen && (
        <Modal onClose={onClose} isOpen={isOpen}>
          <DynamicForm
            fields={formFields}
            onClose={onClose}
            onSubmit={onSubmit}
            loading={loading}
            error={error}
            // title={formData.title}
            // description={formData.content}
            // submitButtonText={formData.submitButtonText}
          />
        </Modal>
      )}
      <button
        onClick={open}
        className="block m-auto px-6 py-2 bg-orange-primary text-white rounded-3xl hover:bg-black link-smooth"
      >
        Apply Now
      </button>
    </>
  );
};

export default CourseApply;
