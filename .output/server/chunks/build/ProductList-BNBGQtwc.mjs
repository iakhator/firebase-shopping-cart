import { E as ElButton, a as ElIcon, f as filter_default, b as arrow_right_default, w as withInstall, c as close_default, d as check_default, _ as _export_sfc$1, e as collection_tag_default, g as wallet_default, h as folder_opened_default, i as delete_default, j as buildProps, u as useDeprecated, k as useLocale, l as addUnit, m as useGlobalConfig, n as definePropType, o as iconPropType } from './el-button-etDYgHTt.mjs';
import { ref, computed, mergeProps, withCtx, unref, createVNode, createTextVNode, isRef, createBlock, createCommentVNode, openBlock, watch, defineComponent, useSlots, Transition, withDirectives, createElementVNode, withModifiers, createElementBlock, normalizeClass, renderSlot, toDisplayString, vShow, getCurrentInstance, nextTick, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain } from 'vue/server-renderer';
import { b as useNuxtApp, a as useRouter, j as defineStore, k as useAuthStore, u as useRoute, i as isBoolean, h as useNamespace, e as useZIndex, f as useId, g as defaultNamespace } from './server.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import { E as ElOverlay, u as useLockscreen } from './el-overlay-B9AOyR8v.mjs';
import { E as ElTeleport, a as ElFocusTrap, t as teleportProps } from './index-Bu8Xfd1z.mjs';
import { U as UPDATE_MODEL_EVENT } from './event-BZTOGHfp.mjs';
import { useTimeoutFn, isClient } from '@vueuse/core';
import { c as createLucideIcon } from './index-BKHcXdi2.mjs';
import { E as ElDropdown, a as ElDropdownMenu, b as ElDropdownItem } from './el-dropdown-6o5L3AHh.mjs';
import { E as ElRate } from './el-rate-XglfJQO_.mjs';
import { U as UIButton } from './UIButton-BaUMxFHy.mjs';
import { L as LoadingSpinner } from './LoadingSpinner-MiiBik8p.mjs';
import { u as useCurrency } from './useCurrency-jRJRFhrU.mjs';

const _sfc_main$2 = {
  __name: "AppAside",
  __ssrInlineRender: true,
  emits: ["filter-change"],
  setup(__props, { emit: __emit }) {
    useRoute();
    const brands = ["Apple", "Samsung", "Google", "OnePlus", "Xiaomi"];
    const priceRanges = [
      { label: "$0 - $300", min: 0, max: 300 },
      { label: "$300 - $600", min: 300, max: 600 },
      { label: "$600 - $900", min: 600, max: 900 },
      { label: "$900+", min: 900, max: Infinity }
    ];
    const storageOptions = ["64GB", "128GB", "256GB", "512GB", "1TB"];
    const selectedBrands = ref([]);
    const selectedPriceRanges = ref([]);
    const selectedStorage = ref([]);
    const emit = __emit;
    function emitFilters() {
      emit("filter-change", {
        brands: selectedBrands.value,
        priceRanges: selectedPriceRanges.value,
        storage: selectedStorage.value
      });
    }
    watch(
      [selectedBrands, selectedPriceRanges, selectedStorage],
      () => {
        emitFilters();
      },
      { deep: true }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_icon = ElIcon;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "sidebar" }, _attrs))} data-v-f80d40fe><div class="filter-section" data-v-f80d40fe><h3 class="font-briscolade" data-v-f80d40fe>`);
      _push(ssrRenderComponent(_component_el_icon, { class: "section-icon" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(collection_tag_default), null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(collection_tag_default))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(` Brand </h3><div class="filter-options" data-v-f80d40fe><!--[-->`);
      ssrRenderList(brands, (brand) => {
        _push(`<label class="filter-label" data-v-f80d40fe><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(selectedBrands.value) ? ssrLooseContain(selectedBrands.value, brand) : selectedBrands.value) ? " checked" : ""}${ssrRenderAttr("value", brand)} class="filter-checkbox" data-v-f80d40fe><span class="checkmark" data-v-f80d40fe></span> ${ssrInterpolate(brand)}</label>`);
      });
      _push(`<!--]--></div></div><div class="filter-section" data-v-f80d40fe><h3 class="font-briscolade" data-v-f80d40fe>`);
      _push(ssrRenderComponent(_component_el_icon, { class: "section-icon" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(wallet_default), null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(wallet_default))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(` Price Range </h3><div class="filter-options" data-v-f80d40fe><!--[-->`);
      ssrRenderList(priceRanges, (range) => {
        _push(`<label class="filter-label" data-v-f80d40fe><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(selectedPriceRanges.value) ? ssrLooseContain(selectedPriceRanges.value, range) : selectedPriceRanges.value) ? " checked" : ""}${ssrRenderAttr("value", range)} class="filter-checkbox" data-v-f80d40fe><span class="checkmark" data-v-f80d40fe></span> ${ssrInterpolate(range.label)}</label>`);
      });
      _push(`<!--]--></div></div><div class="filter-section" data-v-f80d40fe><h3 class="font-briscolade" data-v-f80d40fe>`);
      _push(ssrRenderComponent(_component_el_icon, { class: "section-icon" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(folder_opened_default), null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(folder_opened_default))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(` Storage </h3><div class="filter-options" data-v-f80d40fe><!--[-->`);
      ssrRenderList(storageOptions, (storage) => {
        _push(`<label class="filter-label" data-v-f80d40fe><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(selectedStorage.value) ? ssrLooseContain(selectedStorage.value, storage) : selectedStorage.value) ? " checked" : ""}${ssrRenderAttr("value", storage)} class="filter-checkbox" data-v-f80d40fe><span class="checkmark" data-v-f80d40fe></span> ${ssrInterpolate(storage)}</label>`);
      });
      _push(`<!--]--></div></div><div class="filter-actions" data-v-f80d40fe><button class="clear-filters-btn" data-v-f80d40fe>`);
      _push(ssrRenderComponent(_component_el_icon, { class: "clear-icon" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(delete_default), null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(delete_default))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(` Clear All Filters </button></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppAside.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-f80d40fe"]]);
const dialogContentProps = buildProps({
  center: Boolean,
  alignCenter: Boolean,
  closeIcon: {
    type: iconPropType
  },
  draggable: Boolean,
  overflow: Boolean,
  fullscreen: Boolean,
  headerClass: String,
  bodyClass: String,
  footerClass: String,
  showClose: {
    type: Boolean,
    default: true
  },
  title: {
    type: String,
    default: ""
  },
  ariaLevel: {
    type: String,
    default: "2"
  }
});
const dialogProps = buildProps({
  ...dialogContentProps,
  appendToBody: Boolean,
  appendTo: {
    type: teleportProps.to.type,
    default: "body"
  },
  beforeClose: {
    type: definePropType(Function)
  },
  destroyOnClose: Boolean,
  closeOnClickModal: {
    type: Boolean,
    default: true
  },
  closeOnPressEscape: {
    type: Boolean,
    default: true
  },
  lockScroll: {
    type: Boolean,
    default: true
  },
  modal: {
    type: Boolean,
    default: true
  },
  openDelay: {
    type: Number,
    default: 0
  },
  closeDelay: {
    type: Number,
    default: 0
  },
  top: {
    type: String
  },
  modelValue: Boolean,
  modalClass: String,
  headerClass: String,
  bodyClass: String,
  footerClass: String,
  width: {
    type: [String, Number]
  },
  zIndex: {
    type: Number
  },
  trapFocus: Boolean,
  headerAriaLevel: {
    type: String,
    default: "2"
  }
});
const dialogEmits = {
  open: () => true,
  opened: () => true,
  close: () => true,
  closed: () => true,
  [UPDATE_MODEL_EVENT]: (value) => isBoolean(value),
  openAutoFocus: () => true,
  closeAutoFocus: () => true
};
const drawerProps = buildProps({
  ...dialogProps,
  direction: {
    type: String,
    default: "rtl",
    values: ["ltr", "rtl", "ttb", "btt"]
  },
  size: {
    type: [String, Number],
    default: "30%"
  },
  withHeader: {
    type: Boolean,
    default: true
  },
  modalFade: {
    type: Boolean,
    default: true
  },
  headerAriaLevel: {
    type: String,
    default: "2"
  }
});
const drawerEmits = dialogEmits;
const useDialog = (props, targetRef) => {
  var _a;
  const instance = getCurrentInstance();
  const emit = instance.emit;
  const { nextZIndex } = useZIndex();
  let lastPosition = "";
  const titleId = useId();
  const bodyId = useId();
  const visible = ref(false);
  const closed = ref(false);
  const rendered = ref(false);
  const zIndex = ref((_a = props.zIndex) != null ? _a : nextZIndex());
  let openTimer = void 0;
  let closeTimer = void 0;
  const namespace = useGlobalConfig("namespace", defaultNamespace);
  const style = computed(() => {
    const style2 = {};
    const varPrefix = `--${namespace.value}-dialog`;
    if (!props.fullscreen) {
      if (props.top) {
        style2[`${varPrefix}-margin-top`] = props.top;
      }
      if (props.width) {
        style2[`${varPrefix}-width`] = addUnit(props.width);
      }
    }
    return style2;
  });
  const overlayDialogStyle = computed(() => {
    if (props.alignCenter) {
      return { display: "flex" };
    }
    return {};
  });
  function afterEnter() {
    emit("opened");
  }
  function afterLeave() {
    emit("closed");
    emit(UPDATE_MODEL_EVENT, false);
    if (props.destroyOnClose) {
      rendered.value = false;
    }
  }
  function beforeLeave() {
    emit("close");
  }
  function open() {
    closeTimer == null ? void 0 : closeTimer();
    openTimer == null ? void 0 : openTimer();
    if (props.openDelay && props.openDelay > 0) {
      ({ stop: openTimer } = useTimeoutFn(() => doOpen(), props.openDelay));
    } else {
      doOpen();
    }
  }
  function close() {
    openTimer == null ? void 0 : openTimer();
    closeTimer == null ? void 0 : closeTimer();
    if (props.closeDelay && props.closeDelay > 0) {
      ({ stop: closeTimer } = useTimeoutFn(() => doClose(), props.closeDelay));
    } else {
      doClose();
    }
  }
  function handleClose() {
    function hide(shouldCancel) {
      if (shouldCancel)
        return;
      closed.value = true;
      visible.value = false;
    }
    if (props.beforeClose) {
      props.beforeClose(hide);
    } else {
      close();
    }
  }
  function onModalClick() {
    if (props.closeOnClickModal) {
      handleClose();
    }
  }
  function doOpen() {
    if (!isClient)
      return;
    visible.value = true;
  }
  function doClose() {
    visible.value = false;
  }
  function onOpenAutoFocus() {
    emit("openAutoFocus");
  }
  function onCloseAutoFocus() {
    emit("closeAutoFocus");
  }
  function onFocusoutPrevented(event) {
    var _a2;
    if (((_a2 = event.detail) == null ? void 0 : _a2.focusReason) === "pointer") {
      event.preventDefault();
    }
  }
  if (props.lockScroll) {
    useLockscreen(visible);
  }
  function onCloseRequested() {
    if (props.closeOnPressEscape) {
      handleClose();
    }
  }
  watch(() => props.zIndex, () => {
    var _a2;
    zIndex.value = (_a2 = props.zIndex) != null ? _a2 : nextZIndex();
  });
  watch(() => props.modelValue, (val) => {
    var _a2;
    if (val) {
      closed.value = false;
      open();
      rendered.value = true;
      zIndex.value = (_a2 = props.zIndex) != null ? _a2 : nextZIndex();
      nextTick(() => {
        emit("open");
        if (targetRef.value) {
          targetRef.value.parentElement.scrollTop = 0;
          targetRef.value.parentElement.scrollLeft = 0;
          targetRef.value.scrollTop = 0;
        }
      });
    } else {
      if (visible.value) {
        close();
      }
    }
  });
  watch(() => props.fullscreen, (val) => {
    if (!targetRef.value)
      return;
    if (val) {
      lastPosition = targetRef.value.style.transform;
      targetRef.value.style.transform = "";
    } else {
      targetRef.value.style.transform = lastPosition;
    }
  });
  return {
    afterEnter,
    afterLeave,
    beforeLeave,
    handleClose,
    onModalClick,
    close,
    doClose,
    onOpenAutoFocus,
    onCloseAutoFocus,
    onCloseRequested,
    onFocusoutPrevented,
    titleId,
    bodyId,
    closed,
    style,
    overlayDialogStyle,
    rendered,
    visible,
    zIndex
  };
};
const __default__ = defineComponent({
  name: "ElDrawer",
  inheritAttrs: false
});
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: drawerProps,
  emits: drawerEmits,
  setup(__props, { expose }) {
    const props = __props;
    const slots = useSlots();
    useDeprecated({
      scope: "el-drawer",
      from: "the title slot",
      replacement: "the header slot",
      version: "3.0.0",
      ref: "https://element-plus.org/en-US/component/drawer.html#slots"
    }, computed(() => !!slots.title));
    const drawerRef = ref();
    const focusStartRef = ref();
    const ns = useNamespace("drawer");
    const { t } = useLocale();
    const {
      afterEnter,
      afterLeave,
      beforeLeave,
      visible,
      rendered,
      titleId,
      bodyId,
      zIndex,
      onModalClick,
      onOpenAutoFocus,
      onCloseAutoFocus,
      onFocusoutPrevented,
      onCloseRequested,
      handleClose
    } = useDialog(props, drawerRef);
    const isHorizontal = computed(() => props.direction === "rtl" || props.direction === "ltr");
    const drawerSize = computed(() => addUnit(props.size));
    expose({
      handleClose,
      afterEnter,
      afterLeave
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(ElTeleport), {
        to: _ctx.appendTo,
        disabled: _ctx.appendTo !== "body" ? false : !_ctx.appendToBody
      }, {
        default: withCtx(() => [
          createVNode(Transition, {
            name: unref(ns).b("fade"),
            onAfterEnter: unref(afterEnter),
            onAfterLeave: unref(afterLeave),
            onBeforeLeave: unref(beforeLeave),
            persisted: ""
          }, {
            default: withCtx(() => [
              withDirectives(createVNode(unref(ElOverlay), {
                mask: _ctx.modal,
                "overlay-class": _ctx.modalClass,
                "z-index": unref(zIndex),
                onClick: unref(onModalClick)
              }, {
                default: withCtx(() => [
                  createVNode(unref(ElFocusTrap), {
                    loop: "",
                    trapped: unref(visible),
                    "focus-trap-el": drawerRef.value,
                    "focus-start-el": focusStartRef.value,
                    onFocusAfterTrapped: unref(onOpenAutoFocus),
                    onFocusAfterReleased: unref(onCloseAutoFocus),
                    onFocusoutPrevented: unref(onFocusoutPrevented),
                    onReleaseRequested: unref(onCloseRequested)
                  }, {
                    default: withCtx(() => [
                      createElementVNode("div", mergeProps({
                        ref_key: "drawerRef",
                        ref: drawerRef,
                        "aria-modal": "true",
                        "aria-label": _ctx.title || void 0,
                        "aria-labelledby": !_ctx.title ? unref(titleId) : void 0,
                        "aria-describedby": unref(bodyId)
                      }, _ctx.$attrs, {
                        class: [unref(ns).b(), _ctx.direction, unref(visible) && "open"],
                        style: unref(isHorizontal) ? "width: " + unref(drawerSize) : "height: " + unref(drawerSize),
                        role: "dialog",
                        onClick: withModifiers(() => {
                        }, ["stop"])
                      }), [
                        createElementVNode("span", {
                          ref_key: "focusStartRef",
                          ref: focusStartRef,
                          class: normalizeClass(unref(ns).e("sr-focus")),
                          tabindex: "-1"
                        }, null, 2),
                        _ctx.withHeader ? (openBlock(), createElementBlock("header", {
                          key: 0,
                          class: normalizeClass([unref(ns).e("header"), _ctx.headerClass])
                        }, [
                          !_ctx.$slots.title ? renderSlot(_ctx.$slots, "header", {
                            key: 0,
                            close: unref(handleClose),
                            titleId: unref(titleId),
                            titleClass: unref(ns).e("title")
                          }, () => [
                            !_ctx.$slots.title ? (openBlock(), createElementBlock("span", {
                              key: 0,
                              id: unref(titleId),
                              role: "heading",
                              "aria-level": _ctx.headerAriaLevel,
                              class: normalizeClass(unref(ns).e("title"))
                            }, toDisplayString(_ctx.title), 11, ["id", "aria-level"])) : createCommentVNode("v-if", true)
                          ]) : renderSlot(_ctx.$slots, "title", { key: 1 }, () => [
                            createCommentVNode(" DEPRECATED SLOT ")
                          ]),
                          _ctx.showClose ? (openBlock(), createElementBlock("button", {
                            key: 2,
                            "aria-label": unref(t)("el.drawer.close"),
                            class: normalizeClass(unref(ns).e("close-btn")),
                            type: "button",
                            onClick: unref(handleClose)
                          }, [
                            createVNode(unref(ElIcon), {
                              class: normalizeClass(unref(ns).e("close"))
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(close_default))
                              ]),
                              _: 1
                            }, 8, ["class"])
                          ], 10, ["aria-label", "onClick"])) : createCommentVNode("v-if", true)
                        ], 2)) : createCommentVNode("v-if", true),
                        unref(rendered) ? (openBlock(), createElementBlock("div", {
                          key: 1,
                          id: unref(bodyId),
                          class: normalizeClass([unref(ns).e("body"), _ctx.bodyClass])
                        }, [
                          renderSlot(_ctx.$slots, "default")
                        ], 10, ["id"])) : createCommentVNode("v-if", true),
                        _ctx.$slots.footer ? (openBlock(), createElementBlock("div", {
                          key: 2,
                          class: normalizeClass([unref(ns).e("footer"), _ctx.footerClass])
                        }, [
                          renderSlot(_ctx.$slots, "footer")
                        ], 2)) : createCommentVNode("v-if", true)
                      ], 16, ["aria-label", "aria-labelledby", "aria-describedby", "onClick"])
                    ]),
                    _: 3
                  }, 8, ["trapped", "focus-trap-el", "focus-start-el", "onFocusAfterTrapped", "onFocusAfterReleased", "onFocusoutPrevented", "onReleaseRequested"])
                ]),
                _: 3
              }, 8, ["mask", "overlay-class", "z-index", "onClick"]), [
                [vShow, unref(visible)]
              ])
            ]),
            _: 3
          }, 8, ["name", "onAfterEnter", "onAfterLeave", "onBeforeLeave"])
        ]),
        _: 3
      }, 8, ["to", "disabled"]);
    };
  }
});
var Drawer = /* @__PURE__ */ _export_sfc$1(_sfc_main$1, [["__file", "drawer.vue"]]);
const ElDrawer = withInstall(Drawer);
/**
 * @license lucide-vue-next v0.534.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Box = createLucideIcon("box", [
  [
    "path",
    {
      d: "M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",
      key: "hh9hay"
    }
  ],
  ["path", { d: "m3.3 7 8.7 5 8.7-5", key: "g66t2b" }],
  ["path", { d: "M12 22V12", key: "d0xqtd" }]
]);
/**
 * @license lucide-vue-next v0.534.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Heart = createLucideIcon("heart", [
  [
    "path",
    {
      d: "M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",
      key: "mvr1a0"
    }
  ]
]);
/**
 * @license lucide-vue-next v0.534.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const SlidersHorizontal = createLucideIcon("sliders-horizontal", [
  ["line", { x1: "21", x2: "14", y1: "4", y2: "4", key: "obuewd" }],
  ["line", { x1: "10", x2: "3", y1: "4", y2: "4", key: "1q6298" }],
  ["line", { x1: "21", x2: "12", y1: "12", y2: "12", key: "1iu8h1" }],
  ["line", { x1: "8", x2: "3", y1: "12", y2: "12", key: "ntss68" }],
  ["line", { x1: "21", x2: "16", y1: "20", y2: "20", key: "14d8ph" }],
  ["line", { x1: "12", x2: "3", y1: "20", y2: "20", key: "m0wm8r" }],
  ["line", { x1: "14", x2: "14", y1: "2", y2: "6", key: "14e1ph" }],
  ["line", { x1: "8", x2: "8", y1: "10", y2: "14", key: "1i6ji0" }],
  ["line", { x1: "16", x2: "16", y1: "18", y2: "22", key: "1lctlv" }]
]);
const useFavouriteStore = defineStore("favourites", () => {
  const favourites = ref([]);
  const favouriteIds = ref([]);
  const loading = ref(false);
  const error = ref(null);
  const authStore = useAuthStore();
  const toggleFavourite = async (productId) => {
    var _a, _b;
    try {
      loading.value = true;
      error.value = null;
      if (!((_a = authStore.user) == null ? void 0 : _a.uid)) {
        throw new Error("Please login to manage favourites");
      }
      const response = await $fetch("/api/user/favourite", {
        method: "POST",
        body: {
          productId,
          userId: authStore.user.uid
        }
      });
      if (response.success) {
        if (response.action === "added") {
          favouriteIds.value.push(productId);
        } else {
          favouriteIds.value = favouriteIds.value.filter(
            (id) => id !== productId
          );
        }
        return {
          success: true,
          message: response.message,
          isFavourite: response.isFavourite
        };
      }
    } catch (err) {
      error.value = ((_b = err.data) == null ? void 0 : _b.message) || err.message || "Failed to toggle favourite";
      return { success: false, error: error.value };
    } finally {
      loading.value = false;
    }
  };
  const getFavourites = async () => {
    var _a, _b;
    try {
      loading.value = true;
      error.value = null;
      if (!((_a = authStore.user) == null ? void 0 : _a.uid)) {
        return { success: false, error: "Please login to view favourites" };
      }
      const token = await authStore.getIdToken();
      const response = await $fetch(`/api/favourites/${authStore.user.uid}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      if (response.success) {
        favourites.value = response.data.favourites;
        favouriteIds.value = response.data.favourites.map((f) => f.id);
        return {
          success: true,
          data: response.data.favourites,
          count: response.data.count
        };
      }
    } catch (err) {
      error.value = ((_b = err.data) == null ? void 0 : _b.message) || err.message || "Failed to fetch favourites";
      return { success: false, error: error.value };
    } finally {
      loading.value = false;
    }
  };
  const isFavourite = (productId) => {
    return favouriteIds.value.includes(productId);
  };
  const clearFavourites = () => {
    favourites.value = [];
    favouriteIds.value = [];
    error.value = null;
  };
  return {
    favourites,
    favouriteIds,
    loading,
    error,
    toggleFavourite,
    getFavourites,
    isFavourite,
    clearFavourites
  };
});
const _sfc_main = {
  __name: "ProductList",
  __ssrInlineRender: true,
  props: {
    products: {
      type: Array,
      default: () => []
    },
    isLoading: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const isFavHovered = ref("");
    const showMobileFilters = ref(false);
    const { toUSD } = useCurrency();
    const { $toast } = useNuxtApp();
    const router = useRouter();
    const favouritesStore = useFavouriteStore();
    const isMobile = ref(false);
    const selectedSort = ref("price-asc");
    const sortedProducts = computed(() => {
      if (!Array.isArray(props.products)) return [];
      let sorted = [...props.products];
      switch (selectedSort.value) {
        case "price-asc":
          sorted.sort((a, b) => {
            var _a2, _b2, _c2, _d2;
            var _a, _b, _c, _d;
            const priceA = (_b2 = (_a2 = (_b = (_a = a == null ? void 0 : a.bundles) == null ? void 0 : _a[0]) == null ? void 0 : _b.price) != null ? _a2 : a.price) != null ? _b2 : 0;
            const priceB = (_d2 = (_c2 = (_d = (_c = b == null ? void 0 : b.bundles) == null ? void 0 : _c[0]) == null ? void 0 : _d.price) != null ? _c2 : b.price) != null ? _d2 : 0;
            return priceA - priceB;
          });
          break;
        case "price-desc":
          sorted.sort((a, b) => {
            var _a2, _b2, _c2, _d2;
            var _a, _b, _c, _d;
            const priceA = (_b2 = (_a2 = (_b = (_a = a == null ? void 0 : a.bundles) == null ? void 0 : _a[0]) == null ? void 0 : _b.price) != null ? _a2 : a.price) != null ? _b2 : 0;
            const priceB = (_d2 = (_c2 = (_d = (_c = b == null ? void 0 : b.bundles) == null ? void 0 : _c[0]) == null ? void 0 : _d.price) != null ? _c2 : b.price) != null ? _d2 : 0;
            return priceB - priceA;
          });
          break;
        case "name-asc":
          sorted.sort((a, b) => (a.name || "").localeCompare(b.name || ""));
          break;
        case "name-desc":
          sorted.sort((a, b) => (b.name || "").localeCompare(a.name || ""));
          break;
      }
      return sorted;
    });
    function handleSortCommand(command) {
      selectedSort.value = command;
    }
    const props = __props;
    async function addToWishlist(product) {
      const result = await favouritesStore.toggleFavourite(product.id);
      if (result.success) {
        $toast.success(result.message);
      } else {
        $toast.error(result.error);
      }
    }
    function toggleMobileFilters() {
      showMobileFilters.value = !showMobileFilters.value;
      if (showMobileFilters.value) {
        (void 0).body.style.overflow = "hidden";
      } else {
        (void 0).body.style.overflow = "";
      }
    }
    function closeMobileFilters() {
      showMobileFilters.value = false;
      (void 0).body.style.overflow = "";
    }
    function handleFilterChange(filter) {
      const query = formatFiltersToQuery(filter);
      router.push({ path: "/", query });
    }
    function formatFiltersToQuery(filters) {
      var _a, _b, _c;
      const query = {};
      if ((_a = filters.brands) == null ? void 0 : _a.length) {
        query.brands = filters.brands.join(",");
      }
      if ((_b = filters.priceRanges) == null ? void 0 : _b.length) {
        query.priceRanges = filters.priceRanges.map(
          (price) => {
            var _a2, _b2;
            return (_b2 = (_a2 = price.label) == null ? void 0 : _a2.replace(/[^0-9\-+]/g, "")) == null ? void 0 : _b2.replace(/\+/g, "+");
          }
        ).join(",");
      }
      if ((_c = filters.storage) == null ? void 0 : _c.length) {
        query.storage = filters.storage.join(",");
      }
      return query;
    }
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      const _component_el_button = ElButton;
      const _component_el_icon = ElIcon;
      const _component_AppAside = __nuxt_component_2;
      const _component_el_drawer = ElDrawer;
      const _component_IconBox = Box;
      const _component_el_dropdown = ElDropdown;
      const _component_IconSlidersHorizontal = SlidersHorizontal;
      const _component_el_dropdown_menu = ElDropdownMenu;
      const _component_el_dropdown_item = ElDropdownItem;
      const _component_el_rate = ElRate;
      const _component_IconHeart = Heart;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "product-layout" }, _attrs))} data-v-ce2eb769><div class="mobile-filter-toggle" data-v-ce2eb769>`);
      _push(ssrRenderComponent(_component_el_button, {
        onClick: toggleMobileFilters,
        class: "filter-btn"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_el_icon, { class: "filter-toggle-icon" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(filter_default), null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(filter_default))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(` Filters `);
            _push2(ssrRenderComponent(_component_el_icon, {
              class: ["filter-arrow-icon", { rotated: unref(showMobileFilters) }]
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(arrow_right_default), null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(arrow_right_default))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_el_icon, { class: "filter-toggle-icon" }, {
                default: withCtx(() => [
                  createVNode(unref(filter_default))
                ]),
                _: 1
              }),
              createTextVNode(" Filters "),
              createVNode(_component_el_icon, {
                class: ["filter-arrow-icon", { rotated: unref(showMobileFilters) }]
              }, {
                default: withCtx(() => [
                  createVNode(unref(arrow_right_default))
                ]),
                _: 1
              }, 8, ["class"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      if (!unref(isMobile)) {
        _push(`<div class="sidebar-container" data-v-ce2eb769><div class="sidebar-content" data-v-ce2eb769><div class="flex justify-between items-center" data-v-ce2eb769><h3 data-v-ce2eb769>Filters</h3></div>`);
        _push(ssrRenderComponent(_component_AppAside, { onFilterChange: handleFilterChange }, null, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_el_drawer, {
        modelValue: unref(showMobileFilters),
        "onUpdate:modelValue": ($event) => isRef(showMobileFilters) ? showMobileFilters.value = $event : null,
        direction: "ltr",
        size: "80vw",
        "with-header": false,
        "custom-class": "mobile-filter-drawer"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="drawer-header" style="${ssrRenderStyle({ "display": "flex", "align-items": "center", "justify-content": "space-between" })}" data-v-ce2eb769${_scopeId}><h3 style="${ssrRenderStyle({ "margin": "0" })}" class="font-briscolade" data-v-ce2eb769${_scopeId}>Filters</h3>`);
            _push2(ssrRenderComponent(_component_el_button, {
              onClick: closeMobileFilters,
              circle: "",
              class: "close-btn"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_el_icon, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(close_default), null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(close_default))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_el_icon, null, {
                      default: withCtx(() => [
                        createVNode(unref(close_default))
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_AppAside, { onFilterChange: handleFilterChange }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", {
                class: "drawer-header",
                style: { "display": "flex", "align-items": "center", "justify-content": "space-between" }
              }, [
                createVNode("h3", {
                  style: { "margin": "0" },
                  class: "font-briscolade"
                }, "Filters"),
                createVNode(_component_el_button, {
                  onClick: closeMobileFilters,
                  circle: "",
                  class: "close-btn"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_el_icon, null, {
                      default: withCtx(() => [
                        createVNode(unref(close_default))
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              createVNode(_component_AppAside, { onFilterChange: handleFilterChange })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="main-content" data-v-ce2eb769><h2 class="collection-heading font-briscolade text-2xl" data-v-ce2eb769> Browse our latest collection </h2>`);
      if (__props.isLoading) {
        _push(ssrRenderComponent(LoadingSpinner, {
          type: "spinner",
          size: "small",
          message: "Loading products..."
        }, null, _parent));
      } else if (!((_a = __props.products) == null ? void 0 : _a.length)) {
        _push(`<div class="no-products" data-v-ce2eb769><div class="no-products-container" data-v-ce2eb769><div class="no-products-icon" data-v-ce2eb769>`);
        _push(ssrRenderComponent(_component_IconBox, {
          size: "70",
          color: "#d1d5db"
        }, null, _parent));
        _push(`</div><div class="no-products-content" data-v-ce2eb769><h2 class="no-products-title" data-v-ce2eb769>No products found</h2><p class="no-products-subtitle" data-v-ce2eb769> Try adjusting your filters to see more results. </p></div></div></div>`);
      } else {
        _push(`<div data-v-ce2eb769><div class="product-list-header" data-v-ce2eb769><div class="product-count" data-v-ce2eb769> Showing ${ssrInterpolate((_b = __props.products) == null ? void 0 : _b.length)} product`);
        if (__props.products && __props.products.length !== 1) {
          _push(`<span data-v-ce2eb769>s</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="product-sort" data-v-ce2eb769>`);
        _push(ssrRenderComponent(_component_el_dropdown, {
          placement: "bottom-end",
          onCommand: handleSortCommand,
          trigger: "click"
        }, {
          dropdown: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_el_dropdown_menu, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_el_dropdown_item, { command: "price-asc" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` Price: Low to High `);
                          if (unref(selectedSort) === "price-asc") {
                            _push4(ssrRenderComponent(_component_el_icon, { style: { "margin-left": "8px" } }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(ssrRenderComponent(unref(check_default), null, null, _parent5, _scopeId4));
                                } else {
                                  return [
                                    createVNode(unref(check_default))
                                  ];
                                }
                              }),
                              _: 1
                            }, _parent4, _scopeId3));
                          } else {
                            _push4(`<!---->`);
                          }
                        } else {
                          return [
                            createTextVNode(" Price: Low to High "),
                            unref(selectedSort) === "price-asc" ? (openBlock(), createBlock(_component_el_icon, {
                              key: 0,
                              style: { "margin-left": "8px" }
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(check_default))
                              ]),
                              _: 1
                            })) : createCommentVNode("", true)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_el_dropdown_item, { command: "price-desc" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` Price: High to Low `);
                          if (unref(selectedSort) === "price-desc") {
                            _push4(ssrRenderComponent(_component_el_icon, { style: { "margin-left": "8px" } }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(ssrRenderComponent(unref(check_default), null, null, _parent5, _scopeId4));
                                } else {
                                  return [
                                    createVNode(unref(check_default))
                                  ];
                                }
                              }),
                              _: 1
                            }, _parent4, _scopeId3));
                          } else {
                            _push4(`<!---->`);
                          }
                        } else {
                          return [
                            createTextVNode(" Price: High to Low "),
                            unref(selectedSort) === "price-desc" ? (openBlock(), createBlock(_component_el_icon, {
                              key: 0,
                              style: { "margin-left": "8px" }
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(check_default))
                              ]),
                              _: 1
                            })) : createCommentVNode("", true)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_el_dropdown_item, { command: "name-asc" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` Name: A-Z `);
                          if (unref(selectedSort) === "name-asc") {
                            _push4(ssrRenderComponent(_component_el_icon, { style: { "margin-left": "8px" } }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(ssrRenderComponent(unref(check_default), null, null, _parent5, _scopeId4));
                                } else {
                                  return [
                                    createVNode(unref(check_default))
                                  ];
                                }
                              }),
                              _: 1
                            }, _parent4, _scopeId3));
                          } else {
                            _push4(`<!---->`);
                          }
                        } else {
                          return [
                            createTextVNode(" Name: A-Z "),
                            unref(selectedSort) === "name-asc" ? (openBlock(), createBlock(_component_el_icon, {
                              key: 0,
                              style: { "margin-left": "8px" }
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(check_default))
                              ]),
                              _: 1
                            })) : createCommentVNode("", true)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_el_dropdown_item, { command: "name-desc" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` Name: Z-A `);
                          if (unref(selectedSort) === "name-desc") {
                            _push4(ssrRenderComponent(_component_el_icon, { style: { "margin-left": "8px" } }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(ssrRenderComponent(unref(check_default), null, null, _parent5, _scopeId4));
                                } else {
                                  return [
                                    createVNode(unref(check_default))
                                  ];
                                }
                              }),
                              _: 1
                            }, _parent4, _scopeId3));
                          } else {
                            _push4(`<!---->`);
                          }
                        } else {
                          return [
                            createTextVNode(" Name: Z-A "),
                            unref(selectedSort) === "name-desc" ? (openBlock(), createBlock(_component_el_icon, {
                              key: 0,
                              style: { "margin-left": "8px" }
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(check_default))
                              ]),
                              _: 1
                            })) : createCommentVNode("", true)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_el_dropdown_item, { command: "price-asc" }, {
                        default: withCtx(() => [
                          createTextVNode(" Price: Low to High "),
                          unref(selectedSort) === "price-asc" ? (openBlock(), createBlock(_component_el_icon, {
                            key: 0,
                            style: { "margin-left": "8px" }
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(check_default))
                            ]),
                            _: 1
                          })) : createCommentVNode("", true)
                        ]),
                        _: 1
                      }),
                      createVNode(_component_el_dropdown_item, { command: "price-desc" }, {
                        default: withCtx(() => [
                          createTextVNode(" Price: High to Low "),
                          unref(selectedSort) === "price-desc" ? (openBlock(), createBlock(_component_el_icon, {
                            key: 0,
                            style: { "margin-left": "8px" }
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(check_default))
                            ]),
                            _: 1
                          })) : createCommentVNode("", true)
                        ]),
                        _: 1
                      }),
                      createVNode(_component_el_dropdown_item, { command: "name-asc" }, {
                        default: withCtx(() => [
                          createTextVNode(" Name: A-Z "),
                          unref(selectedSort) === "name-asc" ? (openBlock(), createBlock(_component_el_icon, {
                            key: 0,
                            style: { "margin-left": "8px" }
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(check_default))
                            ]),
                            _: 1
                          })) : createCommentVNode("", true)
                        ]),
                        _: 1
                      }),
                      createVNode(_component_el_dropdown_item, { command: "name-desc" }, {
                        default: withCtx(() => [
                          createTextVNode(" Name: Z-A "),
                          unref(selectedSort) === "name-desc" ? (openBlock(), createBlock(_component_el_icon, {
                            key: 0,
                            style: { "margin-left": "8px" }
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(check_default))
                            ]),
                            _: 1
                          })) : createCommentVNode("", true)
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
                createVNode(_component_el_dropdown_menu, null, {
                  default: withCtx(() => [
                    createVNode(_component_el_dropdown_item, { command: "price-asc" }, {
                      default: withCtx(() => [
                        createTextVNode(" Price: Low to High "),
                        unref(selectedSort) === "price-asc" ? (openBlock(), createBlock(_component_el_icon, {
                          key: 0,
                          style: { "margin-left": "8px" }
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(check_default))
                          ]),
                          _: 1
                        })) : createCommentVNode("", true)
                      ]),
                      _: 1
                    }),
                    createVNode(_component_el_dropdown_item, { command: "price-desc" }, {
                      default: withCtx(() => [
                        createTextVNode(" Price: High to Low "),
                        unref(selectedSort) === "price-desc" ? (openBlock(), createBlock(_component_el_icon, {
                          key: 0,
                          style: { "margin-left": "8px" }
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(check_default))
                          ]),
                          _: 1
                        })) : createCommentVNode("", true)
                      ]),
                      _: 1
                    }),
                    createVNode(_component_el_dropdown_item, { command: "name-asc" }, {
                      default: withCtx(() => [
                        createTextVNode(" Name: A-Z "),
                        unref(selectedSort) === "name-asc" ? (openBlock(), createBlock(_component_el_icon, {
                          key: 0,
                          style: { "margin-left": "8px" }
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(check_default))
                          ]),
                          _: 1
                        })) : createCommentVNode("", true)
                      ]),
                      _: 1
                    }),
                    createVNode(_component_el_dropdown_item, { command: "name-desc" }, {
                      default: withCtx(() => [
                        createTextVNode(" Name: Z-A "),
                        unref(selectedSort) === "name-desc" ? (openBlock(), createBlock(_component_el_icon, {
                          key: 0,
                          style: { "margin-left": "8px" }
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(check_default))
                          ]),
                          _: 1
                        })) : createCommentVNode("", true)
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ];
            }
          }),
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(unref(UIButton), {
                label: "Sort",
                variant: "transparent",
                size: "large"
              }, {
                icon: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_IconSlidersHorizontal, { size: 16 }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_IconSlidersHorizontal, { size: 16 })
                    ];
                  }
                }),
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span class="sort-label" data-v-ce2eb769${_scopeId2}>Sort</span>`);
                  } else {
                    return [
                      createVNode("span", { class: "sort-label" }, "Sort")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(unref(UIButton), {
                  label: "Sort",
                  variant: "transparent",
                  size: "large"
                }, {
                  icon: withCtx(() => [
                    createVNode(_component_IconSlidersHorizontal, { size: 16 })
                  ]),
                  default: withCtx(() => [
                    createVNode("span", { class: "sort-label" }, "Sort")
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div><div class="product__grid" data-v-ce2eb769><div class="product__grid-right" data-v-ce2eb769><ul class="product__grid-w" data-v-ce2eb769><!--[-->`);
        ssrRenderList(unref(sortedProducts), (item) => {
          var _a2, _b2, _c;
          _push(`<li class="product__grid-w__list" data-v-ce2eb769><a class="_p"${ssrRenderAttr("href", `/${item.categoryId}/${item.id}`)} data-v-ce2eb769><span class="product__grid-w__list-img" data-v-ce2eb769><img${ssrRenderAttr("src", item == null ? void 0 : item.imageUrl)} alt="" loading="lazy" data-v-ce2eb769></span><div class="product__grid-w__list-content" data-v-ce2eb769><span class="product__grid-w__list-title multi-line-ellipsis" data-v-ce2eb769>${ssrInterpolate(item.name)}</span><span data-v-ce2eb769>${ssrInterpolate((_a2 = item == null ? void 0 : item.bundles[0]) == null ? void 0 : _a2.ram)} / ${ssrInterpolate((_b2 = item == null ? void 0 : item.bundles[0]) == null ? void 0 : _b2.storage)}</span>`);
          if (item.averageRating || item.totalReviews) {
            _push(`<div class="product__grid-w__list-rating" data-v-ce2eb769>`);
            _push(ssrRenderComponent(_component_el_rate, {
              "model-value": item.averageRating,
              disabled: "",
              max: 5,
              size: "large",
              class: "review-stars"
            }, null, _parent));
            _push(`<span class="review-count text-xs" data-v-ce2eb769>${ssrInterpolate(item.totalReviews)} reviews </span></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<div class="product__grid-w__list-price_fav" data-v-ce2eb769><span class="product__grid-w__list-price" data-v-ce2eb769>${ssrInterpolate(unref(toUSD)(((_c = item == null ? void 0 : item.bundles[0]) == null ? void 0 : _c.price) || item.price))}</span>`);
          _push(ssrRenderComponent(_component_el_button, {
            text: "",
            circle: "",
            onClick: ($event) => addToWishlist(item),
            onMouseenter: ($event) => isFavHovered.value = item.id,
            onMouseleave: ($event) => isFavHovered.value = "",
            class: "favourite"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_IconHeart, {
                  size: 24,
                  fill: unref(favouritesStore).isFavourite(item.id) ? "#000000" : "none"
                }, null, _parent2, _scopeId));
              } else {
                return [
                  createVNode(_component_IconHeart, {
                    size: 24,
                    fill: unref(favouritesStore).isFavourite(item.id) ? "#000000" : "none"
                  }, null, 8, ["fill"])
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div></div></a></li>`);
        });
        _push(`<!--]--></ul></div></div></div>`);
      }
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProductList.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ProductList = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-ce2eb769"]]);

export { ProductList as P };
//# sourceMappingURL=ProductList-BNBGQtwc.mjs.map
