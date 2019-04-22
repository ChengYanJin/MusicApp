import * as types from './mutation-types'

const mutations = {
  [types.SET_SINGER](state, payload) {
    state.singer = payload
  },
  [types.SET_PLAYING_STATE](state, flag) {
    state.playing = flag
  },
  [types.SET_PLAYLIST](state, list) {
    state.playlist = list
  },
  [types.SET_CURRENT_INDEX] (state, index) {
    state.currentIndex = index
  },
}

export default mutations
