<template>
    <div class="el-loading-mask" style="">
        <div class="el-loading-spinner">
            <icon-base
                viewBox="0 0 50 50"
                width="20"
                height="20"
                fill="none"
                class="circular"
            >
                <circle
                    class="path"
                    cx="25"
                    cy="25"
                    r="12"
                    fill="none"
                ></circle>
            </icon-base>
        </div>
    </div>
</template>

<script>
import IconBase from './IconBase'

export default {
    components: {
        IconBase,
    },
}
</script>

<style scoped>
/* .user-icon {
    margin-top: -7px
  } */
</style>
