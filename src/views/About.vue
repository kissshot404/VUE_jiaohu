<template>
	<div class="about">
		<Star  @tellparent='starmet' :starprop='0' > <span slot='to'>页面评分</span></Star>
		<br>
		<br>
		<button @click="showdonw1">注销</button>
		<p v-if="showed1"><Step></Step></p>
		
		<br>
		<br>
		<br><!-- 
		<button @click="showdonw">隐藏</button>
		<p v-show="showed"><Step></Step></p> -->
		
	</div>
</template>
<script>

import Star from '@/components/star/Star.vue'
import Step from '@/components/Step.vue'
export default {
	name: 'About',
	components: {
		Star,
		Step
	},
	data(){
		return{		
			showed:true,
			showed1:true
			}
	},
	methods:{
		starmet(e){
			console.log('评价',e,'星');
		},
		showdonw(){
			this.showed=!this.showed
		},
		showdonw1(){
			this.showed1=!this.showed1
		}
	}
}
</script>