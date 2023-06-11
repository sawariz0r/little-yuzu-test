import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

type Props = {
  text: string;
  color?: string;
  onPress: () => void;
  innerTextStyle?: any;
};

const Button = ({ color = "#9ACD32", ...props }: Props) => {
  return (
    <Pressable style={styles.outer} onPress={props.onPress}>
      {({ pressed }) => {
        return (
          <View style={[styles.inner, pressed ? styles.pressed : null]}>
            <Text style={[styles.innerText, props.innerTextStyle]}>
              {props.text}
            </Text>
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
    backgroundColor: "#9ACD32",
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
