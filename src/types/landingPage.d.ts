type LandingPageType = {
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
      groupId: string;
      redirectUrl: string;
    };
  };
  slug: string;
  thankYouData: ThankYouData;
};
