import { defineComponent, getCurrentInstance, inject, ref, createElementBlock, openBlock, normalizeClass, unref, createElementVNode, createBlock, renderSlot, withCtx, resolveDynamicComponent, toDisplayString, provide } from 'vue';
import { w as withInstall, v as withNoopInstall, _ as _export_sfc, j as buildProps, a as ElIcon, k as useLocale, n as definePropType, o as iconPropType } from './el-button-etDYgHTt.mjs';
import { h as useNamespace } from './server.mjs';

const breadcrumbKey = Symbol("breadcrumbKey");
const breadcrumbProps = buildProps({
  separator: {
    type: String,
    default: "/"
  },
  separatorIcon: {
    type: iconPropType
  }
});
const __default__$1 = defineComponent({
  name: "ElBreadcrumb"
});
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  ...__default__$1,
  props: breadcrumbProps,
  setup(__props) {
    const props = __props;
    const { t } = useLocale();
    const ns = useNamespace("breadcrumb");
    const breadcrumb = ref();
    provide(breadcrumbKey, props);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref_key: "breadcrumb",
        ref: breadcrumb,
        class: normalizeClass(unref(ns).b()),
        "aria-label": unref(t)("el.breadcrumb.label"),
        role: "navigation"
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 10, ["aria-label"]);
    };
  }
});
var Breadcrumb = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__file", "breadcrumb.vue"]]);
const breadcrumbItemProps = buildProps({
  to: {
    type: definePropType([String, Object]),
    default: ""
  },
  replace: Boolean
});
const __default__ = defineComponent({
  name: "ElBreadcrumbItem"
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: breadcrumbItemProps,
  setup(__props) {
    const props = __props;
    const instance = getCurrentInstance();
    const breadcrumbContext = inject(breadcrumbKey, void 0);
    const ns = useNamespace("breadcrumb");
    const router = instance.appContext.config.globalProperties.$router;
    const link = ref();
    const onClick = () => {
      if (!props.to || !router)
        return;
      props.replace ? router.replace(props.to) : router.push(props.to);
    };
    return (_ctx, _cache) => {
      var _a, _b;
      return openBlock(), createElementBlock("span", {
        class: normalizeClass(unref(ns).e("item"))
      }, [
        createElementVNode("span", {
          ref_key: "link",
          ref: link,
          class: normalizeClass([unref(ns).e("inner"), unref(ns).is("link", !!_ctx.to)]),
          role: "link",
          onClick
        }, [
          renderSlot(_ctx.$slots, "default")
        ], 2),
        ((_a = unref(breadcrumbContext)) == null ? void 0 : _a.separatorIcon) ? (openBlock(), createBlock(unref(ElIcon), {
          key: 0,
          class: normalizeClass(unref(ns).e("separator"))
        }, {
          default: withCtx(() => [
            (openBlock(), createBlock(resolveDynamicComponent(unref(breadcrumbContext).separatorIcon)))
          ]),
          _: 1
        }, 8, ["class"])) : (openBlock(), createElementBlock("span", {
          key: 1,
          class: normalizeClass(unref(ns).e("separator")),
          role: "presentation"
        }, toDisplayString((_b = unref(breadcrumbContext)) == null ? void 0 : _b.separator), 3))
      ], 2);
    };
  }
});
var BreadcrumbItem = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "breadcrumb-item.vue"]]);
const ElBreadcrumb = withInstall(Breadcrumb, {
  BreadcrumbItem
});
const ElBreadcrumbItem = withNoopInstall(BreadcrumbItem);

export { ElBreadcrumb as E, ElBreadcrumbItem as a };
//# sourceMappingURL=index-D2pPoUN4.mjs.map
