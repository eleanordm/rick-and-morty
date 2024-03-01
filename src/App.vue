<template>
<div>
    <body>
        <div class="page-container relative min-h-screen">
            <div class="content-wrap min-h-screen pb-14">
                <nav-bar></nav-bar>
                <router-view></router-view>
            </div>
            <website-footer></website-footer>
        </div>
    </body>
</div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import WebsiteFooter from '@/components/WebsiteFooter.vue'

export default {
    name: 'App',
    components: {
        NavBar,
        WebsiteFooter
    }
}
</script>

<style lang="scss">
@import "@/assets/scss/global.scss";

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
}

body {
    margin: 0px;
    background-image: linear-gradient(111.4deg, rgba(7, 7, 9, 1) 6.5%, rgb(13, 13, 38) 60%);
}
</style>
