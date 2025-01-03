import { IconButton } from "@mui/material"
import { JournalLayout } from "../layout/JournalLayout"
import { NothingSelectView, NoteView } from "../views"
import { AddOutlined } from "@mui/icons-material"

export const JounalPage = () => {
  return (
    <>

      <JournalLayout>
        {/* <Typography>
          Enim nostrud ex culpa aliquip proident in. Ut ex velit ea dolor id non. Occaecat exercitation consectetur consequat incididunt ullamco voluptate quis proident voluptate cupidatat aliqua. Aute quis ut duis labore exercitation ipsum. Do esse do laborum consequat officia enim. Enim pariatur non ea deserunt deserunt ad enim.
        </Typography> */}


        <NothingSelectView />
        {/* <NoteView /> */}


        <IconButton
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
