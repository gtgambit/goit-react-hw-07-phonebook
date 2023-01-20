import { createSlice } from '@reduxjs/toolkit';
import { requestContacts, sendContact, removeContact } from './thunk';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  //reducers: {
  //  addContact(state, { payload }) {
  //    state.items = [...state.items, payload];
  //  },
  //  deleteContact(state, { payload }) {
  //    state.items = state.items.filter(contact => contact.id !== payload);
  //  },
  //},
  extraReducers: builder =>
    builder
      .addCase(requestContacts.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(requestContacts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.isLoading = false;
      })
      .addCase(requestContacts.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })

      .addCase(sendContact.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(sendContact.fulfilled, (state, action) => {
        state.items.push(action.payload);
        state.isLoading = false;
      })
      .addCase(sendContact.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })

      .addCase(removeContact.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(removeContact.fulfilled, (state, action) => {
        state.items = state.items.filter(
          contact => contact.id !== action.payload.id
        );
        state.isLoading = false;
      })
      .addCase(removeContact.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      }),
});

export default contactsSlice.reducer;
