import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
 
const Card = ({ children }) => {
  return <View style={styles.card}>{children}</View>;
};
 
const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowRadius: 5,
    shadowColor: "#000",
    shadowOffset: { width: 5, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
});
 
export default Card;