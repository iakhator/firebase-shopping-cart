import { ref, unref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { P as ProductList } from './ProductList-Dqr7QI4U.mjs';
import { u as useRoute } from './server.mjs';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';
import './index-B0JEEsKt.mjs';
import './el-button-V0v0dsgs.mjs';
import 'lodash-unified';
import '@vue/shared';
import '@ctrl/tinycolor';
import './UIButton-CG1Ax5gj.mjs';
import './IconBase-KIBH9raF.mjs';
import './Spinner-B8agEsyy.mjs';
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
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import 'vue-router';
import 'perfect-debounce';
import '@vueuse/core';
import 'vue-sonner';

const _sfc_main = {
  __name: "[categoryId]",
  __ssrInlineRender: true,
  setup(__props) {
    useRoute();
    ref("");
    const categoryProducts = ref([]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(ProductList), mergeProps({ products: unref(categoryProducts) }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/categories/[categoryId].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_categoryId_-CILJO20M.mjs.map
