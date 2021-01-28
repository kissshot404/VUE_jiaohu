<template>
	<div class="book">
		<el-collapse @change="handleChange">
			<el-collapse-item :title='book.title' >
				<div>{{book.outline}}</div>
			</el-collapse-item>
			
		</el-collapse>
		<el-card class="box-card">
			<div v-for="a in articles" :key='a.id' class="text item">
				<router-link :to="{name:'Article',params:{pk:a.id}}">
					<el-button>{{a.title}}</el-button>
				</router-link>				
			</div>
		</el-card>
	<router-link :to="{name:'Text'}">
		<el-button type="info">返回</el-button>
	</router-link>
	</div>
</template>

<script>
	import {articles,books} from '../dat/bookdata.js'
	export default{
		data(){
			return{
				articles:[],
				book:null,
				
			}
		},
		created(){
			console.log(this.$route.params.pk);
			this.book=books.filter((item)=>{
				return item.id==this.$route.params.pk;
			})[0];
			this.articles=articles.filter((item)=>{
				return item.bookid==this.$route.params.pk;
			})
			
			
		},
		methods: {
			handleChange(val) {
				console.log(val);
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
