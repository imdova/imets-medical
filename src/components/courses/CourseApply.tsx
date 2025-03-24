"use client";

import { useState } from "react";
import DynamicForm from "../Forms/dynamicForm";
import Modal from "../UI/Modal";
import { useNotification } from "../UI/NotificationComponent";
import { sendDataToMailerLite } from "@/lib/mailerlite/mailer_lite";
import { useRouter } from "next/navigation";
import Button from "../Forms/buttons/Button";
import formsData from "@/forms";

type Form = {
  redirect: string;
  groupId: string;
  name: string;
  className?: string;
  children: React.ReactNode;
};
const CourseApply: React.FC<Form> = ({
  groupId,
  redirect,
  name,
  children,
  className,
}) => {
  const router = useRouter();
  const formData = formsData.find((x) => x.name === name) || formsData[0];
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
        showNotification("success", formData.successMessage);
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
            fields={formData.fields}
            onClose={onClose}
            onSubmit={onSubmit}
            loading={loading}
            error={error}
            title={formData.title}
            description={formData.content}
            submitButtonText={formData.submitButtonText}
          />
        </Modal>
      )}
      <Button onClick={open} className={className}>
        {children}
      </Button>
    </>
  );
};

export default CourseApply;
