// sqlite database
// and wrappers that makes it easier to use.
// will contain all the menu items and the profile information of the user
// expo-sqlite

import * as SQLite from "expo-sqlite";
import { MenuItem } from "../types";

const db = SQLite.openDatabase("littleyuzu.db");

export async function createTable() {
  return new Promise((resolve, reject) => {
    db.transaction(
      (tx) => {
        tx.executeSql(
          "CREATE table IF NOT EXISTS menu (id INTEGER PRIMARY KEY NOT NULL, name TEXT, price TEXT, description TEXT, image TEXT, category TEXT);"
        );
      },
      reject,
      () => resolve(console.log("Table created"))
    );
  });
}

export async function getMenuItems() {
  return new Promise((resolve) => {
    db.transaction((tx) => {
      tx.executeSql("SELECT * FROM menu", [], (_, { rows }) => {
        resolve(rows._array);
      });
    });
  });
}

export function saveMenuItems(menuItems: MenuItem[]) {
  db.transaction((tx) => {
    menuItems.forEach((item) => {
      tx.executeSql(
        `INSERT INTO menu (id, name, price, description, image, category) VALUES (?, ?, ?, ?, ?, ?)`,
        [
          item.id,
          item.name,
          item.price,
          item.description,
          item.image,
          item.category,
        ]
      );
    });
  });
}

export async function filterByQueryAndCategories(
  query: string,
  activeCategories: string[]
) {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        `SELECT * FROM menu WHERE name LIKE ? AND category IN ('${activeCategories.join(
          "','"
        )}')`,
        [`%${query}%`],
        (_, { rows }) => {
          resolve(rows._array);
        }
      );
    }, reject);
  });
}
