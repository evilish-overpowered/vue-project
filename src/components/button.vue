<template>
  <div :class="bttn">
    {{ btntxt }}
  </div>
</template>

<script>
export default {
  name: "Button",
  props: {
    btntxt: String,
  },
  data() {
    return {
      bttn: "bttn",
    };
  },
  render() {
    return <Button />;
  },
};
</script>

<style scoped>
.bttn {
  color: white;
  height: 30px;
  width: 100px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 20px;
  background-color: blueviolet;
  border: black;
  border-radius: 23px;
}
.bttn:hover {
  color: black;
  background-color: transparent;
  border: 12px blueviolet;
  box-shadow: 10px 5px 5px blueviolet;
  transition: ease-in-out 500ms;
}
</style>