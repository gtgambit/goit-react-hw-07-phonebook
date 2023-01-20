import PropTypes from 'prop-types';
import { useState } from 'react';
import css from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { sendContact } from 'redux/Contacts/thunk';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(state => state.contacts.items);
  const dispatch = useDispatch();

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    const newContact = {
      name,
      number,
    };
    if (contacts.some(contact => contact.name === newContact.name)) {
      return alert(`${newContact.name} is already in contacts.`);
    }
    dispatch(sendContact(newContact));
    console.log(newContact);
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="">
        Name:
        <input
          className={css.input}
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="">
        Number:
        <input
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange}
        />
      </label>

      <button type="Submit">Add Contact</button>
    </form>
  );
};

ContactForm.propTypes = {
  handleAddContact: PropTypes.func,
};
