<template>
  <div class="about">
    <h1 v-if="their_name">Hello {{their_name}}, This is the about page</h1>
    <h1 v-else>Hello Emanon, This is the about page</h1>
    <p>Hello there... this is about</p>
  </div>
</template>

<script>
export default {
  name: "About",
  data() {
    if (this.$route.params.name) {
      return {
        their_name: this.$route.params.name
      };
    }
    return { their_name: null };
  }
  //, watch: {
  //   $route(to, from) {
  //     if (this.$route.params.name) {
  //       this.their_name = this.$route.params.name;
  //     } else {
  //       this.their_name = null;
  //     }
  //   }
  // }
};
</script>