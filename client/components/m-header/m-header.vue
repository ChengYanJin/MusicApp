<template>
<div class="m-header">
    <div class="text">Chicken Music</div>
</div>
    
</template>

<script type="text/ecmascript-6">
export default {
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import "~common/stylus/variable"

.m-header
	position: relative
	height: 44px
	text-align: center
	color: $color-theme
	font-size: 0
	.text
		display: inline-block
		vertical-align: top
		line-height: 44px
		font-size: $font-size-large
</style>
