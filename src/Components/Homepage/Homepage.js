import routes from '../../routes';
import { NavLink } from 'react-router-dom';
import operations from '../../redux/operations/operations';
import selectors from '../../redux/selectors/selectors';
import styles from './Homepage.module.css';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

export default function Homepage() {
  const isAuthed = useSelector(selectors.isAuthed);
  const dispatch = useDispatch();
  const logoutUser = () => dispatch(operations.logoutUser());

  return (
    <div>
      <div className={styles.HomeContainer}></div>
      {isAuthed ? (
        <div className={styles.HomeNav}>
          <div>
            <NavLink className={styles.Home} to={routes.homepage}>
              Home
            </NavLink>
            <NavLink className={styles.Home} to={routes.contacts}>
              My contacts
            </NavLink>
          </div>
          <div>
            <NavLink
              className={styles.Exit}
              onClick={logoutUser}
              to={routes.homepage}
            >
              Exit
            </NavLink>
          </div>
        </div>
      ) : (
        <div className={styles.Auth}>
          <NavLink className={styles.AuthLink} to={routes.login}>
            Enter
          </NavLink>
          <NavLink className={styles.AuthLink} to={routes.register}>
            Register
          </NavLink>
        </div>
      )}
    </div>
  );
}

// class Homepage extends Component {
//   render() {
//     return (
//       <div>
//         <div className={styles.HomeContainer}></div>
//         {this.props.isAuthed ? (
//           <div className={styles.HomeNav}>
//             <div>
//               <NavLink className={styles.Home} to={routes.homepage}>
//                 Home
//               </NavLink>
//               <NavLink className={styles.Home} to={routes.contacts}>
//                 My contacts
//               </NavLink>
//             </div>
//             <div>
//               <NavLink
//                 className={styles.Exit}
//                 onClick={this.props.logoutUser}
//                 to={routes.homepage}
//               >
//                 Exit
//               </NavLink>
//             </div>
//           </div>
//         ) : (
//           <div className={styles.Auth}>
//             <NavLink className={styles.AuthLink} to={routes.login}>
//               Enter
//             </NavLink>
//             <NavLink className={styles.AuthLink} to={routes.register}>
//               Register
//             </NavLink>
//           </div>
//         )}
//       </div>
//     );
//   }
// }

// const mapStateToProps = state => ({
//   isAuthed: selectors.isAuthed(state),
// });

// const mapDispatchToProps = dispatch => ({
//   logoutUser: () => dispatch(operations.logoutUser()),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
