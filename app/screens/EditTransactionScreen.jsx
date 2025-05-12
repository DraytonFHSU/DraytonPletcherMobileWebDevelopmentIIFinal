import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const EditTransactionScreen = ({ route }) => {
  const { transaction } = route.params; // Access the transaction data passed as a parameter

  return (
    <View style={styles.container}>
      <Image source={transaction.data.image} style={styles.image} />
      <Text style={styles.id}>Transaction ID: {transaction.data.id}</Text>
      <Text style={styles.title}>{transaction.data.title}</Text>
      <Text style={styles.description}>{transaction.data.description}</Text>
      <Text style={styles.category}>{transaction.data.category}</Text>
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
  title: {
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

export default EditTransactionScreen;
