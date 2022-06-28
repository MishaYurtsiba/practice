<template>
<div class="card">
  <li>
    <p  class="card-question">{{ faq.question }}</p>
    <p class="card-answer">{{ faq.answer }}</p>
    <a class="card-video" :href="faq.video" v-if="faq.video"> Перейти до перегляду відео</a>
    <router-link class="card-video" :to="deleteLink"> вилучити </router-link>
    <router-link class="card-video" :to="updateLink"> редгувати </router-link>
  </li>
  </div>
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
.card{
  border-radius: 8px;
  margin-left: 10px;
  background-color: #608291;
  list-style: none;
  width: 400px;
  height: 150px;
}
.card-question{
  color: #393D31;
  padding-top: 10px;
  text-align: center;
  font-size: 18px;
  
  
}
.card-answer{
  color: #393D31;
  padding-top: 10px;
  text-align: center;
  font-size: 18px;
}
.card-video{
    text-decoration: none;
    cursor: pointer;
    color: #393D31;
    margin-left: 10px;
    
    border-bottom: 2px solid #393D31;
}
</style>
