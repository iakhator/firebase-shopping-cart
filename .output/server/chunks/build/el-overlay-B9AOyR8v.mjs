import { defineComponent, createVNode, h, renderSlot, isRef, computed, watch, onScopeDispose } from 'vue';
import { NOOP } from '@vue/shared';
import { P as PatchFlags } from './aria-DC1XP1AM.mjs';
import { j as buildProps, p as hasClass, q as addClass, r as getStyle, n as definePropType } from './el-button-etDYgHTt.mjs';
import { h as useNamespace, y as throwError } from './server.mjs';
import { isClient } from '@vueuse/core';

const useSameTarget = (handleClick) => {
  if (!handleClick) {
    return { onClick: NOOP, onMousedown: NOOP, onMouseup: NOOP };
  }
  let mousedownTarget = false;
  let mouseupTarget = false;
  const onClick = (e) => {
    if (mousedownTarget && mouseupTarget) {
      handleClick(e);
    }
    mousedownTarget = mouseupTarget = false;
  };
  const onMousedown = (e) => {
    mousedownTarget = e.target === e.currentTarget;
  };
  const onMouseup = (e) => {
    mouseupTarget = e.target === e.currentTarget;
  };
  return { onClick, onMousedown, onMouseup };
};
const overlayProps = buildProps({
  mask: {
    type: Boolean,
    default: true
  },
  customMaskEvent: Boolean,
  overlayClass: {
    type: definePropType([
      String,
      Array,
      Object
    ])
  },
  zIndex: {
    type: definePropType([String, Number])
  }
});
const overlayEmits = {
  click: (evt) => evt instanceof MouseEvent
};
const BLOCK = "overlay";
var Overlay = defineComponent({
  name: "ElOverlay",
  props: overlayProps,
  emits: overlayEmits,
  setup(props, { slots, emit }) {
    const ns = useNamespace(BLOCK);
    const onMaskClick = (e) => {
      emit("click", e);
    };
    const { onClick, onMousedown, onMouseup } = useSameTarget(props.customMaskEvent ? void 0 : onMaskClick);
    return () => {
      return props.mask ? createVNode("div", {
        class: [ns.b(), props.overlayClass],
        style: {
          zIndex: props.zIndex
        },
        onClick,
        onMousedown,
        onMouseup
      }, [renderSlot(slots, "default")], PatchFlags.STYLE | PatchFlags.CLASS | PatchFlags.PROPS, ["onClick", "onMouseup", "onMousedown"]) : h("div", {
        class: props.overlayClass,
        style: {
          zIndex: props.zIndex,
          position: "fixed",
          top: "0px",
          right: "0px",
          bottom: "0px",
          left: "0px"
        }
      }, [renderSlot(slots, "default")]);
    };
  }
});
const ElOverlay = Overlay;
let scrollBarWidth;
const getScrollBarWidth = (namespace) => {
  var _a;
  if (!isClient)
    return 0;
  if (scrollBarWidth !== void 0)
    return scrollBarWidth;
  const outer = (void 0).createElement("div");
  outer.className = `${namespace}-scrollbar__wrap`;
  outer.style.visibility = "hidden";
  outer.style.width = "100px";
  outer.style.position = "absolute";
  outer.style.top = "-9999px";
  (void 0).body.appendChild(outer);
  const widthNoScroll = outer.offsetWidth;
  outer.style.overflow = "scroll";
  const inner = (void 0).createElement("div");
  inner.style.width = "100%";
  outer.appendChild(inner);
  const widthWithScroll = inner.offsetWidth;
  (_a = outer.parentNode) == null ? void 0 : _a.removeChild(outer);
  scrollBarWidth = widthNoScroll - widthWithScroll;
  return scrollBarWidth;
};
function scrollIntoView(container, selected) {
  if (!isClient)
    return;
  if (!selected) {
    container.scrollTop = 0;
    return;
  }
  const offsetParents = [];
  let pointer = selected.offsetParent;
  while (pointer !== null && container !== pointer && container.contains(pointer)) {
    offsetParents.push(pointer);
    pointer = pointer.offsetParent;
  }
  const top = selected.offsetTop + offsetParents.reduce((prev, curr) => prev + curr.offsetTop, 0);
  const bottom = top + selected.offsetHeight;
  const viewRectTop = container.scrollTop;
  const viewRectBottom = viewRectTop + container.clientHeight;
  if (top < viewRectTop) {
    container.scrollTop = top;
  } else if (bottom > viewRectBottom) {
    container.scrollTop = bottom - container.clientHeight;
  }
}
const useLockscreen = (trigger, options = {}) => {
  if (!isRef(trigger)) {
    throwError("[useLockscreen]", "You need to pass a ref param to this function");
  }
  const ns = options.ns || useNamespace("popup");
  const hiddenCls = computed(() => ns.bm("parent", "hidden"));
  if (!isClient || hasClass((void 0).body, hiddenCls.value)) {
    return;
  }
  let scrollBarWidth2 = 0;
  let withoutHiddenClass = false;
  const cleanup = () => {
    setTimeout(() => {
      return;
    }, 200);
  };
  watch(trigger, (val) => {
    if (!val) {
      cleanup();
      return;
    }
    withoutHiddenClass = !hasClass((void 0).body, hiddenCls.value);
    if (withoutHiddenClass) {
      (void 0).body.style.width;
      addClass((void 0).body, hiddenCls.value);
    }
    scrollBarWidth2 = getScrollBarWidth(ns.namespace.value);
    const bodyHasOverflow = (void 0).documentElement.clientHeight < (void 0).body.scrollHeight;
    const bodyOverflowY = getStyle((void 0).body, "overflowY");
    if (scrollBarWidth2 > 0 && (bodyHasOverflow || bodyOverflowY === "scroll") && withoutHiddenClass) {
      (void 0).body.style.width = `calc(100% - ${scrollBarWidth2}px)`;
    }
  });
  onScopeDispose(() => cleanup());
};

export { ElOverlay as E, useSameTarget as a, scrollIntoView as s, useLockscreen as u };
//# sourceMappingURL=el-overlay-B9AOyR8v.mjs.map
