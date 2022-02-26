<template>
  <form>
    <textarea
      placeholder="Message"
      v-model="message"
      @keypress.enter.prevent="handleSubmit"
    ></textarea>
    <div class="error">{{ error }}</div>
  </form>
</template>

<script>
import { ref } from "vue";
import getUser from "../composables/getUser";
import useCollection from "../composables/useCollection";
import { timestamp } from "../firebase/config";

export default {
  setup() {
    const message = ref("");
    const { user } = getUser();
    const { addDoc, error } = useCollection("messages");

    const handleSubmit = async () => {
      const chat = {
        message: message.value,
        user: user.value.displayName,
        createdAt: timestamp(),
      };

      await addDoc(chat);
      if (!error.value) {
        message.value = "";
      }
    };
    return { handleSubmit, message, error };
  },
};
</script>

<style scoped>
form {
  padding: 10px 10px 60px 10px;
}

textarea {
  width: 90%;
  max-width: 90%;
  outline: none;
  border: 2px solid rgba(123, 128, 128, 0.548);
  border-radius: 25px;
  padding: 15px 6px 0px 10px;
  background-color: transparent;
  font-size: 14px;
  resize: none;
}
</style>
