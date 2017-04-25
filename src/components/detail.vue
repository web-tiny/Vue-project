<template>
	<div class="user">
		{{msg}}
		<br>
		{{$route.params}}
		<br>
		{{$route.path}}
		<br>
		{{$route.query}}
	</div>
</template>
<script>
	export default{
		data(){
			return {
				msg:'我是新闻详情页面'
			}
		}
	}
</script>
<style>
	.user{
		font-size: 28px;
		color:white;
	}
</style>