import { Button, Modal, TextField, TextareaAutosize } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import FileBase64 from 'react-file-base64'
import { hideModal } from '../../redux/reducers/modal'
import useStyles from './styles'
import { createPostRequest } from '../../redux/reducers/post'

const CreatePostModal = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const { isShow } = useSelector((state) => state.modal)
  const [data, setData] = useState({
    title: '',
    content: '',
    attachment: '',
  })

  const onSubmit = () => {
    dispatch(createPostRequest(data))
  }

  const body = (
    <div className={classes.paper} id="simple-modal-title">
      <h2>Create New Post</h2>
      <form noValidate autoComplete="off" className={classes.form}>
        <TextField
          className={classes.title}
          required
          label="Title"
          value={data.title}
          onChange={(e) => setData({ ...data, title: e.target.value })}
        />
        <TextareaAutosize
          className={classes.textarea}
          minRows={10}
          maxRows={15}
          placeholder="Content..."
          value={data.content}
          onChange={(e) => setData({ ...data, content: e.target.value })}
        />
        <FileBase64
          accept="image/*"
          multiple={false}
          type="file"
          value={data.attachment}
          onDone={({ base64 }) => setData({ ...data, attachment: base64 })}
        />
        <div className={classes.footer}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={onSubmit}
          >
            Create
          </Button>
        </div>
      </form>
    </div>
  )

  return (
    <Modal
      open={isShow}
      onClose={() => {
        dispatch(hideModal())
        setData({
          title: '',
          content: '',
          attachment: '',
        })
      }}
    >
      {body}
    </Modal>
  )
}

export default CreatePostModal
