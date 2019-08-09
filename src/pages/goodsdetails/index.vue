<template>
    <div class="goodsdetails">
      <div class="goods border-1px" >
        <a>
          <div class="goods_top">
            <section class="goods_img">
              <Swiper :images="images" ></Swiper>
            </section>
            <div class="goods_price">
              ￥<span class="goods_newPrice">1.19</span>
              <span class="goods_oldPrice">￥2</span>
            </div>
            <section class="goods_title">
              <div class="goods_title_left">
                今日新鲜大西瓜
              </div>
              <div class="goods_title_right">
                <span>24万</span>
                <p>关注人数</p>
              </div>
            </section>
          </div>
          <div class="goods_footer">
            <section class="goods_footer_left">
              <span class="goods_time">预售时间：07月21日</span>
              <span class="goods_time1">提货时间：08月01日</span>
            </section >
            <section class="goods_footer_right">
              <div class="goods_sale">已售<span>8000</span>份/限量8000份</div>
              <span class="goods_limit">每人限购10份</span>
            </section>
          </div>
        </a>
      </div>
      <div id="footer">
        <div class="test">
        <div class="testNav">
          <div class="item"
              :class="{'selected':tab === 1,'testTitle':true}"
              @click="changTab(1)"
            >评价</div>
            <div class="item"
              :class="{'selected':tab === 2,'testTitle':true}"
              @click="changTab(2)"
            >商品详情</div>
          </div>
          <div class="container1">
            <div v-if="tab===1">
              <GoodsRatings></GoodsRatings>
            </div>
            <div v-else-if="tab===2">
              <GoodsInfo></GoodsInfo>
            </div>
          </div>
        </div>
        <FooterGoods></FooterGoods>
      </div>
    </div>
</template>

<script>
import Swiper from "../../components/GoodsDetailsCom/Swiper/Swiper";
import GoodsInfo from "../../components/GoodsDetailsCom/GoodsInfo/GoodsInfo";
import GoodsRatings from "../../components/GoodsDetailsCom/GoodsRatings/GoodsRatings";
import FooterGoods from "../../components/GoodsDetailsCom/FooterGoodsDetails/FooterGoodsDetails";
  export default {
    
    data() {
      return {
        images: [
          {
              url:"../index/images/nav/7.jpg"
          },
          {
            url:
              "https://img-oss.yunshanmeicai.com/goods/default/31d8dfa4-0d7b-4694-80f9-41b07c9d0a3a.png"
          },
          {
            url:
              "https://img-oss.yunshanmeicai.com/goods/default/e83c8f0f-4acc-4729-bcbb-294f2b314977.jpg"
          }
        ],
        tab: 1
      };
    },
      methods: {
        //点击切换Tab
        changTab(index) {
            this.tab = index;
        }
    },
    components: { 
      Swiper,
      FooterGoods,
      GoodsRatings,
      GoodsInfo
     }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .goodsdetails
    background-color #f3f5f7
    .header_title_wrap
      width 100%
      .header_title
        height 40px
        width 30%
        line-height 40px
        padding-left 10px
        a
          color black
    .goods
        bottom-border-1px(#f1f1f1)
        margin-bottom 20px;
        border-radius 10px
        background-color #fff
        .goods_top
          box-sizing border-box
          width 100%
          .goods_manufacturer
            display block
            height 15px;
            width 100%
            color #7e8c8d
            font-size 13px;
            text-align center
            line-height 15px
          .goods_img
            height 370px
            bottom-border-1px(#f1f1f1)
            .swiper-container
              width 100%
              height 100%
              padding-bottom 0
              background-color #fff
              .swiper-wrapper
                display flex
                align-content center
                width 100%
                height 100%
                .swiper-slide
                  display flex
                  width 100%
                  img
                    width 100%
          .goods_price
            height 50px;
            background-color red
            line-height 50px;
            padding 0 10px
            color #fff
            .goods_newPrice
              font-size 30px;
            .goods_oldPrice
              text-decoration line-through
          .goods_title
            box-shadow:0 1px 0 0 rgba(0, 0, 0, 0.13);
            background-color #fff
            display flex
            height 50px;
            padding-top 5px;
            padding-bottom 5px
            width 100%
            .goods_title_left
              width:80%
              color black
              font-weight 700
              box-sizing border-box
              padding 5px 10px
            .goods_title_right
              display flex
              padding-right 5px;
              margin-left 10px;
              width:20%
              color #999
              box-shadow: inset 1px 0 0 0 rgba(0, 0, 0, 0.13);
              flex-direction column
              justify-content center
              text-align center
              font-size 12px
              span
                color #ffb369
        .goods_footer
          position relative
          width 100%
          box-sizing border-box
          padding 10px 10px 10px  10px;
          display flex
          .goods_footer_left
            display flex
            flex-direction column
            width 40%
            .goods_time
              font-size 12px
              color #ffb369
            .goods_time1
              margin-top 5px;
              font-size 12px
              color #ffb369
          .goods_footer_right
            width 60%
            max-height 60px
            .goods_sale
              display block
              float right
              color black
              font-size 12px;
              margin-left 20px;
              span
                color red
            .goods_limit
              display block
              margin-top 5px;
              float right
              color #ffb369
              font-size 12px;
    #footer
      margin-bottom 70px;
      background-color #fff
      .test 
        width 100%
        .testNav
          display flex;
          
          width 100%
          .item
            height 40px; 
            color rgb(77, 85, 93)
            line-height 40px;
            text-align center
            width 50%
            &.selected
              color #ff604c
              position relative
              &::after
                content ''
                position absolute
                left 50%
                bottom 1px
                width 50px
                height 3px
                background #ff604c
                transform translateX(-50%)
</style>
