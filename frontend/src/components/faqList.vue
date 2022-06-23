<template>
  <div>
    <h2>Список</h2>
    <ul>
      <faq-item v-for="faq in faqs" :key="faq.id" v-bind:faq="faq"> </faq-item>
    </ul>
  </div>
</template>

<script>
import faqItem from "./faqItem.vue";
import network from "@/network";

export default {
  name: "FaqList",
  data() {
    return {
      faqs: [],
    };
  },
  components: {
    faqItem,
  },
  methods: {
    async loadData() {
      this.faqs = await network.makeRequest("faq");
    },
  },
  async mounted() {
    await this.loadData();
  },
};
</script>

<style>
</style>
