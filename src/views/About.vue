<template>
	<div class="about">
		<Star @tellparent='starmet' :starprop='0'> <span slot='to'>页面评分</span></Star>
		<br>
		<br>
		<br>
		<button @click="logintext">获取用户信息</button>
		<br>
		<button @click="text2">测试接口[axios]</button>
		<br>
		<br>
		<button @click="showdonw1">注销</button>
		<p v-if="showed1">
			<Step></Step>
		</p>

		<br>
		<br>
		<br>
		<p><button @click="showdonw">隐藏</button></p>
		<transition>
			<div class="hidediv"  v-show="showed">
					<Step></Step>
			</div>
		</transition>
		<div>
			<!-- 通过修改 font-size 改变图片大小 -->
			<span class="iconfont icon-gouwuchekong"></span>
			<span class="iconfont icon-haoyou"></span>
			<span class="iconfont icon-zujian"></span>
			<span class="iconfont icon-shouyexuanzhong"></span>
			<span class="iconfont icon-gerenzhongxin"></span>
			
		</div>
	</div>
</template>

<style>
	.hidediv {
		width: 200px;
		height: 200px;
		background-color: pink;
		position: relative;
		display: inline-block;
	}
	/* 动画 */
	@keyframes hide{
		from{
			opacity: 1;
			left: 0;
		}
		to{
			opacity: 0;
			left: 1200px;
			width:0;
			height: 0;
		}
	}
	
	.v-enter{
	}
	.v-enter-active{
		animation: hide 5s reverse linear;
	}
	.v-enter-to{
	}
	.v-leave{
	}
	.v-leave-active{
		animation: hide 5s linear;
	}
	.v-leave-to{
	}
	
	
	/* 渐变 */
	/* .v-enter{
		opacity: 0;
		left: 1200px;
		width:0;
		height: 0;
	}
	.v-enter-active{
		transition: all 5s; 
	}
	.v-enter-to{
		opacity: 1;
		left: 0;
	}
	.v-leave{
		opacity: 1;
		left: 0;
	}
	.v-leave-active{
		transition: all 5s;
	}
	.v-leave-to{
		opacity: 0;
		left: 1200px;
		width:0;
		height: 0;
	} */
	
</style>

<script>
	import Star from '@/components/star/Star.vue'
	import Step from '@/components/Step.vue'
	export default {
		name: 'About',
		components: {
			Star,
			Step
		},
		data() {
			return {
				showed: true,
				showed1: true
			}
		},
		methods: {
			logintext(){
			// 	var Mock = require('mockjs')
			// 	var data = Mock.mock({
			// 	    // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
			// 	    'list|1-10': [{
			// 	        // 属性 id 是一个自增数，起始值为 1，每次增 1
			// 	        'id|+1': 1
			// 	    }]
			// 	})
			// 	// 输出结果
			// 	console.log(JSON.stringify(data, null, 4));
				
				console.log('axios',this.$axios);
				this.$axios.get("http://127.0.0.1:8000/users/",{
					username:'kissshot',
					password:'123456'
				}).then(res=>{
					if(res.status==200){
						console.log('登陆成功：',res.data);
					}
				}).catch(err=>{
					console.log('失败原因：',err)
				})
			},
			getlatestdiarts() {
				// this.$axios.get("http://127.0.0.1:8000/diarys/get_latest/",{
				// 	params:{
				// 		page:2,
				// 		page_size:3
				// 	}
				// }).then(res=>{
				// 	if(res.status==200){
				// 		console.log("最新日记",res.data);
				// 	}
				// }).catch(err=>{
				// 	console.log("失败原因",err);
				// })

				this.$axios({
					method: "get",
					url: "diarys/get_latest/",
					params: {
						page: 2,
						page_size: 3
					},
				}).then(res => {
					if (res.status == 200) {
						console.log("最新日记", res.data);
					}
				}).catch(err => {
					console.log("失败原因", err);
				})
			},
			getdiarybyid() {
				this.$axios({
					method: "get",
					url: "diarys/2/",
					headers: {
						// Authorization:"Basic dGVtcDoxMjM0NTY="
						Authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjEyMTYyMjIzLCJqdGkiOiJjYWUxMjllNmU5YTc0YzBhODE1MGY2ZGYyYzkzNTQ2OCIsInVzZXJfaWQiOjF9.DuM88fXyBTK0xNK_2h1OV0gfXSUTeyPEZ26B_Wno42c"
					}
				}).then(res => {
					console.log("获取指定日记", res)
				}).catch(err => {
					console.log("失败原因", err);
				})
			},
			creatediary() {
				this.$axios({
					method: 'post',
					url: "diarys/",
					data: {
						content: "我的新年日记",
						diarybook: "admin的日记本"
					},
					headers: {
						// Authorization:"Basic dGVtcDoxMjM0NTY="
						Authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjEyMTYyMjIzLCJqdGkiOiJjYWUxMjllNmU5YTc0YzBhODE1MGY2ZGYyYzkzNTQ2OCIsInVzZXJfaWQiOjF9.DuM88fXyBTK0xNK_2h1OV0gfXSUTeyPEZ26B_Wno42c"
					}
				}).then(res => {
					console.log("创建日记", res)
				}).catch(err => {
					console.log("失败原因", err);
				})
			},
			text2(){
				console.log('API');
				
			},
			starmet(e) {
				console.log('评价', e, '星');
			},
			showdonw() {
				this.showed = !this.showed
			},
			showdonw1() {
				this.showed1 = !this.showed1
			}
		}
	}
</script>
