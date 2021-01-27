<template>
	<div class="star">
		<p><slot name='to'></slot></p>
		<img v-for="(temp,index) in 5" 
		:key=index 
		@click='changestar(index+1)' 
		:src="index<starnum?starup:stardown" 
		alt="temp">
		<span>{{starnum}}星</span>

	</div>

</template>

	
<script>

export default {
	methods:{
		changestar(index){
			this.starnum=index,
			this.$emit('tellparent',{'starnum':this.starnum})
		}
	},
	data(){
		return {
			starnum:0,
			starup:require('./img/star.png'),
			stardown:require('./img/starsel.png')
		}
	},
	props:{
		starprop:{
			required:true,
			type:Number
		}
	},
	created(){
		this.starnum=this.starprop;
		if(this.starnum==0){
			this.starnum=5
		}
	}
}
</script>



<style lang="less">
	.star{
		img{
			width: 40px ;
		}
	}
</style>
