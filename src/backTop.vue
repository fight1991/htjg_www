<template>
  <div class="back-top" title="返回顶部">
    <img src="./assets/images/backTop.png" alt="">
  </div>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>
<style lang="less" scoped>
.back-top {
  box-shadow: 0px 0px 16px 1px #004CA0;
  /* background-color: #004CA0; */
  position: fixed;
  right: .6rem;
  bottom: 2rem;
  width: .64rem;
  height: .64rem;
  border-radius: 50%;
  cursor: pointer;
  display: none;
}
</style>
