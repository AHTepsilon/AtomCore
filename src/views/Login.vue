<template>
    <form>
        <input type="email" placeholder="email" v-model="email">
        <input type="password" placeholder="password" v-model="password">
        <button @click.prevent="signIn">Submit</button>

        <RouterLink :to="{name: 'register'}">Don't have a user? Sign up now!</RouterLink>
        <button @click="logOut">Log Out</button>
    </form>
</template>

<script>
import {useAuthenticationStore} from '../stores/authentication'
import { createPinia, mapStores } from "pinia";
export default {

    data(){
        return{
            email: '',
            password: ''
        }
    },
    methods: {
        signIn(){
            console.log(this.email, this.password)
            this.authenticationStore.SignIn(this.email, this.password)
        },

        logOut(){
            this.authenticationStore.signOut()
        },
    },
    computed: {
        ...mapStores(useAuthenticationStore)
    },
    mounted(){
        console.log(this.authenticationStore)
    }
}
</script>

<style>

</style>