<template>
  <div class="goods_container">
    
    <ul class="goods_list" >
      <li class="goods_li border-1px" @click="goDetails()">
        <span>
          <div class="goods_top">
            <span class="goods_manufacturer">
              本商品由{{item.manufacturer}}专供
            </span>
            <section class="goods_img">
              <img  :src="item.goods_image">
            </section>
            <section class="goods_title">
              <div class="goods_title_left">
                {{item.goods_name}}
              </div>
              <div class="goods_title_right">
                <span>{{item.focus_number}}</span>
                <p>关注人数</p>
              </div>
            </section>
          </div>
          <div class="goods_footer">
            <section class="goods_footer_left">
              <span class="goods_time">预售时间：{{item.start_time}}</span>
              <span class="goods_time1">提货时间：{{item.over_time}}</span>
              <div class="goods_price">
                <span class="goods_newPrice">￥{{item.new_price}}</span>
                <span class="goods_oldPrice">￥{{item.old_price}}</span>
              </div>
            </section >
            <section class="goods_footer_right">
              <div class="goods_sale">已售<span>{{item.sold}}</span>份/限量{{item.all_number}}份</div>
              <div class="goods_limit">每人限购10份</div>
              <input type="button" class="goods_addCart" value="加入购物车">
            </section>
          </div>
        </span>
        <div class="width">
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'ShopList',
    props:[
      'item',
      'index'
    ],
    methods:{
      Alert(){
        alert("真好")
      },
      goDetails() {
        wx.navigateTo({
          url: '../goodsdetails/main'
        })
      }
    }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .goods_container
    margin-top 10px
    .goods_list
      .goods_li
        padding 10px
        margin-bottom 20px;
        background-color #fff
        border-radius 10px
        span
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
              width 100%
              height 150px
              box-sizing border-box
              img
                display inline-block
                width 100%
                height 100%
                border-radius 10px 10px 0px 0px
            .goods_title
              bottom-border-1px(#f1f1f1)
              box-shadow:0 1px 0 0 rgba(0, 0, 0, 0.13);
              display flex
              height 35px;
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
                padding-left 2px
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
            padding 10px 10px 10px  0;
            display flex
            box-shadow 0px 1px 0px 0px rgba(0, 0, 0, 0.13);
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
              .goods_price
                margin-top 23px;
                .goods_newPrice
                  color #f33a3a
                  font-size 25px;
                .goods_oldPrice
                  color #999
                  text-decoration line-through
            .goods_footer_right
              width 60%
              height 60px
              .goods_sale
                float right
                color black
                font-size 12px
                margin-right 20px
                span
                  color red
              .goods_limit
                display block
                margin-top 5px
                margin-right 20px 
                float right
                color #ffb369
                font-size 12px;
              .goods_addCart
                width 70%
                margin-right 5px
                float right
                font-size 18px
                background-color red
                height 40px
                line-height 40px
                color #fff
                border-radius 30px
                margin-top 15px
                border: 1px solid transparent //自定义边框
                outline: none   //消除默认点击蓝色边框效果


</style>
