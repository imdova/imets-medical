type LandingPageType = {
  title: string;
  description: string;
  videoUrl: string;
  imageUrl: string;
  button: {
    label: string;
    formData: {
      name: string;
      groupId: string;
      redirectUrl: string;
    };
  };
  slug: string;
  thankYouData: ThankYouData;
};
