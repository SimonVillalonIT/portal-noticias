type NewType = {
  _id: string;
  title: string;
  summary: string;
  imageUrl?: string;
  image?: {
    asset: {
      url: string;
    };
  };
  category: string;
  source: string;
  content: string;
  slug: { current: string; _type: "slug" };
};
