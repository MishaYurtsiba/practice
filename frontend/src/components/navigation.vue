<template>
    <nav class="nav-panel">
        <router-link class="links" to="/">
            На початкову сторінку
        </router-link>
        <router-link class="links" to="/about">
            Про авторів
        </router-link>

        <router-link class="links" to="/create">
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
.nav-panel{
    height: 50px;
    background-color: #702E2E;
    display: flex;
}
.links{
    
    margin-left: 25px;
    margin-top: 13px;
    color: white;
    text-decoration: none;
    font-size: 20px;
    
    
}


</style>