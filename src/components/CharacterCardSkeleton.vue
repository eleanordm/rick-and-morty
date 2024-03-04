<template>
<img src="../assets/skeleton.png" class="character-card w-[200px] h-[260px] mb-[10px] pb-[0px] rounded-3xl object-cover">
</template>

<script>
export default {
    name: 'CharacterCardSkeleton',
    props: {

    },
}
</script>

<style lang="scss" scoped>
.character-card {
    background-image: linear-gradient(111.4deg, rgba(7, 7, 9, 1) 6.5%, rgb(7, 7, 19) 60%);
}
</style>
  