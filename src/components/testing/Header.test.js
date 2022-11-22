/**
 * @vitest-environment happy-dom
 */
 import { mount } from "@vue/test-utils";
 import { describe, expect, it } from "vitest";
 import Header from "../Header.vue";

 describe("Header test", () => {
    it("Should render the header correctly", () => {
        const wrapper = mount(Header)
    })
 })