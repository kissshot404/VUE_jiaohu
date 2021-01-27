<template>
	<div>
		<h1>计数器</h1>
		<p>
		
			<button @click="down">-</button>
			<span>{{info}}</span>
			<button @click='up'>+</button>
			
		</p>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				info:0,
			}
		},
		methods:{
			down(){
				this.info--;
			},
			up(){
				this.info++;
			}
		},
		beforeCreate() {
			console.log('组件创建前↑++++',this.info,this.down,this.$el)
		},
		created() {
			console.log('组件创建了←\\\\',this.info,this.down,this.$el);
			
		},
		beforeMount() {
			console.log('组件渲染前↑++++',this.$el)
		},
		mounted() {
			console.log('组件渲染了←\\\\',this.$el)
		},
		beforeUpdate() {
			console.log('组件更新前↑++++')
		},
		updated() {
			console.log('组件更新了←\\\\')
		},
		beforeDestroy() {
			console.log('组件销毁前↑++++')
		},
		destroyed() {
			console.log('组件销毁了←\\\\')
		}
}
		

</script>

<style>
</style>
