import React from 'react';
import {StyleSheet, View} from 'react-native';
import NavBar from '../../../components/NavBar';

const ContactInfo = (props: {navigation: any}) => {
  const {navigation} = props;

  return (
    <View style={styles.container}>
      <NavBar
        title="Cập nhật thông tin cá nhân"
        onPressLeft={() => navigation.goBack()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ContactInfo;
