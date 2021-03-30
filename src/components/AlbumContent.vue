<template>
 <van-overlay :show="show" @click="show = false">
  <div class="wrapper" @click.stop>
    <div class="block" />
  </div>
</van-overlay>
</template>

<script>
export default {
  name: 'AlbumConten',
  setup () {
    const show = true
    return { show }
  }
}
</script>

<style lang="scss" scoped>
  .wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
</style>
