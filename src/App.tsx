/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import Mainnavigator from './navigation/BaseNav';
import Splash from './components/Splash';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   // Simulate an asynchronous task
  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 3000); // Thay thế giá trị 3000 bằng thời gian bạn muốn hiển thị màn hình Splash
  // }, []);

  // if (isLoading) {
  //   return <Splash />;
  // }
  return <Mainnavigator></Mainnavigator>;
};

export default App;
