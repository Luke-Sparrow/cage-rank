// Handling this app as a single page conditionally rendering one of the three user pages.

<template>
<SignIn v-on:set-location-to-logged-in="state.location = 'loggedIn'" v-if="state.location === 'signIn'" />
<LoggedIn v-on:set-location-to-sign-in="state.location = 'signIn'" v-on:set-location-to-home-screen="state.location = 'homeScreen'" v-if="state.location === 'loggedIn'" />
<HomeScreen v-on:set-location-to-sign-in="state.location = 'signIn'" v-on:set-location-to-logged-in="state.location = 'loggedIn'" v-if="state.location === 'homeScreen'" />

<TestDnD />
</template>

<script>
import SignIn from './Components/SignIn'
import LoggedIn from './Components/LoggedIn'
import HomeScreen from './Components/Homescreen'
import TestDnd from './Components/TestDnD'
import {
    reactive
} from 'vue'

export default {
    setup() {
        const state = reactive({
            location: 'loggedIn',
        })
        return {
            state,
            SignIn,
            LoggedIn,
            HomeScreen,
            TestDnd
        }
    }
}
</script>

<style>
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
</style>
