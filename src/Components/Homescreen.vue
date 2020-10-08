<template>
<h1>Home Screen</h1>
<div class="container">
    <div v-for="movie in movieList" :key="movie.id" class="draggable">{{movie.name}}</div>
</div>
<div class="container">
    <div v-for="movie in ratedList" :key="movie.id" class="draggable">{{movie.name}}</div>
</div>
<button @click="$emit('set-location-to-sign-in')">Sign Out</button>
<button @click="$emit('set-location-to-logged-in')">Change Ranking</button>
</template>

<script>
import './homeScreen.js'
import draggable from 'vuedraggable'
import {
    onMounted,
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

        const ratedList = reactive([{
            id: 4,
            name: 'Face Off',
            rating: 4
        }])

        onMounted(() => {
            let externalScript = document.createElement('script')
            externalScript.setAttribute('src', './homeScreen.js')
            document.head.appendChild(externalScript)
        })

        return {
            draggable,
            movieList,
            ratedList
        }
    }
}
</script>

<style scoped>
.container {
    background-color: #333;
    padding: 1rem;
    margin-top: 1rem;
}

.draggable {
    padding: 1rem;
    margin: 5px;
    background-color: white;
    border: 1px solid black;
    cursor: move;
}

.draggable.dragging {
    opacity: .5;
}
</style>
