<template>
    <nav>
        <router-link to="/">
            На початкову сторінку
        </router-link>
        <router-link to="/about">
            Про авторів
        </router-link>

        <router-link to="/create">
            Створити нове запитання
        </router-link>
    </nav>
</template>
<script>
export default {
    name: "NavigationPanel"
}
</script>
<style>
</style>