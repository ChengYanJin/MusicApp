<template>
  <scroll class="listview" :data="singerdata">
    <ul>
      <li @click="selectItem(item)" v-for="item in singerdata" :key="item.singer_id" class="list-group-item">
        <img :src="`https://y.gtimg.cn/music/photo_new/T001R300x300M000${item.singer_mid}.jpg?max_age=2592000`" class="avatar">
        <span class="name">{{item.singer_name}}</span>
      </li>
    </ul>
    <div class="list-shortcut" @touchstart="onShortcutTouchStart">
      <ul>
        <li v-for="(item, index) in shortcutdata" :key="index" class="item" :data-index="index">
          {{item.name}}
        </li>
      </ul>
    </div>
  </scroll>
</template>

<script type="text/ecmascript-6">
import Scroll from 'base/scroll/scroll'
import { getSingerList } from "api/singer"
import { getData } from 'common/js/dom'
import { ERR_OK } from "api/config.js"

export default {
  props: {
    singerdata: { // recieved data from parent and then painting
      type: Array,
      default:[]
    },
    shortcutdata:{
      type: Array,
      default:[]
    }
  },
  components: {
    Scroll
  },
  methods:{
    selectItem(item) {
      this.$emit('select',item) // dispatch event, singer component listen the changes and go to different page
    },
    onShortcutTouchStart(e) {
      let anchorIndex = getData(e.target,'index')

      getSingerList(anchorIndex).then(res => {
        if( res.code === ERR_OK) {
          this.singerdata = res.singerList.data.singerlist
        }
      })
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"

.listview
  position: relative
  width: 100%
  height: 100%
  overflow hidden
  background: $color-background
  .list-group-item
    display: flex
    align-items: center
    padding: 20px 0 0 30px
    .avatar
      width: 50px
      height: 50px
      border-radius:50%
    .name
      margin-left: 20px
      color: $color-text-l
      font-size: $font-size-medium
  .list-shortcut
    position: absolute
    z-index: 30
    right: 0
    top: 65%
    transform: translateY(-50%)
    width: 20px
    padding: 20px 0
    border-radius: 10px
    text-align: center
    background: $color-background-d
    font-family: Helvetice
    .item
      padding: 3px
      line-height: 1
      color: $font-size-small
      &.current
        color: $color-theme
</style>
