<template>
<div>
    <div class="flex justify-center">
        <div class="flex justify-center mt-20 mb-10 max-w-full items-center bg-pink h-[40px] w-[300px] rounded-full pl-[10px]">
            <input type="text" placeholder="Search characters" v-model="name" class="placeholder-white text-white outline-none bg-pink font-sans">
            <div class="cursor-pointer h-[30px] w-[30px] border-white border-2 rounded-full" @click="getAllCharacters()">
                <span class="material-symbols-outlined mt-[3px] ml-[3px] text-[20px]">
                    search
                </span>
            </div>
        </div>
    </div>
    <div class="flex flex-row flex-wrap justify-center mx-32" v-if="loading == false">
        <character-card v-for="character in characters" :key="character" :image="character.image" :name="character.name" :id="character.id">
        </character-card>
    </div>
    <div class="flex flex-row flex-wrap justify-center mx-32" v-if="loading == true">
        <character-card-skeleton></character-card-skeleton>
    </div>
</div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
import CharacterCard from '@/components/CharacterCard.vue'
import CharacterCardSkeleton from '@/components/CharacterCardSkeleton.vue'
import axios from 'axios'

export default {
    name: 'SearchView',
    components: {
        HelloWorld,
        CharacterCard,
        CharacterCardSkeleton
    },
    data: function () {
        return {
            characters: [],
            name: "",
            loading: false
        }
    },
    created: function () {

    },
    methods: {
        getAllCharacters: async function () {
            this.loading = true
            var rawData = await axios.get("https://rickandmortyapi.com/api/character/?name=" + this.name)
            this.characters = rawData.data.results

            this.loading = false
        },
    }
}
</script>
