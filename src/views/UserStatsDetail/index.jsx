import React from 'react';
import UserDetail from './UserDetail';
import DetailChart from './DetailChart';
import { Container, Section } from './styles';
import BackButton from '../../components/BackButton';

function UserStatsDetail() {
  return (
    <Container>
      <BackButton to="/" />
      <Section>
        <UserDetail />
      </Section>
      <Section>
        <DetailChart />
      </Section>
    </Container>
  );
}

export default UserStatsDetail;
