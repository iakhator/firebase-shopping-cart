import { E as ElCard, a as ElForm, b as ElFormItem } from './index-Bbz8LALq.mjs';
import { S as ShoppingBag } from './shopping-bag-C9kEades.mjs';
import { E as ElButton, a as ElIcon, W as user_default, F as message_default, G as lock_default } from './el-button-etDYgHTt.mjs';
import { E as ElRow, a as ElCol } from './index-Dzx92B6d.mjs';
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
  __name: "register",
  __ssrInlineRender: true,
  setup(__props) {
    const authStore = useAuthStore();
    const { $toast } = useNuxtApp();
    const registerFormRef = ref();
    const loading = ref(false);
    const registerForm = ref({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      acceptTerms: false
    });
    const errorMessage = computed(() => authStore.errorMessage);
    const validateConfirmPassword = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("Please confirm your password"));
      } else if (value !== registerForm.value.password) {
        callback(new Error("Passwords do not match"));
      } else {
        callback();
      }
    };
    const formRules = reactive({
      firstName: [
        {
          required: true,
          message: "First name is required",
          trigger: "blur"
        },
        {
          min: 2,
          message: "First name must be at least 2 characters long",
          trigger: "blur"
        }
      ],
      lastName: [
        {
          required: true,
          message: "Last name is required",
          trigger: "blur"
        },
        {
          min: 2,
          message: "Last name must be at least 2 characters long",
          trigger: "blur"
        }
      ],
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
        },
        {
          min: 4,
          message: "Password must be at least 8 characters long",
          trigger: "blur"
        }
        // {
        //   pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
        //   message:
        //     'Password must contain at least one uppercase letter, one lowercase letter, and one number',
        //   trigger: 'blur',
        // },
      ],
      confirmPassword: [
        {
          required: true,
          validator: validateConfirmPassword,
          trigger: "blur"
        }
      ],
      acceptTerms: [
        {
          type: "boolean",
          required: true,
          message: "You must accept the terms and conditions",
          trigger: "change"
        },
        {
          validator: (rule, value, callback) => {
            if (!value) {
              callback(
                new Error("You must accept the terms and conditions")
              );
            } else {
              callback();
            }
          },
          trigger: "change"
        }
      ]
    });
    const handleSubmit = async () => {
      errorMessage.value = "";
      if (!registerFormRef.value) return;
      try {
        const valid = await registerFormRef.value.validate();
        if (!valid) return;
        loading.value = true;
        const response = await authStore.signUp({
          email: registerForm.value.email,
          password: registerForm.value.password,
          firstName: registerForm.value.firstName,
          lastName: registerForm.value.lastName
        });
        if (!errorMessage.value && response.success) {
          registerForm.value = {};
          await navigateTo(`/verify/${response.code}`);
        }
      } catch (error) {
        console.error("Registration error:", error);
      } finally {
        loading.value = false;
      }
    };
    const signUpWithGoogle = () => {
      $toast.info("Google sign-up coming soon!");
    };
    const navigateToSignIn = () => {
      navigateTo("/auth/login");
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_card = ElCard;
      const _component_IconShoppingBag = ShoppingBag;
      const _component_el_button = ElButton;
      const _component_el_icon = ElIcon;
      const _component_el_form = ElForm;
      const _component_el_row = ElRow;
      const _component_el_col = ElCol;
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
            _push2(`</span></div><div class="auth-header"${_scopeId}><h1 class="auth-title"${_scopeId}>Create Account</h1><p class="auth-subtitle"${_scopeId}> Sign up to get started with your account </p></div><div class="social-buttons"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_el_button, {
              class: "social-btn google-btn",
              size: "large",
              onClick: signUpWithGoogle
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
              ref_key: "registerFormRef",
              ref: registerFormRef,
              model: unref(registerForm),
              rules: unref(formRules),
              class: "auth-form",
              onSubmit: handleSubmit
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_el_row, { gutter: 12 }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_el_col, { span: 12 }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_el_form_item, {
                                prop: "firstName",
                                class: "form-item"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_el_input, {
                                      modelValue: unref(registerForm).firstName,
                                      "onUpdate:modelValue": ($event) => unref(registerForm).firstName = $event,
                                      placeholder: "First name",
                                      size: "large",
                                      class: "auth-input",
                                      "prefix-icon": unref(user_default)
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_el_input, {
                                        modelValue: unref(registerForm).firstName,
                                        "onUpdate:modelValue": ($event) => unref(registerForm).firstName = $event,
                                        placeholder: "First name",
                                        size: "large",
                                        class: "auth-input",
                                        "prefix-icon": unref(user_default)
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "prefix-icon"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_el_form_item, {
                                  prop: "firstName",
                                  class: "form-item"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_el_input, {
                                      modelValue: unref(registerForm).firstName,
                                      "onUpdate:modelValue": ($event) => unref(registerForm).firstName = $event,
                                      placeholder: "First name",
                                      size: "large",
                                      class: "auth-input",
                                      "prefix-icon": unref(user_default)
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "prefix-icon"])
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_el_col, { span: 12 }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_el_form_item, {
                                prop: "lastName",
                                class: "form-item"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_el_input, {
                                      modelValue: unref(registerForm).lastName,
                                      "onUpdate:modelValue": ($event) => unref(registerForm).lastName = $event,
                                      placeholder: "Last name",
                                      size: "large",
                                      class: "auth-input",
                                      "prefix-icon": unref(user_default)
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_el_input, {
                                        modelValue: unref(registerForm).lastName,
                                        "onUpdate:modelValue": ($event) => unref(registerForm).lastName = $event,
                                        placeholder: "Last name",
                                        size: "large",
                                        class: "auth-input",
                                        "prefix-icon": unref(user_default)
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "prefix-icon"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_el_form_item, {
                                  prop: "lastName",
                                  class: "form-item"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_el_input, {
                                      modelValue: unref(registerForm).lastName,
                                      "onUpdate:modelValue": ($event) => unref(registerForm).lastName = $event,
                                      placeholder: "Last name",
                                      size: "large",
                                      class: "auth-input",
                                      "prefix-icon": unref(user_default)
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "prefix-icon"])
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
                          createVNode(_component_el_col, { span: 12 }, {
                            default: withCtx(() => [
                              createVNode(_component_el_form_item, {
                                prop: "firstName",
                                class: "form-item"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_el_input, {
                                    modelValue: unref(registerForm).firstName,
                                    "onUpdate:modelValue": ($event) => unref(registerForm).firstName = $event,
                                    placeholder: "First name",
                                    size: "large",
                                    class: "auth-input",
                                    "prefix-icon": unref(user_default)
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "prefix-icon"])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_el_col, { span: 12 }, {
                            default: withCtx(() => [
                              createVNode(_component_el_form_item, {
                                prop: "lastName",
                                class: "form-item"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_el_input, {
                                    modelValue: unref(registerForm).lastName,
                                    "onUpdate:modelValue": ($event) => unref(registerForm).lastName = $event,
                                    placeholder: "Last name",
                                    size: "large",
                                    class: "auth-input",
                                    "prefix-icon": unref(user_default)
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "prefix-icon"])
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
                  _push3(ssrRenderComponent(_component_el_form_item, {
                    prop: "email",
                    class: "form-item"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_el_input, {
                          modelValue: unref(registerForm).email,
                          "onUpdate:modelValue": ($event) => unref(registerForm).email = $event,
                          type: "email",
                          placeholder: "john@example.com",
                          size: "large",
                          class: "auth-input",
                          "prefix-icon": unref(message_default)
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_el_input, {
                            modelValue: unref(registerForm).email,
                            "onUpdate:modelValue": ($event) => unref(registerForm).email = $event,
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
                          modelValue: unref(registerForm).password,
                          "onUpdate:modelValue": ($event) => unref(registerForm).password = $event,
                          type: "password",
                          placeholder: "Create password",
                          size: "large",
                          class: "auth-input",
                          "prefix-icon": unref(lock_default),
                          "show-password": ""
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_el_input, {
                            modelValue: unref(registerForm).password,
                            "onUpdate:modelValue": ($event) => unref(registerForm).password = $event,
                            type: "password",
                            placeholder: "Create password",
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
                  _push3(ssrRenderComponent(_component_el_form_item, {
                    prop: "confirmPassword",
                    class: "form-item"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_el_input, {
                          modelValue: unref(registerForm).confirmPassword,
                          "onUpdate:modelValue": ($event) => unref(registerForm).confirmPassword = $event,
                          type: "password",
                          placeholder: "Confirm password",
                          size: "large",
                          class: "auth-input",
                          "prefix-icon": unref(lock_default),
                          "show-password": ""
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_el_input, {
                            modelValue: unref(registerForm).confirmPassword,
                            "onUpdate:modelValue": ($event) => unref(registerForm).confirmPassword = $event,
                            type: "password",
                            placeholder: "Confirm password",
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
                  _push3(ssrRenderComponent(_component_el_form_item, {
                    prop: "acceptTerms",
                    class: "form-item"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_el_checkbox, {
                          modelValue: unref(registerForm).acceptTerms,
                          "onUpdate:modelValue": ($event) => unref(registerForm).acceptTerms = $event,
                          class: "terms-checkbox"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` I agree to the `);
                              _push5(ssrRenderComponent(_component_el_link, {
                                type: "primary",
                                class: "terms-link"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` Terms of Service `);
                                  } else {
                                    return [
                                      createTextVNode(" Terms of Service ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(` and `);
                              _push5(ssrRenderComponent(_component_el_link, {
                                type: "primary",
                                class: "terms-link"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` Privacy Policy `);
                                  } else {
                                    return [
                                      createTextVNode(" Privacy Policy ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createTextVNode(" I agree to the "),
                                createVNode(_component_el_link, {
                                  type: "primary",
                                  class: "terms-link"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Terms of Service ")
                                  ]),
                                  _: 1
                                }),
                                createTextVNode(" and "),
                                createVNode(_component_el_link, {
                                  type: "primary",
                                  class: "terms-link"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Privacy Policy ")
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
                          createVNode(_component_el_checkbox, {
                            modelValue: unref(registerForm).acceptTerms,
                            "onUpdate:modelValue": ($event) => unref(registerForm).acceptTerms = $event,
                            class: "terms-checkbox"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" I agree to the "),
                              createVNode(_component_el_link, {
                                type: "primary",
                                class: "terms-link"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Terms of Service ")
                                ]),
                                _: 1
                              }),
                              createTextVNode(" and "),
                              createVNode(_component_el_link, {
                                type: "primary",
                                class: "terms-link"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Privacy Policy ")
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
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_el_form_item, { class: "form-item" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UIButton, {
                          size: "large",
                          class: "black auth-button",
                          loading: unref(loading),
                          "native-type": "submit",
                          onClick: handleSubmit,
                          label: "Create Account"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UIButton, {
                            size: "large",
                            class: "black auth-button",
                            loading: unref(loading),
                            "native-type": "submit",
                            onClick: handleSubmit,
                            label: "Create Account"
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
                    createVNode(_component_el_row, { gutter: 12 }, {
                      default: withCtx(() => [
                        createVNode(_component_el_col, { span: 12 }, {
                          default: withCtx(() => [
                            createVNode(_component_el_form_item, {
                              prop: "firstName",
                              class: "form-item"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_el_input, {
                                  modelValue: unref(registerForm).firstName,
                                  "onUpdate:modelValue": ($event) => unref(registerForm).firstName = $event,
                                  placeholder: "First name",
                                  size: "large",
                                  class: "auth-input",
                                  "prefix-icon": unref(user_default)
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "prefix-icon"])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_el_col, { span: 12 }, {
                          default: withCtx(() => [
                            createVNode(_component_el_form_item, {
                              prop: "lastName",
                              class: "form-item"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_el_input, {
                                  modelValue: unref(registerForm).lastName,
                                  "onUpdate:modelValue": ($event) => unref(registerForm).lastName = $event,
                                  placeholder: "Last name",
                                  size: "large",
                                  class: "auth-input",
                                  "prefix-icon": unref(user_default)
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "prefix-icon"])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_el_form_item, {
                      prop: "email",
                      class: "form-item"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_el_input, {
                          modelValue: unref(registerForm).email,
                          "onUpdate:modelValue": ($event) => unref(registerForm).email = $event,
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
                          modelValue: unref(registerForm).password,
                          "onUpdate:modelValue": ($event) => unref(registerForm).password = $event,
                          type: "password",
                          placeholder: "Create password",
                          size: "large",
                          class: "auth-input",
                          "prefix-icon": unref(lock_default),
                          "show-password": ""
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "prefix-icon"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_el_form_item, {
                      prop: "confirmPassword",
                      class: "form-item"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_el_input, {
                          modelValue: unref(registerForm).confirmPassword,
                          "onUpdate:modelValue": ($event) => unref(registerForm).confirmPassword = $event,
                          type: "password",
                          placeholder: "Confirm password",
                          size: "large",
                          class: "auth-input",
                          "prefix-icon": unref(lock_default),
                          "show-password": ""
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "prefix-icon"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_el_form_item, {
                      prop: "acceptTerms",
                      class: "form-item"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_el_checkbox, {
                          modelValue: unref(registerForm).acceptTerms,
                          "onUpdate:modelValue": ($event) => unref(registerForm).acceptTerms = $event,
                          class: "terms-checkbox"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" I agree to the "),
                            createVNode(_component_el_link, {
                              type: "primary",
                              class: "terms-link"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Terms of Service ")
                              ]),
                              _: 1
                            }),
                            createTextVNode(" and "),
                            createVNode(_component_el_link, {
                              type: "primary",
                              class: "terms-link"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Privacy Policy ")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_el_form_item, { class: "form-item" }, {
                      default: withCtx(() => [
                        createVNode(_component_UIButton, {
                          size: "large",
                          class: "black auth-button",
                          loading: unref(loading),
                          "native-type": "submit",
                          onClick: handleSubmit,
                          label: "Create Account"
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
            _push2(`<div class="auth-footer"${_scopeId}><span class="footer-text"${_scopeId}>Already have an account?</span>`);
            _push2(ssrRenderComponent(_component_el_link, {
              type: "primary",
              class: "signin-link",
              onClick: navigateToSignIn
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Sign in `);
                } else {
                  return [
                    createTextVNode(" Sign in ")
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
                createVNode("h1", { class: "auth-title" }, "Create Account"),
                createVNode("p", { class: "auth-subtitle" }, " Sign up to get started with your account ")
              ]),
              createVNode("div", { class: "social-buttons" }, [
                createVNode(_component_el_button, {
                  class: "social-btn google-btn",
                  size: "large",
                  onClick: signUpWithGoogle
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
                ref_key: "registerFormRef",
                ref: registerFormRef,
                model: unref(registerForm),
                rules: unref(formRules),
                class: "auth-form",
                onSubmit: withModifiers(handleSubmit, ["prevent"])
              }, {
                default: withCtx(() => [
                  createVNode(_component_el_row, { gutter: 12 }, {
                    default: withCtx(() => [
                      createVNode(_component_el_col, { span: 12 }, {
                        default: withCtx(() => [
                          createVNode(_component_el_form_item, {
                            prop: "firstName",
                            class: "form-item"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_el_input, {
                                modelValue: unref(registerForm).firstName,
                                "onUpdate:modelValue": ($event) => unref(registerForm).firstName = $event,
                                placeholder: "First name",
                                size: "large",
                                class: "auth-input",
                                "prefix-icon": unref(user_default)
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "prefix-icon"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_el_col, { span: 12 }, {
                        default: withCtx(() => [
                          createVNode(_component_el_form_item, {
                            prop: "lastName",
                            class: "form-item"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_el_input, {
                                modelValue: unref(registerForm).lastName,
                                "onUpdate:modelValue": ($event) => unref(registerForm).lastName = $event,
                                placeholder: "Last name",
                                size: "large",
                                class: "auth-input",
                                "prefix-icon": unref(user_default)
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "prefix-icon"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_el_form_item, {
                    prop: "email",
                    class: "form-item"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_el_input, {
                        modelValue: unref(registerForm).email,
                        "onUpdate:modelValue": ($event) => unref(registerForm).email = $event,
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
                        modelValue: unref(registerForm).password,
                        "onUpdate:modelValue": ($event) => unref(registerForm).password = $event,
                        type: "password",
                        placeholder: "Create password",
                        size: "large",
                        class: "auth-input",
                        "prefix-icon": unref(lock_default),
                        "show-password": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "prefix-icon"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_el_form_item, {
                    prop: "confirmPassword",
                    class: "form-item"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_el_input, {
                        modelValue: unref(registerForm).confirmPassword,
                        "onUpdate:modelValue": ($event) => unref(registerForm).confirmPassword = $event,
                        type: "password",
                        placeholder: "Confirm password",
                        size: "large",
                        class: "auth-input",
                        "prefix-icon": unref(lock_default),
                        "show-password": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "prefix-icon"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_el_form_item, {
                    prop: "acceptTerms",
                    class: "form-item"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_el_checkbox, {
                        modelValue: unref(registerForm).acceptTerms,
                        "onUpdate:modelValue": ($event) => unref(registerForm).acceptTerms = $event,
                        class: "terms-checkbox"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" I agree to the "),
                          createVNode(_component_el_link, {
                            type: "primary",
                            class: "terms-link"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Terms of Service ")
                            ]),
                            _: 1
                          }),
                          createTextVNode(" and "),
                          createVNode(_component_el_link, {
                            type: "primary",
                            class: "terms-link"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Privacy Policy ")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_el_form_item, { class: "form-item" }, {
                    default: withCtx(() => [
                      createVNode(_component_UIButton, {
                        size: "large",
                        class: "black auth-button",
                        loading: unref(loading),
                        "native-type": "submit",
                        onClick: handleSubmit,
                        label: "Create Account"
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
                createVNode("span", { class: "footer-text" }, "Already have an account?"),
                createVNode(_component_el_link, {
                  type: "primary",
                  class: "signin-link",
                  onClick: navigateToSignIn
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Sign in ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/auth/register.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=register-Cw75gQpU.mjs.map
