<template>
<div class="mt-40 flex justify-center">
    <div class="flex flex-col w-[1000px] text-left">
        <div class="font-sans text-blue text-sm">
            Hi there, my name is
        </div>
        <div class="font-sans text-pink text-6xl mt-5">
            Eleanor Davis Mullen.
        </div>
        <div class="font-sans text-[#f9bfdf] text-4xl mt-2 opacity-90">
            Placeholder text, placeholder text
        </div>
        <div class="font-sans text-beige text-md mt-8 w-[600px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. 
        </div>
        <div class="mt-8 flex flex-row">
        <div class="button mr-4">
            LinkedIn
        </div>
        <div class="button">
            Email
        </div>
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
