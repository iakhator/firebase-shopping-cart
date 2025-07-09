import { withAsyncContext, unref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { P as ProductList } from './ProductList-Dqr7QI4U.mjs';
import { D as useAsyncData } from './server.mjs';
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

const _sfc_main = /* @__PURE__ */ Object.assign({
  name: ProductList
}, {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data: categoryProducts } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      "categoryProducts",
      () => $fetch(`/api/category/${route.params.productId}`)
    )), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(ProductList), mergeProps({ products: unref(categoryProducts) }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/[productId]/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-hZY3_oX6.mjs.map
