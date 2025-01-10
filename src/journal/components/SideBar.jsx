import { TurnedInNot } from "@mui/icons-material"
import { Box, Divider, Drawer, Grid2, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material"
import { useSelector } from "react-redux"

export const SideBar = ({ drawerWidth = 240 }) => {

    const { displayName } = useSelector(state => state.auth);

    return (
        <>
            <Box component='nav'
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}>

                <Drawer
                    variant="permanent" // temporary, permanent, persistent
                    open
                    sx={{
                        display: { xs: 'block' },
                        '& .MuiDrawer-paper': { width: drawerWidth, boxSizing: 'border-box' },
                    }}
                >

                    <Toolbar>
                        <Typography variant="h6" noWrap component='div'>
                            {displayName}
                        </Typography>
                    </Toolbar>

                    <Divider />

                    <List>
                        {
                            ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre',
                                'Octubre', 'Noviembre', 'Diciembre'].map((month) => (
                                    <ListItem button="true" key={month} disablePadding>
                                        <ListItemButton>
                                            <ListItemIcon >
                                                <TurnedInNot />
                                            </ListItemIcon>
                                            <Grid2>
                                                <ListItemText primary={month} />
                                                <ListItemText
                                                    style={{ color: 'red' }}
                                                    secondary="Et ex ullamco sunt veniam et enim proident."

                                                />
                                            </Grid2>
                                        </ListItemButton>
                                        <Divider />
                                    </ListItem>

                                ))
                        }
                    </List>

                </Drawer>

            </Box>
        </>
    )
}
