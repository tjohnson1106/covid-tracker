import React from "react";
import { StyleSheet, Text, View } from "react-native";

import CardView from "./src/components/CardView";

export default function App() {
  return (
    <View style={styles.root}>
      <CardView />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
