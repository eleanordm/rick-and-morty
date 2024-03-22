<template>
<div>
    {{ characterId }}
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
            characterId: []
        }
    },
    created: function () {
        this.getCharacterId()
    },
    methods: {
        getCharacterId: async function () {
            var rawData = await axios.get("https://rickandmortyapi.com/api/character/1")
            this.characterId = rawData.data
        }
    }
}
</script>
