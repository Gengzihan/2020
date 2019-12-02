<template>
  <div class="itemBox">
      <div class="iconBox">

      </div>
    <div class="contentBox">
      <h2>{{data.title}}</h2>
      <p></p>
    </div>
    <div class="imgBox">
      <img src="@/assets/logo.png" alt />
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
export default {
  name: "item",
  props:['data'],
  data() {
    return {};
  },
  components: {}
};
</script>
<style lang="less">
.itemBox {
  display: flex;
  border-bottom: 1px solid #eee;
  padding: 2vw 0;
  margin: auto;
  width: 90vw;
  .iconBox{
      width: 8vw;
  }
  .contentBox {
    width: 60vw;
    overflow-wrap: break-word; 
  }
  .imgBox {
    width: 22vw;
    height: 18vw;
    border-radius: 10px;
    overflow: hidden;
    img {
      width: 100%;
    }
  }
}
</style>