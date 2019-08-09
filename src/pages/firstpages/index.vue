<template>
    <div id='login' >
      <div id="login-son">
        <div class="backgroundimg"  >
          <!-- <img src="./backgroungimg5.jpg" alt=""> -->
        </div>
        <img class="img" :src="userInfo.avatarUrl" alt="">
        <p>欢迎<span>{{userInfo.nickName}}</span></p>
        <!-- <button open-type="getUserInfo" @getuserinfo="getUserInfo">授权登陆</button> -->
        <button @click="gomain">开启果恋之旅</button>
        <p class="name">果恋--果挚爱,恋之在</p> 
      </div>
        
    </div>
</template>

<script>
export default{
  data(){
    return{
      userInfo:{}
    }
  }
  ,
  beforeMount(){
    wx.getUserInfo({
          success:(data)=>{
            this.userInfo=data.userInfo 
              console.log(data)
          }
        })
  },
  methods:{
    //获取用户登陆信息
    gomain(){
        wx.switchTab({
          url: '../index/main'
        })
        wx.setStorage({
          key:"username",
          data:this.userInfo.nickName
        },{
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
      width 100px
      height 100px
      border-radius 50%
      margin-top 50px
      z-index 100
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
      color #fff
      font-size 20px
      z-index 100 

</style>
