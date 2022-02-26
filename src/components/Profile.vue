<template>
  <div class="user-image">
    <img src="../assets/usericon.jpg" />
  </div>
  <div class="user-name">{{ user.displayName }}</div>
  <div class="user-mail">{{ user.email }}</div>
</template>

<script>
import getUser from "../composables/getUser";
export default {
  setup() {
    const { user } = getUser();

    return { user };
  },
};
</script>

<style>
/* .profile-container {
  height: 85vh;
} */
.user-image img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
}
</style>
