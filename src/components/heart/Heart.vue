<template>
	<div class="heart">
		<p><slot name=to></slot></p>
		<div class="sss" @click="changestate">
			<img :src="state?heartup:heartdown">
			<span>{{state?'取消':'点赞'}}</span>
		</div>
	</div>
</template>

<script>
export default {
	methods:{
		changestate(){
			this.state=!this.state;
			this.$emit('telloarent',{'state':this.state})
		}
	},
	data(){
		return {
			state:false,
			heartup:require('./img/dianzan.png'),
			heartdown:require('./img/quxiao.png')
		}
	},
	props:{
		stateprop:{
			required:true,
			type:Boolean
		}
	},
	created(){
		this.state=this.stateprop
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
	.heart{
		.sss{
			display: inline-block;
			font-size: 25px;
			img{
				width: 40px;
				vertical-align: middle;
			}
			
		}
	}
</style>
