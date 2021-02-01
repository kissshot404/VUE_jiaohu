<template>
	<div id="app">

		<el-container>
			<el-header style='padding: 0;'>
				<el-menu

					class="el-menu-demo"
					mode="horizontal"
					@select="handleSelect"
					background-color="#545c64"
					text-color="#fff"
					active-text-color="#fff">
					<el-menu-item index="1">
						<router-link :to="{name:'Home'}">首页</router-link>
					</el-menu-item>
					<el-menu-item index="4">
						<router-link :to="{name:'Text'}">Book</router-link>
					</el-menu-item>
					<el-menu-item index="2">
						<router-link :to="{name:'Element'}">Element</router-link>
					</el-menu-item>
					<el-submenu index="3">
						<template slot="title">我的</template>
						<el-menu-item index="3-1"><router-link :to="{name:'About'}">About</router-link></el-menu-item>
						<el-menu-item index="3-2"><router-link :to="{name:'Collect'}">收藏</router-link></el-menu-item>
						<el-menu-item index="3-3">选项3</el-menu-item>
						<el-submenu index="3-4">
							<template slot="title">选项4</template>
							<el-menu-item index="3-4-1">选项1</el-menu-item>
							<el-menu-item index="3-4-2">选项2</el-menu-item>
							<el-menu-item index="3-4-3">选项3</el-menu-item>
						</el-submenu>
					</el-submenu>
					
					
					
					<template v-if="user">
						<el-menu-item index="9" class='rt' @click="logout">
							退出
						</el-menu-item>
						<el-menu-item index="8" class='rt'>
							<router-link :to="{name:'Center'}">{{user}}</router-link>
						</el-menu-item>
					</template>
					
					<template v-else>
						<el-menu-item index="9" class='rt'>
							<router-link :to="{name:'Register'}">注册</router-link>
						</el-menu-item>
						<el-menu-item index="8" class='rt'>
							<router-link :to="{name:'Login'}">登陆</router-link>
						</el-menu-item>
					</template>
					
				</el-menu>
			</el-header>
			<el-main>
				<router-view/>
			</el-main>
			<el-footer>
				Footer
			</el-footer>
		</el-container>





		
	</div>
</template>

<script>
	// import Cookies from 'js-cookie'
	export default {
	data() {
		return {
			user:null,
			activeIndex2: '1'
		};
	},
	created(){
		// let user = Cookies.get('user');
		this.$bus.$on("userlogin",_u=>{
			this.user=_u
		})
		
		let user =this.$jsCookie.get('user')
		if(user){
			this.user=user;
		}
	},
	beforeDestroy() {
		this.$bus.$off("userlogin")
	},
	methods: {
		handleSelect(key, keyPath) {
			console.log(key, keyPath);
			},
		logout(){
			if(this.$route.path!='Home'){
				this.$router.push({name:'Home'})
			}
			this.user=null;
			// this.$jsCookie.remove('user')
			this.$jsCookie.remove('user')
			
		},
		
	},
		
		
}
</script>

<style lang="less">
#app {
	height: 100%;
	width: 100%;
	margin: 0;
	padding: 0;
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	.rt{
		float: right;
	}
	a{
		text-decoration: none;
	}
}

</style>
