<template>
    <div id='rating'>
      <div id="header">
        <div class="test">
          <div class="testNav">
            <div class="item "
                 :class="{'selected':tab === 1,'testTitle':true}"
                 @click="changTab(1)"
            >待评价</div>
            <div class="item"
                 :class="{'selected':tab === 2,'testTitle':true}"
                 @click="changTab(2)"
            >已评价</div>
          </div>
        </div>
      </div>
      <div class="container">
        <div v-if="tab===1">
          <div class="item">
            <div class="header">
              <p>瓜果类</p>
              <i class="iconfont icon-arrow"/>
            </div>
            <div class="content">
              <div class="shop_img">
                <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1565693366843&di=adfbefe3197bf97ea163bfd4f3788321&imgtype=0&src=http%3A%2F%2Fpic.pingguolv.com%2Fuploads%2Fallimg%2F180920%2F77-1P920155418.jpg">
                <div class="shop_name">
                  <span>香甜可口的大西瓜</span>
                  <p>来自于新疆</p>
                  <p>3.2斤</p>
                </div>
              </div>
              <div class="shop_price">
                <p>￥49.9</p>
                <span>x1</span>
              </div>
            </div>
            <div class="button">
              <button>再来一单</button>
              <button class="ratingbtn">评价</button>
            </div>
          </div>
          <div class="item">
            <div class="header">
              <p>瓜果类</p>
              <i class="iconfont icon-arrow"/>
            </div>
            <div class="content">
              <div class="shop_img">
                <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1565693366843&di=adfbefe3197bf97ea163bfd4f3788321&imgtype=0&src=http%3A%2F%2Fpic.pingguolv.com%2Fuploads%2Fallimg%2F180920%2F77-1P920155418.jpg">
                <div class="shop_name">
                  <span>香甜可口的大西瓜</span>
                  <p>来自于新疆</p>
                  <p>3.2斤</p>
                </div>
              </div>
              <div class="shop_price">
                <p>￥49.9</p>
                <span>x1</span>
              </div>
            </div>
            <div class="button">
              <button>再来一单</button>
              <button class="ratingbtn">评价</button>
            </div>
          </div>
        </div>
        <!--<div class="norating" style="display: none">-->
          <!--<p>暂无评价商品</p>-->
        <!--</div>-->
        <div v-else-if="tab===2">
          <div class="have_rating">
            <div class="user">
              <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1565697219749&di=8673755a6078aff492d80aac06536b15&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fq_70%2Cc_zoom%2Cw_640%2Fimages%2F20190207%2Ffae874c24644427eaf1b0e21b0ac8dd7.jpeg">
              <p>15770060008</p>
            </div>
            <div class="data">
              <p>2019-5-20</p>
            </div>
            <div class="text">
              超级好评好评，水果特别新鲜，特别的喜欢，酷暑难当临水临电流口水独立思考可能
            </div>
            <div class="goods">
              <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1566291964&di=9934a469c42d3444972e7c8a52d5827e&imgtype=jpg&er=1&src=http%3A%2F%2Fdpic.tiankong.com%2Fj6%2Fp7%2FQJ6366317693.jpg">
              <div class="shop_info">
                <p>新鲜的大西瓜<br> <span>10个</span> </p>
                <div class="shop_info_footer">
                    <p>￥98.00&nbsp;&nbsp;<span>已好评</span></p>
                  <div class="addrating">
                    <i class="iconfont icon-xiepingjia"></i>
                    <p>写追评</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

</template>

<script>
  export default {
    data(){
      return{
        tab:1
      }
    },
    methods: {
      //点击切换Tab
      changTab(index) {
        this.tab = index;
      }
    },
    components:{
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #rating
    background-color #f5f5f5
    height 100%
    width 100%
    #header
      background-color #fff
      .test
        width 100%
        .testNav
          display flex;
          width 100%
          .item
            height 50px;
            color rgb(77, 85, 93)
            font-size 17px
            line-height 50px;
            text-align center
            box-shadow: inset 1px 0 0 0 rgba(0, 0, 0, 0.13);
            width 50%
            &.selected
              color #ff604c
              position relative
              &::after
                content ''
                position absolute
                left 50%
                bottom 1px
                width 40px
                height 3px
                background #ff604c
                transform translateX(-50%)
    .container
      background-color #f5f5f5
      .item
        background-color #fff
        padding 10px;
        box-sizing border-box
        font-size 15px
        color #999
        display flex
        margin 10px
        border-radius 10px
        flex-direction column
        >div
          display flex
        .header
          margin-bottom 10px
          line-height 10px
          p
            color black
          i
            font-size 10px
            margin-left 5px
        .content
          justify-content space-between
          .shop_img
            display flex
            img
              width 80px
              height 80px
              margin-right 20px
              border-radius 10px
            .shop_name
              span
                color black
          .shop_price
            display flex
            float right
            flex-direction column
            align-items flex-end
            padding-right 10px
            p
              color black
        .button
          justify-content flex-end
          button
            width 80px
            height 30px
            line-height 30px
            font-size 15px
            border-radius 30px
            background-color #fff
            border #999 solid 1px
            color #999
            margin: 0 0 0 10px;
            padding: 0;
            outline: none;    //消除默认点击蓝色边框效果
          .ratingbtn
            color red
            border red solid 1px

      .have_rating
        background-color #fff
        margin 10px 0 10px 0
        padding 10px 10px 10px 15px 
        display flex
        flex-direction column
        font-size 16px
        >div
          display flex
        .user
          align-items center
          margin-bottom 5px
          img
            width 30px
            height 30px
            margin-right 5px
            border-radius 50%
        .data
          color #999
          margin-bottom 5px
        .text
          font-size 17px
          margin-bottom 15px
          flex-wrap wrap
          letter-spacing:2px
        .goods
          background-color #f5f5f5
          img
            width 100px
            height 100px
          .shop_info
            padding 10px
            display flex
            flex-direction column
            justify-content space-between
            .shop_info_footer
              display flex
              justify-content space-between
              span
                color #ff6e3e
              p
                display inline-block
              .addrating
                display flex
                padding 5px
                height 15px
                width 60px
                float right
                border #ff6e3e solid 1px
                color #ff6e3e
                line-height 15px
                font-size 11px
                border-radius 20px
                i
                  font-size 18px


</style>
