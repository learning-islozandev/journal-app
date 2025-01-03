import { Box, Toolbar } from "@mui/material"
import { NavBar, SideBar } from "../components";

const drawerWidth = 280;


export const JournalLayout = ({ children }) => {
    return (
        <Box sx={{ display: 'flex' }}>
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
