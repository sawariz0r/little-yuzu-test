
export type Category = {
  name: string;
  label: string;
};

export type MenuItem = {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  category: Category["name"];
};
