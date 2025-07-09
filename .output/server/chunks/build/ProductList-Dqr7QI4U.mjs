import { ref, withCtx, unref, createVNode, createBlock, openBlock, Fragment, renderList, toDisplayString, withModifiers, mergeProps, watch, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderAttrs, ssrIncludeBooleanAttr, ssrLooseContain } from 'vue/server-renderer';
import { h as useNuxtApp, g as useRouter, u as useRoute } from './server.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import { E as ElRow } from './index-B0JEEsKt.mjs';
import { d as ElButton, E as ElIcon, s as shopping_cart_default } from './el-button-V0v0dsgs.mjs';
import { U as UIButton } from './UIButton-CG1Ax5gj.mjs';
import { I as IconBase } from './IconBase-KIBH9raF.mjs';
import { S as Spinner } from './Spinner-B8agEsyy.mjs';
import { u as useCurrency } from './useCurrency-jRJRFhrU.mjs';

const _sfc_main$2 = {
  __name: "AppAside",
  __ssrInlineRender: true,
  emits: ["filter-change"],
  setup(__props, { emit: __emit }) {
    useRoute();
    const brands = ["Apple", "Samsung", "Google", "OnePlus", "Xiaomi"];
    const priceRanges = [
      { label: "$0 - $300", min: 0, max: 300 },
      { label: "$300 - $600", min: 300, max: 600 },
      { label: "$600 - $900", min: 600, max: 900 },
      { label: "$900+", min: 900, max: Infinity }
    ];
    const storageOptions = ["64GB", "128GB", "256GB", "512GB", "1TB"];
    const selectedBrands = ref([]);
    const selectedPriceRanges = ref([]);
    const selectedStorage = ref([]);
    const emit = __emit;
    function emitFilters() {
      emit("filter-change", {
        brands: selectedBrands.value,
        priceRanges: selectedPriceRanges.value,
        storage: selectedStorage.value
      });
    }
    watch(
      [selectedBrands, selectedPriceRanges, selectedStorage],
      () => {
        emitFilters();
      },
      { deep: true }
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "sidebar" }, _attrs))} data-v-20721b14><div class="filter-section" data-v-20721b14><h3 class="font-briscolade" data-v-20721b14>Brand</h3><div class="filter-options" data-v-20721b14><!--[-->`);
      ssrRenderList(brands, (brand) => {
        _push(`<label data-v-20721b14><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(selectedBrands.value) ? ssrLooseContain(selectedBrands.value, brand) : selectedBrands.value) ? " checked" : ""}${ssrRenderAttr("value", brand)} data-v-20721b14> ${ssrInterpolate(brand)}</label>`);
      });
      _push(`<!--]--></div></div><div class="filter-section" data-v-20721b14><h3 class="font-briscolade" data-v-20721b14>Price Range</h3><div class="filter-options" data-v-20721b14><!--[-->`);
      ssrRenderList(priceRanges, (range) => {
        _push(`<label data-v-20721b14><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(selectedPriceRanges.value) ? ssrLooseContain(selectedPriceRanges.value, range) : selectedPriceRanges.value) ? " checked" : ""}${ssrRenderAttr("value", range)} data-v-20721b14> ${ssrInterpolate(range.label)}</label>`);
      });
      _push(`<!--]--></div></div><div class="filter-section" data-v-20721b14><h3 class="font-briscolade" data-v-20721b14>Storage</h3><div class="filter-options" data-v-20721b14><!--[-->`);
      ssrRenderList(storageOptions, (storage) => {
        _push(`<label data-v-20721b14><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(selectedStorage.value) ? ssrLooseContain(selectedStorage.value, storage) : selectedStorage.value) ? " checked" : ""}${ssrRenderAttr("value", storage)} data-v-20721b14> ${ssrInterpolate(storage)}</label>`);
      });
      _push(`<!--]--></div></div></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppAside.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-20721b14"]]);
const _sfc_main$1 = {
  __name: "HeartIcon",
  __ssrInlineRender: true,
  props: {
    fill: {
      type: String,
      default: "none"
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(IconBase), mergeProps({
        width: "20",
        height: "20",
        class: "heart-icon",
        fill: __props.fill,
        viewBox: "0 0 29 29"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<path d="M24.9786 4.00292C22.5845 1.53146 19.4963 1.85957 17.2399 4.49161L14.4868 7.69613L11.7396 4.49161C9.48324 1.85957 6.38896 1.53146 4.00092 4.00292C3.39187 4.63377 2.89961 5.40298 2.55428 6.26348C2.20896 7.12398 2.01783 8.05764 1.99261 9.0073C1.9674 9.95696 2.10864 10.9026 2.40765 11.7864C2.70666 12.6702 3.15716 13.4735 3.73159 14.1471L14.4269 27.3212L14.6364 27.0699L14.7022 27.1467L25.2479 14.1471C25.8223 13.4735 26.2728 12.6702 26.5718 11.7864C26.8709 10.9026 27.0121 9.95696 26.9869 9.0073C26.9617 8.05764 26.7705 7.12398 26.4252 6.26348C26.0799 5.40298 25.5876 4.63377 24.9786 4.00292Z" stroke="#3A4651" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path>`);
          } else {
            return [
              createVNode("path", {
                d: "M24.9786 4.00292C22.5845 1.53146 19.4963 1.85957 17.2399 4.49161L14.4868 7.69613L11.7396 4.49161C9.48324 1.85957 6.38896 1.53146 4.00092 4.00292C3.39187 4.63377 2.89961 5.40298 2.55428 6.26348C2.20896 7.12398 2.01783 8.05764 1.99261 9.0073C1.9674 9.95696 2.10864 10.9026 2.40765 11.7864C2.70666 12.6702 3.15716 13.4735 3.73159 14.1471L14.4269 27.3212L14.6364 27.0699L14.7022 27.1467L25.2479 14.1471C25.8223 13.4735 26.2728 12.6702 26.5718 11.7864C26.8709 10.9026 27.0121 9.95696 26.9869 9.0073C26.9617 8.05764 26.7705 7.12398 26.4252 6.26348C26.0799 5.40298 25.5876 4.63377 24.9786 4.00292Z",
                stroke: "#3A4651",
                "stroke-width": "3",
                "stroke-linecap": "round",
                "stroke-linejoin": "round"
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icons/HeartIcon.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "ProductList",
  __ssrInlineRender: true,
  props: {
    products: {
      type: Array,
      default: () => []
    },
    isLoading: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const isFavHovered = ref("");
    const { toUSD } = useCurrency();
    const { $toast } = useNuxtApp();
    const router = useRouter();
    function addToWishlist() {
      console.log("wish list");
    }
    function handleHello() {
      $toast.success("Hello");
    }
    function handleFilterChange(filter) {
      const query = formatFiltersToQuery(filter);
      router.push({ path: "/", query });
    }
    function formatFiltersToQuery(filters) {
      var _a, _b, _c;
      const query = {};
      if ((_a = filters.brands) == null ? void 0 : _a.length) {
        query.brands = filters.brands.join(",");
      }
      if ((_b = filters.priceRanges) == null ? void 0 : _b.length) {
        query.priceRanges = filters.priceRanges.map(
          (price) => {
            var _a2, _b2;
            return (_b2 = (_a2 = price.label) == null ? void 0 : _a2.replace(/[^0-9\-+]/g, "")) == null ? void 0 : _b2.replace(/\+/g, "+");
          }
        ).join(",");
      }
      if ((_c = filters.storage) == null ? void 0 : _c.length) {
        query.storage = filters.storage.join(",");
      }
      return query;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppAside = __nuxt_component_0;
      const _component_el_row = ElRow;
      const _component_el_button = ElButton;
      const _component_el_icon = ElIcon;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_AppAside, { onFilterChange: handleFilterChange }, null, _parent));
      if (__props.isLoading) {
        _push(ssrRenderComponent(Spinner, null, null, _parent));
      } else {
        _push(`<div class="main-content" data-v-9bff77de>`);
        if (!__props.products.length) {
          _push(`<div data-v-9bff77de>No products found</div>`);
        } else {
          _push(ssrRenderComponent(_component_el_row, { class: "product__grid" }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div class="product__grid-right" data-v-9bff77de${_scopeId}><ul class="product__grid-w" data-v-9bff77de${_scopeId}><!--[-->`);
                ssrRenderList(__props.products, (item) => {
                  var _a, _b, _c;
                  _push2(`<li class="product__grid-w__list" data-v-9bff77de${_scopeId}><a class="_p"${ssrRenderAttr("href", `/${item.categoryId}/${item.id}`)} data-v-9bff77de${_scopeId}><span class="product__grid-w__list-img" data-v-9bff77de${_scopeId}><img${ssrRenderAttr("src", item == null ? void 0 : item.imageUrl)} alt="" loading="lazy" data-v-9bff77de${_scopeId}></span><div class="product__grid-w__list-content" data-v-9bff77de${_scopeId}><span class="product__grid-w__list-title multi-line-ellipsis" data-v-9bff77de${_scopeId}>${ssrInterpolate(item.name)}</span><p data-v-9bff77de${_scopeId}>${ssrInterpolate((_a = item == null ? void 0 : item.bundles[0]) == null ? void 0 : _a.ram)} / ${ssrInterpolate((_b = item == null ? void 0 : item.bundles[0]) == null ? void 0 : _b.storage)}</p><div class="product__grid-w__list-price_fav" data-v-9bff77de${_scopeId}><span class="product__grid-w__list-price" data-v-9bff77de${_scopeId}>${ssrInterpolate(unref(toUSD)(
                    ((_c = item == null ? void 0 : item.bundles[0]) == null ? void 0 : _c.price) || item.price
                  ))}</span>`);
                  _push2(ssrRenderComponent(_component_el_button, {
                    text: "",
                    circle: "",
                    onClick: addToWishlist,
                    onMouseenter: ($event) => isFavHovered.value = item.id,
                    onMouseleave: ($event) => isFavHovered.value = "",
                    class: "product__grid-w__list-favourite"
                  }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(ssrRenderComponent(_sfc_main$1, {
                          fill: unref(isFavHovered) === item.id ? "#000" : "none"
                        }, null, _parent3, _scopeId2));
                      } else {
                        return [
                          createVNode(_sfc_main$1, {
                            fill: unref(isFavHovered) === item.id ? "#000" : "none"
                          }, null, 8, ["fill"])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent2, _scopeId));
                  _push2(`</div><div class="product__grid-btn" data-v-9bff77de${_scopeId}>`);
                  _push2(ssrRenderComponent(unref(UIButton), {
                    size: "large",
                    class: "black flex-3",
                    onClick: handleHello,
                    label: "Add to cart"
                  }, {
                    icon: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(ssrRenderComponent(_component_el_icon, { class: "mr-2" }, {
                          default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                            if (_push4) {
                              _push4(ssrRenderComponent(unref(shopping_cart_default), null, null, _parent4, _scopeId3));
                            } else {
                              return [
                                createVNode(unref(shopping_cart_default))
                              ];
                            }
                          }),
                          _: 2
                        }, _parent3, _scopeId2));
                      } else {
                        return [
                          createVNode(_component_el_icon, { class: "mr-2" }, {
                            default: withCtx(() => [
                              createVNode(unref(shopping_cart_default))
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 2
                  }, _parent2, _scopeId));
                  _push2(`</div></div></a></li>`);
                });
                _push2(`<!--]--></ul></div>`);
              } else {
                return [
                  createVNode("div", { class: "product__grid-right" }, [
                    createVNode("ul", { class: "product__grid-w" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(__props.products, (item) => {
                        var _a, _b, _c;
                        return openBlock(), createBlock("li", {
                          key: item.id,
                          class: "product__grid-w__list"
                        }, [
                          createVNode("a", {
                            class: "_p",
                            href: `/${item.categoryId}/${item.id}`
                          }, [
                            createVNode("span", { class: "product__grid-w__list-img" }, [
                              createVNode("img", {
                                src: item == null ? void 0 : item.imageUrl,
                                alt: "",
                                loading: "lazy"
                              }, null, 8, ["src"])
                            ]),
                            createVNode("div", { class: "product__grid-w__list-content" }, [
                              createVNode("span", { class: "product__grid-w__list-title multi-line-ellipsis" }, toDisplayString(item.name), 1),
                              createVNode("p", null, toDisplayString((_a = item == null ? void 0 : item.bundles[0]) == null ? void 0 : _a.ram) + " / " + toDisplayString((_b = item == null ? void 0 : item.bundles[0]) == null ? void 0 : _b.storage), 1),
                              createVNode("div", { class: "product__grid-w__list-price_fav" }, [
                                createVNode("span", { class: "product__grid-w__list-price" }, toDisplayString(unref(toUSD)(
                                  ((_c = item == null ? void 0 : item.bundles[0]) == null ? void 0 : _c.price) || item.price
                                )), 1),
                                createVNode(_component_el_button, {
                                  text: "",
                                  circle: "",
                                  onClick: withModifiers(addToWishlist, ["prevent"]),
                                  onMouseenter: ($event) => isFavHovered.value = item.id,
                                  onMouseleave: ($event) => isFavHovered.value = "",
                                  class: "product__grid-w__list-favourite"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_sfc_main$1, {
                                      fill: unref(isFavHovered) === item.id ? "#000" : "none"
                                    }, null, 8, ["fill"])
                                  ]),
                                  _: 2
                                }, 1032, ["onMouseenter", "onMouseleave"])
                              ]),
                              createVNode("div", { class: "product__grid-btn" }, [
                                createVNode(unref(UIButton), {
                                  size: "large",
                                  class: "black flex-3",
                                  onClick: withModifiers(handleHello, ["prevent"]),
                                  label: "Add to cart"
                                }, {
                                  icon: withCtx(() => [
                                    createVNode(_component_el_icon, { class: "mr-2" }, {
                                      default: withCtx(() => [
                                        createVNode(unref(shopping_cart_default))
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ])
                            ])
                          ], 8, ["href"])
                        ]);
                      }), 128))
                    ])
                  ])
                ];
              }
            }),
            _: 1
          }, _parent));
        }
        _push(`</div>`);
      }
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProductList.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ProductList = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-9bff77de"]]);

export { ProductList as P };
//# sourceMappingURL=ProductList-Dqr7QI4U.mjs.map
