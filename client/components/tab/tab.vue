<template>
  <div class="tab">
      <router-link tag="div" class="tab-item" to="/recommend">
      <span class="tab-link">Recommendations</span>
      </router-link> 
       <router-link tag="div" class="tab-item" to="/singer">
      <span class="tab-link">Artist</span>
      </router-link>
       <router-link tag="div" class="tab-item" to="/rank">
      <span class="tab-link">Rank</span>
      </router-link>
       <router-link tag="div" class="tab-item" to="/search">
      <span class="tab-link">Search</span>
      </router-link>
  </div>
</template>

<script type="text/ecmascript-6">
export default{
	
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import "~common/stylus/variable"

.tab
  display: flex
  height: 44px
  line-height: 44px
  font-size: $font-size-medium
  .tab-item
    flex: 1
    text-align: center
    .tab-link
      padding-bottom: 5px
      color: $color-text-l
    &.router-link-active
      .tab-link
        color: $color-theme
        border-bottom: 2px solid $color-theme
</style>
