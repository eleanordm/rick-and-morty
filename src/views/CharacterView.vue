<template>
<div>
    <div class="flex justify-center mt-36" v-if="loading == false">
        <div class="id-card">
            <div class="flex flex-col">
                <div class="border-b-[4px] border-[#618EFF] flex text-[#272727] bg-green justify-center font-sans text-2xl items-center pt-3 pb-2">
                    Identification Card
                </div>
                <div class="flex">
                    <div class="relative text-center">
                        <img class="w-[190px] h-[220px] rounded-md m-2 object-cover border-[3px] border-[#272727]" :src="character.image">
                        <div class="font-sans absolute bottom-[17px] left-[10px] right-[10px] text-white bg-opacity-[78%] bg-[#36b402]" v-if="character.status == 'Alive'">Alive</div>
                        <div class="font-sans absolute bottom-[17px] left-[10px] right-[10px] text-white bg-opacity-[78%] bg-[#d80505]" v-if="character.status == 'Dead'">Dead</div>
                        <div class="font-sans absolute bottom-[17px] left-[10px] right-[10px] text-white bg-opacity-[78%] bg-[#7c7c7c]" v-if="character.status == 'unknown'">Missing</div>
                    </div>
                    <div class="font-sans text-[#272727] w-[250px]">
                        <div class="flex justify-end">
                            <div class="m-2 text-base">
                                ID: {{ character.id }}
                            </div>
                        </div>
                        <div class="flex flex-col mx-2">
                            <div class="flex flex-row">
                                <div class="text-blue text-base"> {{ character.name }}</div>
                            </div>
                            <div class="flex flex-row"> Gender: <div class="text-[#272727] ml-1 text-base"> {{ character.gender }}</div>
                            </div>
                            <div class="flex flex-row"> Species: <div class="text-[#272727]] ml-1 text-base"> {{ character.species }}</div>
                            </div>
                            <div class="flex flex-row"> Origin: <div class="text-[#272727] ml-1 text-base"> {{ character.origin.name }}</div>
                            </div>
                        </div>
                        <div class="flex justify-center mt-[15px]">
                            <img src="../assets/barcode.png" class="w-[200px] h-[25px]">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div v-if="loading == true">
        <id-card-skeleton></id-card-skeleton>
    </div>
</div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
import axios from 'axios'
import IdCardSkeleton from '../components/IdCardSkeleton.vue'

export default {
    name: 'CharacterView',
    components: {
        HelloWorld,
        IdCardSkeleton
    },
    data: function () {
        return {
            character: {},
            alive: false,
            dead: false,
            missing: false,
            loading: true
        }
    },
    created: function () {
        this.getCharacterId()
    },
    methods: {
        getCharacterId: async function () {
            var rawData = await axios.get("https://rickandmortyapi.com/api/character/" + this.$route.query.id)
            this.character = rawData.data

            this.loading = false
        },
    }
}
</script>

<style lang="scss">
// id card animation styling
.id-card {
    border: 4px solid #618EFF;
    background-color: rgba(238, 236, 236, 0.915);
    box-shadow: 0 7px 20px 5px #00000046;
    border-radius: .7rem;
    overflow: hidden;
    transition: .5s all;
    max-height: 300px;

    ::before {
        position: fixed;
        content: "";
        box-shadow: 0 0 100px 40px #ffffff08;
        top: -10%;
        left: -100%;
        transform: rotate(-45deg);
        height: 60rem;
        transition: .7s all;
    }

    &:hover {
        border: 4px solid #618EFF;
        box-shadow: 0 7px 50px 5px #00000075;
        transform: scale(1.015);

        ::before {
            filter: brightness(.5);
            top: -100%;
            left: 200%;
        }
    }
}
</style>
