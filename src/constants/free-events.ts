export interface FreeEvent {
  title: string;
  content: string;
  slug: string;
  whatsApp: {
    title: string;
    content: string;
    url: string;
  };
}
export const freeEvents: FreeEvent[] = [
  {
    title: "Thank You for Registration!",
    content: "Join WhatsApp Group to get Zoom Link for FREE!",
    slug: "/",
    whatsApp: {
      title: "Join Our WhatsApp Group",
      content: "Click here to Join Our Group on WhatsApp.",
      url: "https://chat.whatsapp.com/IQHKytATWYwIuEnngMIaLI",
    },
  },
//   {
//     title:
//       "Thank You for Registration! Join WhatsApp Group to get Zoom Link for FREE!",
//     content: "Join WhatsApp Group to get Zoom Link for FREE!",
//     slug: "the-best-event-ever",
//     whatsApp: {
//       title: "Join Our WhatsApp Group",
//       content: "Click here to Join Our Group on WhatsApp.",
//       url: "https://chat.whatsapp.com/IQHKytATWYwIuEnngMIaLI",
//     },
//   },
];
