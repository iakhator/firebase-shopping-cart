import { _ as __nuxt_component_0 } from './nuxt-link-BLi3NAM9.mjs';
import { withCtx, createVNode, createTextVNode, ref, reactive, mergeProps, unref, createBlock, createCommentVNode, openBlock, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { A as AuthWrapper, E as ElForm, _ as __nuxt_component_1, a as ElFormItem } from './Input-Dpt1hJfg.mjs';
import { U as UIButton } from './UIButton-CG1Ax5gj.mjs';
import { b as useAuthStore } from './server.mjs';
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
import './_plugin-vue_export-helper-1tPrXgE0.mjs';
import './el-button-V0v0dsgs.mjs';
import 'lodash-unified';
import '@vue/shared';
import '@ctrl/tinycolor';
import 'async-validator';
import '@vueuse/core';
import './index-CGTgrJf6.mjs';
import './typescript-D6L75muK.mjs';
import './aria-BNfy9QVD.mjs';
import './event-BZTOGHfp.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import 'vue-router';
import 'perfect-debounce';
import 'vue-sonner';

const _sfc_main$1 = {
  __name: "AccountRegister",
  __ssrInlineRender: true,
  props: {
    showSignIn: {
      type: Function,
      default: () => {
      }
    }
  },
  emits: ["close-dialog"],
  setup(__props, { emit: __emit }) {
    const authStore = useAuthStore();
    const emit = __emit;
    const formError = ref("");
    const ruleFormRef = ref();
    const ruleForm = ref({
      firstname: "",
      lastname: "",
      email: "",
      password: ""
    });
    const rules = reactive({
      firstname: [
        {
          required: true,
          message: "FirstName is required",
          trigger: "change"
        }
      ],
      lastname: [
        {
          required: true,
          message: "LastName is required",
          trigger: "change"
        }
      ],
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
        },
        { min: 6, message: "Length should be atleast 6", trigger: "change" }
      ]
    });
    const loading = ref(false);
    async function register(formEl) {
      var _a, _b;
      loading.value = true;
      try {
        let isValid;
        if (!formEl) return;
        await formEl.validate((valid) => {
          isValid = valid;
        });
        if (isValid) {
          const data = {
            email: ruleForm.value.email,
            password: ruleForm.value.password,
            firstName: ruleForm.value.firstname,
            lastName: ruleForm.value.lastname
          };
          const response = await authStore.signUp(data);
          if (response) {
            formEl.resetFields();
            emit("close-dialog");
          }
        }
      } catch (error) {
        formError.value = ((_b = (_a = error.response) == null ? void 0 : _a.data) == null ? void 0 : _b.error) || "Something happened";
      } finally {
        loading.value = false;
        emit("close-dialog");
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_form = ElForm;
      const _component_Input = __nuxt_component_1;
      const _component_el_form_item = ElFormItem;
      const _component_UIButton = UIButton;
      _push(ssrRenderComponent(_component_el_form, mergeProps({
        ref_key: "ruleFormRef",
        ref: ruleFormRef,
        model: unref(ruleForm),
        rules: unref(rules),
        class: "account__register register"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="icon-container"${_scopeId}>Create an Account</div>`);
            _push2(ssrRenderComponent(_component_Input, {
              modelValue: unref(ruleForm).email,
              "onUpdate:modelValue": ($event) => unref(ruleForm).email = $event,
              prop: "email",
              placeholder: "Email"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Input, {
              modelValue: unref(ruleForm).firstname,
              "onUpdate:modelValue": ($event) => unref(ruleForm).firstname = $event,
              prop: "firstname",
              placeholder: "FirstName"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Input, {
              modelValue: unref(ruleForm).lastname,
              "onUpdate:modelValue": ($event) => unref(ruleForm).lastname = $event,
              prop: "lastname",
              placeholder: "LastName"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Input, {
              modelValue: unref(ruleForm).password,
              "onUpdate:modelValue": ($event) => unref(ruleForm).password = $event,
              prop: "password",
              placeholder: "Password",
              type: "password"
            }, null, _parent2, _scopeId));
            if (unref(formError)) {
              _push2(`<div class="el-form-item__error"${_scopeId}>${ssrInterpolate(unref(formError))}</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(_component_el_form_item, { class: "account__form" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UIButton, {
                    size: "large",
                    class: "black",
                    loading: unref(loading),
                    onClick: ($event) => register(unref(ruleFormRef)),
                    label: "REGISTER"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UIButton, {
                      size: "large",
                      class: "black",
                      loading: unref(loading),
                      onClick: ($event) => register(unref(ruleFormRef)),
                      label: "REGISTER"
                    }, null, 8, ["loading", "onClick"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "icon-container" }, "Create an Account"),
              createVNode(_component_Input, {
                modelValue: unref(ruleForm).email,
                "onUpdate:modelValue": ($event) => unref(ruleForm).email = $event,
                prop: "email",
                placeholder: "Email"
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode(_component_Input, {
                modelValue: unref(ruleForm).firstname,
                "onUpdate:modelValue": ($event) => unref(ruleForm).firstname = $event,
                prop: "firstname",
                placeholder: "FirstName"
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode(_component_Input, {
                modelValue: unref(ruleForm).lastname,
                "onUpdate:modelValue": ($event) => unref(ruleForm).lastname = $event,
                prop: "lastname",
                placeholder: "LastName"
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode(_component_Input, {
                modelValue: unref(ruleForm).password,
                "onUpdate:modelValue": ($event) => unref(ruleForm).password = $event,
                prop: "password",
                placeholder: "Password",
                type: "password"
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              unref(formError) ? (openBlock(), createBlock("div", {
                key: 0,
                class: "el-form-item__error"
              }, toDisplayString(unref(formError)), 1)) : createCommentVNode("", true),
              createVNode(_component_el_form_item, { class: "account__form" }, {
                default: withCtx(() => [
                  createVNode(_component_UIButton, {
                    size: "large",
                    class: "black",
                    loading: unref(loading),
                    onClick: ($event) => register(unref(ruleFormRef)),
                    label: "REGISTER"
                  }, null, 8, ["loading", "onClick"])
                ]),
                _: 1
              })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/account/AccountRegister.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "register",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0;
      _push(ssrRenderComponent(AuthWrapper, _attrs, {
        separator: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` You have an account?`);
            _push2(ssrRenderComponent(_component_nuxt_link, { to: "/auth/login" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Login`);
                } else {
                  return [
                    createTextVNode("Login")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createTextVNode(" You have an account?"),
              createVNode(_component_nuxt_link, { to: "/auth/login" }, {
                default: withCtx(() => [
                  createTextVNode("Login")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/auth/register.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=register-BxBHEGHA.mjs.map
