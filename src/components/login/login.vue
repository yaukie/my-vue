<template>
  <div>
   
    <div class="login_form">
      <input type="text"  class="qxs-ic_user qxs-icon"  placeholder="用户名" v-model.trim="loginData.userName" name="userName">
      <input type="text"  class="qxs-ic_password qxs-icon"  placeholder="密码" v-model.trim="loginData.password" name="password">
      <el-button class="login_btn" @click.native="login" type="primary" round :loading="loginData.isBtnLoading">登录</el-button>
      <div style="margin-top: 10px">
        <span style="color: #000099;" @click="login">注册账号</span><span style="float: right;color: #A9A9AB">忘记密码？</span>
      </div>
    </div>
  </div>
</template>
 
 
<script>
 
   import LoginUtil from '../../assets/js/Login'
   
  export default {
	name:'login',
    data() {
      return {
	  loginData:{
	   userName: '',
        password: '',
        isBtnLoading: false
	  }
       
      }
    },
     computed: {
      btnText() {
        if (this.loginData.isBtnLoading) return '登录中...';
        return '登录';
      }
    },
    methods: {
      login() {
        if (!this.loginData.userName) {
          this.$message.error('请输入用户名');
          return;
        }
        if (!this.loginData.password) {
          this.$message.error('请输入密码');
          return;
        }
		
		let success = (response) =>{
			this.$message.error(response.data.msg);
			let code = response.data.code;
			if(code !=-1){
			this.$router.push({path:'/home/'});
			}
			
		}
		
		LoginUtil.axiosMethod({
			method:'POST',
			url:'/user/login/',
			data:this.loginData,
			callback:success
		})
 
      }
    }
  }
</script>
 
 