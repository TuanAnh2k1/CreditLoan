/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './store';
import Mainnavigator from './navigation/BaseNav';
import NetworkStatus from './components/NetworkStatus';
import {setI18nLanguage} from './i18n';

const store = createStore(rootReducer, applyMiddleware(thunk));

const App = () => {
  useEffect(() => {
    const state = store.getState();
    setI18nLanguage(state);
  }, []);

  return (
    <Provider store={store}>
      <NetworkStatus />
      <Mainnavigator></Mainnavigator>
    </Provider>
  );
};

export default App;
