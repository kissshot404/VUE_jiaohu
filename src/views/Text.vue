<template>
<div class="text">

	

	<el-container>
		<el-header>
			<el-row>
				<el-col :span="4"><div class="grid-content"></div></el-col>
				<el-col :span="16"><div class="grid-content">这是头部</div></el-col>
				<el-col :span="4">
					<div class="grid-content">
						<i class="el-icon-edit"></i> | 
						<i class="el-icon-share"></i> | 
						<i class="el-icon-delete"></i>
					</div>
				</el-col>
			</el-row>
		</el-header>
		<el-container>
			<el-aside width="200px">Aside</el-aside>
			<el-main>Main</el-main>
		</el-container>
		<el-footer>Footer</el-footer>
	</el-container>


</div>
</template>

<script>
export default {
	name: 'About',
}
</script>

<style>
.el-header, .el-footer {
	background-color: #B3C0D1;
	color: #333;
	text-align: center;
	line-height: 60px;
}

.el-aside {
	background-color: #D3DCE6;
	color: #333;
	text-align: center;
	line-height: 200px;
}

.el-main {
	background-color: #E9EEF3;
	color: #333;
	text-align: center;
	line-height: 160px;
}

body > .el-container {
	margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
	line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
	line-height: 320px;
}
.el-row {
	margin-bottom: 20px;
	&:last-child {
	margin-bottom: 0;
}
}
.el-col {
	border-radius: 4px;
}
.bg-purple-dark {
	background: #99a9bf;
}
.bg-purple {
	background: #d3dce6;
}
.bg-purple-light {
	background: #e5e9f2;
}
.grid-content {
	border-radius: 4px;
	min-height: 36px;
}
.row-bg {
	padding: 10px 0;
	background-color: #f9fafc;
}
</style>
