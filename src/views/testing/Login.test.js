/**
 * @vitest-environment happy-dom
 */
 import { mount } from "@vue/test-utils";
 import { describe, expect, it } from "vitest";
 import Login from "../Login.vue";
 import { createTestingPinia } from "@pinia/testing";
 import { RouterLinkStub } from '@vue/test-utils';
 
 describe("Login page testing", () => {
   it("should render the page", () => {
     const wrapper = mount(Login, {
       global: {
         plugins: [createTestingPinia()],
       }
     });
   });

   it("should give access if login credentials are valid", async () => {
    const wrapper = mount(Login, {
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
    const emailInput = wrapper.find('input#login-form-input-email')
    const passInput = wrapper.find('input#login-form-input-pass')

    await emailInput.setValue('random@mail.com')
    await passInput.setValue('123456789')

    await wrapper.find('button.login-form-button').trigger("click")
    expect(wrapper.email).toEqual(emailInput.value)
    expect(wrapper.password).toEqual(passInput.value)
   })
});