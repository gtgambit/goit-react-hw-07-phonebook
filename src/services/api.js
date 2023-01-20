import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://63ca8fb1d0ab64be2b558d44.mockapi.io/contacts',
});

// Запит контактів
export const fetchContacts = async () => {
  const { data } = await instance.get();
  return data;
};

//Публікація нового контакту
export const addContact = async newContact => {
  const { data } = await instance.post('', newContact);
  return data;
};

//Видалення контакту
export const deleteContact = async contactToDelete => {
  const { data } = await instance.delete(contactToDelete);
  return data;
};
