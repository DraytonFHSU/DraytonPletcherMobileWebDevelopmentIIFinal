import React, { useState, useContext } from 'react';
import { View, Text, ScrollView, StyleSheet, Button, TouchableOpacity, SafeAreaView, TouchableWithoutFeedback, FlatList } from 'react-native';
import transactionData from  "../data/categories"; // Import transactionData
import Card from '../components/shared/Card';
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Pressable, TextInput } from 'react-native-gesture-handler';
import { useRoute } from '@react-navigation/native';
import Transaction from '../components/Transaction/Transaction';
import TransactionContext from '../contexts/TransactionContext';
import { Modal } from 'react-native-web';
 
const TransactionListScreen = () => {
  const {transactionList, editTransaction, deleteTransaction, updateTransaction} = 
    useContext(TransactionContext);
  
  const [modalVisible, setModalVisible] = useState(false);
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [transactionId, setTransactionId] = useState(null);

  const handleEditTransaction = (transaction) => {
    setTransactionId(transaction.id);
    setAmount(transaction.amount);
    setDescription(transaction.description);
    setModalVisible(true);
    editTransaction(transaction);
  }

  const handleUpdateTransaction = () => {
    if (transactionId) {
      updateTransaction(transactionId, {amount, description});
      setModalVisible(false);
    }
  }
const navigation = useNavigation();

return (
  <SafeAreaView style={styles.screen}>
    <FlatList
      data={transactionList}
      keyExtractor={(transactionList) => transactionList.id}  
      renderItem={({ item }) => (
          <Transaction
            image={item.data.image}
            amount={item.data.amount}
            description={item.data.description}
            category={item.data.category}
            onPress={() => navigation.navigate('Edit Transaction', { transaction: item })}
            renderRightActions={() => (
              <View>
                <Pressable onPress={() => deleteTransaction(item.id)}>
                  <Text>Delete</Text>
                </Pressable>
              </View>
            )}
            renderLeftActions={() => (
              <View>
                <Pressable onPress={() => handleEditTransaction(item)}>
                  <Text>Edit</Text>
                </Pressable>
              </View>
            )}
          />
        )}
      />
      <Modal visible={modalVisible} animationType="slide">
        <View style={styles.modalContent}>
          <Text style={styles.modalContent}>Edit Transaction</Text>
          <TextInput
            style={styles.input}
            placeholder='Transaction Amount'
            value={amount}
            onChangeText={setAmount}
          />
          <TextInput
            style={styles.input}
            placeholder='Transaction Description'
            value={description}
            onChangeText={setDescription}
          />
          <TouchableOpacity style = {styles.button} onPress={handleUpdateTransaction}>
            <Text style={styles.buttonText}>Update Transaction</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    
    
  </SafeAreaView>
);

};
 
const styles = StyleSheet.create({
  // screen: {
  // flex: 1,
  // },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 10,
  },
  container: {
    padding: 20,
    width: '75%',
  },
  amount: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: 'gray',
  },
  deleteContainer: {
    backgroundColor: "red",
    width: 70,
    justifyContent: "center",
    alignItems: "center"
  },
  editContainer: {
    backgroundColor: "#8ed1fc",
    width: 70,
    justifyContent: "center",
    alignItems:"center"
  },
  modalContent:{
    backgroundColor: "#ffff",
    padding: 20,
    borderRadius: 10,
    shadowColor: "#0000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    justifyContent: "center",
    alignItems: "center"
  }
});
 
export default TransactionListScreen;


  //legacy code
//   const [completedTransactions, setCompletedTransactions] = useState({});
//   const toggleTransactionCompletion = (transactionId) => {
//   setCompletedTransactions((prevState) => ({...prevState, [transactionId]: !prevState[transactionId], }));
//   };

//  //delete transaction
//   const deleteTransaction = (id) => {
//   const newList = transactionList.filter(transaction => transaction.id !== id);
//   setTransactionListScreen(newList);
//   };

// //for add transaction
// const route = useRoute(); // Access the route object
// const {transactionList} = useContext(TransactionContext);
// // const [transactionList, setTransactionListScreen] = useState(transactionData); // Default to the initial transactionData


// useEffect(() => {
//   if (route.params?.updatedTransactionListScreen) {
//     setTransactionListScreen(route.params.updatedTransactionListScreen); // Set transaction list to updated transactions
//   }
// }, [route.params?.updatedTransactionListScreen]); // Dependency to trigger when params change
