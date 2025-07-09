import { ref, mergeProps, withCtx, unref, createVNode, createTextVNode, toDisplayString, createBlock, openBlock, Fragment, renderList, defineComponent, computed, createElementBlock, normalizeClass, withDirectives, createElementVNode, withModifiers, isRef, vModelRadio, normalizeStyle, renderSlot, reactive, watch, createCommentVNode, withKeys, createSlots, resolveDynamicComponent, vShow, inject, provide, markRaw, toRefs, shallowReactive, Transition, useSSRContext, nextTick, isVNode, render } from 'vue';
import { w as withInstall, E as ElIcon, y as van_default, c as withNoopInstall, d as ElButton, s as shopping_cart_default, z as star_default, _ as _export_sfc, A as withInstallFunction, b as buildProps, e as useLocale, o as useFormItem, j as useFormSize, n as useFormDisabled, B as arrow_down_default, C as minus_default, D as arrow_up_default, F as plus_default, a as useDeprecated, t as useSizeProp, G as arrow_right_default, i as iconPropType, f as definePropType, H as star_filled_default, g as formContextKey, h as formItemContextKey, p as useFormItemInputId, I as useEmptyValuesProps, J as provideGlobalConfig, K as useGlobalComponentSettings, T as TypeComponentsMap, L as TypeComponents, M as hasClass } from './el-button-V0v0dsgs.mjs';
import { m as mutable } from './typescript-D6L75muK.mjs';
import { u as useAriaProps } from './aria-BNfy9QVD.mjs';
import { U as UPDATE_MODEL_EVENT, I as INPUT_EVENT, C as CHANGE_EVENT } from './event-BZTOGHfp.mjs';
import { a as useNamespace, p as isNumber, s as isUndefined, A as isPropAbsent, e as throwError, d as debugWarn, B as useIdInjection, i as isBoolean, f as useId, C as isElement } from './server.mjs';
import { isString, isArray, isFunction, isPromise, isObject } from '@vue/shared';
import { E as EVENT_CODE } from './vnode-tcWefJcs.mjs';
import { a as ElTag, E as ElCard } from './index-CNxtaOAI.mjs';
import { isNil, castArray } from 'lodash-unified';
import { E as ElInput } from './index-CGTgrJf6.mjs';
import { E as ElTabs, a as ElTabPane } from './el-tab-pane-4H9kkw0S.mjs';
import { E as ElCollapseTransition, a as ElBadge } from './index-Cgfaz2zX.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderStyle } from 'vue/server-renderer';
import { u as useCurrency } from './useCurrency-jRJRFhrU.mjs';
import { isClient, useEventListener, useResizeObserver, useTimeoutFn } from '@vueuse/core';
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
import 'vue-sonner';

const rateProps = buildProps({
  modelValue: {
    type: Number,
    default: 0
  },
  id: {
    type: String,
    default: void 0
  },
  lowThreshold: {
    type: Number,
    default: 2
  },
  highThreshold: {
    type: Number,
    default: 4
  },
  max: {
    type: Number,
    default: 5
  },
  colors: {
    type: definePropType([Array, Object]),
    default: () => mutable(["", "", ""])
  },
  voidColor: {
    type: String,
    default: ""
  },
  disabledVoidColor: {
    type: String,
    default: ""
  },
  icons: {
    type: definePropType([Array, Object]),
    default: () => [star_filled_default, star_filled_default, star_filled_default]
  },
  voidIcon: {
    type: iconPropType,
    default: () => star_default
  },
  disabledVoidIcon: {
    type: iconPropType,
    default: () => star_filled_default
  },
  disabled: Boolean,
  allowHalf: Boolean,
  showText: Boolean,
  showScore: Boolean,
  textColor: {
    type: String,
    default: ""
  },
  texts: {
    type: definePropType(Array),
    default: () => mutable([
      "Extremely bad",
      "Disappointed",
      "Fair",
      "Satisfied",
      "Surprise"
    ])
  },
  scoreTemplate: {
    type: String,
    default: "{value}"
  },
  size: useSizeProp,
  clearable: Boolean,
  ...useAriaProps(["ariaLabel"])
});
const rateEmits = {
  [CHANGE_EVENT]: (value) => isNumber(value),
  [UPDATE_MODEL_EVENT]: (value) => isNumber(value)
};
const __default__$7 = defineComponent({
  name: "ElRate"
});
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  ...__default__$7,
  props: rateProps,
  emits: rateEmits,
  setup(__props, { expose, emit }) {
    const props = __props;
    function getValueFromMap(value, map) {
      const isExcludedObject = (val) => isObject(val);
      const matchedKeys = Object.keys(map).map((key) => +key).filter((key) => {
        const val = map[key];
        const excluded = isExcludedObject(val) ? val.excluded : false;
        return excluded ? value < key : value <= key;
      }).sort((a, b) => a - b);
      const matchedValue = map[matchedKeys[0]];
      return isExcludedObject(matchedValue) && matchedValue.value || matchedValue;
    }
    const formContext = inject(formContextKey, void 0);
    const formItemContext = inject(formItemContextKey, void 0);
    const rateSize = useFormSize();
    const ns = useNamespace("rate");
    const { inputId, isLabeledByFormItem } = useFormItemInputId(props, {
      formItemContext
    });
    const currentValue = ref(props.modelValue);
    const hoverIndex = ref(-1);
    const pointerAtLeftHalf = ref(true);
    const rateClasses = computed(() => [ns.b(), ns.m(rateSize.value)]);
    const rateDisabled = computed(() => props.disabled || (formContext == null ? void 0 : formContext.disabled));
    const rateStyles = computed(() => {
      return ns.cssVarBlock({
        "void-color": props.voidColor,
        "disabled-void-color": props.disabledVoidColor,
        "fill-color": activeColor.value
      });
    });
    const text = computed(() => {
      let result = "";
      if (props.showScore) {
        result = props.scoreTemplate.replace(/\{\s*value\s*\}/, rateDisabled.value ? `${props.modelValue}` : `${currentValue.value}`);
      } else if (props.showText) {
        result = props.texts[Math.ceil(currentValue.value) - 1];
      }
      return result;
    });
    const valueDecimal = computed(() => props.modelValue * 100 - Math.floor(props.modelValue) * 100);
    const colorMap = computed(() => isArray(props.colors) ? {
      [props.lowThreshold]: props.colors[0],
      [props.highThreshold]: { value: props.colors[1], excluded: true },
      [props.max]: props.colors[2]
    } : props.colors);
    const activeColor = computed(() => {
      const color = getValueFromMap(currentValue.value, colorMap.value);
      return isObject(color) ? "" : color;
    });
    const decimalStyle = computed(() => {
      let width = "";
      if (rateDisabled.value) {
        width = `${valueDecimal.value}%`;
      } else if (props.allowHalf) {
        width = "50%";
      }
      return {
        color: activeColor.value,
        width
      };
    });
    const componentMap = computed(() => {
      let icons = isArray(props.icons) ? [...props.icons] : { ...props.icons };
      icons = markRaw(icons);
      return isArray(icons) ? {
        [props.lowThreshold]: icons[0],
        [props.highThreshold]: {
          value: icons[1],
          excluded: true
        },
        [props.max]: icons[2]
      } : icons;
    });
    const decimalIconComponent = computed(() => getValueFromMap(props.modelValue, componentMap.value));
    const voidComponent = computed(() => rateDisabled.value ? isString(props.disabledVoidIcon) ? props.disabledVoidIcon : markRaw(props.disabledVoidIcon) : isString(props.voidIcon) ? props.voidIcon : markRaw(props.voidIcon));
    const activeComponent = computed(() => getValueFromMap(currentValue.value, componentMap.value));
    function showDecimalIcon(item) {
      const showWhenDisabled = rateDisabled.value && valueDecimal.value > 0 && item - 1 < props.modelValue && item > props.modelValue;
      const showWhenAllowHalf = props.allowHalf && pointerAtLeftHalf.value && item - 0.5 <= currentValue.value && item > currentValue.value;
      return showWhenDisabled || showWhenAllowHalf;
    }
    function emitValue(value) {
      if (props.clearable && value === props.modelValue) {
        value = 0;
      }
      emit(UPDATE_MODEL_EVENT, value);
      if (props.modelValue !== value) {
        emit(CHANGE_EVENT, value);
      }
    }
    function selectValue(value) {
      if (rateDisabled.value) {
        return;
      }
      if (props.allowHalf && pointerAtLeftHalf.value) {
        emitValue(currentValue.value);
      } else {
        emitValue(value);
      }
    }
    function handleKey(e) {
      if (rateDisabled.value) {
        return;
      }
      let _currentValue = currentValue.value;
      const code = e.code;
      if (code === EVENT_CODE.up || code === EVENT_CODE.right) {
        if (props.allowHalf) {
          _currentValue += 0.5;
        } else {
          _currentValue += 1;
        }
        e.stopPropagation();
        e.preventDefault();
      } else if (code === EVENT_CODE.left || code === EVENT_CODE.down) {
        if (props.allowHalf) {
          _currentValue -= 0.5;
        } else {
          _currentValue -= 1;
        }
        e.stopPropagation();
        e.preventDefault();
      }
      _currentValue = _currentValue < 0 ? 0 : _currentValue;
      _currentValue = _currentValue > props.max ? props.max : _currentValue;
      emit(UPDATE_MODEL_EVENT, _currentValue);
      emit(CHANGE_EVENT, _currentValue);
      return _currentValue;
    }
    function setCurrentValue(value, event) {
      if (rateDisabled.value) {
        return;
      }
      if (props.allowHalf && event) {
        let target = event.target;
        if (hasClass(target, ns.e("item"))) {
          target = target.querySelector(`.${ns.e("icon")}`);
        }
        if (target.clientWidth === 0 || hasClass(target, ns.e("decimal"))) {
          target = target.parentNode;
        }
        pointerAtLeftHalf.value = event.offsetX * 2 <= target.clientWidth;
        currentValue.value = pointerAtLeftHalf.value ? value - 0.5 : value;
      } else {
        currentValue.value = value;
      }
      hoverIndex.value = value;
    }
    function resetCurrentValue() {
      if (rateDisabled.value) {
        return;
      }
      if (props.allowHalf) {
        pointerAtLeftHalf.value = props.modelValue !== Math.floor(props.modelValue);
      }
      currentValue.value = props.modelValue;
      hoverIndex.value = -1;
    }
    watch(() => props.modelValue, (val) => {
      currentValue.value = val;
      pointerAtLeftHalf.value = props.modelValue !== Math.floor(props.modelValue);
    });
    if (!props.modelValue) {
      emit(UPDATE_MODEL_EVENT, 0);
    }
    expose({
      setCurrentValue,
      resetCurrentValue
    });
    return (_ctx, _cache) => {
      var _a;
      return openBlock(), createElementBlock("div", {
        id: unref(inputId),
        class: normalizeClass([unref(rateClasses), unref(ns).is("disabled", unref(rateDisabled))]),
        role: "slider",
        "aria-label": !unref(isLabeledByFormItem) ? _ctx.ariaLabel || "rating" : void 0,
        "aria-labelledby": unref(isLabeledByFormItem) ? (_a = unref(formItemContext)) == null ? void 0 : _a.labelId : void 0,
        "aria-valuenow": currentValue.value,
        "aria-valuetext": unref(text) || void 0,
        "aria-valuemin": "0",
        "aria-valuemax": _ctx.max,
        tabindex: "0",
        style: normalizeStyle(unref(rateStyles)),
        onKeydown: handleKey
      }, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.max, (item, key) => {
          return openBlock(), createElementBlock("span", {
            key,
            class: normalizeClass(unref(ns).e("item")),
            onMousemove: ($event) => setCurrentValue(item, $event),
            onMouseleave: resetCurrentValue,
            onClick: ($event) => selectValue(item)
          }, [
            createVNode(unref(ElIcon), {
              class: normalizeClass([
                unref(ns).e("icon"),
                { hover: hoverIndex.value === item },
                unref(ns).is("active", item <= currentValue.value)
              ])
            }, {
              default: withCtx(() => [
                !showDecimalIcon(item) ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                  withDirectives((openBlock(), createBlock(resolveDynamicComponent(unref(activeComponent)), null, null, 512)), [
                    [vShow, item <= currentValue.value]
                  ]),
                  withDirectives((openBlock(), createBlock(resolveDynamicComponent(unref(voidComponent)), null, null, 512)), [
                    [vShow, !(item <= currentValue.value)]
                  ])
                ], 64)) : createCommentVNode("v-if", true),
                showDecimalIcon(item) ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                  (openBlock(), createBlock(resolveDynamicComponent(unref(voidComponent)), {
                    class: normalizeClass([unref(ns).em("decimal", "box")])
                  }, null, 8, ["class"])),
                  createVNode(unref(ElIcon), {
                    style: normalizeStyle(unref(decimalStyle)),
                    class: normalizeClass([unref(ns).e("icon"), unref(ns).e("decimal")])
                  }, {
                    default: withCtx(() => [
                      (openBlock(), createBlock(resolveDynamicComponent(unref(decimalIconComponent))))
                    ]),
                    _: 1
                  }, 8, ["style", "class"])
                ], 64)) : createCommentVNode("v-if", true)
              ]),
              _: 2
            }, 1032, ["class"])
          ], 42, ["onMousemove", "onClick"]);
        }), 128)),
        _ctx.showText || _ctx.showScore ? (openBlock(), createElementBlock("span", {
          key: 0,
          class: normalizeClass(unref(ns).e("text")),
          style: normalizeStyle({ color: _ctx.textColor })
        }, toDisplayString(unref(text)), 7)) : createCommentVNode("v-if", true)
      ], 46, ["id", "aria-label", "aria-labelledby", "aria-valuenow", "aria-valuetext", "aria-valuemax"]);
    };
  }
});
var Rate = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__file", "rate.vue"]]);
const ElRate = withInstall(Rate);
const radioPropsBase = buildProps({
  modelValue: {
    type: [String, Number, Boolean],
    default: void 0
  },
  size: useSizeProp,
  disabled: Boolean,
  label: {
    type: [String, Number, Boolean],
    default: void 0
  },
  value: {
    type: [String, Number, Boolean],
    default: void 0
  },
  name: {
    type: String,
    default: void 0
  }
});
const radioProps = buildProps({
  ...radioPropsBase,
  border: Boolean
});
const radioEmits = {
  [UPDATE_MODEL_EVENT]: (val) => isString(val) || isNumber(val) || isBoolean(val),
  [CHANGE_EVENT]: (val) => isString(val) || isNumber(val) || isBoolean(val)
};
const radioGroupKey = Symbol("radioGroupKey");
const useRadio = (props, emit) => {
  const radioRef = ref();
  const radioGroup = inject(radioGroupKey, void 0);
  const isGroup = computed(() => !!radioGroup);
  const actualValue = computed(() => {
    if (!isPropAbsent(props.value)) {
      return props.value;
    }
    return props.label;
  });
  const modelValue = computed({
    get() {
      return isGroup.value ? radioGroup.modelValue : props.modelValue;
    },
    set(val) {
      if (isGroup.value) {
        radioGroup.changeEvent(val);
      } else {
        emit && emit(UPDATE_MODEL_EVENT, val);
      }
      radioRef.value.checked = props.modelValue === actualValue.value;
    }
  });
  const size = useFormSize(computed(() => radioGroup == null ? void 0 : radioGroup.size));
  const disabled = useFormDisabled(computed(() => radioGroup == null ? void 0 : radioGroup.disabled));
  const focus = ref(false);
  const tabIndex = computed(() => {
    return disabled.value || isGroup.value && modelValue.value !== actualValue.value ? -1 : 0;
  });
  useDeprecated({
    from: "label act as value",
    replacement: "value",
    version: "3.0.0",
    scope: "el-radio",
    ref: "https://element-plus.org/en-US/component/radio.html"
  }, computed(() => isGroup.value && isPropAbsent(props.value)));
  return {
    radioRef,
    isGroup,
    radioGroup,
    focus,
    size,
    disabled,
    tabIndex,
    modelValue,
    actualValue
  };
};
const __default__$6 = defineComponent({
  name: "ElRadio"
});
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  ...__default__$6,
  props: radioProps,
  emits: radioEmits,
  setup(__props, { emit }) {
    const props = __props;
    const ns = useNamespace("radio");
    const { radioRef, radioGroup, focus, size, disabled, modelValue, actualValue } = useRadio(props, emit);
    function handleChange() {
      nextTick(() => emit(CHANGE_EVENT, modelValue.value));
    }
    return (_ctx, _cache) => {
      var _a;
      return openBlock(), createElementBlock("label", {
        class: normalizeClass([
          unref(ns).b(),
          unref(ns).is("disabled", unref(disabled)),
          unref(ns).is("focus", unref(focus)),
          unref(ns).is("bordered", _ctx.border),
          unref(ns).is("checked", unref(modelValue) === unref(actualValue)),
          unref(ns).m(unref(size))
        ])
      }, [
        createElementVNode("span", {
          class: normalizeClass([
            unref(ns).e("input"),
            unref(ns).is("disabled", unref(disabled)),
            unref(ns).is("checked", unref(modelValue) === unref(actualValue))
          ])
        }, [
          withDirectives(createElementVNode("input", {
            ref_key: "radioRef",
            ref: radioRef,
            "onUpdate:modelValue": ($event) => isRef(modelValue) ? modelValue.value = $event : null,
            class: normalizeClass(unref(ns).e("original")),
            value: unref(actualValue),
            name: _ctx.name || ((_a = unref(radioGroup)) == null ? void 0 : _a.name),
            disabled: unref(disabled),
            checked: unref(modelValue) === unref(actualValue),
            type: "radio",
            onFocus: ($event) => focus.value = true,
            onBlur: ($event) => focus.value = false,
            onChange: handleChange,
            onClick: withModifiers(() => {
            }, ["stop"])
          }, null, 42, ["onUpdate:modelValue", "value", "name", "disabled", "checked", "onFocus", "onBlur", "onClick"]), [
            [vModelRadio, unref(modelValue)]
          ]),
          createElementVNode("span", {
            class: normalizeClass(unref(ns).e("inner"))
          }, null, 2)
        ], 2),
        createElementVNode("span", {
          class: normalizeClass(unref(ns).e("label")),
          onKeydown: withModifiers(() => {
          }, ["stop"])
        }, [
          renderSlot(_ctx.$slots, "default", {}, () => [
            createTextVNode(toDisplayString(_ctx.label), 1)
          ])
        ], 42, ["onKeydown"])
      ], 2);
    };
  }
});
var Radio = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__file", "radio.vue"]]);
const radioButtonProps = buildProps({
  ...radioPropsBase
});
const __default__$5 = defineComponent({
  name: "ElRadioButton"
});
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  ...__default__$5,
  props: radioButtonProps,
  setup(__props) {
    const props = __props;
    const ns = useNamespace("radio");
    const { radioRef, focus, size, disabled, modelValue, radioGroup, actualValue } = useRadio(props);
    const activeStyle = computed(() => {
      return {
        backgroundColor: (radioGroup == null ? void 0 : radioGroup.fill) || "",
        borderColor: (radioGroup == null ? void 0 : radioGroup.fill) || "",
        boxShadow: (radioGroup == null ? void 0 : radioGroup.fill) ? `-1px 0 0 0 ${radioGroup.fill}` : "",
        color: (radioGroup == null ? void 0 : radioGroup.textColor) || ""
      };
    });
    return (_ctx, _cache) => {
      var _a;
      return openBlock(), createElementBlock("label", {
        class: normalizeClass([
          unref(ns).b("button"),
          unref(ns).is("active", unref(modelValue) === unref(actualValue)),
          unref(ns).is("disabled", unref(disabled)),
          unref(ns).is("focus", unref(focus)),
          unref(ns).bm("button", unref(size))
        ])
      }, [
        withDirectives(createElementVNode("input", {
          ref_key: "radioRef",
          ref: radioRef,
          "onUpdate:modelValue": ($event) => isRef(modelValue) ? modelValue.value = $event : null,
          class: normalizeClass(unref(ns).be("button", "original-radio")),
          value: unref(actualValue),
          type: "radio",
          name: _ctx.name || ((_a = unref(radioGroup)) == null ? void 0 : _a.name),
          disabled: unref(disabled),
          onFocus: ($event) => focus.value = true,
          onBlur: ($event) => focus.value = false,
          onClick: withModifiers(() => {
          }, ["stop"])
        }, null, 42, ["onUpdate:modelValue", "value", "name", "disabled", "onFocus", "onBlur", "onClick"]), [
          [vModelRadio, unref(modelValue)]
        ]),
        createElementVNode("span", {
          class: normalizeClass(unref(ns).be("button", "inner")),
          style: normalizeStyle(unref(modelValue) === unref(actualValue) ? unref(activeStyle) : {}),
          onKeydown: withModifiers(() => {
          }, ["stop"])
        }, [
          renderSlot(_ctx.$slots, "default", {}, () => [
            createTextVNode(toDisplayString(_ctx.label), 1)
          ])
        ], 46, ["onKeydown"])
      ], 2);
    };
  }
});
var RadioButton = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__file", "radio-button.vue"]]);
const radioGroupProps = buildProps({
  id: {
    type: String,
    default: void 0
  },
  size: useSizeProp,
  disabled: Boolean,
  modelValue: {
    type: [String, Number, Boolean],
    default: void 0
  },
  fill: {
    type: String,
    default: ""
  },
  textColor: {
    type: String,
    default: ""
  },
  name: {
    type: String,
    default: void 0
  },
  validateEvent: {
    type: Boolean,
    default: true
  },
  ...useAriaProps(["ariaLabel"])
});
const radioGroupEmits = radioEmits;
const __default__$4 = defineComponent({
  name: "ElRadioGroup"
});
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  ...__default__$4,
  props: radioGroupProps,
  emits: radioGroupEmits,
  setup(__props, { emit }) {
    const props = __props;
    const ns = useNamespace("radio");
    const radioId = useId();
    const radioGroupRef = ref();
    const { formItem } = useFormItem();
    const { inputId: groupId, isLabeledByFormItem } = useFormItemInputId(props, {
      formItemContext: formItem
    });
    const changeEvent = (value) => {
      emit(UPDATE_MODEL_EVENT, value);
      nextTick(() => emit(CHANGE_EVENT, value));
    };
    const name = computed(() => {
      return props.name || radioId.value;
    });
    provide(radioGroupKey, reactive({
      ...toRefs(props),
      changeEvent,
      name
    }));
    watch(() => props.modelValue, () => {
      if (props.validateEvent) {
        formItem == null ? void 0 : formItem.validate("change").catch((err) => debugWarn());
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        id: unref(groupId),
        ref_key: "radioGroupRef",
        ref: radioGroupRef,
        class: normalizeClass(unref(ns).b("group")),
        role: "radiogroup",
        "aria-label": !unref(isLabeledByFormItem) ? _ctx.ariaLabel || "radio-group" : void 0,
        "aria-labelledby": unref(isLabeledByFormItem) ? unref(formItem).labelId : void 0
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 10, ["id", "aria-label", "aria-labelledby"]);
    };
  }
});
var RadioGroup = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__file", "radio-group.vue"]]);
withInstall(Radio, {
  RadioButton,
  RadioGroup
});
const ElRadioGroup = withNoopInstall(RadioGroup);
const ElRadioButton = withNoopInstall(RadioButton);
const inputNumberProps = buildProps({
  id: {
    type: String,
    default: void 0
  },
  step: {
    type: Number,
    default: 1
  },
  stepStrictly: Boolean,
  max: {
    type: Number,
    default: Number.POSITIVE_INFINITY
  },
  min: {
    type: Number,
    default: Number.NEGATIVE_INFINITY
  },
  modelValue: {
    type: [Number, null]
  },
  readonly: Boolean,
  disabled: Boolean,
  size: useSizeProp,
  controls: {
    type: Boolean,
    default: true
  },
  controlsPosition: {
    type: String,
    default: "",
    values: ["", "right"]
  },
  valueOnClear: {
    type: [String, Number, null],
    validator: (val) => val === null || isNumber(val) || ["min", "max"].includes(val),
    default: null
  },
  name: String,
  placeholder: String,
  precision: {
    type: Number,
    validator: (val) => val >= 0 && val === Number.parseInt(`${val}`, 10)
  },
  validateEvent: {
    type: Boolean,
    default: true
  },
  ...useAriaProps(["ariaLabel"])
});
const inputNumberEmits = {
  [CHANGE_EVENT]: (cur, prev) => prev !== cur,
  blur: (e) => e instanceof FocusEvent,
  focus: (e) => e instanceof FocusEvent,
  [INPUT_EVENT]: (val) => isNumber(val) || isNil(val),
  [UPDATE_MODEL_EVENT]: (val) => isNumber(val) || isNil(val)
};
const REPEAT_INTERVAL = 100;
const REPEAT_DELAY = 600;
const vRepeatClick = {
  beforeMount(el, binding) {
    const value = binding.value;
    const { interval = REPEAT_INTERVAL, delay = REPEAT_DELAY } = isFunction(value) ? {} : value;
    let intervalId;
    let delayId;
    const handler = () => isFunction(value) ? value() : value.handler();
    const clear = () => {
      if (delayId) {
        clearTimeout(delayId);
        delayId = void 0;
      }
      if (intervalId) {
        clearInterval(intervalId);
        intervalId = void 0;
      }
    };
    el.addEventListener("mousedown", (evt) => {
      if (evt.button !== 0)
        return;
      clear();
      handler();
      (void 0).addEventListener("mouseup", () => clear(), {
        once: true
      });
      delayId = setTimeout(() => {
        intervalId = setInterval(() => {
          handler();
        }, interval);
      }, delay);
    });
  }
};
const __default__$3 = defineComponent({
  name: "ElInputNumber"
});
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  ...__default__$3,
  props: inputNumberProps,
  emits: inputNumberEmits,
  setup(__props, { expose, emit }) {
    const props = __props;
    const { t } = useLocale();
    const ns = useNamespace("input-number");
    const input = ref();
    const data = reactive({
      currentValue: props.modelValue,
      userInput: null
    });
    const { formItem } = useFormItem();
    const minDisabled = computed(() => isNumber(props.modelValue) && props.modelValue <= props.min);
    const maxDisabled = computed(() => isNumber(props.modelValue) && props.modelValue >= props.max);
    const numPrecision = computed(() => {
      const stepPrecision = getPrecision(props.step);
      if (!isUndefined(props.precision)) {
        if (stepPrecision > props.precision) ;
        return props.precision;
      } else {
        return Math.max(getPrecision(props.modelValue), stepPrecision);
      }
    });
    const controlsAtRight = computed(() => {
      return props.controls && props.controlsPosition === "right";
    });
    const inputNumberSize = useFormSize();
    const inputNumberDisabled = useFormDisabled();
    const displayValue = computed(() => {
      if (data.userInput !== null) {
        return data.userInput;
      }
      let currentValue = data.currentValue;
      if (isNil(currentValue))
        return "";
      if (isNumber(currentValue)) {
        if (Number.isNaN(currentValue))
          return "";
        if (!isUndefined(props.precision)) {
          currentValue = currentValue.toFixed(props.precision);
        }
      }
      return currentValue;
    });
    const toPrecision = (num, pre) => {
      if (isUndefined(pre))
        pre = numPrecision.value;
      if (pre === 0)
        return Math.round(num);
      let snum = String(num);
      const pointPos = snum.indexOf(".");
      if (pointPos === -1)
        return num;
      const nums = snum.replace(".", "").split("");
      const datum = nums[pointPos + pre];
      if (!datum)
        return num;
      const length = snum.length;
      if (snum.charAt(length - 1) === "5") {
        snum = `${snum.slice(0, Math.max(0, length - 1))}6`;
      }
      return Number.parseFloat(Number(snum).toFixed(pre));
    };
    const getPrecision = (value) => {
      if (isNil(value))
        return 0;
      const valueString = value.toString();
      const dotPosition = valueString.indexOf(".");
      let precision = 0;
      if (dotPosition !== -1) {
        precision = valueString.length - dotPosition - 1;
      }
      return precision;
    };
    const ensurePrecision = (val, coefficient = 1) => {
      if (!isNumber(val))
        return data.currentValue;
      return toPrecision(val + props.step * coefficient);
    };
    const increase = () => {
      if (props.readonly || inputNumberDisabled.value || maxDisabled.value)
        return;
      const value = Number(displayValue.value) || 0;
      const newVal = ensurePrecision(value);
      setCurrentValue(newVal);
      emit(INPUT_EVENT, data.currentValue);
      setCurrentValueToModelValue();
    };
    const decrease = () => {
      if (props.readonly || inputNumberDisabled.value || minDisabled.value)
        return;
      const value = Number(displayValue.value) || 0;
      const newVal = ensurePrecision(value, -1);
      setCurrentValue(newVal);
      emit(INPUT_EVENT, data.currentValue);
      setCurrentValueToModelValue();
    };
    const verifyValue = (value, update) => {
      const { max, min, step, precision, stepStrictly, valueOnClear } = props;
      if (max < min) {
        throwError("InputNumber", "min should not be greater than max.");
      }
      let newVal = Number(value);
      if (isNil(value) || Number.isNaN(newVal)) {
        return null;
      }
      if (value === "") {
        if (valueOnClear === null) {
          return null;
        }
        newVal = isString(valueOnClear) ? { min, max }[valueOnClear] : valueOnClear;
      }
      if (stepStrictly) {
        newVal = toPrecision(Math.round(newVal / step) * step, precision);
        if (newVal !== value) {
          update && emit(UPDATE_MODEL_EVENT, newVal);
        }
      }
      if (!isUndefined(precision)) {
        newVal = toPrecision(newVal, precision);
      }
      if (newVal > max || newVal < min) {
        newVal = newVal > max ? max : min;
        update && emit(UPDATE_MODEL_EVENT, newVal);
      }
      return newVal;
    };
    const setCurrentValue = (value, emitChange = true) => {
      var _a;
      const oldVal = data.currentValue;
      const newVal = verifyValue(value);
      if (!emitChange) {
        emit(UPDATE_MODEL_EVENT, newVal);
        return;
      }
      if (oldVal === newVal && value)
        return;
      data.userInput = null;
      emit(UPDATE_MODEL_EVENT, newVal);
      if (oldVal !== newVal) {
        emit(CHANGE_EVENT, newVal, oldVal);
      }
      if (props.validateEvent) {
        (_a = formItem == null ? void 0 : formItem.validate) == null ? void 0 : _a.call(formItem, "change").catch((err) => debugWarn());
      }
      data.currentValue = newVal;
    };
    const handleInput = (value) => {
      data.userInput = value;
      const newVal = value === "" ? null : Number(value);
      emit(INPUT_EVENT, newVal);
      setCurrentValue(newVal, false);
    };
    const handleInputChange = (value) => {
      const newVal = value !== "" ? Number(value) : "";
      if (isNumber(newVal) && !Number.isNaN(newVal) || value === "") {
        setCurrentValue(newVal);
      }
      setCurrentValueToModelValue();
      data.userInput = null;
    };
    const focus = () => {
      var _a, _b;
      (_b = (_a = input.value) == null ? void 0 : _a.focus) == null ? void 0 : _b.call(_a);
    };
    const blur = () => {
      var _a, _b;
      (_b = (_a = input.value) == null ? void 0 : _a.blur) == null ? void 0 : _b.call(_a);
    };
    const handleFocus = (event) => {
      emit("focus", event);
    };
    const handleBlur = (event) => {
      var _a, _b;
      data.userInput = null;
      if (data.currentValue === null && ((_a = input.value) == null ? void 0 : _a.input)) {
        input.value.input.value = "";
      }
      emit("blur", event);
      if (props.validateEvent) {
        (_b = formItem == null ? void 0 : formItem.validate) == null ? void 0 : _b.call(formItem, "blur").catch((err) => debugWarn());
      }
    };
    const setCurrentValueToModelValue = () => {
      if (data.currentValue !== props.modelValue) {
        data.currentValue = props.modelValue;
      }
    };
    watch(() => props.modelValue, (value, oldValue) => {
      const newValue = verifyValue(value, true);
      if (data.userInput === null && newValue !== oldValue) {
        data.currentValue = newValue;
      }
    }, { immediate: true });
    expose({
      focus,
      blur
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([
          unref(ns).b(),
          unref(ns).m(unref(inputNumberSize)),
          unref(ns).is("disabled", unref(inputNumberDisabled)),
          unref(ns).is("without-controls", !_ctx.controls),
          unref(ns).is("controls-right", unref(controlsAtRight))
        ]),
        onDragstart: withModifiers(() => {
        }, ["prevent"])
      }, [
        _ctx.controls ? withDirectives((openBlock(), createElementBlock("span", {
          key: 0,
          role: "button",
          "aria-label": unref(t)("el.inputNumber.decrease"),
          class: normalizeClass([unref(ns).e("decrease"), unref(ns).is("disabled", unref(minDisabled))]),
          onKeydown: withKeys(decrease, ["enter"])
        }, [
          renderSlot(_ctx.$slots, "decrease-icon", {}, () => [
            createVNode(unref(ElIcon), null, {
              default: withCtx(() => [
                unref(controlsAtRight) ? (openBlock(), createBlock(unref(arrow_down_default), { key: 0 })) : (openBlock(), createBlock(unref(minus_default), { key: 1 }))
              ]),
              _: 1
            })
          ])
        ], 42, ["aria-label", "onKeydown"])), [
          [unref(vRepeatClick), decrease]
        ]) : createCommentVNode("v-if", true),
        _ctx.controls ? withDirectives((openBlock(), createElementBlock("span", {
          key: 1,
          role: "button",
          "aria-label": unref(t)("el.inputNumber.increase"),
          class: normalizeClass([unref(ns).e("increase"), unref(ns).is("disabled", unref(maxDisabled))]),
          onKeydown: withKeys(increase, ["enter"])
        }, [
          renderSlot(_ctx.$slots, "increase-icon", {}, () => [
            createVNode(unref(ElIcon), null, {
              default: withCtx(() => [
                unref(controlsAtRight) ? (openBlock(), createBlock(unref(arrow_up_default), { key: 0 })) : (openBlock(), createBlock(unref(plus_default), { key: 1 }))
              ]),
              _: 1
            })
          ])
        ], 42, ["aria-label", "onKeydown"])), [
          [unref(vRepeatClick), increase]
        ]) : createCommentVNode("v-if", true),
        createVNode(unref(ElInput), {
          id: _ctx.id,
          ref_key: "input",
          ref: input,
          type: "number",
          step: _ctx.step,
          "model-value": unref(displayValue),
          placeholder: _ctx.placeholder,
          readonly: _ctx.readonly,
          disabled: unref(inputNumberDisabled),
          size: unref(inputNumberSize),
          max: _ctx.max,
          min: _ctx.min,
          name: _ctx.name,
          "aria-label": _ctx.ariaLabel,
          "validate-event": false,
          onKeydown: [
            withKeys(withModifiers(increase, ["prevent"]), ["up"]),
            withKeys(withModifiers(decrease, ["prevent"]), ["down"])
          ],
          onBlur: handleBlur,
          onFocus: handleFocus,
          onInput: handleInput,
          onChange: handleInputChange
        }, createSlots({
          _: 2
        }, [
          _ctx.$slots.prefix ? {
            name: "prefix",
            fn: withCtx(() => [
              renderSlot(_ctx.$slots, "prefix")
            ])
          } : void 0,
          _ctx.$slots.suffix ? {
            name: "suffix",
            fn: withCtx(() => [
              renderSlot(_ctx.$slots, "suffix")
            ])
          } : void 0
        ]), 1032, ["id", "step", "model-value", "placeholder", "readonly", "disabled", "size", "max", "min", "name", "aria-label", "onKeydown"])
      ], 42, ["onDragstart"]);
    };
  }
});
var InputNumber = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__file", "input-number.vue"]]);
const ElInputNumber = withInstall(InputNumber);
const emitChangeFn = (value) => isNumber(value) || isString(value) || isArray(value);
const collapseProps = buildProps({
  accordion: Boolean,
  modelValue: {
    type: definePropType([Array, String, Number]),
    default: () => mutable([])
  },
  expandIconPosition: {
    type: definePropType([String]),
    default: "right"
  },
  beforeCollapse: {
    type: definePropType(Function)
  }
});
const collapseEmits = {
  [UPDATE_MODEL_EVENT]: emitChangeFn,
  [CHANGE_EVENT]: emitChangeFn
};
const collapseContextKey = Symbol("collapseContextKey");
const SCOPE = "ElCollapse";
const useCollapse = (props, emit) => {
  const activeNames = ref(castArray(props.modelValue));
  const setActiveNames = (_activeNames) => {
    activeNames.value = _activeNames;
    const value = props.accordion ? activeNames.value[0] : activeNames.value;
    emit(UPDATE_MODEL_EVENT, value);
    emit(CHANGE_EVENT, value);
  };
  const handleChange = (name) => {
    if (props.accordion) {
      setActiveNames([activeNames.value[0] === name ? "" : name]);
    } else {
      const _activeNames = [...activeNames.value];
      const index = _activeNames.indexOf(name);
      if (index > -1) {
        _activeNames.splice(index, 1);
      } else {
        _activeNames.push(name);
      }
      setActiveNames(_activeNames);
    }
  };
  const handleItemClick = async (name) => {
    const { beforeCollapse } = props;
    if (!beforeCollapse) {
      handleChange(name);
      return;
    }
    const shouldChange = beforeCollapse(name);
    const isPromiseOrBool = [
      isPromise(shouldChange),
      isBoolean(shouldChange)
    ].includes(true);
    if (!isPromiseOrBool) {
      throwError(SCOPE, "beforeCollapse must return type `Promise<boolean>` or `boolean`");
    }
    if (isPromise(shouldChange)) {
      shouldChange.then((result) => {
        if (result !== false) {
          handleChange(name);
        }
      }).catch((e) => {
      });
    } else if (shouldChange) {
      handleChange(name);
    }
  };
  watch(() => props.modelValue, () => activeNames.value = castArray(props.modelValue), { deep: true });
  provide(collapseContextKey, {
    activeNames,
    handleItemClick
  });
  return {
    activeNames,
    setActiveNames
  };
};
const useCollapseDOM = (props) => {
  const ns = useNamespace("collapse");
  const rootKls = computed(() => [
    ns.b(),
    ns.b(`icon-position-${props.expandIconPosition}`)
  ]);
  return {
    rootKls
  };
};
const __default__$2 = defineComponent({
  name: "ElCollapse"
});
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  ...__default__$2,
  props: collapseProps,
  emits: collapseEmits,
  setup(__props, { expose, emit }) {
    const props = __props;
    const { activeNames, setActiveNames } = useCollapse(props, emit);
    const { rootKls } = useCollapseDOM(props);
    expose({
      activeNames,
      setActiveNames
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(unref(rootKls))
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 2);
    };
  }
});
var Collapse = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__file", "collapse.vue"]]);
const collapseItemProps = buildProps({
  title: {
    type: String,
    default: ""
  },
  name: {
    type: definePropType([String, Number]),
    default: void 0
  },
  icon: {
    type: iconPropType,
    default: arrow_right_default
  },
  disabled: Boolean
});
const useCollapseItem = (props) => {
  const collapse = inject(collapseContextKey);
  const { namespace } = useNamespace("collapse");
  const focusing = ref(false);
  const isClick = ref(false);
  const idInjection = useIdInjection();
  const id = computed(() => idInjection.current++);
  const name = computed(() => {
    var _a;
    return (_a = props.name) != null ? _a : `${namespace.value}-id-${idInjection.prefix}-${unref(id)}`;
  });
  const isActive = computed(() => collapse == null ? void 0 : collapse.activeNames.value.includes(unref(name)));
  const handleFocus = () => {
    setTimeout(() => {
      if (!isClick.value) {
        focusing.value = true;
      } else {
        isClick.value = false;
      }
    }, 50);
  };
  const handleHeaderClick = (e) => {
    if (props.disabled)
      return;
    const target = e.target;
    if (target == null ? void 0 : target.closest("input, textarea, select"))
      return;
    collapse == null ? void 0 : collapse.handleItemClick(unref(name));
    focusing.value = false;
    isClick.value = true;
  };
  const handleEnterClick = (e) => {
    const target = e.target;
    if (target == null ? void 0 : target.closest("input, textarea, select"))
      return;
    e.preventDefault();
    collapse == null ? void 0 : collapse.handleItemClick(unref(name));
  };
  return {
    focusing,
    id,
    isActive,
    handleFocus,
    handleHeaderClick,
    handleEnterClick
  };
};
const useCollapseItemDOM = (props, { focusing, isActive, id }) => {
  const ns = useNamespace("collapse");
  const rootKls = computed(() => [
    ns.b("item"),
    ns.is("active", unref(isActive)),
    ns.is("disabled", props.disabled)
  ]);
  const headKls = computed(() => [
    ns.be("item", "header"),
    ns.is("active", unref(isActive)),
    { focusing: unref(focusing) && !props.disabled }
  ]);
  const arrowKls = computed(() => [
    ns.be("item", "arrow"),
    ns.is("active", unref(isActive))
  ]);
  const itemTitleKls = computed(() => [ns.be("item", "title")]);
  const itemWrapperKls = computed(() => ns.be("item", "wrap"));
  const itemContentKls = computed(() => ns.be("item", "content"));
  const scopedContentId = computed(() => ns.b(`content-${unref(id)}`));
  const scopedHeadId = computed(() => ns.b(`head-${unref(id)}`));
  return {
    itemTitleKls,
    arrowKls,
    headKls,
    rootKls,
    itemWrapperKls,
    itemContentKls,
    scopedContentId,
    scopedHeadId
  };
};
const __default__$1 = defineComponent({
  name: "ElCollapseItem"
});
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  ...__default__$1,
  props: collapseItemProps,
  setup(__props, { expose }) {
    const props = __props;
    const {
      focusing,
      id,
      isActive,
      handleFocus,
      handleHeaderClick,
      handleEnterClick
    } = useCollapseItem(props);
    const {
      arrowKls,
      headKls,
      rootKls,
      itemTitleKls,
      itemWrapperKls,
      itemContentKls,
      scopedContentId,
      scopedHeadId
    } = useCollapseItemDOM(props, { focusing, isActive, id });
    expose({
      isActive
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(unref(rootKls))
      }, [
        createElementVNode("div", {
          id: unref(scopedHeadId),
          class: normalizeClass(unref(headKls)),
          "aria-expanded": unref(isActive),
          "aria-controls": unref(scopedContentId),
          "aria-describedby": unref(scopedContentId),
          tabindex: _ctx.disabled ? -1 : 0,
          role: "button",
          onClick: unref(handleHeaderClick),
          onKeydown: withKeys(withModifiers(unref(handleEnterClick), ["stop"]), ["space", "enter"]),
          onFocus: unref(handleFocus),
          onBlur: ($event) => focusing.value = false
        }, [
          createElementVNode("span", {
            class: normalizeClass(unref(itemTitleKls))
          }, [
            renderSlot(_ctx.$slots, "title", { isActive: unref(isActive) }, () => [
              createTextVNode(toDisplayString(_ctx.title), 1)
            ])
          ], 2),
          renderSlot(_ctx.$slots, "icon", { isActive: unref(isActive) }, () => [
            createVNode(unref(ElIcon), {
              class: normalizeClass(unref(arrowKls))
            }, {
              default: withCtx(() => [
                (openBlock(), createBlock(resolveDynamicComponent(_ctx.icon)))
              ]),
              _: 1
            }, 8, ["class"])
          ])
        ], 42, ["id", "aria-expanded", "aria-controls", "aria-describedby", "tabindex", "onClick", "onKeydown", "onFocus", "onBlur"]),
        createVNode(unref(ElCollapseTransition), null, {
          default: withCtx(() => [
            withDirectives(createElementVNode("div", {
              id: unref(scopedContentId),
              role: "region",
              class: normalizeClass(unref(itemWrapperKls)),
              "aria-hidden": !unref(isActive),
              "aria-labelledby": unref(scopedHeadId)
            }, [
              createElementVNode("div", {
                class: normalizeClass(unref(itemContentKls))
              }, [
                renderSlot(_ctx.$slots, "default")
              ], 2)
            ], 10, ["id", "aria-hidden", "aria-labelledby"]), [
              [vShow, unref(isActive)]
            ])
          ]),
          _: 3
        })
      ], 2);
    };
  }
});
var CollapseItem = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__file", "collapse-item.vue"]]);
const ElCollapse = withInstall(Collapse, {
  CollapseItem
});
const ElCollapseItem = withNoopInstall(CollapseItem);
const configProviderProps = buildProps({
  a11y: {
    type: Boolean,
    default: true
  },
  locale: {
    type: definePropType(Object)
  },
  size: useSizeProp,
  button: {
    type: definePropType(Object)
  },
  link: {
    type: definePropType(Object)
  },
  experimentalFeatures: {
    type: definePropType(Object)
  },
  keyboardNavigation: {
    type: Boolean,
    default: true
  },
  message: {
    type: definePropType(Object)
  },
  zIndex: Number,
  namespace: {
    type: String,
    default: "el"
  },
  ...useEmptyValuesProps
});
const messageConfig = {};
defineComponent({
  name: "ElConfigProvider",
  props: configProviderProps,
  setup(props, { slots }) {
    const config = provideGlobalConfig(props);
    watch(() => props.message, (val) => {
      var _a, _b;
      Object.assign(messageConfig, (_b = (_a = config == null ? void 0 : config.value) == null ? void 0 : _a.message) != null ? _b : {}, val != null ? val : {});
    }, { immediate: true, deep: true });
    return () => renderSlot(slots, "default", { config: config == null ? void 0 : config.value });
  }
});
const messageTypes = [
  "primary",
  "success",
  "info",
  "warning",
  "error"
];
const messageDefaults = mutable({
  customClass: "",
  dangerouslyUseHTMLString: false,
  duration: 3e3,
  icon: void 0,
  id: "",
  message: "",
  onClose: void 0,
  showClose: false,
  type: "info",
  plain: false,
  offset: 16,
  zIndex: 0,
  grouping: false,
  repeatNum: 1,
  appendTo: isClient ? (void 0).body : void 0
});
const messageProps = buildProps({
  customClass: {
    type: String,
    default: messageDefaults.customClass
  },
  dangerouslyUseHTMLString: {
    type: Boolean,
    default: messageDefaults.dangerouslyUseHTMLString
  },
  duration: {
    type: Number,
    default: messageDefaults.duration
  },
  icon: {
    type: iconPropType,
    default: messageDefaults.icon
  },
  id: {
    type: String,
    default: messageDefaults.id
  },
  message: {
    type: definePropType([
      String,
      Object,
      Function
    ]),
    default: messageDefaults.message
  },
  onClose: {
    type: definePropType(Function),
    default: messageDefaults.onClose
  },
  showClose: {
    type: Boolean,
    default: messageDefaults.showClose
  },
  type: {
    type: String,
    values: messageTypes,
    default: messageDefaults.type
  },
  plain: {
    type: Boolean,
    default: messageDefaults.plain
  },
  offset: {
    type: Number,
    default: messageDefaults.offset
  },
  zIndex: {
    type: Number,
    default: messageDefaults.zIndex
  },
  grouping: {
    type: Boolean,
    default: messageDefaults.grouping
  },
  repeatNum: {
    type: Number,
    default: messageDefaults.repeatNum
  }
});
const messageEmits = {
  destroy: () => true
};
const instances = shallowReactive([]);
const getInstance = (id) => {
  const idx = instances.findIndex((instance) => instance.id === id);
  const current = instances[idx];
  let prev;
  if (idx > 0) {
    prev = instances[idx - 1];
  }
  return { current, prev };
};
const getLastOffset = (id) => {
  const { prev } = getInstance(id);
  if (!prev)
    return 0;
  return prev.vm.exposed.bottom.value;
};
const getOffsetOrSpace = (id, offset) => {
  const idx = instances.findIndex((instance) => instance.id === id);
  return idx > 0 ? 16 : offset;
};
const __default__ = defineComponent({
  name: "ElMessage"
});
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: messageProps,
  emits: messageEmits,
  setup(__props, { expose, emit }) {
    const props = __props;
    const { Close } = TypeComponents;
    const isStartTransition = ref(false);
    const { ns, zIndex } = useGlobalComponentSettings("message");
    const { currentZIndex, nextZIndex } = zIndex;
    const messageRef = ref();
    const visible = ref(false);
    const height = ref(0);
    let stopTimer = void 0;
    const badgeType = computed(() => props.type ? props.type === "error" ? "danger" : props.type : "info");
    const typeClass = computed(() => {
      const type = props.type;
      return { [ns.bm("icon", type)]: type && TypeComponentsMap[type] };
    });
    const iconComponent = computed(() => props.icon || TypeComponentsMap[props.type] || "");
    const lastOffset = computed(() => getLastOffset(props.id));
    const offset = computed(() => getOffsetOrSpace(props.id, props.offset) + lastOffset.value);
    const bottom = computed(() => height.value + offset.value);
    const customStyle = computed(() => ({
      top: `${offset.value}px`,
      zIndex: currentZIndex.value
    }));
    function startTimer() {
      if (props.duration === 0)
        return;
      ({ stop: stopTimer } = useTimeoutFn(() => {
        close();
      }, props.duration));
    }
    function clearTimer() {
      stopTimer == null ? void 0 : stopTimer();
    }
    function close() {
      visible.value = false;
      nextTick(() => {
        var _a;
        if (!isStartTransition.value) {
          (_a = props.onClose) == null ? void 0 : _a.call(props);
          emit("destroy");
        }
      });
    }
    function keydown({ code }) {
      if (code === EVENT_CODE.esc) {
        close();
      }
    }
    watch(() => props.repeatNum, () => {
      clearTimer();
      startTimer();
    });
    useEventListener(void 0, "keydown", keydown);
    useResizeObserver(messageRef, () => {
      height.value = messageRef.value.getBoundingClientRect().height;
    });
    expose({
      visible,
      bottom,
      close
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Transition, {
        name: unref(ns).b("fade"),
        onBeforeEnter: ($event) => isStartTransition.value = true,
        onBeforeLeave: _ctx.onClose,
        onAfterLeave: ($event) => _ctx.$emit("destroy"),
        persisted: ""
      }, {
        default: withCtx(() => [
          withDirectives(createElementVNode("div", {
            id: _ctx.id,
            ref_key: "messageRef",
            ref: messageRef,
            class: normalizeClass([
              unref(ns).b(),
              { [unref(ns).m(_ctx.type)]: _ctx.type },
              unref(ns).is("closable", _ctx.showClose),
              unref(ns).is("plain", _ctx.plain),
              _ctx.customClass
            ]),
            style: normalizeStyle(unref(customStyle)),
            role: "alert",
            onMouseenter: clearTimer,
            onMouseleave: startTimer
          }, [
            _ctx.repeatNum > 1 ? (openBlock(), createBlock(unref(ElBadge), {
              key: 0,
              value: _ctx.repeatNum,
              type: unref(badgeType),
              class: normalizeClass(unref(ns).e("badge"))
            }, null, 8, ["value", "type", "class"])) : createCommentVNode("v-if", true),
            unref(iconComponent) ? (openBlock(), createBlock(unref(ElIcon), {
              key: 1,
              class: normalizeClass([unref(ns).e("icon"), unref(typeClass)])
            }, {
              default: withCtx(() => [
                (openBlock(), createBlock(resolveDynamicComponent(unref(iconComponent))))
              ]),
              _: 1
            }, 8, ["class"])) : createCommentVNode("v-if", true),
            renderSlot(_ctx.$slots, "default", {}, () => [
              !_ctx.dangerouslyUseHTMLString ? (openBlock(), createElementBlock("p", {
                key: 0,
                class: normalizeClass(unref(ns).e("content"))
              }, toDisplayString(_ctx.message), 3)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                createCommentVNode(" Caution here, message could've been compromised, never use user's input as message "),
                createElementVNode("p", {
                  class: normalizeClass(unref(ns).e("content")),
                  innerHTML: _ctx.message
                }, null, 10, ["innerHTML"])
              ], 2112))
            ]),
            _ctx.showClose ? (openBlock(), createBlock(unref(ElIcon), {
              key: 2,
              class: normalizeClass(unref(ns).e("closeBtn")),
              onClick: withModifiers(close, ["stop"])
            }, {
              default: withCtx(() => [
                createVNode(unref(Close))
              ]),
              _: 1
            }, 8, ["class", "onClick"])) : createCommentVNode("v-if", true)
          ], 46, ["id"]), [
            [vShow, visible.value]
          ])
        ]),
        _: 3
      }, 8, ["name", "onBeforeEnter", "onBeforeLeave", "onAfterLeave"]);
    };
  }
});
var MessageConstructor = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__file", "message.vue"]]);
let seed = 1;
const normalizeOptions = (params) => {
  const options = !params || isString(params) || isVNode(params) || isFunction(params) ? { message: params } : params;
  const normalized = {
    ...messageDefaults,
    ...options
  };
  if (!normalized.appendTo) {
    normalized.appendTo = (void 0).body;
  } else if (isString(normalized.appendTo)) {
    let appendTo = (void 0).querySelector(normalized.appendTo);
    if (!isElement(appendTo)) {
      appendTo = (void 0).body;
    }
    normalized.appendTo = appendTo;
  }
  if (isBoolean(messageConfig.grouping) && !normalized.grouping) {
    normalized.grouping = messageConfig.grouping;
  }
  if (isNumber(messageConfig.duration) && normalized.duration === 3e3) {
    normalized.duration = messageConfig.duration;
  }
  if (isNumber(messageConfig.offset) && normalized.offset === 16) {
    normalized.offset = messageConfig.offset;
  }
  if (isBoolean(messageConfig.showClose) && !normalized.showClose) {
    normalized.showClose = messageConfig.showClose;
  }
  if (isBoolean(messageConfig.plain) && !normalized.plain) {
    normalized.plain = messageConfig.plain;
  }
  return normalized;
};
const closeMessage = (instance) => {
  const idx = instances.indexOf(instance);
  if (idx === -1)
    return;
  instances.splice(idx, 1);
  const { handler } = instance;
  handler.close();
};
const createMessage = ({ appendTo, ...options }, context) => {
  const id = `message_${seed++}`;
  const userOnClose = options.onClose;
  const container = (void 0).createElement("div");
  const props = {
    ...options,
    id,
    onClose: () => {
      userOnClose == null ? void 0 : userOnClose();
      closeMessage(instance);
    },
    onDestroy: () => {
      render(null, container);
    }
  };
  const vnode = createVNode(MessageConstructor, props, isFunction(props.message) || isVNode(props.message) ? {
    default: isFunction(props.message) ? props.message : () => props.message
  } : null);
  vnode.appContext = context || message._context;
  render(vnode, container);
  appendTo.appendChild(container.firstElementChild);
  const vm = vnode.component;
  const handler = {
    close: () => {
      vm.exposed.close();
    }
  };
  const instance = {
    id,
    vnode,
    vm,
    handler,
    props: vnode.component.props
  };
  return instance;
};
const message = (options = {}, context) => {
  if (!isClient)
    return { close: () => void 0 };
  const normalized = normalizeOptions(options);
  if (normalized.grouping && instances.length) {
    const instance2 = instances.find(({ vnode: vm }) => {
      var _a;
      return ((_a = vm.props) == null ? void 0 : _a.message) === normalized.message;
    });
    if (instance2) {
      instance2.props.repeatNum += 1;
      instance2.props.type = normalized.type;
      return instance2.handler;
    }
  }
  if (isNumber(messageConfig.max) && instances.length >= messageConfig.max) {
    return { close: () => void 0 };
  }
  const instance = createMessage(normalized, context);
  instances.push(instance);
  return instance.handler;
};
messageTypes.forEach((type) => {
  message[type] = (options = {}, appContext) => {
    const normalized = normalizeOptions(options);
    return message({ ...normalized, type }, appContext);
  };
});
function closeAll(type) {
  const instancesToClose = [...instances];
  for (const instance of instancesToClose) {
    if (!type || type === instance.props.type) {
      instance.handler.close();
    }
  }
}
message.closeAll = closeAll;
message._context = null;
const ElMessage = withInstallFunction(message, "$message");
const _sfc_main = {
  __name: "productdisplay",
  __ssrInlineRender: true,
  setup(__props) {
    const { toUSD } = useCurrency();
    const price = ref(400);
    const originalPrice = ref(499.99);
    const rating = ref(4);
    const overallRating = ref(4);
    const quantity = ref(1);
    const selectedBundle = ref("8GB/128GB");
    const selectedColor = ref("blue");
    const colorOptions = [
      { id: "black", name: "Black", hex: "#000000" },
      { id: "white", name: "White", hex: "#FFFFFF" },
      { id: "gray", name: "Gray", hex: "#808080" },
      { id: "silver", name: "Silver", hex: "#C0C0C0" }
    ];
    const bundleOptions = [
      { id: "16GB/256GB", name: "16GB/256GB" },
      { id: "8GB/128GB", name: "8GB/128GB" },
      { id: "3GB/64GB", name: "3GB/64GB" }
    ];
    const addToCart = () => {
      ElMessage({
        message: `Added ${quantity.value} Samsung S10 Plus to cart`,
        type: "success"
      });
    };
    const addToWishlist = () => {
      ElMessage({
        message: "Added to wishlist",
        type: "success"
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      const _component_el_rate = ElRate;
      const _component_el_tag = ElTag;
      const _component_el_icon = ElIcon;
      const _component_el_radio_group = ElRadioGroup;
      const _component_el_radio_button = ElRadioButton;
      const _component_el_input_number = ElInputNumber;
      const _component_el_button = ElButton;
      const _component_el_tabs = ElTabs;
      const _component_el_tab_pane = ElTabPane;
      const _component_el_card = ElCard;
      const _component_el_collapse = ElCollapse;
      const _component_el_collapse_item = ElCollapseItem;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container mx-auto px-4 py-8" }, _attrs))}><div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"><div class="flex justify-center items-center bg-gray-50 rounded-xl p-8"><div class="relative w-full max-w-md aspect-[3/4]"><img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CleanShot%202025-03-21%20at%209.13.12%20AM-4z1GG.png" alt="Samsung S10 Plus" class="object-contain w-full h-full"></div></div><div class="flex flex-col space-y-6"><div class="flex justify-between items-start flex-wrap"><div><h1 class="text-3xl font-bold tracking-tight"> SAMSUNG S10 PLUS </h1><div class="flex items-center mt-2">`);
      _push(ssrRenderComponent(_component_el_rate, {
        modelValue: rating.value,
        "onUpdate:modelValue": ($event) => rating.value = $event,
        disabled: "",
        "show-score": "",
        "text-color": "#000000"
      }, null, _parent));
      _push(`<span class="text-sm text-gray-500 ml-2">(24 reviews)</span></div></div>`);
      _push(ssrRenderComponent(_component_el_tag, {
        size: "large",
        effect: "plain",
        class: "flex items-center gap-1 black-tag"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_el_icon, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(van_default), null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(van_default))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<span${_scopeId}>Shipped by Monaco</span>`);
          } else {
            return [
              createVNode(_component_el_icon, null, {
                default: withCtx(() => [
                  createVNode(unref(van_default))
                ]),
                _: 1
              }),
              createVNode("span", null, "Shipped by Monaco")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex items-baseline"><span class="text-3xl font-bold">${ssrInterpolate(unref(toUSD)((_a = price.value) == null ? void 0 : _a.toFixed(2)))}</span><span class="text-sm text-gray-500 ml-2 line-through">$${ssrInterpolate(unref(toUSD)(originalPrice.value.toFixed(2)))}</span></div><div class="space-y-1"><p class="text-gray-600"> Samsung S10 Plus 6.4-Inch AMOLED (8GB, 128GB ROM) Android 9.0 Pie, 12MP + 12MP + 16MP Dual SIM 4G Fingerprint </p></div><div class="space-y-4 pt-4"><div><h3 class="text-sm font-medium mb-3">Bundle Options</h3>`);
      _push(ssrRenderComponent(_component_el_radio_group, {
        modelValue: selectedBundle.value,
        "onUpdate:modelValue": ($event) => selectedBundle.value = $event,
        size: "large",
        class: "bundle-options"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(bundleOptions, (bundle) => {
              _push2(ssrRenderComponent(_component_el_radio_button, {
                key: bundle.id,
                label: bundle.id
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(bundle.name)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(bundle.name), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(), createBlock(Fragment, null, renderList(bundleOptions, (bundle) => {
                return createVNode(_component_el_radio_button, {
                  key: bundle.id,
                  label: bundle.id
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(bundle.name), 1)
                  ]),
                  _: 2
                }, 1032, ["label"]);
              }), 64))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div><h3 class="text-sm font-medium mb-3"> Color: ${ssrInterpolate((_b = colorOptions.find((c) => c.id === selectedColor.value)) == null ? void 0 : _b.name)}</h3><div class="flex space-x-3"><!--[-->`);
      ssrRenderList(colorOptions, (color) => {
        _push(`<div class="${ssrRenderClass([{
          "ring-2 ring-primary ring-offset-2": selectedColor.value === color.id,
          "color-option-white": color.id === "white"
        }, "w-10 h-10 rounded-full cursor-pointer flex items-center justify-center"])}" style="${ssrRenderStyle({ backgroundColor: color.hex })}"></div>`);
      });
      _push(`<!--]--></div></div><div><h3 class="text-sm font-medium mb-3">Quantity</h3>`);
      _push(ssrRenderComponent(_component_el_input_number, {
        modelValue: quantity.value,
        "onUpdate:modelValue": ($event) => quantity.value = $event,
        min: 1,
        max: 99,
        size: "large"
      }, null, _parent));
      _push(`</div></div><div class="flex flex-col sm:flex-row gap-4 pt-6">`);
      _push(ssrRenderComponent(_component_el_button, {
        type: "primary",
        size: "large",
        class: "flex-1 black-btn",
        onClick: addToCart
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_el_icon, { class: "mr-2" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(shopping_cart_default), null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(shopping_cart_default))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(` Add to Cart `);
          } else {
            return [
              createVNode(_component_el_icon, { class: "mr-2" }, {
                default: withCtx(() => [
                  createVNode(unref(shopping_cart_default))
                ]),
                _: 1
              }),
              createTextVNode(" Add to Cart ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_el_button, {
        size: "large",
        class: "gap-2 white-btn",
        onClick: addToWishlist
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_el_icon, { class: "mr-2" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(star_default), null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(star_default))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(` Add to Wishlist `);
          } else {
            return [
              createVNode(_component_el_icon, { class: "mr-2" }, {
                default: withCtx(() => [
                  createVNode(unref(star_default))
                ]),
                _: 1
              }),
              createTextVNode(" Add to Wishlist ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div>`);
      _push(ssrRenderComponent(_component_el_tabs, {
        type: "border-card",
        class: "w-full product-tabs"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_el_tab_pane, { label: "Product Details" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_el_card, { class: "mt-4" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="grid grid-cols-1 md:grid-cols-2 gap-6"${_scopeId3}><div class="space-y-4"${_scopeId3}><div class="flex justify-between py-2 border-b"${_scopeId3}><span class="font-medium"${_scopeId3}>OS</span><span${_scopeId3}>Android</span></div><div class="flex justify-between py-2 border-b"${_scopeId3}><span class="font-medium"${_scopeId3}>Display</span><span${_scopeId3}>Dynamic AMOLED capacitie touchscreen HDR10+</span></div><div class="flex justify-between py-2 border-b"${_scopeId3}><span class="font-medium"${_scopeId3}>CPU</span><span${_scopeId3}>Octa-core</span></div></div><div class="space-y-4"${_scopeId3}><div class="flex justify-between py-2 border-b"${_scopeId3}><span class="font-medium"${_scopeId3}>Chipset</span><span${_scopeId3}>Exynos 9820, Qualcomm SDM855 Snapdragon 855</span></div><div class="flex justify-between py-2 border-b"${_scopeId3}><span class="font-medium"${_scopeId3}>Dimension</span><span${_scopeId3}>149.9 x 70.4 x 7.8mm</span></div><div class="flex justify-between py-2 border-b"${_scopeId3}><span class="font-medium"${_scopeId3}>Network</span><span${_scopeId3}>GSM/CDMA/HSPA/LTE</span></div></div></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-6" }, [
                            createVNode("div", { class: "space-y-4" }, [
                              createVNode("div", { class: "flex justify-between py-2 border-b" }, [
                                createVNode("span", { class: "font-medium" }, "OS"),
                                createVNode("span", null, "Android")
                              ]),
                              createVNode("div", { class: "flex justify-between py-2 border-b" }, [
                                createVNode("span", { class: "font-medium" }, "Display"),
                                createVNode("span", null, "Dynamic AMOLED capacitie touchscreen HDR10+")
                              ]),
                              createVNode("div", { class: "flex justify-between py-2 border-b" }, [
                                createVNode("span", { class: "font-medium" }, "CPU"),
                                createVNode("span", null, "Octa-core")
                              ])
                            ]),
                            createVNode("div", { class: "space-y-4" }, [
                              createVNode("div", { class: "flex justify-between py-2 border-b" }, [
                                createVNode("span", { class: "font-medium" }, "Chipset"),
                                createVNode("span", null, "Exynos 9820, Qualcomm SDM855 Snapdragon 855")
                              ]),
                              createVNode("div", { class: "flex justify-between py-2 border-b" }, [
                                createVNode("span", { class: "font-medium" }, "Dimension"),
                                createVNode("span", null, "149.9 x 70.4 x 7.8mm")
                              ]),
                              createVNode("div", { class: "flex justify-between py-2 border-b" }, [
                                createVNode("span", { class: "font-medium" }, "Network"),
                                createVNode("span", null, "GSM/CDMA/HSPA/LTE")
                              ])
                            ])
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_el_card, { class: "mt-4" }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-6" }, [
                          createVNode("div", { class: "space-y-4" }, [
                            createVNode("div", { class: "flex justify-between py-2 border-b" }, [
                              createVNode("span", { class: "font-medium" }, "OS"),
                              createVNode("span", null, "Android")
                            ]),
                            createVNode("div", { class: "flex justify-between py-2 border-b" }, [
                              createVNode("span", { class: "font-medium" }, "Display"),
                              createVNode("span", null, "Dynamic AMOLED capacitie touchscreen HDR10+")
                            ]),
                            createVNode("div", { class: "flex justify-between py-2 border-b" }, [
                              createVNode("span", { class: "font-medium" }, "CPU"),
                              createVNode("span", null, "Octa-core")
                            ])
                          ]),
                          createVNode("div", { class: "space-y-4" }, [
                            createVNode("div", { class: "flex justify-between py-2 border-b" }, [
                              createVNode("span", { class: "font-medium" }, "Chipset"),
                              createVNode("span", null, "Exynos 9820, Qualcomm SDM855 Snapdragon 855")
                            ]),
                            createVNode("div", { class: "flex justify-between py-2 border-b" }, [
                              createVNode("span", { class: "font-medium" }, "Dimension"),
                              createVNode("span", null, "149.9 x 70.4 x 7.8mm")
                            ]),
                            createVNode("div", { class: "flex justify-between py-2 border-b" }, [
                              createVNode("span", { class: "font-medium" }, "Network"),
                              createVNode("span", null, "GSM/CDMA/HSPA/LTE")
                            ])
                          ])
                        ])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_tab_pane, { label: "Ratings/Review" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_el_card, { class: "mt-4" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="flex flex-col items-center justify-center py-12"${_scopeId3}><div class="flex items-center mb-4"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_el_rate, {
                          modelValue: overallRating.value,
                          "onUpdate:modelValue": ($event) => overallRating.value = $event,
                          disabled: "",
                          "show-score": "",
                          "text-color": "#000000",
                          "score-template": "{value} out of 5",
                          max: 5,
                          size: 30
                        }, null, _parent4, _scopeId3));
                        _push4(`</div><p class="text-gray-500 mt-2"${_scopeId3}>Based on 24 reviews</p></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "flex flex-col items-center justify-center py-12" }, [
                            createVNode("div", { class: "flex items-center mb-4" }, [
                              createVNode(_component_el_rate, {
                                modelValue: overallRating.value,
                                "onUpdate:modelValue": ($event) => overallRating.value = $event,
                                disabled: "",
                                "show-score": "",
                                "text-color": "#000000",
                                "score-template": "{value} out of 5",
                                max: 5,
                                size: 30
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            createVNode("p", { class: "text-gray-500 mt-2" }, "Based on 24 reviews")
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_el_card, { class: "mt-4" }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "flex flex-col items-center justify-center py-12" }, [
                          createVNode("div", { class: "flex items-center mb-4" }, [
                            createVNode(_component_el_rate, {
                              modelValue: overallRating.value,
                              "onUpdate:modelValue": ($event) => overallRating.value = $event,
                              disabled: "",
                              "show-score": "",
                              "text-color": "#000000",
                              "score-template": "{value} out of 5",
                              max: 5,
                              size: 30
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          createVNode("p", { class: "text-gray-500 mt-2" }, "Based on 24 reviews")
                        ])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_tab_pane, { label: "FAQ" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_el_card, { class: "mt-4" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_el_collapse, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_el_collapse_item, {
                                title: "Is this phone unlocked?",
                                name: "1"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<div${_scopeId5}> Yes, this phone comes factory unlocked and can be used with any carrier. </div>`);
                                  } else {
                                    return [
                                      createVNode("div", null, " Yes, this phone comes factory unlocked and can be used with any carrier. ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_el_collapse_item, {
                                title: "What's included in the box?",
                                name: "2"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<div${_scopeId5}> The phone, charger, USB cable, earphones, and quick start guide. </div>`);
                                  } else {
                                    return [
                                      createVNode("div", null, " The phone, charger, USB cable, earphones, and quick start guide. ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_el_collapse_item, {
                                title: "Does it support wireless charging?",
                                name: "3"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<div${_scopeId5}> Yes, the Samsung S10 Plus supports wireless charging. </div>`);
                                  } else {
                                    return [
                                      createVNode("div", null, " Yes, the Samsung S10 Plus supports wireless charging. ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_el_collapse_item, {
                                  title: "Is this phone unlocked?",
                                  name: "1"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", null, " Yes, this phone comes factory unlocked and can be used with any carrier. ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_el_collapse_item, {
                                  title: "What's included in the box?",
                                  name: "2"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", null, " The phone, charger, USB cable, earphones, and quick start guide. ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_el_collapse_item, {
                                  title: "Does it support wireless charging?",
                                  name: "3"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", null, " Yes, the Samsung S10 Plus supports wireless charging. ")
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
                          createVNode(_component_el_collapse, null, {
                            default: withCtx(() => [
                              createVNode(_component_el_collapse_item, {
                                title: "Is this phone unlocked?",
                                name: "1"
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", null, " Yes, this phone comes factory unlocked and can be used with any carrier. ")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_el_collapse_item, {
                                title: "What's included in the box?",
                                name: "2"
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", null, " The phone, charger, USB cable, earphones, and quick start guide. ")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_el_collapse_item, {
                                title: "Does it support wireless charging?",
                                name: "3"
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", null, " Yes, the Samsung S10 Plus supports wireless charging. ")
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
                    createVNode(_component_el_card, { class: "mt-4" }, {
                      default: withCtx(() => [
                        createVNode(_component_el_collapse, null, {
                          default: withCtx(() => [
                            createVNode(_component_el_collapse_item, {
                              title: "Is this phone unlocked?",
                              name: "1"
                            }, {
                              default: withCtx(() => [
                                createVNode("div", null, " Yes, this phone comes factory unlocked and can be used with any carrier. ")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_el_collapse_item, {
                              title: "What's included in the box?",
                              name: "2"
                            }, {
                              default: withCtx(() => [
                                createVNode("div", null, " The phone, charger, USB cable, earphones, and quick start guide. ")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_el_collapse_item, {
                              title: "Does it support wireless charging?",
                              name: "3"
                            }, {
                              default: withCtx(() => [
                                createVNode("div", null, " Yes, the Samsung S10 Plus supports wireless charging. ")
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
              createVNode(_component_el_tab_pane, { label: "Product Details" }, {
                default: withCtx(() => [
                  createVNode(_component_el_card, { class: "mt-4" }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-6" }, [
                        createVNode("div", { class: "space-y-4" }, [
                          createVNode("div", { class: "flex justify-between py-2 border-b" }, [
                            createVNode("span", { class: "font-medium" }, "OS"),
                            createVNode("span", null, "Android")
                          ]),
                          createVNode("div", { class: "flex justify-between py-2 border-b" }, [
                            createVNode("span", { class: "font-medium" }, "Display"),
                            createVNode("span", null, "Dynamic AMOLED capacitie touchscreen HDR10+")
                          ]),
                          createVNode("div", { class: "flex justify-between py-2 border-b" }, [
                            createVNode("span", { class: "font-medium" }, "CPU"),
                            createVNode("span", null, "Octa-core")
                          ])
                        ]),
                        createVNode("div", { class: "space-y-4" }, [
                          createVNode("div", { class: "flex justify-between py-2 border-b" }, [
                            createVNode("span", { class: "font-medium" }, "Chipset"),
                            createVNode("span", null, "Exynos 9820, Qualcomm SDM855 Snapdragon 855")
                          ]),
                          createVNode("div", { class: "flex justify-between py-2 border-b" }, [
                            createVNode("span", { class: "font-medium" }, "Dimension"),
                            createVNode("span", null, "149.9 x 70.4 x 7.8mm")
                          ]),
                          createVNode("div", { class: "flex justify-between py-2 border-b" }, [
                            createVNode("span", { class: "font-medium" }, "Network"),
                            createVNode("span", null, "GSM/CDMA/HSPA/LTE")
                          ])
                        ])
                      ])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_el_tab_pane, { label: "Ratings/Review" }, {
                default: withCtx(() => [
                  createVNode(_component_el_card, { class: "mt-4" }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "flex flex-col items-center justify-center py-12" }, [
                        createVNode("div", { class: "flex items-center mb-4" }, [
                          createVNode(_component_el_rate, {
                            modelValue: overallRating.value,
                            "onUpdate:modelValue": ($event) => overallRating.value = $event,
                            disabled: "",
                            "show-score": "",
                            "text-color": "#000000",
                            "score-template": "{value} out of 5",
                            max: 5,
                            size: 30
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        createVNode("p", { class: "text-gray-500 mt-2" }, "Based on 24 reviews")
                      ])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_el_tab_pane, { label: "FAQ" }, {
                default: withCtx(() => [
                  createVNode(_component_el_card, { class: "mt-4" }, {
                    default: withCtx(() => [
                      createVNode(_component_el_collapse, null, {
                        default: withCtx(() => [
                          createVNode(_component_el_collapse_item, {
                            title: "Is this phone unlocked?",
                            name: "1"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", null, " Yes, this phone comes factory unlocked and can be used with any carrier. ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_el_collapse_item, {
                            title: "What's included in the box?",
                            name: "2"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", null, " The phone, charger, USB cable, earphones, and quick start guide. ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_el_collapse_item, {
                            title: "Does it support wireless charging?",
                            name: "3"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", null, " Yes, the Samsung S10 Plus supports wireless charging. ")
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
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/productdisplay.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=productdisplay-CI99SJM8.mjs.map
