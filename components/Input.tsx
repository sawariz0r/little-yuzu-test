// Input field with a label and error message

import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

type Props = {
  label: string;
  value: string;
  placeholder: string;
  onChange: (text: string) => void;
  error?: string;
};

const Input = ({ label, value, onChange, error, placeholder }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        value={value}
        placeholder={placeholder}
        onChangeText={onChange}
        autoCapitalize="none"
      />
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 24,
  },
  label: {
    // mui style label
    marginBottom: 4,
    fontSize: 14,
    color: "#6d6d6d",
  },
  input: {
    height: 60,
    backgroundColor: "#F5F5F5",
    padding: 10,
    borderRadius: 5,
    fontSize: 16,
  },
  error: {
    color: "red",
    fontSize: 12,
    marginTop: 4,
  },
});

export default Input;
