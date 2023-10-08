import {takeLatest, call} from 'redux-saga/effects'
import * as actions from '../actions'
import * as api from '../../api'

function* fetchPostsSaga(action) {
    const post = yield call(api.fetchPosts)
    console.log('[post]', post)
}

function* mySaga() {
    yield takeLatest(actions.getPosts.getPostsRequest, fetchPostsSaga)
}

export default mySaga