<template>
    <form>
        <input type="email" placeholder="email" v-model="email">
        <input type="password" placeholder="password" v-model="password">
        <input type="password" placeholder="Confirm Password" v-model="passwordConf">
        <button @click.prevent="signUp">Sign Up</button>

        <RouterLink :to="{name: 'login'}">Already have a user? Log in now!</RouterLink>
    </form>
</template>

<script>
import {useAuthenticationStore} from '../stores/authentication'
import { createPinia, mapStores } from "pinia";
export default {

    data(){
        return{
            email: '',
            password: '',
            passwordConf: '',
            isAdmin: false
        }
    },
    methods: {
        signUp(){
            console.log(this.email, this.password)

            if(this.password === this.passwordConf){
                this.authenticationStore.SignUp(this.email, this.password, this.isAdmin)
            }
            else{
                alert("Passwords do not match, try again")
            }
        }
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