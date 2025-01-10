import { useDispatch, useSelector } from "react-redux"
import { IconButton } from "@mui/material"

import { JournalLayout } from "../layout/JournalLayout"
import { NothingSelectView, NoteView } from "../views"
import { AddOutlined } from "@mui/icons-material"
import { startNewNote } from "../../store/journal"

export const JounalPage = () => {

  const dispatch = useDispatch();

  const { isSaving, active } = useSelector(state => state.journal)

  const onClickNewNote = () => {
    dispatch(startNewNote())
  }

  return (
    <>

      <JournalLayout>
        {
          (!!active) ? <NoteView /> : <NothingSelectView />
        }
        <IconButton
          disabled={isSaving}
          onClick={onClickNewNote}
          size="large"
          sx={{
            color: 'white',
            backgroundColor: 'error.main',
            ':hover': {
              backgroundColor: 'error.main', opacity: 0.9
            },
            position: 'fixed',
            right: 50,
            bottom: 50,

          }}
        >

          <AddOutlined sx={{ fontSize: 30 }} />

        </IconButton>

      </JournalLayout>
    </>
  )
}
