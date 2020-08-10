import 'react-native-gesture-handler';
import React from 'react';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import ReduxThunk from 'redux-thunk';
import Router from './src/Router';
import reducers from './src/redux/reducers';
const App: () => React$Node = () => {
  const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
};

export default App;
