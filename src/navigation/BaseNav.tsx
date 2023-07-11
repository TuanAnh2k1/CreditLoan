/* eslint-disable react/react-in-jsx-scope */
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider} from 'react-redux';
import {store} from '../actions';
import Home from '../screens/Home/Home';
import QRCodeInvite from '../screens/QrCode/QRCodeInvite';
import Tutorial from '../screens/Tutorial/Tutorial';
import CreditLoan from '../screens/CreditLoan/CreditLoan';
import Profile from '../screens/Profile/Profile';
import ContactInfo from '../screens/Profile/ContactInfo/ContactInfo';
import Loan from '../screens/CreditLoan/Loan';
import FormRegister from '../screens/FormRegister/FormRegister';
import LoginScreen from '../screens/LoginScreen';
import Support from '../screens/Home/Support/Support';

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
      <Stack.Screen
        options={{headerShown: false}}
        name="Support"
        component={Support}
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
