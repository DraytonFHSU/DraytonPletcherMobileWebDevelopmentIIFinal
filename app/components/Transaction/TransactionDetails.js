import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const TransactionDetails = ({ route }) => {
  const { transaction } = route.params; // Access the transaction data passed as a parameter

  return (
    <View style={styles.container}>
      <Image source={transaction.image} style={styles.image} />
      <Text style={styles.id}>Transaction ID: {transaction.id}</Text>
      <Text style={styles.amount}>{transaction.amount}</Text>
      <Text style={styles.description}>{transaction.description}</Text>
      <Text style={styles.category}>{transaction.category}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  amount: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  description: {
    fontSize: 16,
    color: '#555',
    marginTop: 10,
  },
  category: {
    fontSize: 16,
    color: '#555',
    marginTop: 10,
  },
});

export default TransactionDetails;
