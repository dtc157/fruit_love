<template>
    <div id='search'>
      <div class="search_header">
        <div class="content_search">
          <div class="iconfont icon-sousuo"> </div>
          <input class="search2" placeholder="搜索商品">
        </div>
        <input type="button" class="serch_button" value="查询">
      </div>
       <div class="content">
            <div class="shop_left_img">
                
                <img src="../index/images/nav/7.jpg" alt="">
            </div>
            <div class="shop_content_right">
                <div class="content_title">
                    <h >施蒂利克你废了你的老师看到你路上看到</h>
                    <p >2.7斤 正负0.5斤</p>
                </div>
                <div class="content_footer">
                    <p class="shop_price">￥42</p>
                    <div class="CartControl_warp">
                        <CartControl />
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ShopList from "../../components/ShopList/ShopList";
  export default {
    data(){
      return{
        title:'搜索'
      }
    },
    components:{
      ShopList
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #search
    width 100%
    height 100%
    background-color #fff
    .search_header
      width 100%
      display flex
      height 40px
      align-items center
      bottom-border-1px(#f1f1f1)
      .content_search
        display flex
        margin-left 17px;
        background-color #f2f2f2
        width 90%
        box-sizing border-box
        padding-left 10px;
        color #7e8c8d
        border-radius 10px
        outline: none;    //消除默认点击蓝色边框效果消除
        .icon-sousuo
          line-height 35px;
          font-size 20px;
          width 20px;
          height 35px;
        & .search2
          margin-left 5px;
          height 35px;
          width 90%
          background-color #f2f2f2
      .serch_button
        height 35px;
        color #fff
        width 20%
        font-size 15px;
        background-color red
        margin 5px 15px 5px 5px
        border-radius 10px
        border: 1px solid transparent;  //自定义边框
        outline: none;    //消除默认点击蓝色边框效果消除
    .content
        display flex
        margin 10px;
        background-color #fff
        border-radius 5px
        .shop_left_img
            display flex
            padding  10px
            align-items center
            .iconfont 
                font-size 20px;
                margin-right 5px
                &.on
                    color red
            img 
                height 100px
                width 100px
                border-radius 5px
    .shop_content_right
        display flex
        flex-direction column
        justify-content space-between
        padding 15px 15px 10px 0px
        min-width 200px
        h
            display block
            width 170px
            font-size 16px  
            font-weight 500
            white-space nowrap
            overflow hidden
            text-overflow ellipsis
        p
            font-size 13px
            color #666666
    .content_footer
        display flex
        position relative
        height 40px  
        .shop_price
            font-size 20px
            line-height 40px
            color red   
        .CartControl_warp
            position absolute
            right 15px
            bottom 5px

</style>
