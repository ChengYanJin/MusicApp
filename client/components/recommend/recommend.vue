<template>
  <div class="recommend">
    <scroll :data="disclist" class="recommend__content">
      <div>
        <div v-if="recommends.length" class="slider-wrapper">
          <slider>
            <div v-for="item in recommends" :key="item">
              <a :href="item.linkUrl">
                <img :src="item.picUrl" style="width:100%">
              </a>
            </div>
          </slider>
        </div>
        <div class="recommend-list">
          <h1 class="list-title">Song Recommendation List</h1>
          <ul>
            <li v-for="(item, i) in disclist" :key="i" class="item">
              <div class="icon">
                <img width="60" height="60" :src="item.imgurl">
              </div>
              <div class="text">
                <h2 class="name" v-html="item.creator.name"></h2>
                <p class="desc" v-html="item.dissname"></p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </scroll>
  </div>
</template>

<script type="text/ecmascript-6">
import Slider from "base/slider/slider";
import Scroll from "base/scroll/scroll";
import { getRecommend, getDiscList } from "api/recommend";
import { ERR_OK } from "api/config.js";

export default {
  data() {
    return {
      recommends: [],
      disclist: []
    };
  },
  created() {
    this._getRecommend();
    this._getDiscList();
  },
  methods: {
    _getRecommend() {
      getRecommend().then(res => {
        if (res.code === ERR_OK) {
          this.recommends = res.data.slider;
        }
      });
    },
    _getDiscList() {
      getDiscList().then(res => {
        if (res.code === ERR_OK) {
          this.disclist = res.data.list;
        }
      });
    }
  },
  components: {
    Slider,
    Scroll
  }
};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import '~common/stylus/variable';

.recommend {
  position: fixed;
  width: 100%;
  top: 88px;
  bottom: 0;

  &__content {
    height: 100%;
    overflow: hidden;
  }

  .slider-wrapper {
    position: relative;
    width: 100%;
    overflow: hidden;
  }

  .recommend-list {
    .list-title {
      height: 65px;
      line-height: 65px;
      text-align: center;
      font-size: $font-size-medium;
      color: $color-theme;
    }

    .item {
      display: flex;
      box-sizing: border-box;
      align-items: center;
      padding: 0 20px 20px 20px;

      .icon {
        flex: 0 0 60px;
        width: 60px;
        padding-right: 20px;
      }

      .text {
        display: flex;
        flex-direction: column;
        justify-content: center;
        flex: 1;
        list-style: height 20px;
        overflow: hidden;
        font-size: $font-size-medium;

        .name {
          margin-bottom: 10px;
          color: $color-text;
        }

        .desc {
          color: $color-text-d;
        }
      }
    }
  }
}
</style>
