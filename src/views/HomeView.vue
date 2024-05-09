<template>
<div class="mt-44 flex justify-center">
    <div class="flex flex-col w-[1000px] text-left">
        <div class="font-zen text-blue text-6xl mt-5">
            Rick and Morty Project
        </div>
        <div class="font-zen text-pink text-2xl mt-2 opacity-90">
            By Eleanor Davis Mullen
        </div>
        <div class="font-zen text-beige text-md mt-8 w-[600px]">
            I'm obsessed with Rick and Morty and coding, so naturally, I built this website! Ready to discover your favorite character? Just click 'search' below, and you'll find all 826 characters waiting for you.
        </div>
        <div class="mt-8 flex flex-row">
            <router-link to="/search" class="button border-pink mr-4 text-sm w-[120px]">
                Search
            </router-link>
            <router-link to="/about" class="button border-pink mr-4 text-sm w-[120px]">
                About me
            </router-link>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'HomeView',
}
</script>
