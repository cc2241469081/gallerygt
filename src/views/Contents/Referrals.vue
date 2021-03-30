<template>
   <div class="referrals">
       <div class="referrals__title"><div class="referrals__title__icon"></div><span class="referrals__title__content">推荐作品</span></div>
       <div class="referrals__show">
           <div :class="{ referrals__show__item:true, margin1: index === 1 || index ===4 }"
           v-for="(item,index) in SHOWLISTS"
           :key="index"
           @click="() => hendlechengecount(item)">
               <!-- <img :src="item.url" class="referrals__show__item__img"> -->
               <van-image :src="item.url" class="referrals__show__item__img">
                <template v-slot:loading>
                    <van-loading type="spinner" size="20" />
                </template>
                </van-image>
               <div class="referrals__show__item__content">{{item.name}}</div>
               <span class="referrals__show__item__count iconfont">&#xe722;{{imgparticulars.lookcount}}</span>
           </div>
       </div>
   </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
import { useStore } from 'vuex'
import Client from '../../oss/index'
import { ImagePreview } from 'vant'
const SHOWLIST = reactive([])
const SHOWLISTS = reactive([])
const Getimglist = async () => {
  SHOWLISTS.length = 0
  let versionListing = null
  const prefix = 'referrals-img/'
  versionListing = await Client.getBucketVersions({
    prefix,
    delimiter: '/'
  })
  console.log(versionListing)
  SHOWLIST.value = versionListing.objects
  SHOWLIST.value.shift()
  for (const items of SHOWLIST.value) {
    const showobj = {}
    showobj.url = items.url
    showobj.name = items.name.slice(14, -4)
    SHOWLISTS.push(showobj)
  }
}
export default {
  setup () {
    const store = useStore()
    const hendlechengecount = (item) => {
      const ImagePreviewList = []
      ImagePreviewList.push(item.url)
      store.commit('add')
      console.log(ImagePreviewList)
      ImagePreview(ImagePreviewList)
    }
    Getimglist()
    const { imgparticulars } = toRefs(store.state)
    return { SHOWLISTS, imgparticulars, hendlechengecount }
  }
}
</script>

<style lang="scss" scoped>
.referrals{
&__title{
   height: .45rem;
   padding-top:.2rem ;
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
        top: .68rem;
    }
}
&__show{
    height: 3.50rem;
    display: flex;
    width: 3.75rem;
    flex-wrap: wrap;
    &__item{
        height: 1.7rem;
        &__img{
            height: 1.23rem;
            width: 1.23rem;
        }
        &__content{
            width:1.23rem;
            font-size: .14rem;
            height: .4rem;
            word-break: break-all;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            overflow: hidden;

        }
        &__count{
         position: relative;
         bottom: 1.7rem;
         color: #f1f1f1;
         left: .8rem;
         font-size: .12rem;
        }
    }
}
}
.margin1{
    margin: 0 .03rem 0 .03rem;
}
</style>
