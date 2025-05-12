import { StyleSheet, Text, View } from 'react-native';
import CustomButton from '../shared/CustomButton';
import { UserAuth } from '../../contexts/AuthContext';


export default function Header() {
  const { logOut } = UserAuth();

  const handleLogout = async () => {
    try {
      await logOut();
      alert("Logged Out");
    } catch (error) {
      console.log(error.message);
    }
  };

    return (
      <>
      <Text style={styles.header}>Super cool website</Text>
        <CustomButton 
                        text="Log out" 
                        onPress={handleLogout} />
      </>
        
    )
}

const styles = StyleSheet.create({
    header: {
      fontSize: 20,
      backgroundColor: '#fef',
      color: "#b0b",
    },
  });
  