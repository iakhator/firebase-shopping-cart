import { u as useRoute, a as useRouter, _ as __nuxt_component_5 } from './server.mjs';
import { watch, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { u as useOrderStore } from './useOrderStore-D07Ijwbo.mjs';
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

const _sfc_main = {
  __name: "success",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    useRouter();
    route.query.ref;
    const { order } = useOrderStore();
    watch(order, (newOrder) => {
      if (newOrder) {
        console.log(newOrder, "new order");
      }
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/orders/success.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const success = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-14dc0c41"]]);

export { success as default };
//# sourceMappingURL=success-CLOiOQYI.mjs.map
