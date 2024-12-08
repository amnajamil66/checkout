import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet, Dimensions } from "react-native";

const FurnitureItems = ({ items, increaseQuantity, decreaseQuantity }) => {
  return (
    <View style={styles.itemsContainer}>
      {items.map((item) => (
        <View key={item.id} style={styles.item}>
          <Image 
            source={item.image} 
            style={styles.itemImage} 
          />
          <View style={styles.details}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemPrice}>${item.price}/mo</Text>
          </View>
          <View style={styles.quantity}>
            <TouchableOpacity style={styles.button} onPress={() => decreaseQuantity(item.id)}>
              <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>
            <Text style={styles.quantityText}>{item.quantity}</Text>
            <TouchableOpacity style={[styles.button, styles.blueButton]} onPress={() => increaseQuantity(item.id)}>
              <Text style={[styles.buttonText, styles.blueButtonText]}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  itemsContainer: {
    width: '90%',
    marginBottom: 45,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#DBE5EB", 
    padding: 10,
    marginBottom: 5,
    borderRadius: 8,
  },
  itemImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
  },
  details: {
    flex: 1,
    marginLeft: 10,
  },
  itemName: {
    fontSize: 16,
    fontWeight: "500",
  },
  itemPrice: {
    fontSize: 14,
    color: "#666",
  },
  quantity: {
    flexDirection: "row",
    alignItems: "center",
  },
  button: {
    width: 30,
    height: 30,
    backgroundColor: "#E0E0E0",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
  },
  blueButton: {
    backgroundColor: "#3C649F",
  },
  buttonText: {
    fontSize: 18,
  },
  blueButtonText: {
    color: "#fff",
  },
  quantityText: {
    marginHorizontal: 10,
    fontSize: 16,
  },
});

export default FurnitureItems;
