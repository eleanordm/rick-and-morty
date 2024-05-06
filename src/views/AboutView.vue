<template>
<div class="mt-40 flex justify-center">
    <div class="flex flex-col w-[1000px] text-left">
        <div class="font-sans text-blue text-sm">
            Hi there, my name is
        </div>
        <div class="font-sans text-pink text-6xl mt-5">
            Eleanor Davis Mullen
        </div>
        <div class="font-sans text-[#f9bfdf] text-4xl mt-2 opacity-90">
            Junior Software Developer
        </div>
        <div class="font-sans text-beige text-md mt-8 w-[600px]">
            Specialising in reactive frameworks like Vue.js, reinforced by expertise in HTML, CSS, JavaScript, and Tailwind.
        </div>
        <div class="mt-8 flex flex-row">
            <a href="https://www.linkedin.com/in/eleanor-davis-mullen-66596519a/" target="_blank" class="button mr-4">
                LinkedIn
            </a>
            <a href="mailto:eleanordm83@gmail.com" class="button">
                Email
            </a>
            <a href="https://github.com/eleanordm/rick-and-morty" target="_blank" class="button ml-4">
                Github
            </a>
        </div>
    </div>
</div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'

export default {
    name: 'AboutView',
    components: {
        HelloWorld
    },
}
</script>