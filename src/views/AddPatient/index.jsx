import React from "react";
import useHttpReq from "../../hooks/useHttpReq";
import { Controller, useForm } from "react-hook-form";
import { Button, FormControl, TextField } from "@mui/material";
import Select from "@mui/material/Select";
import { MenuItem } from "@mui/material";
import { InputLabel } from "@mui/material";
import { Title, LoginContainer, Form } from "./styles";
import { useHistory } from "react-router-dom";

const AddPatient = () => {
  const history = useHistory();

  const { request, isLoading } = useHttpReq({
    baseUrl: "http://localhost:3000",
    path: "/patients",
    method: "POST",
  });

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { name: "", sensor_id: "", birthdate: "", gender: "" },
  });

  const submit = async (values) => {
    const { data } = await request({ body: values });

    if (data.type === "error") return "error";

    return history.replace("/patients");
  };

  return (
    <LoginContainer>
      <Title>Add Patient</Title>
      <Form onSubmit={handleSubmit(submit)}>
        <TextField label="Name" {...register("name")} />
        <TextField label="Sensor ID" {...register("sensor_id")} />
        <Controller
          name="gender"
          control={control}
          render={({ field }) => (
            <FormControl>
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
          type="datetime-local"
          placeholder="Birth Date"
          {...register("birthdate")}
        />

        <Button type="submit">Submit</Button>
      </Form>
    </LoginContainer>
  );
};

export default AddPatient;
