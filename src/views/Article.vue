<template>
	<div class="articke" v-if='article'>
		<el-container>
		
			<el-main>
				
				<h1>{{article.title}}</h1>
				<div>
					{{article.content}}
				</div>
				<router-link :to="{name:'Book',params:{pk:article.bookid}}">
					<el-button type="info">返回</el-button>
				</router-link>
			</el-main>
		</el-container>
		
		
	</div>
</template>

<script>
	// import {articles} from '../dat/bookdata.js'
	export default{
		data(){
			return{
				article:null,
			}
		},
		created(){
			this.$axios(`article/${this.$route.params.pk}/`).then(res=>{
				this.article=res.data;
			})
			
			
			
			// let datas = this.$mock.mock({
				
			// 	'articles|150':[
			// 		{
			// 			"id|+1": 101,
			// 			"title": "@CTITLE",
			// 			"bookid": '@NATURAL(1,30)',
			// 			"content": "@CPARAGRAPH(10)"
			// 		},
			// 	]
			// })
			
			
			// this.article=datas.articles.filter((item)=>{
			// 	return item.id==this.$route.params.pk;
			// })[0]
			

		},
		
		methods: {
			handleChange(val) {
				console.log(val);
			}
		}
		
	}
</script>

<style>

</style>
