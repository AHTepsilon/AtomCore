/**
 * @vitest-environment happy-dom
 */
 import { mount } from "@vue/test-utils";
 import { describe, expect, it } from "vitest";
 import Header from "../Header.vue";
 import { createTestingPinia } from '@pinia/testing'

 describe("Header test", () => {
    it("Should render the header correctly", () => {
        const wrapper = mount(Header, {
            global: {
              plugins: [createTestingPinia()],
            },
          });
    })

    it("Should render the header correctly with the header buttons", () => {
        const wrapper = mount(Header, {
            global: {
              plugins: [createTestingPinia()],
            },
          });

          expect(wrapper.find('ul.header_buttons').exists()).toBeTruthy()
    })

    it("Should render the header correctly with the navigation buttons", () => {
        const wrapper = mount(Header, {
            global: {
              plugins: [createTestingPinia()],
            },
          });

          expect(wrapper.find('ul.nav_buttons').exists()).toBeTruthy()
    })

    it("Should not render the add items button if user is not logged in", () => {
      const wrapper = mount(Header, {
          global: {
            plugins: [createTestingPinia()],
          },

          data() {
            return {
              isAdmin: false
            }
          }
        });

        expect(wrapper.find('.header_buttons_add_product_router').exists()).toBeFalsy()
    })

    it("Should render the modal if a not available link is pressed", async () => {
      const wrapper = mount(Header, {
          global: {
            plugins: [createTestingPinia()],
          },

          data() {
            return {
              showModal: false
            }
          }

        });

        expect(wrapper.find("NotAvailableModal").exists()).toBeFalsy()
    })
 })