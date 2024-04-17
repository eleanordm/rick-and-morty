<template>
<div class="flex justify-center">
    <div class="flex justify-center mt-32 max-w-full items-center bg-blue h-[40px] w-[300px] rounded-full pl-[10px]">
        <input type="text" placeholder="Name" v-model="id" class="placeholder-white text-white outline-none bg-blue font-sans">
        <div class="cursor-pointer h-[30px] w-[30px] border-white border-2 rounded-full">
            <span class="material-symbols-outlined mt-[3px] ml-[3px] text-[20px]">
                search
            </span>
        </div>
    </div>
</div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'

export default {
    name: 'SearchView',
    components: {
        HelloWorld
    }
}
</script>

<style>

</style>