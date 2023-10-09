import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from '@mui/material'
import { Favorite, MoreVert } from '@mui/icons-material'
import React from 'react'
import moment from 'moment'
import useStyles from './styles'
import { useDispatch } from 'react-redux'
import { updatePostRequest } from '../../../redux/reducers/post'

const Post = ({ post }) => {
  const dispatch = useDispatch()
  const classes = useStyles()
  const onLikeButtonClick = () => {
    dispatch(updatePostRequest({ ...post, likeCount: post.likeCount + 1 }))
  }

  return (
    <Card>
      <CardHeader
        avatar={<Avatar>A</Avatar>}
        title={post.author}
        subheader={moment(post.updatedAt).format('HH:MM MMM DD, YYYY')}
        action={
          <IconButton>
            <MoreVert />
          </IconButton>
        }
      />
      <CardMedia
        image={post.attachment}
        title="Title"
        className={classes.media}
      />
      <CardContent>
        <Typography variant="h5" color="textPrimary">
          {post.title}
        </Typography>
        <Typography variant="body2" component="p" color="textSecondary">
          {post.content}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton onClick={onLikeButtonClick}>
          <Favorite />
          <Typography component="span" color="textSecondary">
            {post.likeCount}
          </Typography>
        </IconButton>
      </CardActions>
    </Card>
  )
}

export default Post
