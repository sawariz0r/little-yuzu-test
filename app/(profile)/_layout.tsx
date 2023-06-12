import React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { Slot, useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

type Props = {};

const layout = (props: Props) => {
  const router = useRouter();

  const showBackButton = true;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headingContainer}>
        {showBackButton && (
          <Pressable style={styles.backButton} onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={24} color="black" />
          </Pressable>
        )}

        <View style={{ width: 40 }} />
      </View>

      <Slot />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  headingContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 24,
  },
  backButton: {
    width: 40,
    padding: 10,
    paddingLeft: 0,
  },
});

export default layout;
