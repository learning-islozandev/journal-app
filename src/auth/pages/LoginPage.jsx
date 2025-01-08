import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink } from "react-router";

import { Button, Grid2, TextField, Typography, Link, Alert } from "@mui/material";
import { Google } from "@mui/icons-material";

import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks";
import { checkingAuthentication, startGoogleSignIn, startLoginWithEmailPassword } from "../../store/auth";
import { useMemo } from "react";

export const LoginPage = () => {

  const dispatch = useDispatch();

  const { status, errorMessage } = useSelector(state => state.auth);

  const { email, password, onInputChange } = useForm({
    email: '',
    password: '',
  });

  const onSubmit = (event) => {
    event.preventDefault();
    // dispatch(checkingAuthentication());
    dispatch(startLoginWithEmailPassword({ email, password }));
  }

  const onGoogleSignIn = () => {
    dispatch(startGoogleSignIn());
  }

  const isAuthenticated = useMemo(() => status === 'checking', [status]);

  return (
    <>
      <AuthLayout title="Iniciar Sesion...">
        <form onSubmit={onSubmit}>
          <Grid2 container>
            <Grid2 item='true' size={{ xs: 12 }} sx={{ mt: 2 }}>
              <TextField label='Correo' type="email" placeholder="correo@gmail.com" fullWidth
                name="email" onChange={onInputChange} value={email} />
            </Grid2>
            <Grid2 item='true' size={{ xs: 12 }} sx={{ mt: 2 }}>
              <TextField label='Contrasena' type="password" placeholder="Contrasena" fullWidth
                name="password" onChange={onInputChange} value={password} />
            </Grid2>
          </Grid2>
          <Grid2 container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid2 item='true' size={{ xs: 12 }} sx={{ mt: 2 }} display={!!errorMessage ? 'block' : 'none'} justifyContent={'normal'}>
              <Alert severity="error"> {errorMessage} </Alert>
            </Grid2>

            <Grid2 item='true' size={{ xs: 12, sm: 6 }} sx={{ mt: 2 }} >
              <Button variant='contained' color='primary' fullWidth sx={{ height: 40 }} type="submit"
                disabled={isAuthenticated}>
                Ingresar
              </Button>
            </Grid2>

            <Grid2 item='true' size={{ xs: 12, sm: 6 }} sx={{ mt: 2 }} >
              <Button variant='contained' color='primary' fullWidth sx={{ height: 40 }}
                onClick={onGoogleSignIn}
                disabled={isAuthenticated}
              >
                <Google />
                <Typography sx={{ ml: 1, textTransform: "capitalize" }}> Google </Typography>
              </Button>
            </Grid2>
          </Grid2>
          <Grid2 container direction='row' justifyContent='end' sx={{ mt: 2 }}>
            <Link component={RouterLink} color="inherit" to="/auth/register">
              Crear cuenta
            </Link>
          </Grid2>
        </form>
      </AuthLayout>
    </>
  )
}



