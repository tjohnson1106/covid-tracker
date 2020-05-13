import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Card } from "react-native-elements";

export default function CardView() {
  return (
    <ScrollView horizontal="true">
      <View style={styles.cardViewRoot}>
        <Card title="Card One Home Page" />
        <Card title="Card Two Home Page" />
        <Card title="Card Three Home Page" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  cardViewRoot: {
    flexDirection: "row"
  }
});
