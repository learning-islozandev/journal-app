import { Box } from "@mui/material"
import { NavBar } from "../components";

const drawerWidth = 240;


export const JournalLayout = ({ children }) => {
    return (
        <Box sx={{ display: 'flex' }}>
            {/* Nav bar */}
            <NavBar drawerWidth={drawerWidth} />


            {/* Slider drawerWidth */}
            <Box component='main' sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}>
                {children}
            </Box>
        </Box>
    )
}
