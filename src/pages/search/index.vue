<template>
    <div id='search'>
      <div class="search_header">
        <div class="content_search">
          <div class="iconfont icon-sousuo"> </div>
          <input class="search2" placeholder="搜索商品">
        </div>
        <input type="button" class="serch_button" value="查询">
      </div>
      <ShopList></ShopList>
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

</style>
