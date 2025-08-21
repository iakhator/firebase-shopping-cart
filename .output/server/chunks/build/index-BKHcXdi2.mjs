import { h, unref } from 'vue';
import { tryOnScopeDispose } from '@vueuse/core';
import { j as buildProps } from './el-button-etDYgHTt.mjs';
import { p as isNumber } from './server.mjs';

/**
 * @license lucide-vue-next v0.534.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const toCamelCase = (string) => string.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (match, p1, p2) => p2 ? p2.toUpperCase() : p1.toLowerCase()
);
const toPascalCase = (string) => {
  const camelCase = toCamelCase(string);
  return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};
const mergeClasses = (...classes) => classes.filter((className, index, array) => {
  return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
}).join(" ").trim();
/**
 * @license lucide-vue-next v0.534.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": 2,
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
};
/**
 * @license lucide-vue-next v0.534.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Icon = ({ size, strokeWidth = 2, absoluteStrokeWidth, color, iconNode, name, class: classes, ...props }, { slots }) => {
  return h(
    "svg",
    {
      ...defaultAttributes,
      width: size || defaultAttributes.width,
      height: size || defaultAttributes.height,
      stroke: color || defaultAttributes.stroke,
      "stroke-width": absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
      class: mergeClasses(
        "lucide",
        ...name ? [`lucide-${toKebabCase(toPascalCase(name))}-icon`, `lucide-${toKebabCase(name)}`] : ["lucide-icon"]
      ),
      ...props
    },
    [...iconNode.map((child) => h(...child)), ...slots.default ? [slots.default()] : []]
  );
};
/**
 * @license lucide-vue-next v0.534.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const createLucideIcon = (iconName, iconNode) => (props, { slots }) => h(
  Icon,
  {
    ...props,
    iconNode,
    name: iconName
  },
  slots
);
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

export { useDelayedToggle as a, createLucideIcon as c, useDelayedToggleProps as u };
//# sourceMappingURL=index-BKHcXdi2.mjs.map
