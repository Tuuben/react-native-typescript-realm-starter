import React from 'react';

import MainNavigator from './src/navigator/MainNavigator';
import RealmProvider from './src/realm/RealmProvider';

const App = () => {
  return (
    <RealmProvider>
      <MainNavigator />
    </RealmProvider>
  );
};

export default App;
