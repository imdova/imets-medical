// header
type LinkItemType = {
  title: string;
  arTitle?: string;
  url: string;
  icon?: React.ElementType; // Add an icon property
  subLinks?: LinkItemType[];
};

interface Result<T = void> {
  success: boolean;
  message: string;
  data?: T;
}

/// buttons

type ButtonVariant = "contained" | "outlined";
type ButtonColor = "primary" | "warning" | "success" | "error";

// meta data
type MetaPageType = "default" | "about" | "blog" | "courses";

/// thank you page
interface ThankYouData {
  title: string;
  subtitle?: string;
  content?: string;
  WhatsAppNumber: string;
  whatsappMessage: string;
  telegramLink: string;
  youtubeLink: string;
  freeCoursesLink: string;
}

type CategoryType = {
  name: string;
  slug: string;
  metaTags: {
    title: string;
    description: string;
    keywords: string;
  };
  htmlInput: string;
};

///
type Languages = "en" | "ar";
type FreeCoursesContentType = {
  [key: string]: {
    [key in Languages]: string;
  };
};
