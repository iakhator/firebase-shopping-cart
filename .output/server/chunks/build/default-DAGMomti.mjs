import { defineComponent, ref, computed, provide, renderSlot, inject, createElementBlock, openBlock, normalizeStyle, normalizeClass, unref, withDirectives, cloneVNode, Fragment, Text, Comment, createVNode, createBlock, createCommentVNode, mergeProps, withCtx, watch, toRef, Transition, vShow, readonly, toDisplayString, useSlots, getCurrentInstance, reactive, h, watchEffect, createElementVNode, createTextVNode, useSSRContext, nextTick, shallowRef, Teleport as Teleport$1, resolveComponent } from 'vue';
import { b as buildProps, f as definePropType, h as formItemContextKey, _ as _export_sfc$1, w as withInstall, O as buildProp, c as withNoopInstall, i as iconPropType, B as arrow_down_default, G as arrow_right_default, E as ElIcon, P as more_default, Q as addClass, M as hasClass, R as removeClass, d as ElButton, x as close_default, S as menu_default, U as video_play_default, W as location_default, X as phone_default, Y as message_default } from './el-button-V0v0dsgs.mjs';
import { a as useNamespace, f as useId, i as isBoolean, e as throwError, s as isUndefined, A as isPropAbsent, d as debugWarn, C as isElement, w as useZIndex, p as isNumber, E as useGetDerivedNamespace, B as useIdInjection, g as useRouter, b as useAuthStore, c as useCartStore, _ as __nuxt_component_4, n as navigateTo } from './server.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrInterpolate } from 'vue/server-renderer';
import { computedEager, onClickOutside, isClient, useResizeObserver, useTimeoutFn, unrefElement, tryOnScopeDispose } from '@vueuse/core';
import { isNil, isUndefined as isUndefined$1, fromPairs } from 'lodash-unified';
import { E as ElCollapseTransition, a as ElBadge } from './index-Cgfaz2zX.mjs';
import { placements, createPopper } from '@popperjs/core';
import { u as useAriaProps, i as isFocusable } from './aria-BNfy9QVD.mjs';
import { E as EVENT_CODE, f as flattedChildren } from './vnode-tcWefJcs.mjs';
import { NOOP, isObject, isString, isArray, isFunction } from '@vue/shared';
import { TinyColor } from '@ctrl/tinycolor';
import { m as mutable } from './typescript-D6L75muK.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-BLi3NAM9.mjs';
import { c as capitalize } from './index-qUEO24gb.mjs';
import { I as IconBase } from './IconBase-KIBH9raF.mjs';
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
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import 'vue-router';
import 'perfect-debounce';
import 'vue-sonner';

function useTimeout() {
  let timeoutHandle;
  const registerTimeout = (fn, delay) => {
    cancelTimeout();
    timeoutHandle = (void 0).setTimeout(fn, delay);
  };
  const cancelTimeout = () => (void 0).clearTimeout(timeoutHandle);
  tryOnScopeDispose(() => cancelTimeout());
  return {
    registerTimeout,
    cancelTimeout
  };
}
const useDelayedToggleProps = buildProps({
  showAfter: {
    type: Number,
    default: 0
  },
  hideAfter: {
    type: Number,
    default: 200
  },
  autoClose: {
    type: Number,
    default: 0
  }
});
const useDelayedToggle = ({
  showAfter,
  hideAfter,
  autoClose,
  open,
  close
}) => {
  const { registerTimeout } = useTimeout();
  const {
    registerTimeout: registerTimeoutForAutoClose,
    cancelTimeout: cancelTimeoutForAutoClose
  } = useTimeout();
  const onOpen = (event) => {
    registerTimeout(() => {
      open(event);
      const _autoClose = unref(autoClose);
      if (isNumber(_autoClose) && _autoClose > 0) {
        registerTimeoutForAutoClose(() => {
          close(event);
        }, _autoClose);
      }
    }, unref(showAfter));
  };
  const onClose = (event) => {
    cancelTimeoutForAutoClose();
    registerTimeout(() => {
      close(event);
    }, unref(hideAfter));
  };
  return {
    onOpen,
    onClose
  };
};
const POPPER_INJECTION_KEY = Symbol("popper");
const POPPER_CONTENT_INJECTION_KEY = Symbol("popperContent");
const roleTypes = [
  "dialog",
  "grid",
  "group",
  "listbox",
  "menu",
  "navigation",
  "tooltip",
  "tree"
];
const popperProps = buildProps({
  role: {
    type: String,
    values: roleTypes,
    default: "tooltip"
  }
});
const __default__$e = defineComponent({
  name: "ElPopper",
  inheritAttrs: false
});
const _sfc_main$l = /* @__PURE__ */ defineComponent({
  ...__default__$e,
  props: popperProps,
  setup(__props, { expose }) {
    const props = __props;
    const triggerRef = ref();
    const popperInstanceRef = ref();
    const contentRef = ref();
    const referenceRef = ref();
    const role = computed(() => props.role);
    const popperProvides = {
      triggerRef,
      popperInstanceRef,
      contentRef,
      referenceRef,
      role
    };
    expose(popperProvides);
    provide(POPPER_INJECTION_KEY, popperProvides);
    return (_ctx, _cache) => {
      return renderSlot(_ctx.$slots, "default");
    };
  }
});
var Popper = /* @__PURE__ */ _export_sfc$1(_sfc_main$l, [["__file", "popper.vue"]]);
const __default__$d = defineComponent({
  name: "ElPopperArrow",
  inheritAttrs: false
});
const _sfc_main$k = /* @__PURE__ */ defineComponent({
  ...__default__$d,
  setup(__props, { expose }) {
    const ns = useNamespace("popper");
    const { arrowRef, arrowStyle } = inject(POPPER_CONTENT_INJECTION_KEY, void 0);
    expose({
      arrowRef
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("span", {
        ref_key: "arrowRef",
        ref: arrowRef,
        class: normalizeClass(unref(ns).e("arrow")),
        style: normalizeStyle(unref(arrowStyle)),
        "data-popper-arrow": ""
      }, null, 6);
    };
  }
});
var ElPopperArrow = /* @__PURE__ */ _export_sfc$1(_sfc_main$k, [["__file", "arrow.vue"]]);
const popperTriggerProps = buildProps({
  virtualRef: {
    type: definePropType(Object)
  },
  virtualTriggering: Boolean,
  onMouseenter: {
    type: definePropType(Function)
  },
  onMouseleave: {
    type: definePropType(Function)
  },
  onClick: {
    type: definePropType(Function)
  },
  onKeydown: {
    type: definePropType(Function)
  },
  onFocus: {
    type: definePropType(Function)
  },
  onBlur: {
    type: definePropType(Function)
  },
  onContextmenu: {
    type: definePropType(Function)
  },
  id: String,
  open: Boolean
});
const FORWARD_REF_INJECTION_KEY = Symbol("elForwardRef");
const useForwardRef = (forwardRef) => {
  const setForwardRef = (el) => {
    forwardRef.value = el;
  };
  provide(FORWARD_REF_INJECTION_KEY, {
    setForwardRef
  });
};
const useForwardRefDirective = (setForwardRef) => {
  return {
    mounted(el) {
      setForwardRef(el);
    },
    updated(el) {
      setForwardRef(el);
    },
    unmounted() {
      setForwardRef(null);
    }
  };
};
const NAME = "ElOnlyChild";
const OnlyChild = defineComponent({
  name: NAME,
  setup(_, {
    slots,
    attrs
  }) {
    var _a;
    const forwardRefInjection = inject(FORWARD_REF_INJECTION_KEY);
    const forwardRefDirective = useForwardRefDirective((_a = forwardRefInjection == null ? void 0 : forwardRefInjection.setForwardRef) != null ? _a : NOOP);
    return () => {
      var _a2;
      const defaultSlot = (_a2 = slots.default) == null ? void 0 : _a2.call(slots, attrs);
      if (!defaultSlot)
        return null;
      if (defaultSlot.length > 1) {
        return null;
      }
      const firstLegitNode = findFirstLegitChild(defaultSlot);
      if (!firstLegitNode) {
        return null;
      }
      return withDirectives(cloneVNode(firstLegitNode, attrs), [[forwardRefDirective]]);
    };
  }
});
function findFirstLegitChild(node) {
  if (!node)
    return null;
  const children = node;
  for (const child of children) {
    if (isObject(child)) {
      switch (child.type) {
        case Comment:
          continue;
        case Text:
        case "svg":
          return wrapTextContent(child);
        case Fragment:
          return findFirstLegitChild(child.children);
        default:
          return child;
      }
    }
    return wrapTextContent(child);
  }
  return null;
}
function wrapTextContent(s) {
  const ns = useNamespace("only-child");
  return createVNode("span", {
    "class": ns.e("content")
  }, [s]);
}
const __default__$c = defineComponent({
  name: "ElPopperTrigger",
  inheritAttrs: false
});
const _sfc_main$j = /* @__PURE__ */ defineComponent({
  ...__default__$c,
  props: popperTriggerProps,
  setup(__props, { expose }) {
    const props = __props;
    const { role, triggerRef } = inject(POPPER_INJECTION_KEY, void 0);
    useForwardRef(triggerRef);
    const ariaControls = computed(() => {
      return ariaHaspopup.value ? props.id : void 0;
    });
    const ariaDescribedby = computed(() => {
      if (role && role.value === "tooltip") {
        return props.open && props.id ? props.id : void 0;
      }
      return void 0;
    });
    const ariaHaspopup = computed(() => {
      if (role && role.value !== "tooltip") {
        return role.value;
      }
      return void 0;
    });
    const ariaExpanded = computed(() => {
      return ariaHaspopup.value ? `${props.open}` : void 0;
    });
    expose({
      triggerRef
    });
    return (_ctx, _cache) => {
      return !_ctx.virtualTriggering ? (openBlock(), createBlock(unref(OnlyChild), mergeProps({ key: 0 }, _ctx.$attrs, {
        "aria-controls": unref(ariaControls),
        "aria-describedby": unref(ariaDescribedby),
        "aria-expanded": unref(ariaExpanded),
        "aria-haspopup": unref(ariaHaspopup)
      }), {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
      }, 16, ["aria-controls", "aria-describedby", "aria-expanded", "aria-haspopup"])) : createCommentVNode("v-if", true);
    };
  }
});
var ElPopperTrigger = /* @__PURE__ */ _export_sfc$1(_sfc_main$j, [["__file", "trigger.vue"]]);
const FOCUSOUT_PREVENTED = "focus-trap.focusout-prevented";
const FOCUSOUT_PREVENTED_OPTS = {
  cancelable: true,
  bubbles: false
};
const ON_TRAP_FOCUS_EVT = "focusAfterTrapped";
const ON_RELEASE_FOCUS_EVT = "focusAfterReleased";
const FOCUS_TRAP_INJECTION_KEY = Symbol("elFocusTrap");
const focusReason = ref();
const lastUserFocusTimestamp = ref(0);
const lastAutomatedFocusTimestamp = ref(0);
const obtainAllFocusableElements = (element) => {
  const nodes = [];
  const walker = (void 0).createTreeWalker(element, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (node) => {
      const isHiddenInput = node.tagName === "INPUT" && node.type === "hidden";
      if (node.disabled || node.hidden || isHiddenInput)
        return NodeFilter.FILTER_SKIP;
      return node.tabIndex >= 0 || node === (void 0).activeElement ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  while (walker.nextNode())
    nodes.push(walker.currentNode);
  return nodes;
};
const getVisibleElement = (elements, container) => {
  for (const element of elements) {
    if (!isHidden(element, container))
      return element;
  }
};
const isHidden = (element, container) => {
  if (getComputedStyle(element).visibility === "hidden")
    return true;
  while (element) {
    if (container && element === container)
      return false;
    if (getComputedStyle(element).display === "none")
      return true;
    element = element.parentElement;
  }
  return false;
};
const getEdges = (container) => {
  const focusable = obtainAllFocusableElements(container);
  const first = getVisibleElement(focusable, container);
  const last = getVisibleElement(focusable.reverse(), container);
  return [first, last];
};
const isSelectable = (element) => {
  return element instanceof HTMLInputElement && "select" in element;
};
const tryFocus = (element, shouldSelect) => {
  if (element && element.focus) {
    const prevFocusedElement = (void 0).activeElement;
    let cleanup = false;
    if (isElement(element) && !isFocusable(element) && !element.getAttribute("tabindex")) {
      element.setAttribute("tabindex", "-1");
      cleanup = true;
    }
    element.focus({ preventScroll: true });
    lastAutomatedFocusTimestamp.value = (void 0).performance.now();
    if (element !== prevFocusedElement && isSelectable(element) && shouldSelect) {
      element.select();
    }
    if (isElement(element) && cleanup) {
      element.removeAttribute("tabindex");
    }
  }
};
const useFocusReason = () => {
  return {
    focusReason,
    lastUserFocusTimestamp,
    lastAutomatedFocusTimestamp
  };
};
const createFocusOutPreventedEvent = (detail) => {
  return new CustomEvent(FOCUSOUT_PREVENTED, {
    ...FOCUSOUT_PREVENTED_OPTS,
    detail
  });
};
const _sfc_main$i = defineComponent({
  name: "ElFocusTrap",
  inheritAttrs: false,
  props: {
    loop: Boolean,
    trapped: Boolean,
    focusTrapEl: Object,
    focusStartEl: {
      type: [Object, String],
      default: "first"
    }
  },
  emits: [
    ON_TRAP_FOCUS_EVT,
    ON_RELEASE_FOCUS_EVT,
    "focusin",
    "focusout",
    "focusout-prevented",
    "release-requested"
  ],
  setup(props, { emit }) {
    const forwardRef = ref();
    let lastFocusAfterTrapped;
    const { focusReason: focusReason2 } = useFocusReason();
    const onKeydown = (e) => {
      if (!props.loop && !props.trapped)
        return;
      const { code, altKey, ctrlKey, metaKey, currentTarget, shiftKey } = e;
      const { loop } = props;
      const isTabbing = code === EVENT_CODE.tab && !altKey && !ctrlKey && !metaKey;
      const currentFocusingEl = (void 0).activeElement;
      if (isTabbing && currentFocusingEl) {
        const container = currentTarget;
        const [first, last] = getEdges(container);
        const isTabbable = first && last;
        if (!isTabbable) {
          if (currentFocusingEl === container) {
            const focusoutPreventedEvent = createFocusOutPreventedEvent({
              focusReason: focusReason2.value
            });
            emit("focusout-prevented", focusoutPreventedEvent);
            if (!focusoutPreventedEvent.defaultPrevented) {
              e.preventDefault();
            }
          }
        } else {
          if (!shiftKey && currentFocusingEl === last) {
            const focusoutPreventedEvent = createFocusOutPreventedEvent({
              focusReason: focusReason2.value
            });
            emit("focusout-prevented", focusoutPreventedEvent);
            if (!focusoutPreventedEvent.defaultPrevented) {
              e.preventDefault();
              if (loop)
                tryFocus(first, true);
            }
          } else if (shiftKey && [first, container].includes(currentFocusingEl)) {
            const focusoutPreventedEvent = createFocusOutPreventedEvent({
              focusReason: focusReason2.value
            });
            emit("focusout-prevented", focusoutPreventedEvent);
            if (!focusoutPreventedEvent.defaultPrevented) {
              e.preventDefault();
              if (loop)
                tryFocus(last, true);
            }
          }
        }
      }
    };
    provide(FOCUS_TRAP_INJECTION_KEY, {
      focusTrapRef: forwardRef,
      onKeydown
    });
    watch(() => props.focusTrapEl, (focusTrapEl) => {
      if (focusTrapEl) {
        forwardRef.value = focusTrapEl;
      }
    }, { immediate: true });
    watch([forwardRef], ([forwardRef2], [oldForwardRef]) => {
      if (forwardRef2) {
        forwardRef2.addEventListener("keydown", onKeydown);
        forwardRef2.addEventListener("focusin", onFocusIn);
        forwardRef2.addEventListener("focusout", onFocusOut);
      }
      if (oldForwardRef) {
        oldForwardRef.removeEventListener("keydown", onKeydown);
        oldForwardRef.removeEventListener("focusin", onFocusIn);
        oldForwardRef.removeEventListener("focusout", onFocusOut);
      }
    });
    const onFocusIn = (e) => {
      const trapContainer = unref(forwardRef);
      if (!trapContainer)
        return;
      const target = e.target;
      const relatedTarget = e.relatedTarget;
      const isFocusedInTrap = target && trapContainer.contains(target);
      if (!props.trapped) {
        relatedTarget && trapContainer.contains(relatedTarget);
      }
      if (isFocusedInTrap)
        emit("focusin", e);
      if (props.trapped) {
        if (isFocusedInTrap) {
          lastFocusAfterTrapped = target;
        } else {
          tryFocus(lastFocusAfterTrapped, true);
        }
      }
    };
    const onFocusOut = (e) => {
      const trapContainer = unref(forwardRef);
      if (!trapContainer)
        return;
      if (props.trapped) {
        const relatedTarget = e.relatedTarget;
        if (!isNil(relatedTarget) && !trapContainer.contains(relatedTarget)) {
          setTimeout(() => {
            if (props.trapped) {
              const focusoutPreventedEvent = createFocusOutPreventedEvent({
                focusReason: focusReason2.value
              });
              emit("focusout-prevented", focusoutPreventedEvent);
              if (!focusoutPreventedEvent.defaultPrevented) {
                tryFocus(lastFocusAfterTrapped, true);
              }
            }
          }, 0);
        }
      } else {
        const target = e.target;
        const isFocusedInTrap = target && trapContainer.contains(target);
        if (!isFocusedInTrap)
          emit("focusout", e);
      }
    };
    return {
      onKeydown
    };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return renderSlot(_ctx.$slots, "default", { handleKeydown: _ctx.onKeydown });
}
var ElFocusTrap = /* @__PURE__ */ _export_sfc$1(_sfc_main$i, [["render", _sfc_render], ["__file", "focus-trap.vue"]]);
const popperArrowProps = buildProps({
  arrowOffset: {
    type: Number,
    default: 5
  }
});
const POSITIONING_STRATEGIES = ["fixed", "absolute"];
const popperCoreConfigProps = buildProps({
  boundariesPadding: {
    type: Number,
    default: 0
  },
  fallbackPlacements: {
    type: definePropType(Array),
    default: void 0
  },
  gpuAcceleration: {
    type: Boolean,
    default: true
  },
  offset: {
    type: Number,
    default: 12
  },
  placement: {
    type: String,
    values: placements,
    default: "bottom"
  },
  popperOptions: {
    type: definePropType(Object),
    default: () => ({})
  },
  strategy: {
    type: String,
    values: POSITIONING_STRATEGIES,
    default: "absolute"
  }
});
const popperContentProps = buildProps({
  ...popperCoreConfigProps,
  ...popperArrowProps,
  id: String,
  style: {
    type: definePropType([String, Array, Object])
  },
  className: {
    type: definePropType([String, Array, Object])
  },
  effect: {
    type: definePropType(String),
    default: "dark"
  },
  visible: Boolean,
  enterable: {
    type: Boolean,
    default: true
  },
  pure: Boolean,
  focusOnShow: {
    type: Boolean,
    default: false
  },
  trapping: {
    type: Boolean,
    default: false
  },
  popperClass: {
    type: definePropType([String, Array, Object])
  },
  popperStyle: {
    type: definePropType([String, Array, Object])
  },
  referenceEl: {
    type: definePropType(Object)
  },
  triggerTargetEl: {
    type: definePropType(Object)
  },
  stopPopperMouseEvent: {
    type: Boolean,
    default: true
  },
  virtualTriggering: Boolean,
  zIndex: Number,
  ...useAriaProps(["ariaLabel"])
});
const popperContentEmits = {
  mouseenter: (evt) => evt instanceof MouseEvent,
  mouseleave: (evt) => evt instanceof MouseEvent,
  focus: () => true,
  blur: () => true,
  close: () => true
};
const usePopperContentFocusTrap = (props, emit) => {
  const trapped = ref(false);
  const focusStartRef = ref();
  const onFocusAfterTrapped = () => {
    emit("focus");
  };
  const onFocusAfterReleased = (event) => {
    var _a;
    if (((_a = event.detail) == null ? void 0 : _a.focusReason) !== "pointer") {
      focusStartRef.value = "first";
      emit("blur");
    }
  };
  const onFocusInTrap = (event) => {
    if (props.visible && !trapped.value) {
      if (event.target) {
        focusStartRef.value = event.target;
      }
      trapped.value = true;
    }
  };
  const onFocusoutPrevented = (event) => {
    if (!props.trapping) {
      if (event.detail.focusReason === "pointer") {
        event.preventDefault();
      }
      trapped.value = false;
    }
  };
  const onReleaseRequested = () => {
    trapped.value = false;
    emit("close");
  };
  return {
    focusStartRef,
    trapped,
    onFocusAfterReleased,
    onFocusAfterTrapped,
    onFocusInTrap,
    onFocusoutPrevented,
    onReleaseRequested
  };
};
const buildPopperOptions = (props, modifiers = []) => {
  const { placement, strategy, popperOptions } = props;
  const options = {
    placement,
    strategy,
    ...popperOptions,
    modifiers: [...genModifiers(props), ...modifiers]
  };
  deriveExtraModifiers(options, popperOptions == null ? void 0 : popperOptions.modifiers);
  return options;
};
const unwrapMeasurableEl = ($el) => {
  if (!isClient)
    return;
  return unrefElement($el);
};
function genModifiers(options) {
  const { offset, gpuAcceleration, fallbackPlacements } = options;
  return [
    {
      name: "offset",
      options: {
        offset: [0, offset != null ? offset : 12]
      }
    },
    {
      name: "preventOverflow",
      options: {
        padding: {
          top: 2,
          bottom: 2,
          left: 5,
          right: 5
        }
      }
    },
    {
      name: "flip",
      options: {
        padding: 5,
        fallbackPlacements
      }
    },
    {
      name: "computeStyles",
      options: {
        gpuAcceleration
      }
    }
  ];
}
function deriveExtraModifiers(options, modifiers) {
  if (modifiers) {
    options.modifiers = [...options.modifiers, ...modifiers != null ? modifiers : []];
  }
}
const usePopper = (referenceElementRef, popperElementRef, opts = {}) => {
  const stateUpdater = {
    name: "updateState",
    enabled: true,
    phase: "write",
    fn: ({ state }) => {
      const derivedState = deriveState(state);
      Object.assign(states.value, derivedState);
    },
    requires: ["computeStyles"]
  };
  const options = computed(() => {
    const { onFirstUpdate, placement, strategy, modifiers } = unref(opts);
    return {
      onFirstUpdate,
      placement: placement || "bottom",
      strategy: strategy || "absolute",
      modifiers: [
        ...modifiers || [],
        stateUpdater,
        { name: "applyStyles", enabled: false }
      ]
    };
  });
  const instanceRef = shallowRef();
  const states = ref({
    styles: {
      popper: {
        position: unref(options).strategy,
        left: "0",
        top: "0"
      },
      arrow: {
        position: "absolute"
      }
    },
    attributes: {}
  });
  const destroy = () => {
    if (!instanceRef.value)
      return;
    instanceRef.value.destroy();
    instanceRef.value = void 0;
  };
  watch(options, (newOptions) => {
    const instance = unref(instanceRef);
    if (instance) {
      instance.setOptions(newOptions);
    }
  }, {
    deep: true
  });
  watch([referenceElementRef, popperElementRef], ([referenceElement, popperElement]) => {
    destroy();
    if (!referenceElement || !popperElement)
      return;
    instanceRef.value = createPopper(referenceElement, popperElement, unref(options));
  });
  return {
    state: computed(() => {
      var _a;
      return { ...((_a = unref(instanceRef)) == null ? void 0 : _a.state) || {} };
    }),
    styles: computed(() => unref(states).styles),
    attributes: computed(() => unref(states).attributes),
    update: () => {
      var _a;
      return (_a = unref(instanceRef)) == null ? void 0 : _a.update();
    },
    forceUpdate: () => {
      var _a;
      return (_a = unref(instanceRef)) == null ? void 0 : _a.forceUpdate();
    },
    instanceRef: computed(() => unref(instanceRef))
  };
};
function deriveState(state) {
  const elements = Object.keys(state.elements);
  const styles = fromPairs(elements.map((element) => [element, state.styles[element] || {}]));
  const attributes = fromPairs(elements.map((element) => [element, state.attributes[element]]));
  return {
    styles,
    attributes
  };
}
const DEFAULT_ARROW_OFFSET = 0;
const usePopperContent = (props) => {
  const { popperInstanceRef, contentRef, triggerRef, role } = inject(POPPER_INJECTION_KEY, void 0);
  const arrowRef = ref();
  const arrowOffset = computed(() => props.arrowOffset);
  const eventListenerModifier = computed(() => {
    return {
      name: "eventListeners",
      enabled: !!props.visible
    };
  });
  const arrowModifier = computed(() => {
    var _a;
    const arrowEl = unref(arrowRef);
    const offset = (_a = unref(arrowOffset)) != null ? _a : DEFAULT_ARROW_OFFSET;
    return {
      name: "arrow",
      enabled: !isUndefined$1(arrowEl),
      options: {
        element: arrowEl,
        padding: offset
      }
    };
  });
  const options = computed(() => {
    return {
      onFirstUpdate: () => {
        update();
      },
      ...buildPopperOptions(props, [
        unref(arrowModifier),
        unref(eventListenerModifier)
      ])
    };
  });
  const computedReference = computed(() => unwrapMeasurableEl(props.referenceEl) || unref(triggerRef));
  const { attributes, state, styles, update, forceUpdate, instanceRef } = usePopper(computedReference, contentRef, options);
  watch(instanceRef, (instance) => popperInstanceRef.value = instance, {
    flush: "sync"
  });
  return {
    attributes,
    arrowRef,
    contentRef,
    instanceRef,
    state,
    styles,
    role,
    forceUpdate,
    update
  };
};
const usePopperContentDOM = (props, {
  attributes,
  styles,
  role
}) => {
  const { nextZIndex } = useZIndex();
  const ns = useNamespace("popper");
  const contentAttrs = computed(() => unref(attributes).popper);
  const contentZIndex = ref(isNumber(props.zIndex) ? props.zIndex : nextZIndex());
  const contentClass = computed(() => [
    ns.b(),
    ns.is("pure", props.pure),
    ns.is(props.effect),
    props.popperClass
  ]);
  const contentStyle = computed(() => {
    return [
      { zIndex: unref(contentZIndex) },
      unref(styles).popper,
      props.popperStyle || {}
    ];
  });
  const ariaModal = computed(() => role.value === "dialog" ? "false" : void 0);
  const arrowStyle = computed(() => unref(styles).arrow || {});
  const updateZIndex = () => {
    contentZIndex.value = isNumber(props.zIndex) ? props.zIndex : nextZIndex();
  };
  return {
    ariaModal,
    arrowStyle,
    contentAttrs,
    contentClass,
    contentStyle,
    contentZIndex,
    updateZIndex
  };
};
const __default__$b = defineComponent({
  name: "ElPopperContent"
});
const _sfc_main$h = /* @__PURE__ */ defineComponent({
  ...__default__$b,
  props: popperContentProps,
  emits: popperContentEmits,
  setup(__props, { expose, emit }) {
    const props = __props;
    const {
      focusStartRef,
      trapped,
      onFocusAfterReleased,
      onFocusAfterTrapped,
      onFocusInTrap,
      onFocusoutPrevented,
      onReleaseRequested
    } = usePopperContentFocusTrap(props, emit);
    const { attributes, arrowRef, contentRef, styles, instanceRef, role, update } = usePopperContent(props);
    const {
      arrowStyle,
      contentAttrs,
      contentClass,
      contentStyle,
      updateZIndex
    } = usePopperContentDOM(props, {
      styles,
      attributes,
      role
    });
    const formItemContext = inject(formItemContextKey, void 0);
    provide(POPPER_CONTENT_INJECTION_KEY, {
      arrowStyle,
      arrowRef
    });
    if (formItemContext) {
      provide(formItemContextKey, {
        ...formItemContext,
        addInputId: NOOP,
        removeInputId: NOOP
      });
    }
    const updatePopper = (shouldUpdateZIndex = true) => {
      update();
      shouldUpdateZIndex && updateZIndex();
    };
    expose({
      popperContentRef: contentRef,
      popperInstanceRef: instanceRef,
      updatePopper,
      contentStyle
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", mergeProps({
        ref_key: "contentRef",
        ref: contentRef
      }, unref(contentAttrs), {
        style: unref(contentStyle),
        class: unref(contentClass),
        tabindex: "-1",
        onMouseenter: (e) => _ctx.$emit("mouseenter", e),
        onMouseleave: (e) => _ctx.$emit("mouseleave", e)
      }), [
        createVNode(unref(ElFocusTrap), {
          trapped: unref(trapped),
          "trap-on-focus-in": true,
          "focus-trap-el": unref(contentRef),
          "focus-start-el": unref(focusStartRef),
          onFocusAfterTrapped: unref(onFocusAfterTrapped),
          onFocusAfterReleased: unref(onFocusAfterReleased),
          onFocusin: unref(onFocusInTrap),
          onFocusoutPrevented: unref(onFocusoutPrevented),
          onReleaseRequested: unref(onReleaseRequested)
        }, {
          default: withCtx(() => [
            renderSlot(_ctx.$slots, "default")
          ]),
          _: 3
        }, 8, ["trapped", "focus-trap-el", "focus-start-el", "onFocusAfterTrapped", "onFocusAfterReleased", "onFocusin", "onFocusoutPrevented", "onReleaseRequested"])
      ], 16, ["onMouseenter", "onMouseleave"]);
    };
  }
});
var ElPopperContent = /* @__PURE__ */ _export_sfc$1(_sfc_main$h, [["__file", "content.vue"]]);
const ElPopper = withInstall(Popper);
const TOOLTIP_INJECTION_KEY = Symbol("elTooltip");
const teleportProps = buildProps({
  to: {
    type: definePropType([String, Object]),
    required: true
  },
  disabled: Boolean
});
const useTooltipContentProps = buildProps({
  ...useDelayedToggleProps,
  ...popperContentProps,
  appendTo: {
    type: teleportProps.to.type
  },
  content: {
    type: String,
    default: ""
  },
  rawContent: Boolean,
  persistent: Boolean,
  visible: {
    type: definePropType(Boolean),
    default: null
  },
  transition: String,
  teleported: {
    type: Boolean,
    default: true
  },
  disabled: Boolean,
  ...useAriaProps(["ariaLabel"])
});
const useTooltipTriggerProps = buildProps({
  ...popperTriggerProps,
  disabled: Boolean,
  trigger: {
    type: definePropType([String, Array]),
    default: "hover"
  },
  triggerKeys: {
    type: definePropType(Array),
    default: () => [EVENT_CODE.enter, EVENT_CODE.numpadEnter, EVENT_CODE.space]
  }
});
const _prop = buildProp({
  type: definePropType(Boolean),
  default: null
});
const _event = buildProp({
  type: definePropType(Function)
});
const createModelToggleComposable = (name) => {
  const updateEventKey = `update:${name}`;
  const updateEventKeyRaw = `onUpdate:${name}`;
  const useModelToggleEmits2 = [updateEventKey];
  const useModelToggleProps2 = {
    [name]: _prop,
    [updateEventKeyRaw]: _event
  };
  const useModelToggle2 = ({
    indicator,
    toggleReason,
    shouldHideWhenRouteChanges,
    shouldProceed,
    onShow,
    onHide
  }) => {
    const instance = getCurrentInstance();
    const { emit } = instance;
    const props = instance.props;
    const hasUpdateHandler = computed(() => isFunction(props[updateEventKeyRaw]));
    const isModelBindingAbsent = computed(() => props[name] === null);
    const doShow = (event) => {
      if (indicator.value === true) {
        return;
      }
      indicator.value = true;
      if (toggleReason) {
        toggleReason.value = event;
      }
      if (isFunction(onShow)) {
        onShow(event);
      }
    };
    const doHide = (event) => {
      if (indicator.value === false) {
        return;
      }
      indicator.value = false;
      if (toggleReason) {
        toggleReason.value = event;
      }
      if (isFunction(onHide)) {
        onHide(event);
      }
    };
    const show = (event) => {
      if (props.disabled === true || isFunction(shouldProceed) && !shouldProceed())
        return;
      const shouldEmit = hasUpdateHandler.value && isClient;
      if (shouldEmit) {
        emit(updateEventKey, true);
      }
      if (isModelBindingAbsent.value || !shouldEmit) {
        doShow(event);
      }
    };
    const hide = (event) => {
      if (props.disabled === true || !isClient)
        return;
      const shouldEmit = hasUpdateHandler.value && isClient;
      if (shouldEmit) {
        emit(updateEventKey, false);
      }
      if (isModelBindingAbsent.value || !shouldEmit) {
        doHide(event);
      }
    };
    const onChange = (val) => {
      if (!isBoolean(val))
        return;
      if (props.disabled && val) {
        if (hasUpdateHandler.value) {
          emit(updateEventKey, false);
        }
      } else if (indicator.value !== val) {
        if (val) {
          doShow();
        } else {
          doHide();
        }
      }
    };
    const toggle = () => {
      if (indicator.value) {
        hide();
      } else {
        show();
      }
    };
    watch(() => props[name], onChange);
    if (shouldHideWhenRouteChanges && instance.appContext.config.globalProperties.$route !== void 0) {
      watch(() => ({
        ...instance.proxy.$route
      }), () => {
        if (shouldHideWhenRouteChanges.value && indicator.value) {
          hide();
        }
      });
    }
    return {
      hide,
      show,
      toggle,
      hasUpdateHandler
    };
  };
  return {
    useModelToggle: useModelToggle2,
    useModelToggleProps: useModelToggleProps2,
    useModelToggleEmits: useModelToggleEmits2
  };
};
const {
  useModelToggleProps: useTooltipModelToggleProps,
  useModelToggleEmits: useTooltipModelToggleEmits,
  useModelToggle: useTooltipModelToggle
} = createModelToggleComposable("visible");
const useTooltipProps = buildProps({
  ...popperProps,
  ...useTooltipModelToggleProps,
  ...useTooltipContentProps,
  ...useTooltipTriggerProps,
  ...popperArrowProps,
  showArrow: {
    type: Boolean,
    default: true
  }
});
const tooltipEmits = [
  ...useTooltipModelToggleEmits,
  "before-show",
  "before-hide",
  "show",
  "hide",
  "open",
  "close"
];
const isTriggerType = (trigger, type) => {
  if (isArray(trigger)) {
    return trigger.includes(type);
  }
  return trigger === type;
};
const whenTrigger = (trigger, type, handler) => {
  return (e) => {
    isTriggerType(unref(trigger), type) && handler(e);
  };
};
const composeEventHandlers = (theirsHandler, oursHandler, { checkForDefaultPrevented = true } = {}) => {
  const handleEvent = (event) => {
    const shouldPrevent = theirsHandler == null ? void 0 : theirsHandler(event);
    if (checkForDefaultPrevented === false || !shouldPrevent) {
      return oursHandler == null ? void 0 : oursHandler(event);
    }
  };
  return handleEvent;
};
const __default__$a = defineComponent({
  name: "ElTooltipTrigger"
});
const _sfc_main$g = /* @__PURE__ */ defineComponent({
  ...__default__$a,
  props: useTooltipTriggerProps,
  setup(__props, { expose }) {
    const props = __props;
    const ns = useNamespace("tooltip");
    const { controlled, id, open, onOpen, onClose, onToggle } = inject(TOOLTIP_INJECTION_KEY, void 0);
    const triggerRef = ref(null);
    const stopWhenControlledOrDisabled = () => {
      if (unref(controlled) || props.disabled) {
        return true;
      }
    };
    const trigger = toRef(props, "trigger");
    const onMouseenter = composeEventHandlers(stopWhenControlledOrDisabled, whenTrigger(trigger, "hover", onOpen));
    const onMouseleave = composeEventHandlers(stopWhenControlledOrDisabled, whenTrigger(trigger, "hover", onClose));
    const onClick = composeEventHandlers(stopWhenControlledOrDisabled, whenTrigger(trigger, "click", (e) => {
      if (e.button === 0) {
        onToggle(e);
      }
    }));
    const onFocus = composeEventHandlers(stopWhenControlledOrDisabled, whenTrigger(trigger, "focus", onOpen));
    const onBlur = composeEventHandlers(stopWhenControlledOrDisabled, whenTrigger(trigger, "focus", onClose));
    const onContextMenu = composeEventHandlers(stopWhenControlledOrDisabled, whenTrigger(trigger, "contextmenu", (e) => {
      e.preventDefault();
      onToggle(e);
    }));
    const onKeydown = composeEventHandlers(stopWhenControlledOrDisabled, (e) => {
      const { code } = e;
      if (props.triggerKeys.includes(code)) {
        e.preventDefault();
        onToggle(e);
      }
    });
    expose({
      triggerRef
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(ElPopperTrigger), {
        id: unref(id),
        "virtual-ref": _ctx.virtualRef,
        open: unref(open),
        "virtual-triggering": _ctx.virtualTriggering,
        class: normalizeClass(unref(ns).e("trigger")),
        onBlur: unref(onBlur),
        onClick: unref(onClick),
        onContextmenu: unref(onContextMenu),
        onFocus: unref(onFocus),
        onMouseenter: unref(onMouseenter),
        onMouseleave: unref(onMouseleave),
        onKeydown: unref(onKeydown)
      }, {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
      }, 8, ["id", "virtual-ref", "open", "virtual-triggering", "class", "onBlur", "onClick", "onContextmenu", "onFocus", "onMouseenter", "onMouseleave", "onKeydown"]);
    };
  }
});
var ElTooltipTrigger = /* @__PURE__ */ _export_sfc$1(_sfc_main$g, [["__file", "trigger.vue"]]);
const _sfc_main$f = /* @__PURE__ */ defineComponent({
  __name: "teleport",
  props: teleportProps,
  setup(__props) {
    return (_ctx, _cache) => {
      return _ctx.disabled ? renderSlot(_ctx.$slots, "default", { key: 0 }) : (openBlock(), createBlock(Teleport$1, {
        key: 1,
        to: _ctx.to
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 8, ["to"]));
    };
  }
});
var Teleport = /* @__PURE__ */ _export_sfc$1(_sfc_main$f, [["__file", "teleport.vue"]]);
const ElTeleport = withInstall(Teleport);
const usePopperContainerId = () => {
  const namespace = useGetDerivedNamespace();
  const idInjection = useIdInjection();
  const id = computed(() => {
    return `${namespace.value}-popper-container-${idInjection.prefix}`;
  });
  const selector = computed(() => `#${id.value}`);
  return {
    id,
    selector
  };
};
const usePopperContainer = () => {
  const { id, selector } = usePopperContainerId();
  return {
    id,
    selector
  };
};
const __default__$9 = defineComponent({
  name: "ElTooltipContent",
  inheritAttrs: false
});
const _sfc_main$e = /* @__PURE__ */ defineComponent({
  ...__default__$9,
  props: useTooltipContentProps,
  setup(__props, { expose }) {
    const props = __props;
    const { selector } = usePopperContainerId();
    const ns = useNamespace("tooltip");
    const contentRef = ref();
    const popperContentRef = computedEager(() => {
      var _a;
      return (_a = contentRef.value) == null ? void 0 : _a.popperContentRef;
    });
    let stopHandle;
    const {
      controlled,
      id,
      open,
      trigger,
      onClose,
      onOpen,
      onShow,
      onHide,
      onBeforeShow,
      onBeforeHide
    } = inject(TOOLTIP_INJECTION_KEY, void 0);
    const transitionClass = computed(() => {
      return props.transition || `${ns.namespace.value}-fade-in-linear`;
    });
    const persistentRef = computed(() => {
      return props.persistent;
    });
    const shouldRender = computed(() => {
      return unref(persistentRef) ? true : unref(open);
    });
    const shouldShow = computed(() => {
      return props.disabled ? false : unref(open);
    });
    const appendTo = computed(() => {
      return props.appendTo || selector.value;
    });
    const contentStyle = computed(() => {
      var _a;
      return (_a = props.style) != null ? _a : {};
    });
    const ariaHidden = ref(true);
    const onTransitionLeave = () => {
      onHide();
      isFocusInsideContent() && tryFocus((void 0).body);
      ariaHidden.value = true;
    };
    const stopWhenControlled = () => {
      if (unref(controlled))
        return true;
    };
    const onContentEnter = composeEventHandlers(stopWhenControlled, () => {
      if (props.enterable && unref(trigger) === "hover") {
        onOpen();
      }
    });
    const onContentLeave = composeEventHandlers(stopWhenControlled, () => {
      if (unref(trigger) === "hover") {
        onClose();
      }
    });
    const onBeforeEnter = () => {
      var _a, _b;
      (_b = (_a = contentRef.value) == null ? void 0 : _a.updatePopper) == null ? void 0 : _b.call(_a);
      onBeforeShow == null ? void 0 : onBeforeShow();
    };
    const onBeforeLeave = () => {
      onBeforeHide == null ? void 0 : onBeforeHide();
    };
    const onAfterShow = () => {
      onShow();
    };
    const onBlur = () => {
      if (!props.virtualTriggering) {
        onClose();
      }
    };
    const isFocusInsideContent = (event) => {
      var _a;
      const popperContent = (_a = contentRef.value) == null ? void 0 : _a.popperContentRef;
      const activeElement = (event == null ? void 0 : event.relatedTarget) || (void 0).activeElement;
      return popperContent == null ? void 0 : popperContent.contains(activeElement);
    };
    watch(() => unref(open), (val) => {
      if (!val) {
        stopHandle == null ? void 0 : stopHandle();
      } else {
        ariaHidden.value = false;
        stopHandle = onClickOutside(popperContentRef, () => {
          if (unref(controlled))
            return;
          const $trigger = unref(trigger);
          if ($trigger !== "hover") {
            onClose();
          }
        });
      }
    }, {
      flush: "post"
    });
    watch(() => props.content, () => {
      var _a, _b;
      (_b = (_a = contentRef.value) == null ? void 0 : _a.updatePopper) == null ? void 0 : _b.call(_a);
    });
    expose({
      contentRef,
      isFocusInsideContent
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(ElTeleport), {
        disabled: !_ctx.teleported,
        to: unref(appendTo)
      }, {
        default: withCtx(() => [
          createVNode(Transition, {
            name: unref(transitionClass),
            onAfterLeave: onTransitionLeave,
            onBeforeEnter,
            onAfterEnter: onAfterShow,
            onBeforeLeave
          }, {
            default: withCtx(() => [
              unref(shouldRender) ? withDirectives((openBlock(), createBlock(unref(ElPopperContent), mergeProps({
                key: 0,
                id: unref(id),
                ref_key: "contentRef",
                ref: contentRef
              }, _ctx.$attrs, {
                "aria-label": _ctx.ariaLabel,
                "aria-hidden": ariaHidden.value,
                "boundaries-padding": _ctx.boundariesPadding,
                "fallback-placements": _ctx.fallbackPlacements,
                "gpu-acceleration": _ctx.gpuAcceleration,
                offset: _ctx.offset,
                placement: _ctx.placement,
                "popper-options": _ctx.popperOptions,
                "arrow-offset": _ctx.arrowOffset,
                strategy: _ctx.strategy,
                effect: _ctx.effect,
                enterable: _ctx.enterable,
                pure: _ctx.pure,
                "popper-class": _ctx.popperClass,
                "popper-style": [_ctx.popperStyle, unref(contentStyle)],
                "reference-el": _ctx.referenceEl,
                "trigger-target-el": _ctx.triggerTargetEl,
                visible: unref(shouldShow),
                "z-index": _ctx.zIndex,
                onMouseenter: unref(onContentEnter),
                onMouseleave: unref(onContentLeave),
                onBlur,
                onClose: unref(onClose)
              }), {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "default")
                ]),
                _: 3
              }, 16, ["id", "aria-label", "aria-hidden", "boundaries-padding", "fallback-placements", "gpu-acceleration", "offset", "placement", "popper-options", "arrow-offset", "strategy", "effect", "enterable", "pure", "popper-class", "popper-style", "reference-el", "trigger-target-el", "visible", "z-index", "onMouseenter", "onMouseleave", "onClose"])), [
                [vShow, unref(shouldShow)]
              ]) : createCommentVNode("v-if", true)
            ]),
            _: 3
          }, 8, ["name"])
        ]),
        _: 3
      }, 8, ["disabled", "to"]);
    };
  }
});
var ElTooltipContent = /* @__PURE__ */ _export_sfc$1(_sfc_main$e, [["__file", "content.vue"]]);
const __default__$8 = defineComponent({
  name: "ElTooltip"
});
const _sfc_main$d = /* @__PURE__ */ defineComponent({
  ...__default__$8,
  props: useTooltipProps,
  emits: tooltipEmits,
  setup(__props, { expose, emit }) {
    const props = __props;
    usePopperContainer();
    const ns = useNamespace("tooltip");
    const id = useId();
    const popperRef = ref();
    const contentRef = ref();
    const updatePopper = () => {
      var _a;
      const popperComponent = unref(popperRef);
      if (popperComponent) {
        (_a = popperComponent.popperInstanceRef) == null ? void 0 : _a.update();
      }
    };
    const open = ref(false);
    const toggleReason = ref();
    const { show, hide, hasUpdateHandler } = useTooltipModelToggle({
      indicator: open,
      toggleReason
    });
    const { onOpen, onClose } = useDelayedToggle({
      showAfter: toRef(props, "showAfter"),
      hideAfter: toRef(props, "hideAfter"),
      autoClose: toRef(props, "autoClose"),
      open: show,
      close: hide
    });
    const controlled = computed(() => isBoolean(props.visible) && !hasUpdateHandler.value);
    const kls = computed(() => {
      return [ns.b(), props.popperClass];
    });
    provide(TOOLTIP_INJECTION_KEY, {
      controlled,
      id,
      open: readonly(open),
      trigger: toRef(props, "trigger"),
      onOpen: (event) => {
        onOpen(event);
      },
      onClose: (event) => {
        onClose(event);
      },
      onToggle: (event) => {
        if (unref(open)) {
          onClose(event);
        } else {
          onOpen(event);
        }
      },
      onShow: () => {
        emit("show", toggleReason.value);
      },
      onHide: () => {
        emit("hide", toggleReason.value);
      },
      onBeforeShow: () => {
        emit("before-show", toggleReason.value);
      },
      onBeforeHide: () => {
        emit("before-hide", toggleReason.value);
      },
      updatePopper
    });
    watch(() => props.disabled, (disabled) => {
      if (disabled && open.value) {
        open.value = false;
      }
    });
    const isFocusInsideContent = (event) => {
      var _a;
      return (_a = contentRef.value) == null ? void 0 : _a.isFocusInsideContent(event);
    };
    expose({
      popperRef,
      contentRef,
      isFocusInsideContent,
      updatePopper,
      onOpen,
      onClose,
      hide
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(ElPopper), {
        ref_key: "popperRef",
        ref: popperRef,
        role: _ctx.role
      }, {
        default: withCtx(() => [
          createVNode(ElTooltipTrigger, {
            disabled: _ctx.disabled,
            trigger: _ctx.trigger,
            "trigger-keys": _ctx.triggerKeys,
            "virtual-ref": _ctx.virtualRef,
            "virtual-triggering": _ctx.virtualTriggering
          }, {
            default: withCtx(() => [
              _ctx.$slots.default ? renderSlot(_ctx.$slots, "default", { key: 0 }) : createCommentVNode("v-if", true)
            ]),
            _: 3
          }, 8, ["disabled", "trigger", "trigger-keys", "virtual-ref", "virtual-triggering"]),
          createVNode(ElTooltipContent, {
            ref_key: "contentRef",
            ref: contentRef,
            "aria-label": _ctx.ariaLabel,
            "boundaries-padding": _ctx.boundariesPadding,
            content: _ctx.content,
            disabled: _ctx.disabled,
            effect: _ctx.effect,
            enterable: _ctx.enterable,
            "fallback-placements": _ctx.fallbackPlacements,
            "hide-after": _ctx.hideAfter,
            "gpu-acceleration": _ctx.gpuAcceleration,
            offset: _ctx.offset,
            persistent: _ctx.persistent,
            "popper-class": unref(kls),
            "popper-style": _ctx.popperStyle,
            placement: _ctx.placement,
            "popper-options": _ctx.popperOptions,
            "arrow-offset": _ctx.arrowOffset,
            pure: _ctx.pure,
            "raw-content": _ctx.rawContent,
            "reference-el": _ctx.referenceEl,
            "trigger-target-el": _ctx.triggerTargetEl,
            "show-after": _ctx.showAfter,
            strategy: _ctx.strategy,
            teleported: _ctx.teleported,
            transition: _ctx.transition,
            "virtual-triggering": _ctx.virtualTriggering,
            "z-index": _ctx.zIndex,
            "append-to": _ctx.appendTo
          }, {
            default: withCtx(() => [
              renderSlot(_ctx.$slots, "content", {}, () => [
                _ctx.rawContent ? (openBlock(), createElementBlock("span", {
                  key: 0,
                  innerHTML: _ctx.content
                }, null, 8, ["innerHTML"])) : (openBlock(), createElementBlock("span", { key: 1 }, toDisplayString(_ctx.content), 1))
              ]),
              _ctx.showArrow ? (openBlock(), createBlock(unref(ElPopperArrow), { key: 0 })) : createCommentVNode("v-if", true)
            ]),
            _: 3
          }, 8, ["aria-label", "boundaries-padding", "content", "disabled", "effect", "enterable", "fallback-placements", "hide-after", "gpu-acceleration", "offset", "persistent", "popper-class", "popper-style", "placement", "popper-options", "arrow-offset", "pure", "raw-content", "reference-el", "trigger-target-el", "show-after", "strategy", "teleported", "transition", "virtual-triggering", "z-index", "append-to"])
        ]),
        _: 3
      }, 8, ["role"]);
    };
  }
});
var Tooltip = /* @__PURE__ */ _export_sfc$1(_sfc_main$d, [["__file", "tooltip.vue"]]);
const ElTooltip = withInstall(Tooltip);
const nodeList = /* @__PURE__ */ new Map();
if (isClient) {
  let startClick;
  (void 0).addEventListener("mousedown", (e) => startClick = e);
  (void 0).addEventListener("mouseup", (e) => {
    if (startClick) {
      for (const handlers of nodeList.values()) {
        for (const { documentHandler } of handlers) {
          documentHandler(e, startClick);
        }
      }
      startClick = void 0;
    }
  });
}
function createDocumentHandler(el, binding) {
  let excludes = [];
  if (isArray(binding.arg)) {
    excludes = binding.arg;
  } else if (isElement(binding.arg)) {
    excludes.push(binding.arg);
  }
  return function(mouseup, mousedown) {
    const popperRef = binding.instance.popperRef;
    const mouseUpTarget = mouseup.target;
    const mouseDownTarget = mousedown == null ? void 0 : mousedown.target;
    const isBound = !binding || !binding.instance;
    const isTargetExists = !mouseUpTarget || !mouseDownTarget;
    const isContainedByEl = el.contains(mouseUpTarget) || el.contains(mouseDownTarget);
    const isSelf = el === mouseUpTarget;
    const isTargetExcluded = excludes.length && excludes.some((item) => item == null ? void 0 : item.contains(mouseUpTarget)) || excludes.length && excludes.includes(mouseDownTarget);
    const isContainedByPopper = popperRef && (popperRef.contains(mouseUpTarget) || popperRef.contains(mouseDownTarget));
    if (isBound || isTargetExists || isContainedByEl || isSelf || isTargetExcluded || isContainedByPopper) {
      return;
    }
    binding.value(mouseup, mousedown);
  };
}
const ClickOutside = {
  beforeMount(el, binding) {
    if (!nodeList.has(el)) {
      nodeList.set(el, []);
    }
    nodeList.get(el).push({
      documentHandler: createDocumentHandler(el, binding),
      bindingFn: binding.value
    });
  },
  updated(el, binding) {
    if (!nodeList.has(el)) {
      nodeList.set(el, []);
    }
    const handlers = nodeList.get(el);
    const oldHandlerIndex = handlers.findIndex((item) => item.bindingFn === binding.oldValue);
    const newHandler = {
      documentHandler: createDocumentHandler(el, binding),
      bindingFn: binding.value
    };
    if (oldHandlerIndex >= 0) {
      handlers.splice(oldHandlerIndex, 1, newHandler);
    } else {
      handlers.push(newHandler);
    }
  },
  unmounted(el) {
    nodeList.delete(el);
  }
};
const __default__$7 = defineComponent({
  name: "ElContainer"
});
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  ...__default__$7,
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
var Container = /* @__PURE__ */ _export_sfc$1(_sfc_main$c, [["__file", "container.vue"]]);
const __default__$6 = defineComponent({
  name: "ElAside"
});
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  ...__default__$6,
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
var Aside = /* @__PURE__ */ _export_sfc$1(_sfc_main$b, [["__file", "aside.vue"]]);
const __default__$5 = defineComponent({
  name: "ElFooter"
});
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  ...__default__$5,
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
var Footer = /* @__PURE__ */ _export_sfc$1(_sfc_main$a, [["__file", "footer.vue"]]);
const __default__$4 = defineComponent({
  name: "ElHeader"
});
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  ...__default__$4,
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
var Header = /* @__PURE__ */ _export_sfc$1(_sfc_main$9, [["__file", "header.vue"]]);
const __default__$3 = defineComponent({
  name: "ElMain"
});
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  ...__default__$3,
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
var Main = /* @__PURE__ */ _export_sfc$1(_sfc_main$8, [["__file", "main.vue"]]);
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
const __default__$2 = defineComponent({
  name: "ElMenuCollapseTransition"
});
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  ...__default__$2,
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
var ElMenuCollapseTransition = /* @__PURE__ */ _export_sfc$1(_sfc_main$7, [["__file", "menu-collapse-transition.vue"]]);
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
const __default__$1 = defineComponent({
  name: COMPONENT_NAME
});
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  ...__default__$1,
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
var MenuItem = /* @__PURE__ */ _export_sfc$1(_sfc_main$6, [["__file", "menu-item.vue"]]);
const menuItemGroupProps = {
  title: String
};
const __default__ = defineComponent({
  name: "ElMenuItemGroup"
});
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  ...__default__,
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
var MenuItemGroup = /* @__PURE__ */ _export_sfc$1(_sfc_main$5, [["__file", "menu-item-group.vue"]]);
const ElMenu = withInstall(Menu, {
  MenuItem,
  MenuItemGroup,
  SubMenu
});
const ElMenuItem = withNoopInstall(MenuItem);
withNoopInstall(MenuItemGroup);
withNoopInstall(SubMenu);
const _sfc_main$4 = {
  components: {
    IconBase
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_icon_base = resolveComponent("icon-base");
  _push(ssrRenderComponent(_component_icon_base, mergeProps({
    width: "25",
    height: "25",
    fill: "#fff",
    stroke: "#fff"
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<path d="m109.1,36.8c-0.3-2-2-3.4-4-3.4h-23v-9.4c0-9.7-7.9-17.6-17.6-17.6-9.7,0-17.6,7.9-17.6,17.6v9.4h-23c-2,0-3.7,1.4-4,3.4l-13.4,81c-0.2,1.2 0.1,2.4 0.9,3.3 0.8,0.9 1.9,1.4 3.1,1.4h108c0,0 0,0 0.1,0 2.3,0 4.1-1.8 4.1-4.1 0-0.5-0.1-0.9-0.2-1.3l-13.4-80.3zm-54-12.8c0-5.2 4.2-9.4 9.4-9.4s9.4,4.2 9.4,9.4v9.4h-18.8v-9.4zm-39.8,90.4l12.1-72.8h19.5v22.9c0,2.3 1.8,4.1 4.1,4.1 2.3,0 4.1-1.8 4.1-4.1v-22.9h18.8v22.9c0,2.3 1.8,4.1 4.1,4.1 2.3,0 4.1-1.8 4.1-4.1v-22.9h19.5l12.1,72.8h-98.4z"${_scopeId}></path>`);
      } else {
        return [
          createVNode("path", { d: "m109.1,36.8c-0.3-2-2-3.4-4-3.4h-23v-9.4c0-9.7-7.9-17.6-17.6-17.6-9.7,0-17.6,7.9-17.6,17.6v9.4h-23c-2,0-3.7,1.4-4,3.4l-13.4,81c-0.2,1.2 0.1,2.4 0.9,3.3 0.8,0.9 1.9,1.4 3.1,1.4h108c0,0 0,0 0.1,0 2.3,0 4.1-1.8 4.1-4.1 0-0.5-0.1-0.9-0.2-1.3l-13.4-80.3zm-54-12.8c0-5.2 4.2-9.4 9.4-9.4s9.4,4.2 9.4,9.4v9.4h-18.8v-9.4zm-39.8,90.4l12.1-72.8h19.5v22.9c0,2.3 1.8,4.1 4.1,4.1 2.3,0 4.1-1.8 4.1-4.1v-22.9h18.8v22.9c0,2.3 1.8,4.1 4.1,4.1 2.3,0 4.1-1.8 4.1-4.1v-22.9h19.5l12.1,72.8h-98.4z" })
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icons/ShoppingBag.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const ShoppingBag = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$3 = {
  components: {
    IconBase
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_icon_base = resolveComponent("icon-base");
  _push(ssrRenderComponent(_component_icon_base, mergeProps({
    width: "23",
    height: "25",
    fill: "#fff",
    stroke: "#fff",
    class: "user-icon"
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<path d="M128,122a28.62,28.62,0,0,0-28.58-28.5H85.59a1.85,1.85,0,0,1-1.87-1.83V81.17l5.52-6.76a14.85,14.85,0,0,0,3.34-9.36V60.38A8,8,0,0,0,98,52.81v-8a8,8,0,0,0-5-7.42V34.1a13.49,13.49,0,0,0,8.31-20.81,3,3,0,0,0-4.56-.46A7.52,7.52,0,0,1,95,14.08,13.52,13.52,0,0,0,89.85,2.57a3,3,0,0,0-4.48.94,7.44,7.44,0,0,1-3,3A29,29,0,0,0,35,29v8.39a8,8,0,0,0-5,7.42v8a8,8,0,0,0,5.42,7.57v4.67a14.86,14.86,0,0,0,3.34,9.36l5.52,6.76v10.5a1.85,1.85,0,0,1-1.87,1.83H28.58A28.63,28.63,0,0,0,0,122.09V125a3,3,0,0,0,3,3H125a3,3,0,0,0,3-3ZM6,122A22.61,22.61,0,0,1,28.58,99.51H42.41a7.86,7.86,0,0,0,7.87-7.83V80.11a3,3,0,0,0-.68-1.9L43.4,70.62a8.84,8.84,0,0,1-2-5.57V57.81a3,3,0,0,0-3-3H38a2,2,0,0,1-2-2v-8a2,2,0,0,1,2-2,3,3,0,0,0,3-3V29A23,23,0,0,1,79.71,12.21a3,3,0,0,0,2.91.68,13.46,13.46,0,0,0,5.54-3.23,7.51,7.51,0,0,1,.1,6.9,3,3,0,0,0,2.51,4.34,13.58,13.58,0,0,0,6.77-1.38,7.5,7.5,0,0,1-2.06,6.69A7.3,7.3,0,0,1,90,28.39a3.15,3.15,0,0,0-2.15.86,3,3,0,0,0-.9,2.14v8.42a3,3,0,0,0,3,3,2,2,0,0,1,2,2v8a2,2,0,0,1-2,2h-.42a3,3,0,0,0-3,3v7.24a8.83,8.83,0,0,1-2,5.57L78.4,78.21a3,3,0,0,0-.68,1.9V91.67a7.86,7.86,0,0,0,7.87,7.83H99.42A22.61,22.61,0,0,1,122,122Z" data-v-459217f3${_scopeId}></path>`);
      } else {
        return [
          createVNode("path", { d: "M128,122a28.62,28.62,0,0,0-28.58-28.5H85.59a1.85,1.85,0,0,1-1.87-1.83V81.17l5.52-6.76a14.85,14.85,0,0,0,3.34-9.36V60.38A8,8,0,0,0,98,52.81v-8a8,8,0,0,0-5-7.42V34.1a13.49,13.49,0,0,0,8.31-20.81,3,3,0,0,0-4.56-.46A7.52,7.52,0,0,1,95,14.08,13.52,13.52,0,0,0,89.85,2.57a3,3,0,0,0-4.48.94,7.44,7.44,0,0,1-3,3A29,29,0,0,0,35,29v8.39a8,8,0,0,0-5,7.42v8a8,8,0,0,0,5.42,7.57v4.67a14.86,14.86,0,0,0,3.34,9.36l5.52,6.76v10.5a1.85,1.85,0,0,1-1.87,1.83H28.58A28.63,28.63,0,0,0,0,122.09V125a3,3,0,0,0,3,3H125a3,3,0,0,0,3-3ZM6,122A22.61,22.61,0,0,1,28.58,99.51H42.41a7.86,7.86,0,0,0,7.87-7.83V80.11a3,3,0,0,0-.68-1.9L43.4,70.62a8.84,8.84,0,0,1-2-5.57V57.81a3,3,0,0,0-3-3H38a2,2,0,0,1-2-2v-8a2,2,0,0,1,2-2,3,3,0,0,0,3-3V29A23,23,0,0,1,79.71,12.21a3,3,0,0,0,2.91.68,13.46,13.46,0,0,0,5.54-3.23,7.51,7.51,0,0,1,.1,6.9,3,3,0,0,0,2.51,4.34,13.58,13.58,0,0,0,6.77-1.38,7.5,7.5,0,0,1-2.06,6.69A7.3,7.3,0,0,1,90,28.39a3.15,3.15,0,0,0-2.15.86,3,3,0,0,0-.9,2.14v8.42a3,3,0,0,0,3,3,2,2,0,0,1,2,2v8a2,2,0,0,1-2,2h-.42a3,3,0,0,0-3,3v7.24a8.83,8.83,0,0,1-2,5.57L78.4,78.21a3,3,0,0,0-.68,1.9V91.67a7.86,7.86,0,0,0,7.87,7.83H99.42A22.61,22.61,0,0,1,122,122Z" })
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icons/UserIcon.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const UserIcon = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-459217f3"]]);
const _sfc_main$2 = {
  __name: "AppHeader",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    const authStore = useAuthStore();
    const cartStore = useCartStore();
    const dialogVisible = ref(false);
    const activeIndex = ref("1");
    const profileOpen = ref(false);
    const handleSelect = (key) => {
      activeIndex.value = key;
    };
    const toggleDrawer = () => {
      profileOpen.value = !profileOpen.value;
    };
    const quantity = computed(() => cartStore.totalQuantity);
    const isAuthenticated = computed(() => authStore.isAuthenticated);
    const loggedInUser = computed(
      () => {
        var _a, _b;
        return ((_a = authStore.user) == null ? void 0 : _a.name) || ((_b = authStore.user) == null ? void 0 : _b.displayName) || "";
      }
    );
    computed(() => {
      var _a;
      return (_a = authStore.user) == null ? void 0 : _a.uid;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_header = ElHeader;
      const _component_el_menu = ElMenu;
      const _component_el_menu_item = ElMenuItem;
      const _component_nuxt_link = __nuxt_component_0;
      const _component_ClientOnly = __nuxt_component_4;
      const _component_el_badge = ElBadge;
      const _component_el_button = ElButton;
      const _component_el_icon = ElIcon;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_el_header, {
        class: "app-header",
        height: "auto",
        padding: "0"
      }, {
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
                  _push3(`<div class="el-top-menu" data-v-2e10e440${_scopeId2}>`);
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
                              _push5(`<span class="brand-name" data-v-2e10e440${_scopeId4}>RingCart</span>`);
                            } else {
                              return [
                                createVNode("span", { class: "brand-name" }, "RingCart")
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
                              createVNode("span", { class: "brand-name" }, "RingCart")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="flex-grow" data-v-2e10e440${_scopeId2}></div><div class="desktop-menu" data-v-2e10e440${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_ClientOnly, null, {}, _parent3, _scopeId2));
                  _push3(`</div></div>`);
                  _push3(ssrRenderComponent(_component_ClientOnly, null, {}, _parent3, _scopeId2));
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
                              createVNode("span", { class: "brand-name" }, "RingCart")
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
                              onClick: ($event) => unref(isAuthenticated) ? toggleDrawer() : dialogVisible.value = true,
                              class: "el-menu-navlist"
                            }, {
                              default: withCtx(() => [
                                createVNode("p", { class: "display-name" }, toDisplayString(("capitalize" in _ctx ? _ctx.capitalize : unref(capitalize))(unref(loggedInUser))), 1),
                                createVNode(UserIcon)
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
                                    createVNode(ShoppingBag)
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
                    ]),
                    createVNode(_component_ClientOnly, null, {
                      default: withCtx(() => [
                        createVNode("div", { class: "mobile-menu-button" }, [
                          createTextVNode(" < "),
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
                                  createVNode(ShoppingBag)
                                ]),
                                _: 1
                              }, 8, ["value"])
                            ]),
                            _: 1
                          }, 8, ["onClick"]),
                          !unref(isAuthenticated) ? (openBlock(), createBlock(_component_el_menu_item, {
                            key: 0,
                            index: "5",
                            role: "button",
                            onClick: () => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))("/auth/login"),
                            class: "el-menu-navlist"
                          }, {
                            default: withCtx(() => [
                              createVNode(UserIcon)
                            ]),
                            _: 1
                          }, 8, ["onClick"])) : (openBlock(), createBlock(_component_el_button, {
                            key: 1,
                            type: "primary",
                            circle: "",
                            onClick: toggleDrawer,
                            "aria-label": "Toggle mobile menu",
                            "aria-expanded": "false",
                            "aria-controls": "mobile-menu"
                          }, {
                            default: withCtx(() => [
                              unref(profileOpen) ? (openBlock(), createBlock(_component_el_icon, { key: 0 }, {
                                default: withCtx(() => [
                                  createVNode(unref(close_default))
                                ]),
                                _: 1
                              })) : (openBlock(), createBlock(_component_el_icon, { key: 1 }, {
                                default: withCtx(() => [
                                  createVNode(unref(menu_default))
                                ]),
                                _: 1
                              }))
                            ]),
                            _: 1
                          }))
                        ])
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
                            createVNode("span", { class: "brand-name" }, "RingCart")
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
                            onClick: ($event) => unref(isAuthenticated) ? toggleDrawer() : dialogVisible.value = true,
                            class: "el-menu-navlist"
                          }, {
                            default: withCtx(() => [
                              createVNode("p", { class: "display-name" }, toDisplayString(("capitalize" in _ctx ? _ctx.capitalize : unref(capitalize))(unref(loggedInUser))), 1),
                              createVNode(UserIcon)
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
                                  createVNode(ShoppingBag)
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
                  ]),
                  createVNode(_component_ClientOnly, null, {
                    default: withCtx(() => [
                      createVNode("div", { class: "mobile-menu-button" }, [
                        createTextVNode(" < "),
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
                                createVNode(ShoppingBag)
                              ]),
                              _: 1
                            }, 8, ["value"])
                          ]),
                          _: 1
                        }, 8, ["onClick"]),
                        !unref(isAuthenticated) ? (openBlock(), createBlock(_component_el_menu_item, {
                          key: 0,
                          index: "5",
                          role: "button",
                          onClick: () => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))("/auth/login"),
                          class: "el-menu-navlist"
                        }, {
                          default: withCtx(() => [
                            createVNode(UserIcon)
                          ]),
                          _: 1
                        }, 8, ["onClick"])) : (openBlock(), createBlock(_component_el_button, {
                          key: 1,
                          type: "primary",
                          circle: "",
                          onClick: toggleDrawer,
                          "aria-label": "Toggle mobile menu",
                          "aria-expanded": "false",
                          "aria-controls": "mobile-menu"
                        }, {
                          default: withCtx(() => [
                            unref(profileOpen) ? (openBlock(), createBlock(_component_el_icon, { key: 0 }, {
                              default: withCtx(() => [
                                createVNode(unref(close_default))
                              ]),
                              _: 1
                            })) : (openBlock(), createBlock(_component_el_icon, { key: 1 }, {
                              default: withCtx(() => [
                                createVNode(unref(menu_default))
                              ]),
                              _: 1
                            }))
                          ]),
                          _: 1
                        }))
                      ])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["default-active"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppHeader.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const AppHeader = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-2e10e440"]]);
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
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "bg-gray-50 border-t border-gray-200 pt-12 pb-8" }, _attrs))} data-v-426a425b><div class="container-wrapper" data-v-426a425b><div class="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8" data-v-426a425b><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" data-v-426a425b><div data-v-426a425b><h3 class="font-bold text-lg mb-4 footer-h" data-v-426a425b> RingCart </h3><p class="text-gray-600 mb-4" data-v-426a425b> Your one-stop destination for the latest smartphones and accessories at competitive prices. </p><div class="flex space-x-4" data-v-426a425b><a href="#" class="text-gray-600 hover:text-black" data-v-426a425b>`);
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
      _push(`</a><a href="#" class="text-gray-600 hover:text-black" data-v-426a425b>`);
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
      _push(`</a><a href="#" class="text-gray-600 hover:text-black" data-v-426a425b>`);
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
      _push(`</a><a href="#" class="text-gray-600 hover:text-black" data-v-426a425b>`);
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
      _push(`</a></div></div><div data-v-426a425b><h3 class="font-bold text-lg mb-4 footer-h" data-v-426a425b> Quick Links </h3><ul class="space-y-2" data-v-426a425b><li data-v-426a425b>`);
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
      _push(`</li><li data-v-426a425b>`);
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
      _push(`</li><li data-v-426a425b>`);
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
      _push(`</li><li data-v-426a425b>`);
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
      _push(`</li></ul></div><div data-v-426a425b><h3 class="font-bold text-lg mb-4 footer-h" data-v-426a425b> Categories </h3><ul class="space-y-2" data-v-426a425b><li data-v-426a425b>`);
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
      _push(`</li><li data-v-426a425b>`);
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
      _push(`</li><li data-v-426a425b>`);
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
      _push(`</li><li data-v-426a425b>`);
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
      _push(`</li><li data-v-426a425b>`);
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
      _push(`</li></ul></div><div data-v-426a425b><h3 class="font-bold text-lg mb-4 footer-h" data-v-426a425b> Contact Us </h3><ul class="space-y-3" data-v-426a425b><li class="flex items-start" data-v-426a425b>`);
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
      _push(`<span class="text-gray-600" data-v-426a425b> 123 Tech Street, Digital City, 10001 </span></li><li class="flex items-center" data-v-426a425b>`);
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
      _push(`<span class="text-gray-600" data-v-426a425b>+1 (555) 123-4567</span></li><li class="flex items-center" data-v-426a425b>`);
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
      _push(`<span class="text-gray-600" data-v-426a425b>support@ringcart.app</span></li></ul></div></div><div class="border-t border-gray-200 mt-12 pt-8" data-v-426a425b><div class="flex flex-col md:flex-row justify-between items-center" data-v-426a425b><p class="text-gray-600 text-sm" data-v-426a425b> \xA9 ${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())} RingCart. All rights reserved. </p><div class="flex space-x-4 mt-4 md:mt-0" data-v-426a425b>`);
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
const AppFooter = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-426a425b"]]);
const _sfc_main = {
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_container = ElContainer;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "app-layout" }, _attrs))} data-v-c91f7c2c>`);
      _push(ssrRenderComponent(_component_el_container, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(AppHeader), null, null, _parent2, _scopeId));
            _push2(`<div class="container-wrapper" data-v-c91f7c2c${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            _push2(`</div>`);
          } else {
            return [
              createVNode(unref(AppHeader)),
              createVNode("div", { class: "container-wrapper" }, [
                renderSlot(_ctx.$slots, "default", {}, void 0, true)
              ])
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(ssrRenderComponent(unref(AppFooter), null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c91f7c2c"]]);

export { _default as default };
//# sourceMappingURL=default-DAGMomti.mjs.map
