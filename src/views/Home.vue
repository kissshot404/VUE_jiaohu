<template>
	<div class="home">
		<img alt="Vue logo" src="../assets/logo.png">
		<HelloWorld></HelloWorld>
		<Heart :stateprop='state' @telloarent='duelstate'><span slot='to'>关于页面的点赞</span></Heart>
		<Heart :stateprop='state1' @telloarent='duelstate1'><span slot='to'>关于页面下方的点赞</span></Heart>
	</div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Heart from '@/components/heart/Heart.vue'
// import Heart from '@/components/heart/Heart.vue'

export default {
	name: 'Home',
	components: {
		HelloWorld,
		Heart
	},
	data(){
		return {
			state:false,
			state1:true,
		}
	},
	methods:{
		duelstate(e){
			console.log('通知服务器点赞设置为',e);
		},
		duelstate1(e){
			console.log('页下通知服务器点赞设置为',e);
		},
	}
}
</script>
