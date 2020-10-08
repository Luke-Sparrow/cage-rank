<template>
<h1>Home Screen</h1>
<div class="container" @dragenter.prevent @dragover.prevent @dragover="onDragOver($event, movieList)">
    <div v-for="movie in movieList" :key="movie.id" class="draggable" draggable="true" @dragstart="startDrag($event, movie)" @dragend="onDrop($event, movie)">{{movie.name}}</div>
</div>
<div class="container" @dragenter.prevent @dragover.prevent @dragover="onDragOver($event, ratedList)">

</div>
<button @click="$emit('set-location-to-sign-in')">Sign Out</button>
<button @click="$emit('set-location-to-logged-in')">Change Ranking</button>
</template>

<script>
import {
    reactive,
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
            },
            {
                id: 4,
                name: 'Face Off',
                rating: 4
            }
        ])

        const ratedList = reactive([{
            id: 5,
            name: 'Con Air',
            rating: 0
        }])

        function onDrop(evt) {
            evt.srcElement.classList.remove('dragging')

        }

        function startDrag(evt, movie) {
            movie
            evt.srcElement.classList.add('dragging')
            console.log(evt.target)
        }

        function onDragOver(evt, list) {
            // const draggable = document.querySelector('.dragging')
            evt
            list
            console.log(evt.clientY)
        }

        // function getDragAfterElement(currentList, y) {
        //     const draggableElements = [...currentList.]
        // }

        return {
            movieList,
            startDrag,
            onDrop,
            onDragOver,
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
    background-color: lightblue;
}
</style>
