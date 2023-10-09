import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLoading: false,
  data: [],
}

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    getPostsRequest: (state) => {
      state.isLoading = true
    },
    getPostsSuccess: (state, action) => {
      state.isLoading = false
      state.data = action.payload
    },
    getPostsFailure: (state) => {
      state.isLoading = false
    },
    createPostRequest: (state) => {},
    createPostSuccess: (state, action) => {
      state.data = [...state.data, action.payload]
    },
    createPostFailure: (state) => {},
    updatePostRequest: (state) => {},
    updatePostSuccess: (state, action) => {
      state.data = state.data.map((post) =>
        post._id === action.payload._id ? action.payload : post
      )
    },
    updatePostFailure: (state) => {},
  },
})

export const {
  getPostsFailure,
  getPostsRequest,
  getPostsSuccess,
  createPostFailure,
  createPostRequest,
  createPostSuccess,
  updatePostFailure,
  updatePostRequest,
  updatePostSuccess,
} = postsSlice.actions
export default postsSlice.reducer
