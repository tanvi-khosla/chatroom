<template>
  <div class="container">
    <div class="w-branding">
      <img src="../assets/welc4.jpg" />
    </div>
    <div class="w-form">
      <div v-if="showLogin">
        <LoginForm @login="enterChat" />
        <p>
          No account yet?
          <span @click="showLogin = false">Signup</span> instead
        </p>
      </div>
      <div v-else>
        <SignupForm @signup="enterChat" />
        <p>
          Already registered?
          <span @click="showLogin = true">Login</span> instead
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import SignupForm from "../components/SignupForm.vue";
import LoginForm from "../components/LoginForm.vue";
import { useRouter } from "vue-router";

export default {
  components: { SignupForm, LoginForm },

  setup() {
    const showLogin = ref(true);
    const router = useRouter();

    const enterChat = () => {
      router.push({ name: "Chatroom" });
    };

    return { showLogin, enterChat };
  },
};
</script>

<style>
.w-form {
  display: flex;
  justify-content: center;
  background-color: rgb(240, 231, 243);
  padding: 190px;
}

.w-form span {
  font-weight: bold;
  cursor: pointer;
  text-decoration: 1.5px solid rgb(49, 49, 49) underline;
}

.w-branding {
  background-color: rgba(213, 233, 231, 0.39);
}

.w-branding img {
  width: 450px;
  height: 450px;
  border-radius: 50%;

  transform: translate(240px, 130px);
}
</style>
