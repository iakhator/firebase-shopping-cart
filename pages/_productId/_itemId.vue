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
    <el-col :md="14">{{item.variant}}</el-col>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      itemId: ''
    }
  },

  async asyncData({ $axios, params }) {
    const { data } = await $axios.$get(`/api/products/${params.itemId}`)
    return { item: data }
  }
}
</script>
