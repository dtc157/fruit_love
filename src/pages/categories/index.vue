<template>
    <div class="categories">
      <div class="content_wrap">
        <div class="content_search">
          <i class="iconfont icon-sousuo"> </i>
          <input class="search2" placeholder="搜索商品" @click="goDetail()">
        </div>
        <div class="content">
          <div class="menu-wrapper" ref="menuWrapper">
            <ul>
              <li class="menu-item current" >
                <span class="text bottom-border-1px">
                <img class="icon"
                     src="https://fuss10.elemecdn.com/0/6a/05b267f338acfeb8bd682d16e836dpng.png">
                折扣
                </span>
              </li>
              <li class="menu-item">
                <span class="text bottom-border-1px">
                <img class="icon"
                     src="https://fuss10.elemecdn.com/b/91/8cf4f67e0e8223931cd595dc932fepng.png">
                优惠
                </span>
              </li>
              <li class="menu-item">
                <span class="text bottom-border-1px">
                <img class="icon"
                     src="https://fuss10.elemecdn.com/b/91/8cf4f67e0e8223931cd595dc932fepng.png">
                优惠
                </span>
              </li>
              <li class="menu-item">
                <span class="text bottom-border-1px">
                <img class="icon"
                     src="https://fuss10.elemecdn.com/b/91/8cf4f67e0e8223931cd595dc932fepng.png">
                优惠
                </span>
              </li>
              <li class="menu-item">
                <span class="text bottom-border-1px">
                <img class="icon"
                     src="https://fuss10.elemecdn.com/b/91/8cf4f67e0e8223931cd595dc932fepng.png">
                优惠
                </span>
              </li>
              <li class="menu-item">
                <span class="text bottom-border-1px">
                <img class="icon"
                     src="https://fuss10.elemecdn.com/b/91/8cf4f67e0e8223931cd595dc932fepng.png">
                优惠
                </span>
              </li>
              <li class="menu-item">
                <span class="text bottom-border-1px">
                <img class="icon"
                     src="https://fuss10.elemecdn.com/b/91/8cf4f67e0e8223931cd595dc932fepng.png">
                优惠
                </span>
              </li>
              <li class="menu-item">
                <span class="text bottom-border-1px">
                <img class="icon"
                     src="https://fuss10.elemecdn.com/b/91/8cf4f67e0e8223931cd595dc932fepng.png">
                优惠
                </span>
              </li>
              <li class="menu-item">
                <span class="text bottom-border-1px">
                <img class="icon"
                     src="https://fuss10.elemecdn.com/b/91/8cf4f67e0e8223931cd595dc932fepng.png">
                优惠
                </span>
              </li>
            </ul>
          </div>
          <div class="content_right">
            <li class="goods_li border-1px" >
              <a>
                <div class="goods_top">
                  <section class="goods_img">
                    <img  src="../index/images/nav/7.jpg">
                  </section>
                  <section class="goods_title">
                      今日新鲜大西瓜
                  </section>
                </div>
                <div class="goods_footer">
                  <section class="goods_footer_left">
                    <span class="goods_time">预售时间：07月21日</span>
                    <span class="goods_time1">提货时间：08月01日</span>
                    <div class="goods_price">
                      <span class="goods_newPrice">￥1.19</span>
                      <span class="goods_oldPrice">￥2</span>
                    </div>
                  </section >
                  <section class="goods_footer_right">
                    <div class="goods_sale">已售<span>8000</span>份/限量8000份</div>
                    <span class="goods_limit">每人限购10份</span>
                    <div class="cartcontral_wrap">
                      <cartcontrol ></cartcontrol>
                    </div>
                  </section>
                </div>
              </a>
              <div class="width">

              </div>
            </li>
            <li class="goods_li border-1px" >
              <a>
                <div class="goods_top">
                  <section class="goods_img">
                    <img  src="../index/images/nav/7.jpg">
                  </section>
                  <section class="goods_title">
                    今日新鲜大西瓜
                  </section>
                </div>
                <div class="goods_footer">
                  <section class="goods_footer_left">
                    <span class="goods_time">预售时间：07月21日</span>
                    <span class="goods_time1">提货时间：08月01日</span>
                    <div class="goods_price">
                      <span class="goods_newPrice">￥1.19</span>
                      <span class="goods_oldPrice">￥2</span>
                    </div>
                  </section >
                  <section class="goods_footer_right">
                    <div class="goods_sale">已售<span>8000</span>份/限量8000份</div>
                    <span class="goods_limit">每人限购10份</span>
                    <div class="cartcontral_wrap">
                      <cartcontrol ></cartcontrol> 
                    </div>
                  </section>
                </div>
              </a>
              <div class="width">

              </div>
            </li>
            <li class="goods_li border-1px" >
              <a>
                <div class="goods_top">
                  <section class="goods_img">
                    <img  src="../index/images/nav/7.jpg">
                  </section>
                  <section class="goods_title">
                    今日新鲜大西瓜
                  </section>
                </div>
                <div class="goods_footer">
                  <section class="goods_footer_left">
                    <span class="goods_time">预售时间：07月21日</span>
                    <span class="goods_time1">提货时间：08月01日</span>
                    <div class="goods_price">
                      <span class="goods_newPrice">￥1.19</span>
                      <span class="goods_oldPrice">￥2</span>
                    </div>
                  </section >
                  <section class="goods_footer_right">
                    <div class="goods_sale">已售<span>8000</span>份/限量8000份</div>
                    <span class="goods_limit">每人限购10份</span>
                    <div class="cartcontral_wrap">
                      <cartcontrol ></cartcontrol>
                    </div>
                  </section>
                </div>
              </a>
              <div class="width">

              </div>
            </li>
          </div>
        </div>

      </div>
    </div>
</template>

<script>
import cartcontrol from "../../components/CartControl/CartControl"
export default {
   methods:{
      goDetail() {
        wx.navigateTo({
          url: '../search/main'
        })
      }
    },
  components:{
        cartcontrol
    }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .categories
    background-color #fff
    .content_wrap
      padding 10px 0px 10px 0px
      .content_search
        display flex
        margin-left 17px;
        background-color #f2f2f2
        width 90%
        box-sizing border-box
        margin-top 5px
        color #7e8c8d
        border-radius 10px
        outline: none;    //消除默认点击蓝色边框效果消除
        .icon-sousuo
          line-height 35px;
          margin-left 10px;
          font-size 20px;
          width 20px;
          height 35px;
        & .search2
          margin-left 5px;
          height 35px;
          width 90%
          border-radius 10px
          background-color #f2f2f2
      .content
        margin-top 10px
        display flex
        box-sizing border-box
        top-border-1px(#f1f1f1)
        .menu-wrapper
          flex: 0 0 80px
          width: 80px
          background: #f3f5f7
          .menu-item
            display: table
            height: 54px
            width: 56px
            padding: 0 12px
            line-height: 14px
            &.current
              position: relative
              z-index: 10
              margin-top: -1px
              background: #fff
              color: #ff0000
              font-weight: 700
              .text
                border-none()
            .icon
              display: inline-block
              vertical-align: top
              width: 12px
              height: 12px
              margin-right: 2px
              background-size: 12px 12px
              background-repeat: no-repeat
            .text
              display: table-cell
              width: 56px
              vertical-align: middle
              font-size: 12px   
        .content_right
          width 80%
          .goods_li
            padding 10px;
            margin-bottom 10px
            box-shadow 0px 1px 0px 0px rgba(0, 0, 0, 0.13);
            >a
              clearFix()
              box-sizing border-box
              width 100%
              .goods_top
                box-sizing border-box
                width 100%
                padding-right 10px
                .goods_manufacturer
                  display block
                  height 15px;
                  width 100%
                  font-size 13px;
                  text-align center
                  line-height 15px
                .goods_img
                  display block
                  width 100%
                  height 150px
                  box-sizing border-box
                  img
                    display inline-block
                    border-radius 10px 10px 0px 0px
                    width 100%
                    height 100%
                .goods_title
                  bottom-border-1px(#f1f1f1)
                  height 23px;
                  padding 3px 0px 3px 5px
                  width 100%
                  color black
                  font-weight 500
                  box-sizing border-box
                  font-size 15px;
              .goods_footer
                position relative
                width 100%
                box-sizing border-box
                padding 10px 10px 10px  0;
                display flex
                .goods_footer_left
                  margin-left 5px
                  display flex
                  flex-direction column
                  width 40%
                  .goods_time
                    font-size 10px
                    color #ffb369
                  .goods_time1
                    margin-top 5px;
                    font-size 10px
                    color #ffb369
                  .goods_price
                    margin-top 10px;
                    .goods_newPrice
                      color #f33a3a
                      font-size 20px;
                    .goods_oldPrice
                      text-decoration line-through
                      color #999
                      font-size 14px
                .goods_footer_right
                  width 60%
                  max-height 60px
                  flex-direction column
                  .goods_sale
                    display block
                    float right
                    color black
                    font-size 12px;
                    span
                      color red
                  .goods_limit
                    display block
                    margin-top 5px;
                    float right
                    color #ffb369
                    font-size 12px;
                  .cartcontral_wrap
                    position absolute
                    right 20px
                    bottom 0px           
</style>
