<template>
  <h1>Редагування</h1>
  <form v-on:submit.prevent>
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
      },
      id: parseInt(this.$route.params.id),
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