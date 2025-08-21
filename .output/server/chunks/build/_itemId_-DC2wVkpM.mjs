import { E as ElRow, a as ElCol } from './index-Dzx92B6d.mjs';
import { E as ElBreadcrumb, a as ElBreadcrumbItem } from './index-D2pPoUN4.mjs';
import { a as ElIcon, a5 as shopping_cart_default, D as star_default, w as withInstall, v as withNoopInstall, _ as _export_sfc$1, a6 as minus_default, R as plus_default, j as buildProps, n as definePropType, a7 as arrow_left_default, b as arrow_right_default, c as close_default } from './el-button-etDYgHTt.mjs';
import { ref, computed, mergeProps, withCtx, createTextVNode, toDisplayString, createVNode, unref, createBlock, createCommentVNode, openBlock, Fragment, renderList, defineComponent, getCurrentInstance, watch, nextTick, provide, renderSlot, useSlots, inject, reactive, withDirectives, createElementBlock, normalizeClass, vShow, shallowRef, isVNode, normalizeStyle, useSSRContext } from 'vue';
import { eagerComputed, useDocumentVisibility, useWindowFocus, useResizeObserver } from '@vueuse/core';
import { m as mutable } from './typescript-B4MtqadT.mjs';
import { G as useCartStore, u as useRoute, b as useNuxtApp, p as isNumber, h as useNamespace, y as throwError, v as isUndefined } from './server.mjs';
import { c as capitalize$1 } from './strings-D1uxkXhq.mjs';
import { E as EVENT_CODE, f as flattedChildren } from './aria-DC1XP1AM.mjs';
import { U as UPDATE_MODEL_EVENT } from './event-BZTOGHfp.mjs';
import { isString } from '@vue/shared';
import { E as ElRate } from './el-rate-XglfJQO_.mjs';
import { E as ElInput } from './index-BkNGL2aN.mjs';
import { a as capitalize } from './index-C_WjPGsK.mjs';
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderList, ssrRenderAttrs, ssrRenderClass, ssrRenderStyle } from 'vue/server-renderer';
import { U as UIButton } from './UIButton-BaUMxFHy.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import { u as useProductStore } from './productStore-CipwQ-mL.mjs';
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
import 'ioredis';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import 'vue-router';
import 'vue-sonner';
import './asyncData-rMXjTC0Q.mjs';
import 'perfect-debounce';

const tabsRootContextKey = Symbol("tabsRootContextKey");
const tabBarProps = buildProps({
  tabs: {
    type: definePropType(Array),
    default: () => mutable([])
  }
});
const COMPONENT_NAME$2 = "ElTabBar";
const __default__$1 = defineComponent({
  name: COMPONENT_NAME$2
});
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  ...__default__$1,
  props: tabBarProps,
  setup(__props, { expose }) {
    const props = __props;
    const instance = getCurrentInstance();
    const rootTabs = inject(tabsRootContextKey);
    if (!rootTabs)
      throwError(COMPONENT_NAME$2, "<el-tabs><el-tab-bar /></el-tabs>");
    const ns = useNamespace("tabs");
    const barRef = ref();
    const barStyle = ref();
    const getBarStyle = () => {
      let offset = 0;
      let tabSize = 0;
      const sizeName = ["top", "bottom"].includes(rootTabs.props.tabPosition) ? "width" : "height";
      const sizeDir = sizeName === "width" ? "x" : "y";
      const position = sizeDir === "x" ? "left" : "top";
      props.tabs.every((tab) => {
        var _a, _b;
        const $el = (_b = (_a = instance.parent) == null ? void 0 : _a.refs) == null ? void 0 : _b[`tab-${tab.uid}`];
        if (!$el)
          return false;
        if (!tab.active) {
          return true;
        }
        offset = $el[`offset${capitalize$1(position)}`];
        tabSize = $el[`client${capitalize$1(sizeName)}`];
        const tabStyles = (void 0).getComputedStyle($el);
        if (sizeName === "width") {
          tabSize -= Number.parseFloat(tabStyles.paddingLeft) + Number.parseFloat(tabStyles.paddingRight);
          offset += Number.parseFloat(tabStyles.paddingLeft);
        }
        return false;
      });
      return {
        [sizeName]: `${tabSize}px`,
        transform: `translate${capitalize$1(sizeDir)}(${offset}px)`
      };
    };
    const update = () => barStyle.value = getBarStyle();
    const saveObserver = [];
    const observerTabs = () => {
      var _a;
      saveObserver.forEach((observer) => observer.stop());
      saveObserver.length = 0;
      const list = (_a = instance.parent) == null ? void 0 : _a.refs;
      if (!list)
        return;
      for (const key in list) {
        if (key.startsWith("tab-")) {
          const _el = list[key];
          if (_el) {
            saveObserver.push(useResizeObserver(_el, update));
          }
        }
      }
    };
    watch(() => props.tabs, async () => {
      await nextTick();
      update();
      observerTabs();
    }, { immediate: true });
    useResizeObserver(barRef, () => update());
    expose({
      ref: barRef,
      update
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref_key: "barRef",
        ref: barRef,
        class: normalizeClass([unref(ns).e("active-bar"), unref(ns).is(unref(rootTabs).props.tabPosition)]),
        style: normalizeStyle(barStyle.value)
      }, null, 6);
    };
  }
});
var TabBar = /* @__PURE__ */ _export_sfc$1(_sfc_main$4, [["__file", "tab-bar.vue"]]);
const tabNavProps = buildProps({
  panes: {
    type: definePropType(Array),
    default: () => mutable([])
  },
  currentName: {
    type: [String, Number],
    default: ""
  },
  editable: Boolean,
  type: {
    type: String,
    values: ["card", "border-card", ""],
    default: ""
  },
  stretch: Boolean
});
const tabNavEmits = {
  tabClick: (tab, tabName, ev) => ev instanceof Event,
  tabRemove: (tab, ev) => ev instanceof Event
};
const COMPONENT_NAME$1 = "ElTabNav";
const TabNav = defineComponent({
  name: COMPONENT_NAME$1,
  props: tabNavProps,
  emits: tabNavEmits,
  setup(props, {
    expose,
    emit
  }) {
    const rootTabs = inject(tabsRootContextKey);
    if (!rootTabs)
      throwError(COMPONENT_NAME$1, `<el-tabs><tab-nav /></el-tabs>`);
    const ns = useNamespace("tabs");
    const visibility = useDocumentVisibility();
    const focused = useWindowFocus();
    const navScroll$ = ref();
    const nav$ = ref();
    const el$ = ref();
    const tabBarRef = ref();
    const scrollable = ref(false);
    const navOffset = ref(0);
    const isFocus = ref(false);
    const focusable = ref(true);
    const sizeName = computed(() => ["top", "bottom"].includes(rootTabs.props.tabPosition) ? "width" : "height");
    const navStyle = computed(() => {
      const dir = sizeName.value === "width" ? "X" : "Y";
      return {
        transform: `translate${dir}(-${navOffset.value}px)`
      };
    });
    const scrollPrev = () => {
      if (!navScroll$.value)
        return;
      const containerSize = navScroll$.value[`offset${capitalize$1(sizeName.value)}`];
      const currentOffset = navOffset.value;
      if (!currentOffset)
        return;
      const newOffset = currentOffset > containerSize ? currentOffset - containerSize : 0;
      navOffset.value = newOffset;
    };
    const scrollNext = () => {
      if (!navScroll$.value || !nav$.value)
        return;
      const navSize = nav$.value[`offset${capitalize$1(sizeName.value)}`];
      const containerSize = navScroll$.value[`offset${capitalize$1(sizeName.value)}`];
      const currentOffset = navOffset.value;
      if (navSize - currentOffset <= containerSize)
        return;
      const newOffset = navSize - currentOffset > containerSize * 2 ? currentOffset + containerSize : navSize - containerSize;
      navOffset.value = newOffset;
    };
    const scrollToActiveTab = async () => {
      const nav = nav$.value;
      if (!scrollable.value || !el$.value || !navScroll$.value || !nav)
        return;
      await nextTick();
      const activeTab = el$.value.querySelector(".is-active");
      if (!activeTab)
        return;
      const navScroll = navScroll$.value;
      const isHorizontal = ["top", "bottom"].includes(rootTabs.props.tabPosition);
      const activeTabBounding = activeTab.getBoundingClientRect();
      const navScrollBounding = navScroll.getBoundingClientRect();
      const maxOffset = isHorizontal ? nav.offsetWidth - navScrollBounding.width : nav.offsetHeight - navScrollBounding.height;
      const currentOffset = navOffset.value;
      let newOffset = currentOffset;
      if (isHorizontal) {
        if (activeTabBounding.left < navScrollBounding.left) {
          newOffset = currentOffset - (navScrollBounding.left - activeTabBounding.left);
        }
        if (activeTabBounding.right > navScrollBounding.right) {
          newOffset = currentOffset + activeTabBounding.right - navScrollBounding.right;
        }
      } else {
        if (activeTabBounding.top < navScrollBounding.top) {
          newOffset = currentOffset - (navScrollBounding.top - activeTabBounding.top);
        }
        if (activeTabBounding.bottom > navScrollBounding.bottom) {
          newOffset = currentOffset + (activeTabBounding.bottom - navScrollBounding.bottom);
        }
      }
      newOffset = Math.max(newOffset, 0);
      navOffset.value = Math.min(newOffset, maxOffset);
    };
    const update = () => {
      var _a;
      if (!nav$.value || !navScroll$.value)
        return;
      props.stretch && ((_a = tabBarRef.value) == null ? void 0 : _a.update());
      const navSize = nav$.value[`offset${capitalize$1(sizeName.value)}`];
      const containerSize = navScroll$.value[`offset${capitalize$1(sizeName.value)}`];
      const currentOffset = navOffset.value;
      if (containerSize < navSize) {
        scrollable.value = scrollable.value || {};
        scrollable.value.prev = currentOffset;
        scrollable.value.next = currentOffset + containerSize < navSize;
        if (navSize - currentOffset < containerSize) {
          navOffset.value = navSize - containerSize;
        }
      } else {
        scrollable.value = false;
        if (currentOffset > 0) {
          navOffset.value = 0;
        }
      }
    };
    const changeTab = (event) => {
      let step = 0;
      switch (event.code) {
        case EVENT_CODE.left:
        case EVENT_CODE.up:
          step = -1;
          break;
        case EVENT_CODE.right:
        case EVENT_CODE.down:
          step = 1;
          break;
        default:
          return;
      }
      const tabList = Array.from(event.currentTarget.querySelectorAll("[role=tab]:not(.is-disabled)"));
      const currentIndex = tabList.indexOf(event.target);
      let nextIndex = currentIndex + step;
      if (nextIndex < 0) {
        nextIndex = tabList.length - 1;
      } else if (nextIndex >= tabList.length) {
        nextIndex = 0;
      }
      tabList[nextIndex].focus({
        preventScroll: true
      });
      tabList[nextIndex].click();
      setFocus();
    };
    const setFocus = () => {
      if (focusable.value)
        isFocus.value = true;
    };
    const removeFocus = () => isFocus.value = false;
    watch(visibility, (visibility2) => {
      if (visibility2 === "hidden") {
        focusable.value = false;
      } else if (visibility2 === "visible") {
        setTimeout(() => focusable.value = true, 50);
      }
    });
    watch(focused, (focused2) => {
      if (focused2) {
        setTimeout(() => focusable.value = true, 50);
      } else {
        focusable.value = false;
      }
    });
    useResizeObserver(el$, update);
    expose({
      scrollToActiveTab,
      removeFocus,
      tabListRef: nav$,
      tabBarRef
    });
    return () => {
      const scrollBtn = scrollable.value ? [createVNode("span", {
        "class": [ns.e("nav-prev"), ns.is("disabled", !scrollable.value.prev)],
        "onClick": scrollPrev
      }, [createVNode(ElIcon, null, {
        default: () => [createVNode(arrow_left_default, null, null)]
      })]), createVNode("span", {
        "class": [ns.e("nav-next"), ns.is("disabled", !scrollable.value.next)],
        "onClick": scrollNext
      }, [createVNode(ElIcon, null, {
        default: () => [createVNode(arrow_right_default, null, null)]
      })])] : null;
      const tabs = props.panes.map((pane, index) => {
        var _a, _b, _c, _d;
        const uid = pane.uid;
        const disabled = pane.props.disabled;
        const tabName = (_b = (_a = pane.props.name) != null ? _a : pane.index) != null ? _b : `${index}`;
        const closable = !disabled && (pane.isClosable || props.editable);
        pane.index = `${index}`;
        const btnClose = closable ? createVNode(ElIcon, {
          "class": "is-icon-close",
          "onClick": (ev) => emit("tabRemove", pane, ev)
        }, {
          default: () => [createVNode(close_default, null, null)]
        }) : null;
        const tabLabelContent = ((_d = (_c = pane.slots).label) == null ? void 0 : _d.call(_c)) || pane.props.label;
        const tabindex = !disabled && pane.active ? 0 : -1;
        return createVNode("div", {
          "ref": `tab-${uid}`,
          "class": [ns.e("item"), ns.is(rootTabs.props.tabPosition), ns.is("active", pane.active), ns.is("disabled", disabled), ns.is("closable", closable), ns.is("focus", isFocus.value)],
          "id": `tab-${tabName}`,
          "key": `tab-${uid}`,
          "aria-controls": `pane-${tabName}`,
          "role": "tab",
          "aria-selected": pane.active,
          "tabindex": tabindex,
          "onFocus": () => setFocus(),
          "onBlur": () => removeFocus(),
          "onClick": (ev) => {
            removeFocus();
            emit("tabClick", pane, tabName, ev);
          },
          "onKeydown": (ev) => {
            if (closable && (ev.code === EVENT_CODE.delete || ev.code === EVENT_CODE.backspace)) {
              emit("tabRemove", pane, ev);
            }
          }
        }, [...[tabLabelContent, btnClose]]);
      });
      return createVNode("div", {
        "ref": el$,
        "class": [ns.e("nav-wrap"), ns.is("scrollable", !!scrollable.value), ns.is(rootTabs.props.tabPosition)]
      }, [scrollBtn, createVNode("div", {
        "class": ns.e("nav-scroll"),
        "ref": navScroll$
      }, [createVNode("div", {
        "class": [ns.e("nav"), ns.is(rootTabs.props.tabPosition), ns.is("stretch", props.stretch && ["top", "bottom"].includes(rootTabs.props.tabPosition))],
        "ref": nav$,
        "style": navStyle.value,
        "role": "tablist",
        "onKeydown": changeTab
      }, [...[!props.type ? createVNode(TabBar, {
        "ref": tabBarRef,
        "tabs": [...props.panes]
      }, null) : null, tabs]])])]);
    };
  }
});
const getOrderedChildren = (vm, childComponentName, children) => {
  const nodes = flattedChildren(vm.subTree).filter((n) => {
    var _a;
    return isVNode(n) && ((_a = n.type) == null ? void 0 : _a.name) === childComponentName && !!n.component;
  });
  const uids = nodes.map((n) => n.component.uid);
  return uids.map((uid) => children[uid]).filter((p) => !!p);
};
const useOrderedChildren = (vm, childComponentName) => {
  const children = {};
  const orderedChildren = shallowRef([]);
  const addChild = (child) => {
    children[child.uid] = child;
    orderedChildren.value = getOrderedChildren(vm, childComponentName, children);
  };
  const removeChild = (uid) => {
    delete children[uid];
    orderedChildren.value = orderedChildren.value.filter((children2) => children2.uid !== uid);
  };
  return {
    children: orderedChildren,
    addChild,
    removeChild
  };
};
const tabsProps = buildProps({
  type: {
    type: String,
    values: ["card", "border-card", ""],
    default: ""
  },
  closable: Boolean,
  addable: Boolean,
  modelValue: {
    type: [String, Number]
  },
  editable: Boolean,
  tabPosition: {
    type: String,
    values: ["top", "right", "bottom", "left"],
    default: "top"
  },
  beforeLeave: {
    type: definePropType(Function),
    default: () => true
  },
  stretch: Boolean
});
const isPaneName = (value) => isString(value) || isNumber(value);
const tabsEmits = {
  [UPDATE_MODEL_EVENT]: (name) => isPaneName(name),
  tabClick: (pane, ev) => ev instanceof Event,
  tabChange: (name) => isPaneName(name),
  edit: (paneName, action) => ["remove", "add"].includes(action),
  tabRemove: (name) => isPaneName(name),
  tabAdd: () => true
};
const Tabs = defineComponent({
  name: "ElTabs",
  props: tabsProps,
  emits: tabsEmits,
  setup(props, {
    emit,
    slots,
    expose
  }) {
    var _a;
    const ns = useNamespace("tabs");
    const isVertical = computed(() => ["left", "right"].includes(props.tabPosition));
    const {
      children: panes,
      addChild: sortPane,
      removeChild: unregisterPane
    } = useOrderedChildren(getCurrentInstance(), "ElTabPane");
    const nav$ = ref();
    const currentName = ref((_a = props.modelValue) != null ? _a : "0");
    const setCurrentName = async (value, trigger = false) => {
      var _a2, _b;
      if (currentName.value === value || isUndefined(value))
        return;
      try {
        let canLeave;
        if (props.beforeLeave) {
          const result2 = props.beforeLeave(value, currentName.value);
          canLeave = result2 instanceof Promise ? await result2 : result2;
        } else {
          canLeave = true;
        }
        if (canLeave !== false) {
          currentName.value = value;
          if (trigger) {
            emit(UPDATE_MODEL_EVENT, value);
            emit("tabChange", value);
          }
          (_b = (_a2 = nav$.value) == null ? void 0 : _a2.removeFocus) == null ? void 0 : _b.call(_a2);
        }
      } catch (e) {
      }
    };
    const handleTabClick = (tab, tabName, event) => {
      if (tab.props.disabled)
        return;
      emit("tabClick", tab, event);
      setCurrentName(tabName, true);
    };
    const handleTabRemove = (pane, ev) => {
      if (pane.props.disabled || isUndefined(pane.props.name))
        return;
      ev.stopPropagation();
      emit("edit", pane.props.name, "remove");
      emit("tabRemove", pane.props.name);
    };
    const handleTabAdd = () => {
      emit("edit", void 0, "add");
      emit("tabAdd");
    };
    watch(() => props.modelValue, (modelValue) => setCurrentName(modelValue));
    watch(currentName, async () => {
      var _a2;
      await nextTick();
      (_a2 = nav$.value) == null ? void 0 : _a2.scrollToActiveTab();
    });
    provide(tabsRootContextKey, {
      props,
      currentName,
      registerPane: (pane) => {
        panes.value.push(pane);
      },
      sortPane,
      unregisterPane
    });
    expose({
      currentName,
      tabNavRef: nav$
    });
    const TabNavRenderer = ({
      render
    }) => {
      return render();
    };
    return () => {
      const addSlot = slots["add-icon"];
      const newButton = props.editable || props.addable ? createVNode("div", {
        "class": [ns.e("new-tab"), isVertical.value && ns.e("new-tab-vertical")],
        "tabindex": "0",
        "onClick": handleTabAdd,
        "onKeydown": (ev) => {
          if ([EVENT_CODE.enter, EVENT_CODE.numpadEnter].includes(ev.code))
            handleTabAdd();
        }
      }, [addSlot ? renderSlot(slots, "add-icon") : createVNode(ElIcon, {
        "class": ns.is("icon-plus")
      }, {
        default: () => [createVNode(plus_default, null, null)]
      })]) : null;
      const header = createVNode("div", {
        "class": [ns.e("header"), isVertical.value && ns.e("header-vertical"), ns.is(props.tabPosition)]
      }, [createVNode(TabNavRenderer, {
        "render": () => {
          const hasLabelSlot = panes.value.some((pane) => pane.slots.label);
          return createVNode(TabNav, {
            ref: nav$,
            currentName: currentName.value,
            editable: props.editable,
            type: props.type,
            panes: panes.value,
            stretch: props.stretch,
            onTabClick: handleTabClick,
            onTabRemove: handleTabRemove
          }, {
            $stable: !hasLabelSlot
          });
        }
      }, null), newButton]);
      const panels = createVNode("div", {
        "class": ns.e("content")
      }, [renderSlot(slots, "default")]);
      return createVNode("div", {
        "class": [ns.b(), ns.m(props.tabPosition), {
          [ns.m("card")]: props.type === "card",
          [ns.m("border-card")]: props.type === "border-card"
        }]
      }, [panels, header]);
    };
  }
});
var Tabs$1 = Tabs;
const tabPaneProps = buildProps({
  label: {
    type: String,
    default: ""
  },
  name: {
    type: [String, Number]
  },
  closable: Boolean,
  disabled: Boolean,
  lazy: Boolean
});
const COMPONENT_NAME = "ElTabPane";
const __default__ = defineComponent({
  name: COMPONENT_NAME
});
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: tabPaneProps,
  setup(__props) {
    const props = __props;
    const instance = getCurrentInstance();
    const slots = useSlots();
    const tabsRoot = inject(tabsRootContextKey);
    if (!tabsRoot)
      throwError(COMPONENT_NAME, "usage: <el-tabs><el-tab-pane /></el-tabs/>");
    const ns = useNamespace("tab-pane");
    const index = ref();
    const isClosable = computed(() => props.closable || tabsRoot.props.closable);
    const active = eagerComputed(() => {
      var _a;
      return tabsRoot.currentName.value === ((_a = props.name) != null ? _a : index.value);
    });
    const loaded = ref(active.value);
    const paneName = computed(() => {
      var _a;
      return (_a = props.name) != null ? _a : index.value;
    });
    const shouldBeRender = eagerComputed(() => !props.lazy || loaded.value || active.value);
    watch(active, (val) => {
      if (val)
        loaded.value = true;
    });
    const pane = reactive({
      uid: instance.uid,
      slots,
      props,
      paneName,
      active,
      index,
      isClosable
    });
    tabsRoot.registerPane(pane);
    return (_ctx, _cache) => {
      return unref(shouldBeRender) ? withDirectives((openBlock(), createElementBlock("div", {
        key: 0,
        id: `pane-${unref(paneName)}`,
        class: normalizeClass(unref(ns).b()),
        role: "tabpanel",
        "aria-hidden": !unref(active),
        "aria-labelledby": `tab-${unref(paneName)}`
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 10, ["id", "aria-hidden", "aria-labelledby"])), [
        [vShow, unref(active)]
      ]) : createCommentVNode("v-if", true);
    };
  }
});
var TabPane = /* @__PURE__ */ _export_sfc$1(_sfc_main$3, [["__file", "tab-pane.vue"]]);
const ElTabs = withInstall(Tabs$1, {
  TabPane
});
const ElTabPane = withNoopInstall(TabPane);
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
    const overallRating = ref(4.5);
    const totalReviews = ref(24);
    const userRating = ref(0);
    const ratingErrorMessage = ref("");
    const userComment = ref("");
    const reviewSubmitted = ref(false);
    const reviewsLoaded = ref(false);
    const tabActiveName = ref("details");
    const { $toast } = useNuxtApp();
    const reviews = ref([]);
    async function loadReviews() {
      if (reviewsLoaded.value) return;
      try {
        const res = await $fetch("/api/products/review", {
          params: { productId }
        });
        if (res.success) {
          overallRating.value = res.averageRating;
          totalReviews.value = res.totalReviews;
          reviews.value = res.reviews || [];
          reviewsLoaded.value = true;
        }
      } catch (err) {
        $toast.error(result.error);
        console.error("Failed to load reviews", err);
      }
    }
    function formatDate(dateStr) {
      if (!dateStr) return "";
      const date = new Date(dateStr);
      return date.toLocaleDateString(void 0, {
        year: "numeric",
        month: "short",
        day: "numeric"
      });
    }
    function handleTabClick(tab) {
      if (tab.paneName === "ratings") {
        loadReviews();
      }
    }
    function submitReview() {
      if (!userRating.value || !userComment.value.trim()) {
        ratingErrorMessage.value = "Please provide a rating and comment before submitting.";
        setTimeout(() => {
          errorMessage.value = "";
        }, 3e3);
        return;
      }
      reviewSubmitted.value = true;
      $fetch("/api/products/review", {
        method: "POST",
        body: {
          productId,
          userRating: userRating.value,
          userComment: userComment.value
        }
      });
      setTimeout(() => {
        userRating.value = 0;
        userComment.value = "";
        reviewSubmitted.value = false;
      }, 3e3);
    }
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
    const similarProducts = ref([]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_row = ElRow;
      const _component_el_col = ElCol;
      const _component_el_breadcrumb = ElBreadcrumb;
      const _component_el_breadcrumb_item = ElBreadcrumbItem;
      const _component_el_icon = ElIcon;
      const _component_el_tabs = ElTabs;
      const _component_el_tab_pane = ElTabPane;
      const _component_el_rate = ElRate;
      const _component_el_input = ElInput;
      _push(ssrRenderComponent(_component_el_row, mergeProps({ class: "product__grid product" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_el_col, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_el_breadcrumb, {
                    separator: "/",
                    class: "mb-4"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_el_breadcrumb_item, { to: "/" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Home`);
                            } else {
                              return [
                                createTextVNode("Home")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_el_breadcrumb_item, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Categories`);
                            } else {
                              return [
                                createTextVNode("Categories")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_el_breadcrumb_item, { to: "/products" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Products`);
                            } else {
                              return [
                                createTextVNode("Products")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_el_breadcrumb_item, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            var _a, _b;
                            if (_push5) {
                              _push5(`${ssrInterpolate((_a = item.value) == null ? void 0 : _a.name)}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString((_b = item.value) == null ? void 0 : _b.name), 1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
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
                              createTextVNode("Categories")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_el_breadcrumb_item, { to: "/products" }, {
                            default: withCtx(() => [
                              createTextVNode("Products")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_el_breadcrumb_item, null, {
                            default: withCtx(() => {
                              var _a;
                              return [
                                createTextVNode(toDisplayString((_a = item.value) == null ? void 0 : _a.name), 1)
                              ];
                            }),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_el_row, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_el_col, { md: 12 }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="product__item-image" data-v-33d4d31f${_scopeId4}><img${ssrRenderAttr("src", itemImageUrl.value)} class="img-fluid \${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle" alt data-v-33d4d31f${_scopeId4}></div>`);
                            } else {
                              return [
                                createVNode("div", { class: "product__item-image" }, [
                                  createVNode("img", {
                                    src: itemImageUrl.value,
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
                              _push5(`<div class="item__contents-head" data-v-33d4d31f${_scopeId4}><h3 class="capitalize item__contents-name" data-v-33d4d31f${_scopeId4}>${ssrInterpolate((_a = item.value) == null ? void 0 : _a.name)}</h3></div><div class="item__contents-quantity-price" data-v-33d4d31f${_scopeId4}><span class="item__contents-quantity-price" data-v-33d4d31f${_scopeId4}>${ssrInterpolate(unref(toUSD)(itemPrice.value || 0))}</span></div><div class="item__contents-description" data-v-33d4d31f${_scopeId4}><p class="item__contents-description" data-v-33d4d31f${_scopeId4}>${ssrInterpolate((_b = item.value) == null ? void 0 : _b.description)}</p></div><div class="variant" data-v-33d4d31f${_scopeId4}>`);
                              _push5(ssrRenderComponent(_component_el_col, { class: "item__contents-variant" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  var _a2, _b2;
                                  if (_push6) {
                                    if (item.value && ((_a2 = item.value.bundles) == null ? void 0 : _a2.length) > 0) {
                                      _push6(`<div class="item__contents-bundle" data-v-33d4d31f${_scopeId5}><p class="item__contents-spec-variant" data-v-33d4d31f${_scopeId5}><span data-v-33d4d31f${_scopeId5}>Bundle Options </span>: 16GB/256GB </p><div class="item__contents-bundle-options" data-v-33d4d31f${_scopeId5}><!--[-->`);
                                      ssrRenderList(item.value.bundles, (item2) => {
                                        _push6(ssrRenderComponent(unref(UIButton), {
                                          class: {
                                            "is-active": itemBundle.value.id === item2.id
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
                                    _push6(`<div class="item__contents-variants" data-v-33d4d31f${_scopeId5}><p class="item__contents-spec-variant" data-v-33d4d31f${_scopeId5}><span data-v-33d4d31f${_scopeId5}>Color</span>: ${ssrInterpolate(("capitalize" in _ctx ? _ctx.capitalize : unref(capitalize))(selectedVariant.value.color))}</p>`);
                                    _push6(ssrRenderComponent(unref(UIColorBox), {
                                      variants: item.value.variant,
                                      activeVariant: selectedVariant.value,
                                      "onUpdate:activeVariant": ($event) => selectedVariant.value = $event
                                    }, null, _parent6, _scopeId5));
                                    if (unref(errorMessage)) {
                                      _push6(`<p class="error el-tag--danger" data-v-33d4d31f${_scopeId5}>${ssrInterpolate(unref(errorMessage))}</p>`);
                                    } else {
                                      _push6(`<!---->`);
                                    }
                                    _push6(`</div><div class="item__contents-quantity" data-v-33d4d31f${_scopeId5}><p class="" data-v-33d4d31f${_scopeId5}><span data-v-33d4d31f${_scopeId5}>Quantity</span>:</p>`);
                                    _push6(ssrRenderComponent(unref(UICounter), {
                                      modelValue: qty.value,
                                      "onUpdate:modelValue": ($event) => qty.value = $event
                                    }, null, _parent6, _scopeId5));
                                    _push6(`</div>`);
                                  } else {
                                    return [
                                      item.value && ((_b2 = item.value.bundles) == null ? void 0 : _b2.length) > 0 ? (openBlock(), createBlock("div", {
                                        key: 0,
                                        class: "item__contents-bundle"
                                      }, [
                                        createVNode("p", { class: "item__contents-spec-variant" }, [
                                          createVNode("span", null, "Bundle Options "),
                                          createTextVNode(": 16GB/256GB ")
                                        ]),
                                        createVNode("div", { class: "item__contents-bundle-options" }, [
                                          (openBlock(true), createBlock(Fragment, null, renderList(item.value.bundles, (item2) => {
                                            return openBlock(), createBlock(unref(UIButton), {
                                              class: {
                                                "is-active": itemBundle.value.id === item2.id
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
                                          createTextVNode(": " + toDisplayString(("capitalize" in _ctx ? _ctx.capitalize : unref(capitalize))(selectedVariant.value.color)), 1)
                                        ]),
                                        createVNode(unref(UIColorBox), {
                                          variants: item.value.variant,
                                          activeVariant: selectedVariant.value,
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
                                          modelValue: qty.value,
                                          "onUpdate:modelValue": ($event) => qty.value = $event
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`</div><div class="action-qty" data-v-33d4d31f${_scopeId4}>`);
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
                                  createVNode("h3", { class: "capitalize item__contents-name" }, toDisplayString((_c = item.value) == null ? void 0 : _c.name), 1)
                                ]),
                                createVNode("div", { class: "item__contents-quantity-price" }, [
                                  createVNode("span", { class: "item__contents-quantity-price" }, toDisplayString(unref(toUSD)(itemPrice.value || 0)), 1)
                                ]),
                                createVNode("div", { class: "item__contents-description" }, [
                                  createVNode("p", { class: "item__contents-description" }, toDisplayString((_d = item.value) == null ? void 0 : _d.description), 1)
                                ]),
                                createVNode("div", { class: "variant" }, [
                                  createVNode(_component_el_col, { class: "item__contents-variant" }, {
                                    default: withCtx(() => {
                                      var _a2;
                                      return [
                                        item.value && ((_a2 = item.value.bundles) == null ? void 0 : _a2.length) > 0 ? (openBlock(), createBlock("div", {
                                          key: 0,
                                          class: "item__contents-bundle"
                                        }, [
                                          createVNode("p", { class: "item__contents-spec-variant" }, [
                                            createVNode("span", null, "Bundle Options "),
                                            createTextVNode(": 16GB/256GB ")
                                          ]),
                                          createVNode("div", { class: "item__contents-bundle-options" }, [
                                            (openBlock(true), createBlock(Fragment, null, renderList(item.value.bundles, (item2) => {
                                              return openBlock(), createBlock(unref(UIButton), {
                                                class: {
                                                  "is-active": itemBundle.value.id === item2.id
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
                                            createTextVNode(": " + toDisplayString(("capitalize" in _ctx ? _ctx.capitalize : unref(capitalize))(selectedVariant.value.color)), 1)
                                          ]),
                                          createVNode(unref(UIColorBox), {
                                            variants: item.value.variant,
                                            activeVariant: selectedVariant.value,
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
                                            modelValue: qty.value,
                                            "onUpdate:modelValue": ($event) => qty.value = $event
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
                              createVNode("div", { class: "product__item-image" }, [
                                createVNode("img", {
                                  src: itemImageUrl.value,
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
                                  createVNode("h3", { class: "capitalize item__contents-name" }, toDisplayString((_a = item.value) == null ? void 0 : _a.name), 1)
                                ]),
                                createVNode("div", { class: "item__contents-quantity-price" }, [
                                  createVNode("span", { class: "item__contents-quantity-price" }, toDisplayString(unref(toUSD)(itemPrice.value || 0)), 1)
                                ]),
                                createVNode("div", { class: "item__contents-description" }, [
                                  createVNode("p", { class: "item__contents-description" }, toDisplayString((_b = item.value) == null ? void 0 : _b.description), 1)
                                ]),
                                createVNode("div", { class: "variant" }, [
                                  createVNode(_component_el_col, { class: "item__contents-variant" }, {
                                    default: withCtx(() => {
                                      var _a2;
                                      return [
                                        item.value && ((_a2 = item.value.bundles) == null ? void 0 : _a2.length) > 0 ? (openBlock(), createBlock("div", {
                                          key: 0,
                                          class: "item__contents-bundle"
                                        }, [
                                          createVNode("p", { class: "item__contents-spec-variant" }, [
                                            createVNode("span", null, "Bundle Options "),
                                            createTextVNode(": 16GB/256GB ")
                                          ]),
                                          createVNode("div", { class: "item__contents-bundle-options" }, [
                                            (openBlock(true), createBlock(Fragment, null, renderList(item.value.bundles, (item2) => {
                                              return openBlock(), createBlock(unref(UIButton), {
                                                class: {
                                                  "is-active": itemBundle.value.id === item2.id
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
                                            createTextVNode(": " + toDisplayString(("capitalize" in _ctx ? _ctx.capitalize : unref(capitalize))(selectedVariant.value.color)), 1)
                                          ]),
                                          createVNode(unref(UIColorBox), {
                                            variants: item.value.variant,
                                            activeVariant: selectedVariant.value,
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
                                            modelValue: qty.value,
                                            "onUpdate:modelValue": ($event) => qty.value = $event
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
                    createVNode(_component_el_breadcrumb, {
                      separator: "/",
                      class: "mb-4"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_el_breadcrumb_item, { to: "/" }, {
                          default: withCtx(() => [
                            createTextVNode("Home")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_el_breadcrumb_item, null, {
                          default: withCtx(() => [
                            createTextVNode("Categories")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_el_breadcrumb_item, { to: "/products" }, {
                          default: withCtx(() => [
                            createTextVNode("Products")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_el_breadcrumb_item, null, {
                          default: withCtx(() => {
                            var _a;
                            return [
                              createTextVNode(toDisplayString((_a = item.value) == null ? void 0 : _a.name), 1)
                            ];
                          }),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_el_row, null, {
                      default: withCtx(() => [
                        createVNode(_component_el_col, { md: 12 }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "product__item-image" }, [
                              createVNode("img", {
                                src: itemImageUrl.value,
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
                                createVNode("h3", { class: "capitalize item__contents-name" }, toDisplayString((_a = item.value) == null ? void 0 : _a.name), 1)
                              ]),
                              createVNode("div", { class: "item__contents-quantity-price" }, [
                                createVNode("span", { class: "item__contents-quantity-price" }, toDisplayString(unref(toUSD)(itemPrice.value || 0)), 1)
                              ]),
                              createVNode("div", { class: "item__contents-description" }, [
                                createVNode("p", { class: "item__contents-description" }, toDisplayString((_b = item.value) == null ? void 0 : _b.description), 1)
                              ]),
                              createVNode("div", { class: "variant" }, [
                                createVNode(_component_el_col, { class: "item__contents-variant" }, {
                                  default: withCtx(() => {
                                    var _a2;
                                    return [
                                      item.value && ((_a2 = item.value.bundles) == null ? void 0 : _a2.length) > 0 ? (openBlock(), createBlock("div", {
                                        key: 0,
                                        class: "item__contents-bundle"
                                      }, [
                                        createVNode("p", { class: "item__contents-spec-variant" }, [
                                          createVNode("span", null, "Bundle Options "),
                                          createTextVNode(": 16GB/256GB ")
                                        ]),
                                        createVNode("div", { class: "item__contents-bundle-options" }, [
                                          (openBlock(true), createBlock(Fragment, null, renderList(item.value.bundles, (item2) => {
                                            return openBlock(), createBlock(unref(UIButton), {
                                              class: {
                                                "is-active": itemBundle.value.id === item2.id
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
                                          createTextVNode(": " + toDisplayString(("capitalize" in _ctx ? _ctx.capitalize : unref(capitalize))(selectedVariant.value.color)), 1)
                                        ]),
                                        createVNode(unref(UIColorBox), {
                                          variants: item.value.variant,
                                          activeVariant: selectedVariant.value,
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
                                          modelValue: qty.value,
                                          "onUpdate:modelValue": ($event) => qty.value = $event
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
                              _push5(ssrRenderComponent(_component_el_tabs, {
                                modelValue: tabActiveName.value,
                                "onUpdate:modelValue": ($event) => tabActiveName.value = $event,
                                class: "el-card-options",
                                onTabClick: handleTabClick
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_el_tab_pane, {
                                      label: "Product Details",
                                      name: "details"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<div class="item__contents-specifications" data-v-33d4d31f${_scopeId6}><!--[-->`);
                                          ssrRenderList(item.value.specification, (specification, key) => {
                                            _push7(`<p data-v-33d4d31f${_scopeId6}><span class="item__contents-spec" data-v-33d4d31f${_scopeId6}>${ssrInterpolate(key)} :</span> ${ssrInterpolate(specification)}</p>`);
                                          });
                                          _push7(`<!--]--></div>`);
                                        } else {
                                          return [
                                            createVNode("div", { class: "item__contents-specifications" }, [
                                              (openBlock(true), createBlock(Fragment, null, renderList(item.value.specification, (specification, key) => {
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
                                    _push6(ssrRenderComponent(_component_el_tab_pane, {
                                      label: "Ratings/Review",
                                      name: "ratings"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<div class="review-tab-container" data-v-33d4d31f${_scopeId6}>`);
                                          if (item.value.averageRating || item.value.totalReviews) {
                                            _push7(`<div class="flex items-center mb-4" data-v-33d4d31f${_scopeId6}>`);
                                            _push7(ssrRenderComponent(_component_el_rate, {
                                              modelValue: item.value.averageRating,
                                              "onUpdate:modelValue": ($event) => item.value.averageRating = $event,
                                              disabled: "",
                                              "show-score": "",
                                              "text-color": "#000000",
                                              "score-template": "{value} out of 5",
                                              max: 5
                                            }, null, _parent7, _scopeId6));
                                            _push7(`<span class="review-count ml-2 text-gray-500" data-v-33d4d31f${_scopeId6}> (${ssrInterpolate(item.value.totalReviews)} reviews) </span></div>`);
                                          } else {
                                            _push7(`<!---->`);
                                          }
                                          _push7(`<div class="w-full border-t my-8" data-v-33d4d31f${_scopeId6}></div>`);
                                          if (reviews.value.length) {
                                            _push7(`<div class="reviews-list mb-8 w-full max-w-2xl" data-v-33d4d31f${_scopeId6}><h3 class="font-bold mb-4 text-gray-800" data-v-33d4d31f${_scopeId6}> Recent Reviews </h3><!--[-->`);
                                            ssrRenderList(reviews.value, (review, idx) => {
                                              _push7(`<div class="review-card p-4 mb-4 rounded-lg border border-gray-200 bg-white shadow-sm" data-v-33d4d31f${_scopeId6}><div class="flex items-center mb-2" data-v-33d4d31f${_scopeId6}><span class="review-user font-semibold text-primary mr-2" data-v-33d4d31f${_scopeId6}>${ssrInterpolate(review.userName || "Anonymous")}</span>`);
                                              _push7(ssrRenderComponent(_component_el_rate, {
                                                "model-value": review.userRating,
                                                disabled: "",
                                                max: 5,
                                                size: "small",
                                                class: "review-stars"
                                              }, null, _parent7, _scopeId6));
                                              _push7(`</div><div class="review-comment text-gray-700 mb-1 text-sm" data-v-33d4d31f${_scopeId6}>${ssrInterpolate(review.userComment)}</div><div class="review-date text-xs text-gray-400 text-sm" data-v-33d4d31f${_scopeId6}>${ssrInterpolate(formatDate(review.createdAt))}</div></div>`);
                                            });
                                            _push7(`<!--]--></div>`);
                                          } else {
                                            _push7(`<!---->`);
                                          }
                                          _push7(`<div class="w-full max-w-md" data-v-33d4d31f${_scopeId6}><h4 class="text-lg font-bold mb-4 text-gray-800" data-v-33d4d31f${_scopeId6}> Rate this item &amp; leave a comment </h4><div class="mb-4 flex flex-col items-start review-rating" data-v-33d4d31f${_scopeId6}><label class="mb-2 font-medium text-gray-700" data-v-33d4d31f${_scopeId6}>Your Rating:</label>`);
                                          _push7(ssrRenderComponent(_component_el_rate, {
                                            modelValue: userRating.value,
                                            "onUpdate:modelValue": ($event) => userRating.value = $event,
                                            max: 5,
                                            "allow-half": "",
                                            "show-score": "",
                                            "score-template": "{value} out of 5",
                                            "text-color": "#000000"
                                          }, null, _parent7, _scopeId6));
                                          _push7(`</div><div class="mb-4 flex flex-col items-start review-comment" data-v-33d4d31f${_scopeId6}><label class="mb-2 font-medium text-gray-700" data-v-33d4d31f${_scopeId6}>Your Comment:</label>`);
                                          _push7(ssrRenderComponent(_component_el_input, {
                                            type: "textarea",
                                            modelValue: userComment.value,
                                            "onUpdate:modelValue": ($event) => userComment.value = $event,
                                            rows: 4,
                                            placeholder: "Share your experience with this product...",
                                            maxlength: "500",
                                            "show-word-limit": "",
                                            class: "w-full"
                                          }, null, _parent7, _scopeId6));
                                          _push7(`</div>`);
                                          if (ratingErrorMessage.value) {
                                            _push7(`<p class="error el-tag--danger" data-v-33d4d31f${_scopeId6}>${ssrInterpolate(ratingErrorMessage.value)}</p>`);
                                          } else {
                                            _push7(`<!---->`);
                                          }
                                          _push7(ssrRenderComponent(unref(UIButton), {
                                            label: "Submit Review",
                                            size: "large",
                                            variant: "primary",
                                            class: "w-full",
                                            onClick: submitReview
                                          }, null, _parent7, _scopeId6));
                                          if (reviewSubmitted.value) {
                                            _push7(`<div class="mt-4 text-green-600 font-medium" data-v-33d4d31f${_scopeId6}> Thank you for your review! </div>`);
                                          } else {
                                            _push7(`<!---->`);
                                          }
                                          _push7(`</div></div>`);
                                        } else {
                                          return [
                                            createVNode("div", { class: "review-tab-container" }, [
                                              item.value.averageRating || item.value.totalReviews ? (openBlock(), createBlock("div", {
                                                key: 0,
                                                class: "flex items-center mb-4"
                                              }, [
                                                createVNode(_component_el_rate, {
                                                  modelValue: item.value.averageRating,
                                                  "onUpdate:modelValue": ($event) => item.value.averageRating = $event,
                                                  disabled: "",
                                                  "show-score": "",
                                                  "text-color": "#000000",
                                                  "score-template": "{value} out of 5",
                                                  max: 5
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                createVNode("span", { class: "review-count ml-2 text-gray-500" }, " (" + toDisplayString(item.value.totalReviews) + " reviews) ", 1)
                                              ])) : createCommentVNode("", true),
                                              createVNode("div", { class: "w-full border-t my-8" }),
                                              reviews.value.length ? (openBlock(), createBlock("div", {
                                                key: 1,
                                                class: "reviews-list mb-8 w-full max-w-2xl"
                                              }, [
                                                createVNode("h3", { class: "font-bold mb-4 text-gray-800" }, " Recent Reviews "),
                                                (openBlock(true), createBlock(Fragment, null, renderList(reviews.value, (review, idx) => {
                                                  return openBlock(), createBlock("div", {
                                                    key: idx,
                                                    class: "review-card p-4 mb-4 rounded-lg border border-gray-200 bg-white shadow-sm"
                                                  }, [
                                                    createVNode("div", { class: "flex items-center mb-2" }, [
                                                      createVNode("span", { class: "review-user font-semibold text-primary mr-2" }, toDisplayString(review.userName || "Anonymous"), 1),
                                                      createVNode(_component_el_rate, {
                                                        "model-value": review.userRating,
                                                        disabled: "",
                                                        max: 5,
                                                        size: "small",
                                                        class: "review-stars"
                                                      }, null, 8, ["model-value"])
                                                    ]),
                                                    createVNode("div", { class: "review-comment text-gray-700 mb-1 text-sm" }, toDisplayString(review.userComment), 1),
                                                    createVNode("div", { class: "review-date text-xs text-gray-400 text-sm" }, toDisplayString(formatDate(review.createdAt)), 1)
                                                  ]);
                                                }), 128))
                                              ])) : createCommentVNode("", true),
                                              createVNode("div", { class: "w-full max-w-md" }, [
                                                createVNode("h4", { class: "text-lg font-bold mb-4 text-gray-800" }, " Rate this item & leave a comment "),
                                                createVNode("div", { class: "mb-4 flex flex-col items-start review-rating" }, [
                                                  createVNode("label", { class: "mb-2 font-medium text-gray-700" }, "Your Rating:"),
                                                  createVNode(_component_el_rate, {
                                                    modelValue: userRating.value,
                                                    "onUpdate:modelValue": ($event) => userRating.value = $event,
                                                    max: 5,
                                                    "allow-half": "",
                                                    "show-score": "",
                                                    "score-template": "{value} out of 5",
                                                    "text-color": "#000000"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ]),
                                                createVNode("div", { class: "mb-4 flex flex-col items-start review-comment" }, [
                                                  createVNode("label", { class: "mb-2 font-medium text-gray-700" }, "Your Comment:"),
                                                  createVNode(_component_el_input, {
                                                    type: "textarea",
                                                    modelValue: userComment.value,
                                                    "onUpdate:modelValue": ($event) => userComment.value = $event,
                                                    rows: 4,
                                                    placeholder: "Share your experience with this product...",
                                                    maxlength: "500",
                                                    "show-word-limit": "",
                                                    class: "w-full"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ]),
                                                ratingErrorMessage.value ? (openBlock(), createBlock("p", {
                                                  key: 0,
                                                  class: "error el-tag--danger"
                                                }, toDisplayString(ratingErrorMessage.value), 1)) : createCommentVNode("", true),
                                                createVNode(unref(UIButton), {
                                                  label: "Submit Review",
                                                  size: "large",
                                                  variant: "primary",
                                                  class: "w-full",
                                                  onClick: submitReview
                                                }),
                                                reviewSubmitted.value ? (openBlock(), createBlock("div", {
                                                  key: 1,
                                                  class: "mt-4 text-green-600 font-medium"
                                                }, " Thank you for your review! ")) : createCommentVNode("", true)
                                              ])
                                            ])
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
                                      createVNode(_component_el_tab_pane, {
                                        label: "Product Details",
                                        name: "details"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "item__contents-specifications" }, [
                                            (openBlock(true), createBlock(Fragment, null, renderList(item.value.specification, (specification, key) => {
                                              return openBlock(), createBlock("p", { key }, [
                                                createVNode("span", { class: "item__contents-spec" }, toDisplayString(key) + " :", 1),
                                                createTextVNode(" " + toDisplayString(specification), 1)
                                              ]);
                                            }), 128))
                                          ])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_el_tab_pane, {
                                        label: "Ratings/Review",
                                        name: "ratings"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "review-tab-container" }, [
                                            item.value.averageRating || item.value.totalReviews ? (openBlock(), createBlock("div", {
                                              key: 0,
                                              class: "flex items-center mb-4"
                                            }, [
                                              createVNode(_component_el_rate, {
                                                modelValue: item.value.averageRating,
                                                "onUpdate:modelValue": ($event) => item.value.averageRating = $event,
                                                disabled: "",
                                                "show-score": "",
                                                "text-color": "#000000",
                                                "score-template": "{value} out of 5",
                                                max: 5
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                              createVNode("span", { class: "review-count ml-2 text-gray-500" }, " (" + toDisplayString(item.value.totalReviews) + " reviews) ", 1)
                                            ])) : createCommentVNode("", true),
                                            createVNode("div", { class: "w-full border-t my-8" }),
                                            reviews.value.length ? (openBlock(), createBlock("div", {
                                              key: 1,
                                              class: "reviews-list mb-8 w-full max-w-2xl"
                                            }, [
                                              createVNode("h3", { class: "font-bold mb-4 text-gray-800" }, " Recent Reviews "),
                                              (openBlock(true), createBlock(Fragment, null, renderList(reviews.value, (review, idx) => {
                                                return openBlock(), createBlock("div", {
                                                  key: idx,
                                                  class: "review-card p-4 mb-4 rounded-lg border border-gray-200 bg-white shadow-sm"
                                                }, [
                                                  createVNode("div", { class: "flex items-center mb-2" }, [
                                                    createVNode("span", { class: "review-user font-semibold text-primary mr-2" }, toDisplayString(review.userName || "Anonymous"), 1),
                                                    createVNode(_component_el_rate, {
                                                      "model-value": review.userRating,
                                                      disabled: "",
                                                      max: 5,
                                                      size: "small",
                                                      class: "review-stars"
                                                    }, null, 8, ["model-value"])
                                                  ]),
                                                  createVNode("div", { class: "review-comment text-gray-700 mb-1 text-sm" }, toDisplayString(review.userComment), 1),
                                                  createVNode("div", { class: "review-date text-xs text-gray-400 text-sm" }, toDisplayString(formatDate(review.createdAt)), 1)
                                                ]);
                                              }), 128))
                                            ])) : createCommentVNode("", true),
                                            createVNode("div", { class: "w-full max-w-md" }, [
                                              createVNode("h4", { class: "text-lg font-bold mb-4 text-gray-800" }, " Rate this item & leave a comment "),
                                              createVNode("div", { class: "mb-4 flex flex-col items-start review-rating" }, [
                                                createVNode("label", { class: "mb-2 font-medium text-gray-700" }, "Your Rating:"),
                                                createVNode(_component_el_rate, {
                                                  modelValue: userRating.value,
                                                  "onUpdate:modelValue": ($event) => userRating.value = $event,
                                                  max: 5,
                                                  "allow-half": "",
                                                  "show-score": "",
                                                  "score-template": "{value} out of 5",
                                                  "text-color": "#000000"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                              ]),
                                              createVNode("div", { class: "mb-4 flex flex-col items-start review-comment" }, [
                                                createVNode("label", { class: "mb-2 font-medium text-gray-700" }, "Your Comment:"),
                                                createVNode(_component_el_input, {
                                                  type: "textarea",
                                                  modelValue: userComment.value,
                                                  "onUpdate:modelValue": ($event) => userComment.value = $event,
                                                  rows: 4,
                                                  placeholder: "Share your experience with this product...",
                                                  maxlength: "500",
                                                  "show-word-limit": "",
                                                  class: "w-full"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                              ]),
                                              ratingErrorMessage.value ? (openBlock(), createBlock("p", {
                                                key: 0,
                                                class: "error el-tag--danger"
                                              }, toDisplayString(ratingErrorMessage.value), 1)) : createCommentVNode("", true),
                                              createVNode(unref(UIButton), {
                                                label: "Submit Review",
                                                size: "large",
                                                variant: "primary",
                                                class: "w-full",
                                                onClick: submitReview
                                              }),
                                              reviewSubmitted.value ? (openBlock(), createBlock("div", {
                                                key: 1,
                                                class: "mt-4 text-green-600 font-medium"
                                              }, " Thank you for your review! ")) : createCommentVNode("", true)
                                            ])
                                          ])
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
                                createVNode(_component_el_tabs, {
                                  modelValue: tabActiveName.value,
                                  "onUpdate:modelValue": ($event) => tabActiveName.value = $event,
                                  class: "el-card-options",
                                  onTabClick: handleTabClick
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_el_tab_pane, {
                                      label: "Product Details",
                                      name: "details"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "item__contents-specifications" }, [
                                          (openBlock(true), createBlock(Fragment, null, renderList(item.value.specification, (specification, key) => {
                                            return openBlock(), createBlock("p", { key }, [
                                              createVNode("span", { class: "item__contents-spec" }, toDisplayString(key) + " :", 1),
                                              createTextVNode(" " + toDisplayString(specification), 1)
                                            ]);
                                          }), 128))
                                        ])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_el_tab_pane, {
                                      label: "Ratings/Review",
                                      name: "ratings"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "review-tab-container" }, [
                                          item.value.averageRating || item.value.totalReviews ? (openBlock(), createBlock("div", {
                                            key: 0,
                                            class: "flex items-center mb-4"
                                          }, [
                                            createVNode(_component_el_rate, {
                                              modelValue: item.value.averageRating,
                                              "onUpdate:modelValue": ($event) => item.value.averageRating = $event,
                                              disabled: "",
                                              "show-score": "",
                                              "text-color": "#000000",
                                              "score-template": "{value} out of 5",
                                              max: 5
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                            createVNode("span", { class: "review-count ml-2 text-gray-500" }, " (" + toDisplayString(item.value.totalReviews) + " reviews) ", 1)
                                          ])) : createCommentVNode("", true),
                                          createVNode("div", { class: "w-full border-t my-8" }),
                                          reviews.value.length ? (openBlock(), createBlock("div", {
                                            key: 1,
                                            class: "reviews-list mb-8 w-full max-w-2xl"
                                          }, [
                                            createVNode("h3", { class: "font-bold mb-4 text-gray-800" }, " Recent Reviews "),
                                            (openBlock(true), createBlock(Fragment, null, renderList(reviews.value, (review, idx) => {
                                              return openBlock(), createBlock("div", {
                                                key: idx,
                                                class: "review-card p-4 mb-4 rounded-lg border border-gray-200 bg-white shadow-sm"
                                              }, [
                                                createVNode("div", { class: "flex items-center mb-2" }, [
                                                  createVNode("span", { class: "review-user font-semibold text-primary mr-2" }, toDisplayString(review.userName || "Anonymous"), 1),
                                                  createVNode(_component_el_rate, {
                                                    "model-value": review.userRating,
                                                    disabled: "",
                                                    max: 5,
                                                    size: "small",
                                                    class: "review-stars"
                                                  }, null, 8, ["model-value"])
                                                ]),
                                                createVNode("div", { class: "review-comment text-gray-700 mb-1 text-sm" }, toDisplayString(review.userComment), 1),
                                                createVNode("div", { class: "review-date text-xs text-gray-400 text-sm" }, toDisplayString(formatDate(review.createdAt)), 1)
                                              ]);
                                            }), 128))
                                          ])) : createCommentVNode("", true),
                                          createVNode("div", { class: "w-full max-w-md" }, [
                                            createVNode("h4", { class: "text-lg font-bold mb-4 text-gray-800" }, " Rate this item & leave a comment "),
                                            createVNode("div", { class: "mb-4 flex flex-col items-start review-rating" }, [
                                              createVNode("label", { class: "mb-2 font-medium text-gray-700" }, "Your Rating:"),
                                              createVNode(_component_el_rate, {
                                                modelValue: userRating.value,
                                                "onUpdate:modelValue": ($event) => userRating.value = $event,
                                                max: 5,
                                                "allow-half": "",
                                                "show-score": "",
                                                "score-template": "{value} out of 5",
                                                "text-color": "#000000"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ]),
                                            createVNode("div", { class: "mb-4 flex flex-col items-start review-comment" }, [
                                              createVNode("label", { class: "mb-2 font-medium text-gray-700" }, "Your Comment:"),
                                              createVNode(_component_el_input, {
                                                type: "textarea",
                                                modelValue: userComment.value,
                                                "onUpdate:modelValue": ($event) => userComment.value = $event,
                                                rows: 4,
                                                placeholder: "Share your experience with this product...",
                                                maxlength: "500",
                                                "show-word-limit": "",
                                                class: "w-full"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ]),
                                            ratingErrorMessage.value ? (openBlock(), createBlock("p", {
                                              key: 0,
                                              class: "error el-tag--danger"
                                            }, toDisplayString(ratingErrorMessage.value), 1)) : createCommentVNode("", true),
                                            createVNode(unref(UIButton), {
                                              label: "Submit Review",
                                              size: "large",
                                              variant: "primary",
                                              class: "w-full",
                                              onClick: submitReview
                                            }),
                                            reviewSubmitted.value ? (openBlock(), createBlock("div", {
                                              key: 1,
                                              class: "mt-4 text-green-600 font-medium"
                                            }, " Thank you for your review! ")) : createCommentVNode("", true)
                                          ])
                                        ])
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
                                }, 8, ["modelValue", "onUpdate:modelValue"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_el_col, null, {
                            default: withCtx(() => [
                              createVNode(_component_el_tabs, {
                                modelValue: tabActiveName.value,
                                "onUpdate:modelValue": ($event) => tabActiveName.value = $event,
                                class: "el-card-options",
                                onTabClick: handleTabClick
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_el_tab_pane, {
                                    label: "Product Details",
                                    name: "details"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "item__contents-specifications" }, [
                                        (openBlock(true), createBlock(Fragment, null, renderList(item.value.specification, (specification, key) => {
                                          return openBlock(), createBlock("p", { key }, [
                                            createVNode("span", { class: "item__contents-spec" }, toDisplayString(key) + " :", 1),
                                            createTextVNode(" " + toDisplayString(specification), 1)
                                          ]);
                                        }), 128))
                                      ])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_el_tab_pane, {
                                    label: "Ratings/Review",
                                    name: "ratings"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "review-tab-container" }, [
                                        item.value.averageRating || item.value.totalReviews ? (openBlock(), createBlock("div", {
                                          key: 0,
                                          class: "flex items-center mb-4"
                                        }, [
                                          createVNode(_component_el_rate, {
                                            modelValue: item.value.averageRating,
                                            "onUpdate:modelValue": ($event) => item.value.averageRating = $event,
                                            disabled: "",
                                            "show-score": "",
                                            "text-color": "#000000",
                                            "score-template": "{value} out of 5",
                                            max: 5
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                          createVNode("span", { class: "review-count ml-2 text-gray-500" }, " (" + toDisplayString(item.value.totalReviews) + " reviews) ", 1)
                                        ])) : createCommentVNode("", true),
                                        createVNode("div", { class: "w-full border-t my-8" }),
                                        reviews.value.length ? (openBlock(), createBlock("div", {
                                          key: 1,
                                          class: "reviews-list mb-8 w-full max-w-2xl"
                                        }, [
                                          createVNode("h3", { class: "font-bold mb-4 text-gray-800" }, " Recent Reviews "),
                                          (openBlock(true), createBlock(Fragment, null, renderList(reviews.value, (review, idx) => {
                                            return openBlock(), createBlock("div", {
                                              key: idx,
                                              class: "review-card p-4 mb-4 rounded-lg border border-gray-200 bg-white shadow-sm"
                                            }, [
                                              createVNode("div", { class: "flex items-center mb-2" }, [
                                                createVNode("span", { class: "review-user font-semibold text-primary mr-2" }, toDisplayString(review.userName || "Anonymous"), 1),
                                                createVNode(_component_el_rate, {
                                                  "model-value": review.userRating,
                                                  disabled: "",
                                                  max: 5,
                                                  size: "small",
                                                  class: "review-stars"
                                                }, null, 8, ["model-value"])
                                              ]),
                                              createVNode("div", { class: "review-comment text-gray-700 mb-1 text-sm" }, toDisplayString(review.userComment), 1),
                                              createVNode("div", { class: "review-date text-xs text-gray-400 text-sm" }, toDisplayString(formatDate(review.createdAt)), 1)
                                            ]);
                                          }), 128))
                                        ])) : createCommentVNode("", true),
                                        createVNode("div", { class: "w-full max-w-md" }, [
                                          createVNode("h4", { class: "text-lg font-bold mb-4 text-gray-800" }, " Rate this item & leave a comment "),
                                          createVNode("div", { class: "mb-4 flex flex-col items-start review-rating" }, [
                                            createVNode("label", { class: "mb-2 font-medium text-gray-700" }, "Your Rating:"),
                                            createVNode(_component_el_rate, {
                                              modelValue: userRating.value,
                                              "onUpdate:modelValue": ($event) => userRating.value = $event,
                                              max: 5,
                                              "allow-half": "",
                                              "show-score": "",
                                              "score-template": "{value} out of 5",
                                              "text-color": "#000000"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ]),
                                          createVNode("div", { class: "mb-4 flex flex-col items-start review-comment" }, [
                                            createVNode("label", { class: "mb-2 font-medium text-gray-700" }, "Your Comment:"),
                                            createVNode(_component_el_input, {
                                              type: "textarea",
                                              modelValue: userComment.value,
                                              "onUpdate:modelValue": ($event) => userComment.value = $event,
                                              rows: 4,
                                              placeholder: "Share your experience with this product...",
                                              maxlength: "500",
                                              "show-word-limit": "",
                                              class: "w-full"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ]),
                                          ratingErrorMessage.value ? (openBlock(), createBlock("p", {
                                            key: 0,
                                            class: "error el-tag--danger"
                                          }, toDisplayString(ratingErrorMessage.value), 1)) : createCommentVNode("", true),
                                          createVNode(unref(UIButton), {
                                            label: "Submit Review",
                                            size: "large",
                                            variant: "primary",
                                            class: "w-full",
                                            onClick: submitReview
                                          }),
                                          reviewSubmitted.value ? (openBlock(), createBlock("div", {
                                            key: 1,
                                            class: "mt-4 text-green-600 font-medium"
                                          }, " Thank you for your review! ")) : createCommentVNode("", true)
                                        ])
                                      ])
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
                              }, 8, ["modelValue", "onUpdate:modelValue"])
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
                            createVNode(_component_el_tabs, {
                              modelValue: tabActiveName.value,
                              "onUpdate:modelValue": ($event) => tabActiveName.value = $event,
                              class: "el-card-options",
                              onTabClick: handleTabClick
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_el_tab_pane, {
                                  label: "Product Details",
                                  name: "details"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "item__contents-specifications" }, [
                                      (openBlock(true), createBlock(Fragment, null, renderList(item.value.specification, (specification, key) => {
                                        return openBlock(), createBlock("p", { key }, [
                                          createVNode("span", { class: "item__contents-spec" }, toDisplayString(key) + " :", 1),
                                          createTextVNode(" " + toDisplayString(specification), 1)
                                        ]);
                                      }), 128))
                                    ])
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_el_tab_pane, {
                                  label: "Ratings/Review",
                                  name: "ratings"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "review-tab-container" }, [
                                      item.value.averageRating || item.value.totalReviews ? (openBlock(), createBlock("div", {
                                        key: 0,
                                        class: "flex items-center mb-4"
                                      }, [
                                        createVNode(_component_el_rate, {
                                          modelValue: item.value.averageRating,
                                          "onUpdate:modelValue": ($event) => item.value.averageRating = $event,
                                          disabled: "",
                                          "show-score": "",
                                          "text-color": "#000000",
                                          "score-template": "{value} out of 5",
                                          max: 5
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                        createVNode("span", { class: "review-count ml-2 text-gray-500" }, " (" + toDisplayString(item.value.totalReviews) + " reviews) ", 1)
                                      ])) : createCommentVNode("", true),
                                      createVNode("div", { class: "w-full border-t my-8" }),
                                      reviews.value.length ? (openBlock(), createBlock("div", {
                                        key: 1,
                                        class: "reviews-list mb-8 w-full max-w-2xl"
                                      }, [
                                        createVNode("h3", { class: "font-bold mb-4 text-gray-800" }, " Recent Reviews "),
                                        (openBlock(true), createBlock(Fragment, null, renderList(reviews.value, (review, idx) => {
                                          return openBlock(), createBlock("div", {
                                            key: idx,
                                            class: "review-card p-4 mb-4 rounded-lg border border-gray-200 bg-white shadow-sm"
                                          }, [
                                            createVNode("div", { class: "flex items-center mb-2" }, [
                                              createVNode("span", { class: "review-user font-semibold text-primary mr-2" }, toDisplayString(review.userName || "Anonymous"), 1),
                                              createVNode(_component_el_rate, {
                                                "model-value": review.userRating,
                                                disabled: "",
                                                max: 5,
                                                size: "small",
                                                class: "review-stars"
                                              }, null, 8, ["model-value"])
                                            ]),
                                            createVNode("div", { class: "review-comment text-gray-700 mb-1 text-sm" }, toDisplayString(review.userComment), 1),
                                            createVNode("div", { class: "review-date text-xs text-gray-400 text-sm" }, toDisplayString(formatDate(review.createdAt)), 1)
                                          ]);
                                        }), 128))
                                      ])) : createCommentVNode("", true),
                                      createVNode("div", { class: "w-full max-w-md" }, [
                                        createVNode("h4", { class: "text-lg font-bold mb-4 text-gray-800" }, " Rate this item & leave a comment "),
                                        createVNode("div", { class: "mb-4 flex flex-col items-start review-rating" }, [
                                          createVNode("label", { class: "mb-2 font-medium text-gray-700" }, "Your Rating:"),
                                          createVNode(_component_el_rate, {
                                            modelValue: userRating.value,
                                            "onUpdate:modelValue": ($event) => userRating.value = $event,
                                            max: 5,
                                            "allow-half": "",
                                            "show-score": "",
                                            "score-template": "{value} out of 5",
                                            "text-color": "#000000"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        createVNode("div", { class: "mb-4 flex flex-col items-start review-comment" }, [
                                          createVNode("label", { class: "mb-2 font-medium text-gray-700" }, "Your Comment:"),
                                          createVNode(_component_el_input, {
                                            type: "textarea",
                                            modelValue: userComment.value,
                                            "onUpdate:modelValue": ($event) => userComment.value = $event,
                                            rows: 4,
                                            placeholder: "Share your experience with this product...",
                                            maxlength: "500",
                                            "show-word-limit": "",
                                            class: "w-full"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        ratingErrorMessage.value ? (openBlock(), createBlock("p", {
                                          key: 0,
                                          class: "error el-tag--danger"
                                        }, toDisplayString(ratingErrorMessage.value), 1)) : createCommentVNode("", true),
                                        createVNode(unref(UIButton), {
                                          label: "Submit Review",
                                          size: "large",
                                          variant: "primary",
                                          class: "w-full",
                                          onClick: submitReview
                                        }),
                                        reviewSubmitted.value ? (openBlock(), createBlock("div", {
                                          key: 1,
                                          class: "mt-4 text-green-600 font-medium"
                                        }, " Thank you for your review! ")) : createCommentVNode("", true)
                                      ])
                                    ])
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
                            }, 8, ["modelValue", "onUpdate:modelValue"])
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
            if (similarProducts.value.length) {
              _push2(`<div class="similar-products-section" data-v-33d4d31f${_scopeId}><h3 class="section-title mt-4 mb-4 font-briscolade" data-v-33d4d31f${_scopeId}> Similar Products </h3><ul class="product__grid-w" data-v-33d4d31f${_scopeId}><!--[-->`);
              ssrRenderList(similarProducts.value, (product) => {
                var _a, _b, _c;
                _push2(`<li class="product__grid-w__list" data-v-33d4d31f${_scopeId}><a${ssrRenderAttr("href", `/${product.categoryId}/${product.id}`)} class="_p" data-v-33d4d31f${_scopeId}><span class="product__grid-w__list-img" data-v-33d4d31f${_scopeId}><img${ssrRenderAttr("src", product.imageUrl)} alt="" loading="lazy" data-v-33d4d31f${_scopeId}></span><div class="product__grid-w__list-content" data-v-33d4d31f${_scopeId}><span class="product__grid-w__list-title multi-line-ellipsis" data-v-33d4d31f${_scopeId}>${ssrInterpolate(product.name)}</span><span data-v-33d4d31f${_scopeId}>${ssrInterpolate((_a = product == null ? void 0 : product.bundles[0]) == null ? void 0 : _a.ram)} / ${ssrInterpolate((_b = product == null ? void 0 : product.bundles[0]) == null ? void 0 : _b.storage)}</span><div class="product__grid-w__list-price_fav" data-v-33d4d31f${_scopeId}><span class="product__grid-w__list-price" data-v-33d4d31f${_scopeId}>${ssrInterpolate(unref(toUSD)(
                  ((_c = product == null ? void 0 : product.bundles[0]) == null ? void 0 : _c.price) || product.price
                ))}</span></div></div></a></li>`);
              });
              _push2(`<!--]--></ul></div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode(_component_el_col, null, {
                default: withCtx(() => [
                  createVNode(_component_el_breadcrumb, {
                    separator: "/",
                    class: "mb-4"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_el_breadcrumb_item, { to: "/" }, {
                        default: withCtx(() => [
                          createTextVNode("Home")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_el_breadcrumb_item, null, {
                        default: withCtx(() => [
                          createTextVNode("Categories")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_el_breadcrumb_item, { to: "/products" }, {
                        default: withCtx(() => [
                          createTextVNode("Products")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_el_breadcrumb_item, null, {
                        default: withCtx(() => {
                          var _a;
                          return [
                            createTextVNode(toDisplayString((_a = item.value) == null ? void 0 : _a.name), 1)
                          ];
                        }),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_el_row, null, {
                    default: withCtx(() => [
                      createVNode(_component_el_col, { md: 12 }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "product__item-image" }, [
                            createVNode("img", {
                              src: itemImageUrl.value,
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
                              createVNode("h3", { class: "capitalize item__contents-name" }, toDisplayString((_a = item.value) == null ? void 0 : _a.name), 1)
                            ]),
                            createVNode("div", { class: "item__contents-quantity-price" }, [
                              createVNode("span", { class: "item__contents-quantity-price" }, toDisplayString(unref(toUSD)(itemPrice.value || 0)), 1)
                            ]),
                            createVNode("div", { class: "item__contents-description" }, [
                              createVNode("p", { class: "item__contents-description" }, toDisplayString((_b = item.value) == null ? void 0 : _b.description), 1)
                            ]),
                            createVNode("div", { class: "variant" }, [
                              createVNode(_component_el_col, { class: "item__contents-variant" }, {
                                default: withCtx(() => {
                                  var _a2;
                                  return [
                                    item.value && ((_a2 = item.value.bundles) == null ? void 0 : _a2.length) > 0 ? (openBlock(), createBlock("div", {
                                      key: 0,
                                      class: "item__contents-bundle"
                                    }, [
                                      createVNode("p", { class: "item__contents-spec-variant" }, [
                                        createVNode("span", null, "Bundle Options "),
                                        createTextVNode(": 16GB/256GB ")
                                      ]),
                                      createVNode("div", { class: "item__contents-bundle-options" }, [
                                        (openBlock(true), createBlock(Fragment, null, renderList(item.value.bundles, (item2) => {
                                          return openBlock(), createBlock(unref(UIButton), {
                                            class: {
                                              "is-active": itemBundle.value.id === item2.id
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
                                        createTextVNode(": " + toDisplayString(("capitalize" in _ctx ? _ctx.capitalize : unref(capitalize))(selectedVariant.value.color)), 1)
                                      ]),
                                      createVNode(unref(UIColorBox), {
                                        variants: item.value.variant,
                                        activeVariant: selectedVariant.value,
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
                                        modelValue: qty.value,
                                        "onUpdate:modelValue": ($event) => qty.value = $event
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
                          createVNode(_component_el_tabs, {
                            modelValue: tabActiveName.value,
                            "onUpdate:modelValue": ($event) => tabActiveName.value = $event,
                            class: "el-card-options",
                            onTabClick: handleTabClick
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_el_tab_pane, {
                                label: "Product Details",
                                name: "details"
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "item__contents-specifications" }, [
                                    (openBlock(true), createBlock(Fragment, null, renderList(item.value.specification, (specification, key) => {
                                      return openBlock(), createBlock("p", { key }, [
                                        createVNode("span", { class: "item__contents-spec" }, toDisplayString(key) + " :", 1),
                                        createTextVNode(" " + toDisplayString(specification), 1)
                                      ]);
                                    }), 128))
                                  ])
                                ]),
                                _: 1
                              }),
                              createVNode(_component_el_tab_pane, {
                                label: "Ratings/Review",
                                name: "ratings"
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "review-tab-container" }, [
                                    item.value.averageRating || item.value.totalReviews ? (openBlock(), createBlock("div", {
                                      key: 0,
                                      class: "flex items-center mb-4"
                                    }, [
                                      createVNode(_component_el_rate, {
                                        modelValue: item.value.averageRating,
                                        "onUpdate:modelValue": ($event) => item.value.averageRating = $event,
                                        disabled: "",
                                        "show-score": "",
                                        "text-color": "#000000",
                                        "score-template": "{value} out of 5",
                                        max: 5
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                      createVNode("span", { class: "review-count ml-2 text-gray-500" }, " (" + toDisplayString(item.value.totalReviews) + " reviews) ", 1)
                                    ])) : createCommentVNode("", true),
                                    createVNode("div", { class: "w-full border-t my-8" }),
                                    reviews.value.length ? (openBlock(), createBlock("div", {
                                      key: 1,
                                      class: "reviews-list mb-8 w-full max-w-2xl"
                                    }, [
                                      createVNode("h3", { class: "font-bold mb-4 text-gray-800" }, " Recent Reviews "),
                                      (openBlock(true), createBlock(Fragment, null, renderList(reviews.value, (review, idx) => {
                                        return openBlock(), createBlock("div", {
                                          key: idx,
                                          class: "review-card p-4 mb-4 rounded-lg border border-gray-200 bg-white shadow-sm"
                                        }, [
                                          createVNode("div", { class: "flex items-center mb-2" }, [
                                            createVNode("span", { class: "review-user font-semibold text-primary mr-2" }, toDisplayString(review.userName || "Anonymous"), 1),
                                            createVNode(_component_el_rate, {
                                              "model-value": review.userRating,
                                              disabled: "",
                                              max: 5,
                                              size: "small",
                                              class: "review-stars"
                                            }, null, 8, ["model-value"])
                                          ]),
                                          createVNode("div", { class: "review-comment text-gray-700 mb-1 text-sm" }, toDisplayString(review.userComment), 1),
                                          createVNode("div", { class: "review-date text-xs text-gray-400 text-sm" }, toDisplayString(formatDate(review.createdAt)), 1)
                                        ]);
                                      }), 128))
                                    ])) : createCommentVNode("", true),
                                    createVNode("div", { class: "w-full max-w-md" }, [
                                      createVNode("h4", { class: "text-lg font-bold mb-4 text-gray-800" }, " Rate this item & leave a comment "),
                                      createVNode("div", { class: "mb-4 flex flex-col items-start review-rating" }, [
                                        createVNode("label", { class: "mb-2 font-medium text-gray-700" }, "Your Rating:"),
                                        createVNode(_component_el_rate, {
                                          modelValue: userRating.value,
                                          "onUpdate:modelValue": ($event) => userRating.value = $event,
                                          max: 5,
                                          "allow-half": "",
                                          "show-score": "",
                                          "score-template": "{value} out of 5",
                                          "text-color": "#000000"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      createVNode("div", { class: "mb-4 flex flex-col items-start review-comment" }, [
                                        createVNode("label", { class: "mb-2 font-medium text-gray-700" }, "Your Comment:"),
                                        createVNode(_component_el_input, {
                                          type: "textarea",
                                          modelValue: userComment.value,
                                          "onUpdate:modelValue": ($event) => userComment.value = $event,
                                          rows: 4,
                                          placeholder: "Share your experience with this product...",
                                          maxlength: "500",
                                          "show-word-limit": "",
                                          class: "w-full"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      ratingErrorMessage.value ? (openBlock(), createBlock("p", {
                                        key: 0,
                                        class: "error el-tag--danger"
                                      }, toDisplayString(ratingErrorMessage.value), 1)) : createCommentVNode("", true),
                                      createVNode(unref(UIButton), {
                                        label: "Submit Review",
                                        size: "large",
                                        variant: "primary",
                                        class: "w-full",
                                        onClick: submitReview
                                      }),
                                      reviewSubmitted.value ? (openBlock(), createBlock("div", {
                                        key: 1,
                                        class: "mt-4 text-green-600 font-medium"
                                      }, " Thank you for your review! ")) : createCommentVNode("", true)
                                    ])
                                  ])
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
                          }, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              similarProducts.value.length ? (openBlock(), createBlock("div", {
                key: 0,
                class: "similar-products-section"
              }, [
                createVNode("h3", { class: "section-title mt-4 mb-4 font-briscolade" }, " Similar Products "),
                createVNode("ul", { class: "product__grid-w" }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(similarProducts.value, (product) => {
                    var _a, _b, _c;
                    return openBlock(), createBlock("li", {
                      key: product.id,
                      class: "product__grid-w__list"
                    }, [
                      createVNode("a", {
                        href: `/${product.categoryId}/${product.id}`,
                        class: "_p"
                      }, [
                        createVNode("span", { class: "product__grid-w__list-img" }, [
                          createVNode("img", {
                            src: product.imageUrl,
                            alt: "",
                            loading: "lazy"
                          }, null, 8, ["src"])
                        ]),
                        createVNode("div", { class: "product__grid-w__list-content" }, [
                          createVNode("span", { class: "product__grid-w__list-title multi-line-ellipsis" }, toDisplayString(product.name), 1),
                          createVNode("span", null, toDisplayString((_a = product == null ? void 0 : product.bundles[0]) == null ? void 0 : _a.ram) + " / " + toDisplayString((_b = product == null ? void 0 : product.bundles[0]) == null ? void 0 : _b.storage), 1),
                          createVNode("div", { class: "product__grid-w__list-price_fav" }, [
                            createVNode("span", { class: "product__grid-w__list-price" }, toDisplayString(unref(toUSD)(
                              ((_c = product == null ? void 0 : product.bundles[0]) == null ? void 0 : _c.price) || product.price
                            )), 1)
                          ])
                        ])
                      ], 8, ["href"])
                    ]);
                  }), 128))
                ])
              ])) : createCommentVNode("", true)
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
const _itemId_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-33d4d31f"]]);

export { _itemId_ as default };
//# sourceMappingURL=_itemId_-DC2wVkpM.mjs.map
