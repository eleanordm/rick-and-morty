<template>
<div class="footer"></div>
</template>

<script>
export default {
    name: 'WebsiteFooter',
}
</script>

<style lang="scss">
.page-container {
    position: relative;
    min-height: 100vh;
}

.content-wrap {
    /* Removed position absolute and added 100% vph so anything above the div will take up the full length of the screen */
    min-height: 100vh;
    padding-bottom: 3.5rem;
    /* Footer height */
}

.footer {
    bottom: 0;
    width: 100%;
    height: 8.5rem;
    /* Footer height */
}
</style>
