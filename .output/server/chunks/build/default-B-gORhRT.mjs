import { defineComponent, useSlots, computed, createElementBlock, openBlock, normalizeClass, unref, renderSlot, normalizeStyle, createBlock, Transition, mergeProps, withCtx, getCurrentInstance, inject, ref, reactive, watch, provide, h, Fragment, withDirectives, vShow, watchEffect, toRef, createElementVNode, createTextVNode, toDisplayString, createVNode, useSSRContext, nextTick } from 'vue';
import { w as withInstall, _ as _export_sfc$1, v as withNoopInstall, j as buildProps, o as iconPropType, x as arrow_down_default, b as arrow_right_default, a as ElIcon, n as definePropType, a8 as more_default, l as addUnit, q as addClass, p as hasClass, a9 as removeClass, aa as user_filled_default, ab as avatar_default, ac as grid_default, ad as setting_default, ae as switch_button_default, af as video_play_default, Y as location_default, X as phone_default, F as message_default } from './el-button-etDYgHTt.mjs';
import { h as useNamespace, y as throwError, v as isUndefined, F as isPropAbsent, s as debugWarn, p as isNumber, a as useRouter, k as useAuthStore, G as useCartStore, _ as __nuxt_component_5, n as navigateTo } from './server.mjs';
import { useResizeObserver, useTimeoutFn } from '@vueuse/core';
import { isNil } from 'lodash-unified';
import { E as ElCollapseTransition } from './index-FLfwbDF9.mjs';
import { b as ElTooltip } from './index-Bu8Xfd1z.mjs';
import { TinyColor } from '@ctrl/tinycolor';
import { isString, isArray, isObject } from '@vue/shared';
import { C as ClickOutside, E as ElAvatar } from './index-Bz4OuGBN.mjs';
import { m as mutable } from './typescript-B4MtqadT.mjs';
import { f as flattedChildren } from './aria-DC1XP1AM.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-D2_cDga4.mjs';
import { c as createLucideIcon } from './index-BKHcXdi2.mjs';
import { S as ShoppingBag } from './shopping-bag-C9kEades.mjs';
import { E as ElDropdown } from './el-dropdown-6o5L3AHh.mjs';
import { a as capitalize } from './index-C_WjPGsK.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrInterpolate } from 'vue/server-renderer';
import { U as UIButton } from './UIButton-BaUMxFHy.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
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
import 'vue-sonner';
import '@popperjs/core';

/**
 * @license lucide-vue-next v0.534.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const CircleUserRound = createLucideIcon("circle-user-round", [
  ["path", { d: "M18 20a6 6 0 0 0-12 0", key: "1qehca" }],
  ["circle", { cx: "12", cy: "10", r: "4", key: "1h16sb" }],
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
]);
const __default__$8 = defineComponent({
  name: "ElContainer"
});
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  ...__default__$8,
  props: {
    direction: {
      type: String
    }
  },
  setup(__props) {
    const props = __props;
    const slots = useSlots();
    const ns = useNamespace("container");
    const isVertical = computed(() => {
      if (props.direction === "vertical") {
        return true;
      } else if (props.direction === "horizontal") {
        return false;
      }
      if (slots && slots.default) {
        const vNodes = slots.default();
        return vNodes.some((vNode) => {
          const tag = vNode.type.name;
          return tag === "ElHeader" || tag === "ElFooter";
        });
      } else {
        return false;
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("section", {
        class: normalizeClass([unref(ns).b(), unref(ns).is("vertical", unref(isVertical))])
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 2);
    };
  }
});
var Container = /* @__PURE__ */ _export_sfc$1(_sfc_main$b, [["__file", "container.vue"]]);
const __default__$7 = defineComponent({
  name: "ElAside"
});
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  ...__default__$7,
  props: {
    width: {
      type: String,
      default: null
    }
  },
  setup(__props) {
    const props = __props;
    const ns = useNamespace("aside");
    const style = computed(() => props.width ? ns.cssVarBlock({ width: props.width }) : {});
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("aside", {
        class: normalizeClass(unref(ns).b()),
        style: normalizeStyle(unref(style))
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 6);
    };
  }
});
var Aside = /* @__PURE__ */ _export_sfc$1(_sfc_main$a, [["__file", "aside.vue"]]);
const __default__$6 = defineComponent({
  name: "ElFooter"
});
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  ...__default__$6,
  props: {
    height: {
      type: String,
      default: null
    }
  },
  setup(__props) {
    const props = __props;
    const ns = useNamespace("footer");
    const style = computed(() => props.height ? ns.cssVarBlock({ height: props.height }) : {});
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("footer", {
        class: normalizeClass(unref(ns).b()),
        style: normalizeStyle(unref(style))
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 6);
    };
  }
});
var Footer = /* @__PURE__ */ _export_sfc$1(_sfc_main$9, [["__file", "footer.vue"]]);
const __default__$5 = defineComponent({
  name: "ElHeader"
});
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  ...__default__$5,
  props: {
    height: {
      type: String,
      default: null
    }
  },
  setup(__props) {
    const props = __props;
    const ns = useNamespace("header");
    const style = computed(() => {
      return props.height ? ns.cssVarBlock({
        height: props.height
      }) : {};
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("header", {
        class: normalizeClass(unref(ns).b()),
        style: normalizeStyle(unref(style))
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 6);
    };
  }
});
var Header = /* @__PURE__ */ _export_sfc$1(_sfc_main$8, [["__file", "header.vue"]]);
const __default__$4 = defineComponent({
  name: "ElMain"
});
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  ...__default__$4,
  setup(__props) {
    const ns = useNamespace("main");
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("main", {
        class: normalizeClass(unref(ns).b())
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 2);
    };
  }
});
var Main = /* @__PURE__ */ _export_sfc$1(_sfc_main$7, [["__file", "main.vue"]]);
const ElContainer = withInstall(Container, {
  Aside,
  Footer,
  Header,
  Main
});
withNoopInstall(Aside);
withNoopInstall(Footer);
const ElHeader = withNoopInstall(Header);
withNoopInstall(Main);
const __default__$3 = defineComponent({
  name: "ElMenuCollapseTransition"
});
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  ...__default__$3,
  setup(__props) {
    const ns = useNamespace("menu");
    const listeners = {
      onBeforeEnter: (el) => el.style.opacity = "0.2",
      onEnter(el, done) {
        addClass(el, `${ns.namespace.value}-opacity-transition`);
        el.style.opacity = "1";
        done();
      },
      onAfterEnter(el) {
        removeClass(el, `${ns.namespace.value}-opacity-transition`);
        el.style.opacity = "";
      },
      onBeforeLeave(el) {
        if (!el.dataset)
          el.dataset = {};
        if (hasClass(el, ns.m("collapse"))) {
          removeClass(el, ns.m("collapse"));
          el.dataset.oldOverflow = el.style.overflow;
          el.dataset.scrollWidth = el.clientWidth.toString();
          addClass(el, ns.m("collapse"));
        } else {
          addClass(el, ns.m("collapse"));
          el.dataset.oldOverflow = el.style.overflow;
          el.dataset.scrollWidth = el.clientWidth.toString();
          removeClass(el, ns.m("collapse"));
        }
        el.style.width = `${el.scrollWidth}px`;
        el.style.overflow = "hidden";
      },
      onLeave(el) {
        addClass(el, "horizontal-collapse-transition");
        el.style.width = `${el.dataset.scrollWidth}px`;
      }
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Transition, mergeProps({ mode: "out-in" }, unref(listeners)), {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
      }, 16);
    };
  }
});
var ElMenuCollapseTransition = /* @__PURE__ */ _export_sfc$1(_sfc_main$6, [["__file", "menu-collapse-transition.vue"]]);
function useMenu(instance, currentIndex) {
  const indexPath = computed(() => {
    let parent = instance.parent;
    const path = [currentIndex.value];
    while (parent.type.name !== "ElMenu") {
      if (parent.props.index) {
        path.unshift(parent.props.index);
      }
      parent = parent.parent;
    }
    return path;
  });
  const parentMenu = computed(() => {
    let parent = instance.parent;
    while (parent && !["ElMenu", "ElSubMenu"].includes(parent.type.name)) {
      parent = parent.parent;
    }
    return parent;
  });
  return {
    parentMenu,
    indexPath
  };
}
function useMenuColor(props) {
  const menuBarColor = computed(() => {
    const color = props.backgroundColor;
    return color ? new TinyColor(color).shade(20).toString() : "";
  });
  return menuBarColor;
}
const useMenuCssVar = (props, level) => {
  const ns = useNamespace("menu");
  return computed(() => ns.cssVarBlock({
    "text-color": props.textColor || "",
    "hover-text-color": props.textColor || "",
    "bg-color": props.backgroundColor || "",
    "hover-bg-color": useMenuColor(props).value || "",
    "active-color": props.activeTextColor || "",
    level: `${level}`
  }));
};
const MENU_INJECTION_KEY = "rootMenu";
const SUB_MENU_INJECTION_KEY = "subMenu:";
const subMenuProps = buildProps({
  index: {
    type: String,
    required: true
  },
  showTimeout: Number,
  hideTimeout: Number,
  popperClass: String,
  disabled: Boolean,
  teleported: {
    type: Boolean,
    default: void 0
  },
  popperOffset: Number,
  expandCloseIcon: {
    type: iconPropType
  },
  expandOpenIcon: {
    type: iconPropType
  },
  collapseCloseIcon: {
    type: iconPropType
  },
  collapseOpenIcon: {
    type: iconPropType
  }
});
const COMPONENT_NAME$1 = "ElSubMenu";
var SubMenu = defineComponent({
  name: COMPONENT_NAME$1,
  props: subMenuProps,
  setup(props, { slots, expose }) {
    const instance = getCurrentInstance();
    const { indexPath, parentMenu } = useMenu(instance, computed(() => props.index));
    const nsMenu = useNamespace("menu");
    const nsSubMenu = useNamespace("sub-menu");
    const rootMenu = inject(MENU_INJECTION_KEY);
    if (!rootMenu)
      throwError(COMPONENT_NAME$1, "can not inject root menu");
    const subMenu = inject(`${SUB_MENU_INJECTION_KEY}${parentMenu.value.uid}`);
    if (!subMenu)
      throwError(COMPONENT_NAME$1, "can not inject sub menu");
    const items = ref({});
    const subMenus = ref({});
    let timeout;
    const mouseInChild = ref(false);
    const verticalTitleRef = ref();
    const vPopper = ref();
    const currentPlacement = computed(() => mode.value === "horizontal" && isFirstLevel.value ? "bottom-start" : "right-start");
    const subMenuTitleIcon = computed(() => {
      return mode.value === "horizontal" && isFirstLevel.value || mode.value === "vertical" && !rootMenu.props.collapse ? props.expandCloseIcon && props.expandOpenIcon ? opened.value ? props.expandOpenIcon : props.expandCloseIcon : arrow_down_default : props.collapseCloseIcon && props.collapseOpenIcon ? opened.value ? props.collapseOpenIcon : props.collapseCloseIcon : arrow_right_default;
    });
    const isFirstLevel = computed(() => subMenu.level === 0);
    const appendToBody = computed(() => {
      const value = props.teleported;
      return isUndefined(value) ? isFirstLevel.value : value;
    });
    const menuTransitionName = computed(() => rootMenu.props.collapse ? `${nsMenu.namespace.value}-zoom-in-left` : `${nsMenu.namespace.value}-zoom-in-top`);
    const fallbackPlacements = computed(() => mode.value === "horizontal" && isFirstLevel.value ? [
      "bottom-start",
      "bottom-end",
      "top-start",
      "top-end",
      "right-start",
      "left-start"
    ] : [
      "right-start",
      "right",
      "right-end",
      "left-start",
      "bottom-start",
      "bottom-end",
      "top-start",
      "top-end"
    ]);
    const opened = computed(() => rootMenu.openedMenus.includes(props.index));
    const active = computed(() => [...Object.values(items.value), ...Object.values(subMenus.value)].some(({ active: active2 }) => active2));
    const mode = computed(() => rootMenu.props.mode);
    const persistent = computed(() => rootMenu.props.persistent);
    reactive({
      index: props.index,
      indexPath,
      active
    });
    const ulStyle = useMenuCssVar(rootMenu.props, subMenu.level + 1);
    const subMenuPopperOffset = computed(() => {
      var _a;
      return (_a = props.popperOffset) != null ? _a : rootMenu.props.popperOffset;
    });
    const subMenuPopperClass = computed(() => {
      var _a;
      return (_a = props.popperClass) != null ? _a : rootMenu.props.popperClass;
    });
    const subMenuShowTimeout = computed(() => {
      var _a;
      return (_a = props.showTimeout) != null ? _a : rootMenu.props.showTimeout;
    });
    const subMenuHideTimeout = computed(() => {
      var _a;
      return (_a = props.hideTimeout) != null ? _a : rootMenu.props.hideTimeout;
    });
    const doDestroy = () => {
      var _a, _b, _c;
      return (_c = (_b = (_a = vPopper.value) == null ? void 0 : _a.popperRef) == null ? void 0 : _b.popperInstanceRef) == null ? void 0 : _c.destroy();
    };
    const handleCollapseToggle = (value) => {
      if (!value) {
        doDestroy();
      }
    };
    const handleClick = () => {
      if (rootMenu.props.menuTrigger === "hover" && rootMenu.props.mode === "horizontal" || rootMenu.props.collapse && rootMenu.props.mode === "vertical" || props.disabled)
        return;
      rootMenu.handleSubMenuClick({
        index: props.index,
        indexPath: indexPath.value,
        active: active.value
      });
    };
    const handleMouseenter = (event, showTimeout = subMenuShowTimeout.value) => {
      var _a;
      if (event.type === "focus")
        return;
      if (rootMenu.props.menuTrigger === "click" && rootMenu.props.mode === "horizontal" || !rootMenu.props.collapse && rootMenu.props.mode === "vertical" || props.disabled) {
        subMenu.mouseInChild.value = true;
        return;
      }
      subMenu.mouseInChild.value = true;
      timeout == null ? void 0 : timeout();
      ({ stop: timeout } = useTimeoutFn(() => {
        rootMenu.openMenu(props.index, indexPath.value);
      }, showTimeout));
      if (appendToBody.value) {
        (_a = parentMenu.value.vnode.el) == null ? void 0 : _a.dispatchEvent(new MouseEvent("mouseenter"));
      }
    };
    const handleMouseleave = (deepDispatch = false) => {
      var _a;
      if (rootMenu.props.menuTrigger === "click" && rootMenu.props.mode === "horizontal" || !rootMenu.props.collapse && rootMenu.props.mode === "vertical") {
        subMenu.mouseInChild.value = false;
        return;
      }
      timeout == null ? void 0 : timeout();
      subMenu.mouseInChild.value = false;
      ({ stop: timeout } = useTimeoutFn(() => !mouseInChild.value && rootMenu.closeMenu(props.index, indexPath.value), subMenuHideTimeout.value));
      if (appendToBody.value && deepDispatch) {
        (_a = subMenu.handleMouseleave) == null ? void 0 : _a.call(subMenu, true);
      }
    };
    watch(() => rootMenu.props.collapse, (value) => handleCollapseToggle(Boolean(value)));
    {
      const addSubMenu = (item2) => {
        subMenus.value[item2.index] = item2;
      };
      const removeSubMenu = (item2) => {
        delete subMenus.value[item2.index];
      };
      provide(`${SUB_MENU_INJECTION_KEY}${instance.uid}`, {
        addSubMenu,
        removeSubMenu,
        handleMouseleave,
        mouseInChild,
        level: subMenu.level + 1
      });
    }
    expose({
      opened
    });
    return () => {
      var _a;
      const titleTag = [
        (_a = slots.title) == null ? void 0 : _a.call(slots),
        h(ElIcon, {
          class: nsSubMenu.e("icon-arrow"),
          style: {
            transform: opened.value ? props.expandCloseIcon && props.expandOpenIcon || props.collapseCloseIcon && props.collapseOpenIcon && rootMenu.props.collapse ? "none" : "rotateZ(180deg)" : "none"
          }
        }, {
          default: () => isString(subMenuTitleIcon.value) ? h(instance.appContext.components[subMenuTitleIcon.value]) : h(subMenuTitleIcon.value)
        })
      ];
      const child = rootMenu.isMenuPopup ? h(ElTooltip, {
        ref: vPopper,
        visible: opened.value,
        effect: "light",
        pure: true,
        offset: subMenuPopperOffset.value,
        showArrow: false,
        persistent: persistent.value,
        popperClass: subMenuPopperClass.value,
        placement: currentPlacement.value,
        teleported: appendToBody.value,
        fallbackPlacements: fallbackPlacements.value,
        transition: menuTransitionName.value,
        gpuAcceleration: false
      }, {
        content: () => {
          var _a2;
          return h("div", {
            class: [
              nsMenu.m(mode.value),
              nsMenu.m("popup-container"),
              subMenuPopperClass.value
            ],
            onMouseenter: (evt) => handleMouseenter(evt, 100),
            onMouseleave: () => handleMouseleave(true),
            onFocus: (evt) => handleMouseenter(evt, 100)
          }, [
            h("ul", {
              class: [
                nsMenu.b(),
                nsMenu.m("popup"),
                nsMenu.m(`popup-${currentPlacement.value}`)
              ],
              style: ulStyle.value
            }, [(_a2 = slots.default) == null ? void 0 : _a2.call(slots)])
          ]);
        },
        default: () => h("div", {
          class: nsSubMenu.e("title"),
          onClick: handleClick
        }, titleTag)
      }) : h(Fragment, {}, [
        h("div", {
          class: nsSubMenu.e("title"),
          ref: verticalTitleRef,
          onClick: handleClick
        }, titleTag),
        h(ElCollapseTransition, {}, {
          default: () => {
            var _a2;
            return withDirectives(h("ul", {
              role: "menu",
              class: [nsMenu.b(), nsMenu.m("inline")],
              style: ulStyle.value
            }, [(_a2 = slots.default) == null ? void 0 : _a2.call(slots)]), [[vShow, opened.value]]);
          }
        })
      ]);
      return h("li", {
        class: [
          nsSubMenu.b(),
          nsSubMenu.is("active", active.value),
          nsSubMenu.is("opened", opened.value),
          nsSubMenu.is("disabled", props.disabled)
        ],
        role: "menuitem",
        ariaHaspopup: true,
        ariaExpanded: opened.value,
        onMouseenter: handleMouseenter,
        onMouseleave: () => handleMouseleave(),
        onFocus: handleMouseenter
      }, [child]);
    };
  }
});
const menuProps = buildProps({
  mode: {
    type: String,
    values: ["horizontal", "vertical"],
    default: "vertical"
  },
  defaultActive: {
    type: String,
    default: ""
  },
  defaultOpeneds: {
    type: definePropType(Array),
    default: () => mutable([])
  },
  uniqueOpened: Boolean,
  router: Boolean,
  menuTrigger: {
    type: String,
    values: ["hover", "click"],
    default: "hover"
  },
  collapse: Boolean,
  backgroundColor: String,
  textColor: String,
  activeTextColor: String,
  closeOnClickOutside: Boolean,
  collapseTransition: {
    type: Boolean,
    default: true
  },
  ellipsis: {
    type: Boolean,
    default: true
  },
  popperOffset: {
    type: Number,
    default: 6
  },
  ellipsisIcon: {
    type: iconPropType,
    default: () => more_default
  },
  popperEffect: {
    type: definePropType(String),
    default: "dark"
  },
  popperClass: String,
  showTimeout: {
    type: Number,
    default: 300
  },
  hideTimeout: {
    type: Number,
    default: 300
  },
  persistent: {
    type: Boolean,
    default: true
  }
});
const checkIndexPath = (indexPath) => isArray(indexPath) && indexPath.every((path) => isString(path));
const menuEmits = {
  close: (index, indexPath) => isString(index) && checkIndexPath(indexPath),
  open: (index, indexPath) => isString(index) && checkIndexPath(indexPath),
  select: (index, indexPath, item, routerResult) => isString(index) && checkIndexPath(indexPath) && isObject(item) && (isUndefined(routerResult) || routerResult instanceof Promise)
};
var Menu = defineComponent({
  name: "ElMenu",
  props: menuProps,
  emits: menuEmits,
  setup(props, { emit, slots, expose }) {
    const instance = getCurrentInstance();
    const router = instance.appContext.config.globalProperties.$router;
    const menu = ref();
    const nsMenu = useNamespace("menu");
    const nsSubMenu = useNamespace("sub-menu");
    const sliceIndex = ref(-1);
    const openedMenus = ref(props.defaultOpeneds && !props.collapse ? props.defaultOpeneds.slice(0) : []);
    const activeIndex = ref(props.defaultActive);
    const items = ref({});
    const subMenus = ref({});
    const isMenuPopup = computed(() => props.mode === "horizontal" || props.mode === "vertical" && props.collapse);
    const initMenu = () => {
      const activeItem = activeIndex.value && items.value[activeIndex.value];
      if (!activeItem || props.mode === "horizontal" || props.collapse)
        return;
      const indexPath = activeItem.indexPath;
      indexPath.forEach((index) => {
        const subMenu = subMenus.value[index];
        subMenu && openMenu(index, subMenu.indexPath);
      });
    };
    const openMenu = (index, indexPath) => {
      if (openedMenus.value.includes(index))
        return;
      if (props.uniqueOpened) {
        openedMenus.value = openedMenus.value.filter((index2) => indexPath.includes(index2));
      }
      openedMenus.value.push(index);
      emit("open", index, indexPath);
    };
    const close = (index) => {
      const i = openedMenus.value.indexOf(index);
      if (i !== -1) {
        openedMenus.value.splice(i, 1);
      }
    };
    const closeMenu = (index, indexPath) => {
      close(index);
      emit("close", index, indexPath);
    };
    const handleSubMenuClick = ({
      index,
      indexPath
    }) => {
      const isOpened = openedMenus.value.includes(index);
      isOpened ? closeMenu(index, indexPath) : openMenu(index, indexPath);
    };
    const handleMenuItemClick = (menuItem) => {
      if (props.mode === "horizontal" || props.collapse) {
        openedMenus.value = [];
      }
      const { index, indexPath } = menuItem;
      if (isNil(index) || isNil(indexPath))
        return;
      if (props.router && router) {
        const route = menuItem.route || index;
        const routerResult = router.push(route).then((res) => {
          if (!res)
            activeIndex.value = index;
          return res;
        });
        emit("select", index, indexPath, { index, indexPath, route }, routerResult);
      } else {
        activeIndex.value = index;
        emit("select", index, indexPath, { index, indexPath });
      }
    };
    const updateActiveIndex = (val) => {
      var _a;
      const itemsInData = items.value;
      const item = itemsInData[val] || activeIndex.value && itemsInData[activeIndex.value] || itemsInData[props.defaultActive];
      activeIndex.value = (_a = item == null ? void 0 : item.index) != null ? _a : val;
    };
    const calcMenuItemWidth = (menuItem) => {
      const computedStyle = getComputedStyle(menuItem);
      const marginLeft = Number.parseInt(computedStyle.marginLeft, 10);
      const marginRight = Number.parseInt(computedStyle.marginRight, 10);
      return menuItem.offsetWidth + marginLeft + marginRight || 0;
    };
    const calcSliceIndex = () => {
      var _a, _b;
      if (!menu.value)
        return -1;
      const items2 = Array.from((_b = (_a = menu.value) == null ? void 0 : _a.childNodes) != null ? _b : []).filter((item) => item.nodeName !== "#text" || item.nodeValue);
      const moreItemWidth = 64;
      const computedMenuStyle = getComputedStyle(menu.value);
      const paddingLeft = Number.parseInt(computedMenuStyle.paddingLeft, 10);
      const paddingRight = Number.parseInt(computedMenuStyle.paddingRight, 10);
      const menuWidth = menu.value.clientWidth - paddingLeft - paddingRight;
      let calcWidth = 0;
      let sliceIndex2 = 0;
      items2.forEach((item, index) => {
        if (item.nodeName === "#comment")
          return;
        calcWidth += calcMenuItemWidth(item);
        if (calcWidth <= menuWidth - moreItemWidth) {
          sliceIndex2 = index + 1;
        }
      });
      return sliceIndex2 === items2.length ? -1 : sliceIndex2;
    };
    const getIndexPath = (index) => subMenus.value[index].indexPath;
    const debounce = (fn, wait = 33.34) => {
      let timmer;
      return () => {
        timmer && clearTimeout(timmer);
        timmer = setTimeout(() => {
          fn();
        }, wait);
      };
    };
    let isFirstTimeRender = true;
    const handleResize = () => {
      if (sliceIndex.value === calcSliceIndex())
        return;
      const callback = () => {
        sliceIndex.value = -1;
        nextTick(() => {
          sliceIndex.value = calcSliceIndex();
        });
      };
      isFirstTimeRender ? callback() : debounce(callback)();
      isFirstTimeRender = false;
    };
    watch(() => props.defaultActive, (currentActive) => {
      if (!items.value[currentActive]) {
        activeIndex.value = "";
      }
      updateActiveIndex(currentActive);
    });
    watch(() => props.collapse, (value) => {
      if (value)
        openedMenus.value = [];
    });
    watch(items.value, initMenu);
    let resizeStopper;
    watchEffect(() => {
      if (props.mode === "horizontal" && props.ellipsis)
        resizeStopper = useResizeObserver(menu, handleResize).stop;
      else
        resizeStopper == null ? void 0 : resizeStopper();
    });
    const mouseInChild = ref(false);
    {
      const addSubMenu = (item) => {
        subMenus.value[item.index] = item;
      };
      const removeSubMenu = (item) => {
        delete subMenus.value[item.index];
      };
      const addMenuItem = (item) => {
        items.value[item.index] = item;
      };
      const removeMenuItem = (item) => {
        delete items.value[item.index];
      };
      provide(MENU_INJECTION_KEY, reactive({
        props,
        openedMenus,
        items,
        subMenus,
        activeIndex,
        isMenuPopup,
        addMenuItem,
        removeMenuItem,
        addSubMenu,
        removeSubMenu,
        openMenu,
        closeMenu,
        handleMenuItemClick,
        handleSubMenuClick
      }));
      provide(`${SUB_MENU_INJECTION_KEY}${instance.uid}`, {
        addSubMenu,
        removeSubMenu,
        mouseInChild,
        level: 0
      });
    }
    {
      const open = (index) => {
        const { indexPath } = subMenus.value[index];
        indexPath.forEach((i) => openMenu(i, indexPath));
      };
      expose({
        open,
        close,
        updateActiveIndex,
        handleResize
      });
    }
    const ulStyle = useMenuCssVar(props, 0);
    return () => {
      var _a, _b;
      let slot = (_b = (_a = slots.default) == null ? void 0 : _a.call(slots)) != null ? _b : [];
      const vShowMore = [];
      if (props.mode === "horizontal" && menu.value) {
        const originalSlot = flattedChildren(slot);
        const slotDefault = sliceIndex.value === -1 ? originalSlot : originalSlot.slice(0, sliceIndex.value);
        const slotMore = sliceIndex.value === -1 ? [] : originalSlot.slice(sliceIndex.value);
        if ((slotMore == null ? void 0 : slotMore.length) && props.ellipsis) {
          slot = slotDefault;
          vShowMore.push(h(SubMenu, {
            index: "sub-menu-more",
            class: nsSubMenu.e("hide-arrow"),
            popperOffset: props.popperOffset
          }, {
            title: () => h(ElIcon, {
              class: nsSubMenu.e("icon-more")
            }, {
              default: () => h(props.ellipsisIcon)
            }),
            default: () => slotMore
          }));
        }
      }
      const directives = props.closeOnClickOutside ? [
        [
          ClickOutside,
          () => {
            if (!openedMenus.value.length)
              return;
            if (!mouseInChild.value) {
              openedMenus.value.forEach((openedMenu) => emit("close", openedMenu, getIndexPath(openedMenu)));
              openedMenus.value = [];
            }
          }
        ]
      ] : [];
      const vMenu = withDirectives(h("ul", {
        key: String(props.collapse),
        role: "menubar",
        ref: menu,
        style: ulStyle.value,
        class: {
          [nsMenu.b()]: true,
          [nsMenu.m(props.mode)]: true,
          [nsMenu.m("collapse")]: props.collapse
        }
      }, [...slot, ...vShowMore]), directives);
      if (props.collapseTransition && props.mode === "vertical") {
        return h(ElMenuCollapseTransition, () => vMenu);
      }
      return vMenu;
    };
  }
});
const menuItemProps = buildProps({
  index: {
    type: definePropType([String, null]),
    default: null
  },
  route: {
    type: definePropType([String, Object])
  },
  disabled: Boolean
});
const menuItemEmits = {
  click: (item) => isString(item.index) && isArray(item.indexPath)
};
const COMPONENT_NAME = "ElMenuItem";
const __default__$2 = defineComponent({
  name: COMPONENT_NAME
});
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  ...__default__$2,
  props: menuItemProps,
  emits: menuItemEmits,
  setup(__props, { expose, emit }) {
    const props = __props;
    isPropAbsent(props.index) && debugWarn();
    const instance = getCurrentInstance();
    const rootMenu = inject(MENU_INJECTION_KEY);
    const nsMenu = useNamespace("menu");
    const nsMenuItem = useNamespace("menu-item");
    if (!rootMenu)
      throwError(COMPONENT_NAME, "can not inject root menu");
    const { parentMenu, indexPath } = useMenu(instance, toRef(props, "index"));
    const subMenu = inject(`${SUB_MENU_INJECTION_KEY}${parentMenu.value.uid}`);
    if (!subMenu)
      throwError(COMPONENT_NAME, "can not inject sub menu");
    const active = computed(() => props.index === rootMenu.activeIndex);
    const item = reactive({
      index: props.index,
      indexPath,
      active
    });
    const handleClick = () => {
      if (!props.disabled) {
        rootMenu.handleMenuItemClick({
          index: props.index,
          indexPath: indexPath.value,
          route: props.route
        });
        emit("click", item);
      }
    };
    expose({
      parentMenu,
      rootMenu,
      active,
      nsMenu,
      nsMenuItem,
      handleClick
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("li", {
        class: normalizeClass([
          unref(nsMenuItem).b(),
          unref(nsMenuItem).is("active", unref(active)),
          unref(nsMenuItem).is("disabled", _ctx.disabled)
        ]),
        role: "menuitem",
        tabindex: "-1",
        onClick: handleClick
      }, [
        unref(parentMenu).type.name === "ElMenu" && unref(rootMenu).props.collapse && _ctx.$slots.title ? (openBlock(), createBlock(unref(ElTooltip), {
          key: 0,
          effect: unref(rootMenu).props.popperEffect,
          placement: "right",
          "fallback-placements": ["left"],
          persistent: unref(rootMenu).props.persistent
        }, {
          content: withCtx(() => [
            renderSlot(_ctx.$slots, "title")
          ]),
          default: withCtx(() => [
            createElementVNode("div", {
              class: normalizeClass(unref(nsMenu).be("tooltip", "trigger"))
            }, [
              renderSlot(_ctx.$slots, "default")
            ], 2)
          ]),
          _: 3
        }, 8, ["effect", "persistent"])) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
          renderSlot(_ctx.$slots, "default"),
          renderSlot(_ctx.$slots, "title")
        ], 64))
      ], 2);
    };
  }
});
var MenuItem = /* @__PURE__ */ _export_sfc$1(_sfc_main$5, [["__file", "menu-item.vue"]]);
const menuItemGroupProps = {
  title: String
};
const __default__$1 = defineComponent({
  name: "ElMenuItemGroup"
});
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  ...__default__$1,
  props: menuItemGroupProps,
  setup(__props) {
    const ns = useNamespace("menu-item-group");
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("li", {
        class: normalizeClass(unref(ns).b())
      }, [
        createElementVNode("div", {
          class: normalizeClass(unref(ns).e("title"))
        }, [
          !_ctx.$slots.title ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
            createTextVNode(toDisplayString(_ctx.title), 1)
          ], 64)) : renderSlot(_ctx.$slots, "title", { key: 1 })
        ], 2),
        createElementVNode("ul", null, [
          renderSlot(_ctx.$slots, "default")
        ])
      ], 2);
    };
  }
});
var MenuItemGroup = /* @__PURE__ */ _export_sfc$1(_sfc_main$4, [["__file", "menu-item-group.vue"]]);
const ElMenu = withInstall(Menu, {
  MenuItem,
  MenuItemGroup,
  SubMenu
});
const ElMenuItem = withNoopInstall(MenuItem);
withNoopInstall(MenuItemGroup);
withNoopInstall(SubMenu);
const badgeProps = buildProps({
  value: {
    type: [String, Number],
    default: ""
  },
  max: {
    type: Number,
    default: 99
  },
  isDot: Boolean,
  hidden: Boolean,
  type: {
    type: String,
    values: ["primary", "success", "warning", "info", "danger"],
    default: "danger"
  },
  showZero: {
    type: Boolean,
    default: true
  },
  color: String,
  badgeStyle: {
    type: definePropType([String, Object, Array])
  },
  offset: {
    type: definePropType(Array),
    default: [0, 0]
  },
  badgeClass: {
    type: String
  }
});
const __default__ = defineComponent({
  name: "ElBadge"
});
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: badgeProps,
  setup(__props, { expose }) {
    const props = __props;
    const ns = useNamespace("badge");
    const content = computed(() => {
      if (props.isDot)
        return "";
      if (isNumber(props.value) && isNumber(props.max)) {
        return props.max < props.value ? `${props.max}+` : `${props.value}`;
      }
      return `${props.value}`;
    });
    const style = computed(() => {
      var _a, _b, _c, _d, _e;
      return [
        {
          backgroundColor: props.color,
          marginRight: addUnit(-((_b = (_a = props.offset) == null ? void 0 : _a[0]) != null ? _b : 0)),
          marginTop: addUnit((_d = (_c = props.offset) == null ? void 0 : _c[1]) != null ? _d : 0)
        },
        (_e = props.badgeStyle) != null ? _e : {}
      ];
    });
    expose({
      content
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(unref(ns).b())
      }, [
        renderSlot(_ctx.$slots, "default"),
        createVNode(Transition, {
          name: `${unref(ns).namespace.value}-zoom-in-center`,
          persisted: ""
        }, {
          default: withCtx(() => [
            withDirectives(createElementVNode("sup", {
              class: normalizeClass([
                unref(ns).e("content"),
                unref(ns).em("content", _ctx.type),
                unref(ns).is("fixed", !!_ctx.$slots.default),
                unref(ns).is("dot", _ctx.isDot),
                unref(ns).is("hide-zero", !_ctx.showZero && props.value === 0),
                _ctx.badgeClass
              ]),
              style: normalizeStyle(unref(style))
            }, [
              renderSlot(_ctx.$slots, "content", { value: unref(content) }, () => [
                createTextVNode(toDisplayString(unref(content)), 1)
              ])
            ], 6), [
              [vShow, !_ctx.hidden && (unref(content) || _ctx.isDot || _ctx.$slots.content)]
            ])
          ]),
          _: 3
        }, 8, ["name"])
      ], 2);
    };
  }
});
var Badge = /* @__PURE__ */ _export_sfc$1(_sfc_main$3, [["__file", "badge.vue"]]);
const ElBadge = withInstall(Badge);
const _sfc_main$2 = {
  __name: "AppHeader",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    const authStore = useAuthStore();
    const cartStore = useCartStore();
    const activeIndex = ref("1");
    const profileOpen = ref(false);
    const handleSelect = (key) => {
      activeIndex.value = key;
    };
    const toggleDrawer = () => {
      profileOpen.value = !profileOpen.value;
    };
    const quantity = computed(() => cartStore.totalQuantity);
    const isAuthenticatedUser = computed(() => authStore.isAuthenticatedUser);
    const loggedInUser = computed(
      () => {
        var _a, _b;
        return ((_a = authStore.user) == null ? void 0 : _a.name) || ((_b = authStore.user) == null ? void 0 : _b.displayName) || "";
      }
    );
    const uid = computed(() => {
      var _a;
      return (_a = authStore.user) == null ? void 0 : _a.uid;
    });
    async function signOut() {
      await authStore.logout();
      navigateTo("/");
      await nextTick();
      toggleDrawer();
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_header = ElHeader;
      const _component_el_menu = ElMenu;
      const _component_el_menu_item = ElMenuItem;
      const _component_nuxt_link = __nuxt_component_0;
      const _component_IconShoppingBag = ShoppingBag;
      const _component_ClientOnly = __nuxt_component_5;
      const _component_el_dropdown = ElDropdown;
      const _component_IconCircleUserRound = CircleUserRound;
      const _component_el_avatar = ElAvatar;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_el_icon = ElIcon;
      const _component_el_badge = ElBadge;
      _push(ssrRenderComponent(_component_el_header, mergeProps({
        class: "app-header",
        height: "auto",
        padding: "0"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_el_menu, {
              "default-active": unref(activeIndex),
              class: "el-menu-demo",
              mode: "horizontal",
              "background-color": "#000",
              "text-color": "#fff",
              ellipsis: false,
              onSelect: handleSelect,
              "aria-label": "Main Navigation Menu"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="el-top-menu" data-v-ae10e8c0${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_el_menu_item, { index: "0" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_nuxt_link, {
                          to: "/",
                          class: "logo-link",
                          "aria-label": "Home"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<span class="brand-name" data-v-ae10e8c0${_scopeId4}> RingCart `);
                              _push5(ssrRenderComponent(_component_IconShoppingBag, {
                                size: 10,
                                color: "white"
                              }, null, _parent5, _scopeId4));
                              _push5(`</span>`);
                            } else {
                              return [
                                createVNode("span", { class: "brand-name" }, [
                                  createTextVNode(" RingCart "),
                                  createVNode(_component_IconShoppingBag, {
                                    size: 10,
                                    color: "white"
                                  })
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_nuxt_link, {
                            to: "/",
                            class: "logo-link",
                            "aria-label": "Home"
                          }, {
                            default: withCtx(() => [
                              createVNode("span", { class: "brand-name" }, [
                                createTextVNode(" RingCart "),
                                createVNode(_component_IconShoppingBag, {
                                  size: 10,
                                  color: "white"
                                })
                              ])
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="flex-grow" data-v-ae10e8c0${_scopeId2}></div><div class="desktop-menu" data-v-ae10e8c0${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_ClientOnly, null, {}, _parent3, _scopeId2));
                  _push3(`</div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "el-top-menu" }, [
                      createVNode(_component_el_menu_item, { index: "0" }, {
                        default: withCtx(() => [
                          createVNode(_component_nuxt_link, {
                            to: "/",
                            class: "logo-link",
                            "aria-label": "Home"
                          }, {
                            default: withCtx(() => [
                              createVNode("span", { class: "brand-name" }, [
                                createTextVNode(" RingCart "),
                                createVNode(_component_IconShoppingBag, {
                                  size: 10,
                                  color: "white"
                                })
                              ])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode("div", { class: "flex-grow" }),
                      createVNode("div", { class: "desktop-menu" }, [
                        createVNode(_component_ClientOnly, null, {
                          default: withCtx(() => [
                            createVNode(_component_el_menu_item, {
                              index: "5",
                              role: "button",
                              onClick: ($event) => unref(isAuthenticatedUser) ? toggleDrawer() : ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))("/auth/login"),
                              class: "el-menu-navlist"
                            }, {
                              default: withCtx(() => [
                                !unref(isAuthenticatedUser) ? (openBlock(), createBlock("p", {
                                  key: 0,
                                  class: "display-name"
                                }, "Account")) : (openBlock(), createBlock(_component_el_dropdown, {
                                  key: 1,
                                  trigger: "click",
                                  placement: "bottom-end"
                                }, {
                                  dropdown: withCtx(() => [
                                    createVNode("div", {
                                      class: "profile-content",
                                      style: { "padding": "16px", "min-width": "220px" }
                                    }, [
                                      createVNode("div", {
                                        class: "profile-avatar",
                                        style: { "text-align": "center", "margin-bottom": "12px" }
                                      }, [
                                        createVNode(_component_el_avatar, {
                                          icon: unref(user_filled_default),
                                          size: 70
                                        }, null, 8, ["icon"]),
                                        createVNode("p", null, toDisplayString(("capitalize" in _ctx ? _ctx.capitalize : unref(capitalize))(unref(loggedInUser))), 1)
                                      ]),
                                      createVNode("div", {
                                        class: "el-menu-link",
                                        style: { "margin-bottom": "12px" }
                                      }, [
                                        createVNode(_component_NuxtLink, {
                                          class: "link",
                                          to: `/user/${unref(uid)}`
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_el_icon, null, {
                                              default: withCtx(() => [
                                                createVNode(unref(avatar_default))
                                              ]),
                                              _: 1
                                            }),
                                            createVNode("span", null, "Profile")
                                          ]),
                                          _: 1
                                        }, 8, ["to"]),
                                        createVNode(_component_NuxtLink, {
                                          class: "link",
                                          to: "/orders"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_el_icon, null, {
                                              default: withCtx(() => [
                                                createVNode(unref(grid_default))
                                              ]),
                                              _: 1
                                            }),
                                            createVNode("span", null, "View Orders")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_NuxtLink, {
                                          class: "link",
                                          to: "/profile/preference"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_el_icon, null, {
                                              default: withCtx(() => [
                                                createVNode(unref(setting_default))
                                              ]),
                                              _: 1
                                            }),
                                            createVNode("span", null, "Preference")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      createVNode(UIButton, {
                                        variant: "primary",
                                        size: "large",
                                        onClick: signOut,
                                        label: "SIGN OUT",
                                        style: { "width": "100%" }
                                      }, {
                                        "icon-right": withCtx(() => [
                                          createVNode("span", { class: "ml-2" }, [
                                            createVNode(_component_el_icon, null, {
                                              default: withCtx(() => [
                                                createVNode(unref(switch_button_default))
                                              ]),
                                              _: 1
                                            })
                                          ])
                                        ]),
                                        _: 1
                                      })
                                    ])
                                  ]),
                                  default: withCtx(() => [
                                    createVNode("span", {
                                      class: "el-dropdown-link",
                                      style: { "cursor": "pointer" }
                                    }, [
                                      createVNode(_component_IconCircleUserRound, { color: "white" })
                                    ])
                                  ]),
                                  _: 1
                                }))
                              ]),
                              _: 1
                            }, 8, ["onClick"]),
                            createVNode(_component_el_menu_item, {
                              index: "3",
                              class: "el-menu-navlist",
                              onClick: () => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))("/cart")
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_el_badge, {
                                  value: unref(quantity),
                                  class: "item"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_IconShoppingBag, { color: "white" })
                                  ]),
                                  _: 1
                                }, 8, ["value"])
                              ]),
                              _: 1
                            }, 8, ["onClick"])
                          ]),
                          _: 1
                        })
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_el_menu, {
                "default-active": unref(activeIndex),
                class: "el-menu-demo",
                mode: "horizontal",
                "background-color": "#000",
                "text-color": "#fff",
                ellipsis: false,
                onSelect: handleSelect,
                "aria-label": "Main Navigation Menu"
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "el-top-menu" }, [
                    createVNode(_component_el_menu_item, { index: "0" }, {
                      default: withCtx(() => [
                        createVNode(_component_nuxt_link, {
                          to: "/",
                          class: "logo-link",
                          "aria-label": "Home"
                        }, {
                          default: withCtx(() => [
                            createVNode("span", { class: "brand-name" }, [
                              createTextVNode(" RingCart "),
                              createVNode(_component_IconShoppingBag, {
                                size: 10,
                                color: "white"
                              })
                            ])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "flex-grow" }),
                    createVNode("div", { class: "desktop-menu" }, [
                      createVNode(_component_ClientOnly, null, {
                        default: withCtx(() => [
                          createVNode(_component_el_menu_item, {
                            index: "5",
                            role: "button",
                            onClick: ($event) => unref(isAuthenticatedUser) ? toggleDrawer() : ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))("/auth/login"),
                            class: "el-menu-navlist"
                          }, {
                            default: withCtx(() => [
                              !unref(isAuthenticatedUser) ? (openBlock(), createBlock("p", {
                                key: 0,
                                class: "display-name"
                              }, "Account")) : (openBlock(), createBlock(_component_el_dropdown, {
                                key: 1,
                                trigger: "click",
                                placement: "bottom-end"
                              }, {
                                dropdown: withCtx(() => [
                                  createVNode("div", {
                                    class: "profile-content",
                                    style: { "padding": "16px", "min-width": "220px" }
                                  }, [
                                    createVNode("div", {
                                      class: "profile-avatar",
                                      style: { "text-align": "center", "margin-bottom": "12px" }
                                    }, [
                                      createVNode(_component_el_avatar, {
                                        icon: unref(user_filled_default),
                                        size: 70
                                      }, null, 8, ["icon"]),
                                      createVNode("p", null, toDisplayString(("capitalize" in _ctx ? _ctx.capitalize : unref(capitalize))(unref(loggedInUser))), 1)
                                    ]),
                                    createVNode("div", {
                                      class: "el-menu-link",
                                      style: { "margin-bottom": "12px" }
                                    }, [
                                      createVNode(_component_NuxtLink, {
                                        class: "link",
                                        to: `/user/${unref(uid)}`
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_el_icon, null, {
                                            default: withCtx(() => [
                                              createVNode(unref(avatar_default))
                                            ]),
                                            _: 1
                                          }),
                                          createVNode("span", null, "Profile")
                                        ]),
                                        _: 1
                                      }, 8, ["to"]),
                                      createVNode(_component_NuxtLink, {
                                        class: "link",
                                        to: "/orders"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_el_icon, null, {
                                            default: withCtx(() => [
                                              createVNode(unref(grid_default))
                                            ]),
                                            _: 1
                                          }),
                                          createVNode("span", null, "View Orders")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_NuxtLink, {
                                        class: "link",
                                        to: "/profile/preference"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_el_icon, null, {
                                            default: withCtx(() => [
                                              createVNode(unref(setting_default))
                                            ]),
                                            _: 1
                                          }),
                                          createVNode("span", null, "Preference")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    createVNode(UIButton, {
                                      variant: "primary",
                                      size: "large",
                                      onClick: signOut,
                                      label: "SIGN OUT",
                                      style: { "width": "100%" }
                                    }, {
                                      "icon-right": withCtx(() => [
                                        createVNode("span", { class: "ml-2" }, [
                                          createVNode(_component_el_icon, null, {
                                            default: withCtx(() => [
                                              createVNode(unref(switch_button_default))
                                            ]),
                                            _: 1
                                          })
                                        ])
                                      ]),
                                      _: 1
                                    })
                                  ])
                                ]),
                                default: withCtx(() => [
                                  createVNode("span", {
                                    class: "el-dropdown-link",
                                    style: { "cursor": "pointer" }
                                  }, [
                                    createVNode(_component_IconCircleUserRound, { color: "white" })
                                  ])
                                ]),
                                _: 1
                              }))
                            ]),
                            _: 1
                          }, 8, ["onClick"]),
                          createVNode(_component_el_menu_item, {
                            index: "3",
                            class: "el-menu-navlist",
                            onClick: () => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))("/cart")
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_el_badge, {
                                value: unref(quantity),
                                class: "item"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_IconShoppingBag, { color: "white" })
                                ]),
                                _: 1
                              }, 8, ["value"])
                            ]),
                            _: 1
                          }, 8, ["onClick"])
                        ]),
                        _: 1
                      })
                    ])
                  ])
                ]),
                _: 1
              }, 8, ["default-active"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppHeader.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-ae10e8c0"]]);
const _sfc_main$1 = {
  __name: "AppFooter",
  __ssrInlineRender: true,
  setup(__props) {
    const IconFacebook = defineComponent({
      name: "IconFacebook",
      render() {
        return h(
          "svg",
          {
            viewBox: "0 0 24 24",
            fill: "currentColor",
            width: "1em",
            height: "1em"
          },
          [
            h("path", {
              d: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
            })
          ]
        );
      }
    });
    const IconTwitter = defineComponent({
      name: "IconTwitter",
      render() {
        return h(
          "svg",
          {
            viewBox: "0 0 24 24",
            fill: "currentColor",
            width: "1em",
            height: "1em"
          },
          [
            h("path", {
              d: "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
            })
          ]
        );
      }
    });
    const IconInstagram = defineComponent({
      name: "IconInstagram",
      render() {
        return h(
          "svg",
          {
            viewBox: "0 0 24 24",
            fill: "currentColor",
            width: "1em",
            height: "1em"
          },
          [
            h("path", {
              d: "M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.897 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.897-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"
            })
          ]
        );
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_icon = ElIcon;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "bg-gray-50 border-t border-gray-200 pt-12 pb-8" }, _attrs))} data-v-bf8e5e42><div class="container-wrapper" data-v-bf8e5e42><div class="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8" data-v-bf8e5e42><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" data-v-bf8e5e42><div data-v-bf8e5e42><h3 class="font-bold text-lg mb-4 footer-h" data-v-bf8e5e42> RingCart </h3><p class="text-gray-600 mb-4" data-v-bf8e5e42> Your one-stop destination for the latest smartphones and accessories at competitive prices. </p><div class="flex space-x-4" data-v-bf8e5e42><a href="#" class="text-gray-600 hover:text-black" data-v-bf8e5e42>`);
      _push(ssrRenderComponent(_component_el_icon, { size: 20 }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(IconFacebook), null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(IconFacebook))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</a><a href="#" class="text-gray-600 hover:text-black" data-v-bf8e5e42>`);
      _push(ssrRenderComponent(_component_el_icon, { size: 20 }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(IconTwitter), null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(IconTwitter))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</a><a href="#" class="text-gray-600 hover:text-black" data-v-bf8e5e42>`);
      _push(ssrRenderComponent(_component_el_icon, { size: 20 }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(IconInstagram), null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(IconInstagram))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</a><a href="#" class="text-gray-600 hover:text-black" data-v-bf8e5e42>`);
      _push(ssrRenderComponent(_component_el_icon, { size: 20 }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(video_play_default), null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(video_play_default))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</a></div></div><div data-v-bf8e5e42><h3 class="font-bold text-lg mb-4 footer-h" data-v-bf8e5e42> Quick Links </h3><ul class="space-y-2" data-v-bf8e5e42><li data-v-bf8e5e42>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/about",
        class: "text-gray-600 hover:text-black"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` About Us `);
          } else {
            return [
              createTextVNode(" About Us ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-bf8e5e42>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/blog",
        class: "text-gray-600 hover:text-black"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Blog `);
          } else {
            return [
              createTextVNode(" Blog ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-bf8e5e42>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/faq",
        class: "text-gray-600 hover:text-black"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` FAQs `);
          } else {
            return [
              createTextVNode(" FAQs ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-bf8e5e42>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/shipping",
        class: "text-gray-600 hover:text-black"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Shipping &amp; Returns `);
          } else {
            return [
              createTextVNode(" Shipping & Returns ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></div><div data-v-bf8e5e42><h3 class="font-bold text-lg mb-4 footer-h" data-v-bf8e5e42> Categories </h3><ul class="space-y-2" data-v-bf8e5e42><li data-v-bf8e5e42>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/category/smartphones",
        class: "text-gray-600 hover:text-black"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Smartphones `);
          } else {
            return [
              createTextVNode(" Smartphones ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-bf8e5e42>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/category/tablets",
        class: "text-gray-600 hover:text-black"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Tablets `);
          } else {
            return [
              createTextVNode(" Tablets ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-bf8e5e42>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/category/accessories",
        class: "text-gray-600 hover:text-black"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Accessories `);
          } else {
            return [
              createTextVNode(" Accessories ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-bf8e5e42>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/category/wearables",
        class: "text-gray-600 hover:text-black"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Wearables `);
          } else {
            return [
              createTextVNode(" Wearables ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-bf8e5e42>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/category/refurbished",
        class: "text-gray-600 hover:text-black"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Refurbished `);
          } else {
            return [
              createTextVNode(" Refurbished ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></div><div data-v-bf8e5e42><h3 class="font-bold text-lg mb-4 footer-h" data-v-bf8e5e42> Contact Us </h3><ul class="space-y-3" data-v-bf8e5e42><li class="flex items-start" data-v-bf8e5e42>`);
      _push(ssrRenderComponent(_component_el_icon, {
        size: 20,
        class: "mr-2 text-gray-600 shrink-0 mt-0.5"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(location_default), null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(location_default))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<span class="text-gray-600" data-v-bf8e5e42> 123 Tech Street, Digital City, 10001 </span></li><li class="flex items-center" data-v-bf8e5e42>`);
      _push(ssrRenderComponent(_component_el_icon, {
        size: 20,
        class: "mr-2 text-gray-600"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(phone_default), null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(phone_default))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<span class="text-gray-600" data-v-bf8e5e42>+1 (555) 123-4567</span></li><li class="flex items-center" data-v-bf8e5e42>`);
      _push(ssrRenderComponent(_component_el_icon, {
        size: 20,
        class: "mr-2 text-gray-600"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(message_default), null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(message_default))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<span class="text-gray-600" data-v-bf8e5e42>support@ringcart.app</span></li></ul></div></div><div class="border-t border-gray-200 mt-12 pt-8" data-v-bf8e5e42><div class="flex flex-col md:flex-row justify-between items-center" data-v-bf8e5e42><p class="text-gray-600 text-sm" data-v-bf8e5e42> \xA9 ${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())} RingCart. All rights reserved. </p><div class="flex space-x-4 mt-4 md:mt-0" data-v-bf8e5e42>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/privacy",
        class: "text-gray-600 hover:text-black text-sm"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Privacy Policy `);
          } else {
            return [
              createTextVNode(" Privacy Policy ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/terms",
        class: "text-gray-600 hover:text-black text-sm"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Terms of Service `);
          } else {
            return [
              createTextVNode(" Terms of Service ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/cookies",
        class: "text-gray-600 hover:text-black text-sm"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Cookie Policy `);
          } else {
            return [
              createTextVNode(" Cookie Policy ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div></div></footer>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppFooter.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-bf8e5e42"]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_el_container = ElContainer;
  const _component_AppHeader = __nuxt_component_1;
  const _component_AppFooter = __nuxt_component_2;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "app-layout" }, _attrs))} data-v-71a0ed01>`);
  _push(ssrRenderComponent(_component_el_container, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_AppHeader, null, null, _parent2, _scopeId));
        _push2(`<div class="container-wrapper" data-v-71a0ed01${_scopeId}>`);
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
        _push2(`</div>`);
      } else {
        return [
          createVNode(_component_AppHeader),
          createVNode("div", { class: "container-wrapper" }, [
            renderSlot(_ctx.$slots, "default", {}, void 0, true)
          ])
        ];
      }
    }),
    _: 3
  }, _parent));
  _push(ssrRenderComponent(_component_AppFooter, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-71a0ed01"]]);

export { _default as default };
//# sourceMappingURL=default-B-gORhRT.mjs.map
