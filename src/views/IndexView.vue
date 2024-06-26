<template>
<div class="xl:flex xl:justify-center xl:flex-col xl:items-center md:mx-[40px] lg:mx-[50px]">
    <div class="mx-8 mb-6 mt-16 flex items-center justify-center flex-col">
        <div class="flex-col md:flex-row flex md:max-w-lg w-full sm:w-[450px]">
            <div class="button w-full mb-3 md:mb-0" @click="toggleSortModal()">
                Sort
                <img src="../assets/sort-icon.png" class="h-[20px] w-[20px] ml-[3px]">
            </div>
            <div class="button w-full mb-3 md:mb-0 md:ml-8" @click="toggleFilterModal()">
                Filter
                <img src="../assets/filter-icon.png" class="h-[20px] w-[20px] ml-[3px]">
            </div>
            <div class="button-two button w-full md:ml-8" @click="getCharacterData()">
                Clear All
                <img src="../assets/clear-icon.png" class="h-[20px] w-[20px] ml-[3px]">
            </div>
        </div>
    </div>
    <div class="flex flex-row flex-wrap justify-center max-w-[1500px]" v-if="loading == false">
        <character-card v-for="character in characters" :key="character" :image="character.image" :name="character.name" :id="character.id">
        </character-card>
    </div>
    <div class="flex flex-row flex-wrap justify-center max-w-[1500px]" v-if="loading == true">
        <character-card-skeleton></character-card-skeleton>
    </div>

    <div class="modal flex items-center justify-center fixed inset-0 w-full h-full overflow-auto" v-if="showSortModal == true">
        <div class="modal-content flex items-center flex-col w-[260px] sm:w-[310px] h-[420px] p-10 rounded-[50px]">
            <div class="w-full flex justify-end pb-6">
                <span class="close flex justify-center content-center text-white text-lg font-bold w-8 h-8 rounded-full" @click="closeSortModal()">&times;</span>
            </div>
            <div class="font-zen text-blue">Sort by</div>
            <div class="button w-48 pl-3 mt-7" :class="{ active : sortIdAscendingActive }" @click="sortIdAscending()">
                ID ascending
                <img src="../assets/arrow-up-icon.png" class="h-[20px] w-[20px] ml-[3px]">
            </div>
            <div class="button w-48 pl-3 mt-7" :class="{ active : sortIdDecendingActive }" @click="sortIdDecending()">
                ID descending
                <img src="../assets/arrow-down-icon.png" class="h-[20px] w-[20px] ml-[3px] mt-1">
            </div>
            <div class="button w-48 pl-3 mt-7" :class="{ active : sortAlphabeticallyActive }" @click="sortAlphabetically()">
                Alphabetical
                <img src="../assets/alpha-icon.png" class="h-[20px] w-[20px] ml-[3px]">
            </div>
        </div>
    </div>
    <div class="modal flex items-center justify-center fixed inset-0 w-full h-full overflow-auto" v-if="showFilterModal == true">
        <div class="modal-content flex items-center flex-col w-[260px] sm:w-[310px] h-[420px] p-10 rounded-[50px]">
            <div class="w-full flex justify-end pb-6">
                <span class="close flex justify-center content-center text-white text-lg font-bold w-8 h-8 rounded-full" @click="closeFilterModal()">&times;</span>
            </div>
            <div class="font-zen text-blue">Filter by</div>
            <div class="button w-35 pl-3 mt-7" :class="{ active : filterOnlyHumanCharactersActive }" @click="filterOnlyHumanCharacters()">
                Human
                <img src="../assets/person-icon.png" class="h-[20px] w-[20px] ml-[3px]">
            </div>
            <div class="button w-35 pl-3 mt-7" :class="{ active : filterOnlyAliveCharactersActive }" @click="filterOnlyAliveCharacters()">
                Alive
                <img src="../assets/ecg-heart-icon.png" class="h-[20px] w-[20px] ml-[3px]">
            </div>
            <div class="button w-35 pl-3 mt-7" :class="{ active : filterOnlyDeadCharactersActive }" @click="filterOnlyDeadCharacters()">
                Dead
                <img src="../assets/skull-icon.png" class="h-[20px] w-[20px] ml-[3px]">
            </div>
        </div>
    </div>
</div>
</template>

<script>
import CharacterCard from '../components/CharacterCard.vue'
import CharacterCardSkeleton from '../components/CharacterCardSkeleton.vue'
import axios from 'axios'

export default {
    name: 'IndexView',
    components: {
        CharacterCard,
        CharacterCardSkeleton
    },
    data: function () {
        return {
            characters: [],
            originalCharacters: [],
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
        this.getCharacterData()
    },
    methods: {
        /**
         * Gets character data from the Rick and Morty API.
         * 
         * @returns {void}
         */
        getCharacterData: async function () {
            // 50 characters in total, removed the ones with no image
            var rawData = await axios.get("https://rickandmortyapi.com/api/character/1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55")
            this.characters = rawData.data

            this.originalCharacters = rawData.data
            this.sortIdAscendingActive = false
            this.sortIdDecendingActive = false
            this.sortAlphabeticallyActive = false
            this.filterOnlyHumanCharactersActive = false
            this.filterOnlyAliveCharactersActive = false
            this.filterOnlyDeadCharactersActive = false

            this.loading = false
        },
        /**
         * Shows and hides sort modal.
         * 
         * @returns {void}
         */
        toggleSortModal: function () {
            if (this.showSortModal == false) {
                this.showSortModal = true

                return
            }

            this.showSortModal = true
        },
        /**
         * Shows and hides filter modal.
         * 
         * @returns {void}
         */
        toggleFilterModal: function () {
            if (this.showFilterModal == false) {
                this.showFilterModal = true

                return
            }

            this.showFilterModal = true
        },
        /**
         * Hides sort modal.
         * 
         * @returns {void}
         */
        closeSortModal: function () {
            this.showSortModal = false
        },
        /**
         * Hides filter modal.
         * 
         * @return {void}
         */
        closeFilterModal: function () {
            this.showFilterModal = false
        },
        /**
         * Sorts characters in alphabetical order from a-z.
         * 
         * @return {void}
         */
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
        /**
         * Sorts characters by id - ascending order.
         * 
         * @return {void}
         */
        sortIdAscending: function () {
            this.characters.sort((a, b) => a.id - b.id);

            this.sortAlphabeticallyActive = false
            this.sortIdDecendingActive = false
            this.sortIdAscendingActive = true
        },
        /**
         * Sorts characters by id - decending order.
         * 
         * @returns {void}
         */
        sortIdDecending: function () {
            this.characters.sort((a, b) => a.id - b.id);
            this.characters.reverse();

            this.sortAlphabeticallyActive = false
            this.sortIdAscendingActive = false
            this.sortIdDecendingActive = true
        },
        /**
         * Filters to show only human characters.
         * 
         * @return {void}
         */
        filterOnlyHumanCharacters: function () {
            this.characters = this.originalCharacters
            this.characters = this.characters.filter((item) => {
                return (item.species == "Human")
            })

            this.filterOnlyAliveCharactersActive = false
            this.filterOnlyDeadCharactersActive = false
            this.filterOnlyHumanCharactersActive = true
        },
        /**
         * Filters to show only alive characters.
         * 
         * @returns {void}
         */
        filterOnlyAliveCharacters: function () {
            this.characters = this.originalCharacters
            this.characters = this.characters.filter((item) => {
                return (item.status == "Alive")
            })

            this.filterOnlyDeadCharactersActive = false
            this.filterOnlyHumanCharactersActive = false
            this.filterOnlyAliveCharactersActive = true
        },
        /**
         * Filters to show only dead characters.
         * 
         * @return {void}
         */
        filterOnlyDeadCharacters: function () {
            this.characters = this.originalCharacters
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

// Styling to show which button is active
.active {
    background-color: #f69acc;
}
</style>
