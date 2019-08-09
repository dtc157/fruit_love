<template>
  <div class="cartcontrol">
    <transition name="move">
      <div class="iconfont icon-wuuiconsuoxiao" v-if="count>0" @click.stop="count--"></div>
    </transition>
    <div class="cart-count" v-if="count>0">{{count}}</div>
    <div class="iconfont icon-jia-tianchong" @click.stop="count++"></div>
  </div>
</template>

<script>
  export default {
    computed:{
    },
    data(){
      return{
        count:0
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .cartcontrol
    display: inline-block
    line-height: 30px
    color: rgb(0, 160, 220)
    .icon-wuuiconsuoxiao
      display: inline-block
      line-height 24px
      font-size 24px
      color #ff0000
      &.move-enter-active, &.move-leave-active
        transition all .5s
      &.move-enter, &.move-leave-to
        opacity 0
        transform translateX(15px) rotate(180deg)
    .cart-count
      display: inline-block
      vertical-align: top
      width: 15px
      padding-top: 0px
      line-height: 24px
      text-align: center
      font-size: 20px
      color: rgb(147, 153, 159)
    .icon-jia-tianchong
      display: inline-block
      line-height: 24px
      font-size: 24px
      color #ff0000
</style>
