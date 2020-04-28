<template>
  <div class="holder">
    <ValidationObserver v-slot="{invalid}" ref="observer">
      <form @submit.prevent="addSkill">
        <ValidationProvider rules="min:5|required" v-slot="{errors}">
          <input type="text" placeholder="Enter a skill...." v-model="skill" name="skill" />
          <transition enter-active-class="animated flipInX" leave-active-class="animated flipOutX">
            <span class="alert" v-if="errors[0]">{{errors[0]}}</span>
          </transition>
        </ValidationProvider>

        <ValidationProvider rules="email|required" v-slot="{errors}">
          <input type="text" placeholder="Enter an email address" v-model="email" name="email" />
          <transition enter-active-class="animated flipInX" leave-active-class="animated flipOutX">
            <span class="alert" v-if="errors[0]">{{errors[0]}}</span>
          </transition>
        </ValidationProvider>

        <button type="submit" :class="{disabled: invalid}" :disabled="invalid">Submit</button>
      </form>
    </ValidationObserver>
    <ul>
      <transition-group
        name="list"
        enter-active-class="animated bounceInUp"
        leave-active-class="animated bounceOutDown"
      >
        <li v-for="(item,index) in skills" :key="index">
          {{item.skill}}
          <i class="fa fa-minus-circle" v-on:click="remove(index)"></i>
        </li>
      </transition-group>
    </ul>
  </div>
</template>

<script>
import { ValidationProvider, ValidationObserver, extend } from "vee-validate";
import { min, email, required } from "vee-validate/dist/rules";

extend("min", {
  ...min,
  message: "This field needs a min of 5 characters"
});

extend("required", required);

extend("email", {
  ...email,
  message: "Email address is not valid"
});

export default {
  name: "Skills",
  data() {
    return {
      skills: [{ skill: "Vue.js" }, { skill: "React" }, { skill: "Redis" }],
      skill: "",
      email: ""
    };
  },
  methods: {
    addSkill() {
      if (this.skill) {
        this.skills.push({ skill: this.skill });
        this.skill = "";
        this.email = "";
        this.$nextTick(() => this.$refs.observer.reset());
      }
    },
    remove(id) {
      this.skills.splice(id, 1);
    }
  },
  components: {
    ValidationProvider,
    ValidationObserver
  }
};
</script>

<style scoped>
@import "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css";
@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";

.holder {
  background: #fff;
}

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

button {
  background-color: #3eb3f6;
  width: 100%;
  height: 30px;
  color: white;
}

.disabled {
  color: darkgray;
}

p {
  text-align: center;
  padding: 30px 0;
  color: gray;
}

.container {
  box-shadow: 0px 0px 40px lightgray;
}

input {
  width: calc(100% - 40px);
  border: 0;
  padding: 20px;
  font-size: 1.3em;
  background-color: #323333;
  color: #687f7f;
}

.alert {
  color: red;
  font-weight: bold;
  padding: 5px;
  margin-top: -20px;
  display: inline-block;
}
i {
  float: right;
  cursor: pointer;
}
</style>