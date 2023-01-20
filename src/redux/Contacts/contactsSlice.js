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
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(requestContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(sendContact.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(sendContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items.push(action.payload);
      })
      .addCase(sendContact.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(removeContact.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(removeContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = state.items.filter(
          contact => contact.id !== action.payload.id
        );
      })
      .addCase(removeContact.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export default contactsSlice.reducer;
