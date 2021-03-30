<template>
<div class="Album">
<div class="Album__title">
    <div class="Album__title__icon"></div>
    <span class="Album__title__content" >相册分类</span>
    </div>
    <div class="Album__content">
    <div :class="{Album__content__item: true, margin: index % 2 !== 0}"
    v-for="(item,index) in ALBUMLIST.value" :key="index"
    @click="() => GetAlbumList(item)">
 <img :src="item.url" class="Album__content__item__img">
 <div class="Album__content__item__text">相册1</div>
</div>
    </div>
</div>
</template>

<script>
import { reactive } from 'vue'
import Client from '../../oss/index'
import { ImagePreview } from 'vant'
const ALBUMLIST = reactive([])
const ALBUMIMGLIST = reactive([])
const Getimglist = async () => {
  let versionListing = null
  const prefix = 'Album-cover/'
  versionListing = await Client.getBucketVersions({
    prefix,
    delimiter: '/'
  })
  ALBUMLIST.value = versionListing.objects
  ALBUMLIST.value.shift()
}
const GetAlbumList = async (item) => {
  ALBUMIMGLIST.length = 0
  let Albumpath = item.name
  Albumpath = Albumpath.slice(12, -4)
  console.log(Albumpath)
  let versionListing = null
  const prefix = `${Albumpath}/`
  versionListing = await Client.getBucketVersions({
    prefix,
    delimiter: '/'
  })
  for (const itmes of versionListing.objects) {
    ALBUMIMGLIST.push(itmes.url)
  }
  ALBUMIMGLIST.shift()
  ImagePreview(ALBUMIMGLIST)
}
export default {
  setup () {
    Getimglist()
    return { ALBUMLIST, Getimglist, GetAlbumList }
  }
}
</script>

<style lang="scss" scoped>
.Album{
    &__content{
      display: flex;
      flex: 1;
      flex-wrap: wrap;
       &__item{
    &__img{
        width: 1.5rem;
    }
    &__text{
        width: 1.5rem;
        text-align: center;
    }
    }
    }
    &__title{
   height: .45rem;
   font-size: .16rem;
    &__icon{
        width: .05rem;
        height: .18rem;
        border-radius: .05rem;
        background-color: #D43C33;
        display: inline-block;
        margin-right:.02rem ;
    }
    &__content{
        position: absolute;
        top: 4.62rem;
    }
  }
}
.margin{
    margin-left: .75rem;
}
</style>
