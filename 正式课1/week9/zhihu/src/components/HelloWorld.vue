<template>
  <div class="hello">
    <button @click='$store.commit("add",{n:100})'>+</button>
    <button @click='$store.commit("minus",{n:100})'>-</button>
    <button @click='$store.dispatch("add",{n:100})'>异步+</button>
    <button @click='$store.dispatch("minus",{n:100})'>异步-</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
