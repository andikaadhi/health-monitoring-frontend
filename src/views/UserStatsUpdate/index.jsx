import React, { useEffect, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import dayjs from "dayjs";
import { Button, TextField } from "@mui/material";
import UserOxiCard from "../../components/UserOxiCard";
import { Container, ListItemAnimated } from "./styles";

import useAnimatedList from "../../hooks/useAnimatedList";
import useHttpReq from "../../hooks/useHttpReq";

function UserStatsUpdate() {
  const updateIntervalInput = useRef(5);
  const [updateInterval, setUpdateInterval] = useState(60);

  const history = useHistory();

  const [data, setData] = useState([]);
  const { request } = useHttpReq({
    baseUrl: "http://localhost:3000",
    path: "/health/quick-update",
  });

  const [result] = useAnimatedList({
    data,
    idKeyName: "sensor",
  });

  useEffect(() => {
    const fetch = async () => {
      const { data: res } = await request();
      setData(res);
    };
    fetch();

    const interval = setInterval(fetch, updateInterval * 1000);

    return () => clearInterval(interval);
  }, [updateInterval]);

  return (
    <>
      <TextField
        sx={{ my: 3 }}
        defaultValue={updateInterval}
        onChange={(ev) => {
          updateIntervalInput.current = Number(ev.target.value);
        }}
      />
      <Button
        sx={{ mt: 4 }}
        onClick={() => {
          console.log(updateIntervalInput.current);
          setUpdateInterval(Number(updateIntervalInput.current));
        }}
      >
        Update Interval
      </Button>
      <Container>
        {result.map((info) => (
          <ListItemAnimated key={info.sensor} style={{ top: info.index * 136 }}>
            <UserOxiCard
              sensorId={info.patient_data?.sensor_id}
              name={info.patient_data?.name}
              age={dayjs().diff(info.patient_data?.birthdate, "year")}
              gender={info.patient_data?.gender}
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
