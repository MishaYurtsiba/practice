<template>
  <li>
    <p>{{ faq.question }}</p>
    <p>{{ faq.answer }}</p>
    <router-link :to="deleteLink"> вилучити </router-link>
    <router-link :to="updateLink"> редгувати </router-link>
  </li>
</template>

<script>
export default {
  props: {
    faq: Object,
  },
  name: "FaqList",
  data() {
    return {};
  },
  computed: {
    deleteLink() {
      return `/delete/${this.faq.id}`;
    },
    updateLink() {
      return `/update/${this.faq.id}`;
    },
  },
};
</script>

<style>
</style>
