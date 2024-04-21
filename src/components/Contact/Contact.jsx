import css from './Contact.module.css';
import { FaUser } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa';
import { MdDeleteForever } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps';

const Contact = ({ contact: { id, name, number } }) => {
  const dispatch = useDispatch();

  return (
    <div className={css.contact}>
      <div>
        <div className={css.contactInfo}>
          <FaUser className={css.contactIcon} />
          <h2 className={css.name}>{name}</h2>
        </div>
        <div className={css.contactInfo}>
          <FaPhone className={css.contactIcon} />
          <p className={css.phone}>{number}</p>
        </div>
      </div>
      <button
        className={css.button}
        type="button"
        onClick={() => {
          dispatch(deleteContact(id));
        }}
      >
        <MdDeleteForever className={css.icon} />
      </button>
    </div>
  );
};

export default Contact;