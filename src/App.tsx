import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';

import Game from './pages/game';
import rootReducer from './redux';

import { configureStore } from './redux/utils';

const store = configureStore({ rootReducer });

function App() {
  return (
    <ReduxProvider store={store}>
      <Game />
    </ReduxProvider>
  );
}

export default App;
