<template>
	<div class="element">
		
		<el-container>
			<el-header>
				<el-row>
					<el-col :span="4"><div class="grid-content">
						<el-avatar :size="50" :src="circleUrl"></el-avatar>
					</div></el-col>
					<el-col :span="16"><div class="grid-content">这是<el-divider direction="vertical"></el-divider>头部</div></el-col>
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
				<el-aside width="200px">
					<el-row class="tac">
						<el-col :span="24">
							<el-menu
							default-active="2"
							class="el-menu-vertical-demo"
							@open="handleOpen"
							@close="handleClose"
							background-color="#545c64"
							text-color="#fff"
							active-text-color="#ffd04b">
							<el-submenu index="1">
								<template slot="title">
								<i class="el-icon-location"></i>
								<span>导航一</span>
								</template>
								<el-menu-item-group>
								<template slot="title">分组一</template>
								<el-menu-item index="1-1">选项1</el-menu-item>
								<el-menu-item index="1-2">选项2</el-menu-item>
								</el-menu-item-group>
								<el-menu-item-group title="分组2">
								<el-menu-item index="1-3">选项3</el-menu-item>
								</el-menu-item-group>
								<el-submenu index="1-4">
								<template slot="title">选项4</template>
										<el-menu-item index="1-4-1">选项1</el-menu-item>
								</el-submenu>
							</el-submenu>
							<el-menu-item index="2">
								<i class="el-icon-menu"></i>
								<span slot="title">导航二</span>
							</el-menu-item>
							<el-menu-item index="3" disabled>
								<i class="el-icon-document"></i>
								<span slot="title">导航三</span>
							</el-menu-item>
							<el-menu-item index="4">
								<i class="el-icon-setting"></i>
								<span slot="title">导航四</span>
							</el-menu-item>
							</el-menu>
						</el-col>
					</el-row>
				</el-aside>
				<el-main>
					
					<div class="block">
						<div>
							<el-breadcrumb separator="/">
								<el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
								<el-breadcrumb-item>活动管理</el-breadcrumb-item>
								<el-breadcrumb-item>活动列表</el-breadcrumb-item>
								<el-breadcrumb-item>活动详情</el-breadcrumb-item>
							</el-breadcrumb>
						</div>
						<el-divider></el-divider>
						<div>
							
							<el-tag
								:key="tag"
								v-for="tag in dynamicTags"
								closable
								:disable-transitions="false"
								@close="handleClose1(tag)">
									{{tag}}
							</el-tag>
							<el-input
								class="input-new-tag"
								v-if="inputVisible"
								v-model="inputValue"
								ref="saveTagInput"
								size="small"
								@keyup.enter.native="handleInputConfirm"
								@blur="handleInputConfirm">
							</el-input>
							<el-button v-else class="button-new-tag" size="small" @click="showInput">+ New Tag</el-button>
					
						</div>
						<el-divider></el-divider>
						<div class="block">
							<span class="demonstration">默认 Hover 指示器触发</span>
							<el-carousel height="150px">
							<el-carousel-item v-for="item in 4" :key="item">
									<h3 class="small">{{ item }}</h3>
							</el-carousel-item>
							</el-carousel>
						</div>
						<div class="block">
							<span class="demonstration">Click 指示器触发</span>
							<el-carousel trigger="click" height="150px">
								<el-carousel-item v-for="item in 4" :key="item">
									<h3 class="small">{{ item }}</h3>
								</el-carousel-item>
							</el-carousel>
						</div>
						<el-divider></el-divider>
						<div class="demo-image__lazy">
							<el-image v-for="url in urls" :key="url" :src="url" lazy></el-image>
						</div>
						<el-divider></el-divider>
						<div>
							<el-collapse v-model="activeNames" @change="handleChange">
								<el-collapse-item title="一致性 Consistency" name="1">
									<div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
									<div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
								</el-collapse-item>
								<el-collapse-item title="反馈 Feedback" name="2">
									<div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
									<div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
								</el-collapse-item>
								<el-collapse-item title="效率 Efficiency" name="3">
									<div>简化流程：设计简洁直观的操作流程；</div>
									<div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
									<div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
								</el-collapse-item>
								<el-collapse-item title="可控 Controllability" name="4">
									<div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
									<div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
								</el-collapse-item>
							</el-collapse>
							
						</div>
						<el-divider></el-divider>
						<div>
							<el-popover
								placement="top-start"
								title="标题"
								width="200"
								trigger="hover"
								content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
								<el-button slot="reference">hover 激活</el-button>
							</el-popover>
		
							<el-popover
								placement="bottom"
								title="标题"
								width="200"
								trigger="click"
								content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
							<el-button slot="reference">click 激活</el-button>
							</el-popover>
		
							<el-popover
								ref="popover"
								placement="right"
								title="标题"
								width="200"
								trigger="focus"
								content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
								</el-popover>
							<el-button v-popover:popover>focus 激活</el-button>
		
							<el-popover
								placement="bottom"
								title="标题"
								width="200"
								trigger="manual"
								content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
								v-model="visible">
							<el-button slot="reference" @click="visible = !visible">手动激活</el-button>
							</el-popover>
						</div>
						<el-divider></el-divider>
						<div>
							<el-calendar v-model="datavalue">
							</el-calendar>
						</div>
						<el-divider></el-divider>
						<div class="block">
							<span class="demonstration">页数较少时的效果</span>
							<el-pagination
								layout="prev, pager, next"
								:total="50">
							</el-pagination>
						</div>
						<el-divider></el-divider>
						<div>
							
							<span class="demonstration">大于 7 页时的效果</span>
							<el-pagination
								layout="prev, pager, next"
								:total="1000">
							</el-pagination>
						</div>
					</div>
				</el-main>
			</el-container>
			
			<el-footer>
				<p>本页内容所属权由作者所有</p>
			</el-footer>
			
		</el-container>
		
	</div>
</template>

<script>


export default {
	name: 'Element',

	data () {
		return {
			circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
			squareUrl: "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",
			sizeList: ["large", "medium", "small"],
			activeNames: ['1'],
			visible: false,
			datavalue: new Date(),
			dynamicTags: ['标签一', '标签二', '标签三'],
			inputVisible: false,
			inputValue: '',
			urls: [
				'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
				'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
				'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
				'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
				'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',
				'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',
				'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg',
				require('./img/1.jpg'),
				require('./img/2.png'),
				require('./img/3.png'),
				require('./img/4.png'),
				require('./img/5.jpg'),
				require('./img/6.png'),
				require('./img/7.jpg'),
				require('./img/8.png'),
				require('./img/9.jpg'),
			]
		}
	},
	methods: {
		handleChange(val) {
			console.log(val);
		}, 
		handleOpen(key, keyPath) {
			console.log(key, keyPath);
		},
		handleClose(key, keyPath) {
			console.log(key, keyPath);
		},
		handleClose1(tag) {
			this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
		},

		showInput() {
			this.inputVisible = true;
			this.$nextTick(() => {
				this.$refs.saveTagInput.$refs.input.focus();
			});
		},

		handleInputConfirm() {
			let inputValue = this.inputValue;
			if (inputValue) {
				this.dynamicTags.push(inputValue);
			}
			this.inputVisible = false;
			this.inputValue = '';
		}
	}
}

</script>

<style>
.el-tag + .el-tag {
	margin-left: 10px;
}
.button-new-tag {
	margin-left: 10px;
	height: 32px;
	line-height: 30px;
	padding-top: 0;
	padding-bottom: 0;
}
.input-new-tag {
	width: 90px;
	margin-left: 10px;
	vertical-align: bottom;
}
.el-carousel__item h3 {
	color: #475669;
	font-size: 14px;
	opacity: 0.75;
	line-height: 150px;
	margin: 0;
}

.el-carousel__item:nth-child(2n) {
	background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
	background-color: #d3dce6;
}
.el-header, .el-footer {
	color: #333;
	text-align: center;
	line-height: 60px;
}

.el-aside {
	color: #333;
	text-align: center;
	line-height: 200px;
}

.el-main {
	color: #333;
	text-align: center;
	line-height: 30px;
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
