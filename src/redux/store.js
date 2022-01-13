import { configureStore } from '@reduxjs/toolkit';
// import { composeWithDevTools } from '@reduxjs/toolkit/dist/devtoolsExtension';

import { addContactReducer } from './ContactForm/ContactFormReducer.js';

const store = configureStore({
  reducer: {
    addContact: addContactReducer,
  },
  devTools: process.env.NODE_ENV === 'developement',
});

export default store;
