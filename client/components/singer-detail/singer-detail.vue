<template>
<transition name="slide">
  <div class="singer-detail">
      singer detail page
  </div>
</transition>
</template>

<script type="text/ecmascript-6">
import {mapGetters} from 'vuex'
import {getSingerDetail} from 'api/singer'
import {createSong} from 'common/js/song'
export default {
  data() {
    songs:[]
  },
  computed: {
    // ...mapGetters([
    //   'singer'
    // ])
  },
  created() {
    getSingerDetail().then(res => {
      if(res.code === 0){
        console.log(res.req_0.data.tracks)
        this.songs = this._normalizeSoneList(res.req_0.data.tracks)
        console.log(this.songs)
      }
    })
  },
  methods:{
    _normalizeSoneList(list) {
      let ret = []
      list.forEach(track => {
        if(track.ksong.id && track.album.id) {
          console.log("createSong")
          console.log(track)
          ret.push(createSong(track))
        }
      })
      return ret
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import "~common/stylus/variable"
.singer-detail
  position: fixed
  z-index: 100
  top:0
  left:0
  right:0
  bottom: 0
  background :$color-background

.slide-enter-active, .slide-leave-active
  transition: all 0.3s

.slide-enter, .slide-leave-to
  transform: translate3d(100%, 0,0)
</style>
