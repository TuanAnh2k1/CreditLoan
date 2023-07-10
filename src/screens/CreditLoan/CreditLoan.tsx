import React, {useState} from 'react';
import {Button, Image, StyleSheet, Text, View} from 'react-native';
import GetColors from '../../utils/CommonColors';
import NavBar from '../../components/NavBar';
import Tabbar from '../../components/TabBar';
import Loan from './Loan';
import Profile from '../Profile/Profile';

const CreditLoan = (props: {navigation: any}) => {
  const {navigation} = props;
  const [selectedTab, setSelectedTab] = useState('Trang chủ');

  const handleTabChange = tab => {
    setSelectedTab(tab);
  };

  return (
    <View style={styles.container}>
      {/* Content of your current tab */}
      {selectedTab === 'Trang chủ' && <Loan navigation={navigation} />}
      {selectedTab === 'Khoản vay' && (
        <View style={styles.tabContent}>
          <Text>Content of Khoản vay</Text>
        </View>
      )}
      {selectedTab === 'Thẻ' && (
        <View style={styles.tabContent}>
          <Text>Content of Thẻ</Text>
        </View>
      )}
      {selectedTab === 'Cá nhân' && <Profile navigation={navigation} />}

      {/* Tabbar */}
      <Tabbar
        tabs={['Trang chủ', 'Khoản vay', 'Thẻ', 'Cá nhân']}
        icons={['home', 'credit_card', 'tags', 'user']}
        initialTab="Trang chủ"
        onTabChange={handleTabChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f9fe',
  },
  tabContent: {
    flex: 1,
  },
});

export default CreditLoan;
