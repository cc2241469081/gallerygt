<template>
    <div class="content">
        <Referrals/>
        <Album/>
    </div>
</template>

<script>
import Referrals from './Contents/Referrals'
import Album from './Contents/Album.'
export default {
  name: 'Content',
  components: {
    Referrals,
    Album
  }
}
</script>

<style lang="scss" scoped>
.content{
    display: block;
    height: 25rem;
    margin-top: .5rem;
}
</style>
