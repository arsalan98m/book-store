import React, {useEffect} from 'react';
import RNBootSplash from 'react-native-bootsplash';
import {Provider} from 'react-redux';
import {useSelector, useDispatch} from 'react-redux';

import AppStack from './src/navigation/AppStack';
import {store, AppDispatch, RootState} from './src/store';
import {getBooks} from './src/features/books/booksThunk';

const App = () => {
  useEffect(() => {
    RNBootSplash.hide({fade: true});
  }, []);

  return (
    <Provider store={store}>
      <AppStack />
    </Provider>
  );
};

export default App;
