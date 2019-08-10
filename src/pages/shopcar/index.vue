<template>
    <div class="shopcar" >
        <div id="haveshop" >
            <div id="header">
                <span>编辑</span>
            </div>
            <div id="body">
                <div class="content">
                    <div class="shop_left_img">
                        <i class="iconfont icon-duigouxiao on"> </i>
                        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1565372642015&di=0e65e75665019dbe6ac7247854d451ed&imgtype=0&src=http%3A%2F%2Fpic19.nipic.com%2F20120228%2F2917766_113138060000_2.jpg" alt="">
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
                <div class="content">
                    <div class="shop_left_img">
                        <i class="iconfont icon-duigouxiao on"> </i>
                        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1565372642015&di=0e65e75665019dbe6ac7247854d451ed&imgtype=0&src=http%3A%2F%2Fpic19.nipic.com%2F20120228%2F2917766_113138060000_2.jpg" alt="">
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
            <div id="footer">
                <div class="check">
                    <i class="iconfont icon-duigouxiao on"> </i>
                    <span>全选</span>
                </div>
                <div class="footer_right">
                    <div class="totalprice">
                        <p>合计<span>￥0</span></p>
                    </div>
                    <div class="pay on" >
                        <p>去结算(0)</p>
                    </div>
                    <div class="delete" style="display:none" >
                        <p>删除</p>
                    </div>
                </div>
            </div>
        </div>
        <div id="noshop" style="display:none" >
            <img src="./noshop.jpg" alt="" >
            <p>您还没有添加任何商品偶</p>
            <input type="button"  class="gobuy" value="去逛逛" @click="gomain()">
        </div>
    </div>


</template>
<script>
import CartControl from '../../components/CartControl/CartControl'
export default {
     methods:{
      gomain() {
        wx.switchTab({
          url: '../index/main'
        })

      }
     },
    components:{
        CartControl
    }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">

    .shopcar
        #haveshop
            background-color #eeeeee
            #header
                width 100%
                height 30px
                font-size 16px
                line-height 30px
                background-color #fff
                margin-bottom 10px
                span
                    float right
                    margin-right 15px
            #body
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
            #footer
                width 100%
                height 50px
                box-sizing border-box
                position absolute
                line-height 45px
                bottom 0
                left 0
                .check
                    margin-left 10px
                    float left
                    display flex
                    width 100px
                    .iconfont
                        font-size 20px
                        margin-right 5px
                        &.on
                            color red
                    span
                        color #999
                        font-size 16px
                .footer_right
                    display flex
                    float right
                    .totalprice
                        font-size 20px
                        span
                            color red
                    .pay
                        width 100px
                        margin-left 10px
                        background-color #999
                        color #fff
                        font-size 16px
                        text-align center
                        &.on
                            background-color red
                    .delete
                        width 100px
                        margin-right 10px
                        margin-left 10px
                        border red solid 1px
                        box-sizing border-box
                        color red
                        font-size 16px
                        border-radius 15px
                        text-align center
        #noshop
            padding 10px
            text-align center
            p
                color #999
            .gobuy
                border #fff solid 1px
                background-color #FFB6C1
                color #ffffff
                height 50px
                margin-top 10px



</style>
