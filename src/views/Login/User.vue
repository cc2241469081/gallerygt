<template>
<div class="User">
    <div class="User__icon iconfont" @click="hendleclickblack">&#xe608;</div>
    <div class="User__hend">
        <van-image
  round
  width="1rem"
  height="1rem"
  src="https://img01.yzcdn.cn/vant/cat.jpeg"
/>
    </div>
    <div class="User__pwd">
 <van-password-input
  :value="value"
  :focused="showKeyboard"
  @focus="showKeyboard = true"
  :lenght="6"
  :mask="false"
/>
<!-- 数字键盘 -->
<van-number-keyboard
  v-model="value"
  :show="showKeyboard"
  @blur="showKeyboard = false"
  @input="hendlechengeshowKeyboard"
  :maxlength="6"
/>
    </div>
</div>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { Toast } from 'vant'
const hendlechengeclick = (value, myvalue, router) => {
  const hendlechengeclickkey = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(value.value)
      }, 0)
    })
  }
  const hendlechengeshowKeyboard = async () => {
    myvalue = await hendlechengeclickkey()
    const valuelenght = [...myvalue].length
    if (valuelenght === 6) {
      if (myvalue === '010930') {
        Toast('可以跳转')
        router.push({ name: 'Admin' })
        localStorage.isLogin = true
      } else {
        Toast.fail('请联系画作者获取上传权限')
      }
    }
  }
  return { hendlechengeshowKeyboard }
}
export default {
  name: 'User',
  setup () {
    const showKeyboard = ref(true)
    const value = ref('')
    const myvalue = ''
    const router = useRouter()
    const hendleclickblack = () => {
      router.push({ name: 'Home' })
    }
    const { hendlechengeshowKeyboard } = hendlechengeclick(value, myvalue, router)
    return { value, showKeyboard, hendlechengeshowKeyboard, hendleclickblack }
  }
}
</script>

<style lang="scss" scoped>
.User{
  position:absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
   background-image: url('https://z3.ax1x.com/2021/03/27/6zblGR.jpg');
    &__hend{
   width:1rem;
   height:1rem;
     margin: 45% auto;
    }
    &__icon{
        color: #f1f1f1;
        font-size: .3rem;
        margin: .1rem  0 0 .1rem ;
    }
}

</style>
