import React from 'react'
import { Container, Fab } from '@mui/material'
import Header from '../components/Header'
import PostList from '../components/PostList'
import { Add } from '@mui/icons-material'
import useStyles from './styles'
import { useDispatch } from 'react-redux'
import { showModal } from '../redux/reducers/modal'
import CreatePostModal from '../components/CreatePostModal'

const HomePage = () => {
  const classes = useStyles()
  const dispatch = useDispatch()

  return (
    <Container maxWidth="lg">
      <Header />
      <PostList />
      <CreatePostModal />
      <Fab
        color="primary"
        className={classes.fab}
        onClick={() => dispatch(showModal())}
      >
        <Add />
      </Fab>
    </Container>
  )
}

export default HomePage
