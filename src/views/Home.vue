<template>
    <div class="warpper">
      <Narbar/>
      <Content/>
    </div>
</template>
<script>
import Narbar from './Narbar'
import Content from './Content'
// import AlbumContent from '../components/AlbumContent'
export default {
  name: 'Home',
  components: {
    Narbar,
    Content
  }
}
</script>
<style lang="scss" scoped>
.warpper{
 width: 100%;
}
</style>
