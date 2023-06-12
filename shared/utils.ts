import { useEffect, useRef } from "react";
import { MenuItem } from "../types";

export const transformMenuData = (items: MenuItem[]) => {
  return items.reduce((acc, item) => {
    const existingCategory = acc.find(
      (category) => category.category === item.category
    );
    if (existingCategory) {
      existingCategory.data.push(item);
    } else {
      acc.push({
        category: item.category,
        data: [item],
      });
    }
    return acc;
  }, []);
};

export function useUpdateEffect(effect, dependencies = []) {
  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      return effect();
    }
  }, dependencies);
}
