import { E as ElCard, a as ElForm, b as ElFormItem } from './index-Bbz8LALq.mjs';
import { S as ShoppingBag } from './shopping-bag-C9kEades.mjs';
import { E as ElButton, a as ElIcon, F as message_default, G as lock_default } from './el-button-etDYgHTt.mjs';
import { E as ElInput } from './index-BkNGL2aN.mjs';
import { E as ElCheckbox, a as ElLink, b as ElAlert } from './el-alert-cZNBdCdv.mjs';
import { U as UIButton } from './UIButton-BaUMxFHy.mjs';
import { k as useAuthStore, b as useNuxtApp, n as navigateTo } from './server.mjs';
import { ref, computed, reactive, mergeProps, withCtx, createBlock, openBlock, createVNode, createTextVNode, unref, createCommentVNode, withModifiers, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import '@vue/shared';
import 'lodash-unified';
import 'async-validator';
import '@vueuse/core';
import './index-BKHcXdi2.mjs';
import '@ctrl/tinycolor';
import './typescript-B4MtqadT.mjs';
import './event-BZTOGHfp.mjs';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';
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

const _sfc_main = {
  __name: "login",
  __ssrInlineRender: true,
  setup(__props) {
    const authStore = useAuthStore();
    const { $toast } = useNuxtApp();
    const loginFormRef = ref();
    const loading = ref(false);
    const loginForm = ref({
      email: "",
      password: "",
      rememberMe: false
    });
    const errorMessage = computed(() => authStore.errorMessage);
    const formRules = reactive({
      email: [
        {
          required: true,
          message: "Email address is required",
          trigger: "blur"
        },
        {
          type: "email",
          message: "Please enter a valid email address",
          trigger: ["blur", "change"]
        }
      ],
      password: [
        {
          required: true,
          message: "Password is required",
          trigger: "blur"
        }
      ]
    });
    const handleSubmit = async () => {
      if (!loginFormRef.value) return;
      try {
        const valid = await loginFormRef.value.validate();
        if (!valid) return;
        loading.value = true;
        const response = await authStore.signIn({
          email: loginForm.value.email,
          password: loginForm.value.password
        });
        if (!errorMessage.value) {
          $toast.success("Welcome back!");
          await navigateTo("/");
        }
      } catch (error) {
        console.error("Login error:", error);
      } finally {
        loading.value = false;
      }
    };
    const signInWithGoogle = () => {
      $toast.info("Google sign-in coming soon!");
    };
    const navigateToSignUp = () => {
      navigateTo("/auth/register");
    };
    const navigateToForgotPassword = () => {
      navigateTo("/auth/forgot-password");
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_card = ElCard;
      const _component_IconShoppingBag = ShoppingBag;
      const _component_el_button = ElButton;
      const _component_el_icon = ElIcon;
      const _component_el_form = ElForm;
      const _component_el_form_item = ElFormItem;
      const _component_el_input = ElInput;
      const _component_el_checkbox = ElCheckbox;
      const _component_el_link = ElLink;
      const _component_UIButton = UIButton;
      const _component_el_alert = ElAlert;
      _push(ssrRenderComponent(_component_el_card, mergeProps({
        class: "auth-card",
        shadow: "hover"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="auth-icon" role="button"${_scopeId}><span class="brand-name"${_scopeId}> RingCart `);
            _push2(ssrRenderComponent(_component_IconShoppingBag, {
              size: 10,
              color: "black"
            }, null, _parent2, _scopeId));
            _push2(`</span></div><div class="auth-header"${_scopeId}><h1 class="auth-title"${_scopeId}>Welcome Back</h1><p class="auth-subtitle"${_scopeId}>Sign in to your account to continue</p></div><div class="social-buttons"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_el_button, {
              class: "social-btn google-btn",
              size: "large",
              onClick: signInWithGoogle
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_el_icon, {
                    size: 20,
                    class: "social-icon"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<svg viewBox="0 0 24 24"${_scopeId3}><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"${_scopeId3}></path><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"${_scopeId3}></path><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"${_scopeId3}></path><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"${_scopeId3}></path></svg>`);
                      } else {
                        return [
                          (openBlock(), createBlock("svg", { viewBox: "0 0 24 24" }, [
                            createVNode("path", {
                              fill: "#4285F4",
                              d: "M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                            }),
                            createVNode("path", {
                              fill: "#34A853",
                              d: "M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                            }),
                            createVNode("path", {
                              fill: "#FBBC05",
                              d: "M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                            }),
                            createVNode("path", {
                              fill: "#EA4335",
                              d: "M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                            })
                          ]))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(` Google `);
                } else {
                  return [
                    createVNode(_component_el_icon, {
                      size: 20,
                      class: "social-icon"
                    }, {
                      default: withCtx(() => [
                        (openBlock(), createBlock("svg", { viewBox: "0 0 24 24" }, [
                          createVNode("path", {
                            fill: "#4285F4",
                            d: "M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                          }),
                          createVNode("path", {
                            fill: "#34A853",
                            d: "M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                          }),
                          createVNode("path", {
                            fill: "#FBBC05",
                            d: "M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                          }),
                          createVNode("path", {
                            fill: "#EA4335",
                            d: "M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                          })
                        ]))
                      ]),
                      _: 1
                    }),
                    createTextVNode(" Google ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="divider"${_scopeId}><span class="divider-text"${_scopeId}>OR CONTINUE WITH EMAIL</span></div>`);
            _push2(ssrRenderComponent(_component_el_form, {
              ref_key: "loginFormRef",
              ref: loginFormRef,
              model: unref(loginForm),
              rules: unref(formRules),
              class: "auth-form",
              onSubmit: handleSubmit
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_el_form_item, {
                    prop: "email",
                    class: "form-item"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_el_input, {
                          modelValue: unref(loginForm).email,
                          "onUpdate:modelValue": ($event) => unref(loginForm).email = $event,
                          type: "email",
                          placeholder: "john@example.com",
                          size: "large",
                          class: "auth-input",
                          "prefix-icon": unref(message_default)
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_el_input, {
                            modelValue: unref(loginForm).email,
                            "onUpdate:modelValue": ($event) => unref(loginForm).email = $event,
                            type: "email",
                            placeholder: "john@example.com",
                            size: "large",
                            class: "auth-input",
                            "prefix-icon": unref(message_default)
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "prefix-icon"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_el_form_item, {
                    prop: "password",
                    class: "form-item"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_el_input, {
                          modelValue: unref(loginForm).password,
                          "onUpdate:modelValue": ($event) => unref(loginForm).password = $event,
                          type: "password",
                          placeholder: "Enter your password",
                          size: "large",
                          class: "auth-input",
                          "prefix-icon": unref(lock_default),
                          "show-password": ""
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_el_input, {
                            modelValue: unref(loginForm).password,
                            "onUpdate:modelValue": ($event) => unref(loginForm).password = $event,
                            type: "password",
                            placeholder: "Enter your password",
                            size: "large",
                            class: "auth-input",
                            "prefix-icon": unref(lock_default),
                            "show-password": ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "prefix-icon"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="form-options"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_el_checkbox, {
                    modelValue: unref(loginForm).rememberMe,
                    "onUpdate:modelValue": ($event) => unref(loginForm).rememberMe = $event,
                    class: "remember-checkbox"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Remember me `);
                      } else {
                        return [
                          createTextVNode(" Remember me ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_el_link, {
                    type: "primary",
                    class: "forgot-link",
                    onClick: navigateToForgotPassword
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Forgot password? `);
                      } else {
                        return [
                          createTextVNode(" Forgot password? ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                  _push3(ssrRenderComponent(_component_el_form_item, { class: "form-item" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UIButton, {
                          size: "large",
                          class: "black auth-button",
                          loading: unref(loading),
                          "native-type": "submit",
                          label: "SIGN IN"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UIButton, {
                            size: "large",
                            class: "black auth-button",
                            loading: unref(loading),
                            "native-type": "submit",
                            label: "SIGN IN"
                          }, null, 8, ["loading"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  if (unref(errorMessage)) {
                    _push3(`<div class="error-message"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_el_alert, {
                      title: unref(errorMessage),
                      type: "error",
                      closable: false,
                      "show-icon": ""
                    }, null, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    createVNode(_component_el_form_item, {
                      prop: "email",
                      class: "form-item"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_el_input, {
                          modelValue: unref(loginForm).email,
                          "onUpdate:modelValue": ($event) => unref(loginForm).email = $event,
                          type: "email",
                          placeholder: "john@example.com",
                          size: "large",
                          class: "auth-input",
                          "prefix-icon": unref(message_default)
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "prefix-icon"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_el_form_item, {
                      prop: "password",
                      class: "form-item"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_el_input, {
                          modelValue: unref(loginForm).password,
                          "onUpdate:modelValue": ($event) => unref(loginForm).password = $event,
                          type: "password",
                          placeholder: "Enter your password",
                          size: "large",
                          class: "auth-input",
                          "prefix-icon": unref(lock_default),
                          "show-password": ""
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "prefix-icon"])
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "form-options" }, [
                      createVNode(_component_el_checkbox, {
                        modelValue: unref(loginForm).rememberMe,
                        "onUpdate:modelValue": ($event) => unref(loginForm).rememberMe = $event,
                        class: "remember-checkbox"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Remember me ")
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode(_component_el_link, {
                        type: "primary",
                        class: "forgot-link",
                        onClick: navigateToForgotPassword
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Forgot password? ")
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode(_component_el_form_item, { class: "form-item" }, {
                      default: withCtx(() => [
                        createVNode(_component_UIButton, {
                          size: "large",
                          class: "black auth-button",
                          loading: unref(loading),
                          "native-type": "submit",
                          label: "SIGN IN"
                        }, null, 8, ["loading"])
                      ]),
                      _: 1
                    }),
                    unref(errorMessage) ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "error-message"
                    }, [
                      createVNode(_component_el_alert, {
                        title: unref(errorMessage),
                        type: "error",
                        closable: false,
                        "show-icon": ""
                      }, null, 8, ["title"])
                    ])) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="auth-footer"${_scopeId}><span class="footer-text"${_scopeId}>Don&#39;t have an account?</span>`);
            _push2(ssrRenderComponent(_component_el_link, {
              type: "primary",
              class: "signup-link",
              onClick: navigateToSignUp
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Sign up `);
                } else {
                  return [
                    createTextVNode(" Sign up ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", {
                class: "auth-icon",
                role: "button",
                onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))("/")
              }, [
                createVNode("span", { class: "brand-name" }, [
                  createTextVNode(" RingCart "),
                  createVNode(_component_IconShoppingBag, {
                    size: 10,
                    color: "black"
                  })
                ])
              ], 8, ["onClick"]),
              createVNode("div", { class: "auth-header" }, [
                createVNode("h1", { class: "auth-title" }, "Welcome Back"),
                createVNode("p", { class: "auth-subtitle" }, "Sign in to your account to continue")
              ]),
              createVNode("div", { class: "social-buttons" }, [
                createVNode(_component_el_button, {
                  class: "social-btn google-btn",
                  size: "large",
                  onClick: signInWithGoogle
                }, {
                  default: withCtx(() => [
                    createVNode(_component_el_icon, {
                      size: 20,
                      class: "social-icon"
                    }, {
                      default: withCtx(() => [
                        (openBlock(), createBlock("svg", { viewBox: "0 0 24 24" }, [
                          createVNode("path", {
                            fill: "#4285F4",
                            d: "M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                          }),
                          createVNode("path", {
                            fill: "#34A853",
                            d: "M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                          }),
                          createVNode("path", {
                            fill: "#FBBC05",
                            d: "M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                          }),
                          createVNode("path", {
                            fill: "#EA4335",
                            d: "M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                          })
                        ]))
                      ]),
                      _: 1
                    }),
                    createTextVNode(" Google ")
                  ]),
                  _: 1
                })
              ]),
              createVNode("div", { class: "divider" }, [
                createVNode("span", { class: "divider-text" }, "OR CONTINUE WITH EMAIL")
              ]),
              createVNode(_component_el_form, {
                ref_key: "loginFormRef",
                ref: loginFormRef,
                model: unref(loginForm),
                rules: unref(formRules),
                class: "auth-form",
                onSubmit: withModifiers(handleSubmit, ["prevent"])
              }, {
                default: withCtx(() => [
                  createVNode(_component_el_form_item, {
                    prop: "email",
                    class: "form-item"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_el_input, {
                        modelValue: unref(loginForm).email,
                        "onUpdate:modelValue": ($event) => unref(loginForm).email = $event,
                        type: "email",
                        placeholder: "john@example.com",
                        size: "large",
                        class: "auth-input",
                        "prefix-icon": unref(message_default)
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "prefix-icon"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_el_form_item, {
                    prop: "password",
                    class: "form-item"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_el_input, {
                        modelValue: unref(loginForm).password,
                        "onUpdate:modelValue": ($event) => unref(loginForm).password = $event,
                        type: "password",
                        placeholder: "Enter your password",
                        size: "large",
                        class: "auth-input",
                        "prefix-icon": unref(lock_default),
                        "show-password": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "prefix-icon"])
                    ]),
                    _: 1
                  }),
                  createVNode("div", { class: "form-options" }, [
                    createVNode(_component_el_checkbox, {
                      modelValue: unref(loginForm).rememberMe,
                      "onUpdate:modelValue": ($event) => unref(loginForm).rememberMe = $event,
                      class: "remember-checkbox"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Remember me ")
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(_component_el_link, {
                      type: "primary",
                      class: "forgot-link",
                      onClick: navigateToForgotPassword
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Forgot password? ")
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode(_component_el_form_item, { class: "form-item" }, {
                    default: withCtx(() => [
                      createVNode(_component_UIButton, {
                        size: "large",
                        class: "black auth-button",
                        loading: unref(loading),
                        "native-type": "submit",
                        label: "SIGN IN"
                      }, null, 8, ["loading"])
                    ]),
                    _: 1
                  }),
                  unref(errorMessage) ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "error-message"
                  }, [
                    createVNode(_component_el_alert, {
                      title: unref(errorMessage),
                      type: "error",
                      closable: false,
                      "show-icon": ""
                    }, null, 8, ["title"])
                  ])) : createCommentVNode("", true)
                ]),
                _: 1
              }, 8, ["model", "rules"]),
              createVNode("div", { class: "auth-footer" }, [
                createVNode("span", { class: "footer-text" }, "Don't have an account?"),
                createVNode(_component_el_link, {
                  type: "primary",
                  class: "signup-link",
                  onClick: navigateToSignUp
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Sign up ")
                  ]),
                  _: 1
                })
              ])
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

export { _sfc_main as default };
//# sourceMappingURL=login-BP7hd8Zl.mjs.map
