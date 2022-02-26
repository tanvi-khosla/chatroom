<template>
  <div class="container">
    <div class="left">
      <div class="user-profile">
        <div class="profile-container">
          <Profile />
        </div>
      </div>
    </div>

    <div class="right">
      <div class="chatroom">
        <button class="logout-btn" @click="handleLogout">Logout</button>
        <div class="chat-container">
          <NewChatWindow />
          <NewChatForm />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import useLogout from "../composables/useLogout";
import getUser from "../composables/getUser";
import Profile from "../components/Profile.vue";
import NewChatForm from "../components/NewChatForm.vue";
import NewChatWindow from "../components/NewChatWindow.vue";
import { useRouter } from "vue-router";
import { watch } from "vue";

export default {
  components: { Profile, NewChatForm, NewChatWindow },
  setup() {
    const { logout, error } = useLogout();
    const handleLogout = async () => {
      await logout();
      if (!error.value) {
        console.log("user logged out");
      }
    };

    const { user } = getUser();
    const router = useRouter();
    watch(user, () => {
      if (!user.value) {
        router.push({ name: "Welcome" });
      }
    });

    return { handleLogout };
  },
};
</script>

<style scoped>
.left {
  background-color: rgba(213, 233, 231, 0.39);
}
.right {
  background-color: rgb(240, 231, 243);
}

.chatroom {
  border-radius: 50px;
}

.user-profile {
  border-radius: 50px;
}

.user-profile,
.chatroom {
  margin: 60px;
  height: 665px;
  background-color: white;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}

.chat-container {
  height: inherit;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.new-chat-window {
  height: inherit;
}

.profile-container {
  height: inherit;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
</style>
