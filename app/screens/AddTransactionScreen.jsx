import { SafeAreaView, StyleSheet, Text, TextInput, View, Button, TouchableOpacity} from "react-native";
import { useContext, useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";
import DateTimePicker from "react-native-modal-datetime-picker";
import { Alert } from 'react-native';

import transactionData, { categories } from  "../data/categories"; // Import transactionData

import { useNavigation } from '@react-navigation/native'; // Add this to use navigation hook
import TransactionContext from "../contexts/TransactionContext";

export default function AddTransactionScreen(){
  const {addTransaction} = useContext(TransactionContext)
  //amount description
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  //dropdown menu for categories
  const[open, setOpen] = useState(false);
  const[category, setCategory] = useState(null);
//map for categories
  const categoryItems = categories.map((item) => ({
    value: item.value,
    label: item.label,
  }))

  //datetime
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  //hide and show boolean
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  }
  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  }

  //on date confirm, set the date and hide the picker
  const handleConfirm = (date) => {
    setSelectedDate(date);
    console.warn("A date has been picked: ", date)
    hideDatePicker();
  }

  //navigation to create a new list on submit
  const [transactions, setTransactions] = useState(transactionData); // Set initial transactions from transactionData
  const navigation = useNavigation();

const handleSubmit = () => {
  if (amount && description && category /*&& selectedDate*/) {
    //make a new transaction
    const transaction = {
      id: transactions.length + 1, //could be better
      amount,
      description,
      category: categories.find((item) => item.value === category)?.label,
      // date: selectedDate.toString(),
      image: require("../../assets/Mad_Duck.jpg"),
    };
    
    console.log(transaction);
    addTransaction(transaction)


      // Clear the form fields
      setAmount('');
      setDescription('');
      setCategory(null);
      // setSelectedDate(null);

    //update the list and send it over to Home
      navigation.navigate('Home'/*, { updatedTransactionList }*/);
    } else {
      Alert.alert("Please fill in all fields.");
  }
};

return (
  <>
    <SafeAreaView style={styles.screen}>
      <View style={styles.viewContainer}>
        <Text>Create Transaction</Text>
        <TextInput 
          style={styles.input}
          placeholder="Enter Transaction Amount"
          onChangeText={(amount) => setAmount(amount)}
          value={amount}
        />
        <TextInput 
          style={styles.input}
          placeholder="Enter Transaction Description"
          onChangeText={(description) => setDescription(description)}
          value={description}
        />
        <DropDownPicker
          open={open}
          value={category}
          items={categoryItems}
          setOpen={setOpen}
          setValue={setCategory}
          placeholder="Transaction Category"
          placeholderStyle={styles.dropdownText}
          containerStyle={styles.dropdown}
          dropDownContainerStyle={styles.dropdownContainer}
        />

        <View>
          <Button
            amount="Select Date & Time"
            onPress={() => setDatePickerVisibility(true)}
          />
          <DateTimePicker style={styles.date}
              isVisible={isDatePickerVisible}
              mode="datetime"
              onConfirm={(date) => handleConfirm(date)}
              onCancel={() => setDatePickerVisibility(false)}
            />
        </View>
        {selectedDate !== null && (
          <Text>{selectedDate.toString()}</Text>
        )}
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>   
            <Text>Add Transaction</Text>
        </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
    screen: {
      flex: 1,
      backgroundColor: "#ffe4b5",
      alignItems: "center",
      justifyContent: 'center',
    },
    viewContainer: {
      flex: 1,
      padding: 50,
      backgroundColor: "#ffe4b5",
    },
    amount:{
      color: "black",
      fontSize: 50,
      textAlign: "center"
    },
    description:{
      color: "black",
      fontSize: 50,
      textAlign: "center"
    },
    input: {
      height: 60,
      margin: 12,
      borderWidth: 1,
      padding: 20,
      borderColor: "#ffe4b5",
      borderBottomColor: "black"
    },
    dropdownText: {
      color: "black",
      fontWeight: "bold",
    },
    dropdown: {height: 100, borderRadius: 30, paddingTop: 30},
    dropdownContainer: {
      backgroundColor: "#dfdfdf",
      borderRadius: 30,
    },
    date: {
      paddingTop: 30,
    },
  });
  