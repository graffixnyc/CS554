<template>
<div class="about">
    <h1>Hello {{their_name}}, This is the about page</h1>
    <p>Hello there... this is about</p>
</div>
</template>

<script>
    export default {
  name: 'Skills',
  data(){
    return {
      their_name: this.$route.params.name
    }
  }
}
</script>