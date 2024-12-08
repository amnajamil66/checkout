import React, { useState } from "react";
import { View, ScrollView, StyleSheet, Dimensions } from "react-native";
import axios from "axios";
import CheckoutHeader from "./components/CheckoutHeader";
import FurnitureItems from "./components/FurnitureItems";
import SummaryDetails from "./components/SummaryDetails";

const BASE_URL = "https://madpractical-a24ac-default-rtdb.firebaseio.com/";

const initialItems = [
  {
    id: 1,
    name: "Florence Chair",
    price: 45,
    quantity: 1,
    image: require("./assets/image/flor.jpg"), 
  },
  {
    id: 2,
    name: "Hewitt Chair",
    price: 39,
    quantity: 2,
    image: require("./assets/image/hewitt.jpg"), 
  },
  {
    id: 3,
    name: "Harper Swivel Chair",
    price: 28,
    quantity: 2,
    image: require("./assets/image/swivel.jpg"), 
  },
];

const App = () => {
  const [items, setItems] = useState(initialItems);

  
  const increaseQuantity = (id) => {
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setItems(updatedItems);
  };

 
  const decreaseQuantity = (id) => {
    const updatedItems = items.map((item) =>
      item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    );
    setItems(updatedItems);
  };

 
  const calculateTotalRent = () => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  };

 
  const calculateSubtotal = () => {
    const totalRent = calculateTotalRent();
    const deliveryFee = 199;
    return totalRent + deliveryFee;
  };

  
  const handleCheckout = async () => {
    const order = {
      items,
      totalRent: calculateTotalRent(),
      deliveryFee: 199,
      rentalPeriod: 2,
      subtotal: calculateSubtotal(),
    };

    try {
      await axios.post(`${BASE_URL}orders.json`, order);
      alert("Order saved successfully!");
    } catch (error) {
      alert("Error saving order: " + error.message);
    }
  };

  return (
    <View style={styles.container}>
      <View style ={styles.contentContainer}>
        <CheckoutHeader />
        <FurnitureItems 
          items={items}
          increaseQuantity={increaseQuantity}
          decreaseQuantity={decreaseQuantity}
        />
        <SummaryDetails 
          items={items}
          calculateTotalRent={calculateTotalRent}
          calculateSubtotal={calculateSubtotal}
          handleCheckout={handleCheckout}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DBE5EB", 
  
  },
  contentContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 30,
    marginTop : 30,
  },
});

export default App;







