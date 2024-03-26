<template>
<div>
    <div class="flex justify-center mt-36">
        <div class="box">
            <div class="flex flex-col">
                <div class="flex justify-center font-sans text-2xl w-[500px] h-[40px] items-center rounded-md rounded-bl-none rounded-br-none">
                    Identification Card
                </div>
                <div class="flex">
                    <img class="w-[200px] h-[220px] rounded-md m-3 object-cover" :src="character.image">
                    <div class="font-sans text-blue m-4">
                        <div class="mb-3 text-xl"> ID: {{ character.id }} </div>
                        <div> Name: {{ character.name }} </div>
                        <div> Gender: {{ character.gender }} </div>
                        <div> Species: {{ character.species }} </div>
                        <div> Status: {{ character.status }} </div>
                    </div>

                </div>
                <div class="flex justify-center font-sans text-2xl w-[500px] h-[20px] items-center rounded-md rounded-tl-none rounded-tr-none"></div>
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
.box {
    user-select:none;
  max-width: 300px;
  margin: 5rem auto;
  border: 1px solid #ffffff22;
  background-color: #282c34;
  background: linear-gradient(0deg, rgba(40,44,52,1) 0%, rgba(17,0,32,.5) 100%);
  box-shadow: 0 7px 20px 5px #00000088;
  border-radius: .7rem;
  backdrop-filter: blur(7px);
  -webkit-backdrop-filter: blur(7px);
  overflow: hidden;
  transition: .5s all;

  ::before{
    position: fixed;
    content: "";
    box-shadow: 0 0 100px 40px #ffffff08;
    top: -10%;
    left: -100%;
    transform: rotate(-45deg);
    height: 60rem;
    transition: .7s all;
  }
  &:hover{
    border: 1px solid #ffffff44;
    box-shadow: 0 7px 50px 10px #000000aa;
    transform: scale(1.015);
    filter: brightness(1.3);
    ::before{
      filter: brightness(.5);
      top: -100%;
      left: 200%;
    }
  }

}
</style>
