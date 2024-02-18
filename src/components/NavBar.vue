<template>
<nav class="p-7 flex justify-between">
    <router-link class="text-1xl font-sans text-green" to="/">
        Rick and Morty Project
    </router-link>
    <div class="router-links flex">
        <div>
            <router-link class="router" to="/">About</router-link>
        </div>
        <div class="ml-3">
            <router-link class="router" to="/search">Search</router-link>
        </div>
        <div class="ml-3">
            <router-link class="router" to="/index">Index</router-link>
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
    color: #618EFF;
    font-family: 'Zen Dots';
    text-decoration: none;
    font-size: 12px;

    // scss to change the colour of a button once active.
    &.router-link-exact-active {
        color: #4b78ea;
    }
}

</style>
