<template>
  <h1>Редагування</h1>
  <form @submit.prevent>
    <label>
      Запитання
      <input name="question" v-model="faq.question" />
    </label>
    <br />
    <label>
      Відповідь
      <input name="answer" v-model="faq.answer" />
    </label>
    <br />
    <label>
      URL відео
      <input name="video" v-model="faq.video" />
    </label>
    <br />
    <button @click="updateFaq">редгувати</button>
  </form>
</template>

<script>
import network from "@/network";
export default {
  name: "UpdateFaq",
  data() {
    return {
      faq: {
        question: "",
        answer: "",
        video:""
      },
      id: this.$route.params.id,
    };
  },
  async mounted() {
    await this.loadData();
  },
  methods: {
    async loadData() {
      this.faq = await network.makeRequest(`faq/${this.id}`);
    },
    async updateFaq() {
      this.faq = await network.makeRequest(`faq/${this.id}`, "PUT", this.faq);
      alert("Оновлено");
      setTimeout(() => this.$router.push("/"), 1000);
    },
  },
};
</script>

<style>
</style>