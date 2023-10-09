import { createTheme } from '@mui/material/styles'
import { makeStyles } from '@mui/styles'

const theme = createTheme()

export default makeStyles(() => ({
  fab: {
    position: 'fixed !important',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}))
