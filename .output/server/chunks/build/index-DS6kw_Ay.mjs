import { computed, watch, unref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { P as ProductList } from './ProductList-BNBGQtwc.mjs';
import { u as useRoute } from './server.mjs';
import { u as useProductStore } from './productStore-CipwQ-mL.mjs';
import './el-button-etDYgHTt.mjs';
import 'lodash-unified';
import '@vue/shared';
import '@vueuse/core';
import '@ctrl/tinycolor';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';
import './el-overlay-B9AOyR8v.mjs';
import './aria-DC1XP1AM.mjs';
import './index-Bu8Xfd1z.mjs';
import '@popperjs/core';
import './typescript-B4MtqadT.mjs';
import './index-BKHcXdi2.mjs';
import './event-BZTOGHfp.mjs';
import './el-dropdown-6o5L3AHh.mjs';
import './el-rate-XglfJQO_.mjs';
import './UIButton-BaUMxFHy.mjs';
import './LoadingSpinner-MiiBik8p.mjs';
import './useCurrency-jRJRFhrU.mjs';
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
import 'vue-sonner';
import './asyncData-rMXjTC0Q.mjs';
import 'perfect-debounce';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const productStore = useProductStore();
    const filters = computed(() => {
      var _a, _b, _c;
      return {
        brands: ((_a = route.query.brands) == null ? void 0 : _a.split(",")) || [],
        priceRanges: ((_b = route.query.priceRanges) == null ? void 0 : _b.split(",")) || [],
        storage: ((_c = route.query.storage) == null ? void 0 : _c.split(",")) || []
      };
    });
    watch(
      filters,
      (newFilters) => {
        productStore.getAllProducts(newFilters);
      },
      { deep: true, immediate: true }
    );
    const products = computed(() => productStore.getProducts);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(ProductList), mergeProps({
        products: unref(products),
        isLoading: unref(productStore).isLoading
      }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-DS6kw_Ay.mjs.map
