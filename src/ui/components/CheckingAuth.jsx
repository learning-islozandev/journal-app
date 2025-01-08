import { CircularProgress, Grid2 } from "@mui/material"

export const CheckingAuth = () => {
    return (
        <>
            <Grid2
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justifyContent="center"
                sx={{
                    minHeight: '100vh',
                    backgroundColor: 'primary.main',
                    padding: 4
                }} >

                <Grid2 container
                    justifyContent="center"

                    sx={{ width: { sm: '450' } }}
                >
                    <CircularProgress color="warning" />
                </Grid2>
            </Grid2>

        </>
    )
}