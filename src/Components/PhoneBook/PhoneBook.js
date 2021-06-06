import React, { lazy, Suspense, Component } from 'react';
import Container from '../Container';
import routes from '../../routes';
import { connect } from 'react-redux';
import actions from '../../redux/actions/actions';
import operations from '../../redux/operations/operations';
import selectors from '../../redux/selectors/selectors';
import PrivateRoute from '../../PrivateRoute';
import PublicRoute from '../../PublicRoute';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const AsyncContactsList = lazy(() =>
  import('../ContactsList' /* webpackChunkName: "ContactsList" */),
);
const AsyncRegister = lazy(() =>
  import('../Register' /* webpackChunkName: "Register" */),
);
const AsyncLogin = lazy(() =>
  import('../Login' /* webpackChunkName: "Login" */),
);
const AsyncHomepage = lazy(() =>
  import('../Homepage' /* webpackChunkName: "Homepage" */),
);

export default function PhoneBook() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(operations.getCurrentUser);
  }, [dispatch]);

  return (
    <Container>
      <Suspense fallback={<h1 className="loading">Loading...</h1>}>
        <PublicRoute exact path={routes.homepage} component={AsyncHomepage} />
        <PrivateRoute
          path={routes.contacts}
          redirectTo={routes.login}
          component={AsyncContactsList}
        />
        <PublicRoute
          exact
          restricted
          path={routes.register}
          redirectTo={routes.login}
          component={AsyncRegister}
        />
        <PublicRoute
          exact
          restricted
          path={routes.login}
          redirectTo={routes.contacts}
          component={AsyncLogin}
        />
      </Suspense>
    </Container>
  );
}
