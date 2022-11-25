/**
 * @vitest-environment happy-dom
 */
 import { mount } from "@vue/test-utils";
 import { describe, expect, it } from "vitest";
 import NotAvailableModal from "../NotAvailableModal.vue";

 describe("Modal test", () => {
    it("Should render the modal correctly", () => {
        const wrapper = mount(NotAvailableModal)
    })

    it("Should render the modal correctly with the title", () => {
        const wrapper = mount(NotAvailableModal)
        expect(wrapper.find('h2').exists()).toBeTruthy()
    })

    it("Should render the modal correctly with the button", () => {
        const wrapper = mount(NotAvailableModal)
        expect(wrapper.find('button').exists()).toBeTruthy()
    })
    
    it("should close the modal when the button is pressed", async () => {
        const wrapper = mount(NotAvailableModal)
        await wrapper.find('button').trigger("click")
        expect(wrapper.emitted()).toHaveProperty('close')
    })
 })