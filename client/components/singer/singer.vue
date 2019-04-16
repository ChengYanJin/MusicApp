<template>
  <div class="singer">
    <list-view @select="selectSinger" :singerdata="singerlist" :shortcutdata="indexlist">
    </list-view>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
import { getSingerList } from "api/singer"
import { ERR_OK } from "api/config.js"
import ListView from "base/listview/listview"
import {mapMutations} from 'vuex'
const HOT_NAME = 'hot'
const HOT_SINGER_LEN = 10

export default {
  data() {
    return {
      singerlist:[],
      indexlist:[] // a-z
    };
  },
  mounted() {
    this._getSingerList()
    this._getindexList()
  },
  components:{
    ListView
  },
  methods: {
    selectSinger(singer){

      this.$router.push({
        path: `/singer/${singer.singer_id}`
      })
      this.setSinger(singer) // commit data to vuex.
    },
    _getSingerList() {
      getSingerList().then(res => {
      if( res.code === ERR_OK){
        this.singerlist = res.singerList.data.singerlist
        //this.singerlist= this._normalizeSinger(res.singerList.data.singerlist)
      }
    });
  },

  _normalizeSinger(list) { // Current not used as QQ has changed their API.
    let map = {
      hot: {
        title: HOT_NAME,
        items:[]
      }
    }
    list.forEach((item,index) => {
      if(index < HOT_SINGER_LEN) {
        map.hot.items.push({
          id:item.singer_id,
          name:item.singer_name,
          avatar:`https://y.gtimg.cn/music/photo_new/T001R300x300M000${item.singer_mid}.jpg?max_age=2592000`
          //avatar:item.singer_pic,
        })
      }
    })
    console.log(map.hot.items)
    return map.hot.items
  },
  _getindexList() {
    getSingerList().then(res => {
      if( res.code === ERR_OK){
        this.indexlist = res.singerList.data.tags.index

      }
    })
  },
  ...mapMutations({ // mapMutations is a suger syntax = $store.commit()
    setSinger: 'SET_SINGER'
  })
}
};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.singer
  position: fixed
  top: 88px
  bottom: 0
  width: 100%
</style>


