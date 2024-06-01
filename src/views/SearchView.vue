<template>
<div>
    <div class="flex justify-center">
        <div class="flex justify-between mt-20 mb-10 max-w-full items-center bg-transparent h-[40px] rounded-full pl-[13px] border-2 border-pink">
            <input type="text" placeholder="Search characters" v-model="name" @keydown.enter="getAllCharacters()" class="placeholder-blue focus:placeholder-transparent text-blue outline-none bg-transparent font-zen max-[300px]:w-[200px] max-[300px]:text-[14px]">
            <div class="cursor-pointer h-[30px] w-[30px] border-blue border-2 rounded-full mr-[5px]" @click="getAllCharacters()">
                <span rel="preload" class="material-symbols-outlined mt-[3px] ml-[3px] text-[20px] text-blue">
                    search
                </span>
            </div>
        </div>
    </div>
    <div class="flex flex-row flex-wrap justify-center md:mx-[40px] lg:mx-[50px] max-w-[1500px]" v-if="loading == false">
        <character-card v-for="character in characters" :key="character" :image="character.image" :name="character.name" :id="character.id">
        </character-card>
    </div>
    <div v-if="!characterNotFound"></div>
    <div v-else>
        <div class="text-beige text-center font-zen">Character not found</div>
    </div>
    <div class="flex flex-row flex-wrap justify-center md:mx-[40px] lg:mx-[50px] mx-0 max-w-[1500px]" v-if="loading == true">
        <character-card-skeleton></character-card-skeleton>
    </div>
</div>
</template>

<script>
import CharacterCard from '@/components/CharacterCard.vue'
import CharacterCardSkeleton from '@/components/CharacterCardSkeleton.vue'
import axios from 'axios'

export default {
    name: 'SearchView',
    components: {
        CharacterCard,
        CharacterCardSkeleton
    },
    data: function () {
        return {
            characters: [],
            name: "",
            loading: false,
            characterNotFound: false
        }
    },
    methods: {
        /**
         * Gets character data from Rick and Morty API.
         * Searches for characters by name.
         * Sets error message if character name is not found.
         * 
         * @returns {void}
         */
        getAllCharacters: async function () {
            this.loading = true

            try {
                var rawData = await axios.get("https://rickandmortyapi.com/api/character/?name=" + this.name);
                this.characters = rawData.data.results;
                this.characterNotFound = false;
            } catch (error) {
                if (error.response && error.response.status === 404) {
                    this.characters = [];
                    this.characterNotFound = true;
                } else {
                    console.error("Error:", error.message);
                }
            }
            
            this.loading = false
        },
    }
}
</script>
