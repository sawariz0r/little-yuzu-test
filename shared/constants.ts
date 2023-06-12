export const EMAIL_REGEX = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
export const PHONE_REGEX =
  /^(\+46|0)([\d]{2,3}[-\s]?[\d]{2,3}[-\s]?[\d]{2,3}[-\s]?[\d]{2,3})$/;
export const API_URL =
  "https://raw.githubusercontent.com/Meta-Mobile-Developer-PC/Working-With-Data-API/main/capstone.json";
export const MOCK_MENU = [
  {
    id: 1,
    name: "Greek Salad",
    price: 12.99,
    description:
      "Our delicious salad is served with Feta cheese and peeled cucumber. Includes tomatoes, onions, olives, salt and oregano in the ingredients.",
    image: "greekSalad.jpg",
    category: "starters",
  },
  {
    id: 2,
    name: "Bruschetta",
    price: 7.99,
    description:
      "Delicious grilled bread rubbed with garlic and topped with olive oil and salt. Our Bruschetta includes tomato and cheese.",
    image: "bruschetta.jpg",
    category: "starters",
  },
  {
    id: 3,
    name: "Grilled Fish",
    price: 20.0,
    description: "Fantastic grilled fish seasoned with salt.",
    image: "grilledFish.jpg",
    category: "mains",
  },
  {
    id: 4,
    name: "Pasta",
    price: 6.99,
    description: "Delicious pasta for your delight.",
    image: "pasta.jpg",
    category: "mains",
  },
  {
    id: 5,
    name: "Lemon Dessert",
    price: 4.99,
    description: "You can't go wrong with this delicious lemon dessert!",
    image: "lemonDessert.jpg",
    category: "desserts",
  },
];
export const MOCK_CATEGORIES = [
  { name: "starters", label: "Starters" },
  { name: "mains", label: "Mains" },
  { name: "desserts", label: "Desserts" },
];
