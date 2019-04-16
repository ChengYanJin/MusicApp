<template>
<transition name="slide">
  <!-- <music-list :title="title" :bg-image="bgImage" :songs="songs"> -->
 <!-- </music-list> --> -->
  <h1>Bonjour Yanjin</h1>
</transition>
</template>

<script type="text/ecmascript-6">
import {mapGetters} from 'vuex'
import {getSingerDetail} from 'api/singer'
import {createSong} from 'common/js/song'
import MusicList from 'components/music-list/music-list'

export default {
  data() {
    return{
      songs:[]
    }
  },
  activated(){
    console.log("activated")
    console.log(this.singer)
    },
  computed: {
    title(){
      return this.singer.name
    },
    bgImage(){
      return this.singer.avatar
    },
    ...mapGetters([ // get data suger syntax
      'singer'
    ])
  },
  created() {
    console.log("created")
    getSingerDetail().then(res => { // mock data 获得歌手详情
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
          console.log(track)
          ret.push(createSong(track))
        }
      })
      return ret
    }
  },
  mounted(){
    console.log("mounted")
  },
  components:{
    MusicList
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import "~common/stylus/variable"

.slide-enter-active, .slide-leave-active
  transition: all 0.3s

.slide-enter, .slide-leave-to
  transform: translate3d(100%, 0,0)
</style>
