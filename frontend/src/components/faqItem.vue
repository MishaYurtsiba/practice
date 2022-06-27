<template>
  <li>
    <p>{{ faq.question }}</p>
    <p>{{ faq.answer }}</p>
    <a :href="faq.video" v-if="faq.video"> Перейти до перегляду відео</a>
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
      return `/delete/${this.faq._id}`;
    },
    updateLink() {
      return `/update/${this.faq._id}`;
    },
  },
};
</script>

<style>
</style>
