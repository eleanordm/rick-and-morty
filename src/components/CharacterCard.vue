<template>
<div class="character-card text-center cursor-pointer relative">
    <img :src="image" class="w-[200px] h-[260px] p-[3px] object-cover duration-300 rounded-3xl mb-[25px]">
    <div class="overlay flex justify-center items-center absolute inset-0 opacity-0 container text-white text-center duration-500 rounded-3xl mb-[25px]">
        <h2 class="font-sans">{{ name }}</h2>
    </div>
</div>
</template>

<script>
export default {
    name: 'CharacterCard',
    props: {
        image: String,
        name: String
    },
}
</script>

<style lang="scss" scoped>


.character-card {
  
    .overlay {
        background: rgba(0, 0, 0, 0.315);
    }

    &:hover {
        .overlay {
            opacity: 1;
        }

        img {
            -webkit-filter: blur(2px);
            filter: blur(2px);
        }
    }
}
</style>
