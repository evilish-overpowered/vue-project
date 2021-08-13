<template>
  <div>
    <form action="submit" method="post">
      <table>
        <tr>
          <td>Username</td>
          <td>
            <input
              type="text"
              name="username"
              id="usrname"
              placeholder="Username"
            />
          </td>
        </tr>
        <tr>
          <td>Password</td>
          <td>
            <input
              type="password"
              name="password"
              id="passwd"
              placeholder="Password"
            />
          </td>
        </tr>
        <Button btntxt="Log In" />
      </table>
    </form>
    <Button btntxt="hi" />
  </div>
</template>

<script>
import Button from "./button.vue";
export default {
  name: "Login",
  props: {},
  component: { Button },
  render() {
    return <Login />;
  },
};
</script>

<style scoped>
</style>