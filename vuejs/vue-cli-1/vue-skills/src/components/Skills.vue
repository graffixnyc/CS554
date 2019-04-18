<template>
  <div class="skills">
    {{msg + ", " +  name}}
    <br />

    {{btnState ? 'The button is disabled' : 'The button is active'}}

    <span v-if="btnState">
      The button is disabled 2
    </span>
    <span v-else>
      The button is active 2
    </span>

    <button v-on:click="changeName" v-bind:disabled="btnState">Change Name </button>
  </div>
</template>

<script>
export default {
  name: 'Skills',
  data(){
    return {
      name:"Patrick",
      btnState: false
    }
  },
  props: {
      msg: String
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
