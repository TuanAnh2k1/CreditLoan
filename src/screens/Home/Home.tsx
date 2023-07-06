import React, {useEffect, useState} from 'react';
import {Button, Image, StyleSheet, Text, View} from 'react-native';
import GetColors from '../../utils/CommonColors';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loading from '../../components/Loading';
const Home = (props: {navigation: any}) => {
  const {navigation} = props;
  const [loading, setLoading] = useState(Boolean);
  const getDataUser = async () => {
    try {
      const value = await AsyncStorage.getItem('tutorial');
      if (value === '1') {
        navigation.navigate('CreditLoan');
        setLoading(false);
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    setLoading(true);
    getDataUser();
  }, []);
  return (
    <View style={styles.container}>
      <Image
        style={styles.imgWellcome}
        source={require('../../assets/splash.gif')}
      />
      <View style={styles.content}>
        <View style={{flex: 1}}>
          <Text style={styles.text1}>Mcredit</Text>
          <Text style={styles.text2}>VAY ONLINE</Text>
          <Text style={styles.text3}>Tài chính thông minh</Text>
        </View>
        <View style={styles.btnStarted}>
          <Button
            title="Điều Khoản Sử Dụng"
            onPress={() => navigation.navigate('Tutorial')}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0e0b1e',
  },
  imgWellcome: {
    width: '100%',
    flex: 1,
    opacity: 0.8,
  },
  content: {
    width: '100%',
    position: 'absolute',
    paddingTop: '100%',
  },
  text1: {
    color: GetColors().MAIN,
    paddingTop: 50,
    paddingLeft: 41.5,
    fontWeight: '600',
    fontSize: 24,
  },
  text2: {
    paddingVertical: 10,
    color: 'white',
    paddingLeft: 41.5,
    paddingRight: 130,
    fontWeight: '600',
    fontSize: 20,
  },
  text3: {
    color: 'white',
    paddingLeft: 41.5,
    paddingRight: 45,
    fontSize: 16,
  },
  btnStarted: {
    paddingHorizontal: 50,
    paddingTop: 46,
  },
});

export default Home;
