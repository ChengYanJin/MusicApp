<template>
<transition name="slide">
  <music-list :title="title" :singer-mid="singerMid" :songs="songs"></music-list>
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
    console.log(this.singer.singer_mid)
    },
  computed: {
    title(){
      return this.singer.singer_name
    },
    singerMid(){
      return this.singer.singer_mid
    },
    ...mapGetters([ // get data suger syntax
      'singer'
    ])
  },
  created() {

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
