import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import {
  Button,
  FormControl,
  TextField,
  MenuItem,
  InputLabel,
  Snackbar
} from "@mui/material";
import Select from "@mui/material/Select";

import { useHistory } from "react-router-dom";
import useHttpReq from "../../hooks/useHttpReq";
import { Title, LoginContainer, Form } from "./styles";

function AddPatient() {
  const history = useHistory();

  const { request, isLoading } = useHttpReq({
    baseUrl: "http://192.168.100.69:3000",
    path: "/patients",
    method: "POST",
  });

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      sensor_id: "",
      birthdate: "",
      gender: "",
    },
  });

  const [errorOpen, setErrorOpen] = useState(false);

  const submit = async (values) => {
    const { data } = await request({ body: values });

    if (!data || data.type === "error") return setErrorOpen(true);

    return history.replace("/patients");
  };

  return (
    <LoginContainer>
      <Title>Add Patient</Title>
      <Form onSubmit={handleSubmit(submit)}>
        <TextField sx={{ mt: 2 }} label="Name" {...register("name")} />
        <TextField
          sx={{ mt: 2 }}
          label="Sensor ID"
          {...register("sensor_id")}
        />
        <Controller
          name="gender"
          control={control}
          render={({ field }) => (
            <FormControl sx={{ mt: 2 }}>
              <InputLabel id="gender-label">Gender</InputLabel>
              <Select
                labelId="gender-label"
                id="gender"
                value={field.value}
                label="Gender"
                onChange={field.onChange}
              >
                <MenuItem value="male">Male</MenuItem>
                <MenuItem value="female">Female</MenuItem>
              </Select>
            </FormControl>
          )}
        />

        <input
          style={{ marginTop: 12, height: 60 }}
          type="datetime-local"
          placeholder="Birth Date"
          {...register("birthdate")}
        />

        <Button type="submit" sx={{ mt: 2 }}>
          Submit
        </Button>
      </Form>
      <Snackbar
        open={errorOpen}
        autoHideDuration={6000}
        onClose={() => setErrorOpen(false)}
        message="Failed"
      />
    </LoginContainer>
  );
}

export default AddPatient;
