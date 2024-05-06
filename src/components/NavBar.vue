<template>
<nav class="p-7 flex justify-between">
    <router-link class="text-1xl font-zen text-green" to="/">
        Rick and Morty Project
    </router-link>
    <div class="router-links flex">
        <div>
            <router-link class="router font-zen text-blue text-xs" to="/about">About</router-link>
        </div>
        <div class="ml-3">
            <router-link class="router font-zen text-blue text-xs" to="/search">Search</router-link>
        </div>
        <div class="ml-3">
            <router-link class="router font-zen text-blue text-xs" to="/index">Index</router-link>
        </div>
    </div>
</nav>
</template>

<script>
export default {
    name: 'NavBar',
}
</script>

<style lang="scss" scoped>
/* 
    Specific styling for about, search and index router links
    Originally (a)
    Changed to .router to amend the styling to the linked logo
*/
.router {
    // CSS to change the colour of active nav bar links.
    &.router-link-exact-active {
        color: #2755c7;
    }
}
</style>
