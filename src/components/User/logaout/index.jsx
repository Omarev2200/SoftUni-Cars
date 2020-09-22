import React from 'react';
import { useHistory } from "react-router-dom";
import { StoreContext } from '../../Store/Store';
import { logout } from '../../Store/actions';

function Logout() {
  let history = useHistory();
  const { dispatch } = React.useContext(StoreContext);
  dispatch(logout());
  // window.location.href = '/'
  history.push("/")
  return null;
}

export default Logout;