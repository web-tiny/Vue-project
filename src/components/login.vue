<template>
	<div class="login">
		{{msg}}
	</div>
</template>
<script>
	export default{
		data(){
			return {
				msg:'我是登陆页'
			}
		}
	}
</script>
<style>
	.login{
		font-size: 28px;
		background: blue;
		color:#fff;
	}
</style>