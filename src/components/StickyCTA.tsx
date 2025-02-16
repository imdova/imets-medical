"use client";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { useNotification } from "./UI/NotificationComponent";
import { sendDataToMailerLite } from "@/lib/mailerlite/mailer_lite";
import Modal from "./UI/Modal";
import DynamicForm from "./Forms/dynamicForm";
import { formFields } from "@/constants/fields";
import Button from "./Forms/buttons/Button";

const StickyCTA: React.FC<{ groupId: string; redirect: string }> = ({
  groupId,
  redirect,
}) => {
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
    <React.Fragment>
      <div
        className={`font-watad sticky bottom-2 left-2 right-2 z-30 mx-2 mt-8 flex items-center justify-end rounded-2xl border-2 border-dashed border-yellow-500 bg-white p-4 backdrop-blur-sm transition-transform md:justify-end`}
      >
        <p className="text-xl text-primary">خصم 50% لفتره محدوده</p>
        <button
          onClick={open}
          className="flex items-center gap-2 border-0 px-4 py-2 text-2xl font-bold text-primary"
        >
          <ChevronLeft className="h-6 w-6" /> سجل الان
        </button>
      </div>
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
    </React.Fragment>
  );
};

export default StickyCTA;
