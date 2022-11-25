/**
 * @vitest-environment happy-dom
 */
 import { mount } from "@vue/test-utils";
 import { describe, expect, it } from "vitest";
 import ProductShowcase from "../ProductShowcase.vue";
 import { createTestingPinia } from "@pinia/testing";
 import { RouterLinkStub } from '@vue/test-utils';
 
 describe("Add Store page testing", () => {
   it("should render the page", () => {
     const wrapper = mount(ProductShowcase, {
       global: {
         plugins: [createTestingPinia()],
       },
       stubs: {
           RouterLink: RouterLinkStub
       }
     });
   });
});