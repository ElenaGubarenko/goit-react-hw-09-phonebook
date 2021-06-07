import selectors from '../../redux/selectors/selectors';
import operations from '../../redux/operations/operations';
import routes from '../../routes';
import styles from './Login.module.css';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const changeEmail = e => {
    setEmail(e.target.value);
  };

  const changePassword = e => {
    setPassword(e.target.value);
  };

  const createUserToLogin = e => {
    e.preventDefault();
    const userToLogin = {
      email,
      password,
    };
    dispatch(operations.loginUser(userToLogin));
  };

  return (
    <form className={styles.Form} onSubmit={createUserToLogin}>
      <div className={styles.Inputs}>
        <label className={styles.Label}>
          Mail
          <input
            className={styles.Input}
            type="input"
            name="email"
            placeholder="Your mail"
            value={email}
            onChange={changeEmail}
          ></input>
        </label>
        <label className={styles.Label}>
          Password
          <input
            className={styles.Input}
            type="input"
            name="password"
            placeholder="Your password"
            value={password}
            onChange={changePassword}
          ></input>
        </label>
      </div>
      <button className={`button ${styles.FormButton}`} type="submit">
        Login
      </button>
      <NavLink className="button" to={routes.homepage}>
        Home
      </NavLink>
    </form>
  );
}
