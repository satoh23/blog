export type Article = {
  id: string;
  thumbnail_url: string;
  title: string;
  content: string;
  belong_categories: Category[];
  updated_at: string;
};

export type Category = {
  id: string;
  name: string;
  icon: string;
};
