import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Text } from '../../style-system/components';
import LiveUpdateContainer from './styles';
import UserStatsUpdate from '../../views/UserStatsUpdate';
import UserStatsDetail from '../../views/UserStatsDetail';

function LiveUpdatePanel() {
  return (
    <LiveUpdateContainer>
      <Text fontSize={4} level="lg" bold>
        Live Update Panel
      </Text>
      <Switch>
        <Route path="/" name="User Stats Update" exact>
          <UserStatsUpdate />
        </Route>
        <Route path="/updates/detail/:patientId" name="User Stats Detail" exact>
          <UserStatsDetail />
        </Route>
      </Switch>
    </LiveUpdateContainer>
  );
}

export default LiveUpdatePanel;
