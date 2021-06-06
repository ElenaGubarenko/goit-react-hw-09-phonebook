import { Component } from 'react';
import { connect } from 'react-redux';
import operations from '../../redux/operations/operations';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import selectors from '../../redux/selectors/selectors';
import styles from './Header.module.css';
import { useSelector, useDispatch } from 'react-redux';

export default function Header() {
  const isAuthed = useSelector(selectors.isAuthed);
  const userMail = useSelector(selectors.userMail);
  const dispatch = useDispatch();
  const logoutUser = () => dispatch(operations.logoutUser());

  return (
    <div>
      {!isAuthed ? null : (
        <div className={styles.Header}>
          <div className={styles.Navigation}>
            <NavLink className={styles.Home} to={routes.homepage}>
              Home
            </NavLink>
            <NavLink className={styles.Home} to={routes.contacts}>
              My contacts
            </NavLink>
          </div>
          <div className={styles.MailExit}>
            <h1 className={styles.Home}>{userMail}</h1>
            <NavLink
              className={styles.Exit}
              onClick={logoutUser}
              to={routes.homepage}
            >
              Exit
            </NavLink>
          </div>
        </div>
      )}
    </div>
  );
}
