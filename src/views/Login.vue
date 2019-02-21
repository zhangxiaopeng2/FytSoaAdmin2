<template>
<div style="height: 1743px;">
   <div class="login-wall">
        <div class="login-left">
            <p style="width:550px;text-align:left;">FytCMS内容管理系统，支持多级栏目管理，文章分类，下载、投票、广告等多个模块的集成。</p>
            <div class="login-left-bg"></div>
        </div>
        <div class="login-right">
            <el-form id="forms" :rules="rules2" ref="ruleForm2">
                <h1>用户登录</h1>
                <div class="cell"><span class="icon-user"></span>
                <input type="text" v-model="UserInfo.loginname" placeholder="用户名" autocomplete="off"></div>
                <div class="cell"><span class="icon-pwd"></span>
                <input type="password" v-model="UserInfo.password" lay-verType="tips" placeholder="登录密码" autocomplete="off"></div>
                <div class="login-tip"><span>账号密码错误！</span></div>
                <div class="wjpwd"><a href="http://www.feiyit.com" target="_blank">忘记密码？</a></div>
                <div class="login-btn">
                    <button class="layui-btn layui-btn-normal" @click="SubmitLogin()" lay-filter="loginsub">登录</button>
                    <button type="button" class="layui-btn layui-btn-danger">重置</button>
                </div>
            </el-form>
        </div>
        <div class="layui-clear"></div>
    </div>
    <div class="login-footer">
        <p>京ICP备13060722号 Copyright @@ 2014-2018 <a href="http://www.feiyit.cn/" target="_blank">Powered by 北京飞易腾科技有限公司</a></p>
    </div>
</div>
</template>
<script>
import { mapGetters } from 'vuex';
import {alertExtention} from '../common/js/messageHelper.js';
import {GetUrl} from '../common/URL.js';
import qs from 'qs';
export default{ 
  data(){
    return {
      UserInfo:{
        loginname:'',
        password:''
      },
      rules2: {
          loginname: [
            { required: true, message: '请输入账号', trigger: 'blur' },
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
          ]
        },
        checked: true
    }
  },
  methods:{
    SubmitLogin:function(){
        var _this = this;
        if(this.UserInfo.loginname==""||this.UserInfo.loginname==undefined){
          alertExtention(_this,"请输入用户名");
          return;
        }if(this.UserInfo.password==""||this.UserInfo.password==undefined){
          alertExtention(_this,"请输入密码");
          return;
        }
        var loginPara={loginname:this.UserInfo.loginname,password:this.UserInfo.password};

    this.axios .post('/api/admin/login', qs.stringify(loginPara)).then((res) => {
        if(res.data.success){
          sessionStorage.setItem('user',JSON.stringify(res.data.data));
          this.$router.push({path:'/table'})                              
        }else{
          alertExtention(_this,res.data.message);
          return;
        }
    });

    }
  }
}

</script>

<style lang="less">
    @import url('./login.less');
</style>
