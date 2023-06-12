import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useRouter } from "expo-router";
import Button from "../../components/Button";
import Spacer from "../../components/Spacer";
import Input from "../../components/Input";
import { EMAIL_REGEX } from "../../shared/constants";

type Props = {};

const Email = (props: Props) => {
  const [email, setEmail] = useState("");
  const router = useRouter();

  const hasTypedEmail = email.length > 0 
  const isNotValidEmail = !email.toLowerCase().match(EMAIL_REGEX);
  const isDisabled = isNotValidEmail || email.length === 0;
  const errorMessage = isNotValidEmail && hasTypedEmail ? "Please enter a valid email" : "";

  const proceed = () => {
    router.push("/onboarding/Phone");
  };

  return (
    <>
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>Enter your Email</Text>
      </View>
      <Input
        label="Email"
        placeholder="name@domain.com"
        value={email}
        onChange={setEmail}
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

export default Email;
