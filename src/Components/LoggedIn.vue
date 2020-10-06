<template>
<h1>Logged In!</h1>
<button @click="$emit('set-location-to-sign-in')">Sign Out</button>
<button @click="$emit('set-location-to-home-screen')">Home Screen</button>
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
