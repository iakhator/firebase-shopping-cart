<template>
  <el-row class="product__grid">
    <el-col :md="10">
      <div>
        <img
          :src="item.imageUrl"
          class="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}"
          alt
        />
      </div>
    </el-col>
    <el-col :md="14" class="item__contents">
      <h3>{{ item.title }}</h3>
      <div class="item__contents-specifications">
        <p v-for="(specification, key) in item.specification" :key="key">
          <span class="item__contents-spec">{{ key }} :</span>
          {{ specification }}
        </p>
      </div>
      <div>
        <el-form ref="form" :model="form">
          <el-form-item label="Variant" class="item__contents-spec__variant">
            <el-radio-group v-model="form.variant">
              <el-radio
                v-for="variant in item.variant"
                :key="variant"
                :label="variant"
                :value="variant"
              ></el-radio>
            </el-radio-group>
          </el-form-item>
        </el-form>
      </div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      itemId: '',
      form: {
        variant: ''
      }
    }
  },

  async asyncData({ $axios, params }) {
    const { data } = await $axios.$get(`/api/products/${params.itemId}`)
    return { item: data }
  }
}
</script>

<style scoped lang="scss">
// variables
$font-weight-bold: 600;
$off-black: #1b1a1a;

.item__contents {
  padding: 2px 35px;

  h3 {
    font-weight: $font-weight-bold;
  }

  &-specifications {
    margin-top: 20px;

    p {
      margin-bottom: 4px;
    }

    .item__contents-spec {
      font-weight: $font-weight-bold;
    }
  }
}

.el-form-item__label {
  font-size: 16px;
  color: $off-black !important;
}

.el-radio {
  margin-right: 15px;
}

.el-radio__input.is-checked .el-radio__inner {
  border-color: $off-black;
  background: $off-black;
}

.el-radio__inner {
  width: 18px !important;
  height: 18px !important;
}

.el-radio__input.is-checked + .el-radio__label {
  color: $off-black;
}
</style>
