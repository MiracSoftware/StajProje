import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Urunler from "./src/components/ogrenme1";

export default function App() {
  return (
    <View style={styles.container}>
      <Urunler /> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50
  }
});