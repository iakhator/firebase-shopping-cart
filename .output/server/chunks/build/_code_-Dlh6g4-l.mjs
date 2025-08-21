import { E as ElInput } from './index-BkNGL2aN.mjs';
import { ref, mergeProps, nextTick, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderComponent } from 'vue/server-renderer';
import { U as UIButton } from './UIButton-BaUMxFHy.mjs';
import { useRoute, useRouter } from 'vue-router';
import { b as useNuxtApp } from './server.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import '@vueuse/core';
import 'lodash-unified';
import './el-button-etDYgHTt.mjs';
import '@vue/shared';
import '@ctrl/tinycolor';
import './typescript-B4MtqadT.mjs';
import './event-BZTOGHfp.mjs';
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
import 'vue-sonner';

const _sfc_main = {
  __name: "[code]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    useRouter();
    route.params.code;
    const pinDigits = ref(["", "", "", "", "", ""]);
    const elPinInputs = ref([]);
    const errorMessage = ref("");
    const successMessage = ref("");
    const loading = ref(false);
    ref("");
    const { $toast, $auth, $signInWithCustomToken } = useNuxtApp();
    function onInput(idx) {
      const val = pinDigits.value[idx];
      if (val.length > 1) {
        pinDigits.value[idx] = val.slice(-1);
      }
      if (val && idx < 5) {
        nextTick(() => {
          if (elPinInputs.value[idx + 1]) {
            elPinInputs.value[idx + 1].focus();
          }
        });
      }
    }
    function onBackspace(idx, e) {
      if (!pinDigits.value[idx] && idx > 0) {
        nextTick(() => {
          if (elPinInputs.value[idx - 1]) {
            elPinInputs.value[idx - 1].focus();
          }
        });
      }
    }
    function onFocus(idx) {
      pinDigits.value[idx] = "";
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_input = ElInput;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "verify-container" }, _attrs))} data-v-368c1607><div class="verify-card" data-v-368c1607><h2 class="verify-title briscolade" data-v-368c1607>Email Verification</h2><p class="verify-desc mb-4" data-v-368c1607> Please enter the 6-digit code sent to your email to verify your account. </p>`);
      if (errorMessage.value) {
        _push(`<div class="verify-error" data-v-368c1607>${ssrInterpolate(errorMessage.value)}</div>`);
      } else {
        _push(`<!---->`);
      }
      if (successMessage.value) {
        _push(`<div class="verify-success" data-v-368c1607>${ssrInterpolate(successMessage.value)}</div>`);
      } else {
        _push(`<!---->`);
      }
      if (!successMessage.value) {
        _push(`<form data-v-368c1607><div class="pin-input-group" data-v-368c1607><!--[-->`);
        ssrRenderList(pinDigits.value, (digit, idx) => {
          _push(`<!--[-->`);
          _push(ssrRenderComponent(_component_el_input, {
            ref_for: true,
            ref_key: "elPinInputs",
            ref: elPinInputs,
            modelValue: pinDigits.value[idx],
            "onUpdate:modelValue": ($event) => pinDigits.value[idx] = $event,
            maxlength: "1",
            inputmode: "numeric",
            type: "text",
            class: "pin-input",
            onInput: ($event) => onInput(idx),
            onKeydown: ($event) => onBackspace(idx),
            onFocus: ($event) => onFocus(idx),
            autofocus: idx === 0,
            style: { "width": "2.5rem", "margin": "0 0.25rem", "text-align": "center" }
          }, null, _parent));
          if (idx < 5) {
            _push(`<span class="pin-dash" data-v-368c1607>-</span>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<!--]-->`);
        });
        _push(`<!--]--></div>`);
        _push(ssrRenderComponent(UIButton, {
          label: "Verify Email",
          size: "large",
          class: "primary",
          "native-type": "submit",
          loading: loading.value,
          disabled: loading.value || pinDigits.value.join("").length !== 6
        }, null, _parent));
        _push(`</form>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/verify/[code].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _code_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-368c1607"]]);

export { _code_ as default };
//# sourceMappingURL=_code_-Dlh6g4-l.mjs.map
