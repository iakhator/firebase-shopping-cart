import { E as ElRow, r as rowContextKey } from './index-B0JEEsKt.mjs';
import { ref, computed, mergeProps, withCtx, unref, createVNode, isRef, createBlock, createCommentVNode, openBlock, createTextVNode, Fragment, renderList, toDisplayString, defineComponent, inject, resolveDynamicComponent, normalizeStyle, normalizeClass, renderSlot, useSSRContext } from 'vue';
import { w as withInstall, E as ElIcon, s as shopping_cart_default, z as star_default, _ as _export_sfc$1, C as minus_default, F as plus_default, b as buildProps, f as definePropType } from './el-button-V0v0dsgs.mjs';
import { m as mutable } from './typescript-D6L75muK.mjs';
import { c as useCartStore, u as useRoute, a as useNamespace, p as isNumber } from './server.mjs';
import { isObject } from '@vue/shared';
import { E as ElTabs, a as ElTabPane } from './el-tab-pane-4H9kkw0S.mjs';
import { c as capitalize } from './index-qUEO24gb.mjs';
import { ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrRenderAttrs, ssrRenderClass, ssrRenderStyle } from 'vue/server-renderer';
import { U as UIButton } from './UIButton-CG1Ax5gj.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import { u as useProductStore } from './productStore-ClJ8f1eA.mjs';
import { u as useCurrency } from './useCurrency-jRJRFhrU.mjs';
import 'lodash-unified';
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
import './vnode-tcWefJcs.mjs';
import './event-BZTOGHfp.mjs';

const colProps = buildProps({
  tag: {
    type: String,
    default: "div"
  },
  span: {
    type: Number,
    default: 24
  },
  offset: {
    type: Number,
    default: 0
  },
  pull: {
    type: Number,
    default: 0
  },
  push: {
    type: Number,
    default: 0
  },
  xs: {
    type: definePropType([Number, Object]),
    default: () => mutable({})
  },
  sm: {
    type: definePropType([Number, Object]),
    default: () => mutable({})
  },
  md: {
    type: definePropType([Number, Object]),
    default: () => mutable({})
  },
  lg: {
    type: definePropType([Number, Object]),
    default: () => mutable({})
  },
  xl: {
    type: definePropType([Number, Object]),
    default: () => mutable({})
  }
});
const __default__ = defineComponent({
  name: "ElCol"
});
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: colProps,
  setup(__props) {
    const props = __props;
    const { gutter } = inject(rowContextKey, { gutter: computed(() => 0) });
    const ns = useNamespace("col");
    const style = computed(() => {
      const styles = {};
      if (gutter.value) {
        styles.paddingLeft = styles.paddingRight = `${gutter.value / 2}px`;
      }
      return styles;
    });
    const colKls = computed(() => {
      const classes = [];
      const pos = ["span", "offset", "pull", "push"];
      pos.forEach((prop) => {
        const size = props[prop];
        if (isNumber(size)) {
          if (prop === "span")
            classes.push(ns.b(`${props[prop]}`));
          else if (size > 0)
            classes.push(ns.b(`${prop}-${props[prop]}`));
        }
      });
      const sizes = ["xs", "sm", "md", "lg", "xl"];
      sizes.forEach((size) => {
        if (isNumber(props[size])) {
          classes.push(ns.b(`${size}-${props[size]}`));
        } else if (isObject(props[size])) {
          Object.entries(props[size]).forEach(([prop, sizeProp]) => {
            classes.push(prop !== "span" ? ns.b(`${size}-${prop}-${sizeProp}`) : ns.b(`${size}-${sizeProp}`));
          });
        }
      });
      if (gutter.value) {
        classes.push(ns.is("guttered"));
      }
      return [ns.b(), classes];
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(resolveDynamicComponent(_ctx.tag), {
        class: normalizeClass(unref(colKls)),
        style: normalizeStyle(unref(style))
      }, {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
      }, 8, ["class", "style"]);
    };
  }
});
var Col = /* @__PURE__ */ _export_sfc$1(_sfc_main$3, [["__file", "col.vue"]]);
const ElCol = withInstall(Col);
const _sfc_main$2 = {
  __name: "UICounter",
  __ssrInlineRender: true,
  props: {
    modelValue: Number,
    min: { type: Number, default: 1 },
    readonly: { type: Boolean, default: false }
  },
  emits: ["update:modelValue", "increment", "decrement"],
  setup(__props, { emit: __emit }) {
    ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_icon = ElIcon;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "counter" }, _attrs))} data-v-ff8c4a49><div${ssrRenderAttr("aria-disabled", __props.modelValue <= __props.min)} class="btn" role="button" tabindex="0" data-v-ff8c4a49>`);
      _push(ssrRenderComponent(_component_el_icon, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(minus_default), null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(minus_default))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><span${ssrRenderAttr("contenteditable", !__props.readonly)} class="${ssrRenderClass([{ readonly: __props.readonly }, "count"])}" data-v-ff8c4a49>${ssrInterpolate(__props.modelValue)}</span><div class="btn" role="button" tabindex="0" data-v-ff8c4a49>`);
      _push(ssrRenderComponent(_component_el_icon, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(plus_default), null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(plus_default))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/UICounter.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const UICounter = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-ff8c4a49"]]);
const _sfc_main$1 = {
  __name: "UIColorBox",
  __ssrInlineRender: true,
  props: {
    variants: {
      type: Object,
      required: true
    },
    activeVariant: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ["update:activeVariant"],
  setup(__props, { emit: __emit }) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "box-container",
        role: "radiogroup",
        "aria-label": "Color Variants"
      }, _attrs))} data-v-b006cce7><!--[-->`);
      ssrRenderList(__props.variants, (variant, index) => {
        _push(`<div class="${ssrRenderClass([{ active: __props.activeVariant.color === variant.color }, "box"])}" style="${ssrRenderStyle({ backgroundColor: variant.code || variant.color })}" role="radio"${ssrRenderAttr("aria-checked", __props.activeVariant.color === variant.color)}${ssrRenderAttr("tabindex", __props.activeVariant.color === variant.color ? "0" : "-1")} data-v-b006cce7></div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/UIColorBox.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const UIColorBox = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-b006cce7"]]);
const _sfc_main = {
  __name: "[itemId]",
  __ssrInlineRender: true,
  setup(__props) {
    const cartStore = useCartStore();
    const productStore = useProductStore();
    const route = useRoute();
    const { toUSD } = useCurrency();
    const itemBundle = ref({});
    const selectedVariant = ref({});
    const qty = ref(1);
    let errorMessage = ref("");
    ref(true);
    const productId = route.params.itemId;
    const item = computed(() => productStore.product);
    const itemPrice = computed(() => itemBundle.value.price * qty.value);
    const itemImageUrl = computed(
      () => {
        var _a;
        return selectedVariant.value ? (_a = selectedVariant.value) == null ? void 0 : _a.imageUrl : "";
      }
    );
    productStore.getProduct(productId);
    function handleBundleChange(item2) {
      itemBundle.value = item2;
    }
    function addToWhishlist() {
      console.log("Added to wishlist");
    }
    async function updateCart() {
      var _a, _b;
      if (!selectedVariant.value) {
        errorMessage.value = "Please select a color";
        return;
      }
      const product = {
        productId: item.value.id,
        quantity: qty.value,
        originalPrice: (_a = itemBundle.value) == null ? void 0 : _a.price,
        name: (_b = item.value) == null ? void 0 : _b.name,
        price: itemPrice.value || item.value.price,
        variant: selectedVariant.value,
        bundle: `${itemBundle.value.ram}/${itemBundle.value.storage}`,
        imageUrl: item.value.imageUrl || ""
      };
      cartStore.addToCart(product);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_row = ElRow;
      const _component_el_col = ElCol;
      const _component_el_icon = ElIcon;
      const _component_el_tabs = ElTabs;
      const _component_el_tab_pane = ElTabPane;
      _push(ssrRenderComponent(_component_el_row, mergeProps({ class: "product__grid product" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_el_col, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_el_row, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_el_col, { md: 12 }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="item-image" data-v-3d820ec3${_scopeId4}><img${ssrRenderAttr("src", unref(itemImageUrl))} class="img-fluid \${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle" alt data-v-3d820ec3${_scopeId4}></div>`);
                            } else {
                              return [
                                createVNode("div", { class: "item-image" }, [
                                  createVNode("img", {
                                    src: unref(itemImageUrl),
                                    class: "img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle",
                                    alt: ""
                                  }, null, 8, ["src"])
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_el_col, {
                          md: 12,
                          class: "item__contents"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            var _a, _b, _c, _d;
                            if (_push5) {
                              _push5(`<div class="item__contents-head" data-v-3d820ec3${_scopeId4}><h3 class="capitalize item__contents-name" data-v-3d820ec3${_scopeId4}>${ssrInterpolate((_a = unref(item)) == null ? void 0 : _a.name)}</h3></div><div class="item__contents-quantity-price" data-v-3d820ec3${_scopeId4}><span class="item__contents-quantity-price" data-v-3d820ec3${_scopeId4}>${ssrInterpolate(unref(toUSD)(unref(itemPrice) || 0))}</span></div><div class="item__contents-description" data-v-3d820ec3${_scopeId4}><p class="item__contents-description" data-v-3d820ec3${_scopeId4}>${ssrInterpolate((_b = unref(item)) == null ? void 0 : _b.description)}</p></div><div class="variant" data-v-3d820ec3${_scopeId4}>`);
                              _push5(ssrRenderComponent(_component_el_col, { class: "item__contents-variant" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  var _a2, _b2;
                                  if (_push6) {
                                    if (unref(item) && ((_a2 = unref(item).bundles) == null ? void 0 : _a2.length) > 0) {
                                      _push6(`<div class="item__contents-bundle" data-v-3d820ec3${_scopeId5}><p class="item__contents-spec-variant" data-v-3d820ec3${_scopeId5}><span data-v-3d820ec3${_scopeId5}>Bundle Options </span>: 16GB/256GB </p><div class="item__contents-bundle-options" data-v-3d820ec3${_scopeId5}><!--[-->`);
                                      ssrRenderList(unref(item).bundles, (item2) => {
                                        _push6(ssrRenderComponent(unref(UIButton), {
                                          class: {
                                            "is-active": unref(itemBundle).id === item2.id
                                          },
                                          onClick: ($event) => handleBundleChange(item2),
                                          key: item2.id,
                                          label: `${item2 == null ? void 0 : item2.ram}/${item2 == null ? void 0 : item2.storage}`,
                                          variant: "transparent",
                                          size: "large"
                                        }, null, _parent6, _scopeId5));
                                      });
                                      _push6(`<!--]--></div></div>`);
                                    } else {
                                      _push6(`<!---->`);
                                    }
                                    _push6(`<div class="item__contents-variants" data-v-3d820ec3${_scopeId5}><p class="item__contents-spec-variant" data-v-3d820ec3${_scopeId5}><span data-v-3d820ec3${_scopeId5}>Color</span>: ${ssrInterpolate(("capitalize" in _ctx ? _ctx.capitalize : unref(capitalize))(unref(selectedVariant).color))}</p>`);
                                    _push6(ssrRenderComponent(unref(UIColorBox), {
                                      variants: unref(item).variant,
                                      activeVariant: unref(selectedVariant),
                                      "onUpdate:activeVariant": ($event) => selectedVariant.value = $event
                                    }, null, _parent6, _scopeId5));
                                    if (unref(errorMessage)) {
                                      _push6(`<p class="error el-tag--danger" data-v-3d820ec3${_scopeId5}>${ssrInterpolate(unref(errorMessage))}</p>`);
                                    } else {
                                      _push6(`<!---->`);
                                    }
                                    _push6(`</div><div class="item__contents-quantity" data-v-3d820ec3${_scopeId5}><p class="" data-v-3d820ec3${_scopeId5}><span data-v-3d820ec3${_scopeId5}>Quantity</span>:</p>`);
                                    _push6(ssrRenderComponent(unref(UICounter), {
                                      modelValue: unref(qty),
                                      "onUpdate:modelValue": ($event) => isRef(qty) ? qty.value = $event : null
                                    }, null, _parent6, _scopeId5));
                                    _push6(`</div>`);
                                  } else {
                                    return [
                                      unref(item) && ((_b2 = unref(item).bundles) == null ? void 0 : _b2.length) > 0 ? (openBlock(), createBlock("div", {
                                        key: 0,
                                        class: "item__contents-bundle"
                                      }, [
                                        createVNode("p", { class: "item__contents-spec-variant" }, [
                                          createVNode("span", null, "Bundle Options "),
                                          createTextVNode(": 16GB/256GB ")
                                        ]),
                                        createVNode("div", { class: "item__contents-bundle-options" }, [
                                          (openBlock(true), createBlock(Fragment, null, renderList(unref(item).bundles, (item2) => {
                                            return openBlock(), createBlock(unref(UIButton), {
                                              class: {
                                                "is-active": unref(itemBundle).id === item2.id
                                              },
                                              onClick: ($event) => handleBundleChange(item2),
                                              key: item2.id,
                                              label: `${item2 == null ? void 0 : item2.ram}/${item2 == null ? void 0 : item2.storage}`,
                                              variant: "transparent",
                                              size: "large"
                                            }, null, 8, ["class", "onClick", "label"]);
                                          }), 128))
                                        ])
                                      ])) : createCommentVNode("", true),
                                      createVNode("div", { class: "item__contents-variants" }, [
                                        createVNode("p", { class: "item__contents-spec-variant" }, [
                                          createVNode("span", null, "Color"),
                                          createTextVNode(": " + toDisplayString(("capitalize" in _ctx ? _ctx.capitalize : unref(capitalize))(unref(selectedVariant).color)), 1)
                                        ]),
                                        createVNode(unref(UIColorBox), {
                                          variants: unref(item).variant,
                                          activeVariant: unref(selectedVariant),
                                          "onUpdate:activeVariant": ($event) => selectedVariant.value = $event
                                        }, null, 8, ["variants", "activeVariant", "onUpdate:activeVariant"]),
                                        unref(errorMessage) ? (openBlock(), createBlock("p", {
                                          key: 0,
                                          class: "error el-tag--danger"
                                        }, toDisplayString(unref(errorMessage)), 1)) : createCommentVNode("", true)
                                      ]),
                                      createVNode("div", { class: "item__contents-quantity" }, [
                                        createVNode("p", { class: "" }, [
                                          createVNode("span", null, "Quantity"),
                                          createTextVNode(":")
                                        ]),
                                        createVNode(unref(UICounter), {
                                          modelValue: unref(qty),
                                          "onUpdate:modelValue": ($event) => isRef(qty) ? qty.value = $event : null
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`</div><div class="action-qty" data-v-3d820ec3${_scopeId4}>`);
                              _push5(ssrRenderComponent(unref(UIButton), {
                                size: "large",
                                class: "black flex-3",
                                onClick: updateCart,
                                label: "Add to cart"
                              }, {
                                icon: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_el_icon, { class: "mr-2" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(unref(shopping_cart_default), null, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(unref(shopping_cart_default))
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_el_icon, { class: "mr-2" }, {
                                        default: withCtx(() => [
                                          createVNode(unref(shopping_cart_default))
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(unref(UIButton), {
                                size: "large",
                                onClick: addToWhishlist,
                                variant: "secondary",
                                label: "Add to wishlist"
                              }, {
                                icon: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_el_icon, { class: "mr-2" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(unref(star_default), null, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(unref(star_default))
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_el_icon, { class: "mr-2" }, {
                                        default: withCtx(() => [
                                          createVNode(unref(star_default))
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`</div>`);
                            } else {
                              return [
                                createVNode("div", { class: "item__contents-head" }, [
                                  createVNode("h3", { class: "capitalize item__contents-name" }, toDisplayString((_c = unref(item)) == null ? void 0 : _c.name), 1)
                                ]),
                                createVNode("div", { class: "item__contents-quantity-price" }, [
                                  createVNode("span", { class: "item__contents-quantity-price" }, toDisplayString(unref(toUSD)(unref(itemPrice) || 0)), 1)
                                ]),
                                createVNode("div", { class: "item__contents-description" }, [
                                  createVNode("p", { class: "item__contents-description" }, toDisplayString((_d = unref(item)) == null ? void 0 : _d.description), 1)
                                ]),
                                createVNode("div", { class: "variant" }, [
                                  createVNode(_component_el_col, { class: "item__contents-variant" }, {
                                    default: withCtx(() => {
                                      var _a2;
                                      return [
                                        unref(item) && ((_a2 = unref(item).bundles) == null ? void 0 : _a2.length) > 0 ? (openBlock(), createBlock("div", {
                                          key: 0,
                                          class: "item__contents-bundle"
                                        }, [
                                          createVNode("p", { class: "item__contents-spec-variant" }, [
                                            createVNode("span", null, "Bundle Options "),
                                            createTextVNode(": 16GB/256GB ")
                                          ]),
                                          createVNode("div", { class: "item__contents-bundle-options" }, [
                                            (openBlock(true), createBlock(Fragment, null, renderList(unref(item).bundles, (item2) => {
                                              return openBlock(), createBlock(unref(UIButton), {
                                                class: {
                                                  "is-active": unref(itemBundle).id === item2.id
                                                },
                                                onClick: ($event) => handleBundleChange(item2),
                                                key: item2.id,
                                                label: `${item2 == null ? void 0 : item2.ram}/${item2 == null ? void 0 : item2.storage}`,
                                                variant: "transparent",
                                                size: "large"
                                              }, null, 8, ["class", "onClick", "label"]);
                                            }), 128))
                                          ])
                                        ])) : createCommentVNode("", true),
                                        createVNode("div", { class: "item__contents-variants" }, [
                                          createVNode("p", { class: "item__contents-spec-variant" }, [
                                            createVNode("span", null, "Color"),
                                            createTextVNode(": " + toDisplayString(("capitalize" in _ctx ? _ctx.capitalize : unref(capitalize))(unref(selectedVariant).color)), 1)
                                          ]),
                                          createVNode(unref(UIColorBox), {
                                            variants: unref(item).variant,
                                            activeVariant: unref(selectedVariant),
                                            "onUpdate:activeVariant": ($event) => selectedVariant.value = $event
                                          }, null, 8, ["variants", "activeVariant", "onUpdate:activeVariant"]),
                                          unref(errorMessage) ? (openBlock(), createBlock("p", {
                                            key: 0,
                                            class: "error el-tag--danger"
                                          }, toDisplayString(unref(errorMessage)), 1)) : createCommentVNode("", true)
                                        ]),
                                        createVNode("div", { class: "item__contents-quantity" }, [
                                          createVNode("p", { class: "" }, [
                                            createVNode("span", null, "Quantity"),
                                            createTextVNode(":")
                                          ]),
                                          createVNode(unref(UICounter), {
                                            modelValue: unref(qty),
                                            "onUpdate:modelValue": ($event) => isRef(qty) ? qty.value = $event : null
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ])
                                      ];
                                    }),
                                    _: 1
                                  })
                                ]),
                                createVNode("div", { class: "action-qty" }, [
                                  createVNode(unref(UIButton), {
                                    size: "large",
                                    class: "black flex-3",
                                    onClick: updateCart,
                                    label: "Add to cart"
                                  }, {
                                    icon: withCtx(() => [
                                      createVNode(_component_el_icon, { class: "mr-2" }, {
                                        default: withCtx(() => [
                                          createVNode(unref(shopping_cart_default))
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(unref(UIButton), {
                                    size: "large",
                                    onClick: addToWhishlist,
                                    variant: "secondary",
                                    label: "Add to wishlist"
                                  }, {
                                    icon: withCtx(() => [
                                      createVNode(_component_el_icon, { class: "mr-2" }, {
                                        default: withCtx(() => [
                                          createVNode(unref(star_default))
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_el_col, { md: 12 }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "item-image" }, [
                                createVNode("img", {
                                  src: unref(itemImageUrl),
                                  class: "img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle",
                                  alt: ""
                                }, null, 8, ["src"])
                              ])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_el_col, {
                            md: 12,
                            class: "item__contents"
                          }, {
                            default: withCtx(() => {
                              var _a, _b;
                              return [
                                createVNode("div", { class: "item__contents-head" }, [
                                  createVNode("h3", { class: "capitalize item__contents-name" }, toDisplayString((_a = unref(item)) == null ? void 0 : _a.name), 1)
                                ]),
                                createVNode("div", { class: "item__contents-quantity-price" }, [
                                  createVNode("span", { class: "item__contents-quantity-price" }, toDisplayString(unref(toUSD)(unref(itemPrice) || 0)), 1)
                                ]),
                                createVNode("div", { class: "item__contents-description" }, [
                                  createVNode("p", { class: "item__contents-description" }, toDisplayString((_b = unref(item)) == null ? void 0 : _b.description), 1)
                                ]),
                                createVNode("div", { class: "variant" }, [
                                  createVNode(_component_el_col, { class: "item__contents-variant" }, {
                                    default: withCtx(() => {
                                      var _a2;
                                      return [
                                        unref(item) && ((_a2 = unref(item).bundles) == null ? void 0 : _a2.length) > 0 ? (openBlock(), createBlock("div", {
                                          key: 0,
                                          class: "item__contents-bundle"
                                        }, [
                                          createVNode("p", { class: "item__contents-spec-variant" }, [
                                            createVNode("span", null, "Bundle Options "),
                                            createTextVNode(": 16GB/256GB ")
                                          ]),
                                          createVNode("div", { class: "item__contents-bundle-options" }, [
                                            (openBlock(true), createBlock(Fragment, null, renderList(unref(item).bundles, (item2) => {
                                              return openBlock(), createBlock(unref(UIButton), {
                                                class: {
                                                  "is-active": unref(itemBundle).id === item2.id
                                                },
                                                onClick: ($event) => handleBundleChange(item2),
                                                key: item2.id,
                                                label: `${item2 == null ? void 0 : item2.ram}/${item2 == null ? void 0 : item2.storage}`,
                                                variant: "transparent",
                                                size: "large"
                                              }, null, 8, ["class", "onClick", "label"]);
                                            }), 128))
                                          ])
                                        ])) : createCommentVNode("", true),
                                        createVNode("div", { class: "item__contents-variants" }, [
                                          createVNode("p", { class: "item__contents-spec-variant" }, [
                                            createVNode("span", null, "Color"),
                                            createTextVNode(": " + toDisplayString(("capitalize" in _ctx ? _ctx.capitalize : unref(capitalize))(unref(selectedVariant).color)), 1)
                                          ]),
                                          createVNode(unref(UIColorBox), {
                                            variants: unref(item).variant,
                                            activeVariant: unref(selectedVariant),
                                            "onUpdate:activeVariant": ($event) => selectedVariant.value = $event
                                          }, null, 8, ["variants", "activeVariant", "onUpdate:activeVariant"]),
                                          unref(errorMessage) ? (openBlock(), createBlock("p", {
                                            key: 0,
                                            class: "error el-tag--danger"
                                          }, toDisplayString(unref(errorMessage)), 1)) : createCommentVNode("", true)
                                        ]),
                                        createVNode("div", { class: "item__contents-quantity" }, [
                                          createVNode("p", { class: "" }, [
                                            createVNode("span", null, "Quantity"),
                                            createTextVNode(":")
                                          ]),
                                          createVNode(unref(UICounter), {
                                            modelValue: unref(qty),
                                            "onUpdate:modelValue": ($event) => isRef(qty) ? qty.value = $event : null
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ])
                                      ];
                                    }),
                                    _: 1
                                  })
                                ]),
                                createVNode("div", { class: "action-qty" }, [
                                  createVNode(unref(UIButton), {
                                    size: "large",
                                    class: "black flex-3",
                                    onClick: updateCart,
                                    label: "Add to cart"
                                  }, {
                                    icon: withCtx(() => [
                                      createVNode(_component_el_icon, { class: "mr-2" }, {
                                        default: withCtx(() => [
                                          createVNode(unref(shopping_cart_default))
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(unref(UIButton), {
                                    size: "large",
                                    onClick: addToWhishlist,
                                    variant: "secondary",
                                    label: "Add to wishlist"
                                  }, {
                                    icon: withCtx(() => [
                                      createVNode(_component_el_icon, { class: "mr-2" }, {
                                        default: withCtx(() => [
                                          createVNode(unref(star_default))
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ])
                              ];
                            }),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_el_row, null, {
                      default: withCtx(() => [
                        createVNode(_component_el_col, { md: 12 }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "item-image" }, [
                              createVNode("img", {
                                src: unref(itemImageUrl),
                                class: "img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle",
                                alt: ""
                              }, null, 8, ["src"])
                            ])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_el_col, {
                          md: 12,
                          class: "item__contents"
                        }, {
                          default: withCtx(() => {
                            var _a, _b;
                            return [
                              createVNode("div", { class: "item__contents-head" }, [
                                createVNode("h3", { class: "capitalize item__contents-name" }, toDisplayString((_a = unref(item)) == null ? void 0 : _a.name), 1)
                              ]),
                              createVNode("div", { class: "item__contents-quantity-price" }, [
                                createVNode("span", { class: "item__contents-quantity-price" }, toDisplayString(unref(toUSD)(unref(itemPrice) || 0)), 1)
                              ]),
                              createVNode("div", { class: "item__contents-description" }, [
                                createVNode("p", { class: "item__contents-description" }, toDisplayString((_b = unref(item)) == null ? void 0 : _b.description), 1)
                              ]),
                              createVNode("div", { class: "variant" }, [
                                createVNode(_component_el_col, { class: "item__contents-variant" }, {
                                  default: withCtx(() => {
                                    var _a2;
                                    return [
                                      unref(item) && ((_a2 = unref(item).bundles) == null ? void 0 : _a2.length) > 0 ? (openBlock(), createBlock("div", {
                                        key: 0,
                                        class: "item__contents-bundle"
                                      }, [
                                        createVNode("p", { class: "item__contents-spec-variant" }, [
                                          createVNode("span", null, "Bundle Options "),
                                          createTextVNode(": 16GB/256GB ")
                                        ]),
                                        createVNode("div", { class: "item__contents-bundle-options" }, [
                                          (openBlock(true), createBlock(Fragment, null, renderList(unref(item).bundles, (item2) => {
                                            return openBlock(), createBlock(unref(UIButton), {
                                              class: {
                                                "is-active": unref(itemBundle).id === item2.id
                                              },
                                              onClick: ($event) => handleBundleChange(item2),
                                              key: item2.id,
                                              label: `${item2 == null ? void 0 : item2.ram}/${item2 == null ? void 0 : item2.storage}`,
                                              variant: "transparent",
                                              size: "large"
                                            }, null, 8, ["class", "onClick", "label"]);
                                          }), 128))
                                        ])
                                      ])) : createCommentVNode("", true),
                                      createVNode("div", { class: "item__contents-variants" }, [
                                        createVNode("p", { class: "item__contents-spec-variant" }, [
                                          createVNode("span", null, "Color"),
                                          createTextVNode(": " + toDisplayString(("capitalize" in _ctx ? _ctx.capitalize : unref(capitalize))(unref(selectedVariant).color)), 1)
                                        ]),
                                        createVNode(unref(UIColorBox), {
                                          variants: unref(item).variant,
                                          activeVariant: unref(selectedVariant),
                                          "onUpdate:activeVariant": ($event) => selectedVariant.value = $event
                                        }, null, 8, ["variants", "activeVariant", "onUpdate:activeVariant"]),
                                        unref(errorMessage) ? (openBlock(), createBlock("p", {
                                          key: 0,
                                          class: "error el-tag--danger"
                                        }, toDisplayString(unref(errorMessage)), 1)) : createCommentVNode("", true)
                                      ]),
                                      createVNode("div", { class: "item__contents-quantity" }, [
                                        createVNode("p", { class: "" }, [
                                          createVNode("span", null, "Quantity"),
                                          createTextVNode(":")
                                        ]),
                                        createVNode(unref(UICounter), {
                                          modelValue: unref(qty),
                                          "onUpdate:modelValue": ($event) => isRef(qty) ? qty.value = $event : null
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ])
                                    ];
                                  }),
                                  _: 1
                                })
                              ]),
                              createVNode("div", { class: "action-qty" }, [
                                createVNode(unref(UIButton), {
                                  size: "large",
                                  class: "black flex-3",
                                  onClick: updateCart,
                                  label: "Add to cart"
                                }, {
                                  icon: withCtx(() => [
                                    createVNode(_component_el_icon, { class: "mr-2" }, {
                                      default: withCtx(() => [
                                        createVNode(unref(shopping_cart_default))
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(UIButton), {
                                  size: "large",
                                  onClick: addToWhishlist,
                                  variant: "secondary",
                                  label: "Add to wishlist"
                                }, {
                                  icon: withCtx(() => [
                                    createVNode(_component_el_icon, { class: "mr-2" }, {
                                      default: withCtx(() => [
                                        createVNode(unref(star_default))
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ])
                            ];
                          }),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_col, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_el_row, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_el_col, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_el_tabs, { class: "el-card-options" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_el_tab_pane, { label: "Product Details" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<div class="item__contents-specifications" data-v-3d820ec3${_scopeId6}><!--[-->`);
                                          ssrRenderList(unref(item).specification, (specification, key) => {
                                            _push7(`<p data-v-3d820ec3${_scopeId6}><span class="item__contents-spec" data-v-3d820ec3${_scopeId6}>${ssrInterpolate(key)} :</span> ${ssrInterpolate(specification)}</p>`);
                                          });
                                          _push7(`<!--]--></div>`);
                                        } else {
                                          return [
                                            createVNode("div", { class: "item__contents-specifications" }, [
                                              (openBlock(true), createBlock(Fragment, null, renderList(unref(item).specification, (specification, key) => {
                                                return openBlock(), createBlock("p", { key }, [
                                                  createVNode("span", { class: "item__contents-spec" }, toDisplayString(key) + " :", 1),
                                                  createTextVNode(" " + toDisplayString(specification), 1)
                                                ]);
                                              }), 128))
                                            ])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_el_tab_pane, { label: "Ratings/Review" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`Ratings/Review`);
                                        } else {
                                          return [
                                            createTextVNode("Ratings/Review")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_el_tab_pane, { label: "FAQ" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`FAQ`);
                                        } else {
                                          return [
                                            createTextVNode("FAQ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_el_tab_pane, { label: "Product Details" }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "item__contents-specifications" }, [
                                            (openBlock(true), createBlock(Fragment, null, renderList(unref(item).specification, (specification, key) => {
                                              return openBlock(), createBlock("p", { key }, [
                                                createVNode("span", { class: "item__contents-spec" }, toDisplayString(key) + " :", 1),
                                                createTextVNode(" " + toDisplayString(specification), 1)
                                              ]);
                                            }), 128))
                                          ])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_el_tab_pane, { label: "Ratings/Review" }, {
                                        default: withCtx(() => [
                                          createTextVNode("Ratings/Review")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_el_tab_pane, { label: "FAQ" }, {
                                        default: withCtx(() => [
                                          createTextVNode("FAQ")
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_el_tabs, { class: "el-card-options" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_el_tab_pane, { label: "Product Details" }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "item__contents-specifications" }, [
                                          (openBlock(true), createBlock(Fragment, null, renderList(unref(item).specification, (specification, key) => {
                                            return openBlock(), createBlock("p", { key }, [
                                              createVNode("span", { class: "item__contents-spec" }, toDisplayString(key) + " :", 1),
                                              createTextVNode(" " + toDisplayString(specification), 1)
                                            ]);
                                          }), 128))
                                        ])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_el_tab_pane, { label: "Ratings/Review" }, {
                                      default: withCtx(() => [
                                        createTextVNode("Ratings/Review")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_el_tab_pane, { label: "FAQ" }, {
                                      default: withCtx(() => [
                                        createTextVNode("FAQ")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_el_col, null, {
                            default: withCtx(() => [
                              createVNode(_component_el_tabs, { class: "el-card-options" }, {
                                default: withCtx(() => [
                                  createVNode(_component_el_tab_pane, { label: "Product Details" }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "item__contents-specifications" }, [
                                        (openBlock(true), createBlock(Fragment, null, renderList(unref(item).specification, (specification, key) => {
                                          return openBlock(), createBlock("p", { key }, [
                                            createVNode("span", { class: "item__contents-spec" }, toDisplayString(key) + " :", 1),
                                            createTextVNode(" " + toDisplayString(specification), 1)
                                          ]);
                                        }), 128))
                                      ])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_el_tab_pane, { label: "Ratings/Review" }, {
                                    default: withCtx(() => [
                                      createTextVNode("Ratings/Review")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_el_tab_pane, { label: "FAQ" }, {
                                    default: withCtx(() => [
                                      createTextVNode("FAQ")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_el_row, null, {
                      default: withCtx(() => [
                        createVNode(_component_el_col, null, {
                          default: withCtx(() => [
                            createVNode(_component_el_tabs, { class: "el-card-options" }, {
                              default: withCtx(() => [
                                createVNode(_component_el_tab_pane, { label: "Product Details" }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "item__contents-specifications" }, [
                                      (openBlock(true), createBlock(Fragment, null, renderList(unref(item).specification, (specification, key) => {
                                        return openBlock(), createBlock("p", { key }, [
                                          createVNode("span", { class: "item__contents-spec" }, toDisplayString(key) + " :", 1),
                                          createTextVNode(" " + toDisplayString(specification), 1)
                                        ]);
                                      }), 128))
                                    ])
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_el_tab_pane, { label: "Ratings/Review" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Ratings/Review")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_el_tab_pane, { label: "FAQ" }, {
                                  default: withCtx(() => [
                                    createTextVNode("FAQ")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_el_col, null, {
                default: withCtx(() => [
                  createVNode(_component_el_row, null, {
                    default: withCtx(() => [
                      createVNode(_component_el_col, { md: 12 }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "item-image" }, [
                            createVNode("img", {
                              src: unref(itemImageUrl),
                              class: "img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle",
                              alt: ""
                            }, null, 8, ["src"])
                          ])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_el_col, {
                        md: 12,
                        class: "item__contents"
                      }, {
                        default: withCtx(() => {
                          var _a, _b;
                          return [
                            createVNode("div", { class: "item__contents-head" }, [
                              createVNode("h3", { class: "capitalize item__contents-name" }, toDisplayString((_a = unref(item)) == null ? void 0 : _a.name), 1)
                            ]),
                            createVNode("div", { class: "item__contents-quantity-price" }, [
                              createVNode("span", { class: "item__contents-quantity-price" }, toDisplayString(unref(toUSD)(unref(itemPrice) || 0)), 1)
                            ]),
                            createVNode("div", { class: "item__contents-description" }, [
                              createVNode("p", { class: "item__contents-description" }, toDisplayString((_b = unref(item)) == null ? void 0 : _b.description), 1)
                            ]),
                            createVNode("div", { class: "variant" }, [
                              createVNode(_component_el_col, { class: "item__contents-variant" }, {
                                default: withCtx(() => {
                                  var _a2;
                                  return [
                                    unref(item) && ((_a2 = unref(item).bundles) == null ? void 0 : _a2.length) > 0 ? (openBlock(), createBlock("div", {
                                      key: 0,
                                      class: "item__contents-bundle"
                                    }, [
                                      createVNode("p", { class: "item__contents-spec-variant" }, [
                                        createVNode("span", null, "Bundle Options "),
                                        createTextVNode(": 16GB/256GB ")
                                      ]),
                                      createVNode("div", { class: "item__contents-bundle-options" }, [
                                        (openBlock(true), createBlock(Fragment, null, renderList(unref(item).bundles, (item2) => {
                                          return openBlock(), createBlock(unref(UIButton), {
                                            class: {
                                              "is-active": unref(itemBundle).id === item2.id
                                            },
                                            onClick: ($event) => handleBundleChange(item2),
                                            key: item2.id,
                                            label: `${item2 == null ? void 0 : item2.ram}/${item2 == null ? void 0 : item2.storage}`,
                                            variant: "transparent",
                                            size: "large"
                                          }, null, 8, ["class", "onClick", "label"]);
                                        }), 128))
                                      ])
                                    ])) : createCommentVNode("", true),
                                    createVNode("div", { class: "item__contents-variants" }, [
                                      createVNode("p", { class: "item__contents-spec-variant" }, [
                                        createVNode("span", null, "Color"),
                                        createTextVNode(": " + toDisplayString(("capitalize" in _ctx ? _ctx.capitalize : unref(capitalize))(unref(selectedVariant).color)), 1)
                                      ]),
                                      createVNode(unref(UIColorBox), {
                                        variants: unref(item).variant,
                                        activeVariant: unref(selectedVariant),
                                        "onUpdate:activeVariant": ($event) => selectedVariant.value = $event
                                      }, null, 8, ["variants", "activeVariant", "onUpdate:activeVariant"]),
                                      unref(errorMessage) ? (openBlock(), createBlock("p", {
                                        key: 0,
                                        class: "error el-tag--danger"
                                      }, toDisplayString(unref(errorMessage)), 1)) : createCommentVNode("", true)
                                    ]),
                                    createVNode("div", { class: "item__contents-quantity" }, [
                                      createVNode("p", { class: "" }, [
                                        createVNode("span", null, "Quantity"),
                                        createTextVNode(":")
                                      ]),
                                      createVNode(unref(UICounter), {
                                        modelValue: unref(qty),
                                        "onUpdate:modelValue": ($event) => isRef(qty) ? qty.value = $event : null
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ])
                                  ];
                                }),
                                _: 1
                              })
                            ]),
                            createVNode("div", { class: "action-qty" }, [
                              createVNode(unref(UIButton), {
                                size: "large",
                                class: "black flex-3",
                                onClick: updateCart,
                                label: "Add to cart"
                              }, {
                                icon: withCtx(() => [
                                  createVNode(_component_el_icon, { class: "mr-2" }, {
                                    default: withCtx(() => [
                                      createVNode(unref(shopping_cart_default))
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(unref(UIButton), {
                                size: "large",
                                onClick: addToWhishlist,
                                variant: "secondary",
                                label: "Add to wishlist"
                              }, {
                                icon: withCtx(() => [
                                  createVNode(_component_el_icon, { class: "mr-2" }, {
                                    default: withCtx(() => [
                                      createVNode(unref(star_default))
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ])
                          ];
                        }),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_el_col, null, {
                default: withCtx(() => [
                  createVNode(_component_el_row, null, {
                    default: withCtx(() => [
                      createVNode(_component_el_col, null, {
                        default: withCtx(() => [
                          createVNode(_component_el_tabs, { class: "el-card-options" }, {
                            default: withCtx(() => [
                              createVNode(_component_el_tab_pane, { label: "Product Details" }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "item__contents-specifications" }, [
                                    (openBlock(true), createBlock(Fragment, null, renderList(unref(item).specification, (specification, key) => {
                                      return openBlock(), createBlock("p", { key }, [
                                        createVNode("span", { class: "item__contents-spec" }, toDisplayString(key) + " :", 1),
                                        createTextVNode(" " + toDisplayString(specification), 1)
                                      ]);
                                    }), 128))
                                  ])
                                ]),
                                _: 1
                              }),
                              createVNode(_component_el_tab_pane, { label: "Ratings/Review" }, {
                                default: withCtx(() => [
                                  createTextVNode("Ratings/Review")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_el_tab_pane, { label: "FAQ" }, {
                                default: withCtx(() => [
                                  createTextVNode("FAQ")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/[productId]/[itemId].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _itemId_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-3d820ec3"]]);

export { _itemId_ as default };
//# sourceMappingURL=_itemId_-Wh1qYcKF.mjs.map
