/**
 * @vitest-environment happy-dom
 */
import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import AddProduct from "../AddProduct.vue";
import { createTestingPinia } from "@pinia/testing";

describe("Add Product page testing", () => {
  it("should render the page", () => {
    const wrapper = mount(AddProduct, {
      global: {
        plugins: [createTestingPinia()],
      },
    });
  });

  it("should render the add product form when clicking the add product button", async () => {
    const wrapper = mount(AddProduct, {
      global: {
        plugins: [createTestingPinia()],
      },
    });
    await wrapper.find("button#addProduct_div_form_button").trigger("click");
    expect(wrapper.find("form#addProduct_div_form").exists()).toBeTruthy();
  });

  it("should render the edit product form when clicking the edit product button", async () => {
    const wrapper = mount(AddProduct, {
      global: {
        plugins: [createTestingPinia()],
      },
    });
    await wrapper.find("button#editProduct_div_form_button").trigger("click");
    expect(wrapper.find("form#editProduct_div_form").exists()).toBeTruthy();
  });
});
