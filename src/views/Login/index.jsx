import { Button, TextField } from "@mui/material";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../contexts/AuthContext";
import useHttpReq from "../../hooks/useHttpReq";
import { Title, LoginContainer, Form } from "./styles";

const Login = () => {
  const { saveAuthToken } = useContext(AuthContext);

  const { request, isLoading } = useHttpReq({
    baseUrl: "http://localhost:3000",
    path: "/admins/login",
    method: "POST",
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: { email: "", password: "" } });

  const login = async (values) => {
    const { data } = await request({ body: values });

    saveAuthToken(data.token);
  };

  return (
    <LoginContainer>
      <Title>Login</Title>
      <Form onSubmit={handleSubmit(login)}>
        <TextField {...register("email")} />
        <TextField {...register("password")} />
        <Button type="submit">Submit</Button>
      </Form>
    </LoginContainer>
  );
};

export default Login;
