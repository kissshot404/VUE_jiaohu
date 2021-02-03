<template>
	<div class="book"  v-if="book">
		<el-collapse @change="handleChange">
			<el-collapse-item :title='book.title'>
				<div>{{book.outline}}</div>
			</el-collapse-item>
			<el-col :span="4">
				<template v-if="user">
					<el-button v-if="has" type="success" round disabled>已在书架</el-button>
					<el-button v-else type="success" round @click="add">加入书架</el-button>
				</template>
				<template v-else>
					<el-button type="success" round @click="$router.push({name:'Login',query:{next:$route.path}})">加入书架</el-button>
				</template>

			</el-col>
		</el-collapse>
		<el-card class="box-card">
			<div v-for="a in book.articles" :key='a.id' class="text item">
				<router-link :to="{name:'Article',params:{pk:a.id}}">
					<el-button>{{a.title|world}}</el-button>
				</router-link>
			</div>
		</el-card>
		<router-link :to="{name:'Text'}">
			<el-button type="info">返回</el-button>
		</router-link>
	</div>
</template>

<script>
	// import {articles,books} from '../dat/bookdata.js'
	export default {
		data() {
			return {
				user: null,
				has: false,
				// articles:[],
				book: null,

			}
		},
		created() {
			this.$axios(`getbook/${this.$route.params.pk}/`).then(res => {

				this.book = res.data;

				this.has = this.$store.getters.getCollectBoos.indexOf(this.book.id) >= 0 ? true : false
			}).catch(err => {
				console.log("err", err);
			})


			// 伪造数据
			// let datas = this.$mock.mock({
			// 	'books|30':[
			// 		{
			// 			"title": "@CTITLE(3,4)",
			// 			"mainimg": '@IMAGE(240x320)',
			// 			"outline": "@CPARAGRAPH",
			// 			"id|+1":1
			// 		},
			// 	],
			// 	'articles|150':[
			// 		{
			// 			"id|+1": 101,
			// 			"title": "@CTITLE",
			// 			"bookid": '@NATURAL(1,30)',
			// 			"content": "@CPARAGRAPH(2000)"
			// 		},
			// 	]
			// })
			// console.log(datas.articles)
			// this.book=datas.books.filter(item=>{
			// 	return item.id == this.$route.params.pk
			// })
			// this.articles=datas.articles.filter(item=>{
			// 	return item.bookid==this.$route.params.pk;
			// })


			// this.books=datas.books.filter(item=>{
			// 	return item.id == this.$route.params.pk
			// })
			// console.log(this.$route.params.pk);
			// this.book=books.filter((item)=>{
			// 	return item.id==this.$route.params.pk;
			// })[0];
			// this.articles=articles.filter((item)=>{
			// 	return item.bookid==this.$route.params.pk;
			// })

			// this.has = this.$store.getters.getCollectBoos.indexOf(this.book.id)>=0?true:false

			let user = this.$jsCookie.get("user")
			if (user) {
				this.user = user;
			}

		},
		methods: {
			handleChange(val) {
				console.log(val);
			},
			goPrev() {
				this.$router.go(-1)
				// this.$router.push("/article/100007")
				// this.$router.push({name:"Article",params:{pk:100007}})
			},
			add() {
				this.$message('加入书架');
				this.has = true
				// this.$store.commit("addCollect", this.book.id)
				this.$axios({
					url:"collects",
					method:"post",
					data:{
						id:this.book.id
					}
				}).then(res=>{
					console.log("收藏成功",res.data);
				}).catch(err=>{
					console.log("收藏失败",err);
				})
			}
		}

	}
</script>

<style>
	.text {
		font-size: 14px;
	}

	.item {
		padding: 18px 0;
	}

	.box-card {
		width: 480px;
	}
</style>
