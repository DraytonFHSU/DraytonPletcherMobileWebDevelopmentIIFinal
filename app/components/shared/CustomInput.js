import { StyleSheet, TextInput, View } from "react-native";
import React from "react";

export default function CustomInput({
    placeholder, 
    value, 
    setValue, 
    secureTextEntry
}) {
    return (
        <TextInput
            style={styles.input}
            placeholder={placeholder}
            onChangeText={setValue}
            value={value}
            secureTextEntry = {secureTextEntry}
        />
    );
}

const styles = StyleSheet.create({
    input: {
        height: 60,
        width: "100%",
        margin: 12,
        borderWidth: 1,
        padding: 20,
        borderColor: "#ffe4b5",
        borderBottomColor: "black"
    },
});