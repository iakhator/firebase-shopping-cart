<template>
  <el-row class="product__grid">
    <div class="product__grid-right">
      <ul class="product__grid-w">
        <li v-for="item in products" :key="item.uid" class="product__grid-w__list">
          <a class="_p" :href="`/product/${item.categoryId}/${item.id}`">
            <span class="product__grid-w__list-img">
              <img :src="item.imageUrl" alt />
            </span>
            <span class="product__grid-w__list-title">{{ item.itemTitle }}</span>
            <span class="product__grid-w__list-price">Price: {{ item.price | toUSD }}</span>
          </a>
        </li>
      </ul>
    </div>
  </el-row>
</template>

<script>
export default {
  props: {
    products: {
      type: Array,
      required: true
    }
  },

  methods: {}
}
</script>

<style lang="scss" scoped>
$off-black: #1b1a1a;
$white: #ffffff;

.el-col {
  border-radius: 4px;

  img {
    height: 50vw;
    margin-left: 8vw;
    cursor: pointer;
    animation: bounce 1s infinite alternate;
  }
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}

.deal {
  color: $white;
  margin: 0;
  font-size: 4vw;
  position: absolute;
  z-index: 99;
}

.deal-one {
  top: 30%;
  left: 30%;
}

.deal-two {
  top: 60%;
  left: 60%;
}

@keyframes bounce {
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(-15px);
  }
}
@-webkit-keyframes bounce {
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(-15px);
  }
}
</style>
