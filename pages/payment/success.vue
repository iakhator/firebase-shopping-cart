<template>
  <el-row class="success__grid">
    <div class="success-text">Your payment was successful</div>
    <div class="success-btn">
      <el-button><nuxt-link to="/">Continue shopping</nuxt-link></el-button>
    </div>
  </el-row>
</template>

<style lang="scss">
  .el-container{
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .success__grid {
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .success-btn{
    margin-top: 20px;
  }

  .success-text{
    font-size: 20px;
  }
</style>
