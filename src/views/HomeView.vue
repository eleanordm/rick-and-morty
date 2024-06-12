<template>
<div class="md:p-[85px] lg:mt-[75px] xl:p-24 flex justify-left md:justify-center p-12 sm:mt-10">
    <div class="text-center md:text-left">
        <div class="font-zen text-blue text-3xl md:text-6xl mt-5">
            Rick and Morty Project
        </div>
        <div class="font-zen text-[#f9bfdf] text-1xl md:text-3xl mt-2 opacity-90">
            By Eleanor Davis Mullen
        </div>
        <div class="font-zen text-beige text-sm md:text-md mt-8 md:w-[600px]">
            I'm obsessed with Rick and Morty and coding, so naturally, I built this website! Ready to discover your favourite character? Just click 'search' below, and you'll find all 826 characters waiting for you.
        </div>
        <div class="mt-8 flex flex-col md:flex-row w-full items-center md:max-w-xs">
            <router-link to="/search" class="button border-pink text-sm md:mb-0 mb-3 mr-4 md:h-[35px] h-[40px] w-full max-w-xl">
                Search
            </router-link>
            <router-link to="/about" class="button border-pink text-sm md:mb-0 mb-3 mr-4 md:h-[35px] h-[40px] w-full max-w-xl">
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
