<template>
  <div id="order">
     <div id="header">
        <div class="test">
          <div class="testNav">
            <div class="item "
                :class="{'selected':tab === 1,'testTitle':true}"
                @click="changTab(1)"
              >全部</div>
              <div class="item"
                :class="{'selected':tab === 2,'testTitle':true}"
                @click="changTab(2)"
              >未付款</div>
              <div class="item"
                :class="{'selected':tab === 3,'testTitle':true}"
                @click="changTab(3)"
              >待提货</div>
              <div class="item"
                :class="{'selected':tab === 4,'testTitle':true}"
                @click="changTab(4)"
              >已提货</div>
          </div>
      </div>
      <FooterGoods></FooterGoods>
    </div>
    <div class="container">
      <div v-if="tab===1">
        <div class="content_wrap">
          <div class="content">
            <div class="order_id">
              <p>订单编号:6565656565656556</p>
              <p class="order_status">交易关闭</p>
            </div>
            <div class="order_shop_img">
              <div class="shop_img">
                <img src="https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1565505354&di=47d3bf843d1677e1891ab9aac9eabcb1&src=http://img011.hc360.cn/g2/M06/45/BF/wKhQuFLfLl-EakIIAAAAAGqrml0128.jpg">
                <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1565519099505&di=9c6bf6eb248331412bbbe985dc7702b0&imgtype=0&src=http%3A%2F%2Fimgsa.baidu.com%2Fexp%2Fw%3D500%2Fsign%3D8b8e9e140c3387449cc52f7c610ed937%2Fb3b7d0a20cf431adb645837d4b36acaf2fdd98db.jpg">
              </div>
              <i class="iconfont icon-arrow" />
            </div>
            <div class="order_time">
              <p>2019-08-06 16:08:50</p>
              <p class="allnumber">共2件商品<span>￥20.28</span></p>
            </div>
            <div class="order_info">
              <p>提货单号:<span>0</span>&nbsp&nbsp15770060008</p>
              <button>删除</button>
            </div>
          </div>
          <div class="content">
            <div class="order_id">
              <p>订单编号:6565656565656556</p>
              <p class="order_status">交易关闭</p>
            </div>
            <div class="order_shop_img">
              <div class="shop_img">
                <img src="https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1565505354&di=47d3bf843d1677e1891ab9aac9eabcb1&src=http://img011.hc360.cn/g2/M06/45/BF/wKhQuFLfLl-EakIIAAAAAGqrml0128.jpg">
              </div>
              <i class="iconfont icon-arrow" />
            </div>
            <div class="order_time">
              <p>2019-08-06 16:08:50</p>
              <p class="allnumber">共2件商品<span>￥20.28</span></p>
            </div>
            <div class="order_info">
              <p>提货单号:<span>0</span>&nbsp&nbsp15770060008</p>
              <button>删除</button>
            </div>
          </div>
          <div class="content">
            <div class="order_id">
              <p>订单编号:6565656565656556</p>
              <p class="order_status">交易关闭</p>
            </div>
            <div class="order_shop_img">
              <div class="shop_img">
                <img src="https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1565505354&di=47d3bf843d1677e1891ab9aac9eabcb1&src=http://img011.hc360.cn/g2/M06/45/BF/wKhQuFLfLl-EakIIAAAAAGqrml0128.jpg">
              </div>
              <i class="iconfont icon-arrow" />
            </div>
            <div class="order_time">
              <p>2019-08-06 16:08:50</p>
              <p class="allnumber">共2件商品<span>￥20.28</span></p>
            </div>
            <div class="order_info">
              <p>提货单号:<span>0</span>&nbsp&nbsp15770060008</p>
              <button>删除</button>
            </div>
          </div>
        </div>
      </div>
      <div v-else-if="tab===2">
        <div class="content_wrap">
          <div class="content">
            <div class="order_id">
              <p>订单编号:6565656565656556</p>
              <p class="order_status">未付款</p>
            </div>
            <div class="order_shop_img">
              <div class="shop_img">
                <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1566114281&di=50ce4a9f46fe09508d9ba3a327d6c8eb&imgtype=jpg&er=1&src=http%3A%2F%2Fatt.bbs.duowan.com%2Fforum%2F201808%2F06%2F215418wwrspkle9it5p7iz.jpg">
              </div>
              <i class="iconfont icon-arrow" />
            </div>
            <div class="order_time">
              <p>2019-08-06 16:08:50</p>
              <p class="allnumber">共2件商品<span>￥20.28</span></p>
            </div>
            <div class="order_info">
              <p>提货单号:<span>0</span>&nbsp&nbsp15770060008</p>
              <button>去付款</button>
            </div>
          </div>
          <div class="content">
            <div class="order_id">
              <p>订单编号:6565656565656556</p>
              <p class="order_status">交易关闭</p>
            </div>
            <div class="order_shop_img">
              <div class="shop_img">
                <img src="https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1565505354&di=47d3bf843d1677e1891ab9aac9eabcb1&src=http://img011.hc360.cn/g2/M06/45/BF/wKhQuFLfLl-EakIIAAAAAGqrml0128.jpg">
              </div>
              <i class="iconfont icon-arrow" />
            </div>
            <div class="order_time">
              <p>2019-08-06 16:08:50</p>
              <p class="allnumber">共2件商品<span>￥20.28</span></p>
            </div>
            <div class="order_info">
              <p>提货单号:<span>0</span>&nbsp&nbsp15770060008</p>
              <button>删除</button>
            </div>
          </div>
        </div>
      </div>
      <div v-else-if="tab===3">
        <div class="content_wrap">
          <div class="content">
            <div class="order_id">
              <p>订单编号:6565656565656556</p>
              <p class="order_status">待提货</p>
            </div>
            <div class="order_shop_img">
              <div class="shop_img">
                <img src="https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1565505354&di=47d3bf843d1677e1891ab9aac9eabcb1&src=http://img011.hc360.cn/g2/M06/45/BF/wKhQuFLfLl-EakIIAAAAAGqrml0128.jpg">
              </div>
              <i class="iconfont icon-arrow" />
            </div>
            <div class="order_time">
              <p>2019-08-06 16:08:50</p>
              <p class="allnumber">共2件商品<span>￥20.28</span></p>
            </div>
            <div class="order_info">
              <p>提货单号:<span>0</span>&nbsp&nbsp15770060008</p>
              <button>删除</button>
            </div>
          </div>
        </div>
      </div>
      <div v-else-if="tab===4">
        <div class="content_wrap">
          <div class="content">
            <div class="order_id">
              <p>订单编号:6565656565656556</p>
              <p class="order_status">已提货</p>
            </div>
            <div class="order_shop_img">
              <div class="shop_img">
                <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1565519645421&di=d2602b046be2cb45fd5b88d1a146c432&imgtype=0&src=http%3A%2F%2Fimg.mp.sohu.com%2Fupload%2F20170708%2F10fe12c2f5b34ca59056d79ad5673ea7_th.png">
              </div>
              <i class="iconfont icon-arrow" />
            </div>
            <div class="order_time">
              <p>2019-08-06 16:08:50</p>
              <p class="allnumber">共2件商品<span>￥20.28</span></p>
            </div>
            <div class="order_info">
              <p>提货单号:<span>0</span>&nbsp&nbsp15770060008</p>
              <button>去评价</button>
            </div>
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
        title:'搜索',
        tab:1
      }
    },
    create(){
       this.tab=this.$root.$mp.query.index
    },
     methods: {
        //点击切换Tab
        changTab(index) {
            this.tab = index;
        }
    },
    components:{
      ShopList
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  #order
    background-color #f5f5f5
    #header
      background-color #fff
      .test
        width 100%
        .testNav
          display flex;
          width 100%
          .item
            height 40px;
            color rgb(77, 85, 93)
            font-size 16px
            line-height 40px;
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
                width 80px
                height 3px
                background #ff604c
                transform translateX(-50%)
    .container
      .content_wrap
        border-radius 5px
        margin 10px
        box-sizing border-box
        .content
          background-color #fff
          display flex
          flex-direction column
          margin 10px 0 10px 0
          >div
            display flex
            justify-content space-between
            font-size 14px
            color rgb(77, 85, 93)
            align-items center
            padding 10px 10px
            box-shadow  0px -1px 0px rgba(0, 0, 0, 0.13);  /*上边阴影*/
          .order_id
            .order_status
              font-size 16px
              font-weight 400px
          .order_shop_img
            overflow:hidden
            width 95%
            img
              width 60px
              height 60px
              margin-right 5px
            i
              font-size 18px
          .order_time
            .allnumber
              color black
              span
                color red
                font-size 20px
          .order_info
              button
                width 100px
                font-size 17px
                height 35px
                line-height 35px
                color #999
                border #999 solid 1px
                margin 0
                background-color: transparent;
                outline: none;

</style>
