<template>
	<div id="login-div">
		<el-form ref="form" :model="form" label-width="80px">
			<el-form-item label="username">
				<el-input v-model="form.username"></el-input>
			</el-form-item>
			<el-form-item label="password">
				<el-input v-model="form.password"></el-input>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" @click="login">Login</el-button>
				<el-button type="primary" @click="register">Register</el-button>
			</el-form-item>
		</el-form>
	</div>
</template>

<script>
	import * as API from '../api/user/index.js';
	export default {
		name: 'LoginComponent',
		data() {
			return {
				form: {
					username: "",
					password: "",
				}
			};
		},
		methods: {
			login() {
				console.log(this.form.username)
				console.log(this.form.password)
				API.login(this.form).then((res) => {
					if (res.code == 200) {
						this.$notify({
							title: 'success',
							message: 'login secceed',
							type: 'success'
						});
					} else {
						this.$notify.error({
							title: 'error',
							message: 'login failed'
						});
					}
				});

			},
			register() {
				console.log("register");
				API.register(this.form).then((res) => {
					if (res.code == 200) {
						this.$notify({
							title: 'success',
							message: 'login secceed',
							type: 'success'
						});
					} else {
						this.$notify.error({
							title: 'error',
							message: res.msg
						});
					}
				});

			}
		},
	}
</script>

<style>
	#login-div {
		position: absolute;
		width: 350px;
		top: 50%;
		left: 50%;
		margin-left: -150px;
		margin-top: -100px;
	}
</style>
