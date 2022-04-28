import React, { useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import dayjs from 'dayjs';
import { Button, TextField } from '@mui/material';
import UserOxiCard from '../../components/UserOxiCard';
import { Container, ListItemAnimated } from './styles';

import useAnimatedList from '../../hooks/useAnimatedList';
import useHttpReq from '../../hooks/useHttpReq';

function UserStatsUpdate() {
  const updateIntervalInput = useRef(5);
  const [updateInterval, setUpdateInterval] = useState(5);

  const history = useHistory();

  const [data, setData] = useState([]);
  const {  request } = useHttpReq({
    baseUrl: 'http://localhost:3000',
    path: '/health/quick-update',
  });

  const [result] = useAnimatedList({
    data,
    idKeyName: 'sensor',
  });

  useEffect(() => {
    const interval = setInterval(async () => {
      const { data: res } = await request();
      setData(res);
    }, updateInterval * 1000);

    return () => clearInterval(interval);
  }, [updateInterval]);

  return (
    <>
      <TextField
        defaultValue={updateInterval}
        onChange={(ev) => {
          updateIntervalInput.current = Number(ev.target.value);
        }}
      />
      <Button
        onClick={() => {
          console.log(updateIntervalInput.current);
          setUpdateInterval(Number(updateIntervalInput.current));
        }}
      >
        Update Interval
      </Button>
      <Container>
        {result.map((info) => (
          <ListItemAnimated
            key={info.patient_id}
            style={{ top: info.index * 136 }}
          >
            <UserOxiCard
              sensorId={info.patient_data.patient_id}
              name={info.patient_data.name}
              age={dayjs().diff(info.patient_data.birthdate, 'year')}
              gender={info.patient_data.gender}
              spo2={info._value_spo2}
              bpm={info._value_bpm}
              onDetailClick={() => {
                history.push(`/updates/detail/${info.patient_data.patient_id}`);
              }}
            />
          </ListItemAnimated>
        ))}
      </Container>
    </>
  );
}

export default UserStatsUpdate;
