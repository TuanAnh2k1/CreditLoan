import React, {useState} from 'react';
import {Button, Image, Pressable, StyleSheet, Text, View} from 'react-native';
import GetColors from '../../utils/CommonColors';
import AsyncStorage from '@react-native-async-storage/async-storage';
const TUTORIAL = [
  {
    uri: require('../../assets/tutorial_1.jpg'),
  },
  {
    uri: require('../../assets/tutorial_2.jpg'),
  },
  {
    uri: require('../../assets/tutorial_3.jpg'),
  },
];

const Tutorial = (props: {navigation: any}) => {
  const {navigation} = props;
  const [addTutorial, setAddTutorial] = useState(0);
  const btnTurorial = () => {
    if (addTutorial < 2) {
      setAddTutorial(addTutorial + 1);
    } else {
      setAddTutorial(0);
      storeData('tutorial', '1');
      navigation.navigate('CreditLoan');
    }
  };

  const storeData = async (key: string, value: string) => {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Image style={styles.imgWellcome} source={TUTORIAL[addTutorial]?.uri} />
      <View style={styles.content}>
        <Pressable
          style={styles.btnStarted}
          onPress={() => {
            navigation.navigate('CreditLoan');
            storeData('tutorial', '1');
          }}>
          <Text style={styles.textCancel}>Bỏ qua</Text>
        </Pressable>
        <View style={styles.btnStarted}>
          <Button title="Tiếp theo" onPress={btnTurorial} />
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
  },
  textCancel: {
    color: GetColors().BLACK900,
    fontSize: 18,
    fontWeight: '600',
  },
  content: {
    width: '100%',
    flexDirection: 'row',
    backgroundColor: GetColors().WHITE,
    paddingVertical: 32,
    paddingHorizontal: 16,
  },
  btnStarted: {
    flex: 1,
    borderRadius: 10,
  },
});

export default Tutorial;
