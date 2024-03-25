<template>
<div class="flex justify-center mt-36">
    <div class="bg-green rounded-md w-[500px] h-[300px]">

        <div class="flex flex-col">
            <div class="flex justify-center bg-pink font-sans text-2xl w-[500px] h-[40px] items-center rounded-md">
                Identification Card
            </div>
            <div class="flex">
                <img class="w-[200px] h-[220px] rounded-md m-3 object-cover" :src="character.image">
                <div class="font-sans text-blue m-3">
                    <div> ID: {{ character.id }} </div>
                    <div> Name: {{ character.name }} </div>
                    <div> Gender: {{ character.gender }} </div>
                    <div> Species: {{ character.species }} </div>
                    <div> Status: {{ character.status }} </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
import axios from 'axios'

export default {
    name: 'CharacterView',
    components: {
        HelloWorld,
    },
    data: function () {
        return {
            character: {},
        }
    },
    created: function () {
        this.getCharacterId()
    },
    methods: {
        getCharacterId: async function () {
            var rawData = await axios.get("https://rickandmortyapi.com/api/character/" + this.$route.query.id)
            this.character = rawData.data
        }
    }
}
</script>

<style lang="scss">

</style>
