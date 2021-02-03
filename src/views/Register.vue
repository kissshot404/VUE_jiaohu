<template>
	<div class="Register">
		注册
		<el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
			<el-form-item prop="email" label="邮箱" :rules="[
				{ required: true, message: '请输入邮箱地址', trigger: 'blur' },
				{ type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
			]">
				<el-input v-model="ruleForm.email"></el-input>
			</el-form-item>
			<el-form-item label="昵称" prop="name">
				<el-input type="text" v-model="ruleForm.name" autocomplete="off"></el-input>
			</el-form-item>

			<el-form-item label="密码" prop="pass">
				<el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
			</el-form-item>
			<el-form-item label="确认密码" prop="checkPass">
				<el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" @click="submitForm">提交</el-button>
				<el-button @click="$router.push({name:'Login'})">已有账号,去登录</el-button>
			</el-form-item>
		</el-form>
	</div>
</template>

<script>
	export default {
		data() {
			var validatePass = (rule, value, callback) => {
				if (value === '') {
					callback(new Error('请输入密码'));
				} else {
					if (this.ruleForm.checkPass !== '') {
						this.$refs.ruleForm.validateField('checkPass');
					}
					callback();
				}
			};
			var validatePass2 = (rule, value, callback) => {
				if (value === '') {
					callback(new Error('请再次输入密码'));
				} else if (value !== this.ruleForm.pass) {
					callback(new Error('两次输入密码不一致!'));
				} else {
					callback();
				}
			};
			var validatename = (rule, value, callback) => {
				if (value === '') {
					callback(new Error('请输入昵称'));
				} else {
					callback();
				}
			};
			return {
				ruleForm: {
					name:'',
					pass: '',
					checkPass: '',
					email: ''
				},
				rules: {
					name: [{
						validator: validatename,
						trigger: 'blur'
					}],
					pass: [{
						validator: validatePass,
						trigger: 'blur'
					}],
					checkPass: [{
						validator:validatePass2,
						trigger: 'blur'
					}],
					
				}
			};
		},
		methods: {
			submitForm() {
				this.$axios({
					url:"user/",
					method:'post',
					data:{
						username:this.ruleForm.name,
						email:this.ruleForm.email,
						password:this.ruleForm.pass,
						password2:this.ruleForm.checkPass,
						
					}
				}).then(res=>{
					console.log('注册成功',res);
					this.$message('注册成功')
					this.$router.push({name:'Login'})
				}).catch(err=>{
					console.log('错误原因',err)
				})
				// this.$refs[formName].validate((valid) => {
				// 	if (valid) {
				// 		alert('submit!');
				// 	} else {
				// 		console.log('error submit!!');
				// 		return false;
				// 	}
				// 	this.$router.push({name:'Login'})
				// });
			},

		}
	}
</script>

<style>
</style>
