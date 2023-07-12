import React, {useState} from 'react';
import {View, TextInput, Button, Text, StyleSheet} from 'react-native';
import {connect, ConnectedProps} from 'react-redux';
import {RootState} from '../store';
import {login} from '../store/actions/actions';

const connector = connect(
  (state: RootState) => ({
    isLoading: state.auth.isLoading,
    error: state.auth.error,
  }),
  {login},
);

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux;

const LoginScreen: React.FC<Props> = ({isLoading, error, login}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    login(username, password);
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        style={styles.user}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.password}
      />
      <Button title="Login" onPress={handleLogin} />
      {isLoading && <Text>Loading...</Text>}
      {error && <Text>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  user: {
    marginBottom: 10,
    width: 200,
    height: 40,
    borderWidth: 1,
    padding: 10,
  },
  password: {
    marginBottom: 10,
    width: 200,
    height: 40,
    borderWidth: 1,
    padding: 10,
  },
});

export default connector(LoginScreen);
