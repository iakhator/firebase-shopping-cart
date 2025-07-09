import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderSlot } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main = {
  props: {
    width: {
      type: [Number, String],
      default: 18
    },
    height: {
      type: [Number, String],
      default: 18
    },
    iconFill: {
      type: String,
      default: "fillColor"
    },
    iconStroke: {
      type: String,
      default: "strokeColor"
    },
    viewBox: {
      type: String,
      default: "0 0 129 129"
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: $props.width,
    height: $props.height,
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: $props.viewBox
  }, _attrs))}><g${ssrRenderAttr("fill", $props.iconFill)}${ssrRenderAttr("stroke", $props.iconStroke)}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</g></svg>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icons/IconBase.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const IconBase = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { IconBase as I };
//# sourceMappingURL=IconBase-KIBH9raF.mjs.map
