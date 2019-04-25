<template>
  <div>
    <h1>{{this.show.name}}</h1>
    <br>
    <img v-if="this.show.image.medium" :src="this.show.image.medium">
    <br>
    <span v-html="this.show.summary"></span>
    <br>
    <h4>Genres</h4>
    <ul>
      <li v-for=" genre in this.show.genres" v-bind:key="genre">{{genre}}</li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "ShowList",
  data() {
    return {
      id: this.$route.params.id,
      show: { name: null, image: { medium: null }, summary: null },
      name: null
    };
  },
  created() {
    console.log(`http://api.tvmaze.com/shows/` + this.$route.params.id);
    axios
      .get(`http://api.tvmaze.com/shows/` + this.$route.params.id)
      .then(response => (this.show = response.data));
  }
};
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

a {
  color: #42b983;
}
span {
  text-align: center;
  max-width: 50%;
}
div {
  max-width: 50%;
  margin: 0 auto;
}
</style>
