<template>
    <div id='login' >
      <div id="login-son">
        <div class="backgroundimg"  >
          <!-- <img src="./backgroundimg4.png" alt=""> -->
        </div>
        <img class="img" :src="userInfo.avatarUrl" alt="">
        <p>欢迎{{userInfo.nickName}}</p>
        <p class="name">果恋--果挚爱,恋之在</p>
        <!-- <button open-type="getUserInfo" @getuserinfo="getUserInfo">授权登陆</button> -->
        <button>开启小程序之旅</button>
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
      this.handleGetUserInfo()
  },
  methods:{
    //获取用户登陆信息
    handleGetUserInfo(){
        wx.getUserInfo({
          success:(data)=>{
            this.userInfo= data.userInfo 
              console.log(data)
          },
          fail:()=>{
            console.log("失败")
          }
        })
      },
    getUserInfo(data){
      //判断用户是否授权 
      if(data.mp.detail.rawData){
        //用户授权
        this.handleGetUserInfo()
      } 
    }
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
      margin 20px;
      z-index 100
    .name
      color #c62970 
      z-index 100
    button
      background-color pink
      color #fff
      font-size 20px
      z-index 100

</style>
