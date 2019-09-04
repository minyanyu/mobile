<template>
  <div>
    <van-nav-bar title="登录" left-arrow />
    <van-cell-group>
      <van-field
        left-icon="phone-o"
        v-model="user.mobile"
        clearable
        placeholder="请输入手机号码"
        v-validate="'required|digits:11'"
        :error-message="errors.first('mobile')"
        name="mobile"
      />
      <van-field
        left-icon="star-o"

        v-model="user.code"
        clearable
        placeholder="请输入短信验证码"
        v-validate="'required|digits:6'"
        :error-message="errors.first('code')"
        name="code"
      >
        <van-button slot="button" size="small" type="primary">发送验证码</van-button>
      </van-field>
    </van-cell-group>
    <div class="loginBtn">
      <van-button
        :loading="loading"
        loading-type="spinner"
        loading-text="登陆中..."
        type="info"
        class="btn"
        @click="login"
      >登录</van-button>
    </div>
  </div>
</template>

<script>
import { login } from '@/api/user'
import { mapMutations } from 'vuex'
export default {
  data () {
    return {
      user: {
        mobile: '13911111111',
        code: '246810'
      },
      loading: false
    }
  },
  methods: {
    ...mapMutations(['setUser']),
    async login () {
      this.loading = true
      try {
        this.$validator.validate().then(async valid => {
          if (!valid) {
            return
          }
          const res = await login(this.user)
          this.$toast.success('登录成功')
          this.$router.push('/')
          this.setUser(res)
        })
      } catch (error) {
        this.$toast.fail('登陆失败')
      }
      this.loading = false
    }
  },
  created () {
    const dict = {
      custom: {
        mobile: {
          required: '手机号不能为空',
          digits: '手机号码必须是11位的数字'
        },
        code: {
          required: '验证码不能为空',
          digits: '验证码必须是6位的数字'
        }
      }
    }
    this.$validator.localize('custom', dict)
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
