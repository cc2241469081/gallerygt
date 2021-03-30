<template>
<el-affix>
     <div class="narbar">
        <div class="narbar__log iconfont" >&#xe681;<p class="narbar__log__title">雨微</p></div>
        <div class="narbar__icon">
         <div class="narbar__icon__item" v-for="(item,index) in ICONLIST" :key="index" @click="() => hendlejmup(index)">
             <span class="iconfont " v-html="item.icon"></span>
         </div>
        </div>
    </div>
</el-affix>
</template>

<script>
import { useRouter } from 'vue-router'
const ICONLIST = [{ icon: '&#xe613;', text: '分类' }, { icon: '&#xe7b4;', text: '管理员' }]
const hendleclickjmup = (router) => {
  const routers = router
  const hendlejmup = (num) => {
    if (num === 0) {
      routers.push({ name: 'Home' })
    } else {
      if (localStorage.isLogin) {
        routers.push({ name: 'Admin' })
      } else {
        routers.push({ name: 'User' })
      }
    }
  }
  return { hendlejmup }
}
export default {
  name: 'Narbar',
  setup () {
    const router = useRouter()
    const { hendlejmup } = hendleclickjmup(router)
    return { ICONLIST, hendlejmup }
  }
}
</script>
<style lang="scss" scoped>
.narbar{
    position: absolute;
    top: 0;
    left: 0;
    background-color: #D43C33;
    width: 100%;
    display: flex;
    flex: 1;
    &__icon{
        display: flex;
        flex: 1;
        &__item{
            margin-left: .5rem;
            color: aliceblue;
            font-size: .3rem;
            transform: scale(1.8);
            line-height: .4rem;
        }
    }
    &__log{
       line-height: .4rem;
       color: whitesmoke;
       font-size: .4rem;
       margin-left: .1rem;
       &__title{
        display: inline;
        font-size: .18rem;
        font-family: '时尚中黑';
        line-height: .4rem;
       }
    }
}
</style>
