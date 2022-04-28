import { Button, TextField, Snackbar } from "@mui/material";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../contexts/AuthContext";
import useHttpReq from "../../hooks/useHttpReq";
import { Title, LoginContainer, Form } from "./styles";

function Login() {
  const { saveAuthToken } = useContext(AuthContext);

  const { request } = useHttpReq({
    baseUrl: "http://localhost:3000",
    path: "/admins/login",
    method: "POST",
  });

  const { register, handleSubmit } = useForm({
    defaultValues: { email: "", password: "" },
  });

  const [errorOpen, setErrorOpen] = useState(false);

  const login = async (values) => {
    const { data } = await request({ body: values });

    if (!data) return setErrorOpen(true);

    return saveAuthToken(data.token);
  };

  return (
    <LoginContainer>
      <Title>Login</Title>
      <Form onSubmit={handleSubmit(login)}>
        <TextField sx={{ pt: 4 }} placeholder="Email" {...register("email")} />
        <TextField
          sx={{ pt: 2 }}
          placeholder="Password"
          {...register("password")}
        />
        <Button sx={{ mt: 4 }} type="submit">
          Submit
        </Button>
      </Form>
      <Snackbar
        open={errorOpen}
        autoHideDuration={6000}
        onClose={() => setErrorOpen(false)}
        message="Unauthorized"
      />
    </LoginContainer>
  );
}

export default Login;
