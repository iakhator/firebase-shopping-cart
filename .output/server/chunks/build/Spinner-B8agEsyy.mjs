import { I as IconBase } from './IconBase-KIBH9raF.mjs';
import { resolveComponent, mergeProps, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main = {
  components: {
    IconBase
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_icon_base = resolveComponent("icon-base");
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "el-loading-mask",
    style: {}
  }, _attrs))} data-v-9d7fde91><div class="el-loading-spinner" data-v-9d7fde91>`);
  _push(ssrRenderComponent(_component_icon_base, {
    viewBox: "0 0 50 50",
    width: "20",
    height: "20",
    fill: "none",
    class: "circular"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<circle class="path" cx="25" cy="25" r="12" fill="none" data-v-9d7fde91${_scopeId}></circle>`);
      } else {
        return [
          createVNode("circle", {
            class: "path",
            cx: "25",
            cy: "25",
            r: "12",
            fill: "none"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icons/Spinner.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Spinner = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-9d7fde91"]]);

export { Spinner as S };
//# sourceMappingURL=Spinner-B8agEsyy.mjs.map
