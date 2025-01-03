import { SaveOutlined } from "@mui/icons-material";
import { Button, Grid2, TextField, Typography } from "@mui/material";
import { ImageGallery } from "../components";

export const NoteView = () => {
    return (
        <>
            <Grid2 container
                direction="row"
                justifyContent="space-between"
                alignContent='center'
                sx={{ mb: 3 }} >

                <Grid2 item='true'>
                    <Typography fontSize={39} fontWeight='light' >28 de Agosto 2024</Typography>
                </Grid2>
                <Grid2 item='true'>
                    <Button color='primary' sx={{ padding: 2 }} >
                        <SaveOutlined sx={{ fontSize: 30, mr: 1 }} /> Save
                    </Button>
                </Grid2>
            </Grid2>


            <Grid2 container>
                <TextField
                    type="text"
                    variant="filled"
                    fullWidth
                    placeholder="Ingrese Titulo"
                    label="Titulo"
                    sx={{ border: 'none', mb: 2 }}
                />
                <TextField
                    type="text"
                    variant="filled"
                    fullWidth
                    multiline
                    placeholder="Que sucedio el dia de hoy?"
                    minRows={4}
                />
            </Grid2>

            {/* Image Gallery */}
            <ImageGallery />
        </>
    )
}
