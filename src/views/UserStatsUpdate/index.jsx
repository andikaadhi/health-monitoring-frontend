import React, { useEffect, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import dayjs from "dayjs";
import UserOxiCard from "../../components/UserOxiCard";
import { Container, ListItemAnimated } from "./styles";

import useAnimatedList from "../../hooks/useAnimatedList";
import useHttpReqData from "../../hooks/useHttpReqData";
import { Button, TextField } from "@mui/material";

const DATA = [
  [
    {
      sensorId: "20",
      name: "Kevin",
      age: 19,
      gender: "Male",
      spo2: "90%",
      bpm: 88,
    },
    {
      sensorId: "3",
      name: "Mario",
      age: 19,
      gender: "Male",
      spo2: "90%",
      bpm: 88,
    },
    {
      sensorId: "2",
      name: "Kevin",
      age: 19,
      gender: "Male",
      spo2: "90%",
      bpm: 88,
    },
    {
      sensorId: "33",
      name: "Mario",
      age: 19,
      gender: "Male",
      spo2: "90%",
      bpm: 88,
    },
    {
      sensorId: "44",
      name: "Gino Baru",
      age: 19,
      gender: "Male",
      spo2: "90%",
      bpm: 88,
    },
    {
      sensorId: "1",
      name: "Andika",
      age: 19,
      gender: "Male",
      spo2: "90%",
      bpm: 88,
    },
  ],
  [
    // { sensorId: "100", name: "Andika", age: 19, gender: "Male" },
    // { sensorId: "300", name: "Mario", age: 19, gender: "Male" },
    // { sensorId: "200", name: "Kevin", age: 19, gender: "Male" },
    // { sensorId: "2000", name: "Kevin", age: 19, gender: "Male" },
    // { sensorId: "3000", name: "Mario", age: 19, gender: "Male" },
    // { sensorId: "1000", name: "Andika", age: 19, gender: "Male" },
    // { sensorId: "4000", name: "Gino", age: 19, gender: "Male" },
    {
      sensorId: "2",
      name: "Kevin",
      age: 19,
      gender: "Male",
      spo2: "90%",
      bpm: 88,
    },
    {
      sensorId: "20",
      name: "Kevin",
      age: 19,
      gender: "Male",
      spo2: "90%",
      bpm: 88,
    },
    {
      sensorId: "3",
      name: "Mario",
      age: 19,
      gender: "Male",
      spo2: "90%",
      bpm: 88,
    },
    {
      sensorId: "33",
      name: "Mario",
      age: 19,
      gender: "Male",
      spo2: "90%",
      bpm: 88,
    },
    {
      sensorId: "44",
      name: "Gino Baru",
      age: 19,
      gender: "Male",
      spo2: "90%",
      bpm: 88,
    },
    {
      sensorId: "1",
      name: "Andika",
      age: 19,
      gender: "Male",
      spo2: "90%",
      bpm: 88,
    },
  ],
];

const UserStatsUpdate = () => {
  const updateIntervalInput = useRef(5);
  const [updateInterval, setUpdateInterval] = useState(5);

  const history = useHistory();

  const { data, isLoading, request } = useHttpReqData({
    baseUrl: "http://localhost:3000",
    path: "/health/quick-update",
  });

  const [result] = useAnimatedList({
    data,
    idKeyName: "sensorId",
  });

  useEffect(() => {
    console.log(updateInterval);
    const interval = setInterval(() => {
      request();
    }, updateInterval * 1000);

    return () => clearInterval(interval);
  }, [updateInterval]);

  if (isLoading) return null;

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
          console.log(updateIntervalInput.current)
          setUpdateInterval(Number(updateIntervalInput.current))}
        }
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
              age={dayjs().diff(info.patient_data.birthdate, "year")}
              gender={info.patient_data.gender}
              spo2={info._value_spo2}
              bpm={data._value_bpm}
              onDetailClick={() => {
                history.push(`/updates/detail/${info.patient_data.patient_id}`);
              }}
            />
          </ListItemAnimated>
        ))}
      </Container>
    </>
  );
};

export default UserStatsUpdate;
