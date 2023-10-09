import { createTheme } from '@mui/material/styles'
import { makeStyles } from '@mui/styles'

const theme = createTheme()

export default makeStyles(() => ({
  container: {
    backgroundColor: theme.palette.primary.main,
    color: 'white',
    marginBottom: 20,
    fontWeight: 'lighter',
    padding: '5px 0'
  },
}))
