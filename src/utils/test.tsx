import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { render } from '@testing-library/react';

import rootReducer from 'src/redux';
import { configureStore } from 'src/redux/utils';

// https://testing-library.com/docs/example-react-redux
export const renderWithRedux = (
  ui: React.ReactNode,
  {
    initialState = {},
    store = configureStore({ rootReducer, initialState }),
  } = {}
) => {
  return {
    ...render(<ReduxProvider store={store}>{ui}</ReduxProvider>),
    // adding `store` to the returned utilities to allow us
    // to reference it in our tests (just try to avoid using
    // this to test implementation details).
    store,
  };
};

export * from '@testing-library/react';
