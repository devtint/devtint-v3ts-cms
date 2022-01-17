<template>
  <div class="login-panel">
    <h1>后台管理系统</h1>
    <el-tabs type="border-card" stretch>
      <el-tab-pane>
        <template #label>
          <span>
            <el-icon><avatar /></el-icon> 账号登录
          </span>
        </template>
        <login-account></login-account>
      </el-tab-pane>
      <el-tab-pane>
        <template #label>
          <span>
            <el-icon><iphone /></el-icon> 手机登录
          </span>
        </template>
        <login-phone></login-phone>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import loginPhone from './login-phone.vue'
import loginAccount from './login-account.vue'

export default defineComponent({
  components: {
    loginPhone,
    loginAccount
  },
  setup() {
    return {}
  }
})
</script>

<style scoped>
.login-panel {
  margin-bottom: 150px;
  width: 320px;

  .title {
    text-align: center;
  }

  .account-control {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
  }

  .login-btn {
    width: 100%;
    margin-top: 10px;
  }
}
</style>
