<template>
  <div>
    <el-row>
      <el-col :xs="8" :sm="6" :md="12" :lg="3" :offset="8">
        <img
          src="https://www.imore.com/sites/imore.com/files/field/image/2019/09/iphone-11-pro-max-midnight-green-select-2019.png"
          class="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}"
          alt="image"
        />
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  components: {}
}
</script>

<style lang="scss">
$off-black: #1b1a1a;

.el-row {
  width: 100vw;
  background: $off-black;
}
.el-col {
  border-radius: 4px;

  img {
    height: 50vw;
    cursor: pointer;
    animation: bounce 1s infinite alternate;
    &:hover {
      transform: rotate(45deg);
    }
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
