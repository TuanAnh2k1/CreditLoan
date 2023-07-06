import React, {useState} from 'react';
import {
  Button,
  Image,
  KeyboardAvoidingView,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

const SignInScreen = (props: {navigation: any}) => {
  const {navigation} = props;
  const [isFocus, setIsFocus] = useState(true);
  return (
    <View style={styles.container}>
      {/* <Image style={styles.imgLogin} source={require('../assets/login.jpg')} /> */}
      <View style={styles.content}>
        <ScrollView>
          <Text style={styles.textLogin}>SIGN IN</Text>
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
              secureTextEntry={isFocus}
            />
            <Pressable onPress={() => setIsFocus(!isFocus)}>
              {isFocus ? (
                <Image
                  style={styles.iconInput}
                  source={require('../assets/hidden.png')}
                />
              ) : (
                <Image
                  style={styles.iconInput}
                  source={require('../assets/view.png')}
                />
              )}
            </Pressable>
          </View>
          <View style={styles.textInput}>
            <Text
              style={{paddingVertical: 24, marginLeft: '67%', color: 'white'}}>
              Forgot Password?
            </Text>
          </View>
        </ScrollView>
        <KeyboardAvoidingView>
          <Button
            title="SignIn"
            color={'tomato'}
            onPress={() => {
              navigation.navigate('AddMembers');
            }}
          />
        </KeyboardAvoidingView>

        <View style={{paddingTop: 16}}>
          <Text style={{textAlign: 'center', color: 'white'}}>
            Or connect with
          </Text>
          <View style={styles.link}>
            <Image
              style={styles.image}
              source={require('../assets/facebook.png')}
            />
            <Image
              style={styles.image}
              source={require('../assets/google-plus.png')}
            />
            <Image
              style={{width: 38, height: 38}}
              source={require('../assets/twitter.png')}
            />
          </View>
        </View>
        <View style={styles.footer}>
          <Text style={{marginRight: 5}}>Don't have an account?</Text>
          <Text
            style={{color: 'yellow'}}
            onPress={() => {
              navigation.navigate('SignUp');
            }}>
            Sign Up
          </Text>
        </View>
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
  image: {width: 38, height: 38, marginRight: 14},
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
  link: {
    flexDirection: 'row',
    paddingVertical: 24,
    alignSelf: 'center',
  },
  footer: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
});

export default SignInScreen;
