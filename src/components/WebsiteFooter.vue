<template>
<div class="bg-[#f69acc] w-full bottom-0 h-40 flex flex-col items-center justify-end pb-[8px] relative z-[1px]">
    <div class="text-md font-ubuntu text-white"><b>Eleanor Davis Mullen</b></div>
    <div class="text-xs font-ubuntu text-white">Software Devloper</div>
    <div class="flex flex-row mt-2 font-ubuntu">
        <router-link to="/about" class="text-xs text-white cursor-pointer"><b>About</b></router-link>
        <router-link to="/search" class="text-xs ml-5 text-white cursor-pointer"><b>Search</b></router-link>
        <router-link to="/index" class="text-xs ml-5 text-white cursor-pointer"><b>Index</b></router-link>
    </div>
    <div class="flex mb-1">
        <a href="https://github.com/eleanordm/rick-and-morty" class="h-[48px] w-[48px] flex justify-center items-center" target="_blank">
            <img alt="GitHub" src="../assets/github.png" class="w-[20px] h-[20px] cursor-pointer">
        </a>
        <a href="https://www.linkedin.com/in/eleanor-davis-mullen-66596519a/" class="h-[48px] w-[48px] flex justify-center items-center" target="_blank">
            <img alt="LinkedIn" src="../assets/linkedin.png" class="w-[20px] h-[20px] cursor-pointer">
        </a>
        <a href="mailto:eleanordm83@gmail.com" class="h-[48px] w-[48px] flex justify-center items-center" target="_blank">
            <img alt="Email" src="../assets/email.png" class="w-[20px] h-[20px] cursor-pointer">
        </a>
    </div>
</div>
</template>

<script>
export default {
    name: 'WebsiteFooter',
}
</script>