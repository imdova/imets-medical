export type FreeEventLandingPageType = {
  title: {
    [key in Languages]: string;
  };
  description: {
    [key in Languages]: string;
  };
  videoUrl: string;
  imageUrl: string;
  button: {
    label: {
      [key in Languages]: string;
    };
    formData: {
      name: string;
      groupId: Record<string, string>;
      redirectUrl: string;
    };
  };
  slug: string;
  freeEventsData: FreeEvent;
};

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

export const freeEventLandingPagesData: FreeEventLandingPageType[] = [
  {
    title: {
      en: "Advance Your Career in Healthcare Quality ",
      ar: "*طور مهاراتك في جودة الرعاية الصحية *سجّل الآن مجانًا!",
    },
    slug: "apply-cphq-free",
    description: {
      en: `Ready to elevate your expertise in healthcare quality and patient safety? Join our FREE comprehensive course and gain essential skills to enhance healthcare standards and drive excellence in patient care`,
      ar: "لا تفوّت هذه الفرصة لتطوير مهاراتك وتعزيز فرصك المهنية. سجّل الآن وابدأ رحلتك نحو التميز في جودة الرعاية الصحية!",
    },
    videoUrl: "",
    imageUrl: "/images/free/cphqfree.png",
    button: {
      label: {
        ar: "انضم الي المحاضرة المجانية من هنا",
        en: "Take me to FREE Lecture NOW !",
      },
      formData: {
        name: "form-speciality",
        groupId: { EG: "112984734", other: "112984734" },
        redirectUrl: "/free-events",
      },
    }, // redirect to
    freeEventsData: {
      title: "Thank You for Registration!",
      content: "Join WhatsApp Group to get Zoom Link for FREE!",
      slug: "/",
      whatsApp: {
        title: "Join Our WhatsApp Group",
        content: "Click here to Join Our Group on WhatsApp.",
        url: "https://chat.whatsapp.com/IQHKytATWYwIuEnngMIaLI",
      },
    },
  },
  {
    title: {
      en: "Advance Your Career in Infection Control *Enroll for FREE Today!*",
      ar: "*طور مهاراتك في مجال مكافحة العدوي *سجّل الآن مجانًا!",
    },
    slug: "apply-cic-free",
    description: {
      en: `Ready to elevate your expertise in infection prevention and control? Join our FREE comprehensive course and gain essential skills to enhance healthcare safety, reduce infection risks, and protect patients and staff.!`,
      ar: "تهانينا الحارة! طلبك للالتحاق بـ [Course Name] في IMETS *الطبية* تم تثبيته، ترقب تواصلنا لنرفع معًا مستوى طموحك في عالم الرعاية الصحية!",
    },
    videoUrl: "",
    imageUrl: "/images/free/cicfree.png",
    button: {
      label: {
        ar: "انضم الي المحاضرة المجانية من هنا",
        en: "Take me to FREE Lecture NOW !",
      },
      formData: {
        name: "form-speciality",
        groupId: { EG: "112984734", other: "112984734" },
        redirectUrl: "/free-events",
      },
    },
    freeEventsData: {
      title: "Thank You for Registration!",
      content: "Join WhatsApp Group to get Zoom Link for FREE!",
      slug: "/",
      whatsApp: {
        title: "Join Our WhatsApp Group",
        content: "Click here to Join Our Group on WhatsApp.",
        url: "https://chat.whatsapp.com/IQHKytATWYwIuEnngMIaLI",
      },
    },
  },
  {
    title: {
      en: "Advance Your Career in Healthcare Marketing *Enroll for FREE Today!*",
      ar: "*طور مهاراتك في مجال التسويق الطبي *سجّل الآن مجانًا!",
    },
    slug: "apply-marketing-free",
    description: {
      en: `Ready to elevate your expertise in healthcare marketing? Join our FREE comprehensive course and gain essential skills to create impactful campaigns, engage patients, and drive growth for healthcare organizations.`,
      ar: "تهانينا الحارة! طلبك للالتحاق بـ [Course Name] في IMETS *الطبية* تم تثبيته، ترقب تواصلنا لنرفع معًا مستوى طموحك في عالم الرعاية الصحية!",
    },
    videoUrl: "",
    imageUrl: "/images/mktfree.jpg",
    button: {
      label: {
        ar: "انضم الي المحاضرة المجانية من هنا",
        en: "Take me to FREE Lecture NOW !",
      },
      formData: {
        name: "form-speciality",
        groupId: { EG: "112984734", other: "112984734" },
        redirectUrl: "/free-events",
      },
    },
    freeEventsData: {
      title: "Thank You for Registration!",
      content: "Join WhatsApp Group to get Zoom Link for FREE!",
      slug: "/",
      whatsApp: {
        title: "Join Our WhatsApp Group",
        content: "Click here to Join Our Group on WhatsApp.",
        url: "https://chat.whatsapp.com/IQHKytATWYwIuEnngMIaLI",
      },
    },
  },
  {
    title: {
      en: "Advance Your Career in Healthcare HR Management *Enroll for FREE Today!*",
      ar: "*طور مهاراتك في مجال ادارة الموارد البشرية في القطاعالصحي *سجّل الآن مجانًا!",
    },
    slug: "apply-hr-free",
    description: {
      en: `Ready to elevate your expertise in healthcare human resources? Join our FREE comprehensive course and gain essential skills to manage healthcare teams, improve employee engagement, and drive organizational success.`,
      ar: "تهانينا الحارة! طلبك للالتحاق بـ [Course Name] في IMETS *الطبية* تم تثبيته، ترقب تواصلنا لنرفع معًا مستوى طموحك في عالم الرعاية الصحية!",
    },
    videoUrl: "",
    imageUrl: "/images/hrfree.jpg",
    button: {
      label: {
        ar: "انضم الي المحاضرة المجانية من هنا",
        en: "Take me to FREE Lecture NOW !",
      },
      formData: {
        name: "form-speciality",
        groupId: { EG: "112984734", other: "112984734" },
        redirectUrl: "/free-events",
      },
    },
    freeEventsData: {
      title: "Thank You for Registration!",
      content: "Join WhatsApp Group to get Zoom Link for FREE!",
      slug: "/",
      whatsApp: {
        title: "Join Our WhatsApp Group",
        content: "Click here to Join Our Group on WhatsApp.",
        url: "https://chat.whatsapp.com/IQHKytATWYwIuEnngMIaLI",
      },
    },
  },
  {
    title: {
      en: "Advance Your Career in Healthcare Supply Chain Management *Enroll for FREE Today!*",
      ar: "*طور مهاراتك في مجال ادارة سلاسل الامداد *سجّل الآن مجانًا!",
    },
    slug: "apply-supplychain-free",
    description: {
      en: `Ready to elevate your expertise in healthcare supply chain management? Join our FREE comprehensive course and gain essential skills to optimize supply chains, reduce costs, and ensure the seamless delivery of medical supplies and equipment.!`,
      ar: "تهانينا الحارة! طلبك للالتحاق بـ [Course Name] في IMETS *الطبية* تم تثبيته، ترقب تواصلنا لنرفع معًا مستوى طموحك في عالم الرعاية الصحية!",
    },
    videoUrl: "",
    imageUrl: "/images/supplyfree.jpg",
    button: {
      label: {
        ar: "انضم الي المحاضرة المجانية من هنا",
        en: "Take me to FREE Lecture NOW !",
      },
      formData: {
        name: "form-speciality",
        groupId: { EG: "112984734", other: "112984734" },
        redirectUrl: "/free-events",
      },
    },
    freeEventsData: {
      title: "Thank You for Registration!",
      content: "Join WhatsApp Group to get Zoom Link for FREE!",
      slug: "/",
      whatsApp: {
        title: "Join Our WhatsApp Group",
        content: "Click here to Join Our Group on WhatsApp.",
        url: "https://chat.whatsapp.com/IQHKytATWYwIuEnngMIaLI",
      },
    },
  },
  {
    title: {
      en: "Advance Your Career in Healthcare Strategic Management *Enroll for FREE Today!*",
      ar: "*طور مهاراتك في مجال الادارة الاستراتيجية في القطاع الصحي *سجّل الآن مجانًا!",
    },
    slug: "apply-strategic-free",
    description: {
      en: `Ready to elevate your expertise in healthcare leadership and strategy? Join our FREE comprehensive course and gain essential skills to develop and implement strategies that improve patient outcomes and drive organizational success.!`,
      ar: "تهانينا الحارة! طلبك للالتحاق بـ [Course Name] في IMETS *الطبية* تم تثبيته، ترقب تواصلنا لنرفع معًا مستوى طموحك في عالم الرعاية الصحية!",
    },
    videoUrl: "",
    imageUrl: "/images/strategicfree.jpg",
    button: {
      label: {
        ar: "انضم الي المحاضرة المجانية من هنا",
        en: "Take me to FREE Lecture NOW !",
      },
      formData: {
        name: "form-speciality",
        groupId: { EG: "112984734", other: "112984734" },
        redirectUrl: "/free-events",
      },
    },
    freeEventsData: {
      title: "Thank You for Registration!",
      content: "Join WhatsApp Group to get Zoom Link for FREE!",
      slug: "/",
      whatsApp: {
        title: "Join Our WhatsApp Group",
        content: "Click here to Join Our Group on WhatsApp.",
        url: "https://chat.whatsapp.com/IQHKytATWYwIuEnngMIaLI",
      },
    },
  },
  {
    title: {
      en: "Advance Your Career in Healthcare Quality Management *Enroll for FREE Today!*",
      ar: "*طور مهاراتك في مجال جودة الرعاية الصحية *سجّل الآن مجانًا!",
    },
    slug: "apply-quality-free",
    description: {
      en: `Ready to elevate your expertise in healthcare quality and patient safety? Join our FREE comprehensive course and gain essential skills to enhance healthcare standards and drive excellence in patient care!`,
      ar: "تهانينا الحارة! طلبك للالتحاق بـ [Course Name] في IMETS *الطبية* تم تثبيته، ترقب تواصلنا لنرفع معًا مستوى طموحك في عالم الرعاية الصحية!",
    },
    videoUrl: "",
    imageUrl: "/images/qualityfree.jpg",
    button: {
      label: {
        ar: "انضم الي المحاضرة المجانية من هنا",
        en: "Take me to FREE Lecture NOW !",
      },
      formData: {
        name: "form-speciality",
        groupId: { EG: "112984734", other: "112984734" },
        redirectUrl: "/free-events",
      },
    },
    freeEventsData: {
      title: "Thank You for Registration!",
      content: "Join WhatsApp Group to get Zoom Link for FREE!",
      slug: "/",
      whatsApp: {
        title: "Join Our WhatsApp Group",
        content: "Click here to Join Our Group on WhatsApp.",
        url: "https://chat.whatsapp.com/IQHKytATWYwIuEnngMIaLI",
      },
    },
  },
  {
    title: {
      en: "Advance Your Career in Infection Control *Enroll for FREE Today!*",
      ar: "*طور مهاراتك في مجال جودة الرعاية الصحية *سجّل الآن مجانًا!",
    },
    slug: "apply-ic-free",
    description: {
      en: `Ready to elevate your expertise in infection prevention and control? Join our FREE comprehensive course and gain essential skills to enhance healthcare safety, reduce infection risks, and protect patients and staff.!`,
      ar: "تهانينا الحارة! طلبك للالتحاق بـ [Course Name] في IMETS *الطبية* تم تثبيته، ترقب تواصلنا لنرفع معًا مستوى طموحك في عالم الرعاية الصحية!",
    },
    videoUrl: "",
    imageUrl: "/images/icfree.jpg",
    button: {
      label: {
        ar: "انضم الي المحاضرة المجانية من هنا",
        en: "Take me to FREE Lecture NOW !",
      },
      formData: {
        name: "form-speciality",
        groupId: { EG: "112984734", other: "112984734" },
        redirectUrl: "/free-events",
      },
    },
    freeEventsData: {
      title: "Thank You for Registration!",
      content: "Join WhatsApp Group to get Zoom Link for FREE!",
      slug: "/",
      whatsApp: {
        title: "Join Our WhatsApp Group",
        content: "Click here to Join Our Group on WhatsApp.",
        url: "https://chat.whatsapp.com/IQHKytATWYwIuEnngMIaLI",
      },
    },
  },
  {
    title: {
      en: "Advance Your Career in Hospital Management and Operational Excellence *Enroll for FREE Today!*",
      ar: "*طور مهاراتك في مجال ادارة المستشفيات والمراكز الصحية *سجّل الآن مجانًا!",
    },
    slug: "apply-hosp-free",
    description: {
      en: `Ready to elevate your expertise in hospital administration? Join our FREE comprehensive course and gain essential skills to manage healthcare facilities, improve operational efficiency, and deliver exceptional patient care.`,
      ar: "تهانينا الحارة! طلبك للالتحاق بـ [Course Name] في IMETS *الطبية* تم تثبيته، ترقب تواصلنا لنرفع معًا مستوى طموحك في عالم الرعاية الصحية!",
    },
    videoUrl: "",
    imageUrl: "/images/hospfree.jpg",
    button: {
      label: {
        ar: "انضم الي المحاضرة المجانية من هنا",
        en: "Take me to FREE Lecture NOW !",
      },
      formData: {
        name: "form-speciality",
        groupId: { EG: "112984734", other: "112984734" },
        redirectUrl: "/free-events",
      },
    },
    freeEventsData: {
      title: "Thank You for Registration!",
      content: "Join WhatsApp Group to get Zoom Link for FREE!",
      slug: "/",
      whatsApp: {
        title: "Join Our WhatsApp Group",
        content: "Click here to Join Our Group on WhatsApp.",
        url: "https://chat.whatsapp.com/IQHKytATWYwIuEnngMIaLI",
      },
    },
  },
  {
    title: {
      en: "Advance Your Career in Healthcare Financial Management *Enroll for FREE Today!*",
      ar: "*طور مهاراتك في مجال الادارة المالية للقطاع الصحي *سجّل الآن مجانًا!",
    },
    slug: "apply-finance-free",
    description: {
      en: `Ready to elevate your expertise in healthcare finance? Join our FREE comprehensive course and gain essential skills to manage budgets, optimize financial performance, and ensure the sustainability of healthcare organizations.!`,
      ar: "تهانينا الحارة! طلبك للالتحاق بـ [Course Name] في IMETS *الطبية* تم تثبيته، ترقب تواصلنا لنرفع معًا مستوى طموحك في عالم الرعاية الصحية!",
    },
    videoUrl: "",
    imageUrl: "/images/financefree.jpg",
    button: {
      label: {
        ar: "انضم الي المحاضرة المجانية من هنا",
        en: "Take me to FREE Lecture NOW !",
      },
      formData: {
        name: "form-speciality",
        groupId: { EG: "112984734", other: "112984734" },
        redirectUrl: "/free-events",
      },
    },
    freeEventsData: {
      title: "Thank You for Registration!",
      content: "Join WhatsApp Group to get Zoom Link for FREE!",
      slug: "/",
      whatsApp: {
        title: "Join Our WhatsApp Group",
        content: "Click here to Join Our Group on WhatsApp.",
        url: "https://chat.whatsapp.com/IQHKytATWYwIuEnngMIaLI",
      },
    },
  },
];
