import { Box, Toolbar } from "@mui/material"
import { NavBar, SideBar } from "../components";

const drawerWidth = 280;


export const JournalLayout = ({ children }) => {
    return (
        <Box 
        className='animate__animated animate__fadeIn animate__faster'
        sx={{ display: 'flex' }}>
            {/* Nav bar */}
            <NavBar drawerWidth={drawerWidth} />

            <SideBar drawerWidth={drawerWidth} />

            {/* Slider drawerWidth */}
            <Box component='main' sx={{ flexGrow: 1, p: 2 }}>
                <Toolbar />                
                {children}
            </Box>
        </Box>
    )
}
