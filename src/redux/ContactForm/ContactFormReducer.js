import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

export const contactReducer = createReducer([], {
  'contacts/add': (state, action) => [...state, action.payload],
});

export default combineReducers({
  contactReducer,
});
