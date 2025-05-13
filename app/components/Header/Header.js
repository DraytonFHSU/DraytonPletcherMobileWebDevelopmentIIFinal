import { StyleSheet, Text, View } from 'react-native';
import CustomButton from '../shared/CustomButton';
import { UserAuth } from '../../contexts/AuthContext';
import { useNavigation } from '@react-navigation/native'; // Add this to use navigation hook

export default function Header() {
  const navigation = useNavigation();
  const { logOut } = UserAuth();

  const handleLogout = async () => {
    try {
      await logOut();
      navigation.navigate('SignIn');
    } catch (error) {
      console.log(error.message);
    }
  };

    return (
        <div style={{ backgroundColor: '#eeeeee' }}>
          <CustomButton 
            text="Log out" 
            onPress={handleLogout} />
        </div>
    )
}

const styles = StyleSheet.create({
    header: {
      fontSize: 20,
      backgroundColor: '#000',
      color: "#b0b",
    },
  });
  