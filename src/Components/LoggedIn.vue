<template>
<h1>Logged In!</h1>
<div class="drop-zone" @drop="onDrop($event, 1)" @dragover.prevent @dragenter.prevent>
    <div v-for="item in listOne" :key="item.id" class="drag-el" :class="'toggleDrag'" draggable="true" @dragstart="startDrag($event, item)">{{ item.title }}</div>
</div>
<div class="drop-zone" @drop="onDrop($event, 2)" @dragover.prevent @dragenter.prevent>
    <div v-for="item in listTwo" :key="item.id" class="drag-el" :class="{'dragging': isDragging}" draggable="true" @dragstart="startDrag($event, item)">{{ item.title }}</div>
</div>
<button @click="$emit('set-location-to-sign-in')">Sign Out</button>
<button @click="$emit('set-location-to-home-screen')">Home Screen</button>
</template>

<script>
import {
    computed,
    reactive,
    ref
} from 'vue'

export default {
    name: 'LoggedIn',

    setup() {

        const isDragging = ref(false)

        let items = reactive([{
                id: 1,
                title: 'Item 1',
                list: 1
            },
            {
                id: 2,
                title: 'Item 2',
                list: 1
            },
            {
                id: 3,
                title: 'Item 3',
                list: 2
            }
        ]);

        const listOne = computed(() => items.filter(item => item.list === 1))
        const listTwo = computed(() => items.filter(item => item.list === 2))

        function startDrag(evt, item) {
            isDragging.value = !isDragging.value
            evt.dataTransfer.dropEffect = 'move'
            evt.dataTransfer.effectAllowed = 'move'
            evt.dataTransfer.setData('itemID', item.id)
            console.log(item.id)
        }

        function onDrop(evt, list) {
            isDragging.value = !isDragging.value
            const itemID = parseInt(evt.dataTransfer.getData('itemID'))
            const item = this.items.find(item => item.id === itemID)
            item.list = list
            console.log(item)
        }

        return {
            items,
            listOne,
            listTwo,
            startDrag,
            onDrop,
            isDragging
        }
    }
}
</script>

<style scoped>
.drop-zone {
    background-color: #333;
    margin-bottom: 10px;
    padding: 10px;
}

.drag-el {
    background-color: #fff;
    margin-bottom: 10px;
    padding: 5px;
}

.drag-el.dragging {
    opacity: .5;
    color: #333;
}
</style>
