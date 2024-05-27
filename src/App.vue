<template>
<div>

    <body>
        <background-animation></background-animation>
        <div class="page-container relative min-h-screen">
            <div class="page content-wrap min-h-screen pb-14 flex flex-col items-center">
                <nav-bar></nav-bar>
                <router-view></router-view>
            </div>
        </div>
        <website-footer></website-footer>
    </body>
</div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import WebsiteFooter from '@/components/WebsiteFooter.vue'
import BackgroundAnimation from './components/BackgroundAnimation.vue'

export default {
    name: 'App',
    components: {
        NavBar,
        WebsiteFooter,
        BackgroundAnimation
    }
}
</script>

<style lang="scss">
@import "@/assets/scss/global.scss";

#app {
    font-family: Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #ffffff;
}

// Background colour for all pages
body {
    background-image: linear-gradient(111.4deg, rgba(7, 7, 9, 1) 6.5%, rgb(13, 13, 38) 60%);
    height: 100vh;
    width: 100vw;
    background-repeat: no-repeat;
    background-attachment: fixed;
}

</style>
