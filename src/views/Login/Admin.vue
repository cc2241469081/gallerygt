<template>
<div class="admin">
    <van-dropdown-menu>
  <van-dropdown-item v-model="state.value1" :options="option1"  @change="hendlechengezhuangtai" />
  </van-dropdown-menu>
    <div class="admin__icon iconfont " @click="hendlechengeclickblack">&#xe608; </div>
    <div class="admin__upled">
        <van-uploader v-model="fileList" :after-read="afterRead" />
        </div>
    </div>
</template>

<script>
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
let albumname = ''
const OSS = require('ali-oss')
const Client = new OSS({
  region: 'oss-cn- ',
  accessKeyId: ' ',
  accessKeySecret: ' ',
  bucket: ' '
})
const uplodimg = async (file) => {
  const rueslt = await Client.put(`${albumname}/${Math.random()}-${file.file.name}`, file.file)
  if (rueslt.res.status === 200) {
    file.status = 'done'
    file.message = '上传完成'
  }
}
const fileList = ref([])
const hendleclickblack = (router) => {
  const hendlechengeclickblack = () => {
    router.push({ name: 'Home' })
  }
  return { hendlechengeclickblack }
}
const state = reactive({
  value1: 0
})
const option1 = [
  { text: '推荐画', value: 0 },
  { text: '相册1', value: 1 }
]
const hendlechengezhuangtai = (value) => {
  if (value === 0) {
    albumname = 'gallery-img'
  } else {
    albumname = 'referrals-img'
  }
}
export default {
  name: 'Admin',
  setup () {
    const router = useRouter()
    const { hendlechengeclickblack } = hendleclickblack(router)
    const afterRead = (file) => {
      file.status = 'uploading'
      file.message = '上传中...'
      uplodimg(file)
    }

    return {
      fileList,
      afterRead,
      hendlechengeclickblack,
      state,
      option1,
      hendlechengezhuangtai
    }
  }
}
</script>

<style lang="scss" scoped>
.admin{
    position: absolute;
    top:0;
    left: 0;
    bottom: 0;
    right: 0;
    background-image: url('https://bucket-sywgallery.oss-cn-beijing.aliyuncs.com/gallery-img/89de13a7e5fdb777d84bfaf3c2e666d4.jpeg');
    background-repeat:no-repeat;
    &__upled{
      padding-top: .06rem;
      padding-left: .17rem;
      margin-top:90% ;
      background: #f1f1f1;
      border-radius: .05rem;
    }
    &__icon{
        color: #f1f1f1;
        font-size: .4rem;
        margin: .1rem 0  0 .1rem;
    }
}
</style>
