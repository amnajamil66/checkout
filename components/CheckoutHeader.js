import React from "react";
import { View, Text, StyleSheet } from "react-native";

const CheckoutHeader = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.header}>Checkout</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    marginBottom: 20,
    marginTop: 80,
  },
  header: {
    fontSize: 29,
    fontWeight: "bold",
    color: "#3C649F",
  },
});

export default CheckoutHeader;
