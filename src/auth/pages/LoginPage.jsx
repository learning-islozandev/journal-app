import { Button, Grid2, TextField, Typography, Link } from "@mui/material";
import { Google } from "@mui/icons-material";
import { Link as RouterLink } from "react-router";
import { AuthLayout } from "../layout/AuthLayout";

export const LoginPage = () => {
  return (
    <>

      <AuthLayout title="Iniciar Sesion...">
        <form>
          <Grid2 container>
            <Grid2 item='true' size={{ xs: 12 }} sx={{ mt: 2 }}>
              <TextField label='Correo' type="email" placeholder="correo@gmail.com" fullWidth />
            </Grid2>
            <Grid2 item='true' size={{ xs: 12 }} sx={{ mt: 2 }}>
              <TextField label='Contrasena' type="password" placeholder="Contrasena" fullWidth />
            </Grid2>
          </Grid2>
          <Grid2 container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid2 item='true' size={{ xs: 12, sm: 6 }} sx={{ mt: 2 }} >
              <Button variant='contained' color='primary' fullWidth sx={{ height: 40 }}>
                Ingresar
              </Button>
            </Grid2>

            <Grid2 item='true' size={{ xs: 12, sm: 6 }} sx={{ mt: 2 }} >
              <Button variant='contained' color='primary' fullWidth sx={{ height: 40 }}>
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
