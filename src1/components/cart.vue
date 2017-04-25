<template id="tl">
		<div class="cart">
			<dl v-for="item in arr">
				<dt>name:{{item.name}}</dt>
				<dd>price:{{item.price}}</dd>
				<dd>number:<input type="number" v-model="item.count"></dd>
				<dd>count:{{item.price*item.count | currency(2,'￥')}}</dd>
			</dl>
			<hr>
			Sum:{{sum}}
		</div>
</template>
<script>
	export default {
				template:'#tl',
				data(){
					return {
						ipt:1,
						arr:[{
							name:'XiHongShi',
							price:1.5,
							count:4
						},{
							name:'Banala',
							price:3.5,
							count:2
						},{
							name:'Orange',
							price:8,
							count:9
						}]
					}
				},
		
				computed:{
					sum:function(){
						let result=0;
						this.arr.forEach((item,index)=>{
							if(item.count>=0){	
								result+=item.price*item.count;
							}
						})
						return result;
					}
				},

				filters:{
					'currency':function(input,digit=2,currency="￥"){
						return currency+input.toFixed(digit);
					}
				}
	}
</script>
<style>
	.cart{
		border:3px solid #666;
		font-size:30px;
		background: #666;
		color: white
	}
</style>