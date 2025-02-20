import {
  FaceBook_Icon,
  Instagram_Icon,
  TwitterX_Icon,
  WhatsApp_Icon,
  Youtube_Icon,
} from "@/assets/icons/icons";
import { Send } from "lucide-react";

/// thos for cards in the
export const whatsAppData = {
  number: "+201008815007",
  message: "I have a Question",
};

export const socialMediaLinks = [
  {
    name: "whatsapp",
    link: "https://wa.me/201008815007",
    icon: WhatsApp_Icon,
  },
  {
    name: "telegram",
    link: "https://t.me/Dr_Mohamed_Ahmed",
    icon: Send,
  },
  {
    name: "youtube",
    link: "https://www.youtube.com/@Dr.MohamedAhmed",
    icon: Youtube_Icon,
  },
  {
    name: "facebook",
    link: "",
    icon: FaceBook_Icon,
  },
  {
    name: "x",
    link: " ",
    icon: TwitterX_Icon,
  },
  {
    name: "Instagram",
    link: " ",
    icon: Instagram_Icon,
  },
];
