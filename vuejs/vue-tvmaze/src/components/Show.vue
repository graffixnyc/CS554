<template>
  <div>
    <h1>{{this.show.name}}</h1>
    <br />
    <img v-if="this.show.image.medium" :src="this.show.image.medium" />
    <br />
    <span v-html="this.show.summary"></span>
    <br />
    <h4>Genres:</h4>
    <ul>
      <li v-for="genre in this.show.genres" :key="genre">{{genre}}</li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Show",
  data() {
    return {
      id: this.$route.params.id,
      show: { name: null, image: { medium: null }, summary: null },
      name: null
    };
  },
  methods: {
    getShow(id) {
      axios
        .get("http://api.tvmaze.com/shows/" + id)
        .then(({ data }) => (this.show = data));
    }
  },
  created() {
    this.getShow(this.$route.params.id);
  },
  watch: {
    $route() {
      this.getShow(this.$route.params.id);
    }
  }
};
</script>

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