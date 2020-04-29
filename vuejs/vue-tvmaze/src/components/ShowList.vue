<template>
  <div>
    <ul>
      <li v-for="(show,index) in shows" :key="index">
        <router-link :to="{name: 'show', params: {id: show.id}}">{{show.name}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "ShowList",
  data() {
    return {
      shows: []
    };
  },
  created() {
    axios
      .get("http://api.tvmaze.com/shows")
      .then(({ data }) => (this.shows = data));
  }
};
</script>

<style scoped>
ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

ul li {
  padding: 20px;
  font-size: 1.3em;
  background-color: #e0edf4;
  border-left: 5px solid #3eb3f6;
  margin-bottom: 2px;
  color: #3e5252;
}

p {
  text-align: center;
  padding: 30px 0;
  color: gray;
}
</style>