<template>
  <div v-if="faq">
    <div v-if="!isDeleted">
      Хочете вилучити запитання
      {{ faq.question }}
      <button @click="deleteFaq">так</button>
      <button @click="returnToHomepage">ні</button>
    </div>
    <div v-else>
      запитання вилучено
      {{ faq.question }}
    </div>
  </div>
  <div v-else>йде завантаження даних</div>
</template>

<script>
import network from "@/network";
export default {
  name: "DeleteFaq",
  data() {
    return {
      id: parseInt(this.$route.params.id),
      faq: null,
      isDeleted: false,
    };
  },
  async mounted() {
    await this.loadData();
  },
  methods: {
    async loadData() {
      this.faq = await network.makeRequest(`faq/${this.id}`);
    },
    async deleteFaq() {
      this.faq = await network.makeRequest(`faq/${this.id}`, "DELETE");
      this.isDeleted = true;
      setTimeout(() => this.returnToHomepage(), 3000);
    },
    returnToHomepage() {
      this.$router.push("/");
    },
  },
};
</script>

<style>
</style>