<template>
  <div class="recommend">
      <div class="recommend-content"></div>
      <div class="slider-wrapper"></div>
      <div class="recommend-list">
        <h1 class="list-title">Recommendations</h1>
        <ul></ul>
        </div>
  </div>
</template>

<script type="text/ecmascript-6">
import {getRecommend} from 'api/recommend'
import {ERR_OK} from ''
export default{
  methods:{
    _getRecommend(){
      getRecommend().then(res=>{
        if(res.code=== ERR_OK){
         
        }

      })
    }
  },
  created(){

  },

}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import "~common/stylus/variable"
.recommend
  postion:fixed
  width: 100%
  top: 88px
  bottom:0
  .recommend-content
    height: 100%
    overflow:hidden
    .slider-wrapper
      postion:relative
      width:100%
      overflow:hidden
    .recommend-list
      .list-title
        height: 65px
        line-height: 65px
        text-align:center
        font-size:$font-size-medium
        color:$color-theme
      .item
        display:flex
        box-sizing: border-box
        align-items:center
        padding: 0 20px 20px 20px
        .icon
          flex:0 0 60px
          width: 60px
          padding-right: 20px
        .text
          display:flex
          flex-direction: column 
          justify-content: center







</style>
