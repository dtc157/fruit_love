<template>
    <div id='login' >
      <div id="login-son">
        <!--<div class="backgroundimg"  >-->
          <!--&lt;!&ndash; <img src="./backgroungimg5.jpg" alt=""> &ndash;&gt;-->
        <!--</div>-->
        <div >
          <img class="img"  v-if="userInfo==1" src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3499180723,2956174524&fm=11&gp=0.jpg">
          <img class="img" :src="userInfo.avatarUrl" alt="" v-else>
        </div>
        <p>欢迎<span>{{userInfo.nickName}}</span></p>
         <button open-type="getUserInfo" lang="zh_CN" @getuserinfo="onGotUserInfo" v-if="userInfo==1">点击授权</button>
        <button   @click="gomain" v-else>开启果恋之旅</button>
        <p class="name">果恋--果挚爱,恋之在</p>
      </div>

    </div>
</template>

<script>
export default{
  data(){
    return{
      userInfo:"1"
    }
  }
  ,
  beforeMount(){
    // wx.getUserInfo({
    //       success:(data)=>{
    //         this.userInfo=data.userInfo
    //           console.log(data)
    //       }
    //     })
  },
  methods:{
    onGotUserInfo: function(e){
      // console.log(e.detail.errMsg)
      this.userInfo=e.mp.detail.userInfo
      console.log(this.userInfo)
    },
    //获取用户登陆信息
    gomain(){
        wx.switchTab({
          url: '../index/main'
        })
        wx.setStorage({
          key:"username",
          data:this.userInfo.nickName
        }),
         wx.setStorage({
          key:"useravatarUrl",
          data:this.userInfo.avatarUrl
        })
      },

  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
#login
  #login-son
    display flex
    flex-direction column
    align-items center
    .backgroundimg
      position absolute
      width 100%
      height 100%
      img
        width 100%
        height 100%
    .img
      width 120px
      height 120px
      border-radius 50%
      margin-top 50px
      z-index 100
      border #fdebeb solid 1px
      /*text-align center*/
      /*line-height 100px*/
    p
      margin-top 20px
      margin-bottom 50px
      z-index 100
    .name
      margin-top 200px
      color #c62970
      z-index 100
    button
      background-color #ed3e69
      width 140px
      height 50px
      line-height 50px
      color #fff
      font-size 18px
      z-index 100

</style>
