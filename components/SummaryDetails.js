import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from "react-native";

const SummaryDetails = ({ items, calculateTotalRent, calculateSubtotal, handleCheckout }) => {
  return (
    <View style={styles.summaryContainer}>
      <Text style={styles.summaryTitle}>Order Summary</Text>
      <View style={styles.summary}>
        <Text style={styles.summaryText}>
          Monthly furniture total: ${calculateTotalRent()}/mo
        </Text>
        <Text style={styles.summaryText}>Delivery and assembly: $199</Text>
        <Text style={styles.summaryText}>Rental period: 2 months</Text>
        <View style={styles.divider} />
        <Text style={styles.totalText}>Subtotal: ${calculateSubtotal()}</Text>
      </View>

      {/* Checkout Button */}
      <TouchableOpacity style={styles.checkoutButton} onPress={handleCheckout}>
        <Text style={styles.checkoutButtonText}>Rent</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    summaryContainer: {
      width: "100%",
      height: 490,
      padding: 20,
      backgroundColor: "#E8EEEE",
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      alignItems: "center",
    },
    summaryTitle: {
      fontSize: 22,
      fontWeight: "bold",
      color: "#3C649F",
      marginBottom: 10,
      alignSelf: "flex-start",
    },
    summary: {
      width: "100%",
    },
    summaryText: {
      fontSize: 18,
      marginBottom: 10,
    },
    totalText: {
      fontSize: 20,
      fontWeight: "bold",
      color: "#3C649F",
      marginTop: 10,
    },
    divider: {
      height: 1,
      backgroundColor: "#3C649F",
      marginVertical: 10,
    },
    checkoutButton: {
      marginTop: 50,
      backgroundColor: "#3C649F",
      padding: 14,
      borderRadius: 8,
      alignItems: "center",
      width: "100%",
    },
    checkoutButtonText: {
      color: "#fff",
      fontSize: 18,
      fontWeight: "bold",
    },
  });
  
  export default SummaryDetails;
  
