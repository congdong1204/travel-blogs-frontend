import { takeLatest, call, put } from 'redux-saga/effects'
import * as api from '../../api'
import {
  getPostsRequest,
  getPostsSuccess,
  getPostsFailure,
  createPostSuccess,
  createPostFailure,
  createPostRequest,
  updatePostRequest,
  updatePostFailure,
  updatePostSuccess,
} from '../reducers/post'

function* fetchPostsSaga(action) {
  try {
    const posts = yield call(api.fetchPosts)
    yield put(getPostsSuccess(posts.data))
  } catch (err) {
    console.error(err)
    yield put(getPostsFailure())
  }
}

function* createPostSaga(action) {
  try {
    const post = yield call(api.createPost, action.payload)
    yield put(createPostSuccess(post.data))
  } catch (err) {
    console.error(err)
    yield put(createPostFailure())
  }
}

function* updatePostSaga(action) {
  try {
    const updatedPost = yield call(api.updatePost, action.payload)
    console.log('update post', updatedPost)
    yield put(updatePostSuccess(updatedPost.data))
  } catch (err) {
    console.error(err)
    yield put(updatePostFailure())
  }
}

function* mySaga() {
  yield takeLatest(getPostsRequest.type, fetchPostsSaga)
  yield takeLatest(createPostRequest.type, createPostSaga)
  yield takeLatest(updatePostRequest.type, updatePostSaga)
}

export default mySaga
