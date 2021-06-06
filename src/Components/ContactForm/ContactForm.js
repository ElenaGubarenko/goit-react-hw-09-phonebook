import { v4 as uuidv4 } from 'uuid';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './ContactForm.module.css';
import { useSelector, useDispatch } from 'react-redux';
import operations from '../../redux/operations/operations';
import selectors from '../../redux/selectors/selectors';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(selectors.getContacts);
  const dispatch = useDispatch();

  const handleChangeInName = e => {
    setName(e.target.value);
  };

  const handleChangeInNumber = e => {
    setNumber(e.target.value);
  };

  const resetInput = () => {
    setName('');
    setNumber('');
  };

  const addContact = e => {
    e.preventDefault();
    const user = {
      name,
      number,
    };

    const ifThereIsSuchContact = contacts.filter(contact => {
      return contact.name.toLowerCase() === name.toLowerCase();
    });

    if (ifThereIsSuchContact.length !== 0) {
      return alert(`${name} already exists`);
    }

    dispatch(operations.addContact(user));

    resetInput();
  };

  return (
    <form onSubmit={addContact} className={styles.ContactForm}>
      <h1 className={styles.Title}>Add new contact</h1>
      <div className={styles.InputsDiv}>
        <label className={styles.LabelContactForm}>
          Name
          <input
            className={styles.Input}
            onChange={handleChangeInName}
            value={name}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            placeholder="Name Surname"
          />
        </label>
        <label className={styles.LabelContactForm}>
          Number
          <input
            className={styles.Input}
            onChange={handleChangeInNumber}
            value={number}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            placeholder="+111-11-111-111"
          />
        </label>
      </div>
      <button className="button" type="submit">
        Add contact
      </button>
    </form>
  );
}
