<template>
  <navigation-vue></navigation-vue>
  <router-view />
</template>

<script>
import navigationVue from "@/components/navigation.vue";
export default {
  name: "App",
  components: {
    navigationVue
  }
};
</script>

<style>
</style>
