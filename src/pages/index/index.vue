<template>
    <div class="msite">
      <!--头部-->
      <div class=".search_wrap">
        <div class="content_search">
            <div class="iconfont icon-sousuo"> </div>
            <input class="search2" placeholder="搜索商品"  @click="goSearch()" >
        </div>
      </div>
      <!--首页导航-->
      <nav class="msite_nav border-1px">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <a href="/pages/categories/main" class="link_to_food" v-for="(category,index) in categories" :key="index">
                <div class="food_container">
                  <img class="img" :src="category.category_image">
                </div>
                <span>{{category.category_name}}</span>
              </a>
                
            </div>
          </div>
          <!-- Add Pagination -->
          <div class="swiper-pagination"></div>
        </div>
      </nav>
      <!--首页附近商家-->
      <div class="msite_shop_list" @click="A()" >
        <div class="shop_header">
          <i class="iconfont icon-huobaodanpin"></i>
          <span class="shop_header_title">活动</span>
        </div>
      </div>
      <ShopList v-for="(item,index) in list" :key="index" :item="item" :index="index"></ShopList>
    </div>
</template>

<script>
  import ShopList from "../../components/ShopList/ShopList";
 
  import {mapState,mapMutations} from 'vuex'
   import {TEST} from '../../store/mutation-types'
  export default {
    data(){
      return{
        title:"主页",
        list:"",
        categories:""
      }
    },
    beforeMount(){
        this.A1(),
        this.A2()
    },
    computed:{
    },
    methods:{
      goSearch() {
        wx.navigateTo({
          url: '../search/main'
        })
      },
      A(){
        console.log(this.list)
      },
      async A1 (params) {
        let self=this
        wx.request({
          url: 'http://localhost:3000/GoodsDetails', //仅为示例，并非真实的接口地址
          data: {
            
          },
          header: {
            'content-type': 'application/json' // 默认值
          },
          success (res) {
             self.list=res.data
            //  console.log(self.AAA)
          }
        })
      },
      async A2 (params) {
        let self=this
        wx.request({
          url: 'http://localhost:3000/category', //仅为示例，并非真实的接口地址
          data: {
          },
          header: {
            'content-type': 'application/json' // 默认值
          },
          success (res) {
             self.categories=res.data
            //  console.log(self.AAA)
          }
        })
      }
    },
    components:{
        ShopList
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .msite  //首页
    width 100%
    background-color #f5f5f5
    .search_wrap
      background-color #fff
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
          margin-left 110px;
          font-size 20px;
          width 20px;
          height 35px;
        & .search2
          margin-left 5px;
          height 35px;
          width 90%
          border-radius 10px
          background-color #f2f2f2
    .msite_nav
      bottom-border-1px(#e4e4e4)
      height 200px
      .swiper-container
        width 100%
        height 100%
        background-color #fff
        .swiper-wrapper
          display flex
          align-content center
          width 100%
          height 100%
          .swiper-slide
            display flex
            justify-content center
            align-items center
            flex-wrap wrap
            width 100%
            .link_to_food
              width 24%
              .food_container
                display block
                width 100%
                text-align center
                padding-bottom 10px
                font-size 0
                img
                  display inline-block
                  width 50px
                  height 50px
                  border-radius : 50%
              span
                display block
                width 100%
                text-align center
                font-size 13px
                color #666
        .swiper-pagination
          >span.swiper-pagination-bullet-active
            background #02a774
    .msite_shop_list
      margin-top 10px
      .shop_header
        display flex
        height 30px;
        line-height 30px;
        padding-left 10px;
        border-radius 5px;
        background #fff
        .icon-huobaodanpin
          color red
          font-size 20px
        .shop_header_title
          color #999
          font-size 15px
          line-height 30  px
</style>
