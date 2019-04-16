<template>
  <div class="rank">
     <Scroll :data="topList" class="toplist">
       <ul>
         <li class="item" v-for="item in topList" :key=item>
           <div class="icon">
             <img width="100" height="100" v-lazy="item.picUrl"/>
           </div>
           <ul class="songlist">
             <li class="song" v-for="(song,index) in item.songList" :key=index>
               <span>{{index+1}}</span>
               <span>{{song.songname}}-{{song.singername}}</span>
             </li>
           </ul>
         </li>
      </ul>
     </Scroll>
  </div>
</template>

<script type="text/ecmascript-6">
import {getTopList} from 'api/rank'
import {ERR_OK} from 'api/config'
import Scroll from 'base/scroll/scroll'

export default{
  created(){
    this._getTopList()
  },
  data(){
    return {
      topList:[]
    }
  },
  methods:{
    _getTopList(){
      getTopList().then(res => {
        if(res.code === ERR_OK){
          this.topList = res.data.topList
        }
      })
    }
  },
  components:{
    Scroll
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"

  .rank
    position:fixed
    width:100%
    top:88px
    bottom: 0
    .toplist
      height:100%
      overflow:hidden
      .item
        display:flex
        margin:0 20px
        padding-top: 20px
        height: 100px
        &.last-child
          padding-bottom:20px
        .icon
          flex:0 0 100px
          width:100px
          height:100px
        .songlist
          flex:1
          display:flex
          flex-direction:column
          justify-content:center
          height:100px
          background:$color-hightlight-background
          padding: 0 20px
          .song
            overflow: hidden
            font-size: $font-size-small
            color: $color-text-d
            line-height:26px
</style>
