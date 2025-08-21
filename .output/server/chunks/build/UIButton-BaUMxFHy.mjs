import { E as ElButton } from './el-button-etDYgHTt.mjs';
import { computed, mergeProps, unref, withCtx, createVNode, createTextVNode, renderSlot, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderSlot, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main = {
  __name: "UIButton",
  __ssrInlineRender: true,
  props: {
    variant: { type: String, default: "primary" },
    // "primary" or "secondary"
    size: { type: String, default: "default" },
    // "small" | "default" | "large"
    icon: { type: Object, default: null },
    disabled: { type: Boolean, default: false },
    label: { type: String, default: "Save" },
    loading: { type: Boolean, default: false }
  },
  setup(__props) {
    const props = __props;
    const buttonClass = computed(() => ({
      primary: props.variant === "primary",
      secondary: props.variant === "secondary",
      "is-plain": props.variant === "plain",
      "is-transparent": props.variant === "transparent",
      "is-mild": props.variant === "mild"
    }));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_button = ElButton;
      _push(ssrRenderComponent(_component_el_button, mergeProps({
        class: unref(buttonClass),
        size: __props.size,
        icon: __props.loading ? null : __props.icon,
        loading: __props.loading,
        disabled: __props.disabled || __props.loading
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="mr-2" data-v-a43d6584${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "icon", {}, null, _push2, _parent2, _scopeId);
            _push2(`</span>${ssrInterpolate(__props.label)} `);
            ssrRenderSlot(_ctx.$slots, "icon-right", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              createVNode("span", { class: "mr-2" }, [
                renderSlot(_ctx.$slots, "icon", {}, void 0, true)
              ]),
              createTextVNode(toDisplayString(__props.label) + " ", 1),
              renderSlot(_ctx.$slots, "icon-right", {}, void 0, true)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/UIButton.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const UIButton = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a43d6584"]]);

export { UIButton as U };
//# sourceMappingURL=UIButton-BaUMxFHy.mjs.map
