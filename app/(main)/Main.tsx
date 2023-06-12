import React, { useEffect } from "react";
import {
  Image,
  ImageBackground,
  Pressable,
  SectionList,
  StyleSheet,
  Text,
  View,
} from "react-native";

import Spacer from "../../components/Spacer";
import Input from "../../components/Input";
import { ScrollView } from "react-native-gesture-handler";
import useMenuData from "../../hooks/useMenuData";
import { transformMenuData } from "../../shared/utils";
import { useRouter } from "expo-router";

type Props = {};

const Main = (props: Props) => {
  const router = useRouter();
  const {
    categories,
    menuItems,
    getMenuData,
    setHiddenCategories,
    hiddenCategories,
    query,
    setQuery,
  } = useMenuData();

  useEffect(() => {
    getMenuData();
  }, []);

  const sectionData = transformMenuData(menuItems);

  return (
    <>
      <View style={styles.headingContainer}>
        <Image
          source={require("./../../assets/littleyuzu.png")}
          style={styles.logo}
        />
        <Spacer />
        <Pressable
          style={styles.profileButton}
          onPress={() => router.push("/Profile")}
        >
          <Text style={styles.profileButtonText}>Profile</Text>
        </Pressable>
      </View>
      <View style={styles.hero}>
        <View style={styles.heroSplit}>
          <View style={styles.heroLeft}>
            <Text style={styles.heroHeading}>
              Welcome to Little Yuzu
              <Text style={{ fontWeight: "normal" }}> Denmark</Text>
            </Text>
            <Text style={styles.heroSubheading}>
              A distant cousin to the original little lemon
            </Text>
          </View>
          <View style={styles.heroRight}>
            <ImageBackground
              source={require("./../../assets/restauranfood.png")}
              resizeMethod="scale"
              resizeMode="stretch"
              style={{ width: "100%", height: "100%" }}
            />
          </View>
        </View>
        <View style={styles.heroFull}>
          <Input
            label=""
            placeholder="Search for a dish"
            value={query}
            onChange={setQuery}
            inputStyle={{
              height: 40,
              backgroundColor: "#F5F5F5cc",
            }}
          />
        </View>
      </View>
      <View style={styles.categories}>
        <ScrollView horizontal>
          {categories.map((category) => (
            <Pressable
              style={[
                styles.categoryButton,
                {
                  opacity: hiddenCategories.includes(category) ? 0.5 : 1,
                },
              ]}
              onPress={() => {
                if (hiddenCategories.includes(category)) {
                  setHiddenCategories(
                    hiddenCategories.filter((cat) => cat !== category)
                  );
                } else {
                  setHiddenCategories([...hiddenCategories, category]);
                }
              }}
              key={category}
            >
              <Text style={styles.categoryText}>{category}</Text>
            </Pressable>
          ))}
        </ScrollView>
      </View>
      <View style={styles.menu}>
        <SectionList
          // mock data
          renderItem={({ item }) => (
            <View key={item.name} style={styles.menuItem}>
              <View>
                <Text style={styles.menuItemTitle}>{item.name}</Text>
                <Text style={styles.menuItemDescription}>
                  {item.description}
                </Text>
                <Text style={styles.menuItemPrice}>{item.price}</Text>
              </View>
              <View style={styles.menuItemImage}>
                <Image
                  source={{
                    uri: `https://github.com/Meta-Mobile-Developer-PC/Working-With-Data-API/blob/main/images/${item.image}?raw=true`,
                  }}
                  resizeMethod="resize"
                  resizeMode="contain"
                  style={{ width: 60, height: 60 }}
                />
              </View>
            </View>
          )}
          renderSectionHeader={({ section }) => (
            <Text style={styles.menuCategory}>{section.category}</Text>
          )}
          keyExtractor={(item) => item.id}
          sections={sectionData}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  headingContainer: {
    flexDirection: "row",
    paddding: 12,
  },
  logo: {
    width: 240,
    height: 50,
    resizeMode: "contain",
    marginVertical: 12,
  },
  hero: {
    height: 270,
    backgroundColor: "#1d3c34",
  },
  heroSplit: {
    flex: 1,
    flexDirection: "row",
  },
  heroLeft: {
    flex: 3,
    padding: 24,
  },
  heroRight: {
    flex: 2,
    padding: 24,
  },
  heroFull: {
    paddingHorizontal: 12,
  },
  heroHeading: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    flexShrink: 1,
  },
  heroSubheading: {
    fontSize: 16,
    color: "white",
    opacity: 0.8,
    marginTop: 12,
  },
  categories: {},
  categoryButton: {
    backgroundColor: "#1d3c34cc",
    borderRadius: 12,
    padding: 12,
    margin: 12,
  },
  categoryText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
  menu: {
    flex: 1,
  },
  menuItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  menuItemTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  menuItemDescription: {
    fontSize: 12,
    color: "#666",
    flexShrink: 1,
    maxWidth: 280,
    paddingVertical: 4,
  },
  menuItemPrice: {
    fontSize: 16,
    fontWeight: "bold",
  },

  menuItemImage: {
    width: 60,
    height: 60,
    resizeMode: "contain",
  },
  menuCategory: {
    fontSize: 16,
    fontWeight: "bold",
    padding: 12,
    backgroundColor: "#eee",
  },
  profileButton: {
    backgroundColor: "#1d3c34cc",
    borderRadius: 12,
    padding: 12,
    margin: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  profileButtonText: {
    fontSize: 12,
    color: "white",
  },
});

export default Main;
