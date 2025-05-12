import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button } from '@react-navigation/elements';
import { createStackNavigator } from '@react-navigation/stack';
import { ScrollView } from 'react-native-web';

import Header from '../components/Header/Header';
import Profile from '../components/Profile/Profile';
import MyButton from '../components/MyButton/MyButton';
// import TransactionList from '../components/Transaction/TransactionList';

import TransactionListScreen from './TransactionListScreen';

export default function HomeScreen() {
    const navigation = useNavigation();
    return(
<View>
      <View style={styles.container}>
        <Header></Header>
        {/* <Profile name = {"Drayton Pletcher"} />
        <MyButton></MyButton> */}
        <Button onPress={() => navigation.navigate('AddTransactionScreen')}> Add Task </Button>
        {/* <TaskList navigation={navigation}/> */}
        <TransactionListScreen navigation = {navigation}/>
        {/* <LoginScreen /> */}
        {/* <SignupScreen /> */}
      </View>
</View>)
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fef',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  