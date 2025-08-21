import { k as useAuthStore, G as useCartStore, _ as __nuxt_component_5 } from './server.mjs';
import { computed, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
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
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import 'vue-router';
import '@vueuse/core';
import '@vue/shared';
import 'lodash-unified';
import 'vue-sonner';

const deliveryFee = 15;
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useAuthStore();
    const cartStore = useCartStore();
    computed(() => cartStore.cart);
    const subtotal = computed(() => cartStore.totalPrice);
    const discount = computed(() => Math.round(subtotal.value * 0.05));
    computed(() => subtotal.value - discount.value + deliveryFee);
    computed(() => cartStore.isLoading);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_5;
      _push(ssrRenderComponent(_component_ClientOnly, _attrs, {}, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/cart/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-3eae6a52"]]);

export { index as default };
//# sourceMappingURL=index-BfxX-2Hr.mjs.map
