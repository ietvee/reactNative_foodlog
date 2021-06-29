import React from "react";
import { View, Text } from "react-native";
import { globalStyles } from '../styles/style';

export default function About() {
  return (
    <View style={globalStyles.aboutText}>
      <Text> This is a simple app for you to create record of food.</Text>
      <Text> © ietvee 2021 </Text>
    </View>
  );
}
  