import React, {useEffect, useState} from 'react';
import {Alert} from 'react-native';
import NetInfo from '@react-native-community/netinfo';

const NetworkStatus: React.FC = () => {
  const [isConnected, setIsConnected] = useState(true);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsConnected(state.isConnected);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    if (!isConnected) {
      Alert.alert('Thông báo', 'Mất kết nối Internet');
    }
  }, [isConnected]);

  return null;
};

export default NetworkStatus;
