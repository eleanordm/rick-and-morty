<template>
<div>
    <div class="m-8 flex flex-col items-center">
        <div class="flex flex-row">
            <div class="button cursor-pointer" @click="toggleSortModal()">
                Sort
                <span class="material-symbols-outlined pl-1">
                    sort
                </span>
            </div>
            <div class="button cursor-pointer ml-8" @click="toggleFilterModal()">
                Filter
                <span class="material-symbols-outlined pl-1">
                    filter_list
                </span>
            </div>
            <div class="button-two button cursor-pointer ml-8">
                Clear All
                <span class="material-symbols-outlined pl-1">
                    clear_all
                </span>
            </div>
        </div>
    </div>
    <div class="flex flex-row flex-wrap justify-center mx-32" v-if="loading == false">
        <character-card v-for="character in characters" :key="character" :image="character.image" :name="character.name">
        </character-card>
    </div>
    <div class="flex flex-row flex-wrap justify-between mx-32" v-if="loading == true">
        <character-card-skeleton></character-card-skeleton>
    </div>

    <div class="modal flex items-center justify-center fixed inset-0 w-full h-full overflow-auto" v-if="showSortModal == true">
        <div class="modal-content flex items-center flex-col w-[310px] h-[420px] p-10 rounded-[50px]">
            <div class="w-full flex justify-end pb-6">
                <span class="close flex justify-center content-center text-white text-lg font-bold w-8 h-8 rounded-full" @click="closeSortModal()">&times;</span>
            </div>
            <div class="font-sans text-blue">Sort by</div>
            <div class="button w-48 pl-3 cursor-pointer mt-7" :class="{ active : sortIdAscendingActive }" @click="sortIdAscending()">
                ID ascending
                <span class="material-symbols-outlined">
                    expand_less
                </span>
            </div>
            <div class="button w-48 pl-3 cursor-pointer mt-7" :class="{ active : sortIdDecendingActive }" @click="sortIdDecending()">
                ID descending
                <span class="material-symbols-outlined pr-1">
                    expand_more
                </span>
            </div>
            <div class="button w-48 pl-3 cursor-pointer mt-7" :class="{ active : sortAlphabeticallyActive }" @click="sortAlphabetically()">
                Alphabetical
                <span class="material-symbols-outlined pl-1">
                    sort_by_alpha
                </span>
            </div>
        </div>
    </div>
    <div class="modal flex items-center justify-center fixed inset-0 w-full h-full overflow-auto" v-if="showFilterModal == true">
        <div class="modal-content flex items-center flex-col w-[310px] h-[420px] p-10 rounded-[50px]">
            <div class="w-full flex justify-end pb-6">
                <span class="close flex justify-center content-center text-white text-lg font-bold w-8 h-8 rounded-full" @click="closeFilterModal()">&times;</span>
            </div>
            <div class="font-sans text-blue">Filter by</div>
            <div class="button w-35 pl-3 cursor-pointer mt-7" :class="{ active : filterOnlyHumanCharactersActive }" @click="filterOnlyHumanCharacters()">
                Human
                <span class="material-symbols-outlined pl-1">
                    person
                </span>
            </div>
            <div class="button w-35 pl-3 cursor-pointer mt-7" :class="{ active : filterOnlyAliveCharactersActive }" @click="filterOnlyAliveCharacters()">
                Alive
                <span class="material-symbols-outlined pl-1">
                    ecg_heart
                </span>
            </div>
            <div class="button w-35 pl-3 cursor-pointer mt-7" :class="{ active : filterOnlyDeadCharactersActive }" @click="filterOnlyDeadCharacters()">
                Dead
                <span class="material-symbols-outlined pl-1">
                    skull
                </span>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
import CharacterCard from '../components/CharacterCard.vue'
import CharacterCardSkeleton from '../components/CharacterCardSkeleton.vue'

/* Pauses all functions until function with axios & await is fullfilled */
import axios from 'axios'

export default {
    name: 'IndexView',
    components: {
        HelloWorld,
        CharacterCard,
        CharacterCardSkeleton
    },
    data: function () {
        return {
            characters: [],
            showSortModal: false,
            showFilterModal: false,
            loading: true,
            sortIdAscendingActive: false,
            sortIdDecendingActive: false,
            sortAlphabeticallyActive: false,
            filterOnlyHumanCharactersActive: false,
            filterOnlyAliveCharactersActive: false,
            filterOnlyDeadCharactersActive: false
        }
    },
    created: function () {
        /* Short timeout added to show skeleton loading */
        setTimeout(() => {
            this.loading = false
        }, 300)

        /* Gets character data on page load */
        this.getCharacterData()
    },
    methods: {
        /* Gets all character data */
        getCharacterData: async function () {
            /* 38 characters in total, removed id's with no image */
            var rawData = await axios.get("https://rickandmortyapi.com/api/character/1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,40,41,42,43,44,45")
            this.characters = rawData.data
        },
        toggleSortModal: function () {
            if (this.showSortModal == false) {
                this.showSortModal = true

                return
            }

            this.showSortModal = true
        },
        toggleFilterModal: function () {
            if (this.showFilterModal == false) {
                this.showFilterModal = true

                return
            }

            this.showFilterModal = true
        },
        closeSortModal: function () {
            this.showSortModal = false
        },
        closeFilterModal: function () {
            this.showFilterModal = false
        },
        /* Sort characters alphabetically */
        sortAlphabetically: function () {
            this.characters.sort(function (a, b) {
                if (a.name < b.name) {
                    return -1;
                }
                if (a.name > b.name) {
                    return 1;
                }
                return 0;
            });

            this.sortIdDecendingActive = false
            this.sortIdAscendingActive = false
            this.sortAlphabeticallyActive = true
        },
        /* Sort characters by id - ascending */
        sortIdAscending: function () {
            this.characters.sort((a, b) => a.id - b.id);

            this.sortAlphabeticallyActive = false
            this.sortIdDecendingActive = false
            this.sortIdAscendingActive = true
        },
        /* Sort characters by id - decending */
        sortIdDecending: function () {
            this.characters.sort((a, b) => a.id - b.id);
            this.characters.reverse();

            this.sortAlphabeticallyActive = false
            this.sortIdAscendingActive = false
            this.sortIdDecendingActive = true
        },
        filterOnlyHumanCharacters: function () {
            this.characters = this.characters.filter((item) => {
                return (item.species == "Human")
            })

            this.filterOnlyAliveCharactersActive = false
            this.filterOnlyDeadCharactersActive = false
            this.filterOnlyHumanCharactersActive = true
        },
        filterOnlyAliveCharacters: function () {
            this.characters = this.characters.filter((item) => {
                return (item.status == "Alive")
            })

            this.filterOnlyDeadCharactersActive = false
            this.filterOnlyHumanCharactersActive = false
            this.filterOnlyAliveCharactersActive = true
        },
        filterOnlyDeadCharacters: function () {
            this.characters = this.characters.filter((item) => {
                return (item.status == "Dead")
            })

            this.filterOnlyHumanCharactersActive = false
            this.filterOnlyAliveCharactersActive = false
            this.filterOnlyDeadCharactersActive = true

        }
    }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/modal.scss";

.active {
    background-color: #f88fc9;
}
</style>
