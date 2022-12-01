/**
 * @vitest-environment happy-dom
 */
 import { mount } from "@vue/test-utils";
 import { describe, expect, it } from "vitest";
 import SignUp from "../SignUp.vue";
 import { createTestingPinia } from '@pinia/testing'
 
 describe('Product Detail test', () => {
    it("It should render the product detail page", () => {
        const wrapper = mount(SignUp, {
            global: {
              plugins: [createTestingPinia()],
            },
          });
    })

    it("It should create account if credentials are correct", async () => {
        const wrapper = mount(SignUp, {
            global: {
              plugins: [createTestingPinia()],
            },

            data(){
                return{
                    email: 'random@mail.com',
                    password: '123456789'
                }
            }
          });
        const emailInput = wrapper.find('input#signup-form-input-email')
        const passInput = wrapper.find('input#signup-form-input-pass')

        await emailInput.setValue('random@mail.com')
        await passInput.setValue('123456789')

        expect(wrapper.email).toEqual(emailInput.value)
        expect(wrapper.password).toEqual(passInput.value)
    })

    it("password and password confirmation should be the same", async () => {
        const wrapper = mount(SignUp, {
            global: {
              plugins: [createTestingPinia()],
            },

            data(){
                return{
                    password: '123456789',
                    passwordConf: '123456789'
                }
            }
          });
        const passInput = wrapper.find('input#signup-form-input-pass')
        const passConfInput = wrapper.find('input#signup-form-input-passConf')

        await passInput.setValue('123456789')
        await passConfInput.setValue('123456789')

        expect(wrapper.password).toEqual(passInput.value)
        expect(wrapper.passwordConf).toEqual(passConfInput.value)

        expect(wrapper.password).toEqual(wrapper.passwordConf)
    })
 })