import { useSelector } from 'react-redux';
import { selectError, selectFilteredContacts, selectLoading } from '../../redux/selectors';
import css from './ContactList.module.css';
import Loader from '../Loader/Loader';
import Contact from '../Contact/Contact';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

const ContactList = () => {
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <div className={css.contactsWrapper}>
    {filteredContacts.length > 0 ? (
      <ul className={css.list}>
        {filteredContacts.map(contact => (
          <li key={contact.id}>
            <Contact contact={contact} />
          </li>
        ))}
      </ul>
    ) : (
      <p>No contacts found</p>
    )}
    {loading && <Loader />}
    {error !== null && <ErrorMessage />}
  </div>
);
};

export default ContactList;
