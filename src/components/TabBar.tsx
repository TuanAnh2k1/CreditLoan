import React, {useState} from 'react';
import {View, TouchableOpacity, Text, StyleSheet, Image} from 'react-native';

const ICONS = {
  home: require('../assets/home.png'),
  credit_card: require('../assets/money-bag.png'),
  tags: require('../assets/credit-card.png'),
  user: require('../assets/user.png'),
};

const Tabbar = ({tabs, icons, initialTab, onTabChange}) => {
  const [activeTab, setActiveTab] = useState(initialTab);

  const handleTabPress = tab => {
    setActiveTab(tab);
    onTabChange(tab);
  };

  return (
    <View style={styles.container}>
      {tabs.map((tab, index) => (
        <TouchableOpacity
          key={tab}
          style={[styles.tab, activeTab === tab ? styles.activeTab : null]}
          onPress={() => handleTabPress(tab)}>
          <Image
            source={ICONS[icons[index]]}
            style={{
              width: 24,
              height: 24,
              tintColor: activeTab === tab ? '#000' : '#888',
            }}
          />
          <Text
            style={[
              styles.tabText,
              activeTab === tab ? styles.activeTabText : null,
            ]}>
            {tab}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    height: 70,
  },
  tab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeTab: {},
  tabText: {
    fontSize: 16,
    color: '#333',
  },
  activeTabText: {
    fontWeight: 'bold',
    color: '#000',
  },
});

export default Tabbar;
