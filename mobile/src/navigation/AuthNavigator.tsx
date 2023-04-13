import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen/index';
import HomeScreen from '../screens/HomeScreen';

const Stack = createStackNavigator();

const AuthNaviagor = () => {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    );
}

export default AuthNaviagor;
