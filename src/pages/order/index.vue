<template>
  <div id="order">
     <div id="footer">
        <div class="test">
          <div class="testNav">
            <div class="item"
                :class="{'selected':tab === 1,'testTitle':true}"
                @click="changTab(1)"
              >全部</div>
              <div class="item"
                :class="{'selected':tab === 2,'testTitle':true}"
                @click="changTab(2)"
              >未付款</div>
              <div class="item"
                :class="{'selected':tab === 2,'testTitle':true}"
                @click="changTab(3)"
              >待提货</div>
              <div class="item"
                :class="{'selected':tab === 2,'testTitle':true}"
                @click="changTab(4)"
              >已提货</div>
          </div>
          <div class="container1">
            <div v-if="tab===1">
              <GoodsRatings></GoodsRatings>
            </div>
            <div v-else-if="tab===2">
              <GoodsInfo></GoodsInfo>
            </div>
            <div v-else-if="tab===3">
              <GoodsInfo></GoodsInfo>
            </div>
            <div v-else-if="tab===4">
              <GoodsInfo></GoodsInfo>
            </div>
          </div>
      </div>
      <FooterGoods></FooterGoods>
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

<style lang="stylus" rel="stylesheet/stylus">


</style>
