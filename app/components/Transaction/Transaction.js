import React from 'react'
import {
  Text, 
  StyleSheet, 
  View,
  Image, 
  TouchableHighlight
} from "react-native";
import TransactionProperties from './TransactionProperties';

import  Swipeable from 'react-native-gesture-handler/Swipeable';

export default function Transaction({
  image, 
  title, 
  description, 
  category, 
  onPress, 
  renderRightActions,
  renderLeftActions,
}) {
  return (
    <Swipeable 
    renderRightActions={renderRightActions} 
    renderLeftActions={renderLeftActions}
    >
    <TouchableHighlight underlayColor={"#lightGrey"} onPress={onPress}>
      <>
      <View style={styles.mainContainer}>
        <Image style={styles.image} source={image}/>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.category}>{category}</Text>
      </View>
      </>
    </TouchableHighlight>
    </Swipeable>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#b8860b',
    flexDirection: "column",
    padding: 25,
    paddingTop: 20,
    marginBottom: 5,
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 35,
    marginRight: 10,
    padding: 20,
  },
  title: {
    fontWeight: "bold",
    fontSize: 25,
    padding: 5,
    color: '#FFF',
  },
  description: {
    fontWeight: "bold",
    fontSize: 20,
    padding: 5,
    color: '#FFF',
  },
  category: {
    fontWeight: "bold",
    fontSize: 20,
    padding: 5,
    color: '#FFF',
  },
})