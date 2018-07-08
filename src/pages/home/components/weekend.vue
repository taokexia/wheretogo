<template>
	<div class="recomend">
		<p class="title">周末推荐</p>
		<ul>
			<li v-for="item of recommend" class="left">
				<img :src="item.imgUrl" />
				<p>{{item.title}}</p>
				<p class="huise">{{item.desc}}</p>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
     props: {
        recommend:Array
    }
}
</script>

<style lang="stylus" scoped>
  .title
    font-weight bold
    padding 15px
    background #eee 
  .huise
    color #999 
  ul 
    list-style none 
    margin 0
    padding 0 
    li 
      text-align left 
  .left img 
    width 100%
  p
    padding 5px
</style>
