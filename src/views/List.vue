<template>
  <div class="list-box">
    <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
      <el-tab-pane label="用户管理" name="first">
        <v-tab1></v-tab1>
      </el-tab-pane>
      <el-tab-pane label="配置管理" name="second">
        <div class="list-body">配置管理</div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import tab1 from './List-tab1'
export default {
    data() {
      return {
        loading:false,
        activeName2: 'first'
      }
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    },
    components: {
      'v-tab1': tab1,
    }
  }
</script>
