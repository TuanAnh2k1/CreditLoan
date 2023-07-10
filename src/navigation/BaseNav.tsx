/* eslint-disable react/react-in-jsx-scope */
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider} from 'react-redux';
import {store} from '../actions';
import AddMembers from '../screens/AddMembers/AddMembers';
import Home from '../screens/Home/Home';
import ProductsScreens from '../screens/ProductsScreens/ProductsScreen';
import QRCodeInvite from '../screens/QrCode/QRCodeInvite';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import Tutorial from '../screens/Tutorial/Tutorial';
import CreditLoan from '../screens/CreditLoan/CreditLoan';
import Profile from '../screens/Profile/Profile';
import ContactInfo from '../screens/Profile/ContactInfo/ContactInfo';
import Loan from '../screens/CreditLoan/Loan';
import FormRegister from '../screens/FormRegister/FormRegister';
import LoginScreen from '../screens/LoginScreen';

const Stack = createStackNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="Home"
        component={Home}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="CreditLoan"
        component={CreditLoan}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="Product"
        component={ProductsScreens}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="SignIn"
        component={SignInScreen}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="SignUp"
        component={SignUpScreen}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="AddMembers"
        component={AddMembers}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="QRCodeInvite"
        component={QRCodeInvite}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="Tutorial"
        component={Tutorial}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="Loan"
        component={Loan}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="Proflie"
        component={Profile}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="ContactInfo"
        component={ContactInfo}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="FormRegister"
        component={FormRegister}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="LoginScreen"
        component={LoginScreen}
      />
    </Stack.Navigator>
  );
}

const Mainnavigator = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default Mainnavigator;
