import { Phone } from "lucide-react";
import Image from "next/image";
import React from "react";

interface WhatsAppButtonProps {
  phoneNumber: string;
  message: string;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  phoneNumber,
  message,
}) => {
  // Create the WhatsApp URL with the encoded message
  const cleanedNumber = phoneNumber.replace(/\D/g, "");
  const encodedMessage = encodeURIComponent(message);

  // const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${cleanedNumber}&text=${encodedMessage}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center text-green-500"
    >
      <Image
        width={24}
        height={24}
        src="/whatsapp.svg"
        alt="whats app"
        className="mr-2"
      />
    </a>
  );
};

export default WhatsAppButton;
