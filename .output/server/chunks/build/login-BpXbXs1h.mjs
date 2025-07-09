import { _ as __nuxt_component_0 } from './nuxt-link-BLi3NAM9.mjs';
import { withCtx, createVNode, createTextVNode, ref, computed, reactive, mergeProps, unref, createBlock, createCommentVNode, openBlock, toDisplayString, defineComponent, createElementBlock, normalizeClass, renderSlot, resolveDynamicComponent, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { A as AuthWrapper, E as ElForm, _ as __nuxt_component_1, a as ElFormItem } from './Input-Dpt1hJfg.mjs';
import { w as withInstall, _ as _export_sfc$1, b as buildProps, u as useGlobalConfig, a as useDeprecated, E as ElIcon, i as iconPropType } from './el-button-V0v0dsgs.mjs';
import { b as useAuthStore, n as navigateTo, i as isBoolean, a as useNamespace } from './server.mjs';
import { U as UIButton } from './UIButton-CG1Ax5gj.mjs';
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
import '@vue/shared';
import 'lodash-unified';
import 'async-validator';
import '@vueuse/core';
import './index-CGTgrJf6.mjs';
import './typescript-D6L75muK.mjs';
import './aria-BNfy9QVD.mjs';
import './event-BZTOGHfp.mjs';
import '@ctrl/tinycolor';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import 'vue-router';
import 'perfect-debounce';
import 'vue-sonner';

const linkProps = buildProps({
  type: {
    type: String,
    values: ["primary", "success", "warning", "info", "danger", "default"],
    default: void 0
  },
  underline: {
    type: [Boolean, String],
    values: [true, false, "always", "never", "hover"],
    default: void 0
  },
  disabled: Boolean,
  href: { type: String, default: "" },
  target: {
    type: String,
    default: "_self"
  },
  icon: {
    type: iconPropType
  }
});
const linkEmits = {
  click: (evt) => evt instanceof MouseEvent
};
const __default__ = defineComponent({
  name: "ElLink"
});
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: linkProps,
  emits: linkEmits,
  setup(__props, { emit }) {
    const props = __props;
    const globalConfig = useGlobalConfig("link");
    useDeprecated({
      scope: "el-link",
      from: "The underline option (boolean)",
      replacement: "'always' | 'hover' | 'never'",
      version: "3.0.0",
      ref: "https://element-plus.org/en-US/component/link.html#underline"
    }, computed(() => isBoolean(props.underline)));
    const ns = useNamespace("link");
    const linkKls = computed(() => {
      var _a, _b, _c;
      return [
        ns.b(),
        ns.m((_c = (_b = props.type) != null ? _b : (_a = globalConfig.value) == null ? void 0 : _a.type) != null ? _c : "default"),
        ns.is("disabled", props.disabled),
        ns.is("underline", underline.value === "always"),
        ns.is("hover-underline", underline.value === "hover" && !props.disabled)
      ];
    });
    const underline = computed(() => {
      var _a, _b, _c;
      if (isBoolean(props.underline)) {
        return props.underline ? "hover" : "never";
      } else
        return (_c = (_b = props.underline) != null ? _b : (_a = globalConfig.value) == null ? void 0 : _a.underline) != null ? _c : "hover";
    });
    function handleClick(event) {
      if (!props.disabled)
        emit("click", event);
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("a", {
        class: normalizeClass(unref(linkKls)),
        href: _ctx.disabled || !_ctx.href ? void 0 : _ctx.href,
        target: _ctx.disabled || !_ctx.href ? void 0 : _ctx.target,
        onClick: handleClick
      }, [
        _ctx.icon ? (openBlock(), createBlock(unref(ElIcon), { key: 0 }, {
          default: withCtx(() => [
            (openBlock(), createBlock(resolveDynamicComponent(_ctx.icon)))
          ]),
          _: 1
        })) : createCommentVNode("v-if", true),
        _ctx.$slots.default ? (openBlock(), createElementBlock("span", {
          key: 1,
          class: normalizeClass(unref(ns).e("inner"))
        }, [
          renderSlot(_ctx.$slots, "default")
        ], 2)) : createCommentVNode("v-if", true),
        _ctx.$slots.icon ? renderSlot(_ctx.$slots, "icon", { key: 2 }) : createCommentVNode("v-if", true)
      ], 10, ["href", "target"]);
    };
  }
});
var Link = /* @__PURE__ */ _export_sfc$1(_sfc_main$2, [["__file", "link.vue"]]);
const ElLink = withInstall(Link);
const _sfc_main$1 = {
  __name: "AccountLogin",
  __ssrInlineRender: true,
  props: {
    showRegister: {
      type: Function,
      default: () => {
      }
    }
  },
  emits: ["close-dialog"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const authStore = useAuthStore();
    const loading = ref(false);
    const ruleFormRef = ref();
    const ruleForm = ref({
      email: "",
      password: ""
    });
    const errorMessage = computed(() => authStore.errorMessage);
    const rules = reactive({
      email: [
        {
          type: "email",
          required: true,
          message: "Email is required",
          trigger: "change"
        }
      ],
      password: [
        {
          required: true,
          message: "Password is required",
          trigger: "change"
        }
      ]
    });
    async function login2(formEl) {
      if (!formEl) return;
      loading.value = true;
      try {
        const isValid = await new Promise((resolve) => {
          formEl.validate((valid) => resolve(valid));
        });
        if (!isValid) return;
        const response = await authStore.signIn(ruleForm.value);
        if (!errorMessage.value) {
          emit("close-dialog");
          navigateTo("/");
        }
        formEl.resetFields();
      } finally {
        loading.value = false;
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_form = ElForm;
      const _component_Input = __nuxt_component_1;
      const _component_el_link = ElLink;
      const _component_el_form_item = ElFormItem;
      const _component_UIButton = UIButton;
      _push(ssrRenderComponent(_component_el_form, mergeProps({
        ref_key: "ruleFormRef",
        ref: ruleFormRef,
        model: unref(ruleForm),
        rules: unref(rules),
        class: "account__signin signin"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Input, {
              modelValue: unref(ruleForm).email,
              "onUpdate:modelValue": ($event) => unref(ruleForm).email = $event,
              prop: "email",
              placeholder: "Email"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Input, {
              modelValue: unref(ruleForm).password,
              "onUpdate:modelValue": ($event) => unref(ruleForm).password = $event,
              prop: "password",
              placeholder: "Password",
              type: "password"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_link, {
              role: "button",
              class: "info",
              onClick: __props.showRegister
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Forgot your password? `);
                } else {
                  return [
                    createTextVNode(" Forgot your password? ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_form_item, { class: "account__form" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UIButton, {
                    size: "large",
                    class: "black",
                    onClick: ($event) => login2(unref(ruleFormRef)),
                    loading: unref(loading),
                    label: "SIGN IN"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UIButton, {
                      size: "large",
                      class: "black",
                      onClick: ($event) => login2(unref(ruleFormRef)),
                      loading: unref(loading),
                      label: "SIGN IN"
                    }, null, 8, ["onClick", "loading"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            if (unref(errorMessage)) {
              _push2(`<p class="el__error"${_scopeId}>${ssrInterpolate(unref(errorMessage))}</p>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode(_component_Input, {
                modelValue: unref(ruleForm).email,
                "onUpdate:modelValue": ($event) => unref(ruleForm).email = $event,
                prop: "email",
                placeholder: "Email"
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode(_component_Input, {
                modelValue: unref(ruleForm).password,
                "onUpdate:modelValue": ($event) => unref(ruleForm).password = $event,
                prop: "password",
                placeholder: "Password",
                type: "password"
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode(_component_el_link, {
                role: "button",
                class: "info",
                onClick: __props.showRegister
              }, {
                default: withCtx(() => [
                  createTextVNode(" Forgot your password? ")
                ]),
                _: 1
              }, 8, ["onClick"]),
              createVNode(_component_el_form_item, { class: "account__form" }, {
                default: withCtx(() => [
                  createVNode(_component_UIButton, {
                    size: "large",
                    class: "black",
                    onClick: ($event) => login2(unref(ruleFormRef)),
                    loading: unref(loading),
                    label: "SIGN IN"
                  }, null, 8, ["onClick", "loading"])
                ]),
                _: 1
              }),
              unref(errorMessage) ? (openBlock(), createBlock("p", {
                key: 0,
                class: "el__error"
              }, toDisplayString(unref(errorMessage)), 1)) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/account/AccountLogin.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "login",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0;
      _push(ssrRenderComponent(AuthWrapper, _attrs, {
        separator: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` You don&#39;t have an account?`);
            _push2(ssrRenderComponent(_component_nuxt_link, { to: "/auth/register" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Register`);
                } else {
                  return [
                    createTextVNode("Register")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createTextVNode(" You don't have an account?"),
              createVNode(_component_nuxt_link, { to: "/auth/register" }, {
                default: withCtx(() => [
                  createTextVNode("Register")
                ]),
                _: 1
              })
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$1, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$1)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/auth/login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const login = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-ad1ea7e1"]]);

export { login as default };
//# sourceMappingURL=login-BpXbXs1h.mjs.map
