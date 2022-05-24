import { Typography } from '@mui/material';
import dayjs from 'dayjs';
import React from 'react';
import { Div } from '../../../../style-system/components';
import ProfileImg from './ProfileImg';
import { Container, Label, Value } from './styles';

function UserInfo({
  name, age, gender, spo2LastUpdated, bpmLastUpdated,
}) {
  return (
    <Container>
      <ProfileImg />
      <Div space={{ pb: 2 }}>
        <Label>Name</Label>
        <Value>{name}</Value>
        <Label>Age</Label>
        <Value>{age}</Value>
        <Label>Gender</Label>
        <Value>{gender}</Value>
        <Typography sx={{ mt: 3 }} fontSize={12}>
          Data last updated at
        </Typography>
        <Typography fontSize={12}>
          SpO2:
          {dayjs(spo2LastUpdated).format('DD-MM-YYYY HH:mm:ss')}
        </Typography>
        <Typography fontSize={12}>
          BPM:
          {dayjs(spo2LastUpdated).format('DD-MM-YYYY HH:mm:ss')}
        </Typography>
      </Div>
    </Container>
  );
}

export default UserInfo;
