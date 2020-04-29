<template>
  <div id="app">
    <div :class="{alert: showAlert}">Test Alert Class</div>
    <div :class="{alert: showAlert, 'another-class': showAnotherClass}">Test Alert and Another Class</div>
    <div :class="{error: showError}">Test Error Class</div>
    <div :class="{error: showError, 'another-class': showAnotherClass}">Test Error and Another Class</div>
    <div :class="alertObject">Test Alert Object Class</div>
    <div
      :style="{backgroundColor: bgColor, width: bgWidth, height: bgHeight, border:bgBorder }"
    >Test Alert Object Class</div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      showAlert: true,
      showError: true,
      showAnotherClass: false,
      alertObject: {
        alert: true,
        "another-class": true
      },
      errorObject: {
        error: true,
        "another-class": true
      },
      bgColor: "salmon",
      bgWidth: "100%",
      bgHeight: "100px",
      bgBorder: "10px solid red"
    };
  }
};
</script>

<style>
.alert {
  background-color: yellow;
  width: 100%;
  height: 30px;
}
.error {
  background-color: red;
  width: 100%;
  height: 30px;
}

.another-class {
  border: 5px solid black;
}
</style>
