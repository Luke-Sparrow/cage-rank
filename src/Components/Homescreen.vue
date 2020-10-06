<template>
<h1>Home Screen</h1>
<ul>
    <li>Movie 1</li>
    <li>Movie 2</li>
    <li>Movie 3</li>
</ul>
<button @click="$emit('set-location-to-sign-in')">Sign Out</button>
<button @click="$emit('set-location-to-logged-in')">Change Ranking</button>
</template>

<script>
export default {
    name: 'LoggedIn',

    setup() {
        return {

        }
    }
}
</script>

<style scoped>

</style>
