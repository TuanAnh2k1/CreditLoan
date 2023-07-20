import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Tabbar from '../../components/TabBar';
import Loan from './Loan';
import Profile from '../Profile/Profile';
import i18n from '../../i18n';
import {CARD, HOME, LOAN, PROFILE} from '../../AppConstants/AppConstants';

const CreditLoan = (props: {navigation: any}) => {
  const {navigation} = props;
  const [selectedTab, setSelectedTab] = useState(HOME);

  const handleTabChange = tab => {
    setSelectedTab(tab);
  };

  return (
    <View style={styles.container}>
      {/* Content of your current tab */}
      {selectedTab === HOME && <Loan navigation={navigation} />}
      {selectedTab === LOAN && (
        <View style={styles.tabContent}>
          <Text>{i18n.t('text.content_of_loan')}</Text>
        </View>
      )}
      {selectedTab === CARD && (
        <View style={styles.tabContent}>
          <Text>{i18n.t('text.content_of_card')}</Text>
        </View>
      )}
      {selectedTab === PROFILE && <Profile navigation={navigation} />}

      {/* Tabbar */}
      <Tabbar
        tabs={[HOME, LOAN, CARD, PROFILE]}
        icons={['home', 'credit_card', 'tags', 'user']}
        initialTab={HOME}
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
