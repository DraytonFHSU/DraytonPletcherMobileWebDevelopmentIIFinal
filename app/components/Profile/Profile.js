import { Button, StyleSheet, Text, View, Image } from 'react-native';

export default function Profile({name}){
    return(
        <>
            <Image style={styles.image} source={require("../../../assets/Mad_Duck.jpg")}></Image>
            <Text style={styles.username}>{name}</Text>
        </>
    )
}

const styles = StyleSheet.create({
    image: { 
      height: 70,
      width: 70,
      borderRadius: 10,
    },
    username: {
        flex: 0.1,
        color: '#08f',
    }
  });
  