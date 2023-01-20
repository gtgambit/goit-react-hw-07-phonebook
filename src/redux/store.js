import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './Contacts/contactsSlice';
import filterReducer from './Filter/filterSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});
