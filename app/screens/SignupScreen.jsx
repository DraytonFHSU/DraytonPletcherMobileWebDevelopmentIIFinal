import{
    Image,
    StyleSheet,
    Text,
    View,
    useWindowDimensions,
} from "react-native";
import React, {useState} from "react";
import duck from "../../assets/Mad_Duck.jpg";
import CustomInput from "../components/shared/CustomInput";
import CustomButton from "../components/shared/CustomButton"
import {UserAuth} from "../contexts/AuthContext"
import { useNavigation } from "@react-navigation/native";

export default function SignupScreen(){
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const {height} = useWindowDimensions();

    const {createUser} = UserAuth();
    const navigation = useNavigation();
    

    const onRegister = async (e) => {
        e.preventDefault();
        const data = { username, email, password, confirmPassword}
        console.log(data);
        try {
            await createUser(email, password).then((userCredential) => {
            console.log(user);
            navigation.navigate("Home")
            });
        } catch (err) {
            console.log(err)
        }
        setUsername("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
    };

    const onSignIn = () => {
        console.warn("Sign In Pressed")
        navigation.navigate("SignIn")
    }

    return (
        <View style={styles.main}>
            <Image
                source={duck}
                style={(styles.tiger, {height: height * 0.3})}
                resizeMode="contain"
            />
            <Text style={styles.title}>Create An Account</Text>
            <CustomInput
                placeholder="User Name"
                value={username}
                setValue={setUsername}
            />
            <CustomInput
                placeholder="Email"
                value={email}
                setValue={setEmail}
            />
            <CustomInput
                placeholder="Password"
                value={password}
                setValue={setPassword}
            />
            <CustomInput
                placeholder="Confirm Password"
                value={confirmPassword}
                setValue={setConfirmPassword}
            />
            <CustomButton text="Sign Up" onPress={onRegister} />
            <CustomButton 
                text="Have an Account? Click here to sign in" 
                onPress={onSignIn} />
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#ffe4b5",
        padding: 40,
    },
    tiger: {width: "70%", height: 100, maxHeight: 100, maxWidth: 500},
    title:{
        fontSize: 30,
        fontWeight: "bold"
    }
})