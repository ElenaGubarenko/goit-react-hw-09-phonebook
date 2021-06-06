import { Route, NavLink } from 'react-router-dom';
import selectors from '../../redux/selectors/selectors';
import operations from '../../redux/operations/operations';
import routes from '../../routes';
import styles from './Register.module.css';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const changeName = e => {
    setName(e.target.value);
  };

  const changeEmail = e => {
    setEmail(e.target.value);
  };

  const changePassword = e => {
    setPassword(e.target.value);
  };

  const createUserToRegistrate = e => {
    e.preventDefault();
    const userToRegistrate = {
      name,
      email,
      password,
    };
    dispatch(operations.registerUser(userToRegistrate));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <form className={styles.Form} onSubmit={createUserToRegistrate}>
      <div className={styles.Inputs}>
        <label className={styles.Label}>
          Name
          <input
            className={styles.Input}
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={changeName}
          ></input>
        </label>
        <label className={styles.Label}>
          Mail
          <input
            className={styles.Input}
            type="mail"
            name="email"
            placeholder="YuorMail@mail.com"
            value={email}
            onChange={changeEmail}
          ></input>
        </label>
        <label className={styles.Label}>
          Password
          <input
            className={styles.Input}
            type="password"
            name="password"
            placeholder="Password at least 7 characters"
            value={password}
            onChange={changePassword}
          ></input>
        </label>
      </div>
      <button className={`button ${styles.FormButton}`} type="submit">
        Register
      </button>
      <NavLink className="button" to={routes.homepage}>
        Home
      </NavLink>
    </form>
  );
}
