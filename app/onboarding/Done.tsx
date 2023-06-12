import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useRouter } from "expo-router";
import ConfettiCannon from "react-native-confetti-cannon";

import Button from "../../components/Button";
import Spacer from "../../components/Spacer";

type Props = {};

const Done = (props: Props) => {
  const router = useRouter();

  // TODO: Check that name, email and phone are valid
  // and that they exist in the sqlite database

  const proceed = () => {
    router.replace("/Main");
  };

  return (
    <>
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>🎉 All done!</Text>
        <Text style={styles.subheading}>You're ready to go!</Text>
        <Text style={styles.subheading}>
          Now that's out of the way, you can start ordering food and drinks from
          our menu!
        </Text>
      </View>

      <Spacer />
      <Button text="Complete" onPress={proceed} />
      <ConfettiCannon
        count={200}
        origin={{ x: 0, y: 0 }}
        autoStartDelay={100}
      />
    </>
  );
};

const styles = StyleSheet.create({
  headingContainer: {
    paddingTop: 32,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 24,
  },
  subheading: {
    fontSize: 16,
    marginBottom: 12,
  },
});

export default Done;
