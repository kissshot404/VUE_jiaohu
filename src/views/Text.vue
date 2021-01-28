<template>
<div class="text">

	<el-row>
		<el-col :span="4" v-for="(b,index) in books" :key="index" >
			<el-card :body-style="{ padding: '0px' }">
				<router-link :to="{name:'Book',params:{pk:b.id}}">
					<img :src="b.mainimg" class="image">
					<div style="padding: 14px;">
						<span>{{b.title}}</span>
					</div>
				</router-link>
			</el-card>
		</el-col>
	</el-row>

</div>
</template>

<script>
	import {books} from '../dat/bookdata.js'
	export default{
		data() {
			return {
				books:books
			};
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
