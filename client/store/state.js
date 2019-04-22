import {playMode} from 'common/js/config'
 const state = {
  singer: {},
  // boardcast components
  playing: false,
  fullscreen: false,
  playlist: [],
  sequenceList: [],
  mode: playMode.sequence,
  currentIndex: -1, // current playing song 
}

export default state
