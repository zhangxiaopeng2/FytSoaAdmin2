<template>
<div style="height: 1743px;">
   <div class="login-wall">
        <div class="login-left">
            <p style="width:550px;text-align:left;">FytCMS内容管理系统，支持多级栏目管理，文章分类，下载、投票、广告等多个模块的集成。</p>
            <div class="login-left-bg"></div>
        </div>
        <div class="login-right">
            <form id="forms">
                <h1>用户登录</h1>
                <div class="cell"><span class="icon-user"></span>
                <input type="text" name="loginname" id="loginname" lay-verify="required" v-model="UserInfo.loginname" lay-verType="tips" placeholder="登录账号" autocomplete="off"></div>
                <div class="cell"><span class="icon-pwd"></span>
                <input type="password" name="password" id="password" lay-verify="required" v-model="UserInfo.password" lay-verType="tips" placeholder="登录密码" autocomplete="off"></div>
                <div class="login-tip"><span>账号密码错误！</span></div>
                <div class="wjpwd"><a href="http://www.feiyit.com" target="_blank">忘记密码？</a></div>
                <div class="login-btn">
                    <button class="layui-btn layui-btn-normal" @click="SubmitLogin()" lay-filter="loginsub">登录</button>
                    <button type="button" class="layui-btn layui-btn-danger">重置</button>
                </div>
                <input type="hidden" name="privateKey"  /><input type="hidden" name="publicKey"/>
            </form>
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
export default{
  data(){
    return {
      UserInfo:{
        loginname:'',
        password:''
      }
    }
  },
  methods:{
    SubmitLogin:function(){
      alert(this.UserInfo.loginname);
    }
  }
}

</script>

<style lang="less">
    @import url('./login.less');
</style>
