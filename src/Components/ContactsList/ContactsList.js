import { v4 as uuidv4 } from 'uuid';
import Filter from '../Filter';
import Header from '../Header';
import PropTypes from 'prop-types';
import styles from './ContactsList.module.css';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import operations from '../../redux/operations/operations';
import selectors from '../../redux/selectors/selectors';
import ContactForm from '../ContactForm';

export default function ContactsList() {
  const dispatch = useDispatch();
  const filter = useSelector(selectors.getFilter);
  const filteredContacts = useSelector(selectors.getFilteredContacts);
  const contacts = useSelector(selectors.getContacts);

  useEffect(() => {
    dispatch(operations.getAllContacts());
  }, [dispatch]);

  return (
    <div>
      <Header />
      <ContactForm />
      <h1 className={styles.Title}>All contacts</h1>
      <Filter />
      <ul className={styles.ContactsList}>
        <div className={styles.Logo}></div>
        {(filter !== '' ? filteredContacts : contacts).map(contact => {
          return (
            <li className={styles.ContactListItem} key={uuidv4()}>
              <div className={styles.NameNumber}>
                <div>{contact.name}:</div>
                <div>{contact.number}</div>
              </div>
              <button
                className="button"
                onClick={() => dispatch(operations.deleteContact(contact.id))}
                type="button"
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
