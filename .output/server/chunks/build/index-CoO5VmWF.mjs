import { E as ElBreadcrumb, a as ElBreadcrumbItem } from './index-D2pPoUN4.mjs';
import { U as UIButton } from './UIButton-BaUMxFHy.mjs';
import { a as ElIcon, Q as box_default, E as ElButton, R as plus_default, c as close_default, d as check_default, S as van_default, U as clock_default, W as user_default, F as message_default, X as phone_default, Y as location_default, Z as credit_card_default, $ as calendar_default, a0 as refresh_default } from './el-button-etDYgHTt.mjs';
import { E as ElCollapseTransition } from './index-FLfwbDF9.mjs';
import { c as countryMap } from './index-C_WjPGsK.mjs';
import { ref, computed, mergeProps, withCtx, createTextVNode, createVNode, unref, resolveDynamicComponent, createBlock, openBlock, createCommentVNode, Fragment, renderList, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderClass, ssrRenderVNode, ssrRenderAttr } from 'vue/server-renderer';
import { L as LoadingSpinner } from './LoadingSpinner-MiiBik8p.mjs';
import { u as useCurrency } from './useCurrency-jRJRFhrU.mjs';
import { u as useOrderStore } from './useOrderStore-D07Ijwbo.mjs';
import { b as useNuxtApp } from './server.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import 'lodash-unified';
import '@vue/shared';
import '@vueuse/core';
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

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { toUSD } = useCurrency();
    const { orders, isLoading } = useOrderStore();
    const { $dayjs } = useNuxtApp();
    const statusConfig = {
      processing: {
        label: "Processing",
        icon: clock_default,
        className: "status-pending"
      },
      shipped: {
        label: "Shipped",
        icon: van_default,
        className: "status-shipped"
      },
      delivered: {
        label: "Delivered",
        icon: check_default,
        className: "status-delivered"
      },
      cancelled: {
        label: "Cancelled",
        icon: close_default,
        className: "status-cancelled"
      }
    };
    const filterOptions = [
      { value: "all", label: "All Orders" },
      { value: "processing", label: "Processing" },
      { value: "shipped", label: "Shipped" },
      { value: "delivered", label: "Delivered" },
      { value: "cancelled", label: "Cancelled" }
    ];
    const selectedFilter = ref("all");
    const expandedOrderId = ref(null);
    const filteredOrders = computed(() => {
      if (!Array.isArray(orders.value)) return [];
      if (selectedFilter.value === "all") return orders.value;
      return orders.value.filter((order) => order.status === selectedFilter.value);
    });
    function toggleOrderExpansion(orderId) {
      expandedOrderId.value = expandedOrderId.value === orderId ? null : orderId;
    }
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_ElBreadcrumb = ElBreadcrumb;
      const _component_ElBreadcrumbItem = ElBreadcrumbItem;
      const _component_UIButton = UIButton;
      const _component_el_icon = ElIcon;
      const _component_el_button = ElButton;
      const _component_el_collapse_transition = ElCollapseTransition;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "order-list-container" }, _attrs))} data-v-334eb080>`);
      _push(ssrRenderComponent(_component_ElBreadcrumb, { separator: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ElBreadcrumbItem, { to: "/" }, {
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
            _push2(ssrRenderComponent(_component_ElBreadcrumbItem, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Orders`);
                } else {
                  return [
                    createTextVNode("Orders")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_ElBreadcrumbItem, { to: "/" }, {
                default: withCtx(() => [
                  createTextVNode("Home")
                ]),
                _: 1
              }),
              createVNode(_component_ElBreadcrumbItem, null, {
                default: withCtx(() => [
                  createTextVNode("Orders")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="mb-4" data-v-334eb080><h2 class="mb-2 font-briscolade text-2xl" data-v-334eb080>My Orders</h2><p class="text-gray-600" data-v-334eb080> View and manage all your orders, track shipments, and review your purchase history. </p></div><div class="filter-bar" data-v-334eb080><div class="filter-buttons" data-v-334eb080><!--[-->`);
      ssrRenderList(filterOptions, (option) => {
        _push(ssrRenderComponent(_component_UIButton, {
          key: option.value,
          label: option.label,
          size: "small",
          variant: "success",
          style: { "flex-basis": "fit-content" },
          onClick: ($event) => selectedFilter.value = option.value,
          type: selectedFilter.value === option.value ? "primary" : "default"
        }, null, _parent));
      });
      _push(`<!--]--></div></div>`);
      if (unref(isLoading)) {
        _push(ssrRenderComponent(LoadingSpinner, {
          type: "spinner",
          message: "Loading orders..."
        }, null, _parent));
      } else if (!((_a = filteredOrders.value) == null ? void 0 : _a.length)) {
        _push(`<div class="empty-state" data-v-334eb080>`);
        _push(ssrRenderComponent(_component_el_icon, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(unref(box_default), null, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(unref(box_default))
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<h3 data-v-334eb080>No orders found</h3><p data-v-334eb080>Start shopping to fill your cart!</p></div>`);
      } else {
        _push(`<div class="orders-container" data-v-334eb080><!--[-->`);
        ssrRenderList(filteredOrders.value, (order) => {
          var _a2, _b;
          _push(`<div class="order-card" data-v-334eb080><div class="order-header" data-v-334eb080><div class="order-header-left" data-v-334eb080>`);
          _push(ssrRenderComponent(_component_el_button, {
            onClick: ($event) => toggleOrderExpansion(order.id),
            circle: "",
            size: "small",
            class: "expand-button"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_el_icon, null, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(unref(plus_default), {
                        class: {
                          rotated: expandedOrderId.value === order.id
                        }
                      }, null, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(unref(plus_default), {
                          class: {
                            rotated: expandedOrderId.value === order.id
                          }
                        }, null, 8, ["class"])
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              } else {
                return [
                  createVNode(_component_el_icon, null, {
                    default: withCtx(() => [
                      createVNode(unref(plus_default), {
                        class: {
                          rotated: expandedOrderId.value === order.id
                        }
                      }, null, 8, ["class"])
                    ]),
                    _: 2
                  }, 1024)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`<div class="order-info" data-v-334eb080><h3 data-v-334eb080>${ssrInterpolate(order.id)}</h3><p data-v-334eb080> Ordered on ${ssrInterpolate(unref($dayjs)(order.createdAt).format("MMMM D, YYYY"))}</p></div></div><div class="${ssrRenderClass([(_a2 = statusConfig[order.status]) == null ? void 0 : _a2.className, "status-badge"])}" data-v-334eb080>`);
          _push(ssrRenderComponent(_component_el_icon, null, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              var _a3, _b2;
              if (_push2) {
                ssrRenderVNode(_push2, createVNode(resolveDynamicComponent((_a3 = statusConfig[order.status]) == null ? void 0 : _a3.icon), { class: "status-icon" }, null), _parent2, _scopeId);
              } else {
                return [
                  (openBlock(), createBlock(resolveDynamicComponent((_b2 = statusConfig[order.status]) == null ? void 0 : _b2.icon), { class: "status-icon" }))
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(` ${ssrInterpolate((_b = statusConfig[order.status]) == null ? void 0 : _b.label)}</div></div>`);
          _push(ssrRenderComponent(_component_el_collapse_transition, null, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              var _a3, _b2, _c, _d, _e, _f;
              if (_push2) {
                if (expandedOrderId.value === order.id) {
                  _push2(`<div class="order-details" data-v-334eb080${_scopeId}><div class="order-details-content" data-v-334eb080${_scopeId}><div data-v-334eb080${_scopeId}><h4 class="section-title" data-v-334eb080${_scopeId}>Order Items</h4><div class="order-items" data-v-334eb080${_scopeId}><!--[-->`);
                  ssrRenderList(order.items, (item, idx) => {
                    _push2(`<div class="order-item" data-v-334eb080${_scopeId}><img${ssrRenderAttr("src", item.imageUrl || "")}${ssrRenderAttr("alt", item.name)} class="item-image" data-v-334eb080${_scopeId}><div class="item-info" data-v-334eb080${_scopeId}><h5 data-v-334eb080${_scopeId}>${ssrInterpolate(item.name)}</h5><p data-v-334eb080${_scopeId}> Quantity: ${ssrInterpolate(item.quantity)}</p></div><div class="item-price" data-v-334eb080${_scopeId}><p data-v-334eb080${_scopeId}>${ssrInterpolate(unref(toUSD)(item.price * item.quantity))}</p></div></div>`);
                  });
                  _push2(`<!--]--></div></div><div class="order-total" data-v-334eb080${_scopeId}><span data-v-334eb080${_scopeId}>Total</span><span data-v-334eb080${_scopeId}>${ssrInterpolate(unref(toUSD)(order.amount / 100))}</span></div><div class="info-section" data-v-334eb080${_scopeId}><h4 class="info-section-title" data-v-334eb080${_scopeId}>`);
                  _push2(ssrRenderComponent(_component_el_icon, null, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(ssrRenderComponent(unref(user_default), null, null, _parent3, _scopeId2));
                      } else {
                        return [
                          createVNode(unref(user_default))
                        ];
                      }
                    }),
                    _: 2
                  }, _parent2, _scopeId));
                  _push2(` Customer Information </h4><div class="customer-info" data-v-334eb080${_scopeId}><p class="customer-name" data-v-334eb080${_scopeId}>${ssrInterpolate((_a3 = order.customer) == null ? void 0 : _a3.name)}</p><div class="contact-info" data-v-334eb080${_scopeId}>`);
                  _push2(ssrRenderComponent(_component_el_icon, null, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(ssrRenderComponent(unref(message_default), null, null, _parent3, _scopeId2));
                      } else {
                        return [
                          createVNode(unref(message_default))
                        ];
                      }
                    }),
                    _: 2
                  }, _parent2, _scopeId));
                  _push2(` ${ssrInterpolate(((_b2 = order.customer) == null ? void 0 : _b2.email) || "N/A")}</div><div class="contact-info" data-v-334eb080${_scopeId}>`);
                  _push2(ssrRenderComponent(_component_el_icon, null, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(ssrRenderComponent(unref(phone_default), null, null, _parent3, _scopeId2));
                      } else {
                        return [
                          createVNode(unref(phone_default))
                        ];
                      }
                    }),
                    _: 2
                  }, _parent2, _scopeId));
                  _push2(` ${ssrInterpolate(((_c = order.customer) == null ? void 0 : _c.phone) || "N/A")}</div></div></div><div class="info-section" data-v-334eb080${_scopeId}><h4 class="info-section-title" data-v-334eb080${_scopeId}>`);
                  _push2(ssrRenderComponent(_component_el_icon, null, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(ssrRenderComponent(unref(location_default), null, null, _parent3, _scopeId2));
                      } else {
                        return [
                          createVNode(unref(location_default))
                        ];
                      }
                    }),
                    _: 2
                  }, _parent2, _scopeId));
                  _push2(` Shipping Address </h4><div class="address-info" data-v-334eb080${_scopeId}><p data-v-334eb080${_scopeId}>${ssrInterpolate(order.shippingAddress.street)}</p><p data-v-334eb080${_scopeId}>${ssrInterpolate(order.shippingAddress.city)}, ${ssrInterpolate(order.shippingAddress.state)} ${ssrInterpolate(order.shippingAddress.postalCode)}</p><p data-v-334eb080${_scopeId}>${ssrInterpolate(("countryMap" in _ctx ? _ctx.countryMap : unref(countryMap))[order.shippingAddress.country] || order.shippingAddress.country)}</p></div></div><div class="info-grid" data-v-334eb080${_scopeId}><div class="info-section" data-v-334eb080${_scopeId}><h4 class="info-section-title" data-v-334eb080${_scopeId}>`);
                  _push2(ssrRenderComponent(_component_el_icon, null, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(ssrRenderComponent(unref(credit_card_default), null, null, _parent3, _scopeId2));
                      } else {
                        return [
                          createVNode(unref(credit_card_default))
                        ];
                      }
                    }),
                    _: 2
                  }, _parent2, _scopeId));
                  _push2(` Payment Method </h4><p data-v-334eb080${_scopeId}>${ssrInterpolate((order == null ? void 0 : order.paymentMethod) || "N/A")}</p></div>`);
                  if (order == null ? void 0 : order.estimatedDelivery) {
                    _push2(`<div class="info-section" data-v-334eb080${_scopeId}><h4 class="info-section-title" data-v-334eb080${_scopeId}>`);
                    _push2(ssrRenderComponent(_component_el_icon, null, {
                      default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                        if (_push3) {
                          _push3(ssrRenderComponent(unref(calendar_default), null, null, _parent3, _scopeId2));
                        } else {
                          return [
                            createVNode(unref(calendar_default))
                          ];
                        }
                      }),
                      _: 2
                    }, _parent2, _scopeId));
                    _push2(` Estimated Delivery </h4><p data-v-334eb080${_scopeId}>${ssrInterpolate(unref($dayjs)(order.estimatedDelivery).format("MMMM D, YYYY"))}</p></div>`);
                  } else {
                    _push2(`<!---->`);
                  }
                  _push2(`</div>`);
                  if (order == null ? void 0 : order.orderNotes) {
                    _push2(`<div class="order-notes" data-v-334eb080${_scopeId}><h4 data-v-334eb080${_scopeId}>Order Notes</h4><p data-v-334eb080${_scopeId}>${ssrInterpolate(order.orderNotes)}</p></div>`);
                  } else {
                    _push2(`<!---->`);
                  }
                  if (order == null ? void 0 : order.trackingNumber) {
                    _push2(`<div class="tracking-info" data-v-334eb080${_scopeId}>`);
                    _push2(ssrRenderComponent(_component_el_icon, null, {
                      default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                        if (_push3) {
                          _push3(ssrRenderComponent(unref(location_default), null, null, _parent3, _scopeId2));
                        } else {
                          return [
                            createVNode(unref(location_default))
                          ];
                        }
                      }),
                      _: 2
                    }, _parent2, _scopeId));
                    _push2(`<span data-v-334eb080${_scopeId}>Tracking:</span><span class="tracking-number" data-v-334eb080${_scopeId}>${ssrInterpolate(order.trackingNumber)}</span></div>`);
                  } else {
                    _push2(`<!---->`);
                  }
                  _push2(`<div class="action-buttons" data-v-334eb080${_scopeId}>`);
                  if ((order == null ? void 0 : order.status) === "delivered") {
                    _push2(ssrRenderComponent(_component_UIButton, {
                      label: "Reorder",
                      style: { "flex-basis": "fit-content" }
                    }, {
                      icon: withCtx((_2, _push3, _parent3, _scopeId2) => {
                        if (_push3) {
                          _push3(ssrRenderComponent(_component_el_icon, null, {
                            default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                              if (_push4) {
                                _push4(ssrRenderComponent(unref(refresh_default), null, null, _parent4, _scopeId3));
                              } else {
                                return [
                                  createVNode(unref(refresh_default))
                                ];
                              }
                            }),
                            _: 2
                          }, _parent3, _scopeId2));
                        } else {
                          return [
                            createVNode(_component_el_icon, null, {
                              default: withCtx(() => [
                                createVNode(unref(refresh_default))
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                        if (_push3) {
                          _push3(` Reorder `);
                        } else {
                          return [
                            createTextVNode(" Reorder ")
                          ];
                        }
                      }),
                      _: 2
                    }, _parent2, _scopeId));
                  } else {
                    _push2(`<!---->`);
                  }
                  if (((order == null ? void 0 : order.status) === "shipped" || order.status === "pending") && order.trackingNumber) {
                    _push2(ssrRenderComponent(_component_UIButton, {
                      label: "Track Shipment",
                      variant: "success",
                      style: { "flex-basis": "fit-content" }
                    }, {
                      icon: withCtx((_2, _push3, _parent3, _scopeId2) => {
                        if (_push3) {
                          _push3(ssrRenderComponent(_component_el_icon, null, {
                            default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                              if (_push4) {
                                _push4(ssrRenderComponent(unref(van_default), null, null, _parent4, _scopeId3));
                              } else {
                                return [
                                  createVNode(unref(van_default))
                                ];
                              }
                            }),
                            _: 2
                          }, _parent3, _scopeId2));
                        } else {
                          return [
                            createVNode(_component_el_icon, null, {
                              default: withCtx(() => [
                                createVNode(unref(van_default))
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                        if (_push3) {
                          _push3(` Reorder `);
                        } else {
                          return [
                            createTextVNode(" Reorder ")
                          ];
                        }
                      }),
                      _: 2
                    }, _parent2, _scopeId));
                  } else {
                    _push2(`<!---->`);
                  }
                  _push2(`</div></div></div>`);
                } else {
                  _push2(`<!---->`);
                }
              } else {
                return [
                  expandedOrderId.value === order.id ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "order-details"
                  }, [
                    createVNode("div", { class: "order-details-content" }, [
                      createVNode("div", null, [
                        createVNode("h4", { class: "section-title" }, "Order Items"),
                        createVNode("div", { class: "order-items" }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(order.items, (item, idx) => {
                            return openBlock(), createBlock("div", {
                              key: idx,
                              class: "order-item"
                            }, [
                              createVNode("img", {
                                src: item.imageUrl || "",
                                alt: item.name,
                                class: "item-image"
                              }, null, 8, ["src", "alt"]),
                              createVNode("div", { class: "item-info" }, [
                                createVNode("h5", null, toDisplayString(item.name), 1),
                                createVNode("p", null, " Quantity: " + toDisplayString(item.quantity), 1)
                              ]),
                              createVNode("div", { class: "item-price" }, [
                                createVNode("p", null, toDisplayString(unref(toUSD)(item.price * item.quantity)), 1)
                              ])
                            ]);
                          }), 128))
                        ])
                      ]),
                      createVNode("div", { class: "order-total" }, [
                        createVNode("span", null, "Total"),
                        createVNode("span", null, toDisplayString(unref(toUSD)(order.amount / 100)), 1)
                      ]),
                      createVNode("div", { class: "info-section" }, [
                        createVNode("h4", { class: "info-section-title" }, [
                          createVNode(_component_el_icon, null, {
                            default: withCtx(() => [
                              createVNode(unref(user_default))
                            ]),
                            _: 1
                          }),
                          createTextVNode(" Customer Information ")
                        ]),
                        createVNode("div", { class: "customer-info" }, [
                          createVNode("p", { class: "customer-name" }, toDisplayString((_d = order.customer) == null ? void 0 : _d.name), 1),
                          createVNode("div", { class: "contact-info" }, [
                            createVNode(_component_el_icon, null, {
                              default: withCtx(() => [
                                createVNode(unref(message_default))
                              ]),
                              _: 1
                            }),
                            createTextVNode(" " + toDisplayString(((_e = order.customer) == null ? void 0 : _e.email) || "N/A"), 1)
                          ]),
                          createVNode("div", { class: "contact-info" }, [
                            createVNode(_component_el_icon, null, {
                              default: withCtx(() => [
                                createVNode(unref(phone_default))
                              ]),
                              _: 1
                            }),
                            createTextVNode(" " + toDisplayString(((_f = order.customer) == null ? void 0 : _f.phone) || "N/A"), 1)
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "info-section" }, [
                        createVNode("h4", { class: "info-section-title" }, [
                          createVNode(_component_el_icon, null, {
                            default: withCtx(() => [
                              createVNode(unref(location_default))
                            ]),
                            _: 1
                          }),
                          createTextVNode(" Shipping Address ")
                        ]),
                        createVNode("div", { class: "address-info" }, [
                          createVNode("p", null, toDisplayString(order.shippingAddress.street), 1),
                          createVNode("p", null, toDisplayString(order.shippingAddress.city) + ", " + toDisplayString(order.shippingAddress.state) + " " + toDisplayString(order.shippingAddress.postalCode), 1),
                          createVNode("p", null, toDisplayString(("countryMap" in _ctx ? _ctx.countryMap : unref(countryMap))[order.shippingAddress.country] || order.shippingAddress.country), 1)
                        ])
                      ]),
                      createVNode("div", { class: "info-grid" }, [
                        createVNode("div", { class: "info-section" }, [
                          createVNode("h4", { class: "info-section-title" }, [
                            createVNode(_component_el_icon, null, {
                              default: withCtx(() => [
                                createVNode(unref(credit_card_default))
                              ]),
                              _: 1
                            }),
                            createTextVNode(" Payment Method ")
                          ]),
                          createVNode("p", null, toDisplayString((order == null ? void 0 : order.paymentMethod) || "N/A"), 1)
                        ]),
                        (order == null ? void 0 : order.estimatedDelivery) ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "info-section"
                        }, [
                          createVNode("h4", { class: "info-section-title" }, [
                            createVNode(_component_el_icon, null, {
                              default: withCtx(() => [
                                createVNode(unref(calendar_default))
                              ]),
                              _: 1
                            }),
                            createTextVNode(" Estimated Delivery ")
                          ]),
                          createVNode("p", null, toDisplayString(unref($dayjs)(order.estimatedDelivery).format("MMMM D, YYYY")), 1)
                        ])) : createCommentVNode("", true)
                      ]),
                      (order == null ? void 0 : order.orderNotes) ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "order-notes"
                      }, [
                        createVNode("h4", null, "Order Notes"),
                        createVNode("p", null, toDisplayString(order.orderNotes), 1)
                      ])) : createCommentVNode("", true),
                      (order == null ? void 0 : order.trackingNumber) ? (openBlock(), createBlock("div", {
                        key: 1,
                        class: "tracking-info"
                      }, [
                        createVNode(_component_el_icon, null, {
                          default: withCtx(() => [
                            createVNode(unref(location_default))
                          ]),
                          _: 1
                        }),
                        createVNode("span", null, "Tracking:"),
                        createVNode("span", { class: "tracking-number" }, toDisplayString(order.trackingNumber), 1)
                      ])) : createCommentVNode("", true),
                      createVNode("div", { class: "action-buttons" }, [
                        (order == null ? void 0 : order.status) === "delivered" ? (openBlock(), createBlock(_component_UIButton, {
                          key: 0,
                          label: "Reorder",
                          style: { "flex-basis": "fit-content" }
                        }, {
                          icon: withCtx(() => [
                            createVNode(_component_el_icon, null, {
                              default: withCtx(() => [
                                createVNode(unref(refresh_default))
                              ]),
                              _: 1
                            })
                          ]),
                          default: withCtx(() => [
                            createTextVNode(" Reorder ")
                          ]),
                          _: 1
                        })) : createCommentVNode("", true),
                        ((order == null ? void 0 : order.status) === "shipped" || order.status === "pending") && order.trackingNumber ? (openBlock(), createBlock(_component_UIButton, {
                          key: 1,
                          label: "Track Shipment",
                          variant: "success",
                          style: { "flex-basis": "fit-content" }
                        }, {
                          icon: withCtx(() => [
                            createVNode(_component_el_icon, null, {
                              default: withCtx(() => [
                                createVNode(unref(van_default))
                              ]),
                              _: 1
                            })
                          ]),
                          default: withCtx(() => [
                            createTextVNode(" Reorder ")
                          ]),
                          _: 1
                        })) : createCommentVNode("", true)
                      ])
                    ])
                  ])) : createCommentVNode("", true)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div>`);
        });
        _push(`<!--]--></div>`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/orders/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-334eb080"]]);

export { index as default };
//# sourceMappingURL=index-CoO5VmWF.mjs.map
