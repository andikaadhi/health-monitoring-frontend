import React, { useContext } from 'react';
import { Switch, Route } from 'react-router-dom';
import Drawer from '../container/Drawer';
import LiveUpdatePanel from '../container/LiveUpdatePanel';
import { AuthContext } from '../contexts/AuthContext';
import Login from '../views/Login';
import AppNavigation from '../container/AppNavigation';
import PatientList from '../views/PatientList';
import AddPatient from '../views/AddPatient';
import UserStatsDetail from '../views/UserStatsDetail';

function Routes() {
  const { isLogin } = useContext(AuthContext);

  return (
    <>
      <AppNavigation />
      <Switch>
        {isLogin ? (
          <>
            <Route path="/">
              <LiveUpdatePanel />
            </Route>
            <Route path="/patients" exact>
              <PatientList />
            </Route>
            <Route path="/patients/add" exact>
              <AddPatient />
            </Route>
            <Route path="/patients/:patientId/detail" exact>
              <UserStatsDetail />
            </Route>
          </>
        ) : (
          <Route path="/">
            <Login />
          </Route>
        )}
      </Switch>
    </>
  );
}

export default Routes;
