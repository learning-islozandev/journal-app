import { useState } from "react";
import { Button, Grid2, TextField, Typography, Link } from "@mui/material";
import { Link as RouterLink } from "react-router";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks";
import { useDispatch } from "react-redux";
import { startCreatingUserWithEmailPassword } from "../../store/auth";

const formData = {
  email: '',
  password: '',
  displayName: ''
}

// const formValidations = {
//   email: {
//     required: { value: true, message: 'El correo es requerido' },
//     pattern: {
//       value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
//       message: 'El correo no es valido'
//     }
//   },
//   password: {
//     required: { value: true, message: 'La contrasena es requerida' },
//     minLength: { value: 6, message: 'La contrasena debe tener al menos 6 caracteres' }
//   },
//   displayName: {
//     required: { value: true, message: 'El nombre es requerido' },
//     minLength: { value: 3, message: 'El nombre debe tener al menos 3 caracteres' }
//   }
// };

const formValidations = {
  email: [(value) => value.includes('@'), 'El correo no es valido, debe tener un @'],
  password: [(value) => value.length >= 6, 'La contrasena debe tener al menos 6 caracteres'],
  displayName: [(value) => value.length >= 3, 'El nombre debe tener al menos 3 caracteres']
}

export const RegisterPage = () => {

  const dispatch = useDispatch();

  const [formSubmited, setFormSubmited] = useState(false);

  const { onInputChange,
    formState, displayName, email, password,
    isFormValid, displayNameValid, emailValid, passwordValid } = useForm(formData, formValidations);

  const onSubmit = (event) => {
    event.preventDefault();
    setFormSubmited(true);
    if (!isFormValid) return;

    dispatch(startCreatingUserWithEmailPassword(formState));
  }

  return (
    <>
      <AuthLayout title="User registration....">
        <form onSubmit={onSubmit}>
          <Grid2 container>
            <Grid2 item='true' size={{ xs: 12 }} sx={{ mt: 2 }}>
              <TextField label='Nombre Completo' type="text" placeholder="Ingrese su nombre" fullWidth
                name="displayName"
                value={displayName}
                onChange={onInputChange}
                error={!!displayNameValid && formSubmited}
                helperText={displayNameValid}
              />
            </Grid2>
            <Grid2 item='true' size={{ xs: 12 }} sx={{ mt: 2 }}>
              <TextField label='Correo' type="email" placeholder="correo@gmail.com" fullWidth
                name="email"
                value={email}
                onChange={onInputChange}
                error={!!emailValid && formSubmited}
                helperText={emailValid}

              />
            </Grid2>
            <Grid2 item='true' size={{ xs: 12 }} sx={{ mt: 2 }}>
              <TextField label='Contrasena' type="password" placeholder="Contrasena" fullWidth
                name="password"
                value={password}
                onChange={onInputChange}
                error={!!passwordValid && formSubmited}
                helperText={passwordValid}
              />
            </Grid2>
          </Grid2>
          <Grid2 container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid2 item='true' size={{ xs: 12 }} sx={{ mt: 2 }} >
              <Button type="submit"
                variant='contained' color='primary' fullWidth sx={{ height: 40 }}>
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
