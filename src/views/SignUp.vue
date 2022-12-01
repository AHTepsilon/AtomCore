<template>
    <form class="signup-form">
        <input id="signup-form-input-email" class="signup-form-input signup-form-item" type="email" placeholder="email" v-model="email">
        <input id="signup-form-input-pass" class="signup-form-input signup-form-item" type="password" placeholder="password" v-model="password">
        <input id="signup-form-input-passConf" class="signup-form-input signup-form-item" type="password" placeholder="Confirm Password" v-model="passwordConf">
        <button class="signup-form-button signup-form-item" @click.prevent="signUp">Sign Up</button>
        <RouterLink class="signup-form-link signup-form-item" :to="{name: 'login'}">Already have a user? Log in now!</RouterLink>
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

<style lang="scss">

$headerColor: #FFFFFF;
    $babyBlue: #DAE4FF;
    $darkCyan: #A6BFFF;

    .signup-form{
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
    }

</style>