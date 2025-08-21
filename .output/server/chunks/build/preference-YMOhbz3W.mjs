import { E as ElBreadcrumb, a as ElBreadcrumbItem } from './index-D2pPoUN4.mjs';
import { E as ElRow, a as ElCol } from './index-Dzx92B6d.mjs';
import { E as ElCard, a as ElForm, b as ElFormItem } from './index-Bbz8LALq.mjs';
import { c as createLucideIcon } from './index-BKHcXdi2.mjs';
import { a as ElIcon, w as withInstall, v as withNoopInstall, E as ElButton, _ as _export_sfc$1, j as buildProps, y as useFormSize, c as close_default, K as useFormItem, A as useFormItemInputId, J as useFormDisabled, l as addUnit, a1 as loading_default, a2 as useEmptyValuesProps, n as definePropType, x as arrow_down_default, o as iconPropType, N as circle_close_default, B as useSizeProp, k as useLocale, a3 as useEmptyValues, V as ValidateComponentsMap, I as componentSizes, O as TypeComponents, a4 as useGlobalComponentSettings, T as TypeComponentsMap } from './el-button-etDYgHTt.mjs';
import { ref, mergeProps, withCtx, createTextVNode, createVNode, resolveDynamicComponent, createBlock, openBlock, Fragment, renderList, toDisplayString, createCommentVNode, reactive, unref, defineComponent, isVNode, withDirectives, createElementBlock, normalizeClass, createElementVNode, renderSlot, vShow, getCurrentInstance, provide, toRefs, computed, withModifiers, resolveComponent, resolveDirective, toHandlerKey, normalizeStyle, withKeys, vModelText, watch, Transition, render, markRaw, inject, toRaw, watchEffect, nextTick, shallowRef, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrRenderVNode, ssrInterpolate } from 'vue/server-renderer';
import { User, Bell, Shield as Shield$1, CreditCard as CreditCard$1, Truck, Palette } from 'lucide-vue-next';
import { E as ElAvatar, C as ClickOutside } from './index-Bz4OuGBN.mjs';
import { h as useNamespace, f as useId, i as isBoolean, p as isNumber, s as debugWarn, y as throwError, v as isUndefined, C as isElement } from './server.mjs';
import { E as ElInput, u as useComposition, a as useFocusController } from './index-BkNGL2aN.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import { u as useAriaProps, o as obtainAllFocusableElements } from './typescript-B4MtqadT.mjs';
import { U as UPDATE_MODEL_EVENT, C as CHANGE_EVENT, I as INPUT_EVENT } from './event-BZTOGHfp.mjs';
import { isString, isArray, hasOwn, isObject, isFunction, isPlainObject, isPromise } from '@vue/shared';
import { s as scrollIntoView, E as ElOverlay, u as useLockscreen, a as useSameTarget } from './el-overlay-B9AOyR8v.mjs';
import { b as ElTooltip, d as ElScrollbar, u as useTooltipContentProps, a as ElFocusTrap, s as scrollbarEmits } from './index-Bu8Xfd1z.mjs';
import { f as flattedChildren, E as EVENT_CODE } from './aria-DC1XP1AM.mjs';
import { isClient, useMutationObserver, isIOS, useResizeObserver } from '@vueuse/core';
import { castArray, get, isEqual, debounce, findLastIndex } from 'lodash-unified';
import { e as escapeStringRegexp } from './strings-D1uxkXhq.mjs';
import { placements } from '@popperjs/core';
import 'async-validator';
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

/**
 * @license lucide-vue-next v0.534.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Camera = createLucideIcon("camera", [
  [
    "path",
    {
      d: "M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",
      key: "1tc9qg"
    }
  ],
  ["circle", { cx: "12", cy: "13", r: "3", key: "1vg3eu" }]
]);
/**
 * @license lucide-vue-next v0.534.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const CreditCard = createLucideIcon("credit-card", [
  ["rect", { width: "20", height: "14", x: "2", y: "5", rx: "2", key: "ynyp8z" }],
  ["line", { x1: "2", x2: "22", y1: "10", y2: "10", key: "1b3vmo" }]
]);
/**
 * @license lucide-vue-next v0.534.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Download = createLucideIcon("download", [
  ["path", { d: "M12 15V3", key: "m9g1x1" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["path", { d: "m7 10 5 5 5-5", key: "brsn70" }]
]);
/**
 * @license lucide-vue-next v0.534.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Globe = createLucideIcon("globe", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20", key: "13o1zl" }],
  ["path", { d: "M2 12h20", key: "9i4pu4" }]
]);
/**
 * @license lucide-vue-next v0.534.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Lock = createLucideIcon("lock", [
  ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }],
  ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }]
]);
/**
 * @license lucide-vue-next v0.534.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const MapPin = createLucideIcon("map-pin", [
  [
    "path",
    {
      d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
      key: "1r0f0z"
    }
  ],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }]
]);
/**
 * @license lucide-vue-next v0.534.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Moon = createLucideIcon("moon", [
  [
    "path",
    {
      d: "M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",
      key: "kfwtm"
    }
  ]
]);
/**
 * @license lucide-vue-next v0.534.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Save = createLucideIcon("save", [
  [
    "path",
    {
      d: "M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",
      key: "1c8476"
    }
  ],
  ["path", { d: "M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7", key: "1ydtos" }],
  ["path", { d: "M7 3v4a1 1 0 0 0 1 1h7", key: "t51u73" }]
]);
/**
 * @license lucide-vue-next v0.534.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Settings = createLucideIcon("settings", [
  [
    "path",
    {
      d: "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",
      key: "1i5ecw"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
]);
/**
 * @license lucide-vue-next v0.534.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Shield = createLucideIcon("shield", [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ]
]);
/**
 * @license lucide-vue-next v0.534.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const SquarePen = createLucideIcon("square-pen", [
  ["path", { d: "M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7", key: "1m0v6g" }],
  [
    "path",
    {
      d: "M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",
      key: "ohrbg2"
    }
  ]
]);
/**
 * @license lucide-vue-next v0.534.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Sun = createLucideIcon("sun", [
  ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
  ["path", { d: "M12 2v2", key: "tus03m" }],
  ["path", { d: "M12 20v2", key: "1lh1kg" }],
  ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }],
  ["path", { d: "m17.66 17.66 1.41 1.41", key: "ptbguv" }],
  ["path", { d: "M2 12h2", key: "1t8f8n" }],
  ["path", { d: "M20 12h2", key: "1q8mjw" }],
  ["path", { d: "m6.34 17.66-1.41 1.41", key: "1m8zz5" }],
  ["path", { d: "m19.07 4.93-1.41 1.41", key: "1shlcs" }]
]);
/**
 * @license lucide-vue-next v0.534.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Trash2 = createLucideIcon("trash-2", [
  ["path", { d: "M10 11v6", key: "nco0om" }],
  ["path", { d: "M14 11v6", key: "outv1u" }],
  ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]
]);
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
const __default__$2 = defineComponent({
  name: "ElDivider"
});
const _sfc_main$e = /* @__PURE__ */ defineComponent({
  ...__default__$2,
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
var Divider = /* @__PURE__ */ _export_sfc$1(_sfc_main$e, [["__file", "divider.vue"]]);
const ElDivider = withInstall(Divider);
const _sfc_main$d = {
  __name: "Profile",
  __ssrInlineRender: true,
  setup(__props) {
    const profile = reactive({
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@example.com",
      phone: "+1 (555) 123-4567",
      bio: "",
      avatar: "/placeholder.svg?height=96&width=96"
    });
    function handleSaveProfile() {
      console.log("save profile");
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ElCard = ElCard;
      const _component_ElAvatar = ElAvatar;
      const _component_ElButton = ElButton;
      const _component_IconCamera = Camera;
      const _component_ElDivider = ElDivider;
      const _component_ElForm = ElForm;
      const _component_ElFormItem = ElFormItem;
      const _component_ElInput = ElInput;
      const _component_IconSave = Save;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-6" }, _attrs))} data-v-31f3ad45>`);
      _push(ssrRenderComponent(_component_ElCard, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="font-bold font-briscolade text-base" data-v-31f3ad45${_scopeId}>Profile Information</span><div class="text-gray-500 text-sm" data-v-31f3ad45${_scopeId}> Update your personal information and profile picture </div>`);
          } else {
            return [
              createVNode("span", { class: "font-bold font-briscolade text-base" }, "Profile Information"),
              createVNode("div", { class: "text-gray-500 text-sm" }, " Update your personal information and profile picture ")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="space-y-6" data-v-31f3ad45${_scopeId}><div class="flex items-center gap-6" data-v-31f3ad45${_scopeId}><div class="avatar-upload" data-v-31f3ad45${_scopeId}>`);
            _push2(ssrRenderComponent(_component_ElAvatar, {
              size: 96,
              src: unref(profile).avatar
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ElButton, {
              circle: "",
              size: "small",
              class: "avatar-upload-button"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_IconCamera, { size: "15" }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_IconCamera, { size: "15" })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div data-v-31f3ad45${_scopeId}><h3 class="font-semibold" data-v-31f3ad45${_scopeId}>Profile Picture</h3><p class="text-sm text-gray-600 mb-2" data-v-31f3ad45${_scopeId}>JPG, GIF or PNG. 1MB max.</p>`);
            _push2(ssrRenderComponent(_component_ElButton, {
              type: "default",
              size: "small"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Upload new picture`);
                } else {
                  return [
                    createTextVNode("Upload new picture")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
            _push2(ssrRenderComponent(_component_ElDivider, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ElForm, {
              "label-position": "top",
              class: "grid grid-cols-1"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="grid grid-cols-1 md:grid-cols-2 gap-4" data-v-31f3ad45${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_ElFormItem, { label: "First Name" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_ElInput, {
                          modelValue: unref(profile).firstName,
                          "onUpdate:modelValue": ($event) => unref(profile).firstName = $event,
                          size: "large"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_ElInput, {
                            modelValue: unref(profile).firstName,
                            "onUpdate:modelValue": ($event) => unref(profile).firstName = $event,
                            size: "large"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_ElFormItem, { label: "Last Name" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_ElInput, {
                          modelValue: unref(profile).lastName,
                          "onUpdate:modelValue": ($event) => unref(profile).lastName = $event,
                          size: "large"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_ElInput, {
                            modelValue: unref(profile).lastName,
                            "onUpdate:modelValue": ($event) => unref(profile).lastName = $event,
                            size: "large"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_ElFormItem, { label: "Email" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_ElInput, {
                          modelValue: unref(profile).email,
                          "onUpdate:modelValue": ($event) => unref(profile).email = $event,
                          type: "email",
                          size: "large"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_ElInput, {
                            modelValue: unref(profile).email,
                            "onUpdate:modelValue": ($event) => unref(profile).email = $event,
                            type: "email",
                            size: "large"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_ElFormItem, { label: "Phone Number" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_ElInput, {
                          modelValue: unref(profile).phone,
                          "onUpdate:modelValue": ($event) => unref(profile).phone = $event,
                          size: "large"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_ElInput, {
                            modelValue: unref(profile).phone,
                            "onUpdate:modelValue": ($event) => unref(profile).phone = $event,
                            size: "large"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                  _push3(ssrRenderComponent(_component_ElFormItem, { label: "Bio" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_ElInput, {
                          modelValue: unref(profile).bio,
                          "onUpdate:modelValue": ($event) => unref(profile).bio = $event,
                          type: "textarea",
                          placeholder: "Tell us about yourself..."
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_ElInput, {
                            modelValue: unref(profile).bio,
                            "onUpdate:modelValue": ($event) => unref(profile).bio = $event,
                            type: "textarea",
                            placeholder: "Tell us about yourself..."
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-4" }, [
                      createVNode(_component_ElFormItem, { label: "First Name" }, {
                        default: withCtx(() => [
                          createVNode(_component_ElInput, {
                            modelValue: unref(profile).firstName,
                            "onUpdate:modelValue": ($event) => unref(profile).firstName = $event,
                            size: "large"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_ElFormItem, { label: "Last Name" }, {
                        default: withCtx(() => [
                          createVNode(_component_ElInput, {
                            modelValue: unref(profile).lastName,
                            "onUpdate:modelValue": ($event) => unref(profile).lastName = $event,
                            size: "large"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_ElFormItem, { label: "Email" }, {
                        default: withCtx(() => [
                          createVNode(_component_ElInput, {
                            modelValue: unref(profile).email,
                            "onUpdate:modelValue": ($event) => unref(profile).email = $event,
                            type: "email",
                            size: "large"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_ElFormItem, { label: "Phone Number" }, {
                        default: withCtx(() => [
                          createVNode(_component_ElInput, {
                            modelValue: unref(profile).phone,
                            "onUpdate:modelValue": ($event) => unref(profile).phone = $event,
                            size: "large"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode(_component_ElFormItem, { label: "Bio" }, {
                      default: withCtx(() => [
                        createVNode(_component_ElInput, {
                          modelValue: unref(profile).bio,
                          "onUpdate:modelValue": ($event) => unref(profile).bio = $event,
                          type: "textarea",
                          placeholder: "Tell us about yourself..."
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="flex justify-end" data-v-31f3ad45${_scopeId}>`);
            _push2(ssrRenderComponent(_component_ElButton, {
              type: "primary",
              size: "large",
              class: "flex items-center fit-content gap-2",
              onClick: handleSaveProfile
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_IconSave, {
                    class: "mr-2",
                    size: "15"
                  }, null, _parent3, _scopeId2));
                  _push3(` Save Changes `);
                } else {
                  return [
                    createVNode(_component_IconSave, {
                      class: "mr-2",
                      size: "15"
                    }),
                    createTextVNode(" Save Changes ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "space-y-6" }, [
                createVNode("div", { class: "flex items-center gap-6" }, [
                  createVNode("div", { class: "avatar-upload" }, [
                    createVNode(_component_ElAvatar, {
                      size: 96,
                      src: unref(profile).avatar
                    }, null, 8, ["src"]),
                    createVNode(_component_ElButton, {
                      circle: "",
                      size: "small",
                      class: "avatar-upload-button"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_IconCamera, { size: "15" })
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode("div", null, [
                    createVNode("h3", { class: "font-semibold" }, "Profile Picture"),
                    createVNode("p", { class: "text-sm text-gray-600 mb-2" }, "JPG, GIF or PNG. 1MB max."),
                    createVNode(_component_ElButton, {
                      type: "default",
                      size: "small"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Upload new picture")
                      ]),
                      _: 1
                    })
                  ])
                ]),
                createVNode(_component_ElDivider),
                createVNode(_component_ElForm, {
                  "label-position": "top",
                  class: "grid grid-cols-1"
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-4" }, [
                      createVNode(_component_ElFormItem, { label: "First Name" }, {
                        default: withCtx(() => [
                          createVNode(_component_ElInput, {
                            modelValue: unref(profile).firstName,
                            "onUpdate:modelValue": ($event) => unref(profile).firstName = $event,
                            size: "large"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_ElFormItem, { label: "Last Name" }, {
                        default: withCtx(() => [
                          createVNode(_component_ElInput, {
                            modelValue: unref(profile).lastName,
                            "onUpdate:modelValue": ($event) => unref(profile).lastName = $event,
                            size: "large"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_ElFormItem, { label: "Email" }, {
                        default: withCtx(() => [
                          createVNode(_component_ElInput, {
                            modelValue: unref(profile).email,
                            "onUpdate:modelValue": ($event) => unref(profile).email = $event,
                            type: "email",
                            size: "large"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_ElFormItem, { label: "Phone Number" }, {
                        default: withCtx(() => [
                          createVNode(_component_ElInput, {
                            modelValue: unref(profile).phone,
                            "onUpdate:modelValue": ($event) => unref(profile).phone = $event,
                            size: "large"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode(_component_ElFormItem, { label: "Bio" }, {
                      default: withCtx(() => [
                        createVNode(_component_ElInput, {
                          modelValue: unref(profile).bio,
                          "onUpdate:modelValue": ($event) => unref(profile).bio = $event,
                          type: "textarea",
                          placeholder: "Tell us about yourself..."
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode("div", { class: "flex justify-end" }, [
                  createVNode(_component_ElButton, {
                    type: "primary",
                    size: "large",
                    class: "flex items-center fit-content gap-2",
                    onClick: handleSaveProfile
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_IconSave, {
                        class: "mr-2",
                        size: "15"
                      }),
                      createTextVNode(" Save Changes ")
                    ]),
                    _: 1
                  })
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/preference/Profile.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const Profile = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["__scopeId", "data-v-31f3ad45"]]);
const isValidComponentSize = (val) => ["", ...componentSizes].includes(val);
const switchProps = buildProps({
  modelValue: {
    type: [Boolean, String, Number],
    default: false
  },
  disabled: Boolean,
  loading: Boolean,
  size: {
    type: String,
    validator: isValidComponentSize
  },
  width: {
    type: [String, Number],
    default: ""
  },
  inlinePrompt: Boolean,
  inactiveActionIcon: {
    type: iconPropType
  },
  activeActionIcon: {
    type: iconPropType
  },
  activeIcon: {
    type: iconPropType
  },
  inactiveIcon: {
    type: iconPropType
  },
  activeText: {
    type: String,
    default: ""
  },
  inactiveText: {
    type: String,
    default: ""
  },
  activeValue: {
    type: [Boolean, String, Number],
    default: true
  },
  inactiveValue: {
    type: [Boolean, String, Number],
    default: false
  },
  name: {
    type: String,
    default: ""
  },
  validateEvent: {
    type: Boolean,
    default: true
  },
  beforeChange: {
    type: definePropType(Function)
  },
  id: String,
  tabindex: {
    type: [String, Number]
  },
  ...useAriaProps(["ariaLabel"])
});
const switchEmits = {
  [UPDATE_MODEL_EVENT]: (val) => isBoolean(val) || isString(val) || isNumber(val),
  [CHANGE_EVENT]: (val) => isBoolean(val) || isString(val) || isNumber(val),
  [INPUT_EVENT]: (val) => isBoolean(val) || isString(val) || isNumber(val)
};
const COMPONENT_NAME$2 = "ElSwitch";
const __default__$1 = defineComponent({
  name: COMPONENT_NAME$2
});
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  ...__default__$1,
  props: switchProps,
  emits: switchEmits,
  setup(__props, { expose, emit }) {
    const props = __props;
    const { formItem } = useFormItem();
    const switchSize = useFormSize();
    const ns = useNamespace("switch");
    const { inputId } = useFormItemInputId(props, {
      formItemContext: formItem
    });
    const switchDisabled = useFormDisabled(computed(() => props.loading));
    const isControlled = ref(props.modelValue !== false);
    const input = ref();
    const core = ref();
    const switchKls = computed(() => [
      ns.b(),
      ns.m(switchSize.value),
      ns.is("disabled", switchDisabled.value),
      ns.is("checked", checked.value)
    ]);
    const labelLeftKls = computed(() => [
      ns.e("label"),
      ns.em("label", "left"),
      ns.is("active", !checked.value)
    ]);
    const labelRightKls = computed(() => [
      ns.e("label"),
      ns.em("label", "right"),
      ns.is("active", checked.value)
    ]);
    const coreStyle = computed(() => ({
      width: addUnit(props.width)
    }));
    watch(() => props.modelValue, () => {
      isControlled.value = true;
    });
    const actualValue = computed(() => {
      return isControlled.value ? props.modelValue : false;
    });
    const checked = computed(() => actualValue.value === props.activeValue);
    if (![props.activeValue, props.inactiveValue].includes(actualValue.value)) {
      emit(UPDATE_MODEL_EVENT, props.inactiveValue);
      emit(CHANGE_EVENT, props.inactiveValue);
      emit(INPUT_EVENT, props.inactiveValue);
    }
    watch(checked, (val) => {
      var _a;
      input.value.checked = val;
      if (props.validateEvent) {
        (_a = formItem == null ? void 0 : formItem.validate) == null ? void 0 : _a.call(formItem, "change").catch((err) => debugWarn());
      }
    });
    const handleChange = () => {
      const val = checked.value ? props.inactiveValue : props.activeValue;
      emit(UPDATE_MODEL_EVENT, val);
      emit(CHANGE_EVENT, val);
      emit(INPUT_EVENT, val);
      nextTick(() => {
        input.value.checked = checked.value;
      });
    };
    const switchValue = () => {
      if (switchDisabled.value)
        return;
      const { beforeChange } = props;
      if (!beforeChange) {
        handleChange();
        return;
      }
      const shouldChange = beforeChange();
      const isPromiseOrBool = [
        isPromise(shouldChange),
        isBoolean(shouldChange)
      ].includes(true);
      if (!isPromiseOrBool) {
        throwError(COMPONENT_NAME$2, "beforeChange must return type `Promise<boolean>` or `boolean`");
      }
      if (isPromise(shouldChange)) {
        shouldChange.then((result) => {
          if (result) {
            handleChange();
          }
        }).catch((e) => {
        });
      } else if (shouldChange) {
        handleChange();
      }
    };
    const focus = () => {
      var _a, _b;
      (_b = (_a = input.value) == null ? void 0 : _a.focus) == null ? void 0 : _b.call(_a);
    };
    expose({
      focus,
      checked
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(unref(switchKls)),
        onClick: withModifiers(switchValue, ["prevent"])
      }, [
        createElementVNode("input", {
          id: unref(inputId),
          ref_key: "input",
          ref: input,
          class: normalizeClass(unref(ns).e("input")),
          type: "checkbox",
          role: "switch",
          "aria-checked": unref(checked),
          "aria-disabled": unref(switchDisabled),
          "aria-label": _ctx.ariaLabel,
          name: _ctx.name,
          "true-value": _ctx.activeValue,
          "false-value": _ctx.inactiveValue,
          disabled: unref(switchDisabled),
          tabindex: _ctx.tabindex,
          onChange: handleChange,
          onKeydown: withKeys(switchValue, ["enter"])
        }, null, 42, ["id", "aria-checked", "aria-disabled", "aria-label", "name", "true-value", "false-value", "disabled", "tabindex", "onKeydown"]),
        !_ctx.inlinePrompt && (_ctx.inactiveIcon || _ctx.inactiveText) ? (openBlock(), createElementBlock("span", {
          key: 0,
          class: normalizeClass(unref(labelLeftKls))
        }, [
          _ctx.inactiveIcon ? (openBlock(), createBlock(unref(ElIcon), { key: 0 }, {
            default: withCtx(() => [
              (openBlock(), createBlock(resolveDynamicComponent(_ctx.inactiveIcon)))
            ]),
            _: 1
          })) : createCommentVNode("v-if", true),
          !_ctx.inactiveIcon && _ctx.inactiveText ? (openBlock(), createElementBlock("span", {
            key: 1,
            "aria-hidden": unref(checked)
          }, toDisplayString(_ctx.inactiveText), 9, ["aria-hidden"])) : createCommentVNode("v-if", true)
        ], 2)) : createCommentVNode("v-if", true),
        createElementVNode("span", {
          ref_key: "core",
          ref: core,
          class: normalizeClass(unref(ns).e("core")),
          style: normalizeStyle(unref(coreStyle))
        }, [
          _ctx.inlinePrompt ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: normalizeClass(unref(ns).e("inner"))
          }, [
            _ctx.activeIcon || _ctx.inactiveIcon ? (openBlock(), createBlock(unref(ElIcon), {
              key: 0,
              class: normalizeClass(unref(ns).is("icon"))
            }, {
              default: withCtx(() => [
                (openBlock(), createBlock(resolveDynamicComponent(unref(checked) ? _ctx.activeIcon : _ctx.inactiveIcon)))
              ]),
              _: 1
            }, 8, ["class"])) : _ctx.activeText || _ctx.inactiveText ? (openBlock(), createElementBlock("span", {
              key: 1,
              class: normalizeClass(unref(ns).is("text")),
              "aria-hidden": !unref(checked)
            }, toDisplayString(unref(checked) ? _ctx.activeText : _ctx.inactiveText), 11, ["aria-hidden"])) : createCommentVNode("v-if", true)
          ], 2)) : createCommentVNode("v-if", true),
          createElementVNode("div", {
            class: normalizeClass(unref(ns).e("action"))
          }, [
            _ctx.loading ? (openBlock(), createBlock(unref(ElIcon), {
              key: 0,
              class: normalizeClass(unref(ns).is("loading"))
            }, {
              default: withCtx(() => [
                createVNode(unref(loading_default))
              ]),
              _: 1
            }, 8, ["class"])) : unref(checked) ? renderSlot(_ctx.$slots, "active-action", { key: 1 }, () => [
              _ctx.activeActionIcon ? (openBlock(), createBlock(unref(ElIcon), { key: 0 }, {
                default: withCtx(() => [
                  (openBlock(), createBlock(resolveDynamicComponent(_ctx.activeActionIcon)))
                ]),
                _: 1
              })) : createCommentVNode("v-if", true)
            ]) : !unref(checked) ? renderSlot(_ctx.$slots, "inactive-action", { key: 2 }, () => [
              _ctx.inactiveActionIcon ? (openBlock(), createBlock(unref(ElIcon), { key: 0 }, {
                default: withCtx(() => [
                  (openBlock(), createBlock(resolveDynamicComponent(_ctx.inactiveActionIcon)))
                ]),
                _: 1
              })) : createCommentVNode("v-if", true)
            ]) : createCommentVNode("v-if", true)
          ], 2)
        ], 6),
        !_ctx.inlinePrompt && (_ctx.activeIcon || _ctx.activeText) ? (openBlock(), createElementBlock("span", {
          key: 1,
          class: normalizeClass(unref(labelRightKls))
        }, [
          _ctx.activeIcon ? (openBlock(), createBlock(unref(ElIcon), { key: 0 }, {
            default: withCtx(() => [
              (openBlock(), createBlock(resolveDynamicComponent(_ctx.activeIcon)))
            ]),
            _: 1
          })) : createCommentVNode("v-if", true),
          !_ctx.activeIcon && _ctx.activeText ? (openBlock(), createElementBlock("span", {
            key: 1,
            "aria-hidden": !unref(checked)
          }, toDisplayString(_ctx.activeText), 9, ["aria-hidden"])) : createCommentVNode("v-if", true)
        ], 2)) : createCommentVNode("v-if", true)
      ], 10, ["onClick"]);
    };
  }
});
var Switch = /* @__PURE__ */ _export_sfc$1(_sfc_main$c, [["__file", "switch.vue"]]);
const ElSwitch = withInstall(Switch);
const _sfc_main$b = {
  __name: "Notifications",
  __ssrInlineRender: true,
  setup(__props) {
    const notifications = reactive({
      orderUpdates: true,
      promotions: false,
      newsletter: true,
      sms: false
    });
    function handleSaveNotifications() {
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ElCard = ElCard;
      const _component_ElSwitch = ElSwitch;
      const _component_ElDivider = ElDivider;
      const _component_ElButton = ElButton;
      const _component_IconSave = Save;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-6" }, _attrs))} data-v-eb6974f4>`);
      _push(ssrRenderComponent(_component_ElCard, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="font-bold font-briscolade" data-v-eb6974f4${_scopeId}>Email Notifications</span><div class="text-gray-500 text-sm" data-v-eb6974f4${_scopeId}> Choose what email notifications you&#39;d like to receive </div>`);
          } else {
            return [
              createVNode("span", { class: "font-bold font-briscolade" }, "Email Notifications"),
              createVNode("div", { class: "text-gray-500 text-sm" }, " Choose what email notifications you'd like to receive ")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="space-y-4" data-v-eb6974f4${_scopeId}><div class="flex items-center justify-between" data-v-eb6974f4${_scopeId}><div data-v-eb6974f4${_scopeId}><span class="font-medium" data-v-eb6974f4${_scopeId}>Order Updates</span><p class="text-sm text-gray-600" data-v-eb6974f4${_scopeId}> Get notified about your order status </p></div>`);
            _push2(ssrRenderComponent(_component_ElSwitch, {
              modelValue: unref(notifications).orderUpdates,
              "onUpdate:modelValue": ($event) => unref(notifications).orderUpdates = $event
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_ElDivider, null, null, _parent2, _scopeId));
            _push2(`<div class="flex items-center justify-between" data-v-eb6974f4${_scopeId}><div data-v-eb6974f4${_scopeId}><span class="font-medium" data-v-eb6974f4${_scopeId}>Promotions &amp; Deals</span><p class="text-sm text-gray-600" data-v-eb6974f4${_scopeId}> Receive emails about sales and special offers </p></div>`);
            _push2(ssrRenderComponent(_component_ElSwitch, {
              modelValue: unref(notifications).promotions,
              "onUpdate:modelValue": ($event) => unref(notifications).promotions = $event
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_ElDivider, null, null, _parent2, _scopeId));
            _push2(`<div class="flex items-center justify-between" data-v-eb6974f4${_scopeId}><div data-v-eb6974f4${_scopeId}><span class="font-medium" data-v-eb6974f4${_scopeId}>Newsletter</span><p class="text-sm text-gray-600" data-v-eb6974f4${_scopeId}> Weekly newsletter with product updates </p></div>`);
            _push2(ssrRenderComponent(_component_ElSwitch, {
              modelValue: unref(notifications).newsletter,
              "onUpdate:modelValue": ($event) => unref(notifications).newsletter = $event
            }, null, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "space-y-4" }, [
                createVNode("div", { class: "flex items-center justify-between" }, [
                  createVNode("div", null, [
                    createVNode("span", { class: "font-medium" }, "Order Updates"),
                    createVNode("p", { class: "text-sm text-gray-600" }, " Get notified about your order status ")
                  ]),
                  createVNode(_component_ElSwitch, {
                    modelValue: unref(notifications).orderUpdates,
                    "onUpdate:modelValue": ($event) => unref(notifications).orderUpdates = $event
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                createVNode(_component_ElDivider),
                createVNode("div", { class: "flex items-center justify-between" }, [
                  createVNode("div", null, [
                    createVNode("span", { class: "font-medium" }, "Promotions & Deals"),
                    createVNode("p", { class: "text-sm text-gray-600" }, " Receive emails about sales and special offers ")
                  ]),
                  createVNode(_component_ElSwitch, {
                    modelValue: unref(notifications).promotions,
                    "onUpdate:modelValue": ($event) => unref(notifications).promotions = $event
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                createVNode(_component_ElDivider),
                createVNode("div", { class: "flex items-center justify-between" }, [
                  createVNode("div", null, [
                    createVNode("span", { class: "font-medium" }, "Newsletter"),
                    createVNode("p", { class: "text-sm text-gray-600" }, " Weekly newsletter with product updates ")
                  ]),
                  createVNode(_component_ElSwitch, {
                    modelValue: unref(notifications).newsletter,
                    "onUpdate:modelValue": ($event) => unref(notifications).newsletter = $event
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_ElCard, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="font-bold" data-v-eb6974f4${_scopeId}>SMS Notifications</span><div class="text-gray-500 text-sm" data-v-eb6974f4${_scopeId}> Manage your text message preferences </div>`);
          } else {
            return [
              createVNode("span", { class: "font-bold" }, "SMS Notifications"),
              createVNode("div", { class: "text-gray-500 text-sm" }, " Manage your text message preferences ")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div data-v-eb6974f4${_scopeId}><div class="flex items-center justify-between" data-v-eb6974f4${_scopeId}><div data-v-eb6974f4${_scopeId}><span class="font-medium" data-v-eb6974f4${_scopeId}>SMS Updates</span><p class="text-sm text-gray-600" data-v-eb6974f4${_scopeId}> Receive important updates via SMS </p></div>`);
            _push2(ssrRenderComponent(_component_ElSwitch, {
              modelValue: unref(notifications).sms,
              "onUpdate:modelValue": ($event) => unref(notifications).sms = $event
            }, null, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode("div", { class: "flex items-center justify-between" }, [
                  createVNode("div", null, [
                    createVNode("span", { class: "font-medium" }, "SMS Updates"),
                    createVNode("p", { class: "text-sm text-gray-600" }, " Receive important updates via SMS ")
                  ]),
                  createVNode(_component_ElSwitch, {
                    modelValue: unref(notifications).sms,
                    "onUpdate:modelValue": ($event) => unref(notifications).sms = $event
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="flex justify-end" data-v-eb6974f4>`);
      _push(ssrRenderComponent(_component_ElButton, {
        type: "primary",
        size: "large",
        onClick: handleSaveNotifications
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span data-v-eb6974f4${_scopeId}>`);
            _push2(ssrRenderComponent(_component_IconSave, {
              class: "mr-2",
              size: "15"
            }, null, _parent2, _scopeId));
            _push2(`</span><span data-v-eb6974f4${_scopeId}>Save Preferences</span>`);
          } else {
            return [
              createVNode("span", null, [
                createVNode(_component_IconSave, {
                  class: "mr-2",
                  size: "15"
                })
              ]),
              createVNode("span", null, "Save Preferences")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/preference/Notifications.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const Notifications = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["__scopeId", "data-v-eb6974f4"]]);
const FOCUSABLE_CHILDREN = "_trap-focus-children";
const FOCUS_STACK = [];
const FOCUS_HANDLER = (e) => {
  if (FOCUS_STACK.length === 0)
    return;
  const focusableElement = FOCUS_STACK[FOCUS_STACK.length - 1][FOCUSABLE_CHILDREN];
  if (focusableElement.length > 0 && e.code === EVENT_CODE.tab) {
    if (focusableElement.length === 1) {
      e.preventDefault();
      if ((void 0).activeElement !== focusableElement[0]) {
        focusableElement[0].focus();
      }
      return;
    }
    const goingBackward = e.shiftKey;
    const isFirst = e.target === focusableElement[0];
    const isLast = e.target === focusableElement[focusableElement.length - 1];
    if (isFirst && goingBackward) {
      e.preventDefault();
      focusableElement[focusableElement.length - 1].focus();
    }
    if (isLast && !goingBackward) {
      e.preventDefault();
      focusableElement[0].focus();
    }
  }
};
const TrapFocus = {
  beforeMount(el) {
    el[FOCUSABLE_CHILDREN] = obtainAllFocusableElements(el);
    FOCUS_STACK.push(el);
    if (FOCUS_STACK.length <= 1) {
      (void 0).addEventListener("keydown", FOCUS_HANDLER);
    }
  },
  updated(el) {
    nextTick(() => {
      el[FOCUSABLE_CHILDREN] = obtainAllFocusableElements(el);
    });
  },
  unmounted() {
    FOCUS_STACK.shift();
    if (FOCUS_STACK.length === 0) {
      (void 0).removeEventListener("keydown", FOCUS_HANDLER);
    }
  }
};
const _sfc_main$a = defineComponent({
  name: "ElMessageBox",
  directives: {
    TrapFocus
  },
  components: {
    ElButton,
    ElFocusTrap,
    ElInput,
    ElOverlay,
    ElIcon,
    ...TypeComponents
  },
  inheritAttrs: false,
  props: {
    buttonSize: {
      type: String,
      validator: isValidComponentSize
    },
    modal: {
      type: Boolean,
      default: true
    },
    lockScroll: {
      type: Boolean,
      default: true
    },
    showClose: {
      type: Boolean,
      default: true
    },
    closeOnClickModal: {
      type: Boolean,
      default: true
    },
    closeOnPressEscape: {
      type: Boolean,
      default: true
    },
    closeOnHashChange: {
      type: Boolean,
      default: true
    },
    center: Boolean,
    draggable: Boolean,
    overflow: Boolean,
    roundButton: {
      default: false,
      type: Boolean
    },
    container: {
      type: String,
      default: "body"
    },
    boxType: {
      type: String,
      default: ""
    }
  },
  emits: ["vanish", "action"],
  setup(props, { emit }) {
    const {
      locale,
      zIndex,
      ns,
      size: btnSize
    } = useGlobalComponentSettings("message-box", computed(() => props.buttonSize));
    const { t } = locale;
    const { nextZIndex } = zIndex;
    const visible = ref(false);
    const state = reactive({
      autofocus: true,
      beforeClose: null,
      callback: null,
      cancelButtonText: "",
      cancelButtonClass: "",
      confirmButtonText: "",
      confirmButtonClass: "",
      customClass: "",
      customStyle: {},
      dangerouslyUseHTMLString: false,
      distinguishCancelAndClose: false,
      icon: "",
      closeIcon: "",
      inputPattern: null,
      inputPlaceholder: "",
      inputType: "text",
      inputValue: "",
      inputValidator: void 0,
      inputErrorMessage: "",
      message: "",
      modalFade: true,
      modalClass: "",
      showCancelButton: false,
      showConfirmButton: true,
      type: "",
      title: void 0,
      showInput: false,
      action: "",
      confirmButtonLoading: false,
      cancelButtonLoading: false,
      confirmButtonLoadingIcon: markRaw(loading_default),
      cancelButtonLoadingIcon: markRaw(loading_default),
      confirmButtonDisabled: false,
      editorErrorMessage: "",
      validateError: false,
      zIndex: nextZIndex()
    });
    const typeClass = computed(() => {
      const type = state.type;
      return { [ns.bm("icon", type)]: type && TypeComponentsMap[type] };
    });
    const contentId = useId();
    const inputId = useId();
    const iconComponent = computed(() => {
      const type = state.type;
      return state.icon || type && TypeComponentsMap[type] || "";
    });
    const hasMessage = computed(() => !!state.message);
    const rootRef = ref();
    const headerRef = ref();
    const focusStartRef = ref();
    const inputRef = ref();
    const confirmRef = ref();
    const confirmButtonClasses = computed(() => state.confirmButtonClass);
    watch(() => state.inputValue, async (val) => {
      await nextTick();
      if (props.boxType === "prompt" && val) {
        validate();
      }
    }, { immediate: true });
    watch(() => visible.value, (val) => {
      var _a, _b;
      if (val) {
        if (props.boxType !== "prompt") {
          if (state.autofocus) {
            focusStartRef.value = (_b = (_a = confirmRef.value) == null ? void 0 : _a.$el) != null ? _b : rootRef.value;
          } else {
            focusStartRef.value = rootRef.value;
          }
        }
        state.zIndex = nextZIndex();
      }
      if (props.boxType !== "prompt")
        return;
      if (val) {
        nextTick().then(() => {
          var _a2;
          if (inputRef.value && inputRef.value.$el) {
            if (state.autofocus) {
              focusStartRef.value = (_a2 = getInputElement()) != null ? _a2 : rootRef.value;
            } else {
              focusStartRef.value = rootRef.value;
            }
          }
        });
      } else {
        state.editorErrorMessage = "";
        state.validateError = false;
      }
    });
    computed(() => props.draggable);
    computed(() => props.overflow);
    function doClose() {
      if (!visible.value)
        return;
      visible.value = false;
      nextTick(() => {
        if (state.action)
          emit("action", state.action);
      });
    }
    const handleWrapperClick = () => {
      if (props.closeOnClickModal) {
        handleAction(state.distinguishCancelAndClose ? "close" : "cancel");
      }
    };
    const overlayEvent = useSameTarget(handleWrapperClick);
    const handleInputEnter = (e) => {
      if (state.inputType !== "textarea") {
        e.preventDefault();
        return handleAction("confirm");
      }
    };
    const handleAction = (action) => {
      var _a;
      if (props.boxType === "prompt" && action === "confirm" && !validate()) {
        return;
      }
      state.action = action;
      if (state.beforeClose) {
        (_a = state.beforeClose) == null ? void 0 : _a.call(state, action, state, doClose);
      } else {
        doClose();
      }
    };
    const validate = () => {
      if (props.boxType === "prompt") {
        const inputPattern = state.inputPattern;
        if (inputPattern && !inputPattern.test(state.inputValue || "")) {
          state.editorErrorMessage = state.inputErrorMessage || t("el.messagebox.error");
          state.validateError = true;
          return false;
        }
        const inputValidator = state.inputValidator;
        if (isFunction(inputValidator)) {
          const validateResult = inputValidator(state.inputValue);
          if (validateResult === false) {
            state.editorErrorMessage = state.inputErrorMessage || t("el.messagebox.error");
            state.validateError = true;
            return false;
          }
          if (isString(validateResult)) {
            state.editorErrorMessage = validateResult;
            state.validateError = true;
            return false;
          }
        }
      }
      state.editorErrorMessage = "";
      state.validateError = false;
      return true;
    };
    const getInputElement = () => {
      var _a, _b;
      const inputRefs = (_a = inputRef.value) == null ? void 0 : _a.$refs;
      return (_b = inputRefs == null ? void 0 : inputRefs.input) != null ? _b : inputRefs == null ? void 0 : inputRefs.textarea;
    };
    const handleClose = () => {
      handleAction("close");
    };
    const onCloseRequested = () => {
      if (props.closeOnPressEscape) {
        handleClose();
      }
    };
    if (props.lockScroll) {
      useLockscreen(visible);
    }
    return {
      ...toRefs(state),
      ns,
      overlayEvent,
      visible,
      hasMessage,
      typeClass,
      contentId,
      inputId,
      btnSize,
      iconComponent,
      confirmButtonClasses,
      rootRef,
      focusStartRef,
      headerRef,
      inputRef,
      confirmRef,
      doClose,
      handleClose,
      onCloseRequested,
      handleWrapperClick,
      handleInputEnter,
      handleAction,
      t
    };
  }
});
function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_icon = resolveComponent("el-icon");
  const _component_el_input = resolveComponent("el-input");
  const _component_el_button = resolveComponent("el-button");
  const _component_el_focus_trap = resolveComponent("el-focus-trap");
  const _component_el_overlay = resolveComponent("el-overlay");
  return openBlock(), createBlock(Transition, {
    name: "fade-in-linear",
    onAfterLeave: ($event) => _ctx.$emit("vanish"),
    persisted: ""
  }, {
    default: withCtx(() => [
      withDirectives(createVNode(_component_el_overlay, {
        "z-index": _ctx.zIndex,
        "overlay-class": [_ctx.ns.is("message-box"), _ctx.modalClass],
        mask: _ctx.modal
      }, {
        default: withCtx(() => [
          createElementVNode("div", {
            role: "dialog",
            "aria-label": _ctx.title,
            "aria-modal": "true",
            "aria-describedby": !_ctx.showInput ? _ctx.contentId : void 0,
            class: normalizeClass(`${_ctx.ns.namespace.value}-overlay-message-box`),
            onClick: _ctx.overlayEvent.onClick,
            onMousedown: _ctx.overlayEvent.onMousedown,
            onMouseup: _ctx.overlayEvent.onMouseup
          }, [
            createVNode(_component_el_focus_trap, {
              loop: "",
              trapped: _ctx.visible,
              "focus-trap-el": _ctx.rootRef,
              "focus-start-el": _ctx.focusStartRef,
              onReleaseRequested: _ctx.onCloseRequested
            }, {
              default: withCtx(() => [
                createElementVNode("div", {
                  ref: "rootRef",
                  class: normalizeClass([
                    _ctx.ns.b(),
                    _ctx.customClass,
                    _ctx.ns.is("draggable", _ctx.draggable),
                    { [_ctx.ns.m("center")]: _ctx.center }
                  ]),
                  style: normalizeStyle(_ctx.customStyle),
                  tabindex: "-1",
                  onClick: withModifiers(() => {
                  }, ["stop"])
                }, [
                  _ctx.title !== null && _ctx.title !== void 0 ? (openBlock(), createElementBlock("div", {
                    key: 0,
                    ref: "headerRef",
                    class: normalizeClass([_ctx.ns.e("header"), { "show-close": _ctx.showClose }])
                  }, [
                    createElementVNode("div", {
                      class: normalizeClass(_ctx.ns.e("title"))
                    }, [
                      _ctx.iconComponent && _ctx.center ? (openBlock(), createBlock(_component_el_icon, {
                        key: 0,
                        class: normalizeClass([_ctx.ns.e("status"), _ctx.typeClass])
                      }, {
                        default: withCtx(() => [
                          (openBlock(), createBlock(resolveDynamicComponent(_ctx.iconComponent)))
                        ]),
                        _: 1
                      }, 8, ["class"])) : createCommentVNode("v-if", true),
                      createElementVNode("span", null, toDisplayString(_ctx.title), 1)
                    ], 2),
                    _ctx.showClose ? (openBlock(), createElementBlock("button", {
                      key: 0,
                      type: "button",
                      class: normalizeClass(_ctx.ns.e("headerbtn")),
                      "aria-label": _ctx.t("el.messagebox.close"),
                      onClick: ($event) => _ctx.handleAction(_ctx.distinguishCancelAndClose ? "close" : "cancel"),
                      onKeydown: withKeys(withModifiers(($event) => _ctx.handleAction(_ctx.distinguishCancelAndClose ? "close" : "cancel"), ["prevent"]), ["enter"])
                    }, [
                      createVNode(_component_el_icon, {
                        class: normalizeClass(_ctx.ns.e("close"))
                      }, {
                        default: withCtx(() => [
                          (openBlock(), createBlock(resolveDynamicComponent(_ctx.closeIcon || "close")))
                        ]),
                        _: 1
                      }, 8, ["class"])
                    ], 42, ["aria-label", "onClick", "onKeydown"])) : createCommentVNode("v-if", true)
                  ], 2)) : createCommentVNode("v-if", true),
                  createElementVNode("div", {
                    id: _ctx.contentId,
                    class: normalizeClass(_ctx.ns.e("content"))
                  }, [
                    createElementVNode("div", {
                      class: normalizeClass(_ctx.ns.e("container"))
                    }, [
                      _ctx.iconComponent && !_ctx.center && _ctx.hasMessage ? (openBlock(), createBlock(_component_el_icon, {
                        key: 0,
                        class: normalizeClass([_ctx.ns.e("status"), _ctx.typeClass])
                      }, {
                        default: withCtx(() => [
                          (openBlock(), createBlock(resolveDynamicComponent(_ctx.iconComponent)))
                        ]),
                        _: 1
                      }, 8, ["class"])) : createCommentVNode("v-if", true),
                      _ctx.hasMessage ? (openBlock(), createElementBlock("div", {
                        key: 1,
                        class: normalizeClass(_ctx.ns.e("message"))
                      }, [
                        renderSlot(_ctx.$slots, "default", {}, () => [
                          !_ctx.dangerouslyUseHTMLString ? (openBlock(), createBlock(resolveDynamicComponent(_ctx.showInput ? "label" : "p"), {
                            key: 0,
                            for: _ctx.showInput ? _ctx.inputId : void 0
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(!_ctx.dangerouslyUseHTMLString ? _ctx.message : ""), 1)
                            ]),
                            _: 1
                          }, 8, ["for"])) : (openBlock(), createBlock(resolveDynamicComponent(_ctx.showInput ? "label" : "p"), {
                            key: 1,
                            for: _ctx.showInput ? _ctx.inputId : void 0,
                            innerHTML: _ctx.message
                          }, null, 8, ["for", "innerHTML"]))
                        ])
                      ], 2)) : createCommentVNode("v-if", true)
                    ], 2),
                    withDirectives(createElementVNode("div", {
                      class: normalizeClass(_ctx.ns.e("input"))
                    }, [
                      createVNode(_component_el_input, {
                        id: _ctx.inputId,
                        ref: "inputRef",
                        modelValue: _ctx.inputValue,
                        "onUpdate:modelValue": ($event) => _ctx.inputValue = $event,
                        type: _ctx.inputType,
                        placeholder: _ctx.inputPlaceholder,
                        "aria-invalid": _ctx.validateError,
                        class: normalizeClass({ invalid: _ctx.validateError }),
                        onKeydown: withKeys(_ctx.handleInputEnter, ["enter"])
                      }, null, 8, ["id", "modelValue", "onUpdate:modelValue", "type", "placeholder", "aria-invalid", "class", "onKeydown"]),
                      createElementVNode("div", {
                        class: normalizeClass(_ctx.ns.e("errormsg")),
                        style: normalizeStyle({
                          visibility: !!_ctx.editorErrorMessage ? "visible" : "hidden"
                        })
                      }, toDisplayString(_ctx.editorErrorMessage), 7)
                    ], 2), [
                      [vShow, _ctx.showInput]
                    ])
                  ], 10, ["id"]),
                  createElementVNode("div", {
                    class: normalizeClass(_ctx.ns.e("btns"))
                  }, [
                    _ctx.showCancelButton ? (openBlock(), createBlock(_component_el_button, {
                      key: 0,
                      loading: _ctx.cancelButtonLoading,
                      "loading-icon": _ctx.cancelButtonLoadingIcon,
                      class: normalizeClass([_ctx.cancelButtonClass]),
                      round: _ctx.roundButton,
                      size: _ctx.btnSize,
                      onClick: ($event) => _ctx.handleAction("cancel"),
                      onKeydown: withKeys(withModifiers(($event) => _ctx.handleAction("cancel"), ["prevent"]), ["enter"])
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(_ctx.cancelButtonText || _ctx.t("el.messagebox.cancel")), 1)
                      ]),
                      _: 1
                    }, 8, ["loading", "loading-icon", "class", "round", "size", "onClick", "onKeydown"])) : createCommentVNode("v-if", true),
                    withDirectives(createVNode(_component_el_button, {
                      ref: "confirmRef",
                      type: "primary",
                      loading: _ctx.confirmButtonLoading,
                      "loading-icon": _ctx.confirmButtonLoadingIcon,
                      class: normalizeClass([_ctx.confirmButtonClasses]),
                      round: _ctx.roundButton,
                      disabled: _ctx.confirmButtonDisabled,
                      size: _ctx.btnSize,
                      onClick: ($event) => _ctx.handleAction("confirm"),
                      onKeydown: withKeys(withModifiers(($event) => _ctx.handleAction("confirm"), ["prevent"]), ["enter"])
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(_ctx.confirmButtonText || _ctx.t("el.messagebox.confirm")), 1)
                      ]),
                      _: 1
                    }, 8, ["loading", "loading-icon", "class", "round", "disabled", "size", "onClick", "onKeydown"]), [
                      [vShow, _ctx.showConfirmButton]
                    ])
                  ], 2)
                ], 14, ["onClick"])
              ]),
              _: 3
            }, 8, ["trapped", "focus-trap-el", "focus-start-el", "onReleaseRequested"])
          ], 42, ["aria-label", "aria-describedby", "onClick", "onMousedown", "onMouseup"])
        ]),
        _: 3
      }, 8, ["z-index", "overlay-class", "mask"]), [
        [vShow, _ctx.visible]
      ])
    ]),
    _: 3
  }, 8, ["onAfterLeave"]);
}
var MessageBoxConstructor = /* @__PURE__ */ _export_sfc$1(_sfc_main$a, [["render", _sfc_render$4], ["__file", "index.vue"]]);
const messageInstance = /* @__PURE__ */ new Map();
const getAppendToElement = (props) => {
  let appendTo = (void 0).body;
  if (props.appendTo) {
    if (isString(props.appendTo)) {
      appendTo = (void 0).querySelector(props.appendTo);
    }
    if (isElement(props.appendTo)) {
      appendTo = props.appendTo;
    }
    if (!isElement(appendTo)) {
      appendTo = (void 0).body;
    }
  }
  return appendTo;
};
const initInstance = (props, container, appContext = null) => {
  const vnode = createVNode(MessageBoxConstructor, props, isFunction(props.message) || isVNode(props.message) ? {
    default: isFunction(props.message) ? props.message : () => props.message
  } : null);
  vnode.appContext = appContext;
  render(vnode, container);
  getAppendToElement(props).appendChild(container.firstElementChild);
  return vnode.component;
};
const genContainer = () => {
  return (void 0).createElement("div");
};
const showMessage = (options, appContext) => {
  const container = genContainer();
  options.onVanish = () => {
    render(null, container);
    messageInstance.delete(vm);
  };
  options.onAction = (action) => {
    const currentMsg = messageInstance.get(vm);
    let resolve;
    if (options.showInput) {
      resolve = { value: vm.inputValue, action };
    } else {
      resolve = action;
    }
    if (options.callback) {
      options.callback(resolve, instance.proxy);
    } else {
      if (action === "cancel" || action === "close") {
        if (options.distinguishCancelAndClose && action !== "cancel") {
          currentMsg.reject("close");
        } else {
          currentMsg.reject("cancel");
        }
      } else {
        currentMsg.resolve(resolve);
      }
    }
  };
  const instance = initInstance(options, container, appContext);
  const vm = instance.proxy;
  for (const prop in options) {
    if (hasOwn(options, prop) && !hasOwn(vm.$props, prop)) {
      if (prop === "closeIcon" && isObject(options[prop])) {
        vm[prop] = markRaw(options[prop]);
      } else {
        vm[prop] = options[prop];
      }
    }
  }
  vm.visible = true;
  return vm;
};
function MessageBox(options, appContext = null) {
  if (!isClient)
    return Promise.reject();
  let callback;
  if (isString(options) || isVNode(options)) {
    options = {
      message: options
    };
  } else {
    callback = options.callback;
  }
  return new Promise((resolve, reject) => {
    const vm = showMessage(options, appContext != null ? appContext : MessageBox._context);
    messageInstance.set(vm, {
      options,
      callback,
      resolve,
      reject
    });
  });
}
const MESSAGE_BOX_VARIANTS = ["alert", "confirm", "prompt"];
const MESSAGE_BOX_DEFAULT_OPTS = {
  alert: { closeOnPressEscape: false, closeOnClickModal: false },
  confirm: { showCancelButton: true },
  prompt: { showCancelButton: true, showInput: true }
};
MESSAGE_BOX_VARIANTS.forEach((boxType) => {
  MessageBox[boxType] = messageBoxFactory(boxType);
});
function messageBoxFactory(boxType) {
  return (message, title, options, appContext) => {
    let titleOrOpts = "";
    if (isObject(title)) {
      options = title;
      titleOrOpts = "";
    } else if (isUndefined(title)) {
      titleOrOpts = "";
    } else {
      titleOrOpts = title;
    }
    return MessageBox(Object.assign({
      title: titleOrOpts,
      message,
      type: "",
      ...MESSAGE_BOX_DEFAULT_OPTS[boxType]
    }, options, {
      boxType
    }), appContext);
  };
}
MessageBox.close = () => {
  messageInstance.forEach((_, vm) => {
    vm.doClose();
  });
  messageInstance.clear();
};
MessageBox._context = null;
const _MessageBox = MessageBox;
_MessageBox.install = (app) => {
  _MessageBox._context = app._context;
  app.config.globalProperties.$msgbox = _MessageBox;
  app.config.globalProperties.$messageBox = _MessageBox;
  app.config.globalProperties.$alert = _MessageBox.alert;
  app.config.globalProperties.$confirm = _MessageBox.confirm;
  app.config.globalProperties.$prompt = _MessageBox.prompt;
};
const ElMessageBox = _MessageBox;
const _sfc_main$9 = {
  __name: "Privacy",
  __ssrInlineRender: true,
  setup(__props) {
    const privacy = reactive({
      profileVisible: true,
      analytics: true,
      ads: false
    });
    function handleDeleteAccount() {
      ElMessageBox.confirm(
        "Are you sure you want to delete your account? This action cannot be undone.",
        "Delete Account",
        {
          confirmButtonText: "Delete",
          cancelButtonText: "Cancel",
          type: "warning"
        }
      ).then(() => {
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ElCard = ElCard;
      const _component_ElSwitch = ElSwitch;
      const _component_ElDivider = ElDivider;
      const _component_ElButton = ElButton;
      const _component_IconLock = Lock;
      const _component_IconShield = Shield;
      const _component_IconDownload = Download;
      const _component_IconTrash2 = Trash2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-6" }, _attrs))} data-v-4e974174>`);
      _push(ssrRenderComponent(_component_ElCard, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="font-bold font-briscolade" data-v-4e974174${_scopeId}>Privacy Settings</span><div class="text-gray-500 text-sm" data-v-4e974174${_scopeId}> Control your privacy and data sharing preferences </div>`);
          } else {
            return [
              createVNode("span", { class: "font-bold font-briscolade" }, "Privacy Settings"),
              createVNode("div", { class: "text-gray-500 text-sm" }, " Control your privacy and data sharing preferences ")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="space-y-4" data-v-4e974174${_scopeId}><div class="flex items-center justify-between" data-v-4e974174${_scopeId}><div data-v-4e974174${_scopeId}><span class="font-medium" data-v-4e974174${_scopeId}>Profile Visibility</span><p class="text-sm text-gray-600" data-v-4e974174${_scopeId}> Make your profile visible to other users </p></div>`);
            _push2(ssrRenderComponent(_component_ElSwitch, {
              modelValue: unref(privacy).profileVisible,
              "onUpdate:modelValue": ($event) => unref(privacy).profileVisible = $event
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_ElDivider, null, null, _parent2, _scopeId));
            _push2(`<div class="flex items-center justify-between" data-v-4e974174${_scopeId}><div data-v-4e974174${_scopeId}><span class="font-medium" data-v-4e974174${_scopeId}>Data Analytics</span><p class="text-sm text-gray-600" data-v-4e974174${_scopeId}> Help improve our service with usage analytics </p></div>`);
            _push2(ssrRenderComponent(_component_ElSwitch, {
              modelValue: unref(privacy).analytics,
              "onUpdate:modelValue": ($event) => unref(privacy).analytics = $event
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_ElDivider, null, null, _parent2, _scopeId));
            _push2(`<div class="flex items-center justify-between" data-v-4e974174${_scopeId}><div data-v-4e974174${_scopeId}><span class="font-medium" data-v-4e974174${_scopeId}>Personalized Ads</span><p class="text-sm text-gray-600" data-v-4e974174${_scopeId}> Show ads based on your interests </p></div>`);
            _push2(ssrRenderComponent(_component_ElSwitch, {
              modelValue: unref(privacy).ads,
              "onUpdate:modelValue": ($event) => unref(privacy).ads = $event
            }, null, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "space-y-4" }, [
                createVNode("div", { class: "flex items-center justify-between" }, [
                  createVNode("div", null, [
                    createVNode("span", { class: "font-medium" }, "Profile Visibility"),
                    createVNode("p", { class: "text-sm text-gray-600" }, " Make your profile visible to other users ")
                  ]),
                  createVNode(_component_ElSwitch, {
                    modelValue: unref(privacy).profileVisible,
                    "onUpdate:modelValue": ($event) => unref(privacy).profileVisible = $event
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                createVNode(_component_ElDivider),
                createVNode("div", { class: "flex items-center justify-between" }, [
                  createVNode("div", null, [
                    createVNode("span", { class: "font-medium" }, "Data Analytics"),
                    createVNode("p", { class: "text-sm text-gray-600" }, " Help improve our service with usage analytics ")
                  ]),
                  createVNode(_component_ElSwitch, {
                    modelValue: unref(privacy).analytics,
                    "onUpdate:modelValue": ($event) => unref(privacy).analytics = $event
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                createVNode(_component_ElDivider),
                createVNode("div", { class: "flex items-center justify-between" }, [
                  createVNode("div", null, [
                    createVNode("span", { class: "font-medium" }, "Personalized Ads"),
                    createVNode("p", { class: "text-sm text-gray-600" }, " Show ads based on your interests ")
                  ]),
                  createVNode(_component_ElSwitch, {
                    modelValue: unref(privacy).ads,
                    "onUpdate:modelValue": ($event) => unref(privacy).ads = $event
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_ElCard, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="font-bold font-briscolade" data-v-4e974174${_scopeId}>Account Security</span><div class="text-gray-500 text-sm" data-v-4e974174${_scopeId}> Manage your account security settings </div>`);
          } else {
            return [
              createVNode("span", { class: "font-bold font-briscolade" }, "Account Security"),
              createVNode("div", { class: "text-gray-500 text-sm" }, " Manage your account security settings ")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="space-y-4" data-v-4e974174${_scopeId}>`);
            _push2(ssrRenderComponent(_component_ElButton, {
              type: "default",
              class: "w-full",
              size: "large"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span data-v-4e974174${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_IconLock, {
                    class: "mr-2",
                    size: "15"
                  }, null, _parent3, _scopeId2));
                  _push3(`</span><span data-v-4e974174${_scopeId2}>Change Password</span>`);
                } else {
                  return [
                    createVNode("span", null, [
                      createVNode(_component_IconLock, {
                        class: "mr-2",
                        size: "15"
                      })
                    ]),
                    createVNode("span", null, "Change Password")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ElButton, {
              type: "default",
              class: "w-full",
              size: "large"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span data-v-4e974174${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_IconShield, {
                    class: "mr-2",
                    size: "15"
                  }, null, _parent3, _scopeId2));
                  _push3(`</span><span data-v-4e974174${_scopeId2}>Enable Two-Factor Authentication</span>`);
                } else {
                  return [
                    createVNode("span", null, [
                      createVNode(_component_IconShield, {
                        class: "mr-2",
                        size: "15"
                      })
                    ]),
                    createVNode("span", null, "Enable Two-Factor Authentication")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ElButton, {
              type: "default",
              class: "w-full",
              size: "large"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span data-v-4e974174${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_IconDownload, {
                    class: "mr-2",
                    size: "15"
                  }, null, _parent3, _scopeId2));
                  _push3(`</span><span data-v-4e974174${_scopeId2}>Download Account Data</span>`);
                } else {
                  return [
                    createVNode("span", null, [
                      createVNode(_component_IconDownload, {
                        class: "mr-2",
                        size: "15"
                      })
                    ]),
                    createVNode("span", null, "Download Account Data")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ElButton, {
              type: "danger",
              class: "w-full",
              size: "large",
              onClick: handleDeleteAccount
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span data-v-4e974174${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_IconTrash2, {
                    class: "mr-2",
                    size: "15"
                  }, null, _parent3, _scopeId2));
                  _push3(`</span><span data-v-4e974174${_scopeId2}>Delete Account</span>`);
                } else {
                  return [
                    createVNode("span", null, [
                      createVNode(_component_IconTrash2, {
                        class: "mr-2",
                        size: "15"
                      })
                    ]),
                    createVNode("span", null, "Delete Account")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "space-y-4" }, [
                createVNode(_component_ElButton, {
                  type: "default",
                  class: "w-full",
                  size: "large"
                }, {
                  default: withCtx(() => [
                    createVNode("span", null, [
                      createVNode(_component_IconLock, {
                        class: "mr-2",
                        size: "15"
                      })
                    ]),
                    createVNode("span", null, "Change Password")
                  ]),
                  _: 1
                }),
                createVNode(_component_ElButton, {
                  type: "default",
                  class: "w-full",
                  size: "large"
                }, {
                  default: withCtx(() => [
                    createVNode("span", null, [
                      createVNode(_component_IconShield, {
                        class: "mr-2",
                        size: "15"
                      })
                    ]),
                    createVNode("span", null, "Enable Two-Factor Authentication")
                  ]),
                  _: 1
                }),
                createVNode(_component_ElButton, {
                  type: "default",
                  class: "w-full",
                  size: "large"
                }, {
                  default: withCtx(() => [
                    createVNode("span", null, [
                      createVNode(_component_IconDownload, {
                        class: "mr-2",
                        size: "15"
                      })
                    ]),
                    createVNode("span", null, "Download Account Data")
                  ]),
                  _: 1
                }),
                createVNode(_component_ElButton, {
                  type: "danger",
                  class: "w-full",
                  size: "large",
                  onClick: handleDeleteAccount
                }, {
                  default: withCtx(() => [
                    createVNode("span", null, [
                      createVNode(_component_IconTrash2, {
                        class: "mr-2",
                        size: "15"
                      })
                    ]),
                    createVNode("span", null, "Delete Account")
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/preference/Privacy.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const Privacy = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__scopeId", "data-v-4e974174"]]);
const tagProps = buildProps({
  type: {
    type: String,
    values: ["primary", "success", "info", "warning", "danger"],
    default: "primary"
  },
  closable: Boolean,
  disableTransitions: Boolean,
  hit: Boolean,
  color: String,
  size: {
    type: String,
    values: componentSizes
  },
  effect: {
    type: String,
    values: ["dark", "light", "plain"],
    default: "light"
  },
  round: Boolean
});
const tagEmits = {
  close: (evt) => evt instanceof MouseEvent,
  click: (evt) => evt instanceof MouseEvent
};
const __default__ = defineComponent({
  name: "ElTag"
});
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: tagProps,
  emits: tagEmits,
  setup(__props, { emit }) {
    const props = __props;
    const tagSize = useFormSize();
    const ns = useNamespace("tag");
    const containerKls = computed(() => {
      const { type, hit, effect, closable, round } = props;
      return [
        ns.b(),
        ns.is("closable", closable),
        ns.m(type || "primary"),
        ns.m(tagSize.value),
        ns.m(effect),
        ns.is("hit", hit),
        ns.is("round", round)
      ];
    });
    const handleClose = (event) => {
      emit("close", event);
    };
    const handleClick = (event) => {
      emit("click", event);
    };
    const handleVNodeMounted = (vnode) => {
      var _a, _b, _c;
      if ((_c = (_b = (_a = vnode == null ? void 0 : vnode.component) == null ? void 0 : _a.subTree) == null ? void 0 : _b.component) == null ? void 0 : _c.bum) {
        vnode.component.subTree.component.bum = null;
      }
    };
    return (_ctx, _cache) => {
      return _ctx.disableTransitions ? (openBlock(), createElementBlock("span", {
        key: 0,
        class: normalizeClass(unref(containerKls)),
        style: normalizeStyle({ backgroundColor: _ctx.color }),
        onClick: handleClick
      }, [
        createElementVNode("span", {
          class: normalizeClass(unref(ns).e("content"))
        }, [
          renderSlot(_ctx.$slots, "default")
        ], 2),
        _ctx.closable ? (openBlock(), createBlock(unref(ElIcon), {
          key: 0,
          class: normalizeClass(unref(ns).e("close")),
          onClick: withModifiers(handleClose, ["stop"])
        }, {
          default: withCtx(() => [
            createVNode(unref(close_default))
          ]),
          _: 1
        }, 8, ["class", "onClick"])) : createCommentVNode("v-if", true)
      ], 6)) : (openBlock(), createBlock(Transition, {
        key: 1,
        name: `${unref(ns).namespace.value}-zoom-in-center`,
        appear: "",
        onVnodeMounted: handleVNodeMounted
      }, {
        default: withCtx(() => [
          createElementVNode("span", {
            class: normalizeClass(unref(containerKls)),
            style: normalizeStyle({ backgroundColor: _ctx.color }),
            onClick: handleClick
          }, [
            createElementVNode("span", {
              class: normalizeClass(unref(ns).e("content"))
            }, [
              renderSlot(_ctx.$slots, "default")
            ], 2),
            _ctx.closable ? (openBlock(), createBlock(unref(ElIcon), {
              key: 0,
              class: normalizeClass(unref(ns).e("close")),
              onClick: withModifiers(handleClose, ["stop"])
            }, {
              default: withCtx(() => [
                createVNode(unref(close_default))
              ]),
              _: 1
            }, 8, ["class", "onClick"])) : createCommentVNode("v-if", true)
          ], 6)
        ]),
        _: 3
      }, 8, ["name"]));
    };
  }
});
var Tag = /* @__PURE__ */ _export_sfc$1(_sfc_main$8, [["__file", "tag.vue"]]);
const ElTag = withInstall(Tag);
const selectGroupKey = Symbol("ElSelectGroup");
const selectKey = Symbol("ElSelect");
const COMPONENT_NAME$1 = "ElOption";
const optionProps = buildProps({
  value: {
    type: [String, Number, Boolean, Object],
    required: true
  },
  label: {
    type: [String, Number]
  },
  created: Boolean,
  disabled: Boolean
});
function useOption(props, states) {
  const select = inject(selectKey);
  if (!select) {
    throwError(COMPONENT_NAME$1, "usage: <el-select><el-option /></el-select/>");
  }
  const selectGroup = inject(selectGroupKey, { disabled: false });
  const itemSelected = computed(() => {
    return contains(castArray(select.props.modelValue), props.value);
  });
  const limitReached = computed(() => {
    var _a;
    if (select.props.multiple) {
      const modelValue = castArray((_a = select.props.modelValue) != null ? _a : []);
      return !itemSelected.value && modelValue.length >= select.props.multipleLimit && select.props.multipleLimit > 0;
    } else {
      return false;
    }
  });
  const currentLabel = computed(() => {
    var _a;
    return (_a = props.label) != null ? _a : isObject(props.value) ? "" : props.value;
  });
  const currentValue = computed(() => {
    return props.value || props.label || "";
  });
  const isDisabled = computed(() => {
    return props.disabled || states.groupDisabled || limitReached.value;
  });
  const instance = getCurrentInstance();
  const contains = (arr = [], target) => {
    if (!isObject(props.value)) {
      return arr && arr.includes(target);
    } else {
      const valueKey = select.props.valueKey;
      return arr && arr.some((item) => {
        return toRaw(get(item, valueKey)) === get(target, valueKey);
      });
    }
  };
  const hoverItem = () => {
    if (!props.disabled && !selectGroup.disabled) {
      select.states.hoveringIndex = select.optionsArray.indexOf(instance.proxy);
    }
  };
  const updateOption = (query) => {
    const regexp = new RegExp(escapeStringRegexp(query), "i");
    states.visible = regexp.test(String(currentLabel.value)) || props.created;
  };
  watch(() => currentLabel.value, () => {
    if (!props.created && !select.props.remote)
      select.setSelected();
  });
  watch(() => props.value, (val, oldVal) => {
    const { remote, valueKey } = select.props;
    const shouldUpdate = remote ? val !== oldVal : !isEqual(val, oldVal);
    if (shouldUpdate) {
      select.onOptionDestroy(oldVal, instance.proxy);
      select.onOptionCreate(instance.proxy);
    }
    if (!props.created && !remote) {
      if (valueKey && isObject(val) && isObject(oldVal) && val[valueKey] === oldVal[valueKey]) {
        return;
      }
      select.setSelected();
    }
  });
  watch(() => selectGroup.disabled, () => {
    states.groupDisabled = selectGroup.disabled;
  }, { immediate: true });
  return {
    select,
    currentLabel,
    currentValue,
    itemSelected,
    isDisabled,
    hoverItem,
    updateOption
  };
}
const _sfc_main$7 = defineComponent({
  name: COMPONENT_NAME$1,
  componentName: COMPONENT_NAME$1,
  props: optionProps,
  setup(props) {
    const ns = useNamespace("select");
    const id = useId();
    const containerKls = computed(() => [
      ns.be("dropdown", "item"),
      ns.is("disabled", unref(isDisabled)),
      ns.is("selected", unref(itemSelected)),
      ns.is("hovering", unref(hover))
    ]);
    const states = reactive({
      index: -1,
      groupDisabled: false,
      visible: true,
      hover: false
    });
    const {
      currentLabel,
      itemSelected,
      isDisabled,
      select,
      hoverItem,
      updateOption
    } = useOption(props, states);
    const { visible, hover } = toRefs(states);
    const vm = getCurrentInstance().proxy;
    select.onOptionCreate(vm);
    function selectOptionClick() {
      if (!isDisabled.value) {
        select.handleOptionSelect(vm);
      }
    }
    return {
      ns,
      id,
      containerKls,
      currentLabel,
      itemSelected,
      isDisabled,
      select,
      visible,
      hover,
      states,
      hoverItem,
      updateOption,
      selectOptionClick
    };
  }
});
function _sfc_render$3(_ctx, _cache) {
  return withDirectives((openBlock(), createElementBlock("li", {
    id: _ctx.id,
    class: normalizeClass(_ctx.containerKls),
    role: "option",
    "aria-disabled": _ctx.isDisabled || void 0,
    "aria-selected": _ctx.itemSelected,
    onMousemove: _ctx.hoverItem,
    onClick: withModifiers(_ctx.selectOptionClick, ["stop"])
  }, [
    renderSlot(_ctx.$slots, "default", {}, () => [
      createElementVNode("span", null, toDisplayString(_ctx.currentLabel), 1)
    ])
  ], 42, ["id", "aria-disabled", "aria-selected", "onMousemove", "onClick"])), [
    [vShow, _ctx.visible]
  ]);
}
var Option = /* @__PURE__ */ _export_sfc$1(_sfc_main$7, [["render", _sfc_render$3], ["__file", "option.vue"]]);
const _sfc_main$6 = defineComponent({
  name: "ElSelectDropdown",
  componentName: "ElSelectDropdown",
  setup() {
    const select = inject(selectKey);
    const ns = useNamespace("select");
    const popperClass = computed(() => select.props.popperClass);
    const isMultiple = computed(() => select.props.multiple);
    const isFitInputWidth = computed(() => select.props.fitInputWidth);
    const minWidth = ref("");
    return {
      ns,
      minWidth,
      popperClass,
      isMultiple,
      isFitInputWidth
    };
  }
});
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass([_ctx.ns.b("dropdown"), _ctx.ns.is("multiple", _ctx.isMultiple), _ctx.popperClass]),
    style: normalizeStyle({ [_ctx.isFitInputWidth ? "width" : "minWidth"]: _ctx.minWidth })
  }, [
    _ctx.$slots.header ? (openBlock(), createElementBlock("div", {
      key: 0,
      class: normalizeClass(_ctx.ns.be("dropdown", "header"))
    }, [
      renderSlot(_ctx.$slots, "header")
    ], 2)) : createCommentVNode("v-if", true),
    renderSlot(_ctx.$slots, "default"),
    _ctx.$slots.footer ? (openBlock(), createElementBlock("div", {
      key: 1,
      class: normalizeClass(_ctx.ns.be("dropdown", "footer"))
    }, [
      renderSlot(_ctx.$slots, "footer")
    ], 2)) : createCommentVNode("v-if", true)
  ], 6);
}
var ElSelectMenu = /* @__PURE__ */ _export_sfc$1(_sfc_main$6, [["render", _sfc_render$2], ["__file", "select-dropdown.vue"]]);
const useSelect = (props, emit) => {
  const { t } = useLocale();
  const contentId = useId();
  const nsSelect = useNamespace("select");
  const nsInput = useNamespace("input");
  const states = reactive({
    inputValue: "",
    options: /* @__PURE__ */ new Map(),
    cachedOptions: /* @__PURE__ */ new Map(),
    optionValues: [],
    selected: [],
    selectionWidth: 0,
    collapseItemWidth: 0,
    selectedLabel: "",
    hoveringIndex: -1,
    previousQuery: null,
    inputHovering: false,
    menuVisibleOnFocus: false,
    isBeforeHide: false
  });
  const selectRef = ref();
  const selectionRef = ref();
  const tooltipRef = ref();
  const tagTooltipRef = ref();
  const inputRef = ref();
  const prefixRef = ref();
  const suffixRef = ref();
  const menuRef = ref();
  const tagMenuRef = ref();
  const collapseItemRef = ref();
  const scrollbarRef = ref();
  const {
    isComposing,
    handleCompositionStart,
    handleCompositionUpdate,
    handleCompositionEnd
  } = useComposition({
    afterComposition: (e) => onInput(e)
  });
  const { wrapperRef, isFocused, handleBlur } = useFocusController(inputRef, {
    beforeFocus() {
      return selectDisabled.value;
    },
    afterFocus() {
      if (props.automaticDropdown && !expanded.value) {
        expanded.value = true;
        states.menuVisibleOnFocus = true;
      }
    },
    beforeBlur(event) {
      var _a, _b;
      return ((_a = tooltipRef.value) == null ? void 0 : _a.isFocusInsideContent(event)) || ((_b = tagTooltipRef.value) == null ? void 0 : _b.isFocusInsideContent(event));
    },
    afterBlur() {
      var _a;
      expanded.value = false;
      states.menuVisibleOnFocus = false;
      if (props.validateEvent) {
        (_a = formItem == null ? void 0 : formItem.validate) == null ? void 0 : _a.call(formItem, "blur").catch((err) => debugWarn());
      }
    }
  });
  const expanded = ref(false);
  const hoverOption = ref();
  const { form, formItem } = useFormItem();
  const { inputId } = useFormItemInputId(props, {
    formItemContext: formItem
  });
  const { valueOnClear, isEmptyValue } = useEmptyValues(props);
  const selectDisabled = computed(() => props.disabled || (form == null ? void 0 : form.disabled));
  const hasModelValue = computed(() => {
    return isArray(props.modelValue) ? props.modelValue.length > 0 : !isEmptyValue(props.modelValue);
  });
  const needStatusIcon = computed(() => {
    var _a;
    return (_a = form == null ? void 0 : form.statusIcon) != null ? _a : false;
  });
  const showClose = computed(() => {
    return props.clearable && !selectDisabled.value && states.inputHovering && hasModelValue.value;
  });
  const iconComponent = computed(() => props.remote && props.filterable && !props.remoteShowSuffix ? "" : props.suffixIcon);
  const iconReverse = computed(() => nsSelect.is("reverse", !!(iconComponent.value && expanded.value)));
  const validateState = computed(() => (formItem == null ? void 0 : formItem.validateState) || "");
  const validateIcon = computed(() => validateState.value && ValidateComponentsMap[validateState.value]);
  const debounce$1 = computed(() => props.remote ? 300 : 0);
  const isRemoteSearchEmpty = computed(() => props.remote && !states.inputValue && states.options.size === 0);
  const emptyText = computed(() => {
    if (props.loading) {
      return props.loadingText || t("el.select.loading");
    } else {
      if (props.filterable && states.inputValue && states.options.size > 0 && filteredOptionsCount.value === 0) {
        return props.noMatchText || t("el.select.noMatch");
      }
      if (states.options.size === 0) {
        return props.noDataText || t("el.select.noData");
      }
    }
    return null;
  });
  const filteredOptionsCount = computed(() => optionsArray.value.filter((option) => option.visible).length);
  const optionsArray = computed(() => {
    const list = Array.from(states.options.values());
    const newList = [];
    states.optionValues.forEach((item) => {
      const index = list.findIndex((i) => i.value === item);
      if (index > -1) {
        newList.push(list[index]);
      }
    });
    return newList.length >= list.length ? newList : list;
  });
  const cachedOptionsArray = computed(() => Array.from(states.cachedOptions.values()));
  const showNewOption = computed(() => {
    const hasExistingOption = optionsArray.value.filter((option) => {
      return !option.created;
    }).some((option) => {
      return option.currentLabel === states.inputValue;
    });
    return props.filterable && props.allowCreate && states.inputValue !== "" && !hasExistingOption;
  });
  const updateOptions = () => {
    if (props.filterable && isFunction(props.filterMethod))
      return;
    if (props.filterable && props.remote && isFunction(props.remoteMethod))
      return;
    optionsArray.value.forEach((option) => {
      var _a;
      (_a = option.updateOption) == null ? void 0 : _a.call(option, states.inputValue);
    });
  };
  const selectSize = useFormSize();
  const collapseTagSize = computed(() => ["small"].includes(selectSize.value) ? "small" : "default");
  const dropdownMenuVisible = computed({
    get() {
      return expanded.value && !isRemoteSearchEmpty.value;
    },
    set(val) {
      expanded.value = val;
    }
  });
  const shouldShowPlaceholder = computed(() => {
    if (props.multiple && !isUndefined(props.modelValue)) {
      return castArray(props.modelValue).length === 0 && !states.inputValue;
    }
    const value = isArray(props.modelValue) ? props.modelValue[0] : props.modelValue;
    return props.filterable || isUndefined(value) ? !states.inputValue : true;
  });
  const currentPlaceholder = computed(() => {
    var _a;
    const _placeholder = (_a = props.placeholder) != null ? _a : t("el.select.placeholder");
    return props.multiple || !hasModelValue.value ? _placeholder : states.selectedLabel;
  });
  const mouseEnterEventName = computed(() => isIOS ? null : "mouseenter");
  watch(() => props.modelValue, (val, oldVal) => {
    if (props.multiple) {
      if (props.filterable && !props.reserveKeyword) {
        states.inputValue = "";
        handleQueryChange("");
      }
    }
    setSelected();
    if (!isEqual(val, oldVal) && props.validateEvent) {
      formItem == null ? void 0 : formItem.validate("change").catch((err) => debugWarn());
    }
  }, {
    flush: "post",
    deep: true
  });
  watch(() => expanded.value, (val) => {
    if (val) {
      handleQueryChange(states.inputValue);
    } else {
      states.inputValue = "";
      states.previousQuery = null;
      states.isBeforeHide = true;
    }
    emit("visible-change", val);
  });
  watch(() => states.options.entries(), () => {
    if (!isClient)
      return;
    setSelected();
    if (props.defaultFirstOption && (props.filterable || props.remote) && filteredOptionsCount.value) {
      checkDefaultFirstOption();
    }
  }, {
    flush: "post"
  });
  watch([() => states.hoveringIndex, optionsArray], ([val]) => {
    if (isNumber(val) && val > -1) {
      hoverOption.value = optionsArray.value[val] || {};
    } else {
      hoverOption.value = {};
    }
    optionsArray.value.forEach((option) => {
      option.hover = hoverOption.value === option;
    });
  });
  watchEffect(() => {
    if (states.isBeforeHide)
      return;
    updateOptions();
  });
  const handleQueryChange = (val) => {
    if (states.previousQuery === val || isComposing.value) {
      return;
    }
    states.previousQuery = val;
    if (props.filterable && isFunction(props.filterMethod)) {
      props.filterMethod(val);
    } else if (props.filterable && props.remote && isFunction(props.remoteMethod)) {
      props.remoteMethod(val);
    }
    if (props.defaultFirstOption && (props.filterable || props.remote) && filteredOptionsCount.value) {
      nextTick(checkDefaultFirstOption);
    } else {
      nextTick(updateHoveringIndex);
    }
  };
  const checkDefaultFirstOption = () => {
    const optionsInDropdown = optionsArray.value.filter((n) => n.visible && !n.disabled && !n.states.groupDisabled);
    const userCreatedOption = optionsInDropdown.find((n) => n.created);
    const firstOriginOption = optionsInDropdown[0];
    const valueList = optionsArray.value.map((item) => item.value);
    states.hoveringIndex = getValueIndex(valueList, userCreatedOption || firstOriginOption);
  };
  const setSelected = () => {
    if (!props.multiple) {
      const value = isArray(props.modelValue) ? props.modelValue[0] : props.modelValue;
      const option = getOption(value);
      states.selectedLabel = option.currentLabel;
      states.selected = [option];
      return;
    } else {
      states.selectedLabel = "";
    }
    const result = [];
    if (!isUndefined(props.modelValue)) {
      castArray(props.modelValue).forEach((value) => {
        result.push(getOption(value));
      });
    }
    states.selected = result;
  };
  const getOption = (value) => {
    let option;
    const isObjectValue = isPlainObject(value);
    for (let i = states.cachedOptions.size - 1; i >= 0; i--) {
      const cachedOption = cachedOptionsArray.value[i];
      const isEqualValue = isObjectValue ? get(cachedOption.value, props.valueKey) === get(value, props.valueKey) : cachedOption.value === value;
      if (isEqualValue) {
        option = {
          value,
          currentLabel: cachedOption.currentLabel,
          get isDisabled() {
            return cachedOption.isDisabled;
          }
        };
        break;
      }
    }
    if (option)
      return option;
    const label = isObjectValue ? value.label : value != null ? value : "";
    const newOption = {
      value,
      currentLabel: label
    };
    return newOption;
  };
  const updateHoveringIndex = () => {
    states.hoveringIndex = optionsArray.value.findIndex((item) => states.selected.some((selected) => getValueKey(selected) === getValueKey(item)));
  };
  const resetSelectionWidth = () => {
    states.selectionWidth = Number.parseFloat((void 0).getComputedStyle(selectionRef.value).width);
  };
  const resetCollapseItemWidth = () => {
    states.collapseItemWidth = collapseItemRef.value.getBoundingClientRect().width;
  };
  const updateTooltip = () => {
    var _a, _b;
    (_b = (_a = tooltipRef.value) == null ? void 0 : _a.updatePopper) == null ? void 0 : _b.call(_a);
  };
  const updateTagTooltip = () => {
    var _a, _b;
    (_b = (_a = tagTooltipRef.value) == null ? void 0 : _a.updatePopper) == null ? void 0 : _b.call(_a);
  };
  const onInputChange = () => {
    if (states.inputValue.length > 0 && !expanded.value) {
      expanded.value = true;
    }
    handleQueryChange(states.inputValue);
  };
  const onInput = (event) => {
    states.inputValue = event.target.value;
    if (props.remote) {
      debouncedOnInputChange();
    } else {
      return onInputChange();
    }
  };
  const debouncedOnInputChange = debounce(() => {
    onInputChange();
  }, debounce$1.value);
  const emitChange = (val) => {
    if (!isEqual(props.modelValue, val)) {
      emit(CHANGE_EVENT, val);
    }
  };
  const getLastNotDisabledIndex = (value) => findLastIndex(value, (it) => {
    const option = states.cachedOptions.get(it);
    return option && !option.disabled && !option.states.groupDisabled;
  });
  const deletePrevTag = (e) => {
    if (!props.multiple)
      return;
    if (e.code === EVENT_CODE.delete)
      return;
    if (e.target.value.length <= 0) {
      const value = castArray(props.modelValue).slice();
      const lastNotDisabledIndex = getLastNotDisabledIndex(value);
      if (lastNotDisabledIndex < 0)
        return;
      const removeTagValue = value[lastNotDisabledIndex];
      value.splice(lastNotDisabledIndex, 1);
      emit(UPDATE_MODEL_EVENT, value);
      emitChange(value);
      emit("remove-tag", removeTagValue);
    }
  };
  const deleteTag = (event, tag) => {
    const index = states.selected.indexOf(tag);
    if (index > -1 && !selectDisabled.value) {
      const value = castArray(props.modelValue).slice();
      value.splice(index, 1);
      emit(UPDATE_MODEL_EVENT, value);
      emitChange(value);
      emit("remove-tag", tag.value);
    }
    event.stopPropagation();
    focus();
  };
  const deleteSelected = (event) => {
    event.stopPropagation();
    const value = props.multiple ? [] : valueOnClear.value;
    if (props.multiple) {
      for (const item of states.selected) {
        if (item.isDisabled)
          value.push(item.value);
      }
    }
    emit(UPDATE_MODEL_EVENT, value);
    emitChange(value);
    states.hoveringIndex = -1;
    expanded.value = false;
    emit("clear");
    focus();
  };
  const handleOptionSelect = (option) => {
    var _a;
    if (props.multiple) {
      const value = castArray((_a = props.modelValue) != null ? _a : []).slice();
      const optionIndex = getValueIndex(value, option);
      if (optionIndex > -1) {
        value.splice(optionIndex, 1);
      } else if (props.multipleLimit <= 0 || value.length < props.multipleLimit) {
        value.push(option.value);
      }
      emit(UPDATE_MODEL_EVENT, value);
      emitChange(value);
      if (option.created) {
        handleQueryChange("");
      }
      if (props.filterable && !props.reserveKeyword) {
        states.inputValue = "";
      }
    } else {
      emit(UPDATE_MODEL_EVENT, option.value);
      emitChange(option.value);
      expanded.value = false;
    }
    focus();
    if (expanded.value)
      return;
    nextTick(() => {
      scrollToOption(option);
    });
  };
  const getValueIndex = (arr, option) => {
    if (isUndefined(option))
      return -1;
    if (!isObject(option.value))
      return arr.indexOf(option.value);
    return arr.findIndex((item) => {
      return isEqual(get(item, props.valueKey), getValueKey(option));
    });
  };
  const scrollToOption = (option) => {
    var _a, _b, _c, _d, _e;
    const targetOption = isArray(option) ? option[0] : option;
    let target = null;
    if (targetOption == null ? void 0 : targetOption.value) {
      const options = optionsArray.value.filter((item) => item.value === targetOption.value);
      if (options.length > 0) {
        target = options[0].$el;
      }
    }
    if (tooltipRef.value && target) {
      const menu = (_d = (_c = (_b = (_a = tooltipRef.value) == null ? void 0 : _a.popperRef) == null ? void 0 : _b.contentRef) == null ? void 0 : _c.querySelector) == null ? void 0 : _d.call(_c, `.${nsSelect.be("dropdown", "wrap")}`);
      if (menu) {
        scrollIntoView(menu, target);
      }
    }
    (_e = scrollbarRef.value) == null ? void 0 : _e.handleScroll();
  };
  const onOptionCreate = (vm) => {
    states.options.set(vm.value, vm);
    states.cachedOptions.set(vm.value, vm);
  };
  const onOptionDestroy = (key, vm) => {
    if (states.options.get(key) === vm) {
      states.options.delete(key);
    }
  };
  const popperRef = computed(() => {
    var _a, _b;
    return (_b = (_a = tooltipRef.value) == null ? void 0 : _a.popperRef) == null ? void 0 : _b.contentRef;
  });
  const handleMenuEnter = () => {
    states.isBeforeHide = false;
    nextTick(() => {
      var _a;
      (_a = scrollbarRef.value) == null ? void 0 : _a.update();
      scrollToOption(states.selected);
    });
  };
  const focus = () => {
    var _a;
    (_a = inputRef.value) == null ? void 0 : _a.focus();
  };
  const blur = () => {
    var _a;
    if (expanded.value) {
      expanded.value = false;
      nextTick(() => {
        var _a2;
        return (_a2 = inputRef.value) == null ? void 0 : _a2.blur();
      });
      return;
    }
    (_a = inputRef.value) == null ? void 0 : _a.blur();
  };
  const handleClearClick = (event) => {
    deleteSelected(event);
  };
  const handleClickOutside = (event) => {
    expanded.value = false;
    if (isFocused.value) {
      const _event = new FocusEvent("focus", event);
      nextTick(() => handleBlur(_event));
    }
  };
  const handleEsc = () => {
    if (states.inputValue.length > 0) {
      states.inputValue = "";
    } else {
      expanded.value = false;
    }
  };
  const toggleMenu = () => {
    if (selectDisabled.value)
      return;
    if (isIOS)
      states.inputHovering = true;
    if (states.menuVisibleOnFocus) {
      states.menuVisibleOnFocus = false;
    } else {
      expanded.value = !expanded.value;
    }
  };
  const selectOption = () => {
    if (!expanded.value) {
      toggleMenu();
    } else {
      const option = optionsArray.value[states.hoveringIndex];
      if (option && !option.isDisabled) {
        handleOptionSelect(option);
      }
    }
  };
  const getValueKey = (item) => {
    return isObject(item.value) ? get(item.value, props.valueKey) : item.value;
  };
  const optionsAllDisabled = computed(() => optionsArray.value.filter((option) => option.visible).every((option) => option.isDisabled));
  const showTagList = computed(() => {
    if (!props.multiple) {
      return [];
    }
    return props.collapseTags ? states.selected.slice(0, props.maxCollapseTags) : states.selected;
  });
  const collapseTagList = computed(() => {
    if (!props.multiple) {
      return [];
    }
    return props.collapseTags ? states.selected.slice(props.maxCollapseTags) : [];
  });
  const navigateOptions = (direction) => {
    if (!expanded.value) {
      expanded.value = true;
      return;
    }
    if (states.options.size === 0 || filteredOptionsCount.value === 0 || isComposing.value)
      return;
    if (!optionsAllDisabled.value) {
      if (direction === "next") {
        states.hoveringIndex++;
        if (states.hoveringIndex === states.options.size) {
          states.hoveringIndex = 0;
        }
      } else if (direction === "prev") {
        states.hoveringIndex--;
        if (states.hoveringIndex < 0) {
          states.hoveringIndex = states.options.size - 1;
        }
      }
      const option = optionsArray.value[states.hoveringIndex];
      if (option.isDisabled || !option.visible) {
        navigateOptions(direction);
      }
      nextTick(() => scrollToOption(hoverOption.value));
    }
  };
  const getGapWidth = () => {
    if (!selectionRef.value)
      return 0;
    const style = (void 0).getComputedStyle(selectionRef.value);
    return Number.parseFloat(style.gap || "6px");
  };
  const tagStyle = computed(() => {
    const gapWidth = getGapWidth();
    const maxWidth = collapseItemRef.value && props.maxCollapseTags === 1 ? states.selectionWidth - states.collapseItemWidth - gapWidth : states.selectionWidth;
    return { maxWidth: `${maxWidth}px` };
  });
  const collapseTagStyle = computed(() => {
    return { maxWidth: `${states.selectionWidth}px` };
  });
  const popupScroll = (data) => {
    emit("popup-scroll", data);
  };
  useResizeObserver(selectionRef, resetSelectionWidth);
  useResizeObserver(menuRef, updateTooltip);
  useResizeObserver(wrapperRef, updateTooltip);
  useResizeObserver(tagMenuRef, updateTagTooltip);
  useResizeObserver(collapseItemRef, resetCollapseItemWidth);
  return {
    inputId,
    contentId,
    nsSelect,
    nsInput,
    states,
    isFocused,
    expanded,
    optionsArray,
    hoverOption,
    selectSize,
    filteredOptionsCount,
    updateTooltip,
    updateTagTooltip,
    debouncedOnInputChange,
    onInput,
    deletePrevTag,
    deleteTag,
    deleteSelected,
    handleOptionSelect,
    scrollToOption,
    hasModelValue,
    shouldShowPlaceholder,
    currentPlaceholder,
    mouseEnterEventName,
    needStatusIcon,
    showClose,
    iconComponent,
    iconReverse,
    validateState,
    validateIcon,
    showNewOption,
    updateOptions,
    collapseTagSize,
    setSelected,
    selectDisabled,
    emptyText,
    handleCompositionStart,
    handleCompositionUpdate,
    handleCompositionEnd,
    onOptionCreate,
    onOptionDestroy,
    handleMenuEnter,
    focus,
    blur,
    handleClearClick,
    handleClickOutside,
    handleEsc,
    toggleMenu,
    selectOption,
    getValueKey,
    navigateOptions,
    dropdownMenuVisible,
    showTagList,
    collapseTagList,
    popupScroll,
    tagStyle,
    collapseTagStyle,
    popperRef,
    inputRef,
    tooltipRef,
    tagTooltipRef,
    prefixRef,
    suffixRef,
    selectRef,
    wrapperRef,
    selectionRef,
    scrollbarRef,
    menuRef,
    tagMenuRef,
    collapseItemRef
  };
};
var ElOptions = defineComponent({
  name: "ElOptions",
  setup(_, { slots }) {
    const select = inject(selectKey);
    let cachedValueList = [];
    return () => {
      var _a, _b;
      const children = (_a = slots.default) == null ? void 0 : _a.call(slots);
      const valueList = [];
      function filterOptions(children2) {
        if (!isArray(children2))
          return;
        children2.forEach((item) => {
          var _a2, _b2, _c, _d;
          const name = (_a2 = (item == null ? void 0 : item.type) || {}) == null ? void 0 : _a2.name;
          if (name === "ElOptionGroup") {
            filterOptions(!isString(item.children) && !isArray(item.children) && isFunction((_b2 = item.children) == null ? void 0 : _b2.default) ? (_c = item.children) == null ? void 0 : _c.default() : item.children);
          } else if (name === "ElOption") {
            valueList.push((_d = item.props) == null ? void 0 : _d.value);
          } else if (isArray(item.children)) {
            filterOptions(item.children);
          }
        });
      }
      if (children.length) {
        filterOptions((_b = children[0]) == null ? void 0 : _b.children);
      }
      if (!isEqual(valueList, cachedValueList)) {
        cachedValueList = valueList;
        if (select) {
          select.states.optionValues = valueList;
        }
      }
      return children;
    };
  }
});
const selectProps = buildProps({
  name: String,
  id: String,
  modelValue: {
    type: definePropType([
      Array,
      String,
      Number,
      Boolean,
      Object
    ]),
    default: void 0
  },
  autocomplete: {
    type: String,
    default: "off"
  },
  automaticDropdown: Boolean,
  size: useSizeProp,
  effect: {
    type: definePropType(String),
    default: "light"
  },
  disabled: Boolean,
  clearable: Boolean,
  filterable: Boolean,
  allowCreate: Boolean,
  loading: Boolean,
  popperClass: {
    type: String,
    default: ""
  },
  popperOptions: {
    type: definePropType(Object),
    default: () => ({})
  },
  remote: Boolean,
  loadingText: String,
  noMatchText: String,
  noDataText: String,
  remoteMethod: Function,
  filterMethod: Function,
  multiple: Boolean,
  multipleLimit: {
    type: Number,
    default: 0
  },
  placeholder: {
    type: String
  },
  defaultFirstOption: Boolean,
  reserveKeyword: {
    type: Boolean,
    default: true
  },
  valueKey: {
    type: String,
    default: "value"
  },
  collapseTags: Boolean,
  collapseTagsTooltip: Boolean,
  maxCollapseTags: {
    type: Number,
    default: 1
  },
  teleported: useTooltipContentProps.teleported,
  persistent: {
    type: Boolean,
    default: true
  },
  clearIcon: {
    type: iconPropType,
    default: circle_close_default
  },
  fitInputWidth: Boolean,
  suffixIcon: {
    type: iconPropType,
    default: arrow_down_default
  },
  tagType: { ...tagProps.type, default: "info" },
  tagEffect: { ...tagProps.effect, default: "light" },
  validateEvent: {
    type: Boolean,
    default: true
  },
  remoteShowSuffix: Boolean,
  showArrow: {
    type: Boolean,
    default: true
  },
  offset: {
    type: Number,
    default: 12
  },
  placement: {
    type: definePropType(String),
    values: placements,
    default: "bottom-start"
  },
  fallbackPlacements: {
    type: definePropType(Array),
    default: ["bottom-start", "top-start", "right", "left"]
  },
  tabindex: {
    type: [String, Number],
    default: 0
  },
  appendTo: useTooltipContentProps.appendTo,
  ...useEmptyValuesProps,
  ...useAriaProps(["ariaLabel"])
});
({
  "popup-scroll": scrollbarEmits.scroll
});
function useCalcInputWidth() {
  const calculatorRef = shallowRef();
  const calculatorWidth = ref(0);
  const MINIMUM_INPUT_WIDTH = 11;
  const inputStyle = computed(() => ({
    minWidth: `${Math.max(calculatorWidth.value, MINIMUM_INPUT_WIDTH)}px`
  }));
  const resetCalculatorWidth = () => {
    var _a, _b;
    calculatorWidth.value = (_b = (_a = calculatorRef.value) == null ? void 0 : _a.getBoundingClientRect().width) != null ? _b : 0;
  };
  useResizeObserver(calculatorRef, resetCalculatorWidth);
  return {
    calculatorRef,
    calculatorWidth,
    inputStyle
  };
}
const COMPONENT_NAME = "ElSelect";
const _sfc_main$5 = defineComponent({
  name: COMPONENT_NAME,
  componentName: COMPONENT_NAME,
  components: {
    ElSelectMenu,
    ElOption: Option,
    ElOptions,
    ElTag,
    ElScrollbar,
    ElTooltip,
    ElIcon
  },
  directives: { ClickOutside },
  props: selectProps,
  emits: [
    UPDATE_MODEL_EVENT,
    CHANGE_EVENT,
    "remove-tag",
    "clear",
    "visible-change",
    "focus",
    "blur",
    "popup-scroll"
  ],
  setup(props, { emit, slots }) {
    const instance = getCurrentInstance();
    instance.appContext.config.warnHandler = (...args) => {
      if (!args[0] || args[0].includes('Slot "default" invoked outside of the render function')) {
        return;
      }
      console.warn(...args);
    };
    const modelValue = computed(() => {
      const { modelValue: rawModelValue, multiple } = props;
      const fallback = multiple ? [] : void 0;
      if (isArray(rawModelValue)) {
        return multiple ? rawModelValue : fallback;
      }
      return multiple ? fallback : rawModelValue;
    });
    const _props = reactive({
      ...toRefs(props),
      modelValue
    });
    const API = useSelect(_props, emit);
    const { calculatorRef, inputStyle } = useCalcInputWidth();
    const flatTreeSelectData = (data) => {
      return data.reduce((acc, item) => {
        acc.push(item);
        if (item.children && item.children.length > 0) {
          acc.push(...flatTreeSelectData(item.children));
        }
        return acc;
      }, []);
    };
    const manuallyRenderSlots = (vnodes) => {
      const children = flattedChildren(vnodes || []);
      children.forEach((item) => {
        var _a;
        if (isObject(item) && (item.type.name === "ElOption" || item.type.name === "ElTree")) {
          const _name = item.type.name;
          if (_name === "ElTree") {
            const treeData = ((_a = item.props) == null ? void 0 : _a.data) || [];
            const flatData = flatTreeSelectData(treeData);
            flatData.forEach((treeItem) => {
              treeItem.currentLabel = treeItem.label || (isObject(treeItem.value) ? "" : treeItem.value);
              API.onOptionCreate(treeItem);
            });
          } else if (_name === "ElOption") {
            const obj = { ...item.props };
            obj.currentLabel = obj.label || (isObject(obj.value) ? "" : obj.value);
            API.onOptionCreate(obj);
          }
        }
      });
    };
    watch(() => {
      var _a;
      const slotsContent = (_a = slots.default) == null ? void 0 : _a.call(slots);
      return slotsContent;
    }, (newSlot) => {
      if (props.persistent) {
        return;
      }
      manuallyRenderSlots(newSlot);
    }, {
      immediate: true
    });
    provide(selectKey, reactive({
      props: _props,
      states: API.states,
      selectRef: API.selectRef,
      optionsArray: API.optionsArray,
      setSelected: API.setSelected,
      handleOptionSelect: API.handleOptionSelect,
      onOptionCreate: API.onOptionCreate,
      onOptionDestroy: API.onOptionDestroy
    }));
    const selectedLabel = computed(() => {
      if (!props.multiple) {
        return API.states.selectedLabel;
      }
      return API.states.selected.map((i) => i.currentLabel);
    });
    return {
      ...API,
      modelValue,
      selectedLabel,
      calculatorRef,
      inputStyle
    };
  }
});
function _sfc_render$1(_ctx, _cache) {
  const _component_el_tag = resolveComponent("el-tag");
  const _component_el_tooltip = resolveComponent("el-tooltip");
  const _component_el_icon = resolveComponent("el-icon");
  const _component_el_option = resolveComponent("el-option");
  const _component_el_options = resolveComponent("el-options");
  const _component_el_scrollbar = resolveComponent("el-scrollbar");
  const _component_el_select_menu = resolveComponent("el-select-menu");
  const _directive_click_outside = resolveDirective("click-outside");
  return withDirectives((openBlock(), createElementBlock("div", {
    ref: "selectRef",
    class: normalizeClass([_ctx.nsSelect.b(), _ctx.nsSelect.m(_ctx.selectSize)]),
    [toHandlerKey(_ctx.mouseEnterEventName)]: ($event) => _ctx.states.inputHovering = true,
    onMouseleave: ($event) => _ctx.states.inputHovering = false
  }, [
    createVNode(_component_el_tooltip, {
      ref: "tooltipRef",
      visible: _ctx.dropdownMenuVisible,
      placement: _ctx.placement,
      teleported: _ctx.teleported,
      "popper-class": [_ctx.nsSelect.e("popper"), _ctx.popperClass],
      "popper-options": _ctx.popperOptions,
      "fallback-placements": _ctx.fallbackPlacements,
      effect: _ctx.effect,
      pure: "",
      trigger: "click",
      transition: `${_ctx.nsSelect.namespace.value}-zoom-in-top`,
      "stop-popper-mouse-event": false,
      "gpu-acceleration": false,
      persistent: _ctx.persistent,
      "append-to": _ctx.appendTo,
      "show-arrow": _ctx.showArrow,
      offset: _ctx.offset,
      onBeforeShow: _ctx.handleMenuEnter,
      onHide: ($event) => _ctx.states.isBeforeHide = false
    }, {
      default: withCtx(() => {
        var _a;
        return [
          createElementVNode("div", {
            ref: "wrapperRef",
            class: normalizeClass([
              _ctx.nsSelect.e("wrapper"),
              _ctx.nsSelect.is("focused", _ctx.isFocused),
              _ctx.nsSelect.is("hovering", _ctx.states.inputHovering),
              _ctx.nsSelect.is("filterable", _ctx.filterable),
              _ctx.nsSelect.is("disabled", _ctx.selectDisabled)
            ]),
            onClick: withModifiers(_ctx.toggleMenu, ["prevent"])
          }, [
            _ctx.$slots.prefix ? (openBlock(), createElementBlock("div", {
              key: 0,
              ref: "prefixRef",
              class: normalizeClass(_ctx.nsSelect.e("prefix"))
            }, [
              renderSlot(_ctx.$slots, "prefix")
            ], 2)) : createCommentVNode("v-if", true),
            createElementVNode("div", {
              ref: "selectionRef",
              class: normalizeClass([
                _ctx.nsSelect.e("selection"),
                _ctx.nsSelect.is("near", _ctx.multiple && !_ctx.$slots.prefix && !!_ctx.states.selected.length)
              ])
            }, [
              _ctx.multiple ? renderSlot(_ctx.$slots, "tag", { key: 0 }, () => [
                (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.showTagList, (item) => {
                  return openBlock(), createElementBlock("div", {
                    key: _ctx.getValueKey(item),
                    class: normalizeClass(_ctx.nsSelect.e("selected-item"))
                  }, [
                    createVNode(_component_el_tag, {
                      closable: !_ctx.selectDisabled && !item.isDisabled,
                      size: _ctx.collapseTagSize,
                      type: _ctx.tagType,
                      effect: _ctx.tagEffect,
                      "disable-transitions": "",
                      style: normalizeStyle(_ctx.tagStyle),
                      onClose: ($event) => _ctx.deleteTag($event, item)
                    }, {
                      default: withCtx(() => [
                        createElementVNode("span", {
                          class: normalizeClass(_ctx.nsSelect.e("tags-text"))
                        }, [
                          renderSlot(_ctx.$slots, "label", {
                            label: item.currentLabel,
                            value: item.value
                          }, () => [
                            createTextVNode(toDisplayString(item.currentLabel), 1)
                          ])
                        ], 2)
                      ]),
                      _: 2
                    }, 1032, ["closable", "size", "type", "effect", "style", "onClose"])
                  ], 2);
                }), 128)),
                _ctx.collapseTags && _ctx.states.selected.length > _ctx.maxCollapseTags ? (openBlock(), createBlock(_component_el_tooltip, {
                  key: 0,
                  ref: "tagTooltipRef",
                  disabled: _ctx.dropdownMenuVisible || !_ctx.collapseTagsTooltip,
                  "fallback-placements": ["bottom", "top", "right", "left"],
                  effect: _ctx.effect,
                  placement: "bottom",
                  teleported: _ctx.teleported
                }, {
                  default: withCtx(() => [
                    createElementVNode("div", {
                      ref: "collapseItemRef",
                      class: normalizeClass(_ctx.nsSelect.e("selected-item"))
                    }, [
                      createVNode(_component_el_tag, {
                        closable: false,
                        size: _ctx.collapseTagSize,
                        type: _ctx.tagType,
                        effect: _ctx.tagEffect,
                        "disable-transitions": "",
                        style: normalizeStyle(_ctx.collapseTagStyle)
                      }, {
                        default: withCtx(() => [
                          createElementVNode("span", {
                            class: normalizeClass(_ctx.nsSelect.e("tags-text"))
                          }, " + " + toDisplayString(_ctx.states.selected.length - _ctx.maxCollapseTags), 3)
                        ]),
                        _: 1
                      }, 8, ["size", "type", "effect", "style"])
                    ], 2)
                  ]),
                  content: withCtx(() => [
                    createElementVNode("div", {
                      ref: "tagMenuRef",
                      class: normalizeClass(_ctx.nsSelect.e("selection"))
                    }, [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.collapseTagList, (item) => {
                        return openBlock(), createElementBlock("div", {
                          key: _ctx.getValueKey(item),
                          class: normalizeClass(_ctx.nsSelect.e("selected-item"))
                        }, [
                          createVNode(_component_el_tag, {
                            class: "in-tooltip",
                            closable: !_ctx.selectDisabled && !item.isDisabled,
                            size: _ctx.collapseTagSize,
                            type: _ctx.tagType,
                            effect: _ctx.tagEffect,
                            "disable-transitions": "",
                            onClose: ($event) => _ctx.deleteTag($event, item)
                          }, {
                            default: withCtx(() => [
                              createElementVNode("span", {
                                class: normalizeClass(_ctx.nsSelect.e("tags-text"))
                              }, [
                                renderSlot(_ctx.$slots, "label", {
                                  label: item.currentLabel,
                                  value: item.value
                                }, () => [
                                  createTextVNode(toDisplayString(item.currentLabel), 1)
                                ])
                              ], 2)
                            ]),
                            _: 2
                          }, 1032, ["closable", "size", "type", "effect", "onClose"])
                        ], 2);
                      }), 128))
                    ], 2)
                  ]),
                  _: 3
                }, 8, ["disabled", "effect", "teleported"])) : createCommentVNode("v-if", true)
              ]) : createCommentVNode("v-if", true),
              createElementVNode("div", {
                class: normalizeClass([
                  _ctx.nsSelect.e("selected-item"),
                  _ctx.nsSelect.e("input-wrapper"),
                  _ctx.nsSelect.is("hidden", !_ctx.filterable)
                ])
              }, [
                withDirectives(createElementVNode("input", {
                  id: _ctx.inputId,
                  ref: "inputRef",
                  "onUpdate:modelValue": ($event) => _ctx.states.inputValue = $event,
                  type: "text",
                  name: _ctx.name,
                  class: normalizeClass([_ctx.nsSelect.e("input"), _ctx.nsSelect.is(_ctx.selectSize)]),
                  disabled: _ctx.selectDisabled,
                  autocomplete: _ctx.autocomplete,
                  style: normalizeStyle(_ctx.inputStyle),
                  tabindex: _ctx.tabindex,
                  role: "combobox",
                  readonly: !_ctx.filterable,
                  spellcheck: "false",
                  "aria-activedescendant": ((_a = _ctx.hoverOption) == null ? void 0 : _a.id) || "",
                  "aria-controls": _ctx.contentId,
                  "aria-expanded": _ctx.dropdownMenuVisible,
                  "aria-label": _ctx.ariaLabel,
                  "aria-autocomplete": "none",
                  "aria-haspopup": "listbox",
                  onKeydown: [
                    withKeys(withModifiers(($event) => _ctx.navigateOptions("next"), ["stop", "prevent"]), ["down"]),
                    withKeys(withModifiers(($event) => _ctx.navigateOptions("prev"), ["stop", "prevent"]), ["up"]),
                    withKeys(withModifiers(_ctx.handleEsc, ["stop", "prevent"]), ["esc"]),
                    withKeys(withModifiers(_ctx.selectOption, ["stop", "prevent"]), ["enter"]),
                    withKeys(withModifiers(_ctx.deletePrevTag, ["stop"]), ["delete"])
                  ],
                  onCompositionstart: _ctx.handleCompositionStart,
                  onCompositionupdate: _ctx.handleCompositionUpdate,
                  onCompositionend: _ctx.handleCompositionEnd,
                  onInput: _ctx.onInput,
                  onClick: withModifiers(_ctx.toggleMenu, ["stop"])
                }, null, 46, ["id", "onUpdate:modelValue", "name", "disabled", "autocomplete", "tabindex", "readonly", "aria-activedescendant", "aria-controls", "aria-expanded", "aria-label", "onKeydown", "onCompositionstart", "onCompositionupdate", "onCompositionend", "onInput", "onClick"]), [
                  [vModelText, _ctx.states.inputValue]
                ]),
                _ctx.filterable ? (openBlock(), createElementBlock("span", {
                  key: 0,
                  ref: "calculatorRef",
                  "aria-hidden": "true",
                  class: normalizeClass(_ctx.nsSelect.e("input-calculator")),
                  textContent: toDisplayString(_ctx.states.inputValue)
                }, null, 10, ["textContent"])) : createCommentVNode("v-if", true)
              ], 2),
              _ctx.shouldShowPlaceholder ? (openBlock(), createElementBlock("div", {
                key: 1,
                class: normalizeClass([
                  _ctx.nsSelect.e("selected-item"),
                  _ctx.nsSelect.e("placeholder"),
                  _ctx.nsSelect.is("transparent", !_ctx.hasModelValue || _ctx.expanded && !_ctx.states.inputValue)
                ])
              }, [
                _ctx.hasModelValue ? renderSlot(_ctx.$slots, "label", {
                  key: 0,
                  label: _ctx.currentPlaceholder,
                  value: _ctx.modelValue
                }, () => [
                  createElementVNode("span", null, toDisplayString(_ctx.currentPlaceholder), 1)
                ]) : (openBlock(), createElementBlock("span", { key: 1 }, toDisplayString(_ctx.currentPlaceholder), 1))
              ], 2)) : createCommentVNode("v-if", true)
            ], 2),
            createElementVNode("div", {
              ref: "suffixRef",
              class: normalizeClass(_ctx.nsSelect.e("suffix"))
            }, [
              _ctx.iconComponent && !_ctx.showClose ? (openBlock(), createBlock(_component_el_icon, {
                key: 0,
                class: normalizeClass([_ctx.nsSelect.e("caret"), _ctx.nsSelect.e("icon"), _ctx.iconReverse])
              }, {
                default: withCtx(() => [
                  (openBlock(), createBlock(resolveDynamicComponent(_ctx.iconComponent)))
                ]),
                _: 1
              }, 8, ["class"])) : createCommentVNode("v-if", true),
              _ctx.showClose && _ctx.clearIcon ? (openBlock(), createBlock(_component_el_icon, {
                key: 1,
                class: normalizeClass([
                  _ctx.nsSelect.e("caret"),
                  _ctx.nsSelect.e("icon"),
                  _ctx.nsSelect.e("clear")
                ]),
                onClick: _ctx.handleClearClick
              }, {
                default: withCtx(() => [
                  (openBlock(), createBlock(resolveDynamicComponent(_ctx.clearIcon)))
                ]),
                _: 1
              }, 8, ["class", "onClick"])) : createCommentVNode("v-if", true),
              _ctx.validateState && _ctx.validateIcon && _ctx.needStatusIcon ? (openBlock(), createBlock(_component_el_icon, {
                key: 2,
                class: normalizeClass([
                  _ctx.nsInput.e("icon"),
                  _ctx.nsInput.e("validateIcon"),
                  _ctx.nsInput.is("loading", _ctx.validateState === "validating")
                ])
              }, {
                default: withCtx(() => [
                  (openBlock(), createBlock(resolveDynamicComponent(_ctx.validateIcon)))
                ]),
                _: 1
              }, 8, ["class"])) : createCommentVNode("v-if", true)
            ], 2)
          ], 10, ["onClick"])
        ];
      }),
      content: withCtx(() => [
        createVNode(_component_el_select_menu, { ref: "menuRef" }, {
          default: withCtx(() => [
            _ctx.$slots.header ? (openBlock(), createElementBlock("div", {
              key: 0,
              class: normalizeClass(_ctx.nsSelect.be("dropdown", "header")),
              onClick: withModifiers(() => {
              }, ["stop"])
            }, [
              renderSlot(_ctx.$slots, "header")
            ], 10, ["onClick"])) : createCommentVNode("v-if", true),
            withDirectives(createVNode(_component_el_scrollbar, {
              id: _ctx.contentId,
              ref: "scrollbarRef",
              tag: "ul",
              "wrap-class": _ctx.nsSelect.be("dropdown", "wrap"),
              "view-class": _ctx.nsSelect.be("dropdown", "list"),
              class: normalizeClass([_ctx.nsSelect.is("empty", _ctx.filteredOptionsCount === 0)]),
              role: "listbox",
              "aria-label": _ctx.ariaLabel,
              "aria-orientation": "vertical",
              onScroll: _ctx.popupScroll
            }, {
              default: withCtx(() => [
                _ctx.showNewOption ? (openBlock(), createBlock(_component_el_option, {
                  key: 0,
                  value: _ctx.states.inputValue,
                  created: true
                }, null, 8, ["value"])) : createCommentVNode("v-if", true),
                createVNode(_component_el_options, null, {
                  default: withCtx(() => [
                    renderSlot(_ctx.$slots, "default")
                  ]),
                  _: 3
                })
              ]),
              _: 3
            }, 8, ["id", "wrap-class", "view-class", "class", "aria-label", "onScroll"]), [
              [vShow, _ctx.states.options.size > 0 && !_ctx.loading]
            ]),
            _ctx.$slots.loading && _ctx.loading ? (openBlock(), createElementBlock("div", {
              key: 1,
              class: normalizeClass(_ctx.nsSelect.be("dropdown", "loading"))
            }, [
              renderSlot(_ctx.$slots, "loading")
            ], 2)) : _ctx.loading || _ctx.filteredOptionsCount === 0 ? (openBlock(), createElementBlock("div", {
              key: 2,
              class: normalizeClass(_ctx.nsSelect.be("dropdown", "empty"))
            }, [
              renderSlot(_ctx.$slots, "empty", {}, () => [
                createElementVNode("span", null, toDisplayString(_ctx.emptyText), 1)
              ])
            ], 2)) : createCommentVNode("v-if", true),
            _ctx.$slots.footer ? (openBlock(), createElementBlock("div", {
              key: 3,
              class: normalizeClass(_ctx.nsSelect.be("dropdown", "footer")),
              onClick: withModifiers(() => {
              }, ["stop"])
            }, [
              renderSlot(_ctx.$slots, "footer")
            ], 10, ["onClick"])) : createCommentVNode("v-if", true)
          ]),
          _: 3
        }, 512)
      ]),
      _: 3
    }, 8, ["visible", "placement", "teleported", "popper-class", "popper-options", "fallback-placements", "effect", "transition", "persistent", "append-to", "show-arrow", "offset", "onBeforeShow", "onHide"])
  ], 16, ["onMouseleave"])), [
    [_directive_click_outside, _ctx.handleClickOutside, _ctx.popperRef]
  ]);
}
var Select = /* @__PURE__ */ _export_sfc$1(_sfc_main$5, [["render", _sfc_render$1], ["__file", "select.vue"]]);
const _sfc_main$4 = defineComponent({
  name: "ElOptionGroup",
  componentName: "ElOptionGroup",
  props: {
    label: String,
    disabled: Boolean
  },
  setup(props) {
    const ns = useNamespace("select");
    const groupRef = ref();
    const instance = getCurrentInstance();
    const children = ref([]);
    provide(selectGroupKey, reactive({
      ...toRefs(props)
    }));
    const visible = computed(() => children.value.some((option) => option.visible === true));
    const isOption = (node) => {
      var _a;
      return node.type.name === "ElOption" && !!((_a = node.component) == null ? void 0 : _a.proxy);
    };
    const flattedChildren2 = (node) => {
      const nodes = castArray(node);
      const children2 = [];
      nodes.forEach((child) => {
        var _a;
        if (!isVNode(child))
          return;
        if (isOption(child)) {
          children2.push(child.component.proxy);
        } else if (isArray(child.children) && child.children.length) {
          children2.push(...flattedChildren2(child.children));
        } else if ((_a = child.component) == null ? void 0 : _a.subTree) {
          children2.push(...flattedChildren2(child.component.subTree));
        }
      });
      return children2;
    };
    const updateChildren = () => {
      children.value = flattedChildren2(instance.subTree);
    };
    useMutationObserver(groupRef, updateChildren, {
      attributes: true,
      subtree: true,
      childList: true
    });
    return {
      groupRef,
      visible,
      ns
    };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return withDirectives((openBlock(), createElementBlock("ul", {
    ref: "groupRef",
    class: normalizeClass(_ctx.ns.be("group", "wrap"))
  }, [
    createElementVNode("li", {
      class: normalizeClass(_ctx.ns.be("group", "title"))
    }, toDisplayString(_ctx.label), 3),
    createElementVNode("li", null, [
      createElementVNode("ul", {
        class: normalizeClass(_ctx.ns.b("group"))
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 2)
    ])
  ], 2)), [
    [vShow, _ctx.visible]
  ]);
}
var OptionGroup = /* @__PURE__ */ _export_sfc$1(_sfc_main$4, [["render", _sfc_render], ["__file", "option-group.vue"]]);
const ElSelect = withInstall(Select, {
  Option,
  OptionGroup
});
const ElOption = withNoopInstall(Option);
withNoopInstall(OptionGroup);
const _sfc_main$3 = {
  __name: "Payment",
  __ssrInlineRender: true,
  setup(__props) {
    const payment = reactive({
      cards: [
        {
          type: "VISA",
          last4: "4242",
          expires: "12/25",
          default: true,
          color: "blue"
        },
        {
          type: "MC",
          last4: "8888",
          expires: "08/26",
          default: false,
          color: "red"
        }
      ],
      billing: {
        country: "us",
        state: "California",
        address: "123 Main Street",
        city: "San Francisco",
        zip: "94102"
      }
    });
    function handleSavePayment() {
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ElCard = ElCard;
      const _component_ElTag = ElTag;
      const _component_ElButton = ElButton;
      const _component_IconCreditCard = CreditCard;
      const _component_ElForm = ElForm;
      const _component_ElFormItem = ElFormItem;
      const _component_ElSelect = ElSelect;
      const _component_ElOption = ElOption;
      const _component_ElInput = ElInput;
      const _component_IconSave = Save;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-6" }, _attrs))} data-v-38a4bf20>`);
      _push(ssrRenderComponent(_component_ElCard, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="font-bold font-briscolade" data-v-38a4bf20${_scopeId}>Payment Methods</span><div class="text-gray-500 text-sm" data-v-38a4bf20${_scopeId}> Manage your saved payment methods </div>`);
          } else {
            return [
              createVNode("span", { class: "font-bold font-briscolade" }, "Payment Methods"),
              createVNode("div", { class: "text-gray-500 text-sm" }, " Manage your saved payment methods ")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="space-y-4" data-v-38a4bf20${_scopeId}><!--[-->`);
            ssrRenderList(unref(payment).cards, (card) => {
              _push2(`<div class="border rounded-lg p-4 flex items-center justify-between" data-v-38a4bf20${_scopeId}><div class="flex items-center gap-3" data-v-38a4bf20${_scopeId}><div class="${ssrRenderClass(`w-12 h-8 rounded flex items-center justify-center text-white text-xs font-bold mr-2 bg-${card.color}-600`)}" data-v-38a4bf20${_scopeId}>${ssrInterpolate(card.type)}</div><div data-v-38a4bf20${_scopeId}><p class="font-medium" data-v-38a4bf20${_scopeId}> \u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022 ${ssrInterpolate(card.last4)}</p><p class="text-sm text-gray-600" data-v-38a4bf20${_scopeId}> Expires ${ssrInterpolate(card.expires)}</p></div></div>`);
              if (card.default) {
                _push2(ssrRenderComponent(_component_ElTag, { type: "success" }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`Default`);
                    } else {
                      return [
                        createTextVNode("Default")
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              } else {
                _push2(ssrRenderComponent(_component_ElButton, {
                  type: "default",
                  size: "small",
                  class: "remove"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`Remove`);
                    } else {
                      return [
                        createTextVNode("Remove")
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              }
              _push2(`</div>`);
            });
            _push2(`<!--]-->`);
            _push2(ssrRenderComponent(_component_ElButton, {
              type: "default",
              class: "w-full add-payment",
              size: "large"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_IconCreditCard, {
                    class: "mr-2",
                    size: "15"
                  }, null, _parent3, _scopeId2));
                  _push3(` Add New Payment Method `);
                } else {
                  return [
                    createVNode(_component_IconCreditCard, {
                      class: "mr-2",
                      size: "15"
                    }),
                    createTextVNode(" Add New Payment Method ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "space-y-4" }, [
                (openBlock(true), createBlock(Fragment, null, renderList(unref(payment).cards, (card) => {
                  return openBlock(), createBlock("div", {
                    key: card.last4,
                    class: "border rounded-lg p-4 flex items-center justify-between"
                  }, [
                    createVNode("div", { class: "flex items-center gap-3" }, [
                      createVNode("div", {
                        class: `w-12 h-8 rounded flex items-center justify-center text-white text-xs font-bold mr-2 bg-${card.color}-600`
                      }, toDisplayString(card.type), 3),
                      createVNode("div", null, [
                        createVNode("p", { class: "font-medium" }, " \u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022 " + toDisplayString(card.last4), 1),
                        createVNode("p", { class: "text-sm text-gray-600" }, " Expires " + toDisplayString(card.expires), 1)
                      ])
                    ]),
                    card.default ? (openBlock(), createBlock(_component_ElTag, {
                      key: 0,
                      type: "success"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Default")
                      ]),
                      _: 1
                    })) : (openBlock(), createBlock(_component_ElButton, {
                      key: 1,
                      type: "default",
                      size: "small",
                      class: "remove"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Remove")
                      ]),
                      _: 1
                    }))
                  ]);
                }), 128)),
                createVNode(_component_ElButton, {
                  type: "default",
                  class: "w-full add-payment",
                  size: "large"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_IconCreditCard, {
                      class: "mr-2",
                      size: "15"
                    }),
                    createTextVNode(" Add New Payment Method ")
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_ElCard, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="font-bold font-briscolade" data-v-38a4bf20${_scopeId}>Billing Address</span><div class="text-gray-500 text-sm" data-v-38a4bf20${_scopeId}> Update your billing information </div>`);
          } else {
            return [
              createVNode("span", { class: "font-bold font-briscolade" }, "Billing Address"),
              createVNode("div", { class: "text-gray-500 text-sm" }, " Update your billing information ")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="space-y-4" data-v-38a4bf20${_scopeId}>`);
            _push2(ssrRenderComponent(_component_ElForm, {
              "label-position": "top",
              class: "grid grid-cols-1"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="grid grid-cols-1 md:grid-cols-2 gap-4" data-v-38a4bf20${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_ElFormItem, { label: "Country" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_ElSelect, {
                          modelValue: unref(payment).billing.country,
                          "onUpdate:modelValue": ($event) => unref(payment).billing.country = $event,
                          size: "large"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_ElOption, {
                                label: "United States",
                                value: "us"
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_ElOption, {
                                label: "Canada",
                                value: "ca"
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_ElOption, {
                                label: "United Kingdom",
                                value: "uk"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_ElOption, {
                                  label: "United States",
                                  value: "us"
                                }),
                                createVNode(_component_ElOption, {
                                  label: "Canada",
                                  value: "ca"
                                }),
                                createVNode(_component_ElOption, {
                                  label: "United Kingdom",
                                  value: "uk"
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_ElSelect, {
                            modelValue: unref(payment).billing.country,
                            "onUpdate:modelValue": ($event) => unref(payment).billing.country = $event,
                            size: "large"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_ElOption, {
                                label: "United States",
                                value: "us"
                              }),
                              createVNode(_component_ElOption, {
                                label: "Canada",
                                value: "ca"
                              }),
                              createVNode(_component_ElOption, {
                                label: "United Kingdom",
                                value: "uk"
                              })
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_ElFormItem, { label: "State" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_ElInput, {
                          modelValue: unref(payment).billing.state,
                          "onUpdate:modelValue": ($event) => unref(payment).billing.state = $event,
                          size: "large"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_ElInput, {
                            modelValue: unref(payment).billing.state,
                            "onUpdate:modelValue": ($event) => unref(payment).billing.state = $event,
                            size: "large"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                  _push3(ssrRenderComponent(_component_ElFormItem, { label: "Address" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_ElInput, {
                          modelValue: unref(payment).billing.address,
                          "onUpdate:modelValue": ($event) => unref(payment).billing.address = $event,
                          size: "large"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_ElInput, {
                            modelValue: unref(payment).billing.address,
                            "onUpdate:modelValue": ($event) => unref(payment).billing.address = $event,
                            size: "large"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="grid grid-cols-1 md:grid-cols-2 gap-4" data-v-38a4bf20${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_ElFormItem, { label: "City" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_ElInput, {
                          modelValue: unref(payment).billing.city,
                          "onUpdate:modelValue": ($event) => unref(payment).billing.city = $event,
                          size: "large"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_ElInput, {
                            modelValue: unref(payment).billing.city,
                            "onUpdate:modelValue": ($event) => unref(payment).billing.city = $event,
                            size: "large"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_ElFormItem, { label: "ZIP Code" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_ElInput, {
                          modelValue: unref(payment).billing.zip,
                          "onUpdate:modelValue": ($event) => unref(payment).billing.zip = $event,
                          size: "large"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_ElInput, {
                            modelValue: unref(payment).billing.zip,
                            "onUpdate:modelValue": ($event) => unref(payment).billing.zip = $event,
                            size: "large"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-4" }, [
                      createVNode(_component_ElFormItem, { label: "Country" }, {
                        default: withCtx(() => [
                          createVNode(_component_ElSelect, {
                            modelValue: unref(payment).billing.country,
                            "onUpdate:modelValue": ($event) => unref(payment).billing.country = $event,
                            size: "large"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_ElOption, {
                                label: "United States",
                                value: "us"
                              }),
                              createVNode(_component_ElOption, {
                                label: "Canada",
                                value: "ca"
                              }),
                              createVNode(_component_ElOption, {
                                label: "United Kingdom",
                                value: "uk"
                              })
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_ElFormItem, { label: "State" }, {
                        default: withCtx(() => [
                          createVNode(_component_ElInput, {
                            modelValue: unref(payment).billing.state,
                            "onUpdate:modelValue": ($event) => unref(payment).billing.state = $event,
                            size: "large"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode(_component_ElFormItem, { label: "Address" }, {
                      default: withCtx(() => [
                        createVNode(_component_ElInput, {
                          modelValue: unref(payment).billing.address,
                          "onUpdate:modelValue": ($event) => unref(payment).billing.address = $event,
                          size: "large"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-4" }, [
                      createVNode(_component_ElFormItem, { label: "City" }, {
                        default: withCtx(() => [
                          createVNode(_component_ElInput, {
                            modelValue: unref(payment).billing.city,
                            "onUpdate:modelValue": ($event) => unref(payment).billing.city = $event,
                            size: "large"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_ElFormItem, { label: "ZIP Code" }, {
                        default: withCtx(() => [
                          createVNode(_component_ElInput, {
                            modelValue: unref(payment).billing.zip,
                            "onUpdate:modelValue": ($event) => unref(payment).billing.zip = $event,
                            size: "large"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      })
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "space-y-4" }, [
                createVNode(_component_ElForm, {
                  "label-position": "top",
                  class: "grid grid-cols-1"
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-4" }, [
                      createVNode(_component_ElFormItem, { label: "Country" }, {
                        default: withCtx(() => [
                          createVNode(_component_ElSelect, {
                            modelValue: unref(payment).billing.country,
                            "onUpdate:modelValue": ($event) => unref(payment).billing.country = $event,
                            size: "large"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_ElOption, {
                                label: "United States",
                                value: "us"
                              }),
                              createVNode(_component_ElOption, {
                                label: "Canada",
                                value: "ca"
                              }),
                              createVNode(_component_ElOption, {
                                label: "United Kingdom",
                                value: "uk"
                              })
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_ElFormItem, { label: "State" }, {
                        default: withCtx(() => [
                          createVNode(_component_ElInput, {
                            modelValue: unref(payment).billing.state,
                            "onUpdate:modelValue": ($event) => unref(payment).billing.state = $event,
                            size: "large"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode(_component_ElFormItem, { label: "Address" }, {
                      default: withCtx(() => [
                        createVNode(_component_ElInput, {
                          modelValue: unref(payment).billing.address,
                          "onUpdate:modelValue": ($event) => unref(payment).billing.address = $event,
                          size: "large"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-4" }, [
                      createVNode(_component_ElFormItem, { label: "City" }, {
                        default: withCtx(() => [
                          createVNode(_component_ElInput, {
                            modelValue: unref(payment).billing.city,
                            "onUpdate:modelValue": ($event) => unref(payment).billing.city = $event,
                            size: "large"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_ElFormItem, { label: "ZIP Code" }, {
                        default: withCtx(() => [
                          createVNode(_component_ElInput, {
                            modelValue: unref(payment).billing.zip,
                            "onUpdate:modelValue": ($event) => unref(payment).billing.zip = $event,
                            size: "large"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      })
                    ])
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="flex justify-end" data-v-38a4bf20>`);
      _push(ssrRenderComponent(_component_ElButton, {
        type: "primary",
        size: "large",
        class: "save-button",
        onClick: handleSavePayment
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_IconSave, {
              class: "mr-2",
              size: "15"
            }, null, _parent2, _scopeId));
            _push2(` Save Payment Info `);
          } else {
            return [
              createVNode(_component_IconSave, {
                class: "mr-2",
                size: "15"
              }),
              createTextVNode(" Save Payment Info ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/preference/Payment.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const Payment = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-38a4bf20"]]);
const _sfc_main$2 = {
  __name: "Shipping",
  __ssrInlineRender: true,
  setup(__props) {
    const shipping = reactive({
      addresses: [
        {
          label: "Home",
          name: "John Doe",
          address: "123 Main Street",
          city: "San Francisco",
          zip: "94102",
          country: "United States",
          default: true
        },
        {
          label: "Work",
          name: "John Doe",
          address: "456 Business Ave",
          city: "San Francisco",
          zip: "94105",
          country: "United States",
          default: false
        }
      ],
      preferences: {
        speed: "standard",
        instructions: true
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ElCard = ElCard;
      const _component_ElTag = ElTag;
      const _component_ElButton = ElButton;
      const _component_IconEdit = SquarePen;
      const _component_IconMapPin = MapPin;
      const _component_ElFormItem = ElFormItem;
      const _component_ElSelect = ElSelect;
      const _component_ElOption = ElOption;
      const _component_ElSwitch = ElSwitch;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-6" }, _attrs))} data-v-60713cb6>`);
      _push(ssrRenderComponent(_component_ElCard, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="font-bold" data-v-60713cb6${_scopeId}>Shipping Addresses</span><div class="text-gray-500 text-sm" data-v-60713cb6${_scopeId}>Manage your shipping addresses</div>`);
          } else {
            return [
              createVNode("span", { class: "font-bold" }, "Shipping Addresses"),
              createVNode("div", { class: "text-gray-500 text-sm" }, "Manage your shipping addresses")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="space-y-4" data-v-60713cb6${_scopeId}><!--[-->`);
            ssrRenderList(unref(shipping).addresses, (address) => {
              _push2(`<div class="border rounded-lg p-4" data-v-60713cb6${_scopeId}><div class="flex items-start justify-between mb-2" data-v-60713cb6${_scopeId}><div data-v-60713cb6${_scopeId}><p class="font-medium" data-v-60713cb6${_scopeId}>${ssrInterpolate(address.label)}</p>`);
              if (address.default) {
                _push2(ssrRenderComponent(_component_ElTag, {
                  type: "success",
                  class: "text-xs"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`Default`);
                    } else {
                      return [
                        createTextVNode("Default")
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
              _push2(ssrRenderComponent(_component_ElButton, {
                type: "text",
                size: "small",
                class: "edit"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_IconEdit, {
                      class: "mr-2",
                      size: "15 "
                    }, null, _parent3, _scopeId2));
                    _push3(` Edit `);
                  } else {
                    return [
                      createVNode(_component_IconEdit, {
                        class: "mr-2",
                        size: "15 "
                      }),
                      createTextVNode(" Edit ")
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div><div class="text-sm text-gray-600" data-v-60713cb6${_scopeId}><p data-v-60713cb6${_scopeId}>${ssrInterpolate(address.name)}</p><p data-v-60713cb6${_scopeId}>${ssrInterpolate(address.address)}</p><p data-v-60713cb6${_scopeId}>${ssrInterpolate(address.city)}, ${ssrInterpolate(address.zip)}</p><p data-v-60713cb6${_scopeId}>${ssrInterpolate(address.country)}</p></div></div>`);
            });
            _push2(`<!--]-->`);
            _push2(ssrRenderComponent(_component_ElButton, {
              type: "default",
              class: "w-full bg-transparent"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_IconMapPin, {
                    class: "mr-2",
                    size: "15"
                  }, null, _parent3, _scopeId2));
                  _push3(` Add New Address `);
                } else {
                  return [
                    createVNode(_component_IconMapPin, {
                      class: "mr-2",
                      size: "15"
                    }),
                    createTextVNode(" Add New Address ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "space-y-4" }, [
                (openBlock(true), createBlock(Fragment, null, renderList(unref(shipping).addresses, (address) => {
                  return openBlock(), createBlock("div", {
                    key: address.label,
                    class: "border rounded-lg p-4"
                  }, [
                    createVNode("div", { class: "flex items-start justify-between mb-2" }, [
                      createVNode("div", null, [
                        createVNode("p", { class: "font-medium" }, toDisplayString(address.label), 1),
                        address.default ? (openBlock(), createBlock(_component_ElTag, {
                          key: 0,
                          type: "success",
                          class: "text-xs"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Default")
                          ]),
                          _: 1
                        })) : createCommentVNode("", true)
                      ]),
                      createVNode(_component_ElButton, {
                        type: "text",
                        size: "small",
                        class: "edit"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_IconEdit, {
                            class: "mr-2",
                            size: "15 "
                          }),
                          createTextVNode(" Edit ")
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode("div", { class: "text-sm text-gray-600" }, [
                      createVNode("p", null, toDisplayString(address.name), 1),
                      createVNode("p", null, toDisplayString(address.address), 1),
                      createVNode("p", null, toDisplayString(address.city) + ", " + toDisplayString(address.zip), 1),
                      createVNode("p", null, toDisplayString(address.country), 1)
                    ])
                  ]);
                }), 128)),
                createVNode(_component_ElButton, {
                  type: "default",
                  class: "w-full bg-transparent"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_IconMapPin, {
                      class: "mr-2",
                      size: "15"
                    }),
                    createTextVNode(" Add New Address ")
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_ElCard, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="font-bold" data-v-60713cb6${_scopeId}>Shipping Preferences</span><div class="text-gray-500 text-sm" data-v-60713cb6${_scopeId}> Set your default shipping options </div>`);
          } else {
            return [
              createVNode("span", { class: "font-bold" }, "Shipping Preferences"),
              createVNode("div", { class: "text-gray-500 text-sm" }, " Set your default shipping options ")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="space-y-4" data-v-60713cb6${_scopeId}>`);
            _push2(ssrRenderComponent(_component_ElFormItem, { label: "Default Shipping Speed" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_ElSelect, {
                    modelValue: unref(shipping).preferences.speed,
                    "onUpdate:modelValue": ($event) => unref(shipping).preferences.speed = $event,
                    size: "large"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_ElOption, {
                          label: "Standard (5-7 days)",
                          value: "standard"
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_ElOption, {
                          label: "Express (2-3 days)",
                          value: "express"
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_ElOption, {
                          label: "Overnight",
                          value: "overnight"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_ElOption, {
                            label: "Standard (5-7 days)",
                            value: "standard"
                          }),
                          createVNode(_component_ElOption, {
                            label: "Express (2-3 days)",
                            value: "express"
                          }),
                          createVNode(_component_ElOption, {
                            label: "Overnight",
                            value: "overnight"
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_ElSelect, {
                      modelValue: unref(shipping).preferences.speed,
                      "onUpdate:modelValue": ($event) => unref(shipping).preferences.speed = $event,
                      size: "large"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_ElOption, {
                          label: "Standard (5-7 days)",
                          value: "standard"
                        }),
                        createVNode(_component_ElOption, {
                          label: "Express (2-3 days)",
                          value: "express"
                        }),
                        createVNode(_component_ElOption, {
                          label: "Overnight",
                          value: "overnight"
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="flex items-center justify-between" data-v-60713cb6${_scopeId}><div data-v-60713cb6${_scopeId}><span class="font-medium" data-v-60713cb6${_scopeId}>Delivery Instructions</span><p class="text-sm text-gray-600" data-v-60713cb6${_scopeId}> Leave packages at door if not home </p></div>`);
            _push2(ssrRenderComponent(_component_ElSwitch, {
              modelValue: unref(shipping).preferences.instructions,
              "onUpdate:modelValue": ($event) => unref(shipping).preferences.instructions = $event
            }, null, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "space-y-4" }, [
                createVNode(_component_ElFormItem, { label: "Default Shipping Speed" }, {
                  default: withCtx(() => [
                    createVNode(_component_ElSelect, {
                      modelValue: unref(shipping).preferences.speed,
                      "onUpdate:modelValue": ($event) => unref(shipping).preferences.speed = $event,
                      size: "large"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_ElOption, {
                          label: "Standard (5-7 days)",
                          value: "standard"
                        }),
                        createVNode(_component_ElOption, {
                          label: "Express (2-3 days)",
                          value: "express"
                        }),
                        createVNode(_component_ElOption, {
                          label: "Overnight",
                          value: "overnight"
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 1
                }),
                createVNode("div", { class: "flex items-center justify-between" }, [
                  createVNode("div", null, [
                    createVNode("span", { class: "font-medium" }, "Delivery Instructions"),
                    createVNode("p", { class: "text-sm text-gray-600" }, " Leave packages at door if not home ")
                  ]),
                  createVNode(_component_ElSwitch, {
                    modelValue: unref(shipping).preferences.instructions,
                    "onUpdate:modelValue": ($event) => unref(shipping).preferences.instructions = $event
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/preference/Shipping.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const Shipping = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-60713cb6"]]);
const _sfc_main$1 = {
  __name: "Appearance",
  __ssrInlineRender: true,
  setup(__props) {
    const appearance = reactive({
      theme: "light",
      language: "en",
      currency: "usd",
      timezone: "pst"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ElCard = ElCard;
      const _component_IconSun = Sun;
      const _component_IconMoon = Moon;
      const _component_IconGlobe = Globe;
      const _component_ElForm = ElForm;
      const _component_ElFormItem = ElFormItem;
      const _component_ElSelect = ElSelect;
      const _component_ElOption = ElOption;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-6" }, _attrs))} data-v-b8cb7aee>`);
      _push(ssrRenderComponent(_component_ElCard, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="font-bold" data-v-b8cb7aee${_scopeId}>Theme</span><div class="text-gray-500 text-sm" data-v-b8cb7aee${_scopeId}>Choose your preferred theme</div>`);
          } else {
            return [
              createVNode("span", { class: "font-bold" }, "Theme"),
              createVNode("div", { class: "text-gray-500 text-sm" }, "Choose your preferred theme")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="grid grid-cols-3 gap-4" data-v-b8cb7aee${_scopeId}><div class="${ssrRenderClass([
              "border-2 rounded-lg p-4 cursor-pointer",
              unref(appearance).theme === "light" ? "border-blue-500" : "border-gray-200"
            ])}" data-v-b8cb7aee${_scopeId}>`);
            _push2(ssrRenderComponent(_component_IconSun, {
              class: "w-full mb-2 text-yellow-400",
              size: "15"
            }, null, _parent2, _scopeId));
            _push2(`<p class="text-sm font-medium text-center" data-v-b8cb7aee${_scopeId}>Light</p></div><div class="${ssrRenderClass([
              "border-2 rounded-lg p-4 cursor-pointer",
              unref(appearance).theme === "dark" ? "border-blue-500" : "border-gray-200"
            ])}" data-v-b8cb7aee${_scopeId}>`);
            _push2(ssrRenderComponent(_component_IconMoon, {
              class: "w-full mb-2 text-gray-800",
              size: "15"
            }, null, _parent2, _scopeId));
            _push2(`<p class="text-sm font-medium text-center" data-v-b8cb7aee${_scopeId}>Dark</p></div><div class="${ssrRenderClass([
              "border-2 rounded-lg p-4 cursor-pointer",
              unref(appearance).theme === "system" ? "border-blue-500" : "border-gray-200"
            ])}" data-v-b8cb7aee${_scopeId}>`);
            _push2(ssrRenderComponent(_component_IconGlobe, {
              class: "w-full mb-2 text-green-500",
              size: "15"
            }, null, _parent2, _scopeId));
            _push2(`<p class="text-sm font-medium text-center" data-v-b8cb7aee${_scopeId}>System</p></div></div>`);
          } else {
            return [
              createVNode("div", { class: "grid grid-cols-3 gap-4" }, [
                createVNode("div", {
                  class: [
                    "border-2 rounded-lg p-4 cursor-pointer",
                    unref(appearance).theme === "light" ? "border-blue-500" : "border-gray-200"
                  ],
                  onClick: ($event) => unref(appearance).theme = "light"
                }, [
                  createVNode(_component_IconSun, {
                    class: "w-full mb-2 text-yellow-400",
                    size: "15"
                  }),
                  createVNode("p", { class: "text-sm font-medium text-center" }, "Light")
                ], 10, ["onClick"]),
                createVNode("div", {
                  class: [
                    "border-2 rounded-lg p-4 cursor-pointer",
                    unref(appearance).theme === "dark" ? "border-blue-500" : "border-gray-200"
                  ],
                  onClick: ($event) => unref(appearance).theme = "dark"
                }, [
                  createVNode(_component_IconMoon, {
                    class: "w-full mb-2 text-gray-800",
                    size: "15"
                  }),
                  createVNode("p", { class: "text-sm font-medium text-center" }, "Dark")
                ], 10, ["onClick"]),
                createVNode("div", {
                  class: [
                    "border-2 rounded-lg p-4 cursor-pointer",
                    unref(appearance).theme === "system" ? "border-blue-500" : "border-gray-200"
                  ],
                  onClick: ($event) => unref(appearance).theme = "system"
                }, [
                  createVNode(_component_IconGlobe, {
                    class: "w-full mb-2 text-green-500",
                    size: "15"
                  }),
                  createVNode("p", { class: "text-sm font-medium text-center" }, "System")
                ], 10, ["onClick"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_ElCard, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="font-bold" data-v-b8cb7aee${_scopeId}>Language &amp; Region</span><div class="text-gray-500 text-sm" data-v-b8cb7aee${_scopeId}> Set your language and regional preferences </div>`);
          } else {
            return [
              createVNode("span", { class: "font-bold" }, "Language & Region"),
              createVNode("div", { class: "text-gray-500 text-sm" }, " Set your language and regional preferences ")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="space-y-4" data-v-b8cb7aee${_scopeId}>`);
            _push2(ssrRenderComponent(_component_ElForm, { "label-position": "top" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_ElFormItem, { label: "Language" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_ElSelect, {
                          modelValue: unref(appearance).language,
                          "onUpdate:modelValue": ($event) => unref(appearance).language = $event,
                          size: "large"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_ElOption, {
                                label: "English",
                                value: "en"
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_ElOption, {
                                label: "Espa\xF1ol",
                                value: "es"
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_ElOption, {
                                label: "Fran\xE7ais",
                                value: "fr"
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_ElOption, {
                                label: "Deutsch",
                                value: "de"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_ElOption, {
                                  label: "English",
                                  value: "en"
                                }),
                                createVNode(_component_ElOption, {
                                  label: "Espa\xF1ol",
                                  value: "es"
                                }),
                                createVNode(_component_ElOption, {
                                  label: "Fran\xE7ais",
                                  value: "fr"
                                }),
                                createVNode(_component_ElOption, {
                                  label: "Deutsch",
                                  value: "de"
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_ElSelect, {
                            modelValue: unref(appearance).language,
                            "onUpdate:modelValue": ($event) => unref(appearance).language = $event,
                            size: "large"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_ElOption, {
                                label: "English",
                                value: "en"
                              }),
                              createVNode(_component_ElOption, {
                                label: "Espa\xF1ol",
                                value: "es"
                              }),
                              createVNode(_component_ElOption, {
                                label: "Fran\xE7ais",
                                value: "fr"
                              }),
                              createVNode(_component_ElOption, {
                                label: "Deutsch",
                                value: "de"
                              })
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_ElFormItem, { label: "Currency" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_ElSelect, {
                          modelValue: unref(appearance).currency,
                          "onUpdate:modelValue": ($event) => unref(appearance).currency = $event,
                          size: "large"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_ElOption, {
                                label: "USD ($)",
                                value: "usd"
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_ElOption, {
                                label: "EUR (\u20AC)",
                                value: "eur"
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_ElOption, {
                                label: "GBP (\xA3)",
                                value: "gbp"
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_ElOption, {
                                label: "CAD ($)",
                                value: "cad"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_ElOption, {
                                  label: "USD ($)",
                                  value: "usd"
                                }),
                                createVNode(_component_ElOption, {
                                  label: "EUR (\u20AC)",
                                  value: "eur"
                                }),
                                createVNode(_component_ElOption, {
                                  label: "GBP (\xA3)",
                                  value: "gbp"
                                }),
                                createVNode(_component_ElOption, {
                                  label: "CAD ($)",
                                  value: "cad"
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_ElSelect, {
                            modelValue: unref(appearance).currency,
                            "onUpdate:modelValue": ($event) => unref(appearance).currency = $event,
                            size: "large"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_ElOption, {
                                label: "USD ($)",
                                value: "usd"
                              }),
                              createVNode(_component_ElOption, {
                                label: "EUR (\u20AC)",
                                value: "eur"
                              }),
                              createVNode(_component_ElOption, {
                                label: "GBP (\xA3)",
                                value: "gbp"
                              }),
                              createVNode(_component_ElOption, {
                                label: "CAD ($)",
                                value: "cad"
                              })
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_ElFormItem, { label: "Time Zone" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_ElSelect, {
                          modelValue: unref(appearance).timezone,
                          "onUpdate:modelValue": ($event) => unref(appearance).timezone = $event,
                          size: "large"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_ElOption, {
                                label: "Pacific Standard Time",
                                value: "pst"
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_ElOption, {
                                label: "Mountain Standard Time",
                                value: "mst"
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_ElOption, {
                                label: "Central Standard Time",
                                value: "cst"
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_ElOption, {
                                label: "Eastern Standard Time",
                                value: "est"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_ElOption, {
                                  label: "Pacific Standard Time",
                                  value: "pst"
                                }),
                                createVNode(_component_ElOption, {
                                  label: "Mountain Standard Time",
                                  value: "mst"
                                }),
                                createVNode(_component_ElOption, {
                                  label: "Central Standard Time",
                                  value: "cst"
                                }),
                                createVNode(_component_ElOption, {
                                  label: "Eastern Standard Time",
                                  value: "est"
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_ElSelect, {
                            modelValue: unref(appearance).timezone,
                            "onUpdate:modelValue": ($event) => unref(appearance).timezone = $event,
                            size: "large"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_ElOption, {
                                label: "Pacific Standard Time",
                                value: "pst"
                              }),
                              createVNode(_component_ElOption, {
                                label: "Mountain Standard Time",
                                value: "mst"
                              }),
                              createVNode(_component_ElOption, {
                                label: "Central Standard Time",
                                value: "cst"
                              }),
                              createVNode(_component_ElOption, {
                                label: "Eastern Standard Time",
                                value: "est"
                              })
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_ElFormItem, { label: "Language" }, {
                      default: withCtx(() => [
                        createVNode(_component_ElSelect, {
                          modelValue: unref(appearance).language,
                          "onUpdate:modelValue": ($event) => unref(appearance).language = $event,
                          size: "large"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_ElOption, {
                              label: "English",
                              value: "en"
                            }),
                            createVNode(_component_ElOption, {
                              label: "Espa\xF1ol",
                              value: "es"
                            }),
                            createVNode(_component_ElOption, {
                              label: "Fran\xE7ais",
                              value: "fr"
                            }),
                            createVNode(_component_ElOption, {
                              label: "Deutsch",
                              value: "de"
                            })
                          ]),
                          _: 1
                        }, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_ElFormItem, { label: "Currency" }, {
                      default: withCtx(() => [
                        createVNode(_component_ElSelect, {
                          modelValue: unref(appearance).currency,
                          "onUpdate:modelValue": ($event) => unref(appearance).currency = $event,
                          size: "large"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_ElOption, {
                              label: "USD ($)",
                              value: "usd"
                            }),
                            createVNode(_component_ElOption, {
                              label: "EUR (\u20AC)",
                              value: "eur"
                            }),
                            createVNode(_component_ElOption, {
                              label: "GBP (\xA3)",
                              value: "gbp"
                            }),
                            createVNode(_component_ElOption, {
                              label: "CAD ($)",
                              value: "cad"
                            })
                          ]),
                          _: 1
                        }, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_ElFormItem, { label: "Time Zone" }, {
                      default: withCtx(() => [
                        createVNode(_component_ElSelect, {
                          modelValue: unref(appearance).timezone,
                          "onUpdate:modelValue": ($event) => unref(appearance).timezone = $event,
                          size: "large"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_ElOption, {
                              label: "Pacific Standard Time",
                              value: "pst"
                            }),
                            createVNode(_component_ElOption, {
                              label: "Mountain Standard Time",
                              value: "mst"
                            }),
                            createVNode(_component_ElOption, {
                              label: "Central Standard Time",
                              value: "cst"
                            }),
                            createVNode(_component_ElOption, {
                              label: "Eastern Standard Time",
                              value: "est"
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
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "space-y-4" }, [
                createVNode(_component_ElForm, { "label-position": "top" }, {
                  default: withCtx(() => [
                    createVNode(_component_ElFormItem, { label: "Language" }, {
                      default: withCtx(() => [
                        createVNode(_component_ElSelect, {
                          modelValue: unref(appearance).language,
                          "onUpdate:modelValue": ($event) => unref(appearance).language = $event,
                          size: "large"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_ElOption, {
                              label: "English",
                              value: "en"
                            }),
                            createVNode(_component_ElOption, {
                              label: "Espa\xF1ol",
                              value: "es"
                            }),
                            createVNode(_component_ElOption, {
                              label: "Fran\xE7ais",
                              value: "fr"
                            }),
                            createVNode(_component_ElOption, {
                              label: "Deutsch",
                              value: "de"
                            })
                          ]),
                          _: 1
                        }, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_ElFormItem, { label: "Currency" }, {
                      default: withCtx(() => [
                        createVNode(_component_ElSelect, {
                          modelValue: unref(appearance).currency,
                          "onUpdate:modelValue": ($event) => unref(appearance).currency = $event,
                          size: "large"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_ElOption, {
                              label: "USD ($)",
                              value: "usd"
                            }),
                            createVNode(_component_ElOption, {
                              label: "EUR (\u20AC)",
                              value: "eur"
                            }),
                            createVNode(_component_ElOption, {
                              label: "GBP (\xA3)",
                              value: "gbp"
                            }),
                            createVNode(_component_ElOption, {
                              label: "CAD ($)",
                              value: "cad"
                            })
                          ]),
                          _: 1
                        }, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_ElFormItem, { label: "Time Zone" }, {
                      default: withCtx(() => [
                        createVNode(_component_ElSelect, {
                          modelValue: unref(appearance).timezone,
                          "onUpdate:modelValue": ($event) => unref(appearance).timezone = $event,
                          size: "large"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_ElOption, {
                              label: "Pacific Standard Time",
                              value: "pst"
                            }),
                            createVNode(_component_ElOption, {
                              label: "Mountain Standard Time",
                              value: "mst"
                            }),
                            createVNode(_component_ElOption, {
                              label: "Central Standard Time",
                              value: "cst"
                            }),
                            createVNode(_component_ElOption, {
                              label: "Eastern Standard Time",
                              value: "est"
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
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/preference/Appearance.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Appearance = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-b8cb7aee"]]);
const _sfc_main = {
  __name: "preference",
  __ssrInlineRender: true,
  setup(__props) {
    const activeSection = ref("profile");
    const preferenceComponents = {
      profile: Profile,
      notifications: Notifications,
      privacy: Privacy,
      payment: Payment,
      shipping: Shipping,
      appearance: Appearance
    };
    const menuItems = [
      { id: "profile", label: "Profile", icon: User },
      { id: "notifications", label: "Notifications", icon: Bell },
      { id: "privacy", label: "Privacy & Security", icon: Shield$1 },
      { id: "payment", label: "Payment Methods", icon: CreditCard$1 },
      { id: "shipping", label: "Shipping", icon: Truck },
      { id: "appearance", label: "Appearance", icon: Palette }
    ];
    ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_breadcrumb = ElBreadcrumb;
      const _component_el_breadcrumb_item = ElBreadcrumbItem;
      const _component_ElRow = ElRow;
      const _component_ElCol = ElCol;
      const _component_el_card = ElCard;
      const _component_IconSettings = Settings;
      const _component_el_icon = ElIcon;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container mx-auto px-4" }, _attrs))} data-v-bb451f04>`);
      _push(ssrRenderComponent(_component_el_breadcrumb, {
        separator: "/",
        class: "mb-4"
      }, {
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
                  _push3(`Profile`);
                } else {
                  return [
                    createTextVNode("Profile")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_breadcrumb_item, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Preferences`);
                } else {
                  return [
                    createTextVNode("Preferences")
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
                  createTextVNode("Profile")
                ]),
                _: 1
              }),
              createVNode(_component_el_breadcrumb_item, null, {
                default: withCtx(() => [
                  createTextVNode("Preferences")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="mb-4" data-v-bb451f04><h2 class="mb-2 font-briscolade text-2xl" data-v-bb451f04>Account Preferences</h2><p class="text-gray-600" data-v-bb451f04>Manage your account settings and preferences</p></div>`);
      _push(ssrRenderComponent(_component_ElRow, { gutter: 32 }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ElCol, {
              xs: 24,
              sm: 8,
              md: 6
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_el_card, { class: "nav sticky top-8" }, {
                    header: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span class="flex items-center gap-2 font-bold font-briscolade" data-v-bb451f04${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_IconSettings, {
                          class: "mr-2",
                          size: "15"
                        }, null, _parent4, _scopeId3));
                        _push4(` Settings </span>`);
                      } else {
                        return [
                          createVNode("span", { class: "flex items-center gap-2 font-bold font-briscolade" }, [
                            createVNode(_component_IconSettings, {
                              class: "mr-2",
                              size: "15"
                            }),
                            createTextVNode(" Settings ")
                          ])
                        ];
                      }
                    }),
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<nav data-v-bb451f04${_scopeId3}><!--[-->`);
                        ssrRenderList(menuItems, (item) => {
                          _push4(`<div class="${ssrRenderClass([
                            "w-full flex items-center gap-2 px-4 py-3 cursor-pointer transition-colors rounded-none",
                            activeSection.value === item.id ? "active" : "text-gray-700 hover:bg-gray-50"
                          ])}" data-v-bb451f04${_scopeId3}>`);
                          _push4(ssrRenderComponent(_component_el_icon, {
                            size: 16,
                            class: [activeSection.value === item.id ? "active" : ""]
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                ssrRenderVNode(_push5, createVNode(resolveDynamicComponent(item.icon), null, null), _parent5, _scopeId4);
                              } else {
                                return [
                                  (openBlock(), createBlock(resolveDynamicComponent(item.icon)))
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(` ${ssrInterpolate(item.label)}</div>`);
                        });
                        _push4(`<!--]--></nav>`);
                      } else {
                        return [
                          createVNode("nav", null, [
                            (openBlock(), createBlock(Fragment, null, renderList(menuItems, (item) => {
                              return createVNode("div", {
                                key: item.id,
                                class: [
                                  "w-full flex items-center gap-2 px-4 py-3 cursor-pointer transition-colors rounded-none",
                                  activeSection.value === item.id ? "active" : "text-gray-700 hover:bg-gray-50"
                                ],
                                onClick: ($event) => activeSection.value = item.id
                              }, [
                                createVNode(_component_el_icon, {
                                  size: 16,
                                  class: [activeSection.value === item.id ? "active" : ""]
                                }, {
                                  default: withCtx(() => [
                                    (openBlock(), createBlock(resolveDynamicComponent(item.icon)))
                                  ]),
                                  _: 2
                                }, 1032, ["class"]),
                                createTextVNode(" " + toDisplayString(item.label), 1)
                              ], 10, ["onClick"]);
                            }), 64))
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_el_card, { class: "nav sticky top-8" }, {
                      header: withCtx(() => [
                        createVNode("span", { class: "flex items-center gap-2 font-bold font-briscolade" }, [
                          createVNode(_component_IconSettings, {
                            class: "mr-2",
                            size: "15"
                          }),
                          createTextVNode(" Settings ")
                        ])
                      ]),
                      default: withCtx(() => [
                        createVNode("nav", null, [
                          (openBlock(), createBlock(Fragment, null, renderList(menuItems, (item) => {
                            return createVNode("div", {
                              key: item.id,
                              class: [
                                "w-full flex items-center gap-2 px-4 py-3 cursor-pointer transition-colors rounded-none",
                                activeSection.value === item.id ? "active" : "text-gray-700 hover:bg-gray-50"
                              ],
                              onClick: ($event) => activeSection.value = item.id
                            }, [
                              createVNode(_component_el_icon, {
                                size: 16,
                                class: [activeSection.value === item.id ? "active" : ""]
                              }, {
                                default: withCtx(() => [
                                  (openBlock(), createBlock(resolveDynamicComponent(item.icon)))
                                ]),
                                _: 2
                              }, 1032, ["class"]),
                              createTextVNode(" " + toDisplayString(item.label), 1)
                            ], 10, ["onClick"]);
                          }), 64))
                        ])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ElCol, {
              xs: 24,
              sm: 16,
              md: 18
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (activeSection.value) {
                    ssrRenderVNode(_push3, createVNode(resolveDynamicComponent(preferenceComponents[activeSection.value]), null, null), _parent3, _scopeId2);
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    activeSection.value ? (openBlock(), createBlock(resolveDynamicComponent(preferenceComponents[activeSection.value]), { key: 0 })) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_ElCol, {
                xs: 24,
                sm: 8,
                md: 6
              }, {
                default: withCtx(() => [
                  createVNode(_component_el_card, { class: "nav sticky top-8" }, {
                    header: withCtx(() => [
                      createVNode("span", { class: "flex items-center gap-2 font-bold font-briscolade" }, [
                        createVNode(_component_IconSettings, {
                          class: "mr-2",
                          size: "15"
                        }),
                        createTextVNode(" Settings ")
                      ])
                    ]),
                    default: withCtx(() => [
                      createVNode("nav", null, [
                        (openBlock(), createBlock(Fragment, null, renderList(menuItems, (item) => {
                          return createVNode("div", {
                            key: item.id,
                            class: [
                              "w-full flex items-center gap-2 px-4 py-3 cursor-pointer transition-colors rounded-none",
                              activeSection.value === item.id ? "active" : "text-gray-700 hover:bg-gray-50"
                            ],
                            onClick: ($event) => activeSection.value = item.id
                          }, [
                            createVNode(_component_el_icon, {
                              size: 16,
                              class: [activeSection.value === item.id ? "active" : ""]
                            }, {
                              default: withCtx(() => [
                                (openBlock(), createBlock(resolveDynamicComponent(item.icon)))
                              ]),
                              _: 2
                            }, 1032, ["class"]),
                            createTextVNode(" " + toDisplayString(item.label), 1)
                          ], 10, ["onClick"]);
                        }), 64))
                      ])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_ElCol, {
                xs: 24,
                sm: 16,
                md: 18
              }, {
                default: withCtx(() => [
                  activeSection.value ? (openBlock(), createBlock(resolveDynamicComponent(preferenceComponents[activeSection.value]), { key: 0 })) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/profile/preference.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const preference = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-bb451f04"]]);

export { preference as default };
//# sourceMappingURL=preference-YMOhbz3W.mjs.map
