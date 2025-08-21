import { ref, watch, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderStyle } from 'vue/server-renderer';
import { b as useNuxtApp } from './server.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main = {
  __name: "LoadingSpinner",
  __ssrInlineRender: true,
  props: {
    type: {
      type: String,
      default: "spinner",
      // 'spinner', 'dots', 'pulse', 'progress'
      validator: (value) => ["spinner", "dots", "pulse", "progress"].includes(value)
    },
    size: {
      type: String,
      default: "medium",
      // 'small', 'medium', 'large'
      validator: (value) => ["small", "medium", "large"].includes(value)
    },
    color: {
      type: String,
      default: "#409eff"
      // Element Plus primary color
    },
    message: {
      type: String,
      default: ""
    },
    fullscreen: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const props = __props;
    const progress = ref(0);
    const { $loadingIndicator } = useNuxtApp();
    watch(
      () => props.type,
      (newType) => {
        if (newType === "progress" && $loadingIndicator) {
          $loadingIndicator.start();
        }
      },
      { immediate: true }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _cssVars = { style: {
        "--7e20e9c0": __props.color
      } };
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["loading-container", { fullscreen: __props.fullscreen }]
      }, _attrs, _cssVars))} data-v-82d3ae11>`);
      if (__props.type === "spinner") {
        _push(`<div class="spinner-wrapper" data-v-82d3ae11><div class="spinner" data-v-82d3ae11><div class="spinner-circle" data-v-82d3ae11></div></div>`);
        if (__props.message) {
          _push(`<p class="loading-message" data-v-82d3ae11>${ssrInterpolate(__props.message)}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else if (__props.type === "dots") {
        _push(`<div class="dots-wrapper" data-v-82d3ae11><div class="dots" data-v-82d3ae11><div class="dot dot-1" data-v-82d3ae11></div><div class="dot dot-2" data-v-82d3ae11></div><div class="dot dot-3" data-v-82d3ae11></div></div>`);
        if (__props.message) {
          _push(`<p class="loading-message" data-v-82d3ae11>${ssrInterpolate(__props.message)}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else if (__props.type === "pulse") {
        _push(`<div class="pulse-wrapper" data-v-82d3ae11><div class="pulse" data-v-82d3ae11><div class="pulse-ring pulse-ring-1" data-v-82d3ae11></div><div class="pulse-ring pulse-ring-2" data-v-82d3ae11></div><div class="pulse-ring pulse-ring-3" data-v-82d3ae11></div></div>`);
        if (__props.message) {
          _push(`<p class="loading-message" data-v-82d3ae11>${ssrInterpolate(__props.message)}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<div class="progress-wrapper" data-v-82d3ae11><div class="progress-bar" data-v-82d3ae11><div class="progress-fill" style="${ssrRenderStyle({ width: `${unref(progress)}%` })}" data-v-82d3ae11></div></div>`);
        if (__props.message) {
          _push(`<p class="loading-message" data-v-82d3ae11>${ssrInterpolate(__props.message)}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/LoadingSpinner.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const LoadingSpinner = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-82d3ae11"]]);

export { LoadingSpinner as L };
//# sourceMappingURL=LoadingSpinner-MiiBik8p.mjs.map
