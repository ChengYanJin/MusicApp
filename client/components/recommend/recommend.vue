<template>
  <div class="recommend">
    <div class="recommend-content"></div>
    <div v-if="recommends.length" class="slider-wrapper">
      <slider>
        <div v-for="item in recommends">
          <a :href="item.linkUrl">
            <img :src="item.picUrl" style="width:100%">
          </a>
        </div>
        </slider> 
    </div>
    <div class="recommend-list">
      <!-- <h1 class="list-title">Recommendations</h1> -->
      <ul></ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import Slider from 'base/slider/slider'
import { getRecommend } from 'api/recommend'
import { ERR_OK } from 'api/config.js'

export default {
  data(){
    return {
      recommends:[]
    }
  },
  created() {
    this._getRecommend()
  },
  methods: {
    _getRecommend() {
      getRecommend().then(res => {
        if (res.code === ERR_OK) {
          this.recommends = res.data.slider
        }
      });
    }
  },
  components:{
    Slider
  }
};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import '~common/stylus/variable'
.recommend
  postion: fixed
  width: 100%
  top: 88px
  bottom: 0
  .recommend-content
    height: 100%
    overflow: hidden
  .slider-wrapper
    postion: relative
    width: 100%
    overflow: hidden
</style>
