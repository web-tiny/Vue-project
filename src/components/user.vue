<template class="user">
	<div>
		{{msg}}
		<hr>
		<router-link to="/user/login">登录</router-link>
		<router-link to="/user/reg">注册</router-link>
		<router-view></router-view>
	</div>
</template>
<script>
	export default{
		data(){
			return {
				msg:'我是用户页'
			}
		}
	}
</script>
<style>
	.user{
		border:2px solid blue;
		background: #999
	}
</style>