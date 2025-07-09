import { isVNode } from 'vue';
import { isArray } from '@vue/shared';

const EVENT_CODE = {
  tab: "Tab",
  enter: "Enter",
  space: "Space",
  left: "ArrowLeft",
  up: "ArrowUp",
  right: "ArrowRight",
  down: "ArrowDown",
  esc: "Escape",
  delete: "Delete",
  backspace: "Backspace",
  numpadEnter: "NumpadEnter"
};
const flattedChildren = (children) => {
  const vNodes = isArray(children) ? children : [children];
  const result = [];
  vNodes.forEach((child) => {
    var _a;
    if (isArray(child)) {
      result.push(...flattedChildren(child));
    } else if (isVNode(child) && ((_a = child.component) == null ? void 0 : _a.subTree)) {
      result.push(child, ...flattedChildren(child.component.subTree));
    } else if (isVNode(child) && isArray(child.children)) {
      result.push(...flattedChildren(child.children));
    } else if (isVNode(child) && child.shapeFlag === 2) {
      result.push(...flattedChildren(child.type()));
    } else {
      result.push(child);
    }
  });
  return result;
};

export { EVENT_CODE as E, flattedChildren as f };
//# sourceMappingURL=vnode-tcWefJcs.mjs.map
