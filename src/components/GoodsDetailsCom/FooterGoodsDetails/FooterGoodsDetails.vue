
<template>
    <div class="footer_guide border-1px">
            <span class="guide_item" >
              <span class="item_icon">
                  <i class="iconfont icon-taikong-"></i>
              </span>
              <span>首页</span>
            </span>
            <a href="javascript:;" class="guide_item">
              <span class="item_icon">
                  <i class="iconfont icon-gouwuchekong"></i>
              </span>
              <span>购物车</span>
            </a>
            <a href="javascript:;" class="guide_item" >
              <span class="item_icon">
                  <i class="iconfont icon-geren"></i>
              </span>
              <span>我的</span>
            </a>
            <input class="input1" type="button" value="加入购物车">
            <input class="input2" type="button" value="加入购物车">
    </div>
</template>

<script>
export default {
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .footer_guide  //footer
      box-shadow:0 -1px 0px #e4e4e4
      position fixed
      z-index 100
      left 0
      right 0
      bottom 0
      background-color #fff
      width 100%
      height 50px
      display flex
      .guide_item
        display flex
        flex 1
        text-align center
        flex-direction column
        align-items center
        margin 5px
        color #999999
        &.on
          color #ff0000
        span
          font-size 0.2rem
          margin-top 2px
          margin-bottom 2px
          .iconfont
            font-size 22px
      .input1 
        background-color  #ff650a     
        border: 1px solid transparent;  //自定义边框
        outline: none;    //消除默认点击蓝色边框效果 
        color #fff
        font-size 18px;
        border-radius 0px; 
      .input2
        color #fff
        background-color  red 
        font-size 18px; 
        border-radius 0px;
</style>
