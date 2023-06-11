import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

type Props = {
  text: string;
  color?: string;
  onPress: () => void;
  innerTextStyle?: any;
  disabled?: boolean;
};

const Button = ({
  color = "#9ACD32",
  text,
  innerTextStyle,
  onPress,
  disabled = false,
}: Props) => {
  const backgroundColor = { backgroundColor: disabled ? "#9ACD3250" : color };
  return (
    <Pressable style={styles.outer} onPress={onPress} disabled={disabled}>
      {({ pressed }) => {
        return (
          <View
            style={[
              styles.inner,
              pressed ? styles.pressed : null,
              backgroundColor,
            ]}
          >
            <Text style={[styles.innerText, innerTextStyle]}>{text}</Text>
          </View>
        );
      }}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  outer: {
    height: 60,
    width: "100%",
  },
  inner: {
    flex: 1,
    padding: 10,
    borderRadius: 5,
    opacity: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  innerText: {
    color: "white",
    fontSize: 16,
  },
  pressed: {
    opacity: 0.5,
  },
});

export default Button;
