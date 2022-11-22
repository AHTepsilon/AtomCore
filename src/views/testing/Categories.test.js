/**
 * @vitest-environment happy-dom
 */
 import { mount } from "@vue/test-utils";
 import { describe, expect, it } from "vitest";
 import Categories from "../Categories.vue";
 
 describe('Categories test', () => {
    it("Categories render", () => {
        const wrapper = mount(Categories)
    })
 })