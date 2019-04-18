<template>
  <div>{{id}}
   
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'ShowList',
  data(){
    
      return {
      id: this.$route.params.id
    }
    
  },
  created(){
    console.log (`http://api.tvmaze.com/shows/` + this.$route.params.id)
    axios.get(`http://api.tvmaze.com/shows/` + this.$route.params.id).then(response => (this.shows = response.data))
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
