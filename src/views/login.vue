<template>
  <div>
    <van-nav-bar title="登录" left-arrow />
    <van-cell-group>
      <van-field
        left-icon="phone-o"
        required
        v-model="user.mobile"
        clearable
        placeholder="请输入手机号码"
      />
      <van-field left-icon="star-o" required v-model="user.code" clearable placeholder="请输入短信验证码">
        <van-button slot="button" size="small" type="primary">发送验证码</van-button>
      </van-field>
    </van-cell-group>
    <div class="loginBtn">
      <van-button type="info" class="btn" @click="login">登录</van-button>
    </div>
  </div>
</template>

<script>
import { login } from '@/api/user'
console.log(login)
export default {
  data () {
    return {
      user: {
        mobile: '13911111111',
        code: '246810'
      }
    }
  },
  methods: {
    async login () {
      try {
        const res = await login(this.user)
        this.$toast.success('登录成功')
        this.$router.push('/')
        this.$store.commit('setUser', res)
      } catch (error) {
        this.$toast.fail('登陆失败')
      }
    }
  }
}
</script>

<style lang = 'less' scoped>
.loginBtn {
  padding: 20px;
  .btn {
    width: 100%;
  }
}
</style>
