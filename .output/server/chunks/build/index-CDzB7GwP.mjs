import { ref, computed, mergeProps, withCtx, createTextVNode, createVNode, unref, isRef, toDisplayString, createBlock, createCommentVNode, openBlock, Fragment, renderList, defineComponent, getCurrentInstance, inject, createElementBlock, normalizeClass, createElementVNode, renderSlot, resolveDynamicComponent, provide, normalizeStyle, useSSRContext } from 'vue';
import { w as withInstall, c as withNoopInstall, d as ElButton, _ as _export_sfc$1, b as buildProps, E as ElIcon, e as useLocale, f as definePropType, i as iconPropType } from './el-button-V0v0dsgs.mjs';
import { a as useNamespace } from './server.mjs';
import { E as ElInput } from './index-CGTgrJf6.mjs';
import { E as ElCard, a as ElTag } from './index-CNxtaOAI.mjs';
import { u as useOrderStore } from './orderStore-C9teFlBd.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { S as Spinner } from './Spinner-B8agEsyy.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import 'lodash-unified';
import '@vue/shared';
import '@ctrl/tinycolor';
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
import './typescript-D6L75muK.mjs';
import './aria-BNfy9QVD.mjs';
import './event-BZTOGHfp.mjs';
import './IconBase-KIBH9raF.mjs';

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
const __default__$2 = defineComponent({
  name: "ElBreadcrumb"
});
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  ...__default__$2,
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
var Breadcrumb = /* @__PURE__ */ _export_sfc$1(_sfc_main$3, [["__file", "breadcrumb.vue"]]);
const breadcrumbItemProps = buildProps({
  to: {
    type: definePropType([String, Object]),
    default: ""
  },
  replace: Boolean
});
const __default__$1 = defineComponent({
  name: "ElBreadcrumbItem"
});
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  ...__default__$1,
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
var BreadcrumbItem = /* @__PURE__ */ _export_sfc$1(_sfc_main$2, [["__file", "breadcrumb-item.vue"]]);
const ElBreadcrumb = withInstall(Breadcrumb, {
  BreadcrumbItem
});
const ElBreadcrumbItem = withNoopInstall(BreadcrumbItem);
const dividerProps = buildProps({
  direction: {
    type: String,
    values: ["horizontal", "vertical"],
    default: "horizontal"
  },
  contentPosition: {
    type: String,
    values: ["left", "center", "right"],
    default: "center"
  },
  borderStyle: {
    type: definePropType(String),
    default: "solid"
  }
});
const __default__ = defineComponent({
  name: "ElDivider"
});
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: dividerProps,
  setup(__props) {
    const props = __props;
    const ns = useNamespace("divider");
    const dividerStyle = computed(() => {
      return ns.cssVar({
        "border-style": props.borderStyle
      });
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([unref(ns).b(), unref(ns).m(_ctx.direction)]),
        style: normalizeStyle(unref(dividerStyle)),
        role: "separator"
      }, [
        _ctx.$slots.default && _ctx.direction !== "vertical" ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass([unref(ns).e("text"), unref(ns).is(_ctx.contentPosition)])
        }, [
          renderSlot(_ctx.$slots, "default")
        ], 2)) : createCommentVNode("v-if", true)
      ], 6);
    };
  }
});
var Divider = /* @__PURE__ */ _export_sfc$1(_sfc_main$1, [["__file", "divider.vue"]]);
const ElDivider = withInstall(Divider);
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const orderStore = useOrderStore();
    const search = ref("");
    ref([
      {
        id: "ORD-2024-001",
        placed: "January 15, 2024",
        status: "Delivered",
        total: 1299,
        items: [
          {
            name: "iPhone 15 Pro Max",
            details: "Midnight Black, 256GB \u2022 Qty: 1"
          }
        ],
        delivered: "1/17/2024"
      },
      {
        id: "ORD-2024-002",
        placed: "January 20, 2024",
        status: "Shipped",
        total: 2698,
        tracking: "1Z999AA1234567891",
        eta: "1/25/2024",
        items: [
          {
            name: "Galaxy S24 Ultra",
            details: "Titanium Gray, 512GB \u2022 Qty: 1"
          },
          {
            name: "iPhone 15",
            details: "Blue, 128GB \u2022 Qty: 1"
          }
        ]
      }
    ]);
    const filteredOrders = computed(
      () => orderStore.orders.filter(
        (order) => order.id.toLowerCase().includes(search.value.toLowerCase())
      )
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_breadcrumb = ElBreadcrumb;
      const _component_el_breadcrumb_item = ElBreadcrumbItem;
      const _component_el_input = ElInput;
      const _component_el_card = ElCard;
      const _component_el_tag = ElTag;
      const _component_el_divider = ElDivider;
      const _component_el_button = ElButton;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-6 w-full" }, _attrs))} data-v-8eee627b>`);
      _push(ssrRenderComponent(_component_el_breadcrumb, { separator: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_el_breadcrumb_item, { to: "/" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Home`);
                } else {
                  return [
                    createTextVNode("Home")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_breadcrumb_item, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`My Orders`);
                } else {
                  return [
                    createTextVNode("My Orders")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_el_breadcrumb_item, { to: "/" }, {
                default: withCtx(() => [
                  createTextVNode("Home")
                ]),
                _: 1
              }),
              createVNode(_component_el_breadcrumb_item, null, {
                default: withCtx(() => [
                  createTextVNode("My Orders")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="order-header flex justify-between items-end mb-4" data-v-8eee627b><div class="order-desc" data-v-8eee627b><h2 class="text-2xl font-semibold mt-4 mb-1 font-briscolade" data-v-8eee627b> My Orders </h2><p class="mb-6 text-gray-500" data-v-8eee627b>Track and manage your orders</p></div><div class="order-search" data-v-8eee627b>`);
      _push(ssrRenderComponent(_component_el_input, {
        modelValue: unref(search),
        "onUpdate:modelValue": ($event) => isRef(search) ? search.value = $event : null,
        placeholder: "Search orders...",
        "prefix-icon": "el-icon-search",
        class: "mb-4 w-96"
      }, null, _parent));
      _push(`</div></div>`);
      if (unref(orderStore).isLoading && !unref(orderStore).orders.length) {
        _push(ssrRenderComponent(Spinner, null, null, _parent));
      } else {
        _push(`<!--[-->`);
        ssrRenderList(unref(filteredOrders), (order) => {
          _push(`<div class="mb-6" data-v-8eee627b>`);
          _push(ssrRenderComponent(_component_el_card, { shadow: "never" }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div class="flex justify-between items-center" data-v-8eee627b${_scopeId}><div data-v-8eee627b${_scopeId}><div class="font-semibold" data-v-8eee627b${_scopeId}> Order ${ssrInterpolate(order.orderId)}</div><div class="text-gray-500 text-sm" data-v-8eee627b${_scopeId}> Placed on ${ssrInterpolate(order.createdAt)}</div></div><div class="text-right" data-v-8eee627b${_scopeId}>`);
                _push2(ssrRenderComponent(_component_el_tag, {
                  type: order.status === "Delivered" ? "success" : "info"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(order.status)}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(order.status), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(`<div class="mt-2 font-semibold" data-v-8eee627b${_scopeId}> $${ssrInterpolate(order.amount)}</div><div class="text-sm text-gray-500" data-v-8eee627b${_scopeId}>${ssrInterpolate(order.items.length)} item`);
                if (order.items.length > 1) {
                  _push2(`<span data-v-8eee627b${_scopeId}>s</span>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div></div></div>`);
                _push2(ssrRenderComponent(_component_el_divider, null, null, _parent2, _scopeId));
                _push2(`<!--[-->`);
                ssrRenderList(order.items, (item) => {
                  _push2(`<div class="mb-3" data-v-8eee627b${_scopeId}><div class="font-medium" data-v-8eee627b${_scopeId}>${ssrInterpolate(item.name)}</div><div class="text-sm text-gray-500" data-v-8eee627b${_scopeId}>${ssrInterpolate(item.variant)}, ${ssrInterpolate(item.bundle)} \u2022 Qty: ${ssrInterpolate(item.quantity)}</div></div>`);
                });
                _push2(`<!--]--><div class="flex justify-between items-end" data-v-8eee627b${_scopeId}>`);
                if (order.status === "Delivered") {
                  _push2(`<div data-v-8eee627b${_scopeId}> Delivered: 1/17/2024 </div>`);
                } else {
                  _push2(`<!---->`);
                }
                if (order.tracking) {
                  _push2(`<div class="text-sm text-gray-500 mb-2" data-v-8eee627b${_scopeId}><strong data-v-8eee627b${_scopeId}>Tracking:</strong> ${ssrInterpolate((order == null ? void 0 : order.tracking) || "N/A")}<br data-v-8eee627b${_scopeId}><strong data-v-8eee627b${_scopeId}>Estimated delivery:</strong> ${ssrInterpolate((order == null ? void 0 : order.eta) || "N/A")}</div>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`<div class="flex justify-end space-x-2" data-v-8eee627b${_scopeId}>`);
                _push2(ssrRenderComponent(_component_el_button, null, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`View Details`);
                    } else {
                      return [
                        createTextVNode("View Details")
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                if (order == null ? void 0 : order.tracking) {
                  _push2(ssrRenderComponent(_component_el_button, { type: "primary" }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`Track Package`);
                      } else {
                        return [
                          createTextVNode("Track Package")
                        ];
                      }
                    }),
                    _: 2
                  }, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
                if (order.status === "Delivered") {
                  _push2(ssrRenderComponent(_component_el_button, { type: "default" }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`Reorder`);
                      } else {
                        return [
                          createTextVNode("Reorder")
                        ];
                      }
                    }),
                    _: 2
                  }, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div></div>`);
              } else {
                return [
                  createVNode("div", { class: "flex justify-between items-center" }, [
                    createVNode("div", null, [
                      createVNode("div", { class: "font-semibold" }, " Order " + toDisplayString(order.orderId), 1),
                      createVNode("div", { class: "text-gray-500 text-sm" }, " Placed on " + toDisplayString(order.createdAt), 1)
                    ]),
                    createVNode("div", { class: "text-right" }, [
                      createVNode(_component_el_tag, {
                        type: order.status === "Delivered" ? "success" : "info"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(order.status), 1)
                        ]),
                        _: 2
                      }, 1032, ["type"]),
                      createVNode("div", { class: "mt-2 font-semibold" }, " $" + toDisplayString(order.amount), 1),
                      createVNode("div", { class: "text-sm text-gray-500" }, [
                        createTextVNode(toDisplayString(order.items.length) + " item", 1),
                        order.items.length > 1 ? (openBlock(), createBlock("span", { key: 0 }, "s")) : createCommentVNode("", true)
                      ])
                    ])
                  ]),
                  createVNode(_component_el_divider),
                  (openBlock(true), createBlock(Fragment, null, renderList(order.items, (item) => {
                    return openBlock(), createBlock("div", {
                      key: item.id,
                      class: "mb-3"
                    }, [
                      createVNode("div", { class: "font-medium" }, toDisplayString(item.name), 1),
                      createVNode("div", { class: "text-sm text-gray-500" }, toDisplayString(item.variant) + ", " + toDisplayString(item.bundle) + " \u2022 Qty: " + toDisplayString(item.quantity), 1)
                    ]);
                  }), 128)),
                  createVNode("div", { class: "flex justify-between items-end" }, [
                    order.status === "Delivered" ? (openBlock(), createBlock("div", { key: 0 }, " Delivered: 1/17/2024 ")) : createCommentVNode("", true),
                    order.tracking ? (openBlock(), createBlock("div", {
                      key: 1,
                      class: "text-sm text-gray-500 mb-2"
                    }, [
                      createVNode("strong", null, "Tracking:"),
                      createTextVNode(" " + toDisplayString((order == null ? void 0 : order.tracking) || "N/A"), 1),
                      createVNode("br"),
                      createVNode("strong", null, "Estimated delivery:"),
                      createTextVNode(" " + toDisplayString((order == null ? void 0 : order.eta) || "N/A"), 1)
                    ])) : createCommentVNode("", true),
                    createVNode("div", { class: "flex justify-end space-x-2" }, [
                      createVNode(_component_el_button, null, {
                        default: withCtx(() => [
                          createTextVNode("View Details")
                        ]),
                        _: 1
                      }),
                      (order == null ? void 0 : order.tracking) ? (openBlock(), createBlock(_component_el_button, {
                        key: 0,
                        type: "primary"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Track Package")
                        ]),
                        _: 1
                      })) : createCommentVNode("", true),
                      order.status === "Delivered" ? (openBlock(), createBlock(_component_el_button, {
                        key: 1,
                        type: "default"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Reorder")
                        ]),
                        _: 1
                      })) : createCommentVNode("", true)
                    ])
                  ])
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div>`);
        });
        _push(`<!--]-->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/orders/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-8eee627b"]]);

export { index as default };
//# sourceMappingURL=index-CDzB7GwP.mjs.map
