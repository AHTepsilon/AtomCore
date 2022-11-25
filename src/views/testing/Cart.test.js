/**
 * @vitest-environment happy-dom
 */
 import { mount } from "@vue/test-utils";
 import { describe, expect, it } from "vitest";
 import Cart from "../Cart.vue";
 import { createTestingPinia } from "@pinia/testing";
 
 describe("Cart page testing", () => {
   it("should render the page", () => {
     const wrapper = mount(Cart, {
       global: {
         plugins: [createTestingPinia()],
       },
     });
   });

   it("should not render any items before being added", () => {
    const wrapper = mount(Cart, {
      global: {
        plugins: [createTestingPinia()],
      },
    });

    expect(wrapper.find("li.cart-area-list-element").exists()).toBeFalsy();
  });
});