"use client";
import Button from "@/components/Forms/buttons/Button";
import DynamicForm from "@/components/Forms/dynamicForm";
import Modal from "@/components/UI/Modal";
import { useNotification } from "@/components/UI/NotificationComponent";
import { FreeEventLandingPageType } from "@/constants/events-landing-page.data";
import formsData from "@/forms";
import useGeoInfo from "@/hooks/useGeoInfo";
import { sendDataToMailerLite } from "@/lib/mailerlite/mailer_lite";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const FreeEventLandingApply: React.FC<
  FreeEventLandingPageType & { className?: string; lang: Languages }
> = ({ button, className, slug, lang }) => {
  const { data: geoDat } = useGeoInfo();

  const formData =
    formsData.find((x) => x.name === button.formData.name) || formsData[0];

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
    const groupId =
      button.formData.groupId[geoDat.country_code2] ||
      button.formData.groupId.other;
    try {
      // console.log("🚀 ~ onSubmit ~ data:", data);
      // console.log("🚀 ~ onSubmit ~ groupId:", groupId);
      const response = await sendDataToMailerLite(data, groupId);
      // console.log("🚀 ~ onSubmit ~ response:", response);

      if (response.success) {
        // onClose();
        if (button.formData.redirectUrl) {
          router.push(`${button.formData.redirectUrl}?q=${slug}`);
        } else {
          showNotification("success", formData.successMessage);
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
        {button.label[lang]}
      </Button>
    </React.Fragment>
  );
};

export default FreeEventLandingApply;
