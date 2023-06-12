import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useRouter } from "expo-router";
import Button from "../../components/Button";
import Spacer from "../../components/Spacer";
import Input from "../../components/Input";
import { PHONE_REGEX } from "../../shared/constants";

type Props = {};

const Phone = (props: Props) => {
  const [number, setNumber] = useState("");
  const router = useRouter();

  const hasTypedNumber = number.length > 0
  const isNotValidNumber = !number.match(PHONE_REGEX);
  const isDisabled = isNotValidNumber || number.length === 0;
  const errorMessage = isNotValidNumber && hasTypedNumber ? "Please enter a valid phone number" : "";

  const proceed = () => {
    router.push("/onboarding/Done");
  };

  return (
    <>
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>And a Phone number</Text>
      </View>
      <Input
        label="Phone"
        placeholder="Just enter +111111111"
        value={number}
        onChange={setNumber}
        error={errorMessage}
      />
      <Spacer />
      <Button disabled={isDisabled} text="Next" onPress={proceed} />
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
});

export default Phone;
