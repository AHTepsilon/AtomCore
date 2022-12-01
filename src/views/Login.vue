<template>
    <form class="login-form">
        <input id="login-form-input-email" class="login-form-input login-form-item" type="email" placeholder="email" v-model="email">
        <input id="login-form-input-pass" class="login-form-input login-form-item" type="password" placeholder="password" v-model="password">
        <button class="login-form-button login-form-item" @click.prevent="signIn">Submit</button>

        <RouterLink class="login-form-link login-form-item" :to="{name: 'register'}">Don't have a user? Sign up now!</RouterLink>
        <button class="login-form-button login-form-item" @click="logOut">Log Out</button>
        <button class="login-form-item login-form-button-del" @click.prevent="deleteUser">Delete User</button>
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

        deleteUser(){
            if(window.confirm('Are you sure you want to delete your user?')){
                this.authenticationStore.deleteUserFromAuth()
            }
        },
    },
    computed: {
        ...mapStores(useAuthenticationStore)
    },
    mounted(){
        console.log(this.authenticationStore.validate())
    }
}
</script>

<style lang="scss">

    $headerColor: #FFFFFF;
    $babyBlue: #DAE4FF;
    $darkCyan: #A6BFFF;

    .login-form{
        display: flex;
        flex-direction: column;
        width: 100%;
        align-items: center;
        justify-content: center;

        &-item{
            width: 20%;
            margin: 10px;
            height: 30px;
        }

        &-input{
            background: #F0F0F0;
			color: #000000;

            border: none;
        }

        &-link{
            text-align: center;
        }

        &-button{
            background: $darkCyan;
			border: none;
				
			color: #FFFFFF;
			

            				
				&:hover
				{
					cursor: pointer;
					background: darken($darkCyan, 5%);
				}
        }

        &-button-del{
            background: #ff0000;
            border: none;
            color: #FFFFFF;

            &:hover
				{
					cursor: pointer;
					background: darken(#ff0000, 5%);
				}
        }
    }
</style>