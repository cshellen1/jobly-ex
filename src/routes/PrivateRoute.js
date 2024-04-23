import React, {useContext} from 'react';
import { Route, Redirect } from 'react-router-dom';  
import UserContext from '../auth/UserContext';

function PrivateRoute({ children, path, exact }) {
  const { currentUser } = useContext(UserContext);

  if (!currentUser) {
    return <Redirect to="/login" />
  }

  return (
    <Route exact={exact} path={path} >
      {children}
    </Route>
  );
}

export default PrivateRoute