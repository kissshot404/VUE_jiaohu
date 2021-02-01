<template>
	<div class="center">
		这里是个人中心
		
		<Set></Set>
		<router-view/>
	</div>
</template>

<script>
	import Set from './Set.vue'
	export default{
		components:{
			Set
		},
	}
</script>

<style>
</style>
