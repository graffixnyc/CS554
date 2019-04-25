<template>
  <div class="hello">
    <div class="holder">
      <ul>
        <li v-for="(item,index) in skills" :key="index">{{index}}. {{item.skill}}</li>
      </ul>
    </div>

    <div v-bind:class="{alert: showAlert}">Test alert</div>

    <div v-bind:class="{alert: showAlert, 'another-class' : showClass}">Test alert2</div>

    <div v-bind:class="alertObject">Test alert3</div>

    <div v-bind:style="{backgroundColor: black, width: bgWidth, height: bgHeight}">Test alert 4</div>
  </div>
</template>

<script>
export default {
  name: "Skills",
  data() {
    return {
      skills: [{ skill: "Vue.js" }, { skill: "React" }, { skill: "Redis" }],
      showAlert: true,
      showClass: true,
      alertObject: {
        alert: true,
        "another-class": true
      },
      bgColor: "red",
      bgWidth: "100%",
      bgHeight: "100px"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.alert {
  background-color: yellow;
  width: 100%;
  height: 30px;
}

.another-class {
  border: 5px solid black;
}
</style>
