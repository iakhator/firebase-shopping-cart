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
      <div class="variant">
        <el-form ref="form" :model="form">
          <div class="item__contents-price">
            <span class="item__contents-spec-variant">Quantity :</span>
            <el-input-number v-model="form.num" @change="handleChange" :min="1" :max="3"></el-input-number>
          </div>
          <p class="item__contents-spec-variant">Select variant:</p>
          <el-radio-group v-model="form.variant">
            <el-radio-button
              v-for="variant in item.variant"
              :key="variant"
              :label="variant"
              :value="variant"
              size="small"
            ></el-radio-button>
          </el-radio-group>
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
        variant: '',
        num: 1
      }
    }
  },

  async asyncData({ $axios, params }) {
    const { data } = await $axios.$get(`/api/products/${params.itemId}`)
    return { item: data }
  },

  methods: {
    handleChange(value) {
      console.log(value)
    }
  }
}
</script>

<style scoped lang="scss">
// variables
$font-weight-bold: 600;
$off-black: #1b1a1a;
$gray: #dcdfe6;

.item__contents {
  padding: 2px 35px;

  h3 {
    font-weight: $font-weight-bold;
  }

  &-specifications {
    margin-top: 20px;
    position: relative;

    &:after {
      content: '';
      width: 100%;
      border-bottom: solid 1px $gray;
      position: absolute;
      left: 0;
      top: 107%;
      z-index: 99;
    }

    p {
      margin-bottom: 4px;
    }

    .item__contents-spec {
      font-weight: $font-weight-bold;
    }
  }
}

.variant {
  margin-top: 20px;
}

.item__contents-spec-variant {
  font-weight: $font-weight-bold;
  margin-bottom: 5px;
}

.item__contents-price {
  position: relative;
  margin-bottom: 18px;

  &:after {
    content: '';
    width: 100%;
    border-bottom: solid 1px $gray;
    position: absolute;
    left: 0;
    top: 120%;
    z-index: 99;
  }
}
</style>
