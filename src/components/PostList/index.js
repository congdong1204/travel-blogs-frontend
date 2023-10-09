import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { Grid } from '@mui/material'
import React from 'react'
import Post from './Post'
import { getPostsRequest } from '../../redux/reducers/post'

const PostList = () => {
  const dispatch = useDispatch()
  const { isLoading, data } = useSelector((state) => state.posts)
  useEffect(() => {
    dispatch(getPostsRequest())
  }, [dispatch])

  return (
    <Grid container spacing={2} alignItems="stretch">
      {data.map((post) => {
        return (
          <Grid key={post._id} item xs={12} sm={6}>
            <Post post={post} />
          </Grid>
        )
      })}
    </Grid>
  )
}

export default PostList
