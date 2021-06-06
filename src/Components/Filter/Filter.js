import PropTypes from 'prop-types';
import styles from './Filter.module.css';
import actions from '../../redux/actions/actions';
import selectors from '../../redux/selectors/selectors';
import { useSelector, useDispatch } from 'react-redux';

export default function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(selectors.getFilter);
  const filterStateContacts = useSelector(selectors.filterStateContacts);

  const filterContactsByName = e => {
    dispatch(actions.handleFilter(e.target.value));

    if (filter !== '') {
      dispatch(actions.filterContacts(filterStateContacts));
      return;
    }
  };

  return (
    <div className={styles.FilterDiv}>
      <h1 className={styles.FindTitle}>Find contact by name</h1>
      <input
        className={styles.Input}
        onChange={filterContactsByName}
        value={filter}
        name="filter"
        required
      />
    </div>
  );
}
