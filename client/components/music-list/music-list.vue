<template>
  <div class="music-list">
       <div class="back">
        <i class="icon-back"></i>
      </div>
    <h1 class="title" v-html="title"></h1>

    <div class="bg-image" :style="bgStyle" ref="bgImage">
      <div class="filter"></div>
    </div>

    <div class="bg-layer" ref="layer"></div>

    <scroll class="list" @scroll="scroll" :data="songs" ref="list" :probe-type="probeType" :listen-scroll="listenScroll">
      <div class="song-list-wrapper">
        <song-list @select="selectItem" :songs="songs"></song-list>
      </div>
    </scroll>
  </div>
</template>

<script type="text/ecmascript-6">
import Scroll from 'base/scroll/scroll'
import SongList from 'base/song-list/song-list'
import {mapActions} from 'vuex'

export default{
  props:{
    singerMid: {
      type:String,
      default:''
    },
    songs: {
      type: Array,
      default:[]
    },
    title: {
      type: String,
      default:''
    },
  },
  data(){
    return{
      scrollY: 0,
    }
  },
  created(){ // monitor the scroll
  this.probeType = 2
  this.listenScroll = true
  },
  mounted(){
    this.imageHeight = this.$refs.bgImage.clientHeight
    this.minTranslatY = -this.imageHeight
    this.$refs.list.$el.style.top=`${this.$refs.bgImage.clientHeight}px`
  },
  computed:{
    bgStyle(){
      return `background-image:url(https://y.gtimg.cn/music/photo_new/T001R300x300M000${this.singerMid}.jpg?max_age=2592000)`
    }
  },
  methods:{
    scroll(posY){
      this.scrollY = posY
    },
    selectItem(song, index){
      this.selectPlay({
        list:this.songs,
        index
      })
    },
    ...mapActions([
      'selectPlay'
    ])
  },
  watch:{
    scrollY(newY){ // bg-layer也能随scroll滚动
      let translate = Math.max(this.minTranslatY,newY)
      let zIndex = 0
      this.$refs.layer.style['transform']=`translate3d(0,${translate}px,0)`
      this.$refs.layer.style['webkitTransform']=`translate3d(0,${translate}px,0)`

      if(newY < this.minTranslatY){
        zIndex = 10
        this.$refs.bgImage.style.paddingTop = 0
        this.$refs.bgImage.style.height = `40px`
      }else{
        this.$refs.bgImage.style.paddingTop = '70%'
        this.$refs.bgImage.style.height = 0
      }
      this.$refs.bgImage.style.zIndex = zIndex
    }
  },
  components:{
    Scroll,
    SongList
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"


  .music-list
    position: fixed
    top: 0
    left: 0
    right: 0
    bottom: 0
    z-index: 100
    background: $color-background
    .back
      position: absolute
      top: 0
      left: 6px
      z-index: 50
      .icon-back
        display: block
        padding: 10px
        font-size: $font-size-large-x
        color: $color-theme
    .title
      position: absolute
      top: 0
      // 10% + 80% + 10%
      left: 10%
      z-index: 40
      width: 80%
      no-wrap()
      text-align: center
      line-height: 40px
      font-size: $font-size-large
      color: $color-text
    .bg-image
      position: relative
      width: 100%
      height: 0
      padding-top: 70%
      transform-origin: top
      background-size: cover
      // 蒙层效果
      .filter
        position: absolute
        top: 0
        left: 0
        width: 100%
        height: 100%
        background: rgba(7, 17, 27, 0.4)
    .bg-layer
      position: relative
      height: 100%
      background: $color-background
    // list 脱离文档流 和bg的relative布局重叠
    .list
      position: fixed
      top: 0
      bottom: 0
      width: 100%
      background: $color-background
      // overflow: hidden
      .song-list-wrapper
        padding: 20px 30px
</style>


