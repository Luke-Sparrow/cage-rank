<template>
<h1>Home Screen</h1>
<draggable v-model="movieList" @start="drag=true" @end="drag=false">
    <div v-for="movie in movieList" :key="movie.id">{{movie.name}}</div>
</draggable>
<button @click="$emit('set-location-to-sign-in')">Sign Out</button>
<button @click="$emit('set-location-to-logged-in')">Change Ranking</button>
</template>

<script>
import draggable from 'vuedraggable'
import {
    reactive
} from 'vue'

export default {
    name: 'LoggedIn',

    setup() {

        const movieList = reactive([{
                id: 1,
                name: 'Moonstruck',
                rating: 1
            },
            {
                id: 2,
                name: 'National Treasure',
                rating: 2
            },
            {
                id: 3,
                name: 'Sorcerer\'s apprentice',
                rating: 3
            }
        ])

        return {
            draggable,
            movieList
        }
    }
}
</script>

<style scoped>

</style>
