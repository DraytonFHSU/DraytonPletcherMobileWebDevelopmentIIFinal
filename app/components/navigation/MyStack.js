import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { Button } from '@react-navigation/elements';
import { createStackNavigator } from '@react-navigation/stack';
import { ScrollView } from 'react-native-web';


// import TransactionList from '../../Transaction/TransactionList';
import TransactionListScreen from '../../screens/TransactionListScreen';
import transactionData from  "../../data/categories"; // Import transactionData
import TransactionDetails from '../Transaction/TransactionDetails';
import Testing from '../shared/Testing';
// import AddTransaction from '../Transaction/AddTransaction';
import AddTransactionScreen from '../../screens/AddTransactionScreen';
import HomeScreen from '../../screens/HomeScreen';

import { useState } from 'react';
import LoginScreen from '../../screens/LoginScreen'
import SignupScreen from '../../screens/SignupScreen';
import { AuthContextProvider } from '../../contexts/AuthContext';
import SignInScreen from '../../screens/LoginScreen';
import EditTransactionScreen from '../../screens/EditTransactionScreen';
import { TransactionProvider } from '../../contexts/TransactionContext';

const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <AuthContextProvider>
      <TransactionProvider>
      <Stack.Navigator>
        <Stack.Screen name="SignIn" component={SignInScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="SignUp" component={SignupScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Edit Transaction" component={EditTransactionScreen} />
        {/* <Stack.Screen name="TransactionDetails" component={TransactionDetails} /> */}
        <Stack.Screen name="Add Transaction" component={AddTransactionScreen}/>
        {/* <Stack.Screen name="AddTransaction" component={AddTransaction} /> */}
      </Stack.Navigator>
      </TransactionProvider>
    </AuthContextProvider>
    
  );
}

//See HomeScreen in screens
// function HomeScreen() {
//   return (
//     <HomeScreen />
//   );
// }

function ProfileScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Profile Screen</Text>
    </View>
  );
}

// function AddTransactionScreen() {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Add Transaction</Text>
//     </View>
//   );
// }

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fef',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

