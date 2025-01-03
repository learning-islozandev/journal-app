import { Button, Grid2, TextField, Typography, Link } from "@mui/material";
import { Link as RouterLink } from "react-router";
import { AuthLayout } from "../layout/AuthLayout";

export const RegisterPage = () => {
  return (
    <>

      <AuthLayout title="User registration....">
        <form>
          <Grid2 container>
            <Grid2 item='true' size={{ xs: 12 }} sx={{ mt: 2 }}>
              <TextField label='Nombre Completo' type="text" placeholder="Ingrese su nombre" fullWidth />
            </Grid2>
            <Grid2 item='true' size={{ xs: 12 }} sx={{ mt: 2 }}>
              <TextField label='Correo' type="email" placeholder="correo@gmail.com" fullWidth />
            </Grid2>
            <Grid2 item='true' size={{ xs: 12 }} sx={{ mt: 2 }}>
              <TextField label='Contrasena' type="password" placeholder="Contrasena" fullWidth />
            </Grid2>
          </Grid2>
          <Grid2 container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid2 item='true' size={{ xs: 12 }} sx={{ mt: 2 }} >
              <Button variant='contained' color='primary' fullWidth sx={{ height: 40 }}>
                Crear cuenta
              </Button>
            </Grid2>
          </Grid2>
          <Grid2 container direction='row' justifyContent='end' sx={{ mt: 2 }}>
            <Typography sx={{ mr: 1 }}>
              Ya tienes cuenta?
            </Typography>
            <Link component={RouterLink} color="inherit" to="/auth">
              Ingresar
            </Link>
          </Grid2>
        </form>
      </AuthLayout>

    </>
  )
}
