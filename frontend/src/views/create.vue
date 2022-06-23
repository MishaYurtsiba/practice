<template>
    <h1>Створення</h1>
    <form v-on:submit.prevent>
        <label>
            Запитання
            <input name="question" v-model="faq.question">
        </label>
        <br>
        <label>
            Відповідь
            <input name="answer" v-model="faq.answer">
        </label>
        <br>
        <button @click="createFaq">
            Створити
        </button>
    </form>
</template>

<script>
import network from '@/network';
export default {
    name: "CreateFaq",
    data() {
        return {
            faq: {
                question: "q",
                answer: "a"
            }
        }
    },
    methods: {
        async createFaq() {
            this.faq = await network.makeRequest("faq", "POST", { ...this.faq });
            alert("Додано");
            setTimeout(() => this.$router.push("/"), 1000);
        }
    }
};
</script>

<style>
</style>