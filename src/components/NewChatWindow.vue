<template>
  <div class="chat-window">
    <div v-if="error">{{ error }}</div>
    <div v-if="documents" class="chat-messages" ref="chatmessages">
      <div v-for="doc in formattedDocuments" :key="doc.id" class="chat-message">
        <span class="name">{{ doc.user }}</span>
        <span class="message">{{ doc.message }}</span>
        <span class="created-at">{{ doc.createdAt }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import getCollection from "../composables/getCollection";
import { formatDistanceToNow } from "date-fns";
import { computed, onUpdated, ref } from "vue";

export default {
  setup() {
    const { error, documents } = getCollection("messages");

    const formattedDocuments = computed(() => {
      if (documents.value) {
        return documents.value.map((doc) => {
          let time = formatDistanceToNow(doc.createdAt.toDate());
          return { ...doc, createdAt: time };
        });
      }
    });

    const chatmessages = ref(null);

    onUpdated(() => {
      chatmessages.value.scrollTop = chatmessages.value.scrollHeight;
    });

    return { error, documents, formattedDocuments, chatmessages };
  },
};
</script>

<style>
.chat-window {
  height: inherit;
  /* border: 2px solid rgb(200, 197, 197); */
  padding: 30px 15px;
  /* margin: 15px 45px 20px 45px; */
  margin: 5px 15px 15px 15px;
  border-radius: 20px;
}
.chat-messages {
  min-height: 100px;
  max-height: 460px;
  overflow-y: scroll;
}
.chat-message {
  border-radius: 20px;
  background-color: rgba(243, 234, 245, 0.397);
  margin: 15px 0;
  padding: 5px;
  display: flex;
  flex-direction: column;
  text-align: left;
}
.chat-message span {
  padding: 0px 15px;
}
.name {
  font-weight: bold;
}
.created-at {
  font-size: 11px;
}
</style>
