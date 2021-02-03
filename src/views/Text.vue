<template>
<div class="text">

	<el-row>
		<el-col :span="4" v-for="(b,index) in books" :key="index" >
			<el-card :body-style="{ padding: '0px' }">
				<router-link :to="{name:'Book',params:{pk:b.id}}">
					<img :src="b.mainimg" class="image">
					<div style="padding: 14px;">
						<span>{{b.title|info}}</span>
					</div>
				</router-link>
			</el-card>
		</el-col>
	</el-row>

</div>
</template>

<script>
	// import {books} from '../dat/bookdata.js'
	export default{
		data() {
			return {
				books:[]
			};
		},
		created() {
			this.$axios({
				method:"get",
				url:"getbooks/"
			}).then(res=>{
				this.books=res.data.books;
			}).catch(()=>{
			})
			
			
			// let datas = this.$mock.mock({
			// 	'books|30':[
			// 		{
			// 			"title": "@CTITLE(3,4)",
			// 			"mainimg": '@IMAGE(240x320)',
			// 			"outline": "@CPARAGRAPH",
			// 			"id|+1":1
			// 		},
			// 	]
			// })
			// this.books=datas.books
			// this.books=datas.books.filter(item=>{
			// 	return item.id == this.$route.params.pk
			// })
		},
		filters:{
			info(value){
				return value+'t'
			}
		}
	}

</script>

<style>
.time {
	font-size: 13px;
	color: #999;
}

.bottom {
	margin-top: 13px;
	line-height: 12px;
}

.button {
	padding: 0;
	float: right;
}

.image {
	width: 100%;
	display: block;
}

.clearfix:before,
.clearfix:after {
	display: table;
	content: "";
}

.clearfix:after {
	clear: both
}
</style>
