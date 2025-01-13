import { TurnedInNot } from "@mui/icons-material"
import { Divider, Grid2, ListItem, ListItemButton, ListItemIcon, ListItemText, Tooltip } from "@mui/material"
import { useMemo } from "react"
import { useDispatch } from "react-redux"
import { setActiveNote } from "../../store/journal/journalSlice"


export const SideBarItem = ({ title = '', body, id, imageUrls = [], date }) => {
    const dispatch = useDispatch();

    const newTitle = useMemo(() => {
        return title.length > 15 ? title.slice(0, 15) + '...' : title
    }, [title])

    const note = { title, body, id, imageUrls, date }
    const onClickSetNoteActived = () => {

        dispatch(setActiveNote(note))
    }


    return (
        <ListItem button="true" disablePadding>
            <ListItemButton onClick={onClickSetNoteActived}>
                <ListItemIcon >
                    <TurnedInNot />
                </ListItemIcon>
                <Grid2>
                    <Tooltip title={title}>
                        <ListItemText primary={newTitle} />
                    </Tooltip>
                    <ListItemText
                        style={{ color: 'red' }}
                        secondary={body}
                    />
                </Grid2>
            </ListItemButton>
            <Divider />
        </ListItem>
    )
}
