import React from 'react';
import {
  Button,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

const SignUpScreen = (props: {navigation: any}) => {
  const {navigation} = props;
  return (
    <View style={styles.container}>
      {/* <Image style={styles.imgLogin} source={require('../assets/signup.jpg')} /> */}
      <View style={styles.content}>
        <Text style={styles.textLogin}>SIGN UP</Text>
        <View style={styles.textInput}>
          <Image
            style={styles.iconInput}
            source={require('../assets/user.png')}
          />
          <TextInput
            style={styles.inputContent}
            placeholder="Name"
            placeholderTextColor="#000"
          />
        </View>
        <View style={styles.textInput}>
          <Image
            style={styles.iconInput}
            source={require('../assets/at.png')}
          />
          <TextInput
            style={styles.inputContent}
            placeholder="E-Mail"
            placeholderTextColor="#000"
          />
        </View>
        <View style={styles.textInput}>
          <Image
            style={styles.iconInput}
            source={require('../assets/padlock.png')}
          />
          <TextInput
            style={styles.inputContent}
            placeholder="Password"
            placeholderTextColor="#000"
            secureTextEntry={true}
          />
          <Image
            style={styles.iconInput}
            source={require('../assets/hidden.png')}
          />
        </View>
        <View style={{paddingTop: 70}}>
          <Button title="SIGN UP" color={'tomato'} />
        </View>
        <Pressable
          style={{paddingVertical: 18, marginLeft: '42%'}}
          onPress={() => {
            navigation.navigate('SignIn');
          }}>
          <Text>SIGN IN</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
  },
  imgLogin: {
    width: '100%',
    flex: 1,
    opacity: 0.4,
  },
  content: {
    width: '100%',
    position: 'absolute',
    marginTop: '30%',
    paddingHorizontal: 30,
  },
  textLogin: {
    fontWeight: '700',
    fontSize: 36,
    color: 'white',
    paddingBottom: 60,
  },
  textInput: {
    color: '#999',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#000',
    paddingVertical: 10,
  },
  iconInput: {
    width: 18,
    height: 18,
    marginRight: 5,
  },
  inputContent: {
    fontSize: 18,
    paddingVertical: 20,
    flex: 1,
  },
});

export default SignUpScreen;
