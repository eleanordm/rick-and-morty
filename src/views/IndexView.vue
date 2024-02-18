<template>
<div>
    <div class="m-5 flex flex-col items-center">
        <div class="flex flex-row">
            <div class="button">Sort</div>
            <div class="button ml-8">Filter</div>
            <div class="button ml-8">Clear All</div>
        </div>
    </div>
    <div class="flex flex-row flex-wrap justify-center">
        <character-card v-for="character in characters" :key="character" :image="character.image" :name="character.name">
        </character-card>
    </div>
</div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
import CharacterCard from '../components/CharacterCard.vue'

/* Pauses all functions until function with axios & await is fullfilled */
import axios from 'axios'

export default {
    name: 'IndexView',
    components: {
        HelloWorld,
        CharacterCard
    },
    data: function () {
        return {
            characters: [],
        }
    },
    created: function () {
        this.getCharacterData()
    },
    methods: {
        /* A function to get all character data */
        getCharacterData: async function () {
            var rawData = await axios.get("https://rickandmortyapi.com/api/character/1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,21,22,23,24,25,26,27")
            this.characters = rawData.data
            console.log(this.characters)
        }

    }
}
</script>
