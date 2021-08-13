<template>
  <div>
    <div>
      <div v-bind:class="mainFont">Eagle</div>
      <div v-bind:disabled="hi">Watchu Lookin at? Login now..</div>
    </div>
    <div :class="flexcenter">
      <Button btntxt="Log In"></Button>
      <Button btntxt="Sign Up"></Button>
    </div>
    <Login />
    <Footer />
  </div>
</template>

<script>
//import HelloWorld from "./components/HelloWorld.vue";
import Footer from "./components/footer.vue";
import Button from "./components/button.vue";
import Login from "./components/login.vue";
export default {
  name: "App",
  components: {
    Footer,
    Button,
    Login,
  },
  data() {
    return {
      name: "hello",
      hi: true,
      mainFont: "txtawe",
      buttonBox: "bttn",
      flexcenter: "fc",
    };
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
body {
  height: 100vh;
  background: url("./assets/a.jpg");
  background-repeat: no-repeat;
  background-size: 100%;
  background-size: cover;
  overflow: hidden;
}
#app {
  font-size: 30px;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.txtawe {
  font-family: Brush Script MT, Brush Script Std, cursive;
  font-size: 110px;
}
.bttn {
  margin: 20px;
  padding: 10px;
  background: none;
  border-radius: 0px;
}
.fc {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
