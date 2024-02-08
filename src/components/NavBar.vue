<template>
<nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
</nav>
</template>

<script>
export default {
    name: 'NavBar',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" scoped>
nav {
    padding: 30px;

    a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
            color: #425ab9;
        }
    }
}
</style>
