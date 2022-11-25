/**
 * @vitest-environment happy-dom
 */
 import { mount } from "@vue/test-utils";
 import { describe, expect, it } from "vitest";
 import Landing from "../Landing.vue";
 import { createTestingPinia } from '@pinia/testing'
 
 describe('Landing test', () => {
    it("Renders", () => {
        const wrapper = mount(Landing, {
            global: {
              plugins: [createTestingPinia()],
            },
          })
    })
 })