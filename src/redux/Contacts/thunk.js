import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchContacts, deleteContact, addContact } from 'services/api';

export const requestContacts = createAsyncThunk(
  'contacts/requestContacts',
  async (_, thunkApi) => {
    try {
      const contacts = await fetchContacts();
      return contacts;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const sendContact = createAsyncThunk(
  'contacts/sendContact',
  async (newContact, thunkApi) => {
    try {
      const contacts = await addContact(newContact);
      return contacts;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const removeContact = createAsyncThunk(
  'contacts/removeContact',
  async (contactToDelete, thunkApi) => {
    try {
      const contacts = await deleteContact(contactToDelete);
      return contacts;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
