import  {
    Image,
    StyleSheet,
    Text,
    View,
    useWindowDimensions,
} from "react-native";
import React, {useState} from "react";
import duck from "../../assets/Mad_Duck.jpg";
import CustomInput from "../components/shared/CustomInput";
import CustomButton from "../components/shared/CustomButton";
import {UserAuth} from "../contexts/AuthContext"
import { useNavigation } from "@react-navigation/native";

export default function SignInScreen() {
    const [email, setEmail] = useState("1@mail.com");
    const [password, setPassword] = useState("123456");

    const {height} = useWindowDimensions();
    const {signIn} = UserAuth();

    const navigation = useNavigation();

    const onSignIn = async (e) => {
        e.preventDefault();
        try{
            await signIn(email, password)
            console.log("user sign in")
            navigation.navigate("Home")
        }
        catch(err){console.log(err)}
    }

    

    const onForgotPassword = () => {
        console.warn("Sign In Pressed")
    }

    const onSignInGoogle = () => {
        console.warn("Sign In with Google Pressed")
    }

    const onSignInApple = () => {
        console.warn("Sign In with Apple Pressed")
    }

    const onSignUp = () => {
        console.warn("Sign Up Pressed")
        navigation.navigate("SignUp")
    }

    return (
        <View style={styles.main}>
            <Image
                source={duck}
                style={(styles.tiger, {height: height * 0.3})}
                resizeMode="contain"
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
                secureTextEntry={true}
            />
            <CustomButton text="Sign in" onPress={onSignIn} />
            <CustomButton 
                bgColor={"#8ed1fc"}
                text="Forgot Password" 
                onPress={onForgotPassword} 
            />
            <CustomButton 
                bgColor={"#ff8900"}
                text="Sign in with Google" 
                onPress={onSignInGoogle} 
            />
            <CustomButton 
                bgColor={"#607d8b"}
                text="Sign in with Google" 
                onPress={onSignInApple} 
            />
            <CustomButton 
                bgColor={"#ffffff"}
                text="don't have an account? Create One" 
                onPress={onSignUp} 
            />
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
})