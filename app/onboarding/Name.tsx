import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useRouter } from "expo-router";
import Button from "../../components/Button";
import Spacer from "../../components/Spacer";
import Input from "../../components/Input";

type Props = {};

const Name = (props: Props) => {
  const [name, setName] = useState("");
  const router = useRouter();

  const isDisabled = name.length === 0;

  const proceed = () => {
    router.push("/onboarding/Email");
  };

  return (
    <>
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>What's your name?</Text>
      </View>
      <Input
        label="Your name"
        placeholder="Name Namesson"
        value={name}
        onChange={setName}
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

export default Name;
