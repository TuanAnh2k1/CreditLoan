/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './store';
import Mainnavigator from './navigation/BaseNav';
import Splash from './components/Splash';
import NetworkStatus from './components/NetworkStatus';

const store = createStore(rootReducer, applyMiddleware(thunk));

const App = () => {
  // useEffect(() => {
  //   // Simulate an asynchronous task
  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 3000); // Thay thế giá trị 3000 bằng thời gian bạn muốn hiển thị màn hình Splash
  // }, []);

  // if (isLoading) {
  //   return <Splash />;
  // }
  return (
    <Provider store={store}>
      <NetworkStatus />
      <Mainnavigator></Mainnavigator>
    </Provider>
  );
};

export default App;
