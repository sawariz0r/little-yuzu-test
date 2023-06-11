// A flex: 1 component

import React from "react";
import { View } from "react-native";

type Props = {};

const Spacer = (props: Props) => {
  return <View style={{ flex: 1 }} />;
};

export default Spacer;
