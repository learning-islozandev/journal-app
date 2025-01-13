import { SaveOutlined } from "@mui/icons-material";
import { Button, Grid2, TextField, Typography } from "@mui/material";
import { ImageGallery } from "../components";

import { useForm } from '../../hooks';
import { useSelector } from "react-redux";
import { useMemo } from "react";

export const NoteView = () => {
    const { active: note } = useSelector(state => state.journal);

    const { body, title, onInputChange, fonState, date } = useForm(note);

    const dateString = useMemo(() => { return date }, [date])

    return (
        <>
            <Grid2
                className='animate__animated animate__fadeIn animate__faster'
                container
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
                    name="title"
                    value={title}
                    onChange={onInputChange}
                />
                <TextField
                    type="text"
                    variant="filled"
                    fullWidth
                    multiline
                    placeholder="Que sucedio el dia de hoy?"
                    minRows={4}
                    name="body"
                    value={body}
                    onChange={onInputChange}
                />
            </Grid2>

            {/* Image Gallery */}
            <ImageGallery />
        </>
    )
}
