<template>
  <div class="song-list">
    <ul>
      <li @click="selectItem(song,index)" v-for="(song,index) in songs" :key="index" class="item">
        <div class="content">
          <h2 class="name">{{song.name}}</h2>
          <p class="desc">{{getDesc(song)}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
export default{
  props:{
    songs:{
      type:Array,
      default:[]
    }
  },
  methods:{
    selectItem(song, index) {
      this.$emit('select', song, index)
    },
    getDesc(song){
      return `${song.singer} - ${song.album.name}`
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import "~common/stylus/variable"
.song-list
    .item
      display: flex
      align-items: center
      box-sizing: border-box
      height: 64px
      font-size: $font-size-medium
      .content
        flex: 1
        line-height: 20px
        overflow: hidden
        .name
          color: $color-text
        .desc
          margin-top: 4px
          color: $color-text-d
</style>
