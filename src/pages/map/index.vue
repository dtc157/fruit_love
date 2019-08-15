<template>
   <div id="map">
     <div class="map_img">
        地图
        <img src=""  alt="">
     </div>
     <div class="longitude">
        <p>经度:</p>
        <input type="text" name="longitude" :value="longitude" />
     </div>
     <div class="longitude">
        <p>纬度:</p>
        <input type="text" name="latitude" :value="latitude">
     </div>
     <div class="address">
        <p>地址:</p>
        <input type="text" name="address" :value="address">
     </div>
     <div class="name">
        <p>名称:</p>
        <input type="text" name="name" :value="name">
     </div>
     <div class="getaddress">
       <input type="button" name="getaddress" value="获取经纬度" @click="getaddress">
       <input type="button" name="openlocation" value="查看地图位置" @click="openlocation">
     </div>
   </div>
</template>

<script>
  export default {
    data(){
      return{
        //经度
        longitude:"",
        //纬度
        latitude:"",
        address:"",
        name:""
      }
    },
    methods:{
      //获取经纬度
      getaddress(){
        var self=this
        wx.getLocation({
          success:function(res) {
            self.longitude=res.longitude
            self.latitude=res.latitude
            console.log(res)

          }
        })
        console.log("获取经纬度")
      },
      //打开地图位置
      openlocation(){
        var self=this
        wx.getLocation({
          type: 'gcj02', //返回可以用于wx.openLocation的经纬度
          success (res) {
            const latitude = self.latitude
            const longitude = self.longitude
            wx.openLocation({
              latitude,
              longitude,
              scale: 18,
              success (res) {
                console.log(res.address)
              }
            })
          }
        })
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    #map
      display flex
      flex-direction column
      >div
        display flex
        margin 10px 10px
        align-items:center;
        >input
          border black solid 1px;
          line-height 30px
          font-size 16px
          width 80%
          height 30px
      .map_img
        width 90%
        height 200px
        img
           height 200px
           border black solid 1px

</style>
