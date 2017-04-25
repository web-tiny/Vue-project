<template class="news">
	<div>
		{{msg}}
		<hr>
		<router-link to="/news/detail/001">新闻001</router-link>
		<router-link to="/news/detail/002">新闻001</router-link>
		<router-view></router-view>
	</div>
</template>
<script>
	export default{
		data(){
			return {
				msg:'我是新闻页'
			}
		}
	}
</script>
<style>
	.news{
		background: yellow;
		font-size: 28px;
	}
</style>