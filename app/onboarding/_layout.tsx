import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Slot, usePathname, useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

type Props = {};

const layout = (props: Props) => {
  const router = useRouter();
  const pathname = usePathname();

  const showBackButton = pathname !== "/onboarding";

  // Step counter with 3 dots
  const showStepCounter = pathname !== "/onboarding";
  // Steps: Name: 0, Email: 1, Phone: 2, Done: 3
  const step =
    pathname === "/onboarding/Name"
      ? 0
      : pathname === "/onboarding/Email"
      ? 1
      : pathname === "/onboarding/Phone"
      ? 2
      : pathname === "/onboarding/Done"
      ? 3
      : 0;

  // stepActive is an array with 4 items, false until the current step or it's passed
  const stepsActive = [false, false, false, false].map(
    (_, index) => index <= step
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headingContainer}>
        {showBackButton && (
          <Pressable style={styles.backButton} onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={24} color="black" />
          </Pressable>
        )}

        {showStepCounter && (
          <View style={styles.stepCounter}>
            {stepsActive.map((active, index) => (
              <View
                key={index}
                style={[
                  styles.stepCounterBox,
                  active && styles.stepCounterActive,
                ]}
              />
            ))}
          </View>
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
  stepCounter: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  stepCounterBox: {
    width: 12,
    height: 4,
    backgroundColor: "#F9D94C90",
    marginHorizontal: 4,
  },
  stepCounterActive: {
    // yuzu yellow: #F9D94C
    backgroundColor: "#A1D99A",
  },
});

export default layout;
