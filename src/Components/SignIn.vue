<template>
<div id="app">
    <main>
        <div class="signInForm">
            <fieldset id="signIn" class="signIn">
                <h1>Sign In</h1>
                <div>
                    <label for="email">Email</label>
                    <input type="email" placeholder="Enter your email here...">
                </div>
                <div>
                    <label for="password">Password</label>
                    <input type="password" placeholder="Enter your password here...">
                </div>
            </fieldset>
            <div>
                <button @click="$emit('set-location-to-logged-in')">Get in the Cage</button>
            </div>
        </div>
    </main>
</div>
</template>

<script>
export default {
    name: 'SignIn',
    setup() {
        return {

        }
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bellefair&display=swap');

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

#app {
    font-family: 'Bellefair', serif;
    background-image: url('../assets/sorcerer_nic.jpg');
    background-size: cover;
    background-position: bottom;
}

main {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
}

.signInForm {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: linear-gradient(180deg, rgba(111, 197, 202, 0.75), rgba(0, 0, 0, 0.75));
    border-radius: 35px;
    padding: 3rem;
    margin-right: 10rem;
    color: white;
}

.signIn {
    padding: 35px;
    border-style: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.signIn div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

fieldset h1 {
    font-size: 3rem;
    transform: translateY(-30px);
}

fieldset div label {
    font-size: 30px;
}

button {
    background-color: rgba(255, 255, 255, 0.5);
    border-style: none;
    color: black;
    padding: 10px;
    border-radius: 999px;
    font-size: 15px;
    cursor: pointer;
    transition: 400ms ease-in;
}

button:hover {
    background-color: rgba(255, 255, 255, 0.8)
}

input {
    width: 100%;
    padding: 15px 20px;
    background-color: transparent;
    border: 1px solid white;
    border-radius: 20px;
    color: white;
    text-align: center;
}
</style>
