<template>
  <div class="slider" ref="slider">
    <div class="slider-group" ref="sliderGroup">
      <slot></slot>
    </div>
    <div class="dots"></div>
  </div>
</template>

<script type="text/ecmascript-6">
import BScroll from "better-scroll"
import { addClass } from "common/js/dom"

export default {
  props: { // the type of the Carousel

    loop: {
      type: Boolean,
      default: true
    },
    autoPlay: {
      tyep: Boolean,
      default: true
    },
    interval: {
      type: Number,
      default: 4000 // 4000 ms
    }
  },
  mounted() {
    setTimeout(() => { // browser refreshes every 17ms
      this._setSliderWidth()
      this._initSlider()
    }, 20);
  },
  methods: {
    _setSliderWidth() {
			this.children = this.$refs.sliderGroup.children
			let width = 0 // sum of all the children width
			let sliderWidth = this.$refs.slider.clientWidth // get the width of parent container.
		
      for (let i = 0; (i < this.children.length); i++) {
				let child = this.children[i]
				addClass(child, 'slider-item') // add each child to DOM: slider-item
        child.style.width = sliderWidth + 'px'
				width += sliderWidth;
			}
			
			if(this.loop){
				width += 2 * sliderWidth
			}
			this.$refs.sliderGroup.style.width = width +'px'
    },
    _initSlider() {
			this.slider = new BScroll(this.$refs.slider,{
				scrollX: true,
				scrollY: false,
				momentum: false,
				snap: true,
				snapLoop: this.loop,
				snapThreshold: 0.3,
				snapSpeed: 400,
				click: true
			})
		}
  }
};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
	@import '~common/stylus/variable'
	.slider
		min-height:1px
		.slider-group
			position: relative
			overflow: hidden
			white-space: nowrap
			.slider-item
				float: left
				box-sizing: border-box
				overflow: hidden
				text-align: center	
				a
					display: block
					width: 100%
					overflow: hidden
					text-decoration: none
				img
					display: block
					width: 100%
		.dots
			position: absolute
			right: 0
			left: 0
			bottom: 12px
			text-align: center
			font-size: 0
</style>
