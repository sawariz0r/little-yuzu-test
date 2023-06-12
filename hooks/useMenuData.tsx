// using the database to get the menu data

import { useState, useEffect } from "react";
import { createTable, getMenuItems, saveMenuItems } from "./../shared/database";
import { MenuItem } from "../types";
import { API_URL } from "../shared/constants";

export default function useMenuData() {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [categories, setCategories] = useState<string[]>([]);
  const [hiddenCategories, setHiddenCategories] = useState<string[]>([]);

  const fetchMenu = async () => {
    const menu = await fetch(API_URL);
    const menuJson = await menu.json();
    return menuJson.menu;
  };

  const getMenuData = async () => {
    createTable();
    const menu = (await getMenuItems()) as MenuItem[];
    console.log(menu);
    if (menu.length === 0) {
      const menuItems = await fetchMenu();
      saveMenuItems(menuItems);
      setMenuItems(menuItems);
      setIsLoading(false);
    } else {
      setMenuItems(menu);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const categories = menuItems.reduce((acc, item) => {
      if (!acc.includes(item.category)) {
        acc.push(item.category);
      }
      return acc;
    }, [] as string[]);

    setCategories(categories);
  }, [menuItems]);

  const filteredMenuItems = menuItems.filter((item) => {
    if (query === "") {
      return true;
    }
    return item.name.toLowerCase().includes(query.toLowerCase())
  }).filter((item) => {
    if (hiddenCategories.length === 0) {
      return true;
    }
    return !hiddenCategories.includes(item.category);
  });

  return {
    getMenuData,
    menuItems: filteredMenuItems,
    isLoading,
    query,
    setQuery,
    categories,
    hiddenCategories,
    setHiddenCategories,
  };
}
