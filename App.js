import { SafeAreaView } from 'react-native';
import MyStack from './app/components/navigation/MyStack';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  
  return (
    // <SafeAreaView>
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    // </SafeAreaView>
  );
}
