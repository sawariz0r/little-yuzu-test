import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { useRouter } from "expo-router";
import Button from "../../components/Button";

type Props = {};

const Index = (props: Props) => {
  const router = useRouter();

  return (
    <>
      <View style={styles.imageContainer}>
        <Image
          source={require("../../assets/yuzurect.png")}
          style={styles.logo}
          resizeMethod="scale"
          resizeMode="contain"
        />
      </View>
      <Text style={styles.heading}>Welcome to Little Yuzu!</Text>
      <Button
        text="Get Started"
        onPress={() => router.push("/onboarding/Name")}
      />
    </>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 240,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 42,
    textAlign: "center",
  },
});

export default Index;
