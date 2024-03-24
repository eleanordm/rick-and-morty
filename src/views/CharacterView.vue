<template>
<div>
    <img :src="character.image">
    {{ character.name }}
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
        /* */
        getCharacterId: async function () {
            var rawData = await axios.get("https://rickandmortyapi.com/api/character/" + this.$route.query.id)
            this.character = rawData.data
        }
    }
}
</script>
