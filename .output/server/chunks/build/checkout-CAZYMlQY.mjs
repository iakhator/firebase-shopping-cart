import { b as useNuxtApp, k as useAuthStore, G as useCartStore, _ as __nuxt_component_5 } from './server.mjs';
import { ref, reactive, computed, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { p as publicAssetsURL } from '../routes/renderer.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import 'firebase-admin/app';
import 'firebase-admin/auth';
import 'firebase-admin/firestore';
import 'ioredis';
import 'vue-router';
import '@vueuse/core';
import '@vue/shared';
import 'lodash-unified';
import 'vue-sonner';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';

publicAssetsURL("/images/visa.svg");
publicAssetsURL("/images/mastercard.svg");
publicAssetsURL("/images/amex.svg");
const deliveryFee = 15;
const _sfc_main = {
  __name: "checkout",
  __ssrInlineRender: true,
  setup(__props) {
    const { $stripe } = useNuxtApp();
    const authStore = useAuthStore();
    const cartStore = useCartStore();
    ref({
      email: "",
      phone: "",
      firstName: "",
      lastName: "",
      address: "",
      city: "",
      postalCode: "",
      country: "us"
    });
    ref(null);
    const checkPhone = (rule, value, callback) => {
      if (!value) {
        callback(new Error("Phone number is required"));
      } else if (!Number.isInteger(value)) {
        callback(new Error("Phone must be a number"));
      } else {
        callback();
      }
    };
    reactive({
      email: [
        { required: true, message: "Please enter your email", trigger: "blur" },
        {
          type: "email",
          message: "Email is required",
          trigger: "blur"
        }
      ],
      phone: [
        { validator: checkPhone, trigger: "blur" }
        // {
        //     required: true,
        //     message: 'Phone number is required',
        //     trigger: 'blur',
        // },
        // {
        //     type: 'number',
        //     message: 'Phone number is required',
        //     trigger: 'blur',
        // },
      ],
      firstName: [
        {
          required: true,
          message: "First name is required",
          trigger: "blur"
        }
      ],
      lastName: [
        {
          required: true,
          message: "Last name is required",
          trigger: "blur"
        }
      ],
      address: [
        {
          required: true,
          message: "Address is required",
          trigger: "blur"
        }
      ],
      city: [{ required: true, message: "City is required", trigger: "blur" }],
      postalCode: [
        {
          required: false,
          message: "Please enter your postal code",
          trigger: "blur"
        }
      ]
    });
    ref(null);
    ref(null);
    ref(null);
    ref(null);
    ref(null);
    ref("");
    ref(false);
    ref(false);
    computed(() => authStore.isAuthenticated);
    computed(() => cartStore.cart);
    const subtotal = computed(() => cartStore.totalPrice);
    const discount = computed(() => Math.round(subtotal.value * 0.05));
    computed(() => subtotal.value + deliveryFee - discount.value);
    computed(() => {
      var _a;
      return ((_a = authStore.user) == null ? void 0 : _a.firstName) || "";
    });
    computed(() => {
      var _a;
      return ((_a = authStore.user) == null ? void 0 : _a.lastName) || "";
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_5;
      _push(ssrRenderComponent(_component_ClientOnly, _attrs, {}, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/cart/checkout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const checkout = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-2c348e69"]]);

export { checkout as default };
//# sourceMappingURL=checkout-CAZYMlQY.mjs.map
