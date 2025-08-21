import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderSlot } from 'vue/server-renderer';
import { u as useHead } from './v3-CNOW2gPy.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import './server.mjs';
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
  __name: "auth",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Authentication - RingCart",
      meta: [
        {
          name: "description",
          content: "Sign in or create an account to access RingCart"
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "auth-layout" }, _attrs))} data-v-4c19cea7><div class="auth-container" data-v-4c19cea7>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/auth.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const auth = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-4c19cea7"]]);

export { auth as default };
//# sourceMappingURL=auth-Cu4Wd_F5.mjs.map
