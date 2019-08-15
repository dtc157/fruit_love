<template>
  <div class="wrap">
    <div class="head">
      <div class="picture">
        <img :src="useravatarUrl" alt="">
      </div>
      <div class="uname">{{username}}</div>
      <div class="QRcode"></div>
    </div>
    <div class="content">
      <div class="context">
        <div class="brother1">
          <div class="order">
            <h3 class="title">我的订单</h3>
          </div>
          <ul class="items">
            <li class="item" @click="jumppage(1)">
              <i-icon class="iconfont icon-dingwei-" type="document" size="30" />
              <br />全部订单
            </li>
            <li class="item" @click="jumppage(2)">
              <i-icon class="iconfont icon-weifukuan-copy" type="document" size="30" />
              <br />未付款
            </li>
            <li class="item" @click="jumppage(3)">
              <i-icon class="iconfont icon-daitihuo1-copy" type="document" size="30" />
              <br />待取货
            </li>
            <li class="item" @click="jumppage(4)">
              <i-icon class="iconfont icon-tijiaodingdanyitihuo_-copy" type="document" size="30" />
              <br />已取货
            </li>
          </ul>
        </div>
        <div class="brother2" @click="jumppagerating()">
          <div class="ideaphoto">
            <i-icon class="iconfont icon-pingjia"  />
          </div>
          <div class="paragraph" >
            <h3 id="idea1">生鲜馆商品评价</h3>
            <h6 id="idea2">您的评价，能更好地提升我们的服务</h6>
          </div>
          <div class="icon">
            <i-icon class="iconfont icon-arrow" />
          </div>
        </div>
        <div class="brother3">
          <div class="son1">
            <span style="font-size:16px;">我的当前自提点</span>
            <div class="son1-i">
              <span style="color:rgb(241, 168, 9);font-size:12px;">
                切换自提点&nbsp;
              </span>
              <i class="iconfont icon-arrow" ></i>
            </div>

          </div>
          <div class="son2">
            <div class="son2-p">
              <p class="son2p1">天心暮云街道天猫小店理工超市</p>
              <p style="font-size:12px;padding-left:15px; color:#9e9e9e;">湖南省长沙市天心区暮云街道长沙理工大学职工宿舍8栋107号</p>
            </div>
          </div>
          <div class="son3">
            <p>自提点电话:<span href="#">18670766176</span></p>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <p>
        1.如果您购买的商品有任何问题，
        请直接与购买的门店联系!100%售后保证!
      </p>
      <p>
        2.如果您找不到购物的提货门店，请
        致电兴盛优选帮忙热线!15580800479
      </p>
    </div>
    <div class="btn" @click="show()">
      <input type="button" class="goshopping" value="去购物" />
      <input type="button" class="exitbutton" value="退出当前账号" />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: "hshshh",
      useravatarUrl:"",
      username:''
    };
  },
  beforeMount(){
    var self=this
    //获取头像
      wx.getStorage({
        key: 'useravatarUrl',
          success (res) {
            self.useravatarUrl=res.data
          }
      }),
      wx.getStorage({
        key: 'username',
          success (res) {
            self.username=res.data
            console.log(self.username)
          }
      })
  },
  methods: {
    jumppage(value) {
      wx.navigateTo({
        url: "../order/main?index="+value

      })
      console.log(value)
    },
    jumppagerating(value) {
      wx.navigateTo({
        url: "../goodsRating/main?index="+value

      })
      console.log(value)
    }
  }
};
</script>

<style scoped>
.wrap {
  background-color: rgb(235, 236, 238);
}
.wrap i-icon{
  font-size: 30px;
  color: #686868;
}
.head {
  width: 100%;
  height: 130px;
  background-color:#FF0000;
  /* border: 1px solid black; */
}
.picture img{
  width: 70px;
  height: 70px;
  margin-left: 20px;
  margin-bottom: 5px;
  float: left;
  border-radius: 50%;
}
.uname {
  width: 130px;
  height: 60px;
  margin-left: 15px;
  margin-top: 15px;
  color: #fff;
  line-height: 60px;
  float: left;
}
.QRcode {
  width: 130px;
  height: 60px;
  float: right;
  margin-top: 15px;
}
.QRcode ::after {
  clear: both;
}
.content {
  width: 100%;
  height: 410px;
  /* border: 1px solid black; */
}
.context {
  width: 95%;
  height: 420px;
  /* border: 1px solid black; */
  position: relative;
  margin: 0 auto;
  bottom: 40px;
}
.brother1 {
  width: 100%;
  height: 120px;
  margin: 0 auto;
  border-radius: 5px;
  background-color: white;
  /* border: 1px solid black; */
}
.order {
  width: 100%;
  height: 49px;
  line-height: 50px;
  box-shadow:0 1px 0 0 rgba(0, 0, 0, 0.13);
}
.title {
  text-align: left;
  padding-left: 15px;

}
.item {
  width: 65px;
  height: 50px;
  margin: 10px;
  padding: 1px;
  font-size: 14px;
  color: #686868;
  text-align: center;
  float: left;
}
.item ::after {
  clear: both;
}
.item1 :hover {
  color: rgb(238, 203, 160);
}
.brother2 {
  width: 100%;
  height: 90px;
  background-color: white;
  border-radius: 5px;
  /* line-height: 90px; */
  margin: 8px auto 0px;
  /* border: 1px solid black; */
  display: flex;
}
.ideaphoto {
  width: 12%;
  height: 40px;
  line-height: 40px;
  color: #fff;
  text-align: center;
  border: 1px solid rgb(241, 168, 9);
  border-radius: 50%;
  margin-left: 22px;
  background-color: #ff0000;
  margin: 27px 0px 20px 20px;
}
.icon-pingjia{
  color:#fff !important;
  font-size: 20px !important;
}
.paragraph {
  width: 64%;
  height: 60px;
  /* border: 1px solid red; */
  margin: auto;
}
#idea1 {
  font-size:16px;
  letter-spacing:2px;
  line-height: 20px;
  padding-top: 15px;
}
#idea2 {
  font-size: 13px;
  color: rgb(121, 122, 124);
}
.icon i-icon{
  font-size: 20px !important;
  height: 60px;
  line-height: 100px;
  /* border: 1px solid red; */
  margin: auto;
  margin-right: 10px;
}
.brother3 {
  width: 100%;
  height: 180px;
  padding: 10px;
  box-sizing: border-box;
  background-color: white;
  margin: 8px auto 0px;
  border-radius: 5px;
  /* border: 1px solid black; */
}
.son1 {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 42px;
  line-height: 42px;
  padding-left: 15px;
  box-shadow:0 1px 0 0 rgba(0, 0, 0, 0.13);
  /* border: 1px solid black; */
}
.son1-i{
    display: flex;
  margin-right: 20px;
}
.son1-i i{
  font-size: 12px;
}
.son2 {
  width: 100%;
  height: 80px;
  padding-top:10px;
  font-size: 13px;
  box-shadow:0 1px 0 0 rgba(0, 0, 0, 0.13);
}
.son2p1 {
  color: #ff0000;
  font-size: 16px;
  padding-bottom: 5px;
  padding-left: 15px;
}
.son3 {
  width: 100%;
  height: 40px;
  font-size: 16px;
  line-height: 40px;
  padding-left: 15px;
  /* border: 1px solid black; */
}
.son3 span{
  color:#ff0000;
}
.footer {
  width: 92%;
  height: 80px;
  line-height: 20px;
  font-size: 14px;
  /* border: 1px solid blue; */
  background-color: rgb(235, 236, 238);
  margin: 0 auto;
  position: relative;
  top: -8px;
}
.btn {
  width: 95%;
  height: 120px;
  margin: 0 auto;
  /* border: 1px solid red; */
}
.goshopping {
  width: 100%;
  border-radius: 20px;
  background-color: #ff0000;
  color: white;
  margin-bottom: 8px;
}
.exitbutton {
  width: 100%;
  border-radius: 20px;
  color: rgb(150, 146, 146);
  /* margin-bottom: 20px; */
}
</style>
